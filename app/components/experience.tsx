import { FadeIn } from "./motion";
import { experience } from "~/data/content";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative mb-8 md:mb-10">
          <span
            aria-hidden
            className="heading-display text-[8rem] md:text-[14rem] text-gray-100 dark:text-white/[0.04] absolute -top-12 md:-top-20 -left-4 select-none pointer-events-none leading-none"
          >
            05
          </span>
          <div className="relative z-10 pt-8 md:pt-12">
            <p className="font-mono text-sm text-accent-600 dark:text-accent-400 mb-3">Experience</p>
            <h2 className="heading-display text-4xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white">
              Where I've
              <br />
              <span className="text-gradient">contributed</span>
            </h2>
          </div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {experience.map((exp, i) => {
            const isEven = i % 2 === 0;
            return (
              <FadeIn
                key={exp.company + exp.period}
                delay={i * 100}
                direction={isEven ? "left" : "right"}
                className={`grid md:grid-cols-12 gap-4 md:gap-8 ${isEven ? "" : "md:text-right"}`}
              >
                <div className={`md:col-span-3 ${isEven ? "md:order-1" : "md:order-2"}`}>
                  <span className="font-mono text-sm text-gray-400 dark:text-gray-600">{exp.period}</span>
                </div>
                <div className={`md:col-span-9 ${isEven ? "md:order-2" : "md:order-1"}`}>
                  <h3 className="heading-display text-xl md:text-2xl text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                  <p className="text-accent-600 dark:text-accent-400 text-sm font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-lg">{exp.description}</p>
                  <div className={`mt-6 h-px bg-gray-200 dark:bg-gray-800 ${isEven ? "" : "md:ml-auto"} max-w-xs`} />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
