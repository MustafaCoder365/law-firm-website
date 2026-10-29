"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// A bronze scale of justice built from primitives (no model files).
// It rises in on load, sways while the case is "open", follows the
// pointer a little, and turns and settles into balance as you scroll.

const BEAM_HALF = 1.55;
const PIVOT_Y = 3.3;
const HANG = 1.55; // distance from beam end down to the pan rim

const bronze = new THREE.MeshStandardMaterial({ color: "#b98b4c", metalness: 1, roughness: 0.3 });
const darkBronze = new THREE.MeshStandardMaterial({ color: "#8a6331", metalness: 1, roughness: 0.4 });
const stone = new THREE.MeshStandardMaterial({ color: "#2d343c", metalness: 0.15, roughness: 0.55 });

// A soft round shadow drawn once into a small texture: far cheaper than a
// real-time contact shadow, and the base is round anyway.
function GroundShadow() {
  const texture = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 128;
    const g = c.getContext("2d")!;
    const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, "rgba(0,0,0,0.6)");
    grad.addColorStop(0.55, "rgba(0,0,0,0.25)");
    grad.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = grad;
    g.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  }, []);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, 0]}>
      <planeGeometry args={[3.6, 3.6]} />
      <meshBasicMaterial map={texture} transparent depthWrite={false} />
    </mesh>
  );
}

// Studio reflections for the bronze, computed once when the scene starts
// (a live environment re-rendered every frame was the main cost).
function StudioEnvironment() {
  const gl = useThree((s) => s.gl);
  const scene = useThree((s) => s.scene);
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const room = new RoomEnvironment();
    const env = pmrem.fromScene(room, 0.04).texture;
    scene.environment = env;
    scene.environmentIntensity = 0.9;
    return () => {
      scene.environment = null;
      env.dispose();
      pmrem.dispose();
      room.dispose();
    };
  }, [gl, scene]);
  return null;
}

