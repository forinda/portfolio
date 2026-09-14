import { shortBio } from "~/data/content";
import { GTAG_ID, openConsentBanner } from "~/lib/analytics";
import { container } from "./section";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div
        className={`${container} flex flex-col gap-4 py-10 text-sm text-ink-muted md:flex-row md:items-baseline md:justify-between md:gap-12`}
      >
        <p className="max-w-[60ch] leading-relaxed">{shortBio}</p>
        <div className="flex shrink-0 flex-wrap gap-x-6 gap-y-2">
          <p>© {new Date().getFullYear()} Felix Orinda</p>
          {GTAG_ID && (
            <button type="button" onClick={openConsentBanner} className="link">
              Analytics preferences
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
