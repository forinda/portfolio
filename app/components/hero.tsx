import { useState, useEffect, useCallback } from "react";
import { ArrowDownIcon } from "./icons";
import { hero } from "~/data/content";

function useTypingEffect(phrases: string[], speed = 80, deleteSpeed = 40, pause = 2000) {
  const [text, setText] = useState(phrases[0]);
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const tick = useCallback(() => {
    const phrase = phrases[index];
    if (!deleting) {
      setText(phrase.slice(0, text.length + 1));
      if (text.length + 1 === phrase.length) {
        setTimeout(() => setDeleting(true), pause);
        return;
      }
    } else {
      setText(phrase.slice(0, text.length - 1));
      if (text.length - 1 === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % phrases.length);
        return;
      }
    }
  }, [text, index, deleting, phrases, pause]);

  useEffect(() => {
    if (!mounted) return;
    const timer = setTimeout(tick, deleting ? deleteSpeed : speed);
    return () => clearTimeout(timer);
  }, [tick, deleting, speed, deleteSpeed, mounted]);

  return text;
}

export function Hero() {
  const typed = useTypingEffect(hero.taglines);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Large background text — broken grid overlap */}
      <div
        aria-hidden
        className="absolute top-[10%] -right-[5%] heading-display text-[12rem] md:text-[20rem] lg:text-[28rem] text-gray-100 dark:text-white/[0.04] select-none pointer-events-none leading-none"
      >
        FO
      </div>

      {/* Accent shape overlaps */}
      <div
        aria-hidden
        className="absolute top-[20%] left-[8%] w-40 h-40 md:w-72 md:h-72 rounded-full bg-accent-200/40 dark:bg-accent-500/10 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="absolute bottom-[15%] right-[15%] w-56 h-56 md:w-96 md:h-96 rounded-full bg-accent-100/50 dark:bg-accent-400/5 blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Content — offset to left for asymmetry, CSS animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">
          <p
            className="font-mono text-sm text-accent-600 dark:text-accent-400 mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Software Engineer &middot; Nairobi, Kenya
          </p>

          <h1
            className="heading-display text-6xl md:text-8xl lg:text-9xl mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-gray-900 dark:text-white">Felix</span>
            <br />
            <span className="text-gradient">Orinda</span>
          </h1>

          {/* Typing line */}
          <div
            className="flex items-center mb-8 md:ml-2 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="w-12 h-px bg-accent-500 mr-4 shrink-0" />
            <span className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-display font-medium">
              {typed}
            </span>
            <span className="ml-0.5 inline-block w-0.5 h-5 md:h-6 bg-accent-500 dark:bg-accent-400 animate-typing-cursor" />
          </div>

          <p
            className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            {hero.oneLiner}
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.65s" }}
          >
            <a
              href="#projects"
              className="px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors text-sm"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors text-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-accent-500 transition-colors animate-bounce animate-fade-in-up"
        style={{ animationDelay: "1s" }}
      >
        <ArrowDownIcon className="w-5 h-5" />
      </a>
    </section>
  );
}
