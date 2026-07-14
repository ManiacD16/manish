"use client";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touchFirst = window.matchMedia("(pointer: coarse), (max-width: 767px)").matches;
    if (reducedMotion || touchFirst) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (value) => Math.min(1, 1.001 - Math.pow(2, -10 * value)),
      smoothWheel: true,
      wheelMultiplier: 0.9
    });

    lenis.on("scroll", ScrollTrigger.update);
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const onAnchor = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const href = link?.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -88, duration: 1.1 });
    };

    const onVisibility = () => {
      if (document.hidden) lenis.stop();
      else lenis.start();
    };

    document.addEventListener("click", onAnchor);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("click", onAnchor);
      document.removeEventListener("visibilitychange", onVisibility);
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
}
