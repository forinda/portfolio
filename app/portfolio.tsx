import { About } from "~/components/about";
import { Contact } from "~/components/contact";
import { Education } from "~/components/education";
import { Experience } from "~/components/experience";
import { Hero } from "~/components/hero";
import { OtherWork, Work } from "~/components/work";

export function Portfolio() {
  return (
    <>
      <Hero />
      <Work />
      <OtherWork />
      <About />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
