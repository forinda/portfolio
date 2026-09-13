import { hero } from "~/data/content";
import { container } from "./section";

export function Hero() {
  return (
    <section
      aria-labelledby="intro-title"
      className={`${container} flex flex-col gap-6 pt-12 pb-16 md:pt-20 md:pb-24`}
    >
      <h1
        id="intro-title"
        className="max-w-[20ch] font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08]"
      >
        {hero.statement}
      </h1>
      <p className="max-w-[60ch] text-[1.0625rem] leading-relaxed text-ink-muted">{hero.intro}</p>
    </section>
  );
}
