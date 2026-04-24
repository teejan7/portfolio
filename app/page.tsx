import { About } from "@/components/main/about";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Proof } from "@/components/main/proof";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="relative z-10 w-full">
      <div className="flex flex-col gap-24 pb-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Proof />
      </div>
    </main>
  );
}
