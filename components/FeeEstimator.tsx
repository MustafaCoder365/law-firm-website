"use client";

import { useState } from "react";
import type { Content } from "@/lib/content";

const FACTOR = { simple: 1, standard: 1.6, complex: 2.5 } as const;
const URGENT = 1.25;

// Round to a tidy figure so the range doesn't look falsely precise.
function tidy(n: number) {
  return Math.round(n / 50000) * 50000;
}

export function FeeEstimator({ t, locale }: { t: Content["estimator"]; locale: string }) {
  const [matterId, setMatterId] = useState(t.matters[0].id);
  const [level, setLevel] = useState<keyof typeof FACTOR>("standard");
  const [urgent, setUrgent] = useState(false);

  const matter = t.matters.find((m) => m.id === matterId) ?? t.matters[0];
  const k = FACTOR[level] * (urgent ? URGENT : 1);
  const min = tidy(matter.min * k);
  const max = tidy(matter.max * k);
  const fmt = new Intl.NumberFormat(locale);

  return (
    <div className="grid gap-10 border border-rule bg-paper p-6 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
      <div className="space-y-8">
        <div>
          <label htmlFor="est-matter" className="block text-sm font-semibold text-ink">
            {t.matter}
          </label>
          <select
            id="est-matter"
            value={matterId}
            onChange={(e) => setMatterId(e.target.value)}
            className="mt-2 w-full rounded-[2px] border border-rule bg-limestone px-4 py-3 text-lg text-ink focus:border-diorite focus:outline-none"
          >
            {t.matters.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
        </div>

        <fieldset>
          <legend className="text-sm font-semibold text-ink">{t.complexity}</legend>
          <div className="mt-2 grid gap-3 sm:grid-cols-3">
            {t.levels.map((l) => (
              <label
                key={l.id}
                className="cursor-pointer rounded-[2px] border border-rule px-4 py-3 transition-colors has-[:checked]:border-bronze has-[:checked]:bg-bronze/5 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-bronze"
              >
                <input
                  type="radio"
                  name="est-level"
                  value={l.id}
                  checked={level === l.id}
                  onChange={() => setLevel(l.id)}
                  className="sr-only"
                />
                <span className="block font-medium text-ink">{l.label}</span>
                <span className="mt-0.5 block text-sm text-ink-soft">{l.hint}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={urgent}
            onChange={(e) => setUrgent(e.target.checked)}
            className="h-5 w-5 accent-[#8f6229]"
          />
          <span>
            <span className="font-medium text-ink">{t.urgent}</span>
            <span className="ms-2 text-sm text-ink-soft">{t.urgentHint}</span>
          </span>
        </label>
      </div>

      <div className="flex flex-col justify-between gap-8 bg-diorite p-8 text-limestone">
        <div aria-live="polite">
          <p className="text-sm text-limestone/65">{t.result}</p>
          <p className="mt-2 font-[family-name:var(--font-display)] text-4xl leading-tight text-bronze-light sm:text-5xl">
            <span className="tabular-nums">{fmt.format(min)}</span>
            <span className="mx-2 text-limestone/50">–</span>
            <span className="tabular-nums">{fmt.format(max)}</span>
          </p>
          <p className="mt-1 text-limestone/70">{t.currency}</p>
          <p className="mt-6 text-sm">
            <span className="text-limestone/65">{t.basis}: </span>
            <span className="font-medium">{matter.staged ? t.staged : t.fixed}</span>
          </p>
        </div>
        <div>
          <p className="text-sm text-limestone/55">{t.disclaimer}</p>
          <a
            href="#contact"
            className="mt-5 inline-block rounded-[2px] bg-bronze-light px-6 py-3 font-semibold text-diorite transition-colors hover:bg-limestone"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
