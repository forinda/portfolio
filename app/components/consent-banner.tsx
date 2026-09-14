import { useEffect, useState } from "react";
import {
  GTAG_ID,
  onConsentBannerOpen,
  readConsent,
  saveConsent,
  type Consent,
} from "~/lib/analytics";
import { container } from "./section";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!GTAG_ID) return;
    if (readConsent() === null) setVisible(true);
    return onConsentBannerOpen(() => setVisible(true));
  }, []);

  if (!visible) return null;

  const choose = (value: Consent) => {
    saveConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Analytics consent"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper"
    >
      <div
        className={`${container} flex flex-col gap-3 py-4 text-sm md:flex-row md:items-center md:justify-between md:gap-8`}
      >
        <p className="max-w-[65ch] leading-relaxed text-ink-muted">
          This site uses Google Analytics to understand which pages people read. Allow analytics
          cookies?
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="border border-rule px-4 py-2 transition-colors hover:border-ink"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="border border-ink bg-ink px-4 py-2 text-paper transition-opacity hover:opacity-85"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
