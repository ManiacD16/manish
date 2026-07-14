"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";
import type { Project } from "@/data/projects";
import { Stamp } from "@/components/ui/stamp";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, className, priority = false, headingLevel = "h3" }: { project: Project; className?: string; priority?: boolean; headingLevel?: "h2" | "h3" }) {
  const reduceMotion = useReducedMotion();
  const Heading = headingLevel;
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const smoothX = useSpring(pointerX, { stiffness: 115, damping: 22, mass: 0.5 });
  const smoothY = useSpring(pointerY, { stiffness: 115, damping: 22, mass: 0.5 });
  const imageX = useTransform(smoothX, [0, 1], ["-2.8%", "2.8%"]);
  const imageY = useTransform(smoothY, [0, 1], ["-2.8%", "2.8%"]);
  const rotateX = useTransform(smoothY, [0, 1], [1.5, -1.5]);
  const rotateY = useTransform(smoothX, [0, 1], [-1.5, 1.5]);
  const shineX = useTransform(smoothX, [0, 1], ["-75%", "75%"]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  }

  function reset() {
    pointerX.set(0.5);
    pointerY.set(0.5);
  }

  return (
    <article className={cn("group relative border-b border-line pb-7", className)}>
      <Link
        href={`/work/${project.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        data-cursor-label="View report"
      >
        <motion.div
          onPointerMove={handlePointerMove}
          onPointerLeave={reset}
          style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
          className="project-media relative aspect-[16/11] overflow-hidden bg-surface"
        >
          <motion.div className="absolute -inset-[4%]" style={reduceMotion ? undefined : { x: imageX, y: imageY }}>
            <Image
              src={project.image}
              alt={`${project.title} editorial project artwork`}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover transition duration-[1200ms] ease-editorial group-hover:scale-[1.085] group-hover:saturate-[0.82]"
            />
          </motion.div>

          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 [background-image:linear-gradient(rgb(var(--paper)/.13)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--paper)/.13)_1px,transparent_1px)] [background-size:3.5rem_3.5rem]" />
          <motion.div
            aria-hidden="true"
            style={reduceMotion ? undefined : { x: shineX }}
            className="pointer-events-none absolute -inset-y-10 left-1/2 w-24 -skew-x-12 bg-gradient-to-r from-transparent via-paper/12 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="image-ink-overlay absolute inset-0 translate-y-8 opacity-0 transition-all duration-700 ease-editorial group-hover:translate-y-0 group-hover:opacity-100" />

          <div className="absolute left-3 top-3 flex items-center gap-2 overflow-hidden border border-line bg-background px-2.5 py-1.5 font-editorial text-[10px] uppercase tracking-[0.17em] text-foreground transition-colors duration-500 group-hover:border-background/50 group-hover:bg-foreground group-hover:text-background">
            <span className="size-1.5 rounded-full bg-accent" /> Report {project.number}
          </div>
          <div className="pointer-events-none absolute right-3 top-2 font-display text-[clamp(4.5rem,8vw,8rem)] leading-none text-paper/[0.08] transition-all duration-700 ease-editorial group-hover:-translate-x-2 group-hover:text-paper/[0.17]">
            {project.number}
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex translate-y-6 items-end justify-between gap-4 opacity-0 transition-all duration-700 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
            <span className="max-w-[15rem] font-editorial text-[10px] uppercase leading-[1.4] tracking-[0.17em] text-paper">Open technical report<br /><span className="text-paper/65">Architecture / decisions / outcome</span></span>
            <span className="grid size-12 place-items-center rounded-full border border-paper/55 bg-paper text-foreground transition-transform duration-700 ease-editorial group-hover:rotate-45">
              <ArrowUpRight size={19} strokeWidth={1.35} aria-hidden="true" />
            </span>
          </div>
          <div className="absolute inset-y-0 left-0 w-[3px] origin-bottom scale-y-0 bg-accent transition-transform duration-700 ease-editorial group-hover:scale-y-100" />
          <div className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-1000 ease-editorial group-hover:scale-x-100" />
        </motion.div>

        <div className="mt-5 flex items-start justify-between gap-5">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2.5">
              <Heading className="font-domaine text-2xl leading-none tracking-[-0.045em] transition-colors duration-500 group-hover:text-accent sm:text-[2rem]">{project.title}</Heading>
              <span className="transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105"><Stamp>{project.accent}</Stamp></span>
            </div>
            <p className="mt-3 max-w-2xl font-editorial text-base leading-[1.48] text-muted">{project.summary}</p>
          </div>
          <span className="mt-1 grid size-9 shrink-0 place-items-center overflow-hidden border border-line font-editorial text-lg transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-paper" aria-hidden="true">
            <ArrowUpRight size={16} strokeWidth={1.45} className="transition-transform duration-500 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>

        <div className="relative mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-3 font-editorial text-[10px] uppercase tracking-[0.15em] text-muted">
          <span>{project.category}</span>
          <span>{project.role}</span>
          <span>{project.year}</span>
          <span className="absolute left-0 top-[-1px] h-px w-0 bg-accent transition-[width] duration-1000 ease-editorial group-hover:w-full" />
        </div>
      </Link>
    </article>
  );
}
