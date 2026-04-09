import { GitHubIcon, LinkedInIcon, ExternalLinkIcon, ArrowUpIcon } from "./icons";
import { socialLinks, shortBio } from "~/data/content";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-md">
            <a
              href="#"
              className="font-display text-xl font-bold text-gray-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors inline-block mb-3"
            >
              felix<span className="text-accent-500">.</span>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">
              {shortBio}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.kickjsDocs}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="KickJS Docs"
            >
              <ExternalLinkIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            &copy; {new Date().getFullYear()} Felix Orinda. Built with React
            Router & Tailwind CSS.
          </p>
          <a
            href="#"
            className="text-gray-400 hover:text-accent-500 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUpIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
