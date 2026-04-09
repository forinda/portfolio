import { FadeIn } from "./motion";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { socialLinks } from "~/data/content";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative">
          <span
            aria-hidden
            className="heading-display text-[6rem] md:text-[12rem] lg:text-[16rem] text-gray-100 dark:text-white/[0.04] absolute -top-8 md:-top-16 right-0 select-none pointer-events-none leading-none"
          >
            07
          </span>
          <FadeIn className="relative z-10 max-w-2xl">
            <p className="font-mono text-sm text-accent-600 dark:text-accent-400 mb-3">Contact</p>
            <h2 className="heading-display text-4xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6">
              Let's build
              <br />
              something <span className="text-gradient">together</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 leading-relaxed">
              Open to freelance contracts, remote full-time roles, and open-source collaboration.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${socialLinks.email}`} className="inline-flex items-center gap-2 px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors text-sm">
                <MailIcon className="w-5 h-5" />
                Send an Email
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors text-sm">
                <LinkedInIcon className="w-5 h-5" />
                LinkedIn
              </a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors text-sm">
                <GitHubIcon className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
