"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

if (typeof window !== "undefined") gsap.registerPlugin(useGSAP, ScrollTrigger);

export function GsapHero({ words }: { words: string[] }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });
    timeline
      .from("[data-hero-rule]", { scaleX: 0, transformOrigin: "left", duration: 0.8 })
      .from("[data-hero-char]", { yPercent: 110, rotate: 1.5, stagger: 0.017, duration: 1.08, }, "-=0.28")
      .from("[data-hero-meta]", { opacity: 0, y: 14, stagger: 0.065, duration: 0.58 }, "-=0.58")
      .from("[data-hero-stamp]", { opacity: 0, scale: 1.45, rotate: -22, duration: 0.78 }, "-=0.48")
      .from("[data-hero-orbit]", { opacity: 0, scale: 0.72, rotate: -18, stagger: 0.06, duration: 0.9 }, "-=0.68")
      .from("[data-hero-side]", { opacity: 0, x: -12, duration: 0.5 }, "-=0.38");

    const media = gsap.matchMedia();
    media.add("(min-width: 1100px)", () => {
      gsap.to("[data-hero-row='0']", {
        xPercent: -3.2,
        ease: "none",
        scrollTrigger: { trigger: container.current, start: "top top+=80", end: "bottom top", scrub: 0.7 }
      });
      gsap.to("[data-hero-row='1']", {
        xPercent: 3.2,
        ease: "none",
        scrollTrigger: { trigger: container.current, start: "top top+=80", end: "bottom top", scrub: 0.7 }
      });
      gsap.to("[data-hero-stamp]", {
        rotate: 24,
        y: 86,
        ease: "none",
        scrollTrigger: { trigger: container.current, start: "top top", end: "bottom top", scrub: 0.8 }
      });
      gsap.to("[data-hero-orbit='outer']", {
        rotate: 50,
        ease: "none",
        scrollTrigger: { trigger: container.current, start: "top bottom", end: "bottom top", scrub: 1 }
      });
    });

    return () => media.revert();
  }, { scope: container });

  return (
    <div ref={container} className="hero-panel relative isolate max-w-full overflow-clip bg-foreground px-4 py-5 text-background sm:px-7 lg:px-10 lg:py-7">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgb(var(--background)/.24)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--background)/.24)_1px,transparent_1px)] [background-size:4.5rem_4.5rem]" />
      <div className="pointer-events-none absolute right-[-7rem] top-1/2 hidden aspect-square w-[31rem] -translate-y-1/2 lg:block">
        <div data-hero-orbit="outer" className="absolute inset-0 rounded-full border border-background/16" />
        <div data-hero-orbit className="absolute inset-[16%] rounded-full border border-background/12" />
        <div data-hero-orbit className="absolute inset-[34%] rounded-full border border-accent/70" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-background/10" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-background/10" />
        <span className="absolute left-[47%] top-[7%] size-2 rounded-full bg-accent shadow-[0_0_0_7px_rgb(var(--accent)/.16)]" />
        <span className="absolute bottom-[19%] right-[13%] size-1.5 rounded-full bg-background/80" />
      </div>

      <div data-hero-rule className="relative mb-4 h-px bg-background/45" />

      <div data-hero-side className="absolute left-3 top-1/2 hidden -translate-y-1/2 -rotate-90 font-editorial text-[10px] uppercase tracking-[0.2em] text-background/70 xl:block">
        Portfolio / Noida / India / MMXXVI
      </div>

      <h1 className="relative z-10 overflow-visible">
        <span className="sr-only">{words.join(" ")}</span>

        {words.map((word, rowIndex) => (
          <span
            key={word}
            className="block min-w-0 max-w-full overflow-hidden"
          >
            <span
              data-hero-row={rowIndex}
              className={`
          block
          w-max
          whitespace-nowrap
          py-[0.09em]
          font-display
          text-[25vw]
          font-normal
          uppercase
          leading-[0.72]
          tracking-[-0.035em]
          [font-synthesis:none]
          [text-rendering:geometricPrecision]
          sm:text-[19vw]
          lg:text-[16.5rem]
          xl:text-[20.6rem]
          ${rowIndex === 1 ? "mt-[0.009em] ml-[4vw]" : ""}
        `}
            >
              {word.split("").map((character, characterIndex) => (
                <span
                  key={`${character}-${characterIndex}`}
                  className="inline-block align-bottom"
                  aria-hidden="true"
                >
                  <span
                    data-hero-char
                    className="inline-block origin-bottom will-change-transform"
                  >
                    {character === " " ? "\u00A0" : character}
                  </span>
                </span>
              ))}
            </span>
          </span>
        ))}
      </h1>

      <div className="relative z-10 mt-7 grid gap-4 border-t border-background/45 pt-4 font-editorial text-[10px] uppercase tracking-[0.17em] sm:grid-cols-[auto_1fr_auto] sm:items-end sm:text-[11px]">
        <span data-hero-meta>Issue No. 01 / Portfolio</span>
        <span data-hero-meta className="sm:text-center">Full Stack Blockchain Developer</span>
        <div data-hero-meta className="flex flex-wrap items-center gap-5 sm:justify-self-end">
          <a href="#profile" className="group inline-flex min-h-11 items-center gap-2" data-cursor-label="Inspect edition">
            Inspect edition <ArrowDown size={13} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-500 group-hover:translate-y-1" />
          </a>
          <Link href="/contact" className="group inline-flex min-h-11 items-center gap-2" data-cursor-label="Start a conversation">
            Contact <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>

      <div
        data-hero-stamp
        className="hero-seal absolute right-[2%] top-[18%] z-20 grid aspect-square w-20 rotate-6 place-items-center rounded-full border border-accent bg-[#aa330d] text-center font-editorial text-[9px] font-semibold uppercase leading-tight tracking-[0.12em] text-[#f7f3ef] sm:w-28 sm:text-[10px] lg:w-36"
      >
        <span className="absolute inset-[6px] rounded-full border border-[#f7f3ef]/45" />
        <span className="absolute inset-[12px] rounded-full border border-dashed border-[#f7f3ef]/30" />
        <span className="relative">Web3<br />Engineering<br />India</span>
      </div>
    </div>
  );
}
