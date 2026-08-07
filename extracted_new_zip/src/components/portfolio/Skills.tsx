import { motion } from "motion/react";
import { Cloud, Code2, Cpu, ShoppingBag, TrendingUp, Check } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { TiltCard } from "./TiltCard";

const iconMap = {
  cpu: Cpu,
  code: Code2,
  cloud: Cloud,
  bag: ShoppingBag,
  trending: TrendingUp,
};

export function Skills() {
  return (
    <section id="skills" className="relative px-5 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills & Competency Matrix"
          subtitle="Depth across generative AI systems, full-stack engineering, cloud infrastructure, commerce and paid growth."
        />

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = iconMap[g.icon as keyof typeof iconMap];
            return (
              <Reveal key={g.title} delay={i * 0.07}>
                <TiltCard intensity={6} className="glass h-full p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="sketch inline-flex h-11 w-11 shrink-0 items-center justify-center bg-primary">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </span>
                    <h3 className="text-xl font-bold text-foreground">{g.title}</h3>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Proficiency</span>
                      <span className="font-bold text-secondary">{g.level}%</span>
                    </div>
                    <div className="mt-2 h-3 overflow-hidden rounded-full border-2 border-border bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${g.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-secondary"
                      />
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {g.skills.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}