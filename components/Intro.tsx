// Opening moment: three cuneiform wedges are "pressed" into bronze, the firm's
// name appears, then the curtain lifts. Pure CSS, so it never blocks the page
// (even without JavaScript). It plays once per visit and is skipped with
// reduced motion; see globals.css and the inline script in the layout.

export function Intro({ name }: { name: string }) {
  return (
    <div className="intro" aria-hidden="true">
      <div className="flex flex-col items-center gap-6">
        <svg viewBox="0 0 120 40" className="h-10 w-auto">
          <g fill="#cfa96f">
            <path className="intro-wedge" d="M0,4 L30,20 L0,36 Z" />
            <path className="intro-wedge" d="M45,4 L75,20 L45,36 Z" />
            <path className="intro-wedge" d="M90,4 L120,20 L90,36 Z" />
          </g>
        </svg>
        <span className="intro-name font-[family-name:var(--font-display)] text-4xl font-bold text-limestone sm:text-5xl">
          {name}
        </span>
      </div>
    </div>
  );
}

// Runs before paint: skip the intro if it already played this visit.
// Once it has played, mark it seen so a language switch doesn't replay it.
export const introScript = `try{var d=document.documentElement,k="hl-intro";if(sessionStorage.getItem(k)){d.dataset.intro="seen"}else{sessionStorage.setItem(k,"1");setTimeout(function(){d.dataset.intro="seen"},2600)}}catch(e){}`;
