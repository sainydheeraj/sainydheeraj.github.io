import { Cloud, Cpu, ShoppingBag, TrendingUp } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { TiltCard } from "./TiltCard";

const pillars = [
  {
    icon: Cpu,
    title: "AI & MCP Architecture",
    body: "Agentic systems built on Model Context Protocol, RAG retrieval and multi-modal AI video pipelines that ship to production.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Engineering",
    body: "React and TypeScript front ends on AWS Amplify, Node APIs, Supabase PostgreSQL with policy-enforced access and S3 asset delivery.",
  },
  {
    icon: ShoppingBag,
    title: "Commerce That Converts",
    body: "Custom storefronts and Shopify builds tuned for sub-second loads, frictionless checkout and measurable conversion lift.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Performance Ads",
    body: "Meta Ads strategy with CAPI-backed attribution, creative testing lanes and audience scaling toward durable ROAS.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-5 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A 360° Technology Founder"
          subtitle={personalInfo.title}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <TiltCard intensity={6} className="glass h-full p-6 sm:p-8 border border-border/80 md:flex md:flex-col md:items-center md:text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                  <p.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 font-sans text-xl font-bold text-foreground sm:text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}