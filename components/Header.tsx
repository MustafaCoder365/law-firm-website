"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { Content, Locale } from "@/lib/content";
import { LogoMark } from "./Logo";

export function Header({ t, lang }: { t: Content; lang: Locale }) {
  const [open, setOpen] = useState(false);
  const other: Locale = lang === "ar" ? "en" : "ar";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: "#practice", label: t.nav.practice },
    { href: "#approach", label: t.nav.approach },
    { href: "#team", label: t.nav.team },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-rule/80 bg-limestone/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-diorite">
          <LogoMark className="h-8 w-auto" />
          <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">{t.brandLong}</span>
        </a>

        <nav aria-label={t.menu} className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.95rem] text-ink-soft">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-bronze">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href={`/${other}/`}
            hrefLang={other}
            lang={other}
            className="text-[0.95rem] text-ink-soft transition-colors hover:text-bronze"
          >
            {t.switchLabel}
          </Link>
          <a
            href="#contact"
            className="rounded-md bg-diorite px-5 py-2.5 text-[0.95rem] font-medium text-limestone transition-colors hover:bg-bronze"
          >
            {t.nav.contact}
          </a>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t.close : t.menu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label={t.menu} className="border-t border-rule bg-limestone lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg text-ink">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center justify-between gap-4 border-t border-rule pt-4 pb-2">
              <Link href={`/${other}/`} hrefLang={other} lang={other} className="text-ink-soft">
                {t.switchLabel}
              </Link>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-md bg-diorite px-5 py-2.5 font-medium text-limestone"
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
