import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { ExternalLink, Instagram, Sparkles, X, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-background/80 p-0 backdrop-blur-sm sm:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            style={{ transformPerspective: 1200 }}
            onClick={(e) => e.stopPropagation()}
            className="my-auto w-full max-w-4xl overflow-hidden border-2 border-foreground/60 bg-card shadow-elevated sm:rounded-3xl"
          >
            <div className="relative flex h-56 w-full items-center justify-center overflow-hidden bg-black p-6 sm:h-72">
              <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] opacity-20 [background-size:16px_16px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
              {project.logo ? (
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="relative z-10 max-h-36 max-w-[65%] object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <img
                  src={project.image}
                  alt={`${project.title} cover`}
                  className="h-full w-full object-cover opacity-60"
                />
              )}
              <button
                onClick={onClose}
                aria-label="Close case study"
                className="sketch absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center bg-card text-foreground transition-colors hover:text-primary"
              >
                <X className="h-5 w-5" />
              </button>
              <span className="sketch absolute bottom-4 left-5 z-20 bg-card px-3 py-1 text-xs font-semibold text-primary">
                {project.categoryLabel}
              </span>
            </div>

            <div className="space-y-7 p-5 pb-10 sm:p-9">
              <div>
                <h3 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-base font-medium text-primary">{project.tagline}</p>
                <span className="sketch mt-3 inline-flex bg-secondary px-3.5 py-1 text-xs font-bold text-secondary-foreground">
                  {project.role}
                </span>
              </div>

              {/* Key Metrics Banner */}
              <div className="sketch bg-gold/20 p-5">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  <Sparkles className="h-4 w-4" /> Key Impact & Achievements
                </p>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-foreground">
                  {project.metrics}
                </p>
              </div>

              {/* Problem Solved */}
              {project.problemSolved ? (
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    <ShieldAlert className="h-4 w-4 text-secondary" /> Problem Solved
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                    {project.problemSolved}
                  </p>
                </div>
              ) : null}

              {/* Solution & Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Overview & Core Capabilities
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  {project.description}
                </p>
              </div>

              {/* Key Features & Innovation */}
              {project.highlights && project.highlights.length > 0 ? (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Key Features & Highlights
                  </h4>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 rounded-xl border border-border bg-muted/40 p-3 text-xs leading-relaxed text-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {/* Architecture Deep Dive */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  <Cpu className="h-4 w-4 text-primary" /> Technical Architecture
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  {project.architecture}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Complete Tech Stack
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-border bg-muted/60 px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              {project.links?.live || project.links?.instagram ? (
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.links?.live ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="sketch inline-flex min-h-12 items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                    >
                      <ExternalLink className="h-4 w-4" /> Visit Live Platform
                    </a>
                  ) : null}
                  {project.links?.instagram ? (
                    <a
                      href={project.links.instagram}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="sketch inline-flex min-h-12 items-center gap-2 bg-card px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
                    >
                      <Instagram className="h-4 w-4 text-secondary" /> Instagram Business Handle
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}