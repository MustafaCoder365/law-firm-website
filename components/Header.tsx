"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { PHONE_DISPLAY, PHONE_LINK, type Content, type Locale } from "@/lib/content";
import { LogoMark } from "./Logo";

// A classic masthead: a thin utility bar, then the firm's name centered
// between two halves of the navigation.
export function Header({
  t,
  lang,
  base = "",
  switchHref,
}: {
  t: Content;
  lang: Locale;
  // Prefix for in-page links when the header is used on another page.
  base?: string;
  switchHref?: string;
}) {
  const [open, setOpen] = useState(false);
  const other: Locale = lang === "ar" ? "en" : "ar";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const start = [
    { href: `${base}#practice`, label: t.nav.practice },
    { href: `${base}#approach`, label: t.nav.approach },
  ];
  const end = [
    { href: `${base}#team`, label: t.nav.team },
    { href: `${base}#faq`, label: t.nav.faq },
  ];
  const linkClass = "text-[0.95rem] text-limestone/80 transition-colors hover:text-bronze-light";

  return (
    <header className="sticky top-0 z-40 bg-diorite text-limestone">
      {/* Utility bar */}
      <div className="hidden border-b border-limestone/10 sm:block">
        <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-5 text-sm text-limestone/65 sm:px-8">
          <span>{t.topbar.hours}</span>
          <div className="flex items-center gap-6">
            <a href={PHONE_LINK} className="inline-flex items-center gap-2 hover:text-limestone">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
            <Link href={switchHref ?? `/${other}/`} hrefLang={other} lang={other} className="hover:text-limestone">
              {t.switchLabel}
            </Link>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="mx-auto grid h-20 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 sm:px-8">
        <nav aria-label={t.menu} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {start.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="lg:hidden" />

        <a href={`${base}#top`} className="flex flex-col items-center gap-1 text-center">
          <span className="flex items-center gap-2.5">
            <LogoMark className="h-7 w-auto text-[#4a535d]" />
            <span className="font-[family-name:var(--font-display)] text-2xl font-bold leading-none">{t.brandLong}</span>
          </span>
        </a>

        <div className="flex items-center justify-end gap-8">
          <ul className="hidden items-center gap-8 lg:flex">
            {end.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`${base}#contact`}
            className="hidden rounded-[2px] border border-bronze-light px-4 py-2 text-[0.95rem] font-medium text-bronze-light transition-colors hover:bg-bronze-light hover:text-diorite xl:inline-block"
          >
            {t.nav.contact}
          </a>
          <button
            type="button"
            className="p-2 text-limestone lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.close : t.menu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label={t.menu} className="border-t border-limestone/10 lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {[...start, ...end].map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center justify-between gap-4 border-t border-limestone/10 pt-4 pb-2">
              <Link href={switchHref ?? `/${other}/`} hrefLang={other} lang={other} className="text-limestone/75">
                {t.switchLabel}
              </Link>
              <a
                href={`${base}#contact`}
                onClick={() => setOpen(false)}
                className="rounded-[2px] bg-bronze-light px-5 py-2.5 font-medium text-diorite"
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
