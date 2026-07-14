"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import type { Project } from "@/data/projects";

const filters = ["All", "Enterprise Blockchain", "Web3 Community Platform", "Blockchain Infrastructure", "Full-Stack dApp Engineering"];

export function ProjectArchive({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");
  const reduceMotion = useReducedMotion();
  const visible = useMemo(() => (active === "All" ? projects : projects.filter((project) => project.category === active)), [active, projects]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-line pb-6" aria-label="Project categories">
        {filters.map((filter, index) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={`group relative min-h-11 overflow-hidden border px-3.5 py-2.5 font-editorial text-[11px] uppercase tracking-[0.12em] transition-colors duration-500 ${active === filter ? "border-foreground bg-foreground text-background" : "border-line hover:text-background"}`}
            data-cursor-label={`Filter ${filter}`}
          >
            <span className={`absolute inset-0 -z-10 origin-bottom bg-foreground transition-transform duration-500 ease-editorial ${active === filter ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"}`} />
            <span className={`mr-2 ${active === filter ? "text-[rgb(var(--accent-on-ink))]" : "text-accent"}`}>0{index + 1}</span>{filter}
          </button>
        ))}
      </div>
      <motion.div layout={!reduceMotion} className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-x-9 lg:gap-y-16">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.div
              layout={!reduceMotion}
              key={project.slug}
              initial={false}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, filter: "blur(4px)" }}
              transition={{ duration: reduceMotion ? 0 : 0.65, delay: index * 0.04, ease: [0.76, 0, 0.24, 1] }}
            >
              <ProjectCard project={project} priority={index < 2} headingLevel="h2" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
