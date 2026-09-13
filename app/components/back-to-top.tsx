import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0 });
    // Move keyboard focus back to the top so the next Tab starts from the header.
    document.querySelector<HTMLElement>("#top a")?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed right-5 bottom-5 z-30 flex size-11 items-center justify-center rounded-full border border-rule bg-paper text-ink-muted shadow-sm transition-[opacity,color] hover:text-ink md:right-8 md:bottom-8 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUpIcon className="size-5" />
    </button>
  );
}
