import { useState } from "react";
import { clientWork, kickjs, products, type Link } from "~/data/content";
import { CheckIcon, CopyIcon } from "./icons";
import { Section } from "./section";

function Links({ links }: { links: Link[] }) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noopener noreferrer" className="link">
            {link.label}
            <span aria-hidden="true"> ↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the command stays visible and selectable.
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 border border-rule px-4 py-3 font-mono text-[0.8125rem]">
      <code className="overflow-x-auto whitespace-nowrap">
        <span className="select-none text-ink-muted">$ </span>
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy install command"
        className="shrink-0 text-ink-muted transition-colors hover:text-ink"
      >
        {copied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </div>
  );
}

export function Work() {
  return (
    <Section id="work" title="Work">
      <div className="flex flex-col">
        <article className="grid gap-8 border-t border-rule-strong py-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
          <div className="flex flex-col gap-5">
            <h3 className="font-serif text-4xl md:text-5xl">{kickjs.name}</h3>
            <p className="max-w-[60ch] leading-relaxed text-ink-muted">{kickjs.summary}</p>
            <Links links={kickjs.links} />
          </div>
          <div className="flex min-w-0 flex-col gap-6">
            <figure className="border border-rule">
              <figcaption className="border-b border-rule px-4 py-2 font-mono text-xs text-ink-muted">
                {kickjs.codeFilename}
              </figcaption>
              <pre className="overflow-x-auto p-4 font-mono text-[0.8125rem] leading-relaxed">
                <code>{kickjs.codeSnippet}</code>
              </pre>
            </figure>
            <CopyCommand command={kickjs.quickStart} />
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {kickjs.keyPackages.map((pkg) => (
                <li key={pkg.name} className="flex flex-col">
                  <span className="font-mono text-[0.8125rem]">{pkg.name}</span>
                  <span className="text-sm text-ink-muted">{pkg.desc}</span>
                </li>
              ))}
            </ul>
            <a
              href={kickjs.allPackagesHref}
              target="_blank"
              rel="noopener noreferrer"
              className="link self-start text-sm"
            >
              All {kickjs.packageCount} packages
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>
        </article>

        {products.map((product) => (
          <article
            key={product.name}
            className="grid gap-3 border-t border-rule-strong py-8 last:border-b md:grid-cols-[minmax(0,4fr)_minmax(0,6fr)_minmax(0,2fr)] md:items-baseline md:gap-12"
          >
            <h3 className="font-serif text-3xl md:text-4xl">{product.name}</h3>
            <p className="max-w-[60ch] leading-relaxed text-ink-muted">{product.description}</p>
            <div className="md:justify-self-end">
              <Links links={product.links} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function OtherWork() {
  return (
    <Section id="other-work" title="Client work and earlier projects">
      <ul className="flex flex-col">
        {clientWork.map((item) => (
          <li
            key={item.name}
            className="grid gap-1 border-t border-rule py-5 last:border-b md:grid-cols-[minmax(0,3fr)_minmax(0,6fr)_minmax(0,3fr)] md:items-baseline md:gap-12"
          >
            <h3 className="font-serif text-2xl">
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="link">
                {item.name}
                <span aria-hidden="true"> ↗</span>
              </a>
            </h3>
            <p className="max-w-[60ch] text-sm leading-relaxed text-ink-muted">{item.description}</p>
            <p className="text-sm text-ink-muted md:text-right">{item.role}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
