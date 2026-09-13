import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import { container } from "./section";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
    openButton.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header id="top" className={`${container} flex items-center justify-between py-6`}>
      <a href="/" className="font-serif text-xl">
        Felix Orinda
      </a>

      <nav aria-label="Primary" className="hidden md:block">
        <ul className="flex gap-8 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-ink-muted transition-colors hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-5">
        <ThemeToggle />
        <button
          ref={openButton}
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-m-2 p-2 text-ink-muted transition-colors hover:text-ink md:hidden"
        >
          <MenuIcon className="size-6" />
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-paper md:hidden"
        >
          <div className={`${container} flex justify-end py-6`}>
            <button
              ref={closeButton}
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="-m-2 p-2 text-ink-muted transition-colors hover:text-ink"
            >
              <CloseIcon className="size-6" />
            </button>
          </div>
          <nav aria-label="Primary" className={container}>
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href} className="border-t border-rule last:border-b">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-serif text-3xl"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
