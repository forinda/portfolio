import { FadeIn } from "./motion";
import { AwardIcon } from "./icons";
import { education, certifications } from "~/data/content";

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative mb-8 md:mb-10">
          <span
            aria-hidden
            className="heading-display text-[8rem] md:text-[14rem] text-gray-100 dark:text-white/[0.04] absolute -top-12 md:-top-20 -left-4 select-none pointer-events-none leading-none"
          >
            06
          </span>
          <div className="relative z-10 pt-8 md:pt-12">
            <p className="font-mono text-sm text-accent-600 dark:text-accent-400 mb-3">Education</p>
            <h2 className="heading-display text-4xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white">
              Learning
              <br />
              <span className="text-gradient">& growth</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <FadeIn className="md:col-span-7">
            <p className="font-mono text-xs text-gray-400 dark:text-gray-600 mb-4 uppercase tracking-wider">{education.years}</p>
            <h3 className="heading-display text-2xl md:text-3xl text-gray-900 dark:text-white mb-2">{education.degree}</h3>
            <p className="text-accent-600 dark:text-accent-400 font-medium mb-6">{education.school}</p>
            <div className="flex flex-wrap gap-2">
              {education.focus.map((f) => (
                <span key={f} className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 rounded-full">{f}</span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={100} className="md:col-span-5 md:mt-16">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
              <AwardIcon className="w-5 h-5 text-accent-500 shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Microsoft Learn Student Ambassador</p>
                <p className="text-xs text-gray-400 dark:text-gray-600">Issued by Microsoft &middot; January 2022</p>
              </div>
            </div>
            <p className="font-mono text-xs text-gray-400 dark:text-gray-600 mb-4 uppercase tracking-wider">Certifications</p>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-gray-600 dark:text-gray-400 pl-4 border-l-2 border-gray-200 dark:border-gray-800">{cert}</li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
