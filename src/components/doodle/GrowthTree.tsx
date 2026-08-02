import { useEffect, useMemo, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import type { Project } from "@/data/portfolio";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import {
  BARK_HATCH,
  BRANCHES,
  GROUND_PATH,
  LEAF_PATH,
  LEAF_VEIN,
  RAIN_DROPS,
  SOIL_TICKS,
  TRUNK_PATH,
  leavesForTip,
} from "./growth-geometry";

const VIEW_BOX = "0 0 1000 1000";
const ASPECT = "xMidYMax meet";
/** on tall phone screens, centre the drawing so the canopy lands mid-viewport */
const ASPECT_MOBILE = "xMidYMid meet";

const ink = "var(--graphite)";

/* hand-drawn fruit button colours: soft fill + deeper ink-tinted stroke */
const FRUIT_COLORS: { fill: string; stroke: string }[] = [
  { fill: "#FFD8A8", stroke: "#B45309" },
  { fill: "#B2F2BB", stroke: "#177245" },
  { fill: "#A5D8FF", stroke: "#1454A3" },
  { fill: "#FFC9C9", stroke: "#B02525" },
  { fill: "#E5DBFF", stroke: "#5B3CB8" },
  { fill: "#FFF3BF", stroke: "#9A7B0A" },
  { fill: "#C3FAE8", stroke: "#0B7285" },
  { fill: "#FFD6E7", stroke: "#A61E67" },
  { fill: "#D8F5A2", stroke: "#4C7A0B" },
  { fill: "#D0EBFF", stroke: "#1B6AA5" },
  { fill: "#FFE3BF", stroke: "#A2530E" },
  { fill: "#E9D5FF", stroke: "#6D28D9" },
];

/* ------------------------------------------------------------------ */
/* shared defs                                                         */
/* ------------------------------------------------------------------ */

function PencilDefs({ id }: { id: string }) {
  return (
    <defs>
      <filter id={`${id}-rough`} x="-12%" y="-12%" width="124%" height="124%">
        <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="7" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="2.4" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id={`${id}-rough-soft`} x="-12%" y="-12%" width="124%" height="124%">
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3" result="n2" />
        <feDisplacementMap in="SourceGraphic" in2="n2" scale="1.4" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  );
}

/* ------------------------------------------------------------------ */
/* sky — sun / moon / stars on their own repeating cycle               */
/* ------------------------------------------------------------------ */

const CYCLES = 2.5;
const phase = (p: number) => (p * CYCLES) % 1;
const arcY = (t: number) => 270 - 210 * Math.sin(Math.PI * t);
/** the moon rides a higher, shallower arc so it never sits beside the sun */
const arcYMoon = (t: number) => 150 - 120 * Math.sin(Math.PI * t);
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

function Sky({ p }: { p: MotionValue<number> }) {
  const sunX = useTransform(p, (v) => 110 + 780 * phase(v));
  const sunY = useTransform(p, (v) => arcY(phase(v)));
  const sunO = useTransform(p, (v) => clamp01((Math.sin(Math.PI * phase(v)) - 0.55) * 3.2));

  const moonX = useTransform(p, (v) => 110 + 780 * ((phase(v) + 0.5) % 1));
  const moonY = useTransform(p, (v) => arcYMoon((phase(v) + 0.5) % 1));
  const moonO = useTransform(p, (v) =>
    clamp01((Math.sin(Math.PI * ((phase(v) + 0.5) % 1)) - 0.55) * 3.2),
  );
  return (
    <g>
      {/* sun */}
      <motion.g style={{ x: sunX, y: sunY, opacity: sunO }}>
        <circle r="30" fill="none" stroke={ink} strokeWidth="2.4" opacity="0.75" />
        <circle r="37" fill="none" stroke={ink} strokeWidth="1" strokeDasharray="3 9" opacity="0.5" />
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const r1 = 44;
          const r2 = 58;
          return (
            <line
              key={i}
              x1={(Math.cos(a) * r1).toFixed(1)}
              y1={(Math.sin(a) * r1).toFixed(1)}
              x2={(Math.cos(a) * r2).toFixed(1)}
              y2={(Math.sin(a) * r2).toFixed(1)}
              stroke={ink}
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.55"
            />
          );
        })}
      </motion.g>

      {/* moon */}
      <motion.g style={{ x: moonX, y: moonY, opacity: moonO }}>
        <path
          d="M 8 -28 A 28 28 0 1 0 8 28 A 22 22 0 1 1 8 -28 Z"
          fill="none"
          stroke={ink}
          strokeWidth="2.2"
          opacity="0.75"
        />
        {[
          [-70, -40],
          [64, -52],
          [92, 14],
          [-96, 22],
          [-40, -74],
        ].map(([sx, sy], i) => (
          <g key={i} transform={`translate(${sx} ${sy})`} opacity="0.55">
            <line x1="-6" y1="0" x2="6" y2="0" stroke={ink} strokeWidth="1.4" strokeLinecap="round" />
            <line x1="0" y1="-6" x2="0" y2="6" stroke={ink} strokeWidth="1.4" strokeLinecap="round" />
          </g>
        ))}
      </motion.g>
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* rain                                                                */
/* ------------------------------------------------------------------ */

