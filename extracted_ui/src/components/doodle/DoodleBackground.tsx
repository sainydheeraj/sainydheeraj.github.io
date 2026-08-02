import { useReducedMotion, useScroll, useTransform, motion } from "motion/react";

/** Multi-layer hand-drawn parallax backdrop. Pure SVG/CSS — cheap on mobile. */
export function DoodleBackground() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const y2 = useTransform(scrollYProgress, [0, 1], ["0px", "-260px"]);

  const stroke = "color-mix(in oklab, var(--graphite) 18%, transparent)";

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* paper wash */}
      <div className="absolute inset-0 bg-background" />

      {/* scattered pencil squiggles */}
      <motion.svg
        style={{ y: reduced ? 0 : y2 }}
        className="absolute -inset-y-32 inset-x-0 h-[140%] w-full opacity-40"
        viewBox="0 0 1000 1400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
      >
        <path d="M60 120c40-30 60 30 100 0s60 30 100 0" />
        <path d="M840 90l30 30-30 30-30-30z" />
        <path d="M900 400c-50 20-70 70-30 100s110-10 90-60" />
        <path d="M120 620c60-40 120 40 180 0" />
        <circle cx="780" cy="700" r="34" />
        <path d="M70 980c50-60 130 20 190-30" />
        <path d="M880 1080l-40 60m0-60l40 60" />
        <path d="M420 1290c60-40 130 30 190-20" />
        <path d="M520 60l14 30 32 5-23 23 6 32-29-16-29 16 6-32-23-23 32-5z" />
      </motion.svg>
    </div>
  );
}