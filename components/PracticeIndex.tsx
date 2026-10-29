"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { Content, Locale } from "@/lib/content";

// Practice areas as a tabbed index: names on one side, the selected area's
// details on the other. Arrow keys move between tabs.
export function PracticeIndex({ t, lang }: { t: Content["practice"]; lang: Locale }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const area = t.items[active];

  function onKeyDown(e: React.KeyboardEvent, i: number) {
    const last = t.items.length - 1;
    let next = -1;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = i === last ? 0 : i + 1;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div role="tablist" aria-orientation="vertical" aria-label={t.title} className="flex flex-col border-s border-rule">
        {t.items.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`tab-${item.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls="practice-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`-ms-px border-s-2 py-4 ps-6 text-start font-[family-name:var(--font-display)] text-2xl transition-colors sm:text-[1.7rem] ${
                selected ? "border-bronze text-ink" : "border-transparent text-ink-soft/70 hover:text-ink"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      <div
        id="practice-panel"
        role="tabpanel"
        aria-labelledby={`tab-${area.id}`}
        tabIndex={0}
        className="self-start border border-rule bg-limestone p-8 sm:p-10"
      >
        <h3 className="text-3xl text-ink sm:text-4xl">{area.name}</h3>
        <p className="mt-4 max-w-[52ch] text-lg text-ink-soft">{area.detail}</p>
        <p className="mt-4 text-sm text-ink-soft">
          <span className="font-medium text-bronze">{t.forLabel}: </span>
          {area.forWhom}
        </p>
        <h4 className="mt-8 text-sm font-semibold text-ink">{t.mattersLabel}</h4>
        <ul className="mt-3 divide-y divide-rule border-y border-rule">
          {area.matters.map((m) => (
            <li key={m} className="py-3 text-ink">
              {m}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href="#contact"
            className="inline-block rounded-[2px] bg-diorite px-6 py-3 font-medium text-limestone transition-colors hover:bg-bronze"
          >
            {t.cta}
          </a>
          <Link
            href={`/${lang}/practice/${area.id}/`}
            className="font-medium text-bronze underline decoration-bronze/40 underline-offset-4 hover:decoration-bronze"
          >
            {t.more}
          </Link>
        </div>
      </div>
    </div>
  );
}