function Rain({ o, count }: { o: MotionValue<number>; count: number }) {
  return (
    <motion.g style={{ opacity: o }} stroke={ink} strokeWidth="1.6" strokeLinecap="round" opacity={0.5}>
      {RAIN_DROPS.slice(0, count).map((d, i) => (
        <line
          key={i}
          x1={d.x}
          y1="0"
          x2={d.x - 14}
          y2={d.len}
          className="doodle-rain"
          style={{ animationDelay: `${d.delay}s`, animationDuration: `${d.dur}s` }}
        />
      ))}
      {[180, 380, 600, 820].map((x, i) => (
        <ellipse
          key={x}
          cx={x}
          cy={896}
          rx="16"
          ry="4"
          fill="none"
          className="doodle-ripple"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
    </motion.g>
  );
}

/* ------------------------------------------------------------------ */
/* main                                                                */
/* ------------------------------------------------------------------ */

export function GrowthTree({ projects }: { projects: Project[] }) {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const frozen = useMotionValue(0.74);
  const raw = reduced ? frozen : scrollYProgress;

  const [selected, setSelected] = useState<Project | null>(null);
  const [fruitsLive, setFruitsLive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  /** where the projects section sits, as a fraction of total scroll */
  const [anchor, setAnchor] = useState<[number, number]>([0.4, 0.55]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const measure = () => {
      const el =
        document.getElementById("tree-bloom") ?? document.getElementById("projects");
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (!el || scrollable <= 0) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const bottom = top + el.offsetHeight;
      const bs = Math.min(0.92, Math.max(0.1, (top - window.innerHeight * 0.05) / scrollable));
      const be = Math.min(0.97, Math.max(bs + 0.04, (bottom - window.innerHeight * 0.85) / scrollable));
      setAnchor((prev) =>
        Math.abs(prev[0] - bs) < 0.002 && Math.abs(prev[1] - be) < 0.002 ? prev : [bs, be],
      );
    };
    measure();
    const t = setTimeout(measure, 600);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, []);

  /**
   * Remap real page scroll onto the designed growth timeline so that the
   * canopy reaches full bloom exactly across the projects section.
   */
  const [bloomStart, bloomEnd] = anchor;
  const p = useTransform(
    raw,
    [0, bloomStart, bloomEnd, Math.min(0.995, bloomEnd + 0.05), 1],
    [0, 0.755, 0.86, 0.905, 1],
  );

  useMotionValueEvent(p, "change", (v) => {
    const live = v > 0.745 && v < 0.87;
    setFruitsLive((prev) => (prev === live ? prev : live));
  });
  useEffect(() => {
    if (reduced) setFruitsLive(true);
  }, [reduced]);

  /* ---- stage timings ---- */
  const layerO = useTransform(p, [0, 0.01, 0.965, 0.99], [1, 1, 1, 0]);

  const groundDraw = useTransform(p, [0.02, 0.085, 0.93, 0.975], [0, 1, 1, 0]);
  const groundO = useTransform(p, [0.015, 0.05, 0.935, 0.98], [0, 1, 1, 0]);
  const soilO = useTransform(p, [0.07, 0.12, 0.91, 0.95], [0, 1, 1, 0]);

  const pencilO = useTransform(p, [0.015, 0.03, 0.075, 0.095], [0, 1, 1, 0]);
  const pencilX = useTransform(p, [0.02, 0.085], [40, 962]);

  const seedO = useTransform(p, [0.095, 0.115, 0.275, 0.315], [0, 1, 1, 0]);
  const seedY = useTransform(p, [0.1, 0.16], [-720, 0]);
  const seedSquash = useTransform(p, [0.155, 0.168, 0.182], [1, 0.62, 1]);

  /* rain falls across the whole page, easing in at the very top and out at the end */
  const rain1 = useTransform(p, [0.01, 0.06, 0.93, 0.98], [0, 0.9, 0.9, 0]);

  const sproutDraw = useTransform(p, [0.2, 0.31, 0.4, 0.46], [0, 1, 1, 0]);
  const sproutO = useTransform(p, [0.195, 0.23, 0.4, 0.46], [0, 1, 1, 0]);

  const trunkClipY = useTransform(p, [0.28, 0.62, 0.9, 0.96], [900, 400, 400, 900]);
  const trunkClipH = useTransform(trunkClipY, (v) => Math.max(0, 910 - v));
  const trunkO = useTransform(p, [0.27, 0.34, 0.92, 0.965], [0, 1, 1, 0]);
  const barkO = useTransform(p, [0.42, 0.56, 0.89, 0.94], [0, 0.55, 0.55, 0]);

  const leafO = useTransform(p, [0.58, 0.74, 0.865, 0.9], [0, 1, 1, 0]);
  const leafDrift = useTransform(p, [0.862, 0.91], [0, 110]);

  const fruitO = useTransform(p, [0.735, 0.772, 0.855, 0.878], [0, 1, 1, 0]);

  const rainCount = isMobile ? 14 : 30;
  const leafPerTip = isMobile ? 4 : 7;

  /* ---- fruits mapped to real branch tips ---- */
  const fruits = useMemo(() => {
    const h = 54;
    const base = projects.slice(0, BRANCHES.length).map((project, i) => {
      const tip = BRANCHES[i]!.tip;
      const label = project.title.length > 22 ? `${project.title.slice(0, 21)}…` : project.title;
      const w = Math.max(112, Math.min(250, label.length * 9.4 + 44));
      return { project, label, tip, w, h, cx: tip[0], cy: tip[1] + 34 + h / 2 };
    });

    // Greedy, deterministic de-overlap: nudge each tag further down its stem.
    const placed: typeof base = [];
    for (const f of [...base].sort((a, b) => a.cy - b.cy)) {
      let guard = 0;
      while (
        guard++ < 60 &&
        placed.some(
          (o) =>
            Math.abs(o.cx - f.cx) < (o.w + f.w) / 2 + 16 && Math.abs(o.cy - f.cy) < h + 18,
        )
      ) {
        f.cy += 16;
      }
      placed.push(f);
    }
    return base;
  }, [projects]);

  return (
    <>
      {/* ---------- back layer: sky, ground, trunk, branches, leaves ---------- */}
      <motion.svg
        aria-hidden
        viewBox={VIEW_BOX}
        preserveAspectRatio={isMobile ? ASPECT_MOBILE : ASPECT}
        style={{ opacity: layerO }}
        className="pointer-events-none fixed inset-0 -z-[5] h-full w-full"
        fill="none"
      >
        <PencilDefs id="gt" />
        <clipPath id="gt-trunk-clip">
          <motion.rect x="0" width="1000" style={{ y: trunkClipY, height: trunkClipH }} />
        </clipPath>

        <Sky p={p} />

        <g filter="url(#gt-rough-soft)">
          {/* ground */}
          <motion.g style={{ opacity: groundO }}>
            <motion.path
              d={GROUND_PATH}
              stroke={ink}
              strokeWidth="2.6"
              strokeLinecap="round"
              style={{ pathLength: groundDraw }}
              opacity="0.85"
            />
            <motion.path
              d="M 46 900 C 210 894, 336 908, 474 899 C 612 890, 764 906, 956 896"
              stroke={ink}
              strokeWidth="1.2"
              strokeLinecap="round"
              style={{ pathLength: groundDraw }}
              opacity="0.4"
            />
            <motion.g style={{ opacity: soilO }} stroke={ink} strokeWidth="1.3" strokeLinecap="round" opacity="0.35">
              {SOIL_TICKS.map((d) => (
                <path key={d} d={d} />
              ))}
            </motion.g>
          </motion.g>

          {/* pencil drawing the ground */}
          <motion.g style={{ opacity: pencilO, x: pencilX, y: 872 }}>
            <g transform="rotate(28)">
              <path d="M 0 0 l 10 -6 l 0 -12 l -10 6 Z" fill={ink} opacity="0.85" />
              <path d="M 0 -12 l 10 -6 l 0 -58 l -10 6 Z" fill="none" stroke={ink} strokeWidth="2" />
              <path d="M 0 -76 l 10 -6 l 0 -14 l -10 6 Z" fill="none" stroke={ink} strokeWidth="2" />
            </g>
          </motion.g>

          {/* seed */}
          <motion.g style={{ opacity: seedO }}>
            <motion.g style={{ x: 500, y: 872 }}>
              <motion.g style={{ y: seedY, scaleY: seedSquash }}>
                <path
                  d="M 0 -14 C 11 -12, 16 -3, 12 7 C 8 16, -8 16, -12 7 C -16 -3, -11 -12, 0 -14 Z"
                  fill="none"
                  stroke={ink}
                  strokeWidth="2.2"
                />
                <path d="M -4 -6 C -1 0, 1 5, 3 9" stroke={ink} strokeWidth="1.2" opacity="0.6" />
              </motion.g>
            </motion.g>
          </motion.g>

          {/* sprout */}
          <motion.g style={{ opacity: sproutO }} stroke={ink} strokeLinecap="round">
            <motion.path
              d="M 500 888 C 499 862, 501 842, 500 812"
              strokeWidth="2.4"
              style={{ pathLength: sproutDraw }}
            />
            <motion.path
              d="M 500 838 C 478 834, 462 822, 456 806 C 474 800, 492 812, 500 830"
              strokeWidth="2"
              style={{ pathLength: sproutDraw }}
            />
            <motion.path
              d="M 501 826 C 522 820, 538 806, 542 790 C 524 786, 508 800, 501 818"
              strokeWidth="2"
              style={{ pathLength: sproutDraw }}
            />
          </motion.g>

          {/* trunk */}
          <motion.g style={{ opacity: trunkO }} clipPath="url(#gt-trunk-clip)">
            <path d={TRUNK_PATH} fill="var(--background)" stroke={ink} strokeWidth="2.6" strokeLinejoin="round" />
            <path
              d={TRUNK_PATH}
              fill="none"
              stroke={ink}
              strokeWidth="1"
              opacity="0.35"
              transform="translate(2.5 -2)"
            />
            <motion.g style={{ opacity: barkO }} stroke={ink} strokeWidth="1.3" strokeLinecap="round" fill="none">
              {BARK_HATCH.map((d) => (
                <path key={d} d={d} />
              ))}
            </motion.g>
            {/* root flare */}
            <g stroke={ink} strokeWidth="2" strokeLinecap="round" opacity="0.8">
              <path d="M 438 890 C 414 886, 396 892, 380 900" />
              <path d="M 568 890 C 594 886, 614 892, 632 900" />
            </g>
          </motion.g>

          {/* branches */}
          {BRANCHES.map((b, i) => {
            const s = 0.36 + i * 0.026;
            return (
              <BranchStroke key={b.d} p={p} d={b.d} w={b.w} start={s} end={s + 0.1} index={i} />
            );
          })}

          {/* leaves */}
          <motion.g style={{ opacity: leafO, y: leafDrift }}>
            {BRANCHES.map((b) =>
              leavesForTip(b.tip, leafPerTip).map((l) => (
                <g key={l.key} transform={`translate(${l.x} ${l.y}) rotate(${l.r})`}>
                  <path d={LEAF_PATH} fill="none" stroke={ink} strokeWidth="1.6" strokeLinejoin="round" />
                  <path d={LEAF_VEIN} fill="none" stroke={ink} strokeWidth="0.9" opacity="0.5" />
                </g>
              )),
            )}
          </motion.g>
        </g>

        <Rain o={rain1} count={rainCount} />
      </motion.svg>

      {/* ---------- front layer: clickable fruit name tags ---------- */}
      <svg
        viewBox={VIEW_BOX}
        preserveAspectRatio={isMobile ? ASPECT_MOBILE : ASPECT}
        className="pointer-events-none fixed inset-0 z-30 h-full w-full"
        fill="none"
        aria-hidden={!fruitsLive}
      >
        <PencilDefs id="gtf" />
        <defs>
          <filter id="gtf-shadow" x="-30%" y="-40%" width="160%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="3.2" floodColor="#1f2937" floodOpacity="0.28" />
          </filter>
        </defs>
        <motion.g style={{ opacity: fruitO }}>
          {fruits.map(({ project, label, tip, w, h, cx, cy }, i) => {
            const stem = cy - h / 2 - tip[1];
            const c = FRUIT_COLORS[i % FRUIT_COLORS.length]!;
            return (
              <g key={project.id}>
                <path
                  d={`M ${tip[0]} ${tip[1]} C ${tip[0] + 6} ${tip[1] + stem * 0.4}, ${tip[0] - 5} ${tip[1] + stem * 0.7}, ${cx} ${cy - h / 2}`}
                  stroke={ink}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <motion.g
                  className={fruitsLive ? "pointer-events-auto cursor-pointer" : "pointer-events-none"}
                  onClick={() => fruitsLive && setSelected(project)}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  role="button"
                  tabIndex={fruitsLive ? 0 : -1}
                  aria-label={`Open case study: ${project.title}`}
                  onKeyDown={(e: ReactKeyboardEvent) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(project);
                    }
                  }}
                >
                  <ellipse cx={cx} cy={cy} rx={w / 2 + 10} ry={h / 2 + 10} fill="transparent" />
                  <ellipse
                    cx={cx}
                    cy={cy}
                    rx={w / 2}
                    ry={h / 2}
                    fill={c.fill}
                    stroke={c.stroke}
                    strokeWidth="2.6"
                    filter="url(#gtf-shadow)"
                  />
                  <ellipse
                    cx={cx + 2}
                    cy={cy + 2.5}
                    rx={w / 2 - 3}
                    ry={h / 2 - 3}
                    fill="none"
                    stroke={c.stroke}
                    strokeWidth="1"
                    opacity="0.45"
                    filter="url(#gtf-rough)"
                  />
                  <text
                    x={cx}
                    y={cy + 9}
                    textAnchor="middle"
                    fill={c.stroke}
                    style={{ fontFamily: "var(--font-hand)", fontSize: 26, letterSpacing: "0.01em" }}
                  >
                    {label}
                  </text>
                </motion.g>
              </g>
            );
          })}
        </motion.g>
      </svg>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}

function BranchStroke({
  p,
  d,
  w,
  start,
  end,
  index,
}: {
  p: MotionValue<number>;
  d: string;
  w: number;
  start: number;
  end: number;
  index: number;
}) {
  const off = 0.868 + index * 0.005;
  const draw = useTransform(p, [start, end, off, off + 0.055], [0, 1, 1, 0]);
  return (
    <g>
      <motion.path
        d={d}
        stroke={ink}
        strokeWidth={w}
        strokeLinecap="round"
        fill="none"
        style={{ pathLength: draw }}
      />
      <motion.path
        d={d}
        stroke={ink}
        strokeWidth={Math.max(0.8, w * 0.4)}
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
        transform="translate(2 -2.5)"
        style={{ pathLength: draw }}
      />
    </g>
  );
}