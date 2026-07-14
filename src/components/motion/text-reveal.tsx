"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, type ElementType } from "react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

export function TextReveal({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  once = true,
  id
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  once?: boolean;
  id?: string;
}) {
  const root = useRef<HTMLElement | null>(null);
  const words = text.split(" ");

  useGSAP(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wordElements = element.querySelectorAll<HTMLElement>("[data-text-word]");
    gsap.fromTo(
      wordElements,
      { yPercent: 112, rotate: 1.5 },
      {
        yPercent: 0,
        rotate: 0,
        duration: 0.85,
        delay,
        stagger: 0.035,
        ease: "power4.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          once
        }
      }
    );
  }, { scope: root, dependencies: [delay, once, text] });

  return (
    <Tag ref={root as never} id={id} className={cn(className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="word-mask mr-[0.2em]">
            <span data-text-word>{word}</span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
