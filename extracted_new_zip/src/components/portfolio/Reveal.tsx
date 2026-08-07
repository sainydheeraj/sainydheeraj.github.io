import type { ReactNode } from "react";
import { motion } from "motion/react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      <span className="sketch inline-flex items-center bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-4xl font-bold text-foreground sm:text-6xl">
        <span className="ink-underline">{title}</span>
      </h2>
      <motion.svg
        viewBox="0 0 300 12"
        className="mx-auto mt-2 h-3 w-56"
        fill="none"
        stroke="color-mix(in oklab, var(--secondary) 80%, transparent)"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <motion.path
          d="M6 8c50-8 100 6 150-1s90 4 138-2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </motion.svg>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}