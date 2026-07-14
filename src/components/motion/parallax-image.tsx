"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ParallaxImage({
  src,
  alt,
  priority = false,
  sizes = "100vw",
  className,
  imageClassName
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      image.current,
      { yPercent: -6, scale: 1.08 },
      {
        yPercent: 6,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 0.6 }
      }
    );
  }, { scope: root });

  return (
    <div ref={root} className={cn("relative overflow-hidden bg-surface", className)}>
      <div ref={image} className="absolute -inset-[8%]">
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={cn("object-cover", imageClassName)} />
      </div>
    </div>
  );
}
