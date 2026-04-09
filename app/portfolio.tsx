import { Navbar } from "~/components/navbar";
import { Hero } from "~/components/hero";
import { About } from "~/components/about";
import { Skills } from "~/components/skills";
import { KickJS } from "~/components/kickjs";
import { Projects } from "~/components/projects";
import { Experience } from "~/components/experience";
import { Education } from "~/components/education";
import { Contact } from "~/components/contact";
import { Footer } from "~/components/footer";

export function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <KickJS />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
