"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// A flat bronze scale: shown while the 3D scene loads, and instead of it
// when WebGL isn't available.
function ScaleFallback() {
  return (
    <svg viewBox="0 0 320 300" className="mx-auto h-full max-h-[26rem] w-auto" aria-hidden="true" focusable="false">
      <g fill="none" stroke="#cfa96f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M160,40 V260" />
        <path d="M38,70 L282,70" />
        <circle cx="160" cy="34" r="8" fill="#cfa96f" />
        <path d="M38,70 L12,170 M38,70 L64,170" />
        <path d="M282,70 L256,170 M282,70 L308,170" />
        <path d="M6,170 Q38,200 70,170 Z" fill="#cfa96f" fillOpacity="0.25" />
        <path d="M250,170 Q282,200 314,170 Z" fill="#cfa96f" fillOpacity="0.25" />
        <path d="M110,262 H210 M95,276 H225" />
      </g>
    </svg>
  );
}

const ScaleScene = dynamic(() => import("./ScaleScene"), {
  ssr: false,
  loading: () => <ScaleFallback />,
});

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function Scale({ label }: { label: string }) {
  const [webgl, setWebgl] = useState<boolean | null>(null);
  useEffect(() => setWebgl(hasWebGL()), []);

  return (
    <div role="img" aria-label={label} className="relative h-full w-full">
      {webgl ? <ScaleScene /> : <ScaleFallback />}
    </div>
  );
}