// Renders frames only while the scene is on screen. (Switching the canvas
// frameloop prop doesn't reliably stop its loop once it has started, so the
// canvas runs "on demand" and this asks for each frame.)
function FrameDriver({ active }: { active: boolean }) {
  const invalidate = useThree((s) => s.invalidate);
  useEffect(() => {
    if (!active) return;
    let id = 0;
    const tick = () => {
      invalidate();
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [active, invalidate]);
  return null;
}

function easeOutCubic(x: number) {
  return 1 - Math.pow(1 - x, 3);
}

function Pan() {
  // A shallow bowl from a lathe profile.
  const geometry = useMemo(() => {
    const pts = [
      new THREE.Vector2(0, -0.18),
      new THREE.Vector2(0.3, -0.16),
      new THREE.Vector2(0.52, -0.08),
      new THREE.Vector2(0.62, 0.02),
      new THREE.Vector2(0.64, 0.04),
    ];
    return new THREE.LatheGeometry(pts, 48);
  }, []);
  const chains = useMemo(
    () =>
      [0, 1, 2].map((i) => {
        const a = (i / 3) * Math.PI * 2 + Math.PI / 6;
        const end = new THREE.Vector3(Math.cos(a) * 0.6, -HANG, Math.sin(a) * 0.6);
        const len = end.length();
        const mid = end.clone().multiplyScalar(0.5);
        const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, -1, 0), end.clone().normalize());
        return { mid, len, quat };
      }),
    [],
  );
  return (
    <group>
      {chains.map((c, i) => (
        <mesh key={i} position={c.mid} quaternion={c.quat} material={darkBronze}>
          <cylinderGeometry args={[0.012, 0.012, c.len, 6]} />
        </mesh>
      ))}
      <mesh position={[0, -HANG, 0]} geometry={geometry}>
        <meshStandardMaterial attach="material" color="#b98b4c" metalness={1} roughness={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export type ScaleControl = { rotation: number; tilt: number };

function Scale({
  progress,
  pointer,
  reduced,
  control,
}: {
  progress: React.RefObject<number>;
  pointer: React.RefObject<THREE.Vector2>;
  reduced: boolean;
  control?: React.RefObject<ScaleControl>;
}) {
  // Wait for the intro curtain on a first visit.
  const [delay] = useState(() =>
    typeof document !== "undefined" &&
    document.documentElement.dataset.intro !== "seen" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    !control
      ? 1.9
      : 0,
  );
  const root = useRef<THREE.Group>(null);
  const beam = useRef<THREE.Group>(null);
  const left = useRef<THREE.Group>(null);
  const right = useRef<THREE.Group>(null);
  const start = useRef<number | null>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (start.current === null) start.current = t;
    const intro = reduced ? 1 : easeOutCubic(Math.min(1, Math.max(0, (t - start.current - delay) / 1.6)));
    const p = progress.current ?? 0;
    const px = pointer.current?.x ?? 0;
    const py = pointer.current?.y ?? 0;

    if (root.current) {
      root.current.position.y = -2.2 * (1 - intro);
      const s = 0.85 + 0.15 * intro;
      root.current.scale.setScalar(s);
      // Turn with scroll, plus a little pointer parallax.
      const targetY = control?.current
        ? control.current.rotation + px * 0.15
        : -0.45 + p * Math.PI * 0.85 + px * 0.25;
      root.current.rotation.y = THREE.MathUtils.lerp(root.current.rotation.y, targetY, 0.08);
      root.current.rotation.x = THREE.MathUtils.lerp(root.current.rotation.x, -py * 0.08, 0.08);
    }

    // Unbalanced at first, settling to level as you scroll.
    const sway = reduced ? 0 : Math.sin(t * 0.9) * 0.05;
    const tilt = control?.current
      ? (control.current.tilt + sway * 0.4) * intro
      : (0.22 + sway) * (1 - p) * intro;
    if (beam.current) beam.current.rotation.z = THREE.MathUtils.lerp(beam.current.rotation.z, tilt, 0.1);
    const angle = beam.current?.rotation.z ?? 0;
    // Pans hang straight down whatever the beam does.
    if (left.current) left.current.rotation.z = -angle;
    if (right.current) right.current.rotation.z = -angle;
  });

  return (
    <group ref={root}>
      {/* Stepped stone base */}
      <mesh position={[0, 0.08, 0]} material={stone}>
        <cylinderGeometry args={[1.15, 1.2, 0.16, 64]} />
      </mesh>
      <mesh position={[0, 0.22, 0]} material={stone}>
        <cylinderGeometry args={[0.8, 0.85, 0.12, 64]} />
      </mesh>
      <mesh position={[0, 0.3, 0]} material={bronze}>
        <cylinderGeometry args={[0.5, 0.55, 0.06, 48]} />
      </mesh>

      {/* Column with collars */}
      <mesh position={[0, 1.8, 0]} material={bronze}>
        <cylinderGeometry args={[0.07, 0.1, 3, 32]} />
      </mesh>
      {[0.55, 1.6, 3.1].map((y) => (
        <mesh key={y} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]} material={darkBronze}>
          <torusGeometry args={[0.13, 0.03, 12, 40]} />
        </mesh>
      ))}

      {/* Finial */}
      <mesh position={[0, PIVOT_Y + 0.22, 0]} material={bronze}>
        <sphereGeometry args={[0.13, 32, 32]} />
      </mesh>
      <mesh position={[0, PIVOT_Y + 0.45, 0]} material={bronze}>
        <coneGeometry args={[0.07, 0.28, 24]} />
      </mesh>

      {/* Beam, pivoting at the top of the column */}
      <group ref={beam} position={[0, PIVOT_Y, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]} material={bronze}>
          <cylinderGeometry args={[0.05, 0.05, BEAM_HALF * 2, 24]} />
        </mesh>
        <mesh material={darkBronze}>
          <sphereGeometry args={[0.11, 24, 24]} />
        </mesh>
        {[-1, 1].map((side) => (
          <group key={side} position={[side * BEAM_HALF, 0, 0]}>
            <mesh material={bronze}>
              <sphereGeometry args={[0.075, 24, 24]} />
            </mesh>
            <group ref={side < 0 ? left : right}>
              <Pan />
            </group>
          </group>
        ))}
      </group>
    </group>
  );
}

export default function ScaleScene({ control }: { control?: React.RefObject<ScaleControl> }) {
  const wrap = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const pointer = useRef(new THREE.Vector2());
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    const onScroll = () => {
      // Turn and settle over the first ~70% of a screen of scrolling,
      // while the scale is still in view.
      progress.current = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.7)));
    };
    const onMove = (e: PointerEvent) => {
      pointer.current.set((e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });

    // Stop rendering when the scene is off screen.
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (wrap.current) io.observe(wrap.current);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={wrap} className="h-full w-full">
      <Canvas
        frameloop="demand"
        dpr={[1, 1.5]}
        camera={{ position: [0, 2.4, 9.2], fov: 34 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ camera }) => camera.lookAt(0, 1.9, 0)}
      >
        <ambientLight intensity={0.25} />
        <directionalLight position={[3, 6, 4]} intensity={2.2} color="#ffe2b8" />
        <directionalLight position={[-4, 3, -3]} intensity={1.2} color="#9fb3c8" />
        {/* Studio reflections built in place, so nothing is downloaded. */}
<StudioEnvironment />
        <Scale progress={progress} pointer={pointer} reduced={reduced} control={control} />
        <GroundShadow />
        <FrameDriver active={visible} />
      </Canvas>
    </div>
  );
}
