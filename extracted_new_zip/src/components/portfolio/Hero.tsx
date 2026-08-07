import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { expertiseBadges, heroStats, personalInfo, roles } from "@/data/portfolio";
import { TiltCard } from "./TiltCard";

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[index] ?? "";
    const done = text === full;
    const delay = deleting ? 35 : done ? 1600 : 65;

    const t = window.setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      } else {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <span className="text-primary">
      {text}
      <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-secondary align-middle animate-pulse" />
    </span>
  );
}

export function Hero({ onOpenResume }: { onOpenResume: () => void }) {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center px-5 pb-16 pt-28 sm:min-h-screen sm:pb-20 sm:pt-32 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="sketch inline-flex items-center gap-2.5 bg-card px-4 py-2 text-xs font-semibold text-muted-foreground sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 rounded-full bg-chart-4 animate-pulse-dot" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-chart-4" />
            </span>
            {personalInfo.availability}
          </div>

          <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-8xl">
            Hi, I&apos;m{" "}
            <span className="ink-underline text-foreground">Dheeraj Sankhla</span>
          </h1>

          <p className="mt-4 min-h-[2.4em] font-display text-2xl font-semibold sm:text-4xl lg:text-5xl">
            <Typewriter />
          </p>

          <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground sm:text-lg">
            {personalInfo.bio}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {expertiseBadges.map((b) => (
              <span
                key={b}
                className="sketch bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#projects"
              className="sketch group inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-1"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={onOpenResume}
              className="sketch inline-flex min-h-12 items-center justify-center gap-2 bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-1 hover:shadow-glow-violet"
            >
              <FileText className="h-4 w-4 text-secondary" />
              Interactive Resume
            </button>
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-4">
          {heroStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="glass h-full p-5 sm:p-6">
                <Sparkles className="h-5 w-5 text-primary" />
                <p className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}