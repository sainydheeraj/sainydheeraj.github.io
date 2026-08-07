/** Hand-drawn wavy rule between sections. */
export function SketchDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden className="mx-auto w-full max-w-5xl px-5 lg:px-8">
      <svg
        viewBox="0 0 1000 24"
        preserveAspectRatio="none"
        className={`h-6 w-full opacity-40 ${flip ? "scale-x-[-1]" : ""}`}
        fill="none"
        stroke="color-mix(in oklab, var(--graphite) 55%, transparent)"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M4 14c60-14 120 12 180 0s120-16 180 0 120 14 180 2 120-16 180-2 120 12 176 2" />
        <path d="M40 20c70-10 140 8 210 0" opacity="0.45" />
      </svg>
    </div>
  );
}