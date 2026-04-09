import { FadeIn } from "./motion";
import { ExternalLinkIcon } from "./icons";
import { projects } from "~/data/content";

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative mb-8 md:mb-10">
          <span
            aria-hidden
            className="heading-display text-[8rem] md:text-[14rem] text-gray-100 dark:text-white/[0.04] absolute -top-12 md:-top-20 -left-4 select-none pointer-events-none leading-none"
          >
            04
          </span>
          <div className="relative z-10 pt-8 md:pt-12">
            <p className="font-mono text-sm text-accent-600 dark:text-accent-400 mb-3">
              Projects
            </p>
            <h2 className="heading-display text-4xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white">
              Selected
              <br />
              <span className="text-gradient">work</span>
            </h2>
          </div>
        </div>

        <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-12 md:gap-8">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            const colSpan = i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5";
            const offset = isEven ? "" : "md:mt-24";
            return (
              <FadeIn
                key={project.name}
                delay={i * 100}
                className={`${colSpan} ${offset}`}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <span className="text-xs font-mono text-accent-600 dark:text-accent-400 mb-3 block">
                    {project.role}
                  </span>
                  <h3 className="heading-display text-2xl md:text-3xl text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors mb-3 flex items-center gap-3">
                    {project.name}
                    <ExternalLinkIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-accent-500" />
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 max-w-md">
                    {project.description}
                  </p>
                  <div className="mt-4 h-px bg-gray-200 dark:bg-gray-800 group-hover:bg-accent-400 transition-colors" />
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
