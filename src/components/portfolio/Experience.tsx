import { motion } from "motion/react";
import { experience } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative px-5 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Journey"
          title="Career & Venture Milestones"
          subtitle="Founding, architecting and scaling products across publishing, AI and commerce."
        />

        <div className="relative pl-7 sm:pl-12">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
            className="absolute left-1.5 top-2 h-[calc(100%-1rem)] w-0 border-l-2 border-dashed border-foreground/45 sm:left-3"
          />

          <div className="space-y-10">
            {experience.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.1}>
                <div className="relative">
                  <span className="absolute -left-[1.6rem] top-7 flex h-4 w-4 items-center justify-center sm:-left-[2.55rem]">
                    <span className="absolute h-4 w-4 rounded-full bg-secondary/30 animate-pulse-dot" />
                    <span className="relative h-3 w-3 rounded-full border-2 border-foreground bg-secondary" />
                  </span>
                  <div className="glass p-6 sm:p-7 md:flex md:flex-col md:items-center md:text-center">
                    <span className="sketch inline-flex bg-gold/60 px-3 py-1 text-xs font-bold text-foreground md:mx-auto">
                      {e.period}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                      {e.role}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-secondary">{e.org}</p>
                    <ul className="mt-4 space-y-2 w-full md:flex md:flex-col md:items-center">
                      {e.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground md:justify-center"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}