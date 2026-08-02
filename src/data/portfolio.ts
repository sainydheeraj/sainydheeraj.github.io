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

import logoInkPress from "@/assets/logos/ink-press.svg";
import logoGenAiLab from "@/assets/logos/genai-mcp-lab.svg";
import logoVatsi from "@/assets/logos/vatsi.png";
import logoConscience from "@/assets/logos/conscience.png";
import logoMetaAds from "@/assets/logos/meta-ads.svg";
import logoPublishIt from "@/assets/logos/publish-it.svg";
import logoBooksDna from "@/assets/logos/books-dna.svg";
import logoKitaabe from "@/assets/logos/kitaabe.svg";
import logoAutonation from "@/assets/logos/autonation.svg";
import logoMyTutor from "@/assets/logos/mytutor.svg";

export type ProjectCategory = "ai" | "saas" | "ecommerce" | "marketing";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  problemSolved?: string;
  highlights?: string[];
  architecture: string;
  techStack: string[];
  metrics: string;
  links?: { live?: string; instagram?: string };
  featured?: boolean;
  role: string;
  image: string;
  logo?: string;
}

export const personalInfo = {
  name: "Dheeraj Sankhla",
  title: "Full-Stack Engineer • AI & MCP Architect • Growth Marketer",
  bio: "Visionary Software Architect and Founder specializing in Generative AI architectures (LLMs, MCP, RAG), scalable cloud infrastructures (AWS & Supabase), high-converting e-commerce web applications, and data-driven Meta Ads performance marketing.",
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
      "Architected a comprehensive full-stack publishing engine empowering authors with automated website generation, manuscript handling, ISBN lifecycle tracking, royalty analytics, and secure AWS/Supabase cloud infrastructure.",
    problemSolved:
      "Traditional publishing is slow and opaque, while self-publishing requires authors to juggle separate tools for website hosting, manuscript formatting, distribution, and royalty tracking.",
    highlights: [
      "Automated Author Website Builder generating personalized microsites instantly.",
      "Centralized manuscript studio with versioning and editor collaboration tools.",
      "Real-time royalty calculation engine with row-level security for author earnings.",
      "AWS Amplify & S3 pipeline with signed URLs for secure manuscript file delivery.",
    ],
    architecture:
      "React + TypeScript front end hosted on AWS Amplify, Node.js + Express API layer handling manuscript ingestion and ISBN lifecycle events, Supabase PostgreSQL with row-level security for author data privacy, and AWS S3 buckets for manuscript asset storage.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "AWS Amplify",
      "AWS S3",
      "Meta Pixel",
    ],
    metrics: "Empowering 100+ authors with automated publishing pipelines & royalty transparency",
    links: { instagram: "https://www.instagram.com/theinkpress.in" },
    featured: true,
    role: "Founder & Lead Full-Stack Architect",
    image: inkPress,
    logo: logoInkPress,
  },
  {
    id: "genai-mcp-lab",
    title: "AI Video & MCP Agent Lab",
    category: "ai",
    categoryLabel: "AI & Generative Labs",
    tagline: "Autonomous Agentic Workflows, AI Video Creation & RAG Systems",
    description:
      "Built custom Generative AI architectures leveraging Model Context Protocol (MCP), Retrieval-Augmented Generation (RAG) for domain documents, and autonomous AI video production pipelines.",
    problemSolved:
      "Manual content creation and video production are expensive and time-consuming. Standard AI scripts lack deep domain context and structured execution tools.",
    highlights: [
      "Model Context Protocol (MCP) servers exposing typed tools for LLM interaction.",
      "High-precision RAG vector search over internal knowledge bases.",
      "Automated AI video creation combining LLM scripting and ElevenLabs voice synthesis.",
      "Self-correcting agent loops with automated tool validation and latency/cost telemetry.",
    ],
    architecture:
      "Python and TypeScript microservices implementing MCP standards, pgvector index for domain-document retrieval, ElevenLabs API for voice generation, and multi-modal scene assembly scripts.",
    techStack: [
      "Model Context Protocol (MCP)",
      "Retrieval-Augmented Generation (RAG)",
      "Vector DBs",
      "Python",
      "TypeScript",
      "ElevenLabs API",
      "AI Video",
      "OpenAI / Gemini LLMs",
    ],
    metrics: "70%+ reduction in content production turnaround time using agentic workflows",
    featured: true,
    role: "AI Systems & Automation Engineer",
    image: aiLab,
    logo: logoGenAiLab,
  },
  {
    id: "vatsi-natural-foods",
    title: "Vatsi Natural Foods",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Brands",
    tagline: "High-Performance Direct-to-Consumer Organic Storefront",
    description:
      "Designed and developed the official e-commerce web platform for Vatsi Natural Foods, prioritizing lightning-fast mobile page loads, intuitive shopping UX, and streamlined checkout funnels.",
    problemSolved:
      "Slow page loading and cluttered mobile checkouts lead to high drop-offs for organic D2C food brands.",
    highlights: [
      "Sub-1.2 second initial page renders optimized for mobile networks.",
      "Streamlined 2-step checkout flow to maximize visitor conversion.",
      "Structured JSON-LD schema markup for search engine visibility and rich snippets.",
      "Integrated Meta Pixel & Conversions API (CAPI) for precise retargeting.",
    ],
    architecture:
      "Lean frontend architecture with deferred script loading, inline critical CSS, responsive webp image pipelines, payment gateway webhooks, and Google Tag Manager event tracking.",
    techStack: [
      "E-Commerce Architecture",
      "JavaScript",
      "HTML5/CSS3",
      "Payment Gateway",
      "SEO",
      "Meta Pixel & CAPI",
    ],
    metrics: "Optimized mobile load speeds under 1.2s with improved conversion rates",
    links: { live: "https://vatsinaturalfoods.com" },
    featured: true,
    role: "Full-Stack E-Commerce Developer",
    image: vatsi,
    logo: logoVatsi,
  },
  {
    id: "conscience-works",
    title: "Conscience Works Shopify",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Brands",
    tagline: "Custom High-Converting Shopify Storefront & Product Experience",
    description:
      "Engineered a custom high-converting Shopify store for Conscience Works, combining rich brand storytelling with tailored product layout sections and responsive checkout flows.",
    problemSolved:
      "Standard Shopify themes limit brand expression and add bloated code that degrades mobile performance.",
    highlights: [
      "Bespoke Liquid section components for dynamic, code-free homepage editing.",
      "Clean app integration stack eliminating unnecessary script overhead.",
      "Interactive product drawers with dynamic free-shipping progress indicators.",
      "Meta CAPI server-side event tracking for accurate purchase attribution.",
    ],
    architecture:
      "Custom Shopify Liquid theme, custom JavaScript interactive blocks, metafield-driven content management, and optimized app integrations.",
    techStack: [
      "Shopify Liquid",
      "JavaScript",
      "CSS3",
      "Meta Pixel & CAPI",
      "Conversion Rate Optimization",
    ],
    metrics: "Bespoke storefront experience with improved Average Order Value (AOV)",
    links: { live: "https://conscienceworks.myshopify.com/" },
    featured: true,
    role: "Shopify & E-Commerce Developer",
    image: conscience,
    logo: logoConscience,
  },
  {
    id: "meta-ads-growth",
    title: "Performance Marketing & Meta Ads",
    category: "marketing",
    categoryLabel: "Growth & Marketing",
    tagline: "Data-Driven Facebook & Instagram Ad Campaign Scaling",
    description:
      "Planned, launched, and scaled high-ROAS Meta Ads campaigns across D2C brands, publishing platforms, and lead generation funnels.",
    problemSolved:
      "Ad budgets are frequently lost due to improper audience targeting, unorganized campaign structures, and tracking loss from iOS privacy updates.",
    highlights: [
      "Structured campaign testing lanes (CBO/ABO) separating creative and audience validation.",
      "Server-side Meta Conversions API (CAPI) implementation for resilient event tracking.",
      "High-performing video and carousel ad creative testing frameworks.",
      "Attribution modeling mapping ad metrics directly to revenue and acquisition costs.",
    ],
    architecture:
      "Meta Ads Manager account structure, server-side CAPI event integration via Node/GTM, custom lookalike audience layering, and conversion funnel analytics.",
    techStack: [
      "Meta Ads Manager",
      "Facebook Pixel & CAPI",
      "Custom Audiences",
      "Funnel Analytics",
      "Copywriting & Growth",
    ],
    metrics: "High Return on Ad Spend (ROAS) and scaled audience reach across brand assets",
    links: { instagram: "https://www.instagram.com/theinkpress.in" },
    featured: true,
    role: "Performance Marketer & Growth Strategist",
    image: metaAds,
    logo: logoMetaAds,
  },
  {
    id: "publish-it",
    title: "Publish-IT SaaS",
    category: "saas",
    categoryLabel: "SaaS & Publishing Tech",
    tagline: "Manuscript-to-Market Publishing Workflow SaaS",
    description:
      "A workflow SaaS application that moves manuscripts seamlessly from submission to final distribution with multi-role permissions and status tracking.",
    problemSolved:
      "Managing manuscript revisions and editorial feedback via email causes lost files and delays.",
    highlights: [
      "Kanban-style editorial stage tracking from raw submission to print layout.",
      "Role-based access control (RBAC) for authors, editors, designers, and managers.",
      "Automated email and in-app status updates for manuscript milestones.",
      "Cloud document storage with version history and format conversion.",
    ],
    architecture:
      "React + TypeScript front end, Node.js REST API, PostgreSQL database with row-level security on Supabase, and AWS S3 for document storage.",
    techStack: ["React", "TypeScript", "Node.js", "Supabase", "PostgreSQL", "REST APIs", "AWS S3"],
    metrics: "100% stage visibility across editorial and distribution pipelines",
    role: "Product Architect & Full-Stack Engineer",
    image: publishIt,
    logo: logoPublishIt,
  },
  {
    id: "books-dna",
    title: "Books DNA",
    category: "ai",
    categoryLabel: "AI & Generative Labs",
    tagline: "Semantic Book Intelligence & Vector Discovery Engine",
    description:
      "An AI-powered discovery engine that fingerprints books by theme, tone, character dynamics, and narrative structure for natural semantic recommendations.",
    problemSolved:
      "Standard search relies strictly on titles and keywords, missing readers looking for specific tones or thematic vibes.",
    highlights: [
      "Semantic embedding pipeline vectorizing book themes and structural summaries.",
      "Vector similarity search using pgvector combined with custom metadata filtering.",
      "LLM recommendation layer providing clear explanations for every suggested book.",
      "Interactive visual book discovery canvas.",
    ],
    architecture:
      "Python text ingestion scripts, OpenAI embedding models, pgvector extension in PostgreSQL, and React front end for discovery UI.",
    techStack: ["RAG & Vector DBs", "pgvector", "OpenAI Embeddings", "Python", "PostgreSQL", "React"],
    metrics: "Deep semantic recommendation accuracy based on narrative tone & theme",
    role: "AI Engineer & Data Architect",
    image: booksDna,
    logo: logoBooksDna,
  },
  {
    id: "kitaabe",
    title: "Kitaabe.in Marketplace",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Brands",
    tagline: "Online Bookstore & Reader Commerce Platform",
    description:
      "A dedicated online book marketplace catering to Indian readers and independent authors with instant search, genre filtering, and fast checkout.",
    problemSolved:
      "Book buyers encounter heavy clutter and slow search speeds on general marketplace websites.",
    highlights: [
      "Instant faceted search filtering by genre, author, language, and price.",
      "Inventory-aware product pages preventing out-of-stock ordering.",
      "Seamless multi-payment gateway integration (UPI, Cards, NetBanking, COD).",
      "Automated order tracking with instant notification triggers.",
    ],
    architecture:
      "React front end, Node.js catalog API service, PostgreSQL database with indexed search parameters, and payment webhooks.",
    techStack: ["React", "JavaScript", "Node.js", "PostgreSQL", "Payment Gateway", "SEO"],
    metrics: "Faceted catalog search with fast, inventory-aware checkout",
    role: "Full-Stack Developer",
    image: kitaabe,
    logo: logoKitaabe,
  },
  {
    id: "autonation",
    title: "AutoNation Portal",
    category: "saas",
    categoryLabel: "SaaS & Platforms",
    tagline: "Vehicle Listing & Dealer Management Platform",
    description:
      "A digital vehicle marketplace connecting car buyers with verified auto dealers, complete with inventory management and direct inquiry routing.",
    problemSolved:
      "Auto dealers need an easy platform to manage inventory and capture verified buyer leads without building expensive custom software.",
    highlights: [
      "Dealer portal dashboard for adding, updating, and featuring vehicle listings.",
      "Automated media processing pipeline optimizing vehicle photos on AWS S3.",
      "Lead distribution system routing buyer inquiries directly to dealership reps.",
      "Multi-parameter search filtering by make, model, year, mileage, and price.",
    ],
    architecture:
      "React SPA frontend, Express API backend, AWS S3 for vehicle image storage, and PostgreSQL database for listing records.",
    techStack: ["React", "Node.js", "Express", "AWS S3", "PostgreSQL", "REST APIs"],
    metrics: "Dealer-scoped listing management with automated lead routing",
    role: "Full-Stack Engineer",
    image: autonation,
    logo: logoAutonation,
  },
  {
    id: "my-tutor",
    title: "My Tutor Platform",
    category: "saas",
    categoryLabel: "SaaS & Platforms",
    tagline: "Interactive Tutor Discovery & Scheduling Portal",
    description:
      "An EdTech platform connecting students with subject tutors featuring availability calendars, instant session booking, and review management.",
    problemSolved:
      "Coordinating tutor availability across different time zones creates booking conflicts and manual scheduling delays.",
    highlights: [
      "Conflict-free scheduling engine resolving time zone differences automatically.",
      "Tutor discovery matrix filtering by subject, hourly rate, and rating.",
      "Real-time booking confirmations and automated calendar notifications.",
      "Verified student review system linked to completed tutoring sessions.",
    ],
    architecture:
      "React + TypeScript front end, Supabase Realtime engine for availability sync, PostgreSQL database, and Supabase Authentication.",
    techStack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Supabase Auth", "Realtime"],
    metrics: "Conflict-free scheduling across global tutor availability windows",
    role: "Full-Stack Engineer",
    image: myTutor,
    logo: logoMyTutor,
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