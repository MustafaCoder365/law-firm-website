"use client";

import { useEffect, useRef, useState } from "react";
import { Scale } from "./Scale";
import type { ScaleControl } from "./ScaleScene";

// "We weigh every case": the section is several screens tall, and its content
// stays pinned while you scroll through it. Each step of the process lights
// up in turn, and the scale tips one way, then the other, until it balances
// on the last step.

const TILTS = [0.26, -0.22, 0.12, 0];
const TURNS = [-0.6, 0.5, -0.25, 0];

type Step = { title: string; detail: string };

export function WeighScene({
  id,
  title,
  lead,
  steps,
  scaleLabel,
  numberLocale,
}: {
  id: string;
  title: string;
  lead: string;
  steps: Step[];
  scaleLabel: string;
  numberLocale: string;
}) {
  const section = useRef<HTMLElement>(null);
  const control = useRef<ScaleControl>({ rotation: TURNS[0], tilt: TILTS[0] });
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const num = new Intl.NumberFormat(numberLocale);

  useEffect(() => {
    const onScroll = () => {
      const el = section.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const span = rect.height - window.innerHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, -rect.top / span)) : 0;
      const i = Math.min(steps.length - 1, Math.floor(p * steps.length));
      control.current.tilt = TILTS[i] ?? 0;
      control.current.rotation = (TURNS[i] ?? 0) + p * 0.5;
      setActive(i);
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps.length]);

  return (
    <section
      ref={section}
      aria-labelledby={id}
      className="relative bg-diorite text-limestone motion-safe:h-[400svh] motion-reduce:h-auto"
    >
      <div className="sticky top-0 flex min-h-[100svh] items-center motion-reduce:static">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-4 px-5 py-10 sm:gap-6 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="order-2 min-w-0 lg:order-1">
            <h2 id={id} className="text-4xl sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 hidden max-w-[46ch] text-lg text-limestone/70 sm:block">{lead}</p>

            <div className="relative mt-6 ps-8 sm:mt-10">
              {/* Progress rail */}
              <span aria-hidden="true" className="absolute start-0 top-1 bottom-1 w-px bg-limestone/15" />
              <span
                aria-hidden="true"
                className="absolute start-0 top-1 w-px bg-bronze-light transition-[height] duration-300"
                style={{ height: `calc(${Math.max(progress, 0.02) * 100}% - 0.5rem)` }}
              />
              <ol className="space-y-4 sm:space-y-6">
                {steps.map((step, i) => {
                  const on = i === active;
                  return (
                    <li
                      key={step.title}
                      aria-current={on ? "step" : undefined}
                      className={`transition-opacity duration-500 ${on ? "opacity-100" : "opacity-35"}`}
                    >
                      <h3 className="flex items-baseline gap-3 text-2xl sm:text-3xl">
                        <span className="font-[family-name:var(--font-display)] text-bronze-light" aria-hidden="true">
                          {num.format(i + 1)}
                        </span>
                        {step.title}
                      </h3>
                      <p
                        className={`mt-2 max-w-[44ch] text-limestone/75 transition-all duration-500 ${
                          on ? "max-h-40" : "max-h-0 overflow-hidden"
                        }`}
                      >
                        {step.detail}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="relative order-1 h-[34svh] min-w-0 overflow-hidden sm:h-[42svh] lg:order-2 lg:h-[70svh]">
            <div
              aria-hidden="true"
              className="absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,rgba(207,169,111,0.14),transparent)]"
            />
            <Scale label={scaleLabel} control={control} />
          </div>
        </div>
      </div>
    </section>
  );
}
