import { Clock, Mail, MapPin, MessageCircle, Phone, Plus } from "lucide-react";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Header } from "@/components/Header";
import { LogoMark } from "@/components/Logo";
import { Stele } from "@/components/Stele";
import { EMAIL, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK, content, isLocale, type Locale } from "@/lib/content";
import { photos, srcSet, unsplash } from "@/lib/photos";

// A rounded "stele" top for portraits and the story photo.
const STELE_TOP = { borderRadius: "50% 50% 6px 6px / 26% 26% 6px 6px" } as const;
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Karrada%2C+Baghdad";

function Wedge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 10" className={className} aria-hidden="true" focusable="false">
      <path d="M0,0 L14,5 L0,10 Z" fill="currentColor" />
    </svg>
  );
}

function SectionHeading({ id, title, lead, invert = false }: { id: string; title: string; lead?: string; invert?: boolean }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:items-end">
      <h2 id={id} className={`text-4xl sm:text-5xl ${invert ? "text-limestone" : "text-ink"}`}>
        {title}
      </h2>
      {lead && <p className={`max-w-[46ch] text-lg ${invert ? "text-limestone/75" : "text-ink-soft"}`}>{lead}</p>}
    </div>
  );
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: Locale = isLocale(raw) ? raw : "en";
  const t = content[lang];
  const num = new Intl.NumberFormat(lang === "ar" ? "ar-IQ" : "en-US");

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-diorite focus:px-4 focus:py-2 focus:text-limestone"
      >
        {t.skip}
      </a>
      <Header t={t} lang={lang} />

      <main id="main">
        {/* Hero */}
        <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-6xl px-5 pt-12 pb-20 sm:px-8 lg:pt-16 lg:pb-24">
          <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="lg:pb-24">
              <h1
                id="hero-title"
                className="max-w-[17ch] text-balance text-[2.6rem] leading-[1.15] text-ink sm:text-6xl sm:leading-[1.1]"
              >
                {t.hero.title}
              </h1>
              <p className="mt-7 max-w-[54ch] text-lg text-ink-soft sm:text-xl">{t.hero.lead}</p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="rounded-md bg-diorite px-7 py-3.5 text-base font-medium text-limestone transition-colors hover:bg-bronze"
                >
                  {t.hero.primary}
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 rounded-md border border-ink/25 px-6 py-3.5 text-base font-medium text-ink transition-colors hover:border-bronze hover:text-bronze"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>{t.hero.secondary}</span>
                </a>
              </div>
            </div>

            <Stele
              photo={{
                src: unsplash(photos.hero, 800, 680),
                srcSet: srcSet(photos.hero, [400, 800, 1100], 0.85),
                alt: t.hero.photoAlt,
              }}
              promises={t.hero.promises}
            />
          </div>
        </section>

        {/* Practice areas */}
        <section aria-labelledby="practice" className="border-t border-rule bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <SectionHeading id="practice" title={t.practice.title} lead={t.practice.lead} />
            <ul className="mt-14 grid gap-x-14 md:grid-cols-2">
              {t.practice.items.map((area) => (
                <li key={area.id} className="border-t border-rule py-8">
                  <h3 className="flex items-center gap-3 text-2xl text-ink">
                    <Wedge className="h-2.5 w-3.5 shrink-0 text-bronze rtl:-scale-x-100" />
                    {area.name}
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-ink-soft">{area.detail}</p>
                  <p className="mt-3 text-sm text-ink-soft">
                    <span className="font-medium text-bronze">{t.practice.forLabel}: </span>
                    {area.forWhom}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why Hammurabi */}
        <section aria-labelledby="story" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <figure>
              <img
                src={unsplash(photos.heritage, 800, 1000)}
                srcSet={srcSet(photos.heritage, [400, 800, 1100], 1.25)}
                sizes="(min-width: 1024px) 40vw, 100vw"
                alt={t.story.photoAlt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
                style={STELE_TOP}
              />
              <figcaption className="mt-3 text-sm text-ink-soft">{t.story.caption}</figcaption>
            </figure>
            <div>
              <h2 id="story" className="text-4xl text-ink sm:text-5xl">
                {t.story.title}
              </h2>
              <div className="mt-8 space-y-5 text-lg text-ink-soft">
                {t.story.body.map((p) => (
                  <p key={p} className="max-w-[58ch]">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How we work: a real sequence, so it's numbered. */}
        <section aria-labelledby="approach" className="bg-diorite text-limestone">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <SectionHeading id="approach" title={t.approach.title} lead={t.approach.lead} invert />
            <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {t.approach.steps.map((step, i) => (
                <li key={step.title} className="border-t border-limestone/20 pt-6">
                  <span className="font-[family-name:var(--font-display)] text-5xl text-bronze-light" aria-hidden="true">
                    {num.format(i + 1)}
                  </span>
                  <h3 className="mt-3 text-2xl">{step.title}</h3>
                  <p className="mt-2 text-limestone/75">{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Partners */}
        <section aria-labelledby="team" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <SectionHeading id="team" title={t.team.title} lead={t.team.lead} />
          <ul className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-8">
            {t.team.items.map((person) => (
              <li key={person.name}>
                <img
                  src={unsplash(photos.partners[person.photo], 600, 760)}
                  srcSet={srcSet(photos.partners[person.photo], [400, 600, 800], 1.27)}
                  sizes="(min-width: 640px) 33vw, 100vw"
                  alt={person.name}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[15/19] w-full bg-rule object-cover"
                  style={{ ...STELE_TOP, objectPosition: "50% 20%" }}
                />
                <h3 className="mt-6 text-2xl text-ink">{person.name}</h3>
                <p className="mt-1 font-medium text-bronze">{person.role}</p>
                <p className="mt-3 text-ink">{person.focus}</p>
                <p className="mt-2 text-sm text-ink-soft">{person.bar}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Office */}
        <section aria-labelledby="office" className="relative">
          <img
            src={unsplash(photos.tigris, 1800, 900)}
            srcSet={srcSet(photos.tigris, [800, 1200, 1800, 2400], 0.5)}
            sizes="100vw"
            alt={t.office.photoAlt}
            loading="lazy"
            decoding="async"
            className="h-[30rem] w-full object-cover sm:h-[34rem]"
          />
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="relative -mt-40 max-w-md rounded-lg bg-diorite p-8 text-limestone shadow-[0_24px_48px_-24px_rgba(23,27,32,0.6)] sm:-mt-48">
              <h2 id="office" className="text-3xl">
                {t.office.title}
              </h2>
              <ul className="mt-6 space-y-4 text-limestone/85">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-bronze-light" aria-hidden="true" />
                  <span>
                    {t.office.address}
                    <span className="mt-1 block text-sm text-limestone/65">{t.office.directions}</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-bronze-light" aria-hidden="true" />
                  {t.office.hours}
                </li>
              </ul>
              <a
                href={MAP_LINK}
                className="mt-7 inline-block rounded-md border border-limestone/30 px-5 py-2.5 font-medium transition-colors hover:border-bronze-light hover:text-bronze-light"
              >
                {lang === "ar" ? "افتح في خرائط Google" : "Open in Google Maps"}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq" className="mt-20 border-t border-rule bg-paper lg:mt-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
            <h2 id="faq" className="text-4xl text-ink sm:text-5xl">
              {t.faq.title}
            </h2>
            <div className="divide-y divide-rule border-y border-rule">
              {t.faq.items.map((item) => (
                <details key={item.q} className="group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-lg font-medium text-ink">
                    {item.q}
                    <Plus className="faq-icon h-5 w-5 shrink-0 text-bronze transition-transform" aria-hidden="true" />
                  </summary>
                  <p className="max-w-[60ch] pb-6 text-ink-soft">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation */}
        <section aria-labelledby="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 id="contact" className="text-4xl text-ink sm:text-5xl">
                {t.contact.title}
              </h2>
              <p className="mt-4 max-w-[40ch] text-lg text-ink-soft">{t.contact.lead}</p>
              <ul className="mt-10 space-y-4 text-lg">
                <li>
                  <a href={PHONE_LINK} className="inline-flex items-center gap-3 text-ink hover:text-bronze">
                    <Phone className="h-5 w-5 text-bronze" aria-hidden="true" />
                    <span dir="ltr">{PHONE_DISPLAY}</span>
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_LINK} className="inline-flex items-center gap-3 text-ink hover:text-bronze">
                    <MessageCircle className="h-5 w-5 text-bronze" aria-hidden="true" />
                    {t.contact.whatsapp}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3 text-ink hover:text-bronze">
                    <Mail className="h-5 w-5 text-bronze" aria-hidden="true" />
                    <span dir="ltr">{EMAIL}</span>
                  </a>
                </li>
              </ul>
            </div>
            <ConsultationForm t={t.contact} areas={t.practice.items} />
          </div>
        </section>
      </main>

      <footer className="bg-diorite text-limestone/75">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 text-limestone">
              <LogoMark className="h-9 w-auto text-[#3a424b]" />
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold">{t.brandLong}</span>
            </div>
            <p className="mt-4 max-w-[34ch]">{t.footer.tagline}</p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-sans)] text-base font-semibold text-limestone">{t.footer.officeTitle}</h2>
            <p className="mt-4">{t.office.address}</p>
            <p className="mt-2 text-sm">{t.office.hours}</p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-sans)] text-base font-semibold text-limestone">{t.footer.contactTitle}</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={PHONE_LINK} className="hover:text-limestone">
                  <span dir="ltr">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} className="hover:text-limestone">
                  {t.contact.whatsapp}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-limestone">
                  <span dir="ltr">{EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-limestone/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm sm:px-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[70ch]">{t.footer.concept}</p>
            <p className="flex shrink-0 flex-wrap gap-x-4 gap-y-1">
              <a href="https://github.com/MustafaCoder365" className="text-limestone underline-offset-4 hover:underline">
                {t.footer.credit}
              </a>
              <a href="https://unsplash.com" className="underline-offset-4 hover:underline">
                {t.footer.photos}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
