// A stele silhouette with three wedge marks, like lines of cuneiform.
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 26 36" className={className} aria-hidden="true" focusable="false">
      <path d="M1,35 L1,11 Q1,1 13,1 Q25,1 25,11 L25,35 Z" fill="currentColor" />
      <g fill="#cfa96f">
        <path d="M7,15 l4,1.6 l-4,1.6 Z" />
        <path d="M12,21 l4,1.6 l-4,1.6 Z" />
        <path d="M8,27 l4,1.6 l-4,1.6 Z" />
      </g>
    </svg>
  );
}
