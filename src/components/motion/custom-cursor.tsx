"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const currentLabel = useRef("");
  const hasMoved = useRef(false);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const element = cursor.current;
    const innerDot = dot.current;
    if (!element || !innerDot) return;

    const xTo = gsap.quickTo(element, "x", { duration: 0.34, ease: "power3" });
    const yTo = gsap.quickTo(element, "y", { duration: 0.34, ease: "power3" });
    const dotX = gsap.quickTo(innerDot, "x", { duration: 0.08, ease: "none" });
    const dotY = gsap.quickTo(innerDot, "y", { duration: 0.08, ease: "none" });

    const onMove = (event: PointerEvent) => {
      xTo(event.clientX);
      yTo(event.clientY);
      dotX(event.clientX);
      dotY(event.clientY);

      if (!hasMoved.current) {
        hasMoved.current = true;
        gsap.to([element, innerDot], { opacity: 1, duration: 0.22 });
      }

      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor-label]");
      const nextLabel = target?.dataset.cursorLabel ?? "";
      if (nextLabel !== currentLabel.current) {
        currentLabel.current = nextLabel;
        setLabel(nextLabel);
        setActive(Boolean(nextLabel));
      }
    };

    const onDown = () => gsap.to(element, { scale: 0.88, duration: 0.16 });
    const onUp = () => gsap.to(element, { scale: 1, duration: 0.2 });
    const onLeave = () => gsap.to([element, innerDot], { opacity: 0, duration: 0.2 });
    const onEnter = () => {
      if (hasMoved.current) gsap.to([element, innerDot], { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      gsap.killTweensOf([element, innerDot]);
    };
  }, []);

  return (
    <>
      <div
        ref={cursor}
        aria-hidden="true"
        style={{ opacity: 0 }}
        className={`cursor-orb pointer-events-none fixed left-0 top-0 z-[120] grid place-items-center rounded-full border text-[#f7f3ef] transition-[width,height,background-color,border-color] duration-300 ${active ? "size-[92px] border-accent bg-accent" : "size-8 border-accent/65 bg-transparent"}`}
      >
        <span className={`max-w-[68px] text-center font-editorial text-[10px] uppercase leading-tight tracking-[0.12em] transition-opacity duration-200 ${active ? "opacity-100" : "opacity-0"}`}>
          {label}
        </span>
      </div>
      <div ref={dot} aria-hidden="true" style={{ opacity: 0 }} className="cursor-dot pointer-events-none fixed left-0 top-0 z-[121] size-1.5 rounded-full bg-accent" />
    </>
  );
}
