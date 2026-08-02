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
      className="relative flex min-h-[90vh] items-center px-5 pb-16 pt-24 sm:min-h-screen sm:pb-20 sm:pt-32 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {personalInfo.availability}
          </div>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-primary underline decoration-primary/40 underline-offset-8">Dheeraj Sankhla</span>
          </h1>

          <div className="mt-3 min-h-[2em] text-xl font-bold tracking-tight text-secondary sm:text-3xl lg:text-4xl">
            <Typewriter />
          </div>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {personalInfo.bio}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {expertiseBadges.map((b) => (
              <span
                key={b}
                className="rounded-lg border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-bold text-primary shadow-sm"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={onOpenResume}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/50"
            >
              <FileText className="h-4 w-4 text-secondary" />
              Interactive Resume
            </button>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-4">
          {heroStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="glass flex h-full flex-col justify-between p-5 sm:p-6 border border-border/80">
                <Sparkles className="h-5 w-5 text-primary" />
                <div className="mt-3">
                  <p className="font-sans text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">{s.label}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}