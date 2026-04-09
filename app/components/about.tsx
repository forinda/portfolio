import { FadeIn } from "./motion";
import { about } from "~/data/content";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Broken grid: large number overlaps the heading */}
        <div className="relative mb-8 md:mb-10">
          <span
            aria-hidden
            className="heading-display text-[8rem] md:text-[14rem] text-gray-100 dark:text-white/[0.04] absolute -top-12 md:-top-20 -left-4 select-none pointer-events-none leading-none"
          >
            01
          </span>
          <div className="relative z-10 pt-8 md:pt-12">
            <p className="font-mono text-sm text-accent-600 dark:text-accent-400 mb-3">About</p>
            <h2 className="heading-display text-4xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white">
              Engineering systems
              <br />
              <span className="text-gradient">from the ground up</span>
            </h2>
          </div>
        </div>

        {/* Asymmetric two-column with overlap */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-0 items-start">
          <FadeIn className="md:col-span-7 md:pr-16 space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                {p}
              </p>
            ))}
          </FadeIn>

          <FadeIn delay={150} className="md:col-span-5 md:-mt-32 relative z-10">
            <div className="grid grid-cols-2 gap-px bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-stone-50 dark:bg-gray-950 p-8 md:p-10 text-center"
                >
                  <div className="heading-display text-3xl md:text-4xl text-accent-600 dark:text-accent-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
