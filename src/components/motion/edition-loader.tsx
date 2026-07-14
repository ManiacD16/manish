"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const marks = ["Compose", "Register", "Publish"];

export function EditionLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setVisible(false);
      return;
    }

    const started = performance.now();
    let frame = 0;
    const duration = 1180;

    const tick = (time: number) => {
      const next = Math.min(100, Math.round(((time - started) / duration) * 100));
      setProgress(next);
      if (next < 100) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    const timeout = window.setTimeout(() => setVisible(false), duration + 120);
    document.documentElement.dataset.loading = "true";

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      delete document.documentElement.dataset.loading;
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!visible) delete document.documentElement.dataset.loading;
  }, [visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ y: "-102%" }}
          transition={{ duration: 0.78, ease: [0.76, 0, 0.24, 1] }}
          className="edition-loader fixed inset-0 z-[200] grid overflow-hidden bg-foreground text-background"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgb(var(--background)/.34)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--background)/.34)_1px,transparent_1px)] [background-size:4.25rem_4.25rem]" />
          <div className="relative mx-auto flex h-full w-full max-w-page flex-col justify-between px-[var(--page-gutter)] py-5 sm:py-8">
            <div className="flex items-center justify-between border-b border-background/35 pb-4 font-editorial text-[10px] uppercase tracking-[0.19em] text-background/70 sm:text-[11px]">
              <span>The Chain Ledger</span>
              <span>Edition MMXXVI</span>
            </div>

            <div className="relative py-10">
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.92, ease: [0.76, 0, 0.24, 1] }}
                className="font-display text-[clamp(7rem,28vw,25rem)] uppercase leading-[0.58] tracking-[-0.09em]"
              >
                M/S
              </motion.div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                className="mt-7 h-[2px] origin-left bg-[rgb(var(--accent-on-ink))]"
              />
              <div className="mt-4 flex items-center justify-between font-editorial text-[10px] uppercase tracking-[0.18em] text-background/65 sm:text-[11px]">
                <span>{marks[Math.min(marks.length - 1, Math.floor(progress / 34))]} the edition</span>
                <span className="font-display text-3xl leading-none text-[rgb(var(--accent-on-ink))]">{String(progress).padStart(3, "0")}</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-background/35 pt-4 font-editorial text-[10px] uppercase tracking-[0.18em] text-background/65 sm:text-[11px]">
              <span>Noida / India</span>
              <span>Contract → Interface</span>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
