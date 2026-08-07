import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { ExternalLink, Instagram, Sparkles, X } from "lucide-react";
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
            <div className="relative">
              <img
                src={project.image}
                alt={`${project.title} case study cover`}
                width={1280}
                height={720}
                className="h-56 w-full object-cover sm:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              <button
                onClick={onClose}
                aria-label="Close case study"
                className="sketch absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center bg-card text-foreground transition-colors hover:text-primary"
              >
                <X className="h-5 w-5" />
              </button>
              <span className="sketch absolute bottom-4 left-5 bg-card px-3 py-1 text-xs font-semibold text-primary">
                {project.categoryLabel}
              </span>
            </div>

            <div className="space-y-7 p-5 pb-10 sm:p-9">
              <div>
                <h3 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-base text-muted-foreground">{project.tagline}</p>
                <span className="sketch mt-4 inline-flex bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {project.role}
                </span>
              </div>

              <div className="sketch bg-gold/25 p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <Sparkles className="h-4 w-4" /> Key Impact & Achievements
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{project.metrics}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Overview
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Architecture Deep Dive
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                  {project.architecture}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Complete Tech Stack
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.links?.live || project.links?.instagram ? (
                <div className="flex flex-wrap gap-3 pt-1">
                  {project.links?.live ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="sketch inline-flex min-h-12 items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
                    >
                      <ExternalLink className="h-4 w-4" /> Visit Live Platform
                    </a>
                  ) : null}
                  {project.links?.instagram ? (
                    <a
                      href={project.links.instagram}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="sketch inline-flex min-h-12 items-center gap-2 bg-card px-6 py-3 text-sm font-semibold text-foreground"
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