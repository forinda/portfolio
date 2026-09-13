import { About } from "~/components/about";
import { Contact } from "~/components/contact";
import { Education } from "~/components/education";
import { Experience } from "~/components/experience";
import { Footer } from "~/components/footer";
import { Hero } from "~/components/hero";
import { Navbar } from "~/components/navbar";
import { OtherWork, Work } from "~/components/work";

export function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <OtherWork />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
