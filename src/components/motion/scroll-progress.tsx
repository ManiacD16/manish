"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[85] h-[2px] origin-left bg-accent will-change-transform"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
