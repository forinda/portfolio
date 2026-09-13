import { About } from "~/components/about";
import { Contact } from "~/components/contact";
import { Education } from "~/components/education";
import { Experience } from "~/components/experience";
import { Hero } from "~/components/hero";
import { OtherWork, Work } from "~/components/work";
import { Writing } from "~/components/writing";
import type { ArticleMeta } from "~/lib/frontmatter";

export function Portfolio({ articles }: { articles: ArticleMeta[] }) {
  return (
    <>
      <Hero />
      <Work />
      <OtherWork />
      <Writing articles={articles} />
      <About />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
