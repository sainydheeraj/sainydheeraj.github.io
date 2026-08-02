export interface Project {
  id: string;
  title: string;
  category: 'ai' | 'saas' | 'ecommerce' | 'marketing';
  categoryLabel: string;
  tagline: string;
  description: string;
  fullDetails: string;
  image: string;
  logo?: string;
  techStack: string[];
  metrics?: string;
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
    instagram?: string;
  };
  featured: boolean;
  role: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
  badge?: string;
}

export const PERSONAL_INFO = {
  name: "Dheeraj Sankhla",
  title: "Full-Stack Engineer • AI & MCP Architect • Growth Marketer",
  bio: "Visionary Software Engineer and Product Founder specializing in Generative AI architectures (LLMs, MCP, RAG), scalable cloud infrastructures (AWS & Supabase), high-converting e-commerce web applications, and data-driven Meta Ads performance marketing.",
  location: "India",
  email: "dheeraj.sankhla.official@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  instagram: "https://www.instagram.com/theinkpress.in",
  availability: "Available for High-Impact Projects & Architectural Advisory",
  heroStats: [
    { label: "Web & SaaS Platforms", value: "10+" },
    { label: "Cloud Ecosystem", value: "AWS & Supabase" },
    { label: "AI & MCP Integration", value: "Production Ready" },
    { label: "Meta Ads & Growth", value: "High-ROAS Funnels" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "ink-press",
    title: "The Ink Press Platform",
    category: "saas",
    categoryLabel: "SaaS & Publishing Tech",
    tagline: "End-to-End Self-Publishing Ecosystem & Author Studio",
    description: "Architected a full-stack self-publishing engine featuring automated author website generation, manuscript handling, ISBN tracking, royalty analytics, and AWS/Supabase cloud backend.",
    fullDetails: "The Ink Press platform revolutionizes self-publishing for authors. Built with React, TypeScript, Node.js, Express, and Supabase/AWS architecture, it handles manuscript processing, cover design previews, dynamic author website generation, payment gateways, and automated distributor fulfillment tracking.",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1000&q=80",
    techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase", "AWS Amplify", "AWS S3", "Tailwind CSS"],
    metrics: "Empowering 100+ authors with automated distribution & royalty workflows",
    links: {
      instagram: "https://www.instagram.com/theinkpress.in"
    },
    featured: true,
    role: "Founder & Lead Full-Stack Architect"
  },
  {
    id: "genai-mcp-lab",
    title: "AI Video & MCP Agent Lab",
    category: "ai",
    categoryLabel: "AI & Generative Labs",
    tagline: "Autonomous Agentic Workflows, AI Video Creation & RAG Systems",
    description: "Built custom Generative AI agents leveraging Model Context Protocol (MCP), Retrieval-Augmented Generation (RAG) for domain docs, and automated AI video creation pipelines.",
    fullDetails: "Advanced AI engineering suite integrating OpenAI/Gemini/Anthropic LLMs, MCP servers for local context execution, vector search RAG pipelines for dense context retrieval, and automated multi-modal script-to-video generation pipelines using ElevenLabs & AI vision tools.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    techStack: ["Generative AI", "MCP (Model Context Protocol)", "RAG & Vector DBs", "Python", "TypeScript", "ElevenLabs API", "AI Video Pipelines"],
    metrics: "70%+ Reduction in content workflow lead time via autonomous agents",
    links: {},
    featured: true,
    role: "AI Systems & Automation Engineer"
  },
  {
    id: "vatsi-natural-foods",
    title: "Vatsi Natural Foods",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Brands",
    tagline: "High-Performance Direct-to-Consumer Organic Storefront",
    description: "Designed and developed the official e-commerce web platform for Vatsi Natural Foods, prioritizing lightning-fast page speed, mobile UX, and optimized checkout funnels.",
    fullDetails: "Custom D2C e-commerce platform built for scale, product showcases, nutritional transparency, and seamless payment integration. Features responsive product grids, dynamic cart calculations, and conversion-focused user journeys.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
    techStack: ["E-Commerce Architecture", "JavaScript", "HTML5/CSS3", "Payment Gateway", "SEO Optimization", "Mobile Responsive"],
    metrics: "Optimized load speeds under 1.2s with enhanced mobile conversion rates",
    links: {
      live: "https://vatsinaturalfoods.com"
    },
    featured: true,
    role: "Full-Stack E-Commerce Developer"
  },
  {
    id: "conscience-works",
    title: "Conscience Works Shopify",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Brands",
    tagline: "Custom Shopify Storefront & Product Experience",
    description: "Engineered a custom high-converting Shopify e-commerce storefront for Conscience Works, featuring bespoke theme customizations and brand storytelling.",
    fullDetails: "Designed and built custom Liquid/Shopify components, structured catalog collections, implemented cart upsell flows, and synchronized inventory for optimal user experience and high customer retention.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80",
    techStack: ["Shopify Liquid", "Shopify Apps", "UX/UI Design", "Performance Tuning", "Meta Pixel", "Analytics"],
    metrics: "Bespoke conversion funnel and responsive checkout optimization",
    links: {
      live: "https://conscienceworks.myshopify.com/"
    },
    featured: true,
    role: "Shopify & E-Commerce Developer"
  },
  {
    id: "meta-ads-growth",
    title: "Performance Marketing & Meta Ads",
    category: "marketing",
    categoryLabel: "Growth & Marketing",
    tagline: "Data-Driven Facebook & Instagram Ad Campaigns",
    description: "Proficient in planning, scaling, and optimizing Meta Ads campaigns across D2C brands, publishing platforms, and lead generation funnels.",
    fullDetails: "Hands-on execution of Meta Business Suite, Pixel tracking, Custom & Lookalike Audiences, A/B creative testing (hook, body, CTA), and ROAS optimization. Managed brand presence for leading handles including @theinkpress.in and @thekrishna_org.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    techStack: ["Meta Ads Manager", "Facebook Pixel & CAPI", "Targeting & Retargeting", "Funnel Analytics", "Copywriting", "Social Media Growth"],
    metrics: "Proven track record of high ROAS & audience scaling",
    links: {
      instagram: "https://www.instagram.com/theinkpress.in"
    },
    featured: true,
    role: "Performance Marketer & Growth Strategist"
  },
  {
    id: "publish-it",
    title: "Publish-IT Suite",
    category: "saas",
    categoryLabel: "SaaS & Publishing Tech",
    tagline: "Professional Publishing & Manuscript Studio",
    description: "SaaS platform providing manuscript formatting engines, theme customization, and automated PDF export capabilities for indie authors.",
    fullDetails: "Advanced web application created to simplify complex book typography, chapter layouting, spine calculation, and multi-format exports (PDF, EPUB).",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80",
    techStack: ["React", "TypeScript", "Node.js", "PDF Rendering", "CSS Grid", "State Management"],
    metrics: "Instant manuscript rendering & pixel-perfect typesetting",
    links: {},
    featured: false,
    role: "Lead Full-Stack Developer"
  },
  {
    id: "books-dna",
    title: "Books DNA Analytics",
    category: "saas",
    categoryLabel: "SaaS & Publishing Tech",
    tagline: "Publishing Data Intelligence & Metadata Engine",
    description: "Analytical dashboard providing deep market insights, ISBN reporting, and genre trends for publishing professionals.",
    fullDetails: "Data-driven analytics dashboard built to monitor book sales metrics, ISBN reports, royalty structures, and market demand insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    techStack: ["React", "TypeScript", "Data Visualization", "Chart.js", "PostgreSQL", "REST APIs"],
    metrics: "Real-time revenue & sales intelligence visualization",
    links: {},
    featured: false,
    role: "Full-Stack Data Engineer"
  },
  {
    id: "kitaabe-in",
    title: "Kitaabe.in Platform",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Brands",
    tagline: "Indian Literature & Indie Author Bookstore Marketplace",
    description: "Digital marketplace dedicated to discovering, previewing, and purchasing Indian literature and self-published titles.",
    fullDetails: "Dedicated book marketplace with payment gateway integration, author bio showcases, reader reviews, and order fulfillment tracking.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80",
    techStack: ["React", "Node.js", "Express", "Payment Gateway", "SEO Optimization"],
    metrics: "Direct channel connecting Indian indie authors to readers",
    links: {},
    featured: false,
    role: "Full-Stack Developer & Founder"
  },
  {
    id: "autonation",
    title: "AutoNation Portal",
    category: "saas",
    categoryLabel: "SaaS & Platforms",
    tagline: "Automotive Service & Vehicle Listing Platform",
    description: "Modern web portal for automotive management, vehicle listing search, and customer service bookings.",
    fullDetails: "Interactive web solution featuring advanced vehicle filtering, appointment scheduling, and intuitive customer interfaces.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
    techStack: ["React", "JavaScript", "CSS3", "REST APIs", "Node.js"],
    metrics: "Streamlined auto service booking user journey",
    links: {},
    featured: false,
    role: "Frontend Engineer"
  },
  {
    id: "my-tutor",
    title: "My Tutor EdTech",
    category: "saas",
    categoryLabel: "SaaS & Platforms",
    tagline: "Interactive E-Learning & Tutoring Application",
    description: "EdTech web application enabling students to connect with tutors, schedule sessions, and access curated learning modules.",
    fullDetails: "Built responsive interactive modules, tutor search functionality, calendar scheduling system, and progress analytics.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1000&q=80",
    techStack: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
    metrics: "Seamless scheduling & interactive learning workflow",
    links: {},
    featured: false,
    role: "Full-Stack Developer"
  },
  {
    id: "thekrishna-org",
    title: "The Krishna Org Brand Growth",
    category: "marketing",
    categoryLabel: "Growth & Marketing",
    tagline: "Digital Community Building & Engagement Operations",
    description: "Growth management and digital content strategy for @thekrishna_org, driving organic community reach.",
    fullDetails: "Developed content pillars, visually compelling graphics, video reels, and audience interaction campaigns to scale digital presence.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80",
    techStack: ["Social Media Strategy", "Content Design", "Video Reels", "Community Growth"],
    metrics: "Exponential audience reach & engagement rates",
    links: {
      instagram: "https://www.instagram.com/thekrishna_org/"
    },
    featured: false,
    role: "Brand Strategist & Creator"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI, GenAI & Agentic Systems",
    iconName: "Cpu",
    skills: [
      { name: "Model Context Protocol (MCP)", level: 95, highlight: true },
      { name: "Retrieval-Augmented Generation (RAG)", level: 92, highlight: true },
      { name: "AI Video Creation & Synthetic Media", level: 90, highlight: true },
      { name: "LLMs (OpenAI, Gemini, Anthropic)", level: 95, highlight: true },
      { name: "Autonomous Agentic Workflows", level: 92 },
      { name: "Prompt Engineering & Vector DBs", level: 90 }
    ]
  },
  {
    title: "Full-Stack & Web Engineering",
    iconName: "Code",
    skills: [
      { name: "React & TypeScript", level: 95, highlight: true },
      { name: "Node.js & Express APIs", level: 92, highlight: true },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5, Vanilla CSS & Glassmorphism", level: 95 },
      { name: "Vite, Bun & Webpack", level: 88 },
      { name: "REST & GraphQL APIs", level: 90 }
    ]
  },
  {
    title: "Cloud & Databases",
    iconName: "Cloud",
    skills: [
      { name: "Amazon AWS (S3, Amplify, RDS, Lambda)", level: 90, highlight: true },
      { name: "Supabase (Auth, DB, Realtime, Functions)", level: 95, highlight: true },
      { name: "PostgreSQL & SQL Optimization", level: 92 },
      { name: "Docker & Containerization", level: 82 },
      { name: "Git & Version Control", level: 95 }
    ]
  },
  {
    title: "E-Commerce & Digital Storefronts",
    iconName: "ShoppingBag",
    skills: [
      { name: "Custom E-Commerce Architecture", level: 92, highlight: true },
      { name: "Shopify Customization & Liquid", level: 90, highlight: true },
      { name: "Payment Gateway Integrations", level: 92 },
      { name: "Conversion Rate Optimization (CRO)", level: 88 },
      { name: "Page Speed Tuning & Mobile UX", level: 94 }
    ]
  },
  {
    title: "Performance Marketing & Growth",
    iconName: "TrendingUp",
    skills: [
      { name: "Meta Ads (Facebook & Instagram Ads)", level: 94, highlight: true },
      { name: "Custom Audiences & Retargeting", level: 92, highlight: true },
      { name: "Social Media Brand Operations", level: 90, highlight: true },
      { name: "Funnel Copywriting & Creative Testing", level: 88 },
      { name: "Analytics & Attribution Modeling", level: 86 }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    year: "2024 - Present",
    role: "Founder & Chief Architect",
    company: "The Ink Press & Publish-IT Platform",
    description: "Leading end-to-end full-stack software development, cloud infrastructure on AWS/Supabase, and AI-driven publishing tools for indie authors.",
    achievements: [
      "Built complete author website generator & manuscript studio engine",
      "Migrated backend architecture to AWS Amplify & Supabase PostgreSQL",
      "Scales brand presence via Meta Ads and digital marketing channels"
    ],
    badge: "Current Venture"
  },
  {
    year: "2023 - Present",
    role: "AI & Full-Stack Systems Engineer",
    company: "Autonomous AI & Web Solutions",
    description: "Building production-grade AI agents with Model Context Protocol (MCP), custom RAG pipelines, and automated multi-modal AI video generators.",
    achievements: [
      "Implemented custom MCP servers to connect LLMs directly to workspace file structures",
      "Engineered vector retrieval RAG pipelines for instant knowledge lookup",
      "Created automated AI video creation workflows using synthetic voice and media APIs"
    ],
    badge: "AI Innovation"
  },
  {
    year: "2022 - Present",
    role: "E-Commerce Architect & Performance Marketer",
    company: "Vatsi Natural Foods & Conscience Works",
    description: "Designing and deploying custom e-commerce web applications (VatsiNaturalFoods.com & ConscienceWorks.myshopify.com) alongside high-ROAS Meta Ads funnels.",
    achievements: [
      "Designed lightning-fast direct-to-consumer storefront for Vatsi Natural Foods",
      "Customized Shopify ecosystem for Conscience Works with conversion-focused UX",
      "Executed profitable Meta Ads campaigns targeting targeted demographics"
    ],
    badge: "E-Commerce & Ads"
  }
];
