import inkPress from "@/assets/proj-ink-press.jpg";
import aiLab from "@/assets/proj-ai-lab.jpg";
import vatsi from "@/assets/proj-vatsi.jpg";
import conscience from "@/assets/proj-conscience.jpg";
import metaAds from "@/assets/proj-meta-ads.jpg";
import publishIt from "@/assets/proj-publish-it.jpg";
import booksDna from "@/assets/proj-books-dna.jpg";
import kitaabe from "@/assets/proj-kitaabe.jpg";
import autonation from "@/assets/proj-autonation.jpg";
import myTutor from "@/assets/proj-mytutor.jpg";

export type ProjectCategory = "ai" | "saas" | "ecommerce" | "marketing";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  architecture: string;
  techStack: string[];
  metrics: string;
  links?: { live?: string; instagram?: string };
  featured?: boolean;
  role: string;
  image: string;
}

export const personalInfo = {
  name: "Dheeraj Sankhla",
  title: "Full-Stack Engineer • AI & MCP Architect • Growth Marketer",
  bio: "Visionary Software Engineer and Product Founder specializing in Generative AI architectures (LLMs, MCP, RAG), scalable cloud infrastructures (AWS & Supabase), high-converting e-commerce web applications, and data-driven Meta Ads performance marketing.",
  email: "dheeraj.sankhla.official@gmail.com",
  location: "India",
  availability: "Available for High-Impact Projects & Architectural Advisory",
};

export const roles = [
  "Full-Stack Software Architect",
  "Generative AI, MCP & RAG Engineer",
  "E-Commerce & AWS Cloud Developer",
  "Meta Ads & Performance Marketer",
];

export const expertiseBadges = ["MCP", "RAG", "AI Video", "AWS / Supabase", "Meta Ads"];

export const heroStats = [
  { value: "10+", label: "Web & SaaS Platforms" },
  { value: "AWS & Supabase", label: "Cloud Ecosystem" },
  { value: "Production Ready", label: "AI & MCP Integration" },
  { value: "High-ROAS Funnels", label: "Meta Ads & Growth" },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & Generative Labs" },
  { id: "saas", label: "SaaS & Publishing" },
  { id: "ecommerce", label: "E-Commerce & Brands" },
  { id: "marketing", label: "Growth & Meta Ads" },
] as const;

