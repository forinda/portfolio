import { experience } from "~/data/content";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="flex flex-col">
        {experience.map((item) => (
          <li
            key={item.company + item.period}
            className="grid gap-2 border-t border-rule py-6 last:border-b md:grid-cols-[minmax(0,4fr)_minmax(0,6fr)_minmax(0,2fr)] md:gap-12"
          >
            <div>
              <h3 className="font-serif text-2xl leading-snug">{item.title}</h3>
              <p className="text-sm text-ink-muted">{item.company}</p>
            </div>
            <p className="max-w-[60ch] text-sm leading-relaxed text-ink-muted">{item.description}</p>
            <p className="order-first text-sm tabular-nums text-ink-muted md:order-none md:text-right">
              {item.period}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
