"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  function toggleTheme() {
    const next = isDark ? "light" : "dark";
    const documentWithTransitions = document as Document & {
      startViewTransition?: (callback: () => void) => { finished: Promise<void> };
    };

    if (reduceMotion || !documentWithTransitions.startViewTransition) {
      setTheme(next);
      return;
    }

    document.documentElement.dataset.themeDirection = next;
    documentWithTransitions.startViewTransition(() => setTheme(next)).finished.finally(() => {
      delete document.documentElement.dataset.themeDirection;
    });
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group relative grid size-11 place-items-center overflow-hidden border border-line bg-background transition-colors duration-500 hover:border-accent hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light edition" : "Dark edition"}
      data-cursor-label={isDark ? "Light edition" : "Dark edition"}
    >
      <span className="absolute inset-[4px] border border-line/0 transition-colors duration-500 group-hover:border-background/30" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ y: 15, opacity: 0, rotate: -45, scale: 0.7 }}
          animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
          exit={{ y: -15, opacity: 0, rotate: 45, scale: 0.7 }}
          transition={{ duration: 0.36, ease: [0.76, 0, 0.24, 1] }}
        >
          {isDark ? <Sun size={17} strokeWidth={1.55} aria-hidden="true" /> : <Moon size={17} strokeWidth={1.55} aria-hidden="true" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