export const projects: Project[] = [
  {
    id: "ink-press",
    title: "The Ink Press Platform",
    category: "saas",
    categoryLabel: "SaaS & Publishing Tech",
    tagline: "End-to-End Self-Publishing Ecosystem & Author Studio",
    description:
      "Architected a full-stack self-publishing engine featuring automated author website generation, manuscript handling, ISBN tracking, royalty analytics, and AWS/Supabase cloud backend.",
    architecture:
      "React + TypeScript front end served through AWS Amplify, an Express API layer handling manuscript ingestion and ISBN lifecycle events, Supabase PostgreSQL with row-level security for author-scoped royalty data, and S3 buckets with signed URLs for manuscript and cover asset delivery. Automated author microsites are generated from templated builds and deployed per-author.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "AWS Amplify",
      "AWS S3",
    ],
    metrics: "Empowering 100+ authors with automated distribution & royalty workflows",
    links: { instagram: "https://www.instagram.com/theinkpress.in" },
    featured: true,
    role: "Founder & Lead Full-Stack Architect",
    image: inkPress,
  },
  {
    id: "genai-mcp-lab",
    title: "AI Video & MCP Agent Lab",
    category: "ai",
    categoryLabel: "AI & Generative Labs",
    tagline: "Autonomous Agentic Workflows, AI Video Creation & RAG Systems",
    description:
      "Built custom Generative AI agents leveraging Model Context Protocol (MCP), Retrieval-Augmented Generation (RAG) for domain docs, and automated AI video creation pipelines.",
    architecture:
      "MCP servers expose typed tools to LLM clients, backed by a vector store for domain-document retrieval with hybrid semantic + keyword ranking. A multi-modal pipeline chains script generation, ElevenLabs voice synthesis, and automated video assembly, orchestrated by an agent loop with tool-call validation, retries, and cost/latency telemetry.",
    techStack: [
      "Generative AI",
      "MCP (Model Context Protocol)",
      "RAG & Vector DBs",
      "Python",
      "TypeScript",
      "ElevenLabs API",
      "AI Video",
    ],
    metrics: "70%+ reduction in content workflow lead time via autonomous agents",
    featured: true,
    role: "AI Systems & Automation Engineer",
    image: aiLab,
  },
  {
    id: "vatsi-natural-foods",
    title: "Vatsi Natural Foods",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Brands",
    tagline: "High-Performance Direct-to-Consumer Organic Storefront",
    description:
      "Designed and developed the official e-commerce web platform for Vatsi Natural Foods, prioritizing lightning-fast page speed, mobile UX, and optimized checkout funnels.",
    architecture:
      "Lean hand-rolled storefront with critical-CSS inlining, deferred non-critical scripts, and responsive image pipelines to hold sub-1.2s loads. Payment gateway integration with a shortened checkout path, structured product data for SEO, and event instrumentation feeding the Meta Pixel for retargeting.",
    techStack: [
      "E-Commerce Architecture",
      "JavaScript",
      "HTML5/CSS3",
      "Payment Gateway",
      "SEO",
    ],
    metrics: "Optimized load speeds under 1.2s with enhanced mobile conversion rates",
    links: { live: "https://vatsinaturalfoods.com" },
    featured: true,
    role: "Full-Stack E-Commerce Developer",
    image: vatsi,
  },
  {
    id: "conscience-works",
    title: "Conscience Works Shopify",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Brands",
    tagline: "Custom Shopify Storefront & Product Experience",
    description:
      "Engineered a custom high-converting Shopify e-commerce storefront for Conscience Works, featuring bespoke theme customizations and brand storytelling.",
    architecture:
      "Custom Liquid sections and metafield-driven content blocks let the brand compose landing experiences without dev cycles. App stack tuned for speed, checkout extensions for upsells, and Meta Pixel + CAPI wired for accurate attribution across the funnel.",
    techStack: [
      "Shopify Liquid",
      "Shopify Apps",
      "UX/UI Design",
      "Performance Tuning",
      "Meta Pixel",
    ],
    metrics: "Bespoke conversion funnel and responsive checkout optimization",
    links: { live: "https://conscienceworks.myshopify.com/" },
    featured: true,
    role: "Shopify & E-Commerce Developer",
    image: conscience,
  },
  {
    id: "meta-ads-growth",
    title: "Performance Marketing & Meta Ads",
    category: "marketing",
    categoryLabel: "Growth & Marketing",
    tagline: "Data-Driven Facebook & Instagram Ad Campaigns",
    description:
      "Proficient in planning, scaling, and optimizing Meta Ads campaigns across D2C brands, publishing platforms, and lead generation funnels.",
    architecture:
      "Structured account architecture with clean CBO testing lanes, creative-first iteration cycles, custom and lookalike audience layering, and server-side CAPI events for durable attribution. Reporting stitched to first-party analytics so spend decisions map to real revenue, not platform-reported vanity metrics.",
    techStack: [
      "Meta Ads Manager",
      "Facebook Pixel & CAPI",
      "Targeting",
      "Funnel Analytics",
      "Social Growth",
    ],
    metrics: "Proven track record of high ROAS & audience scaling",
    links: { instagram: "https://www.instagram.com/theinkpress.in" },
    featured: true,
    role: "Performance Marketer & Growth Strategist",
    image: metaAds,
  },
  {
    id: "publish-it",
    title: "Publish-IT",
    category: "saas",
    categoryLabel: "SaaS & Publishing Tech",
    tagline: "Manuscript-to-Market Publishing Workflow SaaS",
    description:
      "A workflow SaaS that moves a manuscript from submission to distribution with editorial stages, collaborator roles, and automated status notifications.",
    architecture:
      "Role-based multi-tenant data model on PostgreSQL with policy-enforced access, a state machine driving editorial stages, background jobs for format conversion and notification fan-out, and object storage for versioned manuscript artifacts.",
    techStack: ["React", "TypeScript", "Node.js", "Supabase", "PostgreSQL", "REST APIs"],
    metrics: "Editorial pipeline visibility from submission through distribution",
    role: "Product Architect & Full-Stack Engineer",
    image: publishIt,
  },
  {
    id: "books-dna",
    title: "Books DNA",
    category: "ai",
    categoryLabel: "AI & Generative Labs",
    tagline: "Semantic Book Intelligence & Vector Discovery",
    description:
      "An AI-powered discovery layer that fingerprints books by theme, tone, and structure, enabling semantic search and recommendation far beyond keyword matching.",
    architecture:
      "Embedding pipeline chunks and vectorizes catalog text, stored in a pgvector-backed index. Similarity search is blended with metadata filters and reranked by an LLM pass to produce explainable 'why this book' recommendations.",
    techStack: ["RAG & Vector DBs", "pgvector", "OpenAI Embeddings", "Python", "PostgreSQL"],
    metrics: "Semantic recommendation quality beyond keyword search",
    role: "AI Engineer & Data Architect",
    image: booksDna,
  },
  {
    id: "kitaabe",
    title: "Kitaabe.in",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Brands",
    tagline: "Online Bookstore & Reader Commerce Experience",
    description:
      "A book commerce storefront with catalog browsing, faceted search, cart and checkout, and inventory-aware product pages.",
    architecture:
      "Catalog service with indexed faceted queries, cached listing pages for fast repeat browsing, cart persistence, and payment gateway checkout with order lifecycle emails.",
    techStack: ["React", "JavaScript", "Node.js", "PostgreSQL", "Payment Gateway", "SEO"],
    metrics: "Faceted catalog browsing with inventory-aware checkout",
    role: "Full-Stack Developer",
    image: kitaabe,
  },
  {
    id: "autonation",
    title: "AutoNation",
    category: "saas",
    categoryLabel: "SaaS & Platforms",
    tagline: "Vehicle Listing & Dealer Management Platform",
    description:
      "A vehicle marketplace with rich listing management, media galleries, dealer dashboards, and inquiry routing.",
    architecture:
      "Normalized listing schema with media stored on S3 and served through responsive transforms, dealer-scoped dashboards behind role checks, and an inquiry pipeline that routes leads with de-duplication and status tracking.",
    techStack: ["React", "Node.js", "Express", "AWS S3", "PostgreSQL"],
    metrics: "Dealer-scoped listing management with lead routing",
    role: "Full-Stack Engineer",
    image: autonation,
  },
  {
    id: "my-tutor",
    title: "My Tutor",
    category: "saas",
    categoryLabel: "SaaS & Platforms",
    tagline: "Tutor Discovery, Scheduling & Learning Platform",
    description:
      "An education platform connecting students with tutors through profile discovery, availability-aware scheduling, and session management.",
    architecture:
      "Availability engine resolving tutor calendars across time zones, booking transactions guarded against double-scheduling, notification jobs for reminders, and a review system tied to completed sessions only.",
    techStack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Auth", "Realtime"],
    metrics: "Conflict-free scheduling across tutor availability windows",
    role: "Full-Stack Engineer",
    image: myTutor,
  },
];

