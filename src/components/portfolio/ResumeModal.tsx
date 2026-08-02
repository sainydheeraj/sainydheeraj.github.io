import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Printer, X } from "lucide-react";
import { experience, personalInfo, projects, skillGroups } from "@/data/portfolio";

export function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const featured = projects.filter((p) => p.featured);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Printable resume"
          className="fixed inset-0 z-[80] overflow-y-auto bg-background/85 p-3 backdrop-blur-sm sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto w-full max-w-4xl"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Interactive Resume
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="sketch inline-flex min-h-11 items-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground sm:px-5"
                >
                  <Printer className="h-4 w-4" />
                  <span className="hidden sm:inline">Print / Save PDF</span>
                  <span className="sm:hidden">PDF</span>
                </button>
                <button
                  onClick={onClose}
                  aria-label="Close resume"
                  className="sketch inline-flex h-11 w-11 items-center justify-center bg-card text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div
              id="printable-resume"
              className="max-h-[76vh] overflow-y-auto rounded-2xl border-2 border-foreground/60 bg-white p-6 text-[#111827] shadow-elevated sm:p-12"
            >
              <header className="border-b-2 border-[#0B0F17] pb-5">
                <h1 className="font-display text-3xl font-bold text-[#0B0F17]">
                  {personalInfo.name}
                </h1>
                <p className="mt-1 text-sm font-medium text-[#374151]">{personalInfo.title}</p>
                <p className="mt-2 text-xs text-[#4B5563]">
                  {personalInfo.email} · {personalInfo.location} · instagram.com/theinkpress.in
                </p>
              </header>

              <section className="mt-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B0F17]">
                  Executive Summary
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#374151]">{personalInfo.bio}</p>
              </section>

              <section className="mt-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B0F17]">
                  Skills Matrix
                </h2>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  {skillGroups.map((g) => (
                    <div key={g.title}>
                      <p className="text-sm font-semibold text-[#0B0F17]">{g.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-[#4B5563]">
                        {g.skills.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B0F17]">
                  Featured Ventures
                </h2>
                <div className="mt-3 space-y-3">
                  {featured.map((p) => (
                    <div key={p.id}>
                      <p className="text-sm font-semibold text-[#0B0F17]">
                        {p.title} — <span className="font-normal">{p.role}</span>
                      </p>
                      <p className="text-xs leading-relaxed text-[#4B5563]">{p.description}</p>
                      <p className="text-xs font-medium text-[#0F766E]">{p.metrics}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B0F17]">
                  Career Timeline
                </h2>
                <div className="mt-3 space-y-4">
                  {experience.map((e) => (
                    <div key={e.role}>
                      <p className="text-sm font-semibold text-[#0B0F17]">
                        {e.role} · {e.org}
                      </p>
                      <p className="text-xs font-medium text-[#6B7280]">{e.period}</p>
                      <ul className="mt-1 list-disc pl-5 text-xs leading-relaxed text-[#4B5563]">
                        {e.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}