"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "fade" | "clip" | "scale" | "left";

const initialState: Record<RevealVariant, gsap.TweenVars> = {
  fade: { autoAlpha: 0, y: 28 },
  clip: { autoAlpha: 0.2, y: 30, clipPath: "inset(0 0 100% 0)" },
  scale: { autoAlpha: 0, scale: 0.965 },
  left: { autoAlpha: 0, x: -34 }
};

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  variant = "fade",
  amount = 0.18
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: RevealVariant;
  amount?: number;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const from = variant === "fade" ? { ...initialState.fade, y } : initialState[variant];
    const viewportOffset = Math.max(68, Math.min(92, Math.round((1 - amount) * 100)));

    gsap.fromTo(
      element,
      from,
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        clipPath: "inset(0 0 0% 0)",
        duration: variant === "clip" ? 0.95 : 0.72,
        delay,
        ease: "power4.out",
        clearProps: "opacity,visibility,transform,clipPath",
        scrollTrigger: {
          trigger: element,
          start: `top ${viewportOffset}%`,
          once: true
        }
      }
    );
  }, { scope: root, dependencies: [amount, delay, variant, y] });

  return (
    <div ref={root} className={cn(className)}>
      {children}
    </div>
  );
}
