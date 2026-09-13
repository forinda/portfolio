import { awards, certifications, education } from "~/data/content";
import { Section } from "./section";

export function Education() {
  return (
    <Section id="education" title="Education and certifications">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-2xl">{education.degree}</h3>
          <p className="text-ink-muted">
            {education.school}, {education.years}
          </p>
          <p className="text-sm text-ink-muted">Focus: {education.focus.join(", ")}</p>
        </div>
        <ul className="flex flex-col">
          {awards.map((award) => (
            <li key={award.name} className="border-t border-rule py-3">
              <p className="text-sm font-semibold">{award.name}</p>
              <p className="text-sm text-ink-muted">{award.detail}</p>
            </li>
          ))}
          {certifications.map((certification) => (
            <li key={certification} className="border-t border-rule py-3 text-sm last:border-b">
              {certification}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
