import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Header } from "@/components/Header";
import { LogoMark } from "@/components/Logo";
import { PracticeIndex } from "@/components/PracticeIndex";
import { Scale } from "@/components/Scale";
import { Stele } from "@/components/Stele";
import { EMAIL, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK, content, isLocale, type Locale } from "@/lib/content";
import { photos, srcSet, unsplash } from "@/lib/photos";

const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Karrada%2C+Baghdad";
// Where each portrait's face sits in the source photo.
const FOCUS = { karim: "50% 25%", zainab: "50% 22%", omar: "82% 25%" } as const;

// Three cuneiform wedges: the firm's ornament above centered headings.
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

function CenteredHeading({ id, title, lead, invert = false }: { id: string; title: string; lead?: string; invert?: boolean }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Wedges className={`mx-auto h-3 w-auto ${invert ? "text-bronze-light" : "text-bronze"}`} />
      <h2 id={id} className={`mt-5 text-4xl sm:text-5xl ${invert ? "text-limestone" : "text-ink"}`}>
        {title}
      </h2>
      {lead && <p className={`mt-4 text-lg ${invert ? "text-limestone/70" : "text-ink-soft"}`}>{lead}</p>}
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
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:bg-bronze-light focus:px-4 focus:py-2 focus:text-diorite"
      >
        {t.skip}
      </a>
      <Header t={t} lang={lang} />

      <main id="main">
        {/* Hero: a full-bleed dark masthead, a wide photo, and a bronze tablet of promises. */}
        <section id="top" aria-labelledby="hero-title" className="bg-diorite text-limestone">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 pt-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:pt-16">
            <div>
              <h1
                id="hero-title"
                className="max-w-[16ch] text-balance text-[2.7rem] leading-[1.12] sm:text-6xl lg:text-[4.1rem] lg:leading-[1.08]"
              >
                {t.hero.title}
              </h1>
              <p className="mt-8 max-w-[52ch] border-t border-limestone/15 pt-8 text-lg text-limestone/75">{t.hero.lead}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-[2px] bg-bronze-light px-7 py-3.5 font-semibold text-diorite transition-colors hover:bg-limestone"
                >
                  {t.hero.primary}
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 rounded-[2px] border border-limestone/30 px-6 py-3.5 font-medium transition-colors hover:border-bronze-light hover:text-bronze-light"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {t.hero.secondary}
                </a>
              </div>
            </div>
            {/* 3D scale of justice: turns and settles into balance as you scroll. */}
            <div className="relative -mx-5 h-[24rem] sm:mx-0 sm:h-[30rem] lg:h-[38rem] xl:-me-20">
              <div
                aria-hidden="true"
                className="absolute inset-x-[10%] top-[12%] bottom-[8%] rounded-full bg-[radial-gradient(closest-side,rgba(207,169,111,0.16),transparent)]"
              />
              <Scale label={t.hero.scaleLabel} />
            </div>
          </div>

          <figure className="mx-auto mt-6 max-w-7xl px-0 sm:px-8 lg:mt-10">
            <img
              src={unsplash(photos.hero, 1600, 690)}
              srcSet={srcSet(photos.hero, [800, 1200, 1600, 2200], 0.43)}
              sizes="(min-width: 1280px) 1216px, 100vw"
              alt={t.hero.photoAlt}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/3] w-full object-cover sm:aspect-[21/9]"
              style={{ objectPosition: "55% 40%" }}
            />
            {/* The tablet overlaps the photo's lower edge. */}
            <div className="relative z-10 mx-5 -mt-12 border border-bronze-light/60 bg-[#2b3138] sm:mx-12 sm:-mt-16 lg:mx-24">
              <ul className="grid divide-y divide-bronze-light/25 sm:grid-cols-3 sm:divide-x sm:divide-y-0 rtl:sm:divide-x-reverse">
                {t.hero.promises.map((promise) => (
                  <li
                    key={promise}
                    className="px-6 py-5 text-center font-[family-name:var(--font-display)] text-xl leading-snug text-bronze-light sm:py-7"
                  >
                    {promise}
                  </li>
                ))}
              </ul>
            </div>
            <figcaption className="mx-5 pt-5 pb-16 text-sm text-limestone/55 sm:mx-12 lg:mx-24 lg:pb-20">
              {t.hero.photoCaption}
            </figcaption>
          </figure>
        </section>

        {/* Practice areas: a tabbed index. */}
        <section aria-labelledby="practice" className="bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <CenteredHeading id="practice" title={t.practice.title} lead={t.practice.lead} />
            <PracticeIndex t={t.practice} />
          </div>
        </section>

        {/* Why Hammurabi: the stele carries the firm's motto. */}
        <section aria-labelledby="story" className="bg-diorite text-limestone">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-28">
            <Stele
              photo={{
                src: unsplash(photos.heritage, 800, 680),
                srcSet: srcSet(photos.heritage, [400, 800, 1100], 0.85),
                alt: t.story.photoAlt,
              }}
              promises={t.story.motto}
              onDark
            />
            <div>
              <Wedges className="h-3 w-auto text-bronze-light" />
              <h2 id="story" className="mt-5 text-4xl sm:text-5xl">
                {t.story.title}
              </h2>
              <div className="mt-8 space-y-5 text-lg text-limestone/75">
                {t.story.body.map((p) => (
                  <p key={p} className="max-w-[58ch]">
                    {p}
                  </p>
                ))}
              </div>
              <p className="mt-8 border-t border-limestone/15 pt-5 text-sm text-limestone/55">{t.story.caption}</p>
            </div>
          </div>
        </section>

        {/* How we work: a horizontal timeline, since it's a real sequence. */}
        <section aria-labelledby="approach" className="bg-limestone">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <CenteredHeading id="approach" title={t.approach.title} lead={t.approach.lead} />
            <ol className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-8">
              {/* The connecting line. */}
              <span
                aria-hidden="true"
                className="absolute top-7 bottom-7 start-7 w-px bg-rule lg:inset-x-[12.5%] lg:top-7 lg:bottom-auto lg:h-px lg:w-auto"
              />
              {t.approach.steps.map((step, i) => (
                <li key={step.title} className="relative grid grid-cols-[3.5rem_1fr] gap-5 lg:block lg:text-center">
                  <span
                    aria-hidden="true"
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-bronze bg-limestone font-[family-name:var(--font-display)] text-2xl text-bronze lg:mx-auto"
                  >
                    {num.format(i + 1)}
                  </span>
                  <div>
                    <h3 className="text-2xl text-ink lg:mt-6">{step.title}</h3>
                    <p className="mt-2 text-ink-soft lg:mx-auto lg:max-w-[26ch]">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Partners: wide rows with square portraits. */}
        <section aria-labelledby="team" className="bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <CenteredHeading id="team" title={t.team.title} lead={t.team.lead} />
            <ul className="mt-14 divide-y divide-rule border-y border-rule">
              {t.team.items.map((person) => (
                <li key={person.name} className="grid gap-6 py-10 sm:grid-cols-[13rem_1fr] sm:gap-10 lg:grid-cols-[15rem_1fr_16rem]">
                  <img
                    src={unsplash(photos.partners[person.photo], 480, 480)}
                    srcSet={srcSet(photos.partners[person.photo], [300, 480, 640], 1)}
                    sizes="(min-width: 1024px) 15rem, 13rem"
                    alt={person.name}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full max-w-[15rem] bg-rule object-cover grayscale-[35%]"
                    style={{ objectPosition: FOCUS[person.photo] }}
                  />
                  <div>
                    <h3 className="text-3xl text-ink">{person.name}</h3>
                    <p className="mt-1 font-medium text-bronze">{person.role}</p>
                    <p className="mt-4 max-w-[52ch] text-lg text-ink-soft">{person.bio}</p>
                  </div>
                  <dl className="space-y-4 text-sm sm:col-start-2 lg:col-start-auto lg:border-s lg:border-rule lg:ps-8">
                    <div>
                      <dt className="text-ink-soft">{lang === "ar" ? "التخصص" : "Focus"}</dt>
                      <dd className="mt-0.5 font-medium text-ink">{person.focus}</dd>
                    </div>
                    <div>
                      <dt className="text-ink-soft">{lang === "ar" ? "النقابة" : "Bar"}</dt>
                      <dd className="mt-0.5 font-medium text-ink">{person.bar}</dd>
                    </div>
                    <div>
                      <dt className="text-ink-soft">{lang === "ar" ? "اللغات" : "Languages"}</dt>
                      <dd className="mt-0.5 font-medium text-ink">{person.languages}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Office: text set directly on the photo. */}
        <section aria-labelledby="office" className="relative isolate overflow-hidden bg-diorite text-limestone">
          <img
            src={unsplash(photos.tigris, 1800, 900)}
            srcSet={srcSet(photos.tigris, [800, 1200, 1800, 2400], 0.5)}
            sizes="100vw"
            alt={t.office.photoAlt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-diorite via-diorite/70 to-diorite/10"
          />
          <div className="mx-auto flex min-h-[32rem] max-w-6xl flex-col justify-end px-5 pt-40 pb-14 sm:px-8 lg:min-h-[36rem]">
            <h2 id="office" className="text-4xl sm:text-5xl">
              {t.office.title}
            </h2>
            <div className="mt-8 grid gap-6 border-t border-limestone/20 pt-6 md:grid-cols-[1.4fr_1fr_auto] md:items-start">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-bronze-light" aria-hidden="true" />
                <span>
                  {t.office.address}
                  <span className="mt-1 block text-sm text-limestone/65">{t.office.directions}</span>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-bronze-light" aria-hidden="true" />
                {t.office.hours}
              </p>
              <a
                href={MAP_LINK}
                className="justify-self-start rounded-[2px] border border-limestone/40 px-5 py-2.5 font-medium transition-colors hover:border-bronze-light hover:text-bronze-light"
              >
                {lang === "ar" ? "افتح في خرائط Google" : "Open in Google Maps"}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ: every answer visible, in two columns. */}
        <section aria-labelledby="faq" className="bg-limestone">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <CenteredHeading id="faq" title={t.faq.title} />
            <dl className="mt-14 grid gap-x-14 gap-y-10 md:grid-cols-2">
              {t.faq.items.map((item) => (
                <div key={item.q} className="border-t-2 border-bronze/70 pt-5">
                  <dt className="font-[family-name:var(--font-display)] text-2xl text-ink">{item.q}</dt>
                  <dd className="mt-3 max-w-[54ch] text-ink-soft">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Consultation */}
        <section aria-labelledby="contact" className="bg-diorite text-limestone">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-28">
            <div>
              <Wedges className="h-3 w-auto text-bronze-light" />
              <h2 id="contact" className="mt-5 text-4xl sm:text-5xl">
                {t.contact.title}
              </h2>
              <p className="mt-4 max-w-[40ch] text-lg text-limestone/70">{t.contact.lead}</p>
              <ul className="mt-10 space-y-4 text-lg">
                <li>
                  <a href={PHONE_LINK} className="inline-flex items-center gap-3 hover:text-bronze-light">
                    <Phone className="h-5 w-5 text-bronze-light" aria-hidden="true" />
                    <span dir="ltr">{PHONE_DISPLAY}</span>
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_LINK} className="inline-flex items-center gap-3 hover:text-bronze-light">
                    <MessageCircle className="h-5 w-5 text-bronze-light" aria-hidden="true" />
                    {t.contact.whatsapp}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3 hover:text-bronze-light">
                    <Mail className="h-5 w-5 text-bronze-light" aria-hidden="true" />
                    <span dir="ltr">{EMAIL}</span>
                  </a>
                </li>
              </ul>
            </div>
            <ConsultationForm t={t.contact} areas={t.practice.items} />
          </div>
        </section>
      </main>

      <footer className="bg-limestone text-ink-soft">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center sm:px-8">
          <div className="flex items-center justify-center gap-3 text-ink">
            <LogoMark className="h-9 w-auto text-diorite" />
            <span className="font-[family-name:var(--font-display)] text-3xl font-bold">{t.brandLong}</span>
          </div>
          <p className="mx-auto mt-4 max-w-[46ch]">{t.footer.tagline}</p>
          <p className="mt-6 text-sm">{t.office.address}</p>
          <p className="mt-1 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm">
            <a href={PHONE_LINK} className="hover:text-ink">
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-ink">
              <span dir="ltr">{EMAIL}</span>
            </a>
          </p>
        </div>
        <div className="border-t border-rule">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-center text-sm sm:px-8 md:flex-row md:items-center md:justify-between md:text-start">
            <p className="max-w-[70ch]">{t.footer.concept}</p>
            <p className="flex shrink-0 flex-wrap justify-center gap-x-4 gap-y-1">
              <a href="https://github.com/MustafaCoder365" className="text-ink underline-offset-4 hover:underline">
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
