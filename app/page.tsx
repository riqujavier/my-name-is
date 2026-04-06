import MouseEffect from "@/components/MouseEffect";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-24 relative z-10 w-full overflow-x-hidden">
      <MouseEffect />
      <Hero />
      <div id="about" className="scroll-mt-32">
        <AboutMe />
      </div>
      <div id="projects" className="scroll-mt-32 min-h-screen">
        <Projects />
      </div>
    </div>
  )
}