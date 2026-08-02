## Goal

Replace the dedicated tree section with one continuous, scroll-driven pencil illustration that lives behind the whole page on a clean white background, growing from an empty page into a full blooming tree exactly when the projects section arrives, then receding to a blank page at the end.

## The scroll story

```text
0%    blank white page — nothing drawn
5%    a pencil sketches the ground line, left to right
12%   a seed drops, bounces, settles into the soil
20%   first rain shower — dashes + ripples
28%   sprout breaks soil, two seed leaves
40%   sapling: trunk thickens, first branches
50%   second rain shower
60%   branches spread wide and thin, sparse leaf ticks
75%   FULL BLOOM — projects section — oval name tags hang from branch tips
90%   leaves drift off, branches fade back
100%  blank white page again
```

Sun and moon run their own independent cycle the whole way down: sun arcs up and across, sets, moon and a few star ticks rise, repeat. Only ever a soft graphite wash — never a dark mode.

## Look

- Pure white paper, graphite linework only. No cream, no color fills.
- Realistic pencil feel: tapered double-contour trunk, bark hatching, branches that split into thinner limbs with real gaps between them — not a green lollipop.
- Sparse leaf ticks clustered near branch tips only, lots of white showing through.
- Fruits are hand-drawn irregular ovals hanging on a short curved stem from a branch tip, containing only the project name in the handwritten font. Widely spaced, no two ovals touching.
- Everything draws itself stroke-by-stroke with `pathLength`, so it reads as a pencil actually drawing.

## Interaction

- Tapping an oval opens the existing full project modal with the complete case study.
- Ovals get a 44px+ hit area and a gentle wobble on press for mobile.
- The List view toggle stays as a fallback.

## Technical notes

- Rewrite `src/components/doodle/ProjectTree.tsx` into a single fixed, full-viewport `position: fixed` SVG layer mounted once in the root layout behind all content, driven by document-level `useScroll` progress rather than a local section track.
- All stage transitions come from `useTransform` ranges off one shared `scrollYProgress`, so growth and page content scroll together.
- Fruit anchor points are derived from the branch geometry (branch tip coordinates), not a golden-angle overlay, so each tag hangs off a real limb.
- Fruits render in an HTML overlay positioned from the SVG tip coordinates, so text stays crisp and buttons stay accessible.
- Remove the 280vh dedicated tree track from `src/components/portfolio/Projects.tsx`; the section keeps only the filters, toggle, and clickable fruit layer.
- Precompute all coordinates as rounded constants to avoid SSR hydration mismatches.
- Mobile: reduce leaf tick and rain drop counts, and honor `prefers-reduced-motion` by rendering the bloom state statically.
