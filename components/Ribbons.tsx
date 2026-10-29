// Two tilted ribbons crossing the page, scrolling in opposite directions.
// Decorative: the same words appear elsewhere on the page, so they're hidden
// from assistive technology.

function Wedge() {
  return (
    <svg viewBox="0 0 14 10" className="mx-8 h-3 w-4 shrink-0 rtl:-scale-x-100" aria-hidden="true">
      <path d="M0,0 L14,5 L0,10 Z" fill="currentColor" />
    </svg>
  );
}

function Track({ items, className, reverse = false }: { items: string[]; className: string; reverse?: boolean }) {
  // Two identical halves, so moving by 50% loops seamlessly.
  const half = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`marquee ${reverse ? "marquee-reverse" : ""}`}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {half.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex shrink-0 items-center whitespace-nowrap">
                {item}
                <Wedge />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Ribbons({ first, second }: { first: string[]; second: string[] }) {
  return (
    <div aria-hidden="true" className="relative overflow-hidden bg-diorite py-16 sm:py-20">
      <Track
        items={first}
        className="relative z-10 -rotate-3 bg-bronze-light py-4 font-[family-name:var(--font-display)] text-3xl font-bold text-diorite sm:py-5 sm:text-4xl"
      />
      <Track
        items={second}
        reverse
        className="-mt-3 rotate-2 bg-limestone py-3 text-lg font-semibold text-diorite sm:text-xl"
      />
    </div>
  );
}
