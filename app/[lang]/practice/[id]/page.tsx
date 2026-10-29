import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { LogoMark } from "@/components/Logo";
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK, content, isLocale, locales } from "@/lib/content";
import { photos, srcSet, unsplash } from "@/lib/photos";

const IDS = content.en.practice.items.map((a) => a.id);

export function generateStaticParams() {
  return locales.flatMap((lang) => IDS.map((id) => ({ lang, id })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ lang: string; id: string }> }): Promise<Metadata> {
  const { lang, id } = await params;
  if (!isLocale(lang)) return {};
  const t = content[lang];
  const area = t.practice.items.find((a) => a.id === id);
  if (!area) return {};
  return {
    title: `${area.name} — ${t.brandLong}`,
    description: area.detail,
    icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg` },
  };
}

function Wedges({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 54 12" className={className} aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <path d="M0,1 L12,6 L0,11 Z" />
        <path d="M21,1 L33,6 L21,11 Z" />
        <path d="M42,1 L54,6 L42,11 Z" />
      </g>
    </svg>
  );
}

export default async function PracticeArea({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = await params;
  if (!isLocale(lang)) notFound();
  const t = content[lang];
  const area = t.practice.items.find((a) => a.id === id);
  if (!area) notFound();
  const partner = t.team.items.find((p) => p.photo === area.partner)!;
  const others = t.practice.items.filter((a) => a.id !== id);
  // Link adds the base path itself; plain <a> tags need it spelled out.
  const home = `/${lang}/`;
  const homeHref = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/${lang}/`;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:bg-bronze-light focus:px-4 focus:py-2 focus:text-diorite"
      >
        {t.skip}
      </a>
      <Header t={t} lang={lang} base={homeHref} switchHref={`/${lang === "ar" ? "en" : "ar"}/practice/${id}/`} />

      <main id="main">
        <section aria-labelledby="area-title" className="bg-diorite text-limestone">
          <div className="mx-auto max-w-6xl px-5 pt-12 pb-16 sm:px-8 lg:pt-16 lg:pb-20">
            <nav aria-label={t.area.back} className="text-sm">
              <Link href={`${home}#practice`} className="text-limestone/65 hover:text-bronze-light">
                <span aria-hidden="true" className="rtl:hidden">
                  ←{" "}
                </span>
                <span aria-hidden="true" className="ltr:hidden">
                  →{" "}
                </span>
                {t.area.back}
              </Link>
            </nav>
            <p className="mt-10 text-bronze-light">{t.area.lead}</p>
            <h1 id="area-title" className="mt-2 max-w-[18ch] text-5xl leading-tight sm:text-6xl lg:text-7xl">
              {area.name}
            </h1>
            <p className="mt-6 max-w-[56ch] text-xl text-limestone/75">{area.detail}</p>
            <p className="mt-4 text-sm text-limestone/60">
              <span className="text-bronze-light">{t.practice.forLabel}: </span>
              {area.forWhom}
            </p>
          </div>
        </section>

        <section aria-labelledby="overview" className="bg-paper">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:py-24">
            <div>
              <Wedges className="h-3 w-auto text-bronze" />
              <h2 id="overview" className="mt-5 text-4xl text-ink">
                {t.area.overview}
              </h2>
              <p className="mt-6 max-w-[60ch] text-lg text-ink-soft">{area.intro}</p>

              <h3 className="mt-12 text-2xl text-ink">{t.practice.mattersLabel}</h3>
              <ul className="mt-4 divide-y divide-rule border-y border-rule">
                {area.matters.map((m) => (
                  <li key={m} className="py-4 text-lg text-ink">
                    {m}
                  </li>
                ))}
              </ul>

              <h2 className="mt-14 text-3xl text-ink">{t.area.faqTitle}</h2>
              <dl className="mt-6 space-y-8">
                {area.faqs.map((f) => (
                  <div key={f.q} className="border-t-2 border-bronze/70 pt-4">
                    <dt className="font-[family-name:var(--font-display)] text-2xl text-ink">{f.q}</dt>
                    <dd className="mt-2 max-w-[58ch] text-ink-soft">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="space-y-10 lg:sticky lg:top-36 lg:self-start">
              <div className="border border-rule bg-limestone p-6">
                <p className="text-sm text-ink-soft">{t.area.partnerLabel}</p>
                <div className="mt-4 flex items-center gap-4">
                  <img
                    src={unsplash(photos.partners[partner.photo], 160, 160)}
                    srcSet={srcSet(photos.partners[partner.photo], [160, 320], 1)}
                    sizes="80px"
                    alt={partner.name}
                    loading="lazy"
                    decoding="async"
                    className="h-20 w-20 shrink-0 bg-rule object-cover grayscale-[35%]"
                    style={{ objectPosition: partner.photo === "omar" ? "82% 25%" : "50% 22%" }}
                  />
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-2xl text-ink">{partner.name}</p>
                    <p className="text-sm text-bronze">{partner.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-ink-soft">{partner.bio}</p>
              </div>

              <div className="bg-diorite p-6 text-limestone">
                <p className="font-[family-name:var(--font-display)] text-2xl">{t.area.cta}</p>
                <p className="mt-2 text-sm text-limestone/70">{t.area.ctaLead}</p>
                <a
                  href={`${homeHref}#contact`}
                  className="mt-5 inline-block rounded-[2px] bg-bronze-light px-5 py-2.5 font-semibold text-diorite transition-colors hover:bg-limestone"
                >
                  {t.area.cta}
                </a>
                <div className="mt-5 space-y-2 border-t border-limestone/15 pt-4 text-sm">
                  <a href={PHONE_LINK} className="flex items-center gap-2 hover:text-bronze-light">
                    <Phone className="h-4 w-4 text-bronze-light" aria-hidden="true" />
                    <span dir="ltr">{PHONE_DISPLAY}</span>
                  </a>
                  <a href={WHATSAPP_LINK} className="flex items-center gap-2 hover:text-bronze-light">
                    <MessageCircle className="h-4 w-4 text-bronze-light" aria-hidden="true" />
                    {t.contact.whatsapp}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section aria-labelledby="others" className="bg-limestone">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <h2 id="others" className="text-3xl text-ink">
              {t.area.otherAreas}
            </h2>
            <ul className="mt-6 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((a) => (
                <li key={a.id} className="border-t border-rule">
                  <Link
                    href={`/${lang}/practice/${a.id}/`}
                    className="block py-4 font-[family-name:var(--font-display)] text-xl text-ink transition-colors hover:text-bronze"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-diorite text-limestone/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-10 text-center text-sm sm:px-8">
          <Link href={home} className="flex items-center gap-3 text-limestone">
            <LogoMark className="h-8 w-auto text-[#4a535d]" />
            <span className="font-[family-name:var(--font-display)] text-2xl font-bold">{t.brandLong}</span>
          </Link>
          <p className="max-w-[70ch]">{t.footer.concept}</p>
        </div>
      </footer>
    </>
  );
}
