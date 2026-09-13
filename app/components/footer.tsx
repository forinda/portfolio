import { shortBio } from "~/data/content";
import { container } from "./section";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div
        className={`${container} flex flex-col gap-4 py-10 text-sm text-ink-muted md:flex-row md:items-baseline md:justify-between md:gap-12`}
      >
        <p className="max-w-[60ch] leading-relaxed">{shortBio}</p>
        <p className="shrink-0">© {new Date().getFullYear()} Felix Orinda</p>
      </div>
    </footer>
  );
}
