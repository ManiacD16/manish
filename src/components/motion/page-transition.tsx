"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { navigation } from "@/data/site";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const active = navigation.find((item) => pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)));

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        id="main-content"
        key={pathname}
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
        transition={{ duration: reduceMotion ? 0 : 0.58, ease: [0.76, 0, 0.24, 1] }}
        className="relative min-h-screen"
      >
        {!reduceMotion ? (
          <motion.div
            aria-hidden="true"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.82, ease: [0.76, 0, 0.24, 1] }}
            className="route-curtain pointer-events-none fixed inset-0 z-[90] origin-top bg-foreground"
          >
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.34 }}
              className="absolute bottom-7 left-[var(--page-gutter)] font-editorial text-[10px] uppercase tracking-[0.2em] text-background/65 sm:text-[11px]"
            >
              {active?.index ?? "02"} / {active?.label ?? "Technical report"}
            </motion.div>
          </motion.div>
        ) : null}
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
