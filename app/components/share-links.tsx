import { useEffect, useState } from "react";
import { CopyButton } from "./copy-button";

function shareTargets(url: string, title: string) {
  const encodedUrl = encodeURIComponent(url);
  return [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "X",
      href: `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodedUrl}`,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];
}

export function ShareLinks({ url, title }: { url: string; title: string }) {
  // Only offer the native share sheet where the browser supports it (mostly phones).
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setCanShare(typeof navigator.share === "function");
  }, []);

  const shareNatively = async () => {
    try {
      await navigator.share({ title, url });
    } catch {
      // The reader closed the share sheet; nothing to do.
    }
  };

  return (
    <div
      role="group"
      aria-label="Share this article"
      className="flex flex-wrap items-baseline gap-x-5 gap-y-2 text-sm"
    >
      <span className="text-ink-muted">Share</span>
      <ul className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
        {shareTargets(url, title).map((target) => (
          <li key={target.label}>
            <a href={target.href} target="_blank" rel="noopener noreferrer" className="link">
              {target.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
        <li>
          <CopyButton getText={() => url} label="Copy link" showText className="link" />
        </li>
        {canShare && (
          <li>
            <button type="button" onClick={shareNatively} className="link">
              Share…
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
