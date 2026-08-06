import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Cpu,
  ExternalLink,
  Instagram,
  Layers,
  LayoutGrid,
  Search,
  ShoppingBag,
  Sparkles,
  TreeDeciduous,
  TrendingUp,
} from "lucide-react";
import { categories, projects, type Project } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { ProjectModal } from "./ProjectModal";

const icons = { all: Layers, ai: Cpu, saas: Sparkles, ecommerce: ShoppingBag, marketing: TrendingUp };

export function Projects() {
  const [active, setActive] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Project | null>(null);
  const [view, setView] = useState<"tree" | "list">("tree");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const inCategory = active === "all" || p.category === active;
      if (!inCategory) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [active, query]);

  return (
    <section id="projects" className="relative px-5 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Ventures, Platforms & Labs"
          subtitle="Ten shipped products spanning publishing SaaS, generative AI systems, D2C commerce and performance growth."
        />

        <Reveal className="mb-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-center lg:flex-wrap">
            <div className="glass -mx-1 flex gap-1.5 overflow-x-auto p-1.5 lg:flex-wrap lg:overflow-visible lg:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((c) => {
                const Icon = icons[c.id as keyof typeof icons];
                const isActive = active === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    className={`relative inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${
                      isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="category-pill"
                        className="absolute inset-0 rounded-xl bg-primary"
                        transition={{ type: "spring", stiffness: 320, damping: 30 }}
                      />
                    ) : null}
                    <Icon className="relative h-4 w-4" />
                    <span className="relative">{c.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center lg:w-auto">
            <div className="glass flex items-center gap-3 px-4 py-3 lg:w-72">
              <Search className="h-4 w-4 shrink-0 text-primary" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search React, AWS, MCP, Meta…"
                aria-label="Search projects"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <div className="glass flex gap-1 p-1.5">
              {(
                [
                  { id: "tree", label: "Tree", Icon: TreeDeciduous },
                  { id: "list", label: "List", Icon: LayoutGrid },
                ] as const
              ).map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => setView(id)}
                  aria-pressed={view === id}
                  className={`inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl px-4 text-xs font-semibold transition-colors sm:text-sm ${
                    view === id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </div>
            </div>
          </div>
        </Reveal>

        {view === "tree" ? (
          <>
            <Reveal>
              <p className="glass mx-auto max-w-md rounded-2xl px-6 py-5 text-center font-display text-2xl leading-snug text-foreground">
                Keep scrolling — the tree behind this page comes into full bloom. Tap any hanging
                name tag to open its case study.
              </p>
            </Reveal>
            {/* empty stage: the canopy blooms here so name tags never overlap content */}
            <div
              id="tree-bloom"
              aria-hidden
              className="pointer-events-none min-h-[150vh] sm:min-h-[170vh]"
            />
          </>
        ) : (
        <motion.div layout className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard intensity={7} className="glass group h-full overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} preview artwork`}
                      width={1280}
                      height={720}
                      loading="lazy"
                      className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                    <span className="sketch absolute left-4 top-4 bg-card px-3 py-1 text-[11px] font-semibold text-primary">
                      {p.categoryLabel}
                    </span>
                    {p.featured ? (
                      <span className="sketch absolute right-4 top-4 bg-gold px-3 py-1 text-[11px] font-bold text-foreground">
                        Featured
                      </span>
                    ) : null}
                    {p.logo ? (
                      <div className="sketch absolute bottom-3 right-4 flex h-11 w-11 items-center justify-center rounded-xl bg-card/95 p-1.5 backdrop-blur-md shadow-elevated border border-border">
                        <img src={p.logo} alt={`${p.title} original logo`} className="h-full w-full object-contain" />
                      </div>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-4 p-5 sm:p-6">
                    <div>
                      <div className="flex items-center gap-3">
                        {p.logo ? (
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-card/80 p-1.5 shadow-sm">
                            <img src={p.logo} alt={`${p.title} logo`} className="h-full w-full object-contain" />
                          </div>
                        ) : null}
                        <h3 className="font-display text-2xl font-bold text-foreground">
                          {p.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm font-semibold text-primary">{p.tagline}</p>
                    </div>
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.techStack.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border bg-muted/50 px-2 py-1 text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                      {p.techStack.length > 4 ? (
                        <span className="rounded-md px-2 py-1 text-[11px] text-muted-foreground">
                          +{p.techStack.length - 4}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-1 flex flex-wrap items-center justify-between gap-3 border-t-2 border-dashed border-border pt-4">
                      <button
                        onClick={() => setSelected(p)}
                        className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-foreground transition-colors hover:text-primary"
                      >
                        View Case Study
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                      <div className="flex items-center gap-2">
                        {p.links?.live ? (
                          <a
                            href={p.links.live}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${p.title} live site`}
                            className="sketch inline-flex h-11 w-11 items-center justify-center bg-card text-muted-foreground transition-colors hover:text-primary"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : null}
                        {p.links?.instagram ? (
                          <a
                            href={p.links.instagram}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${p.title} Instagram`}
                            className="sketch inline-flex h-11 w-11 items-center justify-center bg-card text-muted-foreground transition-colors hover:text-secondary"
                          >
                            <Instagram className="h-4 w-4" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        )}

        {filtered.length === 0 && view === "list" ? (
          <p className="glass mt-6 rounded-2xl p-10 text-center text-sm text-muted-foreground">
            No projects match that search. Try “AWS”, “MCP”, “Shopify” or “Meta”.
          </p>
        ) : null}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}