export const skillGroups = [
  {
    title: "AI, GenAI & Agentic Systems",
    icon: "cpu",
    level: 95,
    skills: [
      "Model Context Protocol (MCP)",
      "Retrieval-Augmented Generation (RAG)",
      "AI Video Creation & Synthetic Media",
      "LLMs (OpenAI, Gemini, Anthropic)",
      "Autonomous Agentic Workflows",
      "Prompt Engineering & Vector DBs",
    ],
  },
  {
    title: "Full-Stack & Web Engineering",
    icon: "code",
    level: 93,
    skills: [
      "React & TypeScript",
      "Node.js & Express APIs",
      "JavaScript (ES6+)",
      "HTML5, Vanilla CSS & Glassmorphism",
      "Vite & Bun",
      "REST & GraphQL APIs",
    ],
  },
  {
    title: "Cloud & Databases",
    icon: "cloud",
    level: 90,
    skills: [
      "Amazon AWS (S3, Amplify, RDS, Lambda)",
      "Supabase (Auth, DB, Realtime, Functions)",
      "PostgreSQL & SQL Optimization",
      "Docker",
      "Git",
    ],
  },
  {
    title: "E-Commerce & Digital Storefronts",
    icon: "bag",
    level: 91,
    skills: [
      "Custom E-Commerce Architecture",
      "Shopify Customization & Liquid",
      "Payment Gateway Integrations",
      "Conversion Rate Optimization (CRO)",
      "Page Speed Tuning",
    ],
  },
  {
    title: "Performance Marketing & Growth",
    icon: "trending",
    level: 89,
    skills: [
      "Meta Ads (Facebook & Instagram Ads)",
      "Custom Audiences & Retargeting",
      "Social Media Brand Operations",
      "Funnel Copywriting",
      "Analytics & Attribution",
    ],
  },
];

export const experience = [
  {
    period: "2024 — Present",
    role: "Founder & Chief Architect",
    org: "The Ink Press & Publish-IT Platform",
    points: [
      "Founded and architected an end-to-end self-publishing ecosystem serving authors from manuscript to distribution.",
      "Built automated author-site generation, ISBN tracking and royalty analytics on AWS + Supabase.",
      "Own brand operations and paid growth for @theinkpress.in.",
    ],
  },
  {
    period: "2023 — Present",
    role: "AI & Full-Stack Systems Engineer",
    org: "Autonomous AI & Web Solutions",
    points: [
      "Shipped production MCP servers and RAG retrieval systems over domain document corpora.",
      "Designed multi-modal AI video pipelines combining LLM scripting and synthetic voice.",
      "Delivered React/TypeScript + Node platforms with cloud-native deployment.",
    ],
  },
  {
    period: "2022 — Present",
    role: "E-Commerce Architect & Performance Marketer",
    org: "Vatsi Natural Foods & Conscience Works",
    points: [
      "Built and optimized D2C storefronts with sub-1.2s load targets and streamlined checkout.",
      "Engineered custom Shopify Liquid experiences and conversion-focused product pages.",
      "Planned and scaled Meta Ads campaigns with CAPI-backed attribution and high ROAS.",
    ],
  },
];

export const brandLinks = [
  {
    label: "@theinkpress.in",
    description: "Publishing house & author studio",
    href: "https://www.instagram.com/theinkpress.in",
  },
  {
    label: "@thekrishna_org",
    description: "Brand & community operations",
    href: "https://www.instagram.com/thekrishna_org/",
  },
  {
    label: "vatsinaturalfoods.com",
    description: "Direct-to-consumer organic storefront",
    href: "https://vatsinaturalfoods.com",
  },
  {
    label: "conscienceworks.myshopify.com",
    description: "Custom Shopify commerce experience",
    href: "https://conscienceworks.myshopify.com/",
  },
];