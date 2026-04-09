import { useEffect, useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full text-gray-500 hover:text-accent-600 dark:text-gray-400 dark:hover:text-accent-400 transition-colors"
      aria-label="Toggle theme"
    >
      {dark ? <IconSun className="w-5 h-5" /> : <IconMoon className="w-5 h-5" />}
    </button>
  );
}
