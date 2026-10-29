"use client";

import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import type { Content } from "@/lib/content";

type Errors = Partial<Record<"name" | "phone" | "matter", string>>;

// Iraqi mobile: 07XXXXXXXXX, optionally written as +9647XXXXXXXXX.
function normalizePhone(raw: string) {
  const digits = raw.replace(/[\s-]/g, "");
  if (/^\+9647\d{9}$/.test(digits)) return "0" + digits.slice(4);
  return digits;
}

const field =
  "w-full rounded-md border border-rule bg-white px-4 py-3 text-ink placeholder:text-ink-soft/60 transition-colors focus:border-diorite focus:outline-none aria-[invalid=true]:border-[#b42318]";

export function ConsultationForm({ t, areas }: { t: Content["contact"]; areas: Content["practice"]["items"] }) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(data.get("name") ?? "").trim()) next.name = t.errors.name;
    if (!/^07\d{9}$/.test(normalizePhone(String(data.get("phone") ?? "")))) next.phone = t.errors.phone;
    if (!data.get("matter")) next.matter = t.errors.matter;
    setErrors(next);

    const first = Object.keys(next)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setDone(true);
    requestAnimationFrame(() => doneRef.current?.focus());
  }

  if (done) {
    return (
      <div
        ref={doneRef}
        tabIndex={-1}
        role="status"
        className="rounded-lg border border-rule bg-white p-8 focus:outline-none sm:p-10"
      >
        <CheckCircle2 className="h-10 w-10 text-bronze" aria-hidden="true" />
        <h3 className="mt-5 text-2xl font-semibold text-ink">{t.doneTitle}</h3>
        <p className="mt-3 max-w-prose text-ink-soft">{t.doneBody}</p>
        <button
          type="button"
          onClick={() => {
            setDone(false);
            setErrors({});
          }}
          className="mt-8 rounded-md border border-diorite px-5 py-2.5 font-medium text-diorite transition-colors hover:bg-diorite hover:text-limestone"
        >
          {t.again}
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="rounded-lg border border-rule bg-white p-6 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
            {t.name}
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={field}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-[#b42318]">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink">
            {t.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            dir="ltr"
            placeholder={t.phoneHint}
            className={`${field} text-start`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-2 text-sm text-[#b42318]">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="matter" className="mb-2 block text-sm font-medium text-ink">
            {t.matter}
          </label>
          <select
            id="matter"
            name="matter"
            defaultValue=""
            className={field}
            aria-invalid={!!errors.matter}
            aria-describedby={errors.matter ? "matter-error" : undefined}
          >
            <option value="" disabled>
              {t.matterPlaceholder}
            </option>
            {areas.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.matter && (
            <p id="matter-error" className="mt-2 text-sm text-[#b42318]">
              {errors.matter}
            </p>
          )}
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="mb-2 text-sm font-medium text-ink">{t.via}</legend>
          <div className="flex gap-3">
            {[
              { value: "call", label: t.call },
              { value: "whatsapp", label: t.whatsapp },
            ].map((opt, i) => (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-rule px-4 py-2 text-ink has-[:checked]:border-diorite has-[:checked]:bg-diorite/5 has-[:checked]:text-diorite"
              >
                <input
                  type="radio"
                  name="via"
                  value={opt.value}
                  defaultChecked={i === 0}
                  className="accent-[#23282e]"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="sm:col-span-2">
          <label htmlFor="summary" className="mb-2 block text-sm font-medium text-ink">
            {t.summary}
          </label>
          <textarea
            id="summary"
            name="summary"
            rows={3}
            aria-describedby="summary-hint"
            className={`${field} resize-y`}
          />
          <p id="summary-hint" className="mt-2 text-sm text-ink-soft">
            {t.summaryHint}
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-md bg-diorite px-6 py-3.5 text-base font-medium text-limestone transition-colors hover:bg-bronze sm:w-auto"
      >
        {t.submit}
      </button>
    </form>
  );
}
