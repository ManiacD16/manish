import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { TextReveal } from "@/components/motion/text-reveal";

export function SiteFooter() {
  return (
    <footer className="relative contain-paint overflow-hidden border-t border-line bg-foreground text-background">
      <div className="pointer-events-none absolute -bottom-[10vw] right-0 select-none font-display text-[34vw] leading-none text-background/[0.04]">MS</div>
      <div className="relative mx-auto max-w-page px-4 py-10 sm:px-7 lg:px-10 lg:py-16">
        <div className="grid gap-10 border-b border-background/28 pb-12 md:grid-cols-[1.35fr_0.65fr] lg:pb-16">
          <div>
            <p className="font-editorial text-[11px] uppercase tracking-[0.17em] text-background/75">Closing edition / Open for selected work</p>
            <TextReveal text="Build what comes next." as="p" className="mt-5 max-w-5xl font-display text-[clamp(3.8rem,9vw,9rem)] uppercase leading-[0.71] tracking-[-0.07em]" />
          </div>
          <div className="flex flex-col justify-end gap-4 font-editorial text-base">
            <a href={`mailto:${siteConfig.email}`} className="group min-w-0 flex items-center justify-between gap-4 border-b border-background/25 py-3 transition-colors hover:border-accent" data-cursor-label="Send email">
              <span className="min-w-0 break-all">{siteConfig.email}</span><ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="group min-w-0 flex items-center justify-between gap-4 border-b border-background/25 py-3 transition-colors hover:border-accent" data-cursor-label="Open LinkedIn">
              <span>LinkedIn</span><ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href={siteConfig.resume} download className="group min-w-0 flex items-center justify-between gap-4 border-b border-background/25 py-3 transition-colors hover:border-accent" data-cursor-label="Download résumé">
              <span>Download résumé</span><span className="transition-transform duration-500 group-hover:translate-y-1">↓</span>
            </a>
          </div>
        </div>
        <div className="relative flex flex-col gap-3 pt-6 font-editorial text-[11px] uppercase tracking-[0.14em] text-background/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Manish Singh</span>
          <span>The Chain Ledger / First Edition</span>
          <Link href="/contact" className="inline-flex min-h-11 items-center text-background underline decoration-background/30 underline-offset-4 hover:decoration-accent">Noida / India / Available</Link>
        </div>
      </div>
    </footer>
  );
}
