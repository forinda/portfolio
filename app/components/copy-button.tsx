import { useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

export function CopyButton({
  getText,
  label,
  className = "",
  showText = false,
}: {
  getText: () => string;
  label: string;
  className?: string;
  /** Show the label as visible text instead of a copy icon. */
  showText?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(getText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the text stays visible and selectable.
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={showText ? undefined : label}
        className={showText ? className : `text-ink-muted transition-colors hover:text-ink ${className}`}
      >
        {showText ? (
          copied ? "Copied" : label
        ) : copied ? (
          <CheckIcon className="size-4" />
        ) : (
          <CopyIcon className="size-4" />
        )}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </>
  );
}
