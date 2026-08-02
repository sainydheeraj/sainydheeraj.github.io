import { useState } from "react";
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
import { projects } from "@/data/portfolio";

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

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
    </div>
  );
}

export default App;
