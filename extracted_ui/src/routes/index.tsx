import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DoodleBackground } from "@/components/doodle/DoodleBackground";
import { DoodleAccent } from "@/components/doodle/DoodleAccent";
import { GrowthTree } from "@/components/doodle/GrowthTree";
import { SketchDivider } from "@/components/doodle/SketchDivider";
import doodleDesk from "@/assets/doodle-desk.png";
import doodleBrain from "@/assets/doodle-brain.png";
import doodleRocket from "@/assets/doodle-rocket.png";
import doodleCart from "@/assets/doodle-cart.png";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ResumeModal } from "@/components/portfolio/ResumeModal";
import { personalInfo, projects } from "@/data/portfolio";

const title = "Dheeraj Sankhla — Full-Stack Engineer & AI/MCP Architect";
const description =
  "Portfolio of Dheeraj Sankhla: full-stack engineer, generative AI & MCP architect, AWS/Supabase cloud developer, e-commerce builder and Meta Ads performance marketer.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    email: `mailto:${personalInfo.email}`,
    description: personalInfo.bio,
    address: { "@type": "PostalAddress", addressCountry: personalInfo.location },
    knowsAbout: [
      "Model Context Protocol",
      "Retrieval-Augmented Generation",
      "React",
      "TypeScript",
      "AWS",
      "Supabase",
      "Shopify",
      "Meta Ads",
    ],
    sameAs: [
      "https://www.instagram.com/theinkpress.in",
      "https://www.instagram.com/thekrishna_org/",
      "https://vatsinaturalfoods.com",
    ],
  };

  return (
    <div className="relative min-h-screen">
      <DoodleBackground />
      <GrowthTree projects={projects} />
      <Navbar onOpenResume={() => setResumeOpen(true)} />
      <main className="relative overflow-x-clip">
        <DoodleAccent
          src={doodleDesk}
          alt=""
          className="right-[-3rem] top-[14vh] w-[22rem] xl:w-[26rem]"
        />
        <DoodleAccent
          src={doodleBrain}
          alt=""
          className="left-[-2rem] top-[130vh] w-[15rem]"
          distance={70}
        />
        <DoodleAccent
          src={doodleRocket}
          alt=""
          className="right-[-1rem] top-[250vh] w-[14rem]"
          distance={120}
        />
        <DoodleAccent
          src={doodleCart}
          alt=""
          className="left-[-2rem] top-[360vh] w-[15rem]"
          distance={80}
        />
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <SketchDivider />
        <Projects />
        <SketchDivider flip />
        <Skills />
        <Experience />
        <SketchDivider />
        <Contact />
      </main>
      <Footer />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
