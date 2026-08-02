import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/** A pencil illustration that drifts + fades as it scrolls through the viewport. */
export function DoodleAccent({
  src,
  alt,
  className,
  distance = 90,
  size = 260,
}: {
  src: string;
  alt: string;
  className?: string;
  distance?: number;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 0.55, 0.55, 0]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute hidden select-none lg:block", className)}
    >
      <motion.img
        src={src}
        alt={alt}
        width={size}
        height={size}
        loading="lazy"
        style={reduced ? { opacity: 0.4 } : { y, rotate, opacity }}
        className="h-auto w-full mix-blend-multiply"
      />
    </div>
  );
}