// A black stone stele after the Code of Hammurabi: a relief at the top
// (here, a real photo) and the firm's promises "carved" below it,
// over a faint field of cuneiform wedges.

const OUTER = "M0,640 L0,180 C0,60 90,0 210,0 C330,0 420,60 420,180 L420,640 Z";
const WINDOW = "M28,330 L28,190 C28,90 105,28 210,28 C315,28 392,90 392,190 L392,330 Z";

export function Stele({
  photo,
  promises,
}: {
  photo: { src: string; srcSet: string; alt: string };
  promises: string[];
}) {
  return (
    <figure className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px]">
      <div className="stele-rise relative aspect-[420/640] w-full">
        <svg viewBox="0 0 420 640" className="absolute inset-0 h-full w-full" aria-hidden="true" focusable="false">
          <defs>
            <pattern id="cuneiform" width="56" height="34" patternUnits="userSpaceOnUse">
              <g fill="#39414a">
                <path d="M4,6 l8,3.2 l-8,3.2 Z" />
                <path d="M22,6 l5,6 l-5,0 Z" />
                <path d="M34,8 l8,3.2 l-8,3.2 Z" />
                <path d="M12,22 l8,3.2 l-8,3.2 Z" />
                <path d="M30,20 l5,6 l-5,0 Z" />
                <path d="M44,23 l8,3.2 l-8,3.2 Z" />
              </g>
              <g stroke="#39414a" strokeWidth="1.2">
                <line x1="12" y1="9.2" x2="18" y2="9.2" />
                <line x1="42" y1="11.2" x2="50" y2="11.2" />
                <line x1="20" y1="25.2" x2="26" y2="25.2" />
              </g>
            </pattern>
            <clipPath id="relief" clipPathUnits="objectBoundingBox">
              <path d="M0,1 L0,0.5364 C0,0.2053 0.2115,0 0.5,0 C0.7885,0 1,0.2053 1,0.5364 L1,1 Z" />
            </clipPath>
          </defs>
          <path d={OUTER} fill="#23282e" />
          <path d={OUTER} fill="url(#cuneiform)" opacity="0.9" />
          <path d={WINDOW} fill="none" stroke="#cfa96f" strokeOpacity="0.55" strokeWidth="2" />
          <line x1="64" y1="356" x2="356" y2="356" stroke="#cfa96f" strokeOpacity="0.55" strokeWidth="1.5" />
        </svg>

        <img
          src={photo.src}
          srcSet={photo.srcSet}
          sizes="(min-width: 640px) 364px, 312px"
          alt={photo.alt}
          fetchPriority="high"
          decoding="async"
          className="absolute object-cover"
          style={{
            left: `${(28 / 420) * 100}%`,
            top: `${(28 / 640) * 100}%`,
            width: `${(364 / 420) * 100}%`,
            height: `${(302 / 640) * 100}%`,
            clipPath: "url(#relief)",
            objectPosition: "50% 35%",
          }}
        />

        {/* The carved promises. */}
        <ul
          className="carve-in absolute inset-x-[11%] top-[59%] bottom-[6%] flex flex-col justify-center gap-5 text-center"
        >
          {promises.map((promise) => (
            <li
              key={promise}
              className="font-[family-name:var(--font-display)] text-lg leading-snug text-bronze-light sm:text-xl"
              style={{ textShadow: "0 1px 0 rgba(0,0,0,0.6), 0 -1px 0 rgba(255,255,255,0.06)" }}
            >
              {promise}
            </li>
          ))}
        </ul>
      </div>
      {/* Plinth */}
      <div className="h-4 rounded-sm sm:mx-[-6%] bg-[#cfd1cb]" aria-hidden="true" />
    </figure>
  );
}
