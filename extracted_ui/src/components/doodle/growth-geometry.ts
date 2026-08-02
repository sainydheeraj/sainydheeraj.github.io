/** Shared, deterministic pencil-tree geometry. viewBox is 0 0 1000 1000. */

export const GROUND_Y = 890;

export const GROUND_PATH =
  "M 40 892 C 200 884, 330 898, 470 889 C 610 881, 760 897, 962 887";

export const SOIL_TICKS = [
  "M 120 900 l 22 16",
  "M 210 906 l 18 14",
  "M 320 898 l 24 18",
  "M 430 908 l 18 14",
  "M 560 900 l 22 16",
  "M 670 906 l 18 14",
  "M 790 898 l 24 18",
  "M 890 906 l 18 14",
];

/** Closed trunk silhouette with a natural taper and a root flare. */
export const TRUNK_PATH =
  "M 432 893 C 446 850, 452 816, 466 756 C 476 708, 482 656, 486 596 C 489 548, 491 496, 492 430 " +
  "L 514 430 C 516 498, 519 550, 524 600 C 530 660, 536 710, 546 762 C 558 820, 562 854, 574 893 " +
  "C 548 883, 526 879, 503 879 C 480 879, 458 883, 432 893 Z";

/** Bark hatching — short broken graphite strokes inside the trunk. */
export const BARK_HATCH = [
  "M 462 850 c 10 -18, 12 -34, 10 -52",
  "M 486 836 c 8 -22, 8 -40, 6 -58",
  "M 520 846 c -6 -20, -8 -38, -6 -56",
  "M 470 764 c 8 -16, 10 -30, 8 -46",
  "M 498 748 c 4 -18, 4 -34, 2 -50",
  "M 524 758 c -4 -16, -6 -30, -4 -46",
  "M 482 668 c 6 -14, 8 -26, 6 -40",
  "M 508 660 c -2 -14, -3 -26, -2 -40",
  "M 490 574 c 4 -12, 5 -22, 4 -34",
  "M 512 566 c -2 -12, -3 -22, -2 -34",
];

export type Branch = {
  d: string;
  /** tip in viewBox coords — where a fruit may hang */
  tip: [number, number];
  /** relative stroke weight */
  w: number;
};

/** Sparse, widely-spread limbs. Order matters: it drives the draw stagger. */
export const BRANCHES: Branch[] = [
  { d: "M 484 730 C 420 726, 356 706, 292 674 C 262 659, 226 648, 186 642", tip: [186, 642], w: 3.4 },
  { d: "M 522 718 C 592 714, 660 692, 726 658 C 758 641, 796 630, 838 624", tip: [838, 624], w: 3.4 },
  { d: "M 486 640 C 424 618, 372 582, 328 534 C 302 506, 274 486, 244 470", tip: [244, 470], w: 2.8 },
  { d: "M 520 626 C 584 606, 638 570, 682 522 C 708 494, 738 474, 770 458", tip: [770, 458], w: 2.8 },
  { d: "M 328 534 C 322 494, 314 464, 300 428", tip: [300, 428], w: 1.9 },
  { d: "M 682 522 C 690 482, 700 452, 714 416", tip: [714, 416], w: 1.9 },
  { d: "M 490 540 C 452 502, 424 462, 402 414 C 392 392, 378 372, 362 356", tip: [362, 356], w: 2.4 },
  { d: "M 516 526 C 556 490, 584 452, 606 406 C 616 384, 630 364, 646 348", tip: [646, 348], w: 2.4 },
  { d: "M 498 434 C 494 386, 492 348, 496 304 C 498 282, 500 268, 502 252", tip: [502, 252], w: 2.5 },
  { d: "M 496 366 C 468 330, 442 306, 414 286", tip: [414, 286], w: 1.7 },
  { d: "M 500 354 C 530 322, 556 300, 584 282", tip: [584, 282], w: 1.7 },
];

/** Leaf ticks clustered near each limb tip. Offsets are deterministic. */
const LEAF_OFFSETS: Array<[number, number, number]> = [
  [-30, -22, -38],
  [14, -36, 16],
  [36, -8, 48],
  [-18, 14, -62],
  [28, 20, 22],
  [-46, 2, 6],
  [6, -54, -12],
];

export function leavesForTip([x, y]: [number, number], count: number) {
  return LEAF_OFFSETS.slice(0, count).map(([dx, dy, r], i) => ({
    key: `${x}-${y}-${i}`,
    x: x + dx,
    y: y + dy,
    r,
  }));
}

/** A single hand-drawn leaf blade, drawn around the origin. */
export const LEAF_PATH = "M 0 0 C 10 -9, 24 -8, 30 2 C 22 12, 8 12, 0 0 Z";
export const LEAF_VEIN = "M 1 1 L 27 2";

export const RAIN_DROPS = Array.from({ length: 30 }, (_, i) => ({
  x: 40 + ((i * 173) % 920),
  delay: ((i * 137) % 100) / 100,
  len: 16 + ((i * 53) % 18),
  dur: 1.1 + ((i * 31) % 60) / 100,
}));