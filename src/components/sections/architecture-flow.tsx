"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Database, FileCode2, LayoutPanelTop, Network, WalletCards } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

const layers = [
  { number: "01", title: "Interface", detail: "Clear actions, readable state, and transaction feedback", icon: LayoutPanelTop },
  { number: "02", title: "Wallet", detail: "Identity, signatures, accounts, permissions, and networks", icon: WalletCards },
  { number: "03", title: "API & Data", detail: "Application state, indexing, orchestration, and services", icon: Database },
  { number: "04", title: "Contract", detail: "Rules, roles, events, compliance, and verification", icon: FileCode2 },
  { number: "05", title: "Network", detail: "Durable execution, consensus, and on-chain confirmation", icon: Network }
];

export function ArchitectureFlow() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeline = gsap.timeline({
      scrollTrigger: { trigger: root.current, start: "top 74%", end: "bottom 48%", scrub: 0.72 }
    });

    timeline
      .fromTo("[data-flow-fill]", { scaleX: 0 }, { scaleX: 1, transformOrigin: "left", ease: "none" }, 0)
      .from("[data-flow-step]", { opacity: 0.12, y: 52, stagger: 0.16, ease: "power3.out" }, 0)
      .from("[data-flow-index]", { scale: 0.35, opacity: 0, stagger: 0.16, ease: "back.out(1.7)" }, 0.04)
      .from("[data-flow-icon]", { rotate: -18, scale: 0.7, opacity: 0, stagger: 0.16, ease: "power3.out" }, 0.08);
  }, { scope: root });

  return (
    <div ref={root} className="relative overflow-hidden border border-line bg-surface p-4 sm:p-7 lg:p-10">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgb(var(--foreground)/.2)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--foreground)/.2)_1px,transparent_1px)] [background-size:4rem_4rem]" />
      <div className="absolute inset-x-0 top-0 h-[3px] bg-line/25">
        <div data-flow-fill className="h-full origin-left bg-accent" />
      </div>
      <div className="relative mb-8 flex flex-col gap-2 border-b border-line pb-4 page-kicker sm:flex-row sm:items-center sm:justify-between">
        <span>System sequence / End-to-end product engineering</span>
        <span>05 connected layers</span>
      </div>
      <div className="relative grid gap-4 lg:grid-cols-5">
        <div className="absolute left-[10%] right-[10%] top-[5.55rem] hidden h-px bg-line lg:block">
          <span data-flow-fill className="block h-px origin-left bg-accent" />
        </div>
        {layers.map((layer, index) => {
          const Icon = layer.icon;
          return (
            <article
              data-flow-step
              key={layer.title}
              className="group relative overflow-hidden border border-line bg-background p-5 transition-all duration-700 ease-editorial hover:-translate-y-2 hover:border-accent hover:bg-foreground hover:text-background lg:min-h-[18rem]"
              data-cursor-label={`Layer ${layer.number}`}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-editorial text-[10px] uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-background/70">Layer {layer.number}</span>
                <span data-flow-index className={`relative z-10 grid size-8 place-items-center rounded-full border border-line bg-background font-editorial text-[10px] text-foreground transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-paper ${index === layers.length - 1 ? "bg-accent text-paper" : ""}`}>
                  {index + 1}
                </span>
              </div>
              <div data-flow-icon className="grid size-12 place-items-center border border-line bg-surface transition-all duration-500 group-hover:rotate-3 group-hover:border-background/35 group-hover:bg-background group-hover:text-foreground">
                <Icon size={21} strokeWidth={1.35} aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-domaine text-3xl tracking-[-0.045em]">{layer.title}</h3>
              <p className="mt-4 font-editorial text-sm leading-[1.55] text-muted transition-colors group-hover:text-background/68">{layer.detail}</p>
              <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-700 ease-editorial group-hover:scale-x-100" />
              <span className="pointer-events-none absolute -bottom-8 -right-4 font-display text-[7rem] leading-none text-foreground/[0.03] transition-colors group-hover:text-background/[0.04]">{layer.number}</span>
            </article>
          );
        })}
      </div>
    </div>
  );
}
