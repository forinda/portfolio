import { useState } from "react";
import { FadeIn } from "./motion";
import { ExternalLinkIcon, GitHubIcon, TerminalIcon, CopyIcon, CheckIcon } from "./icons";
import { kickjs } from "~/data/content";

export function KickJS() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText(kickjs.quickStart);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="kickjs" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative mb-8 md:mb-10">
          <span
            aria-hidden
            className="heading-display text-[8rem] md:text-[14rem] text-gray-100 dark:text-white/[0.04] absolute -top-12 md:-top-20 -left-4 select-none pointer-events-none leading-none"
          >
            03
          </span>
          <div className="relative z-10 pt-8 md:pt-12">
            <p className="font-mono text-sm text-accent-600 dark:text-accent-400 mb-3">
              Flagship Project
            </p>
            <h2 className="heading-display text-4xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white">
              Kick<span className="text-gradient">JS</span>
            </h2>
          </div>
        </div>

        {/* Stats — horizontal strip */}
        <FadeIn className="flex flex-wrap gap-x-12 gap-y-4 mb-8 md:mb-10 md:-ml-2">
          {kickjs.stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="heading-display text-3xl md:text-5xl text-accent-600 dark:text-accent-400">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-4 items-start">
          <FadeIn className="lg:col-span-5 lg:pr-4">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {kickjs.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {kickjs.highlights.map((h) => (
                <span
                  key={h}
                  className="px-3 py-1 text-xs text-accent-600 dark:text-accent-400 border border-accent-200 dark:border-accent-800 rounded-full"
                >
                  {h}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={kickjs.links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors text-sm"
              >
                View Docs
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
              <a
                href={kickjs.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors text-sm"
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </FadeIn>

          {/* Code block — overlaps left column */}
          <FadeIn delay={100} direction="right" className="lg:col-span-7 lg:-ml-6 relative z-10 space-y-4">
            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-700" />
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-600 ml-2 font-mono">
                  {kickjs.codeFilename}
                </span>
              </div>
              <pre className="p-5 bg-white dark:bg-gray-950 overflow-x-auto text-sm leading-relaxed">
                <code className="font-mono text-gray-700 dark:text-gray-300">
                  {kickjs.codeSnippet}
                </code>
              </pre>
            </div>

            <div className="md:ml-12 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4 text-accent-500" />
                  <span className="text-xs text-gray-400 dark:text-gray-600 font-mono">
                    Quick Start
                  </span>
                </div>
                <button
                  onClick={copyCommand}
                  className="text-gray-400 hover:text-accent-500 transition-colors"
                  aria-label="Copy command"
                >
                  {copied ? (
                    <CheckIcon className="w-4 h-4 text-green-500" />
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="p-4 bg-white dark:bg-gray-950 font-mono text-sm">
                <span className="text-accent-500">$</span>{" "}
                <span className="text-gray-700 dark:text-gray-300">
                  {kickjs.quickStart}
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Packages summary */}
        <div className="mt-12 md:mt-16">
          <h4 className="heading-display text-lg text-gray-900 dark:text-white mb-6">
            Ecosystem Packages
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {kickjs.packages.map((pkg) => (
              <div key={pkg.name} className="flex flex-col">
                <span className="font-mono text-sm text-accent-600 dark:text-accent-400">
                  {pkg.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                  {pkg.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
