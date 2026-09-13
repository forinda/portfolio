import { about, skills } from "~/data/content";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-12 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-16">
        <div className="flex max-w-[65ch] flex-col gap-5 text-[1.0625rem] leading-relaxed">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className="flex flex-col">
          {skills.categories.map((category) => (
            <div key={category.name} className="grid gap-1 border-t border-rule py-3 last:border-b">
              <dt className="text-sm font-semibold">{category.name}</dt>
              <dd className="text-sm leading-relaxed text-ink-muted">{category.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
