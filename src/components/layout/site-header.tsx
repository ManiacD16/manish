"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (value) => {
    const next = value > 72;
    setCompact((current) => (current === next ? current : next));
  });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const triggerButton = menuButton.current;
    const inertTargets = [document.querySelector("header"), document.querySelector("main"), document.querySelector("footer")]
      .filter(Boolean) as HTMLElement[];

    document.body.style.overflow = "hidden";
    inertTargets.forEach((element) => { element.inert = true; });
    requestAnimationFrame(() => closeButton.current?.focus());

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialog.current) return;
      const focusable = [...dialog.current.querySelectorAll<HTMLElement>(focusableSelector)]
        .filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      inertTargets.forEach((element) => { element.inert = false; });
      window.removeEventListener("keydown", onKey);
      (previousFocus ?? triggerButton)?.focus();
    };
  }, [open]);

  const activeItem = navigation.find((item) => pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)));

  return (
    <>
      <a href="#main-content" className="fixed left-4 top-4 z-[140] -translate-y-24 bg-accent px-4 py-3 font-editorial text-sm text-[#f7f3ef] transition-transform focus:translate-y-0">
        Skip to content
      </a>

      <motion.header animate={{ y: 0 }} className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90">
        <motion.div
          animate={{ minHeight: compact ? 60 : 76 }}
          transition={{ duration: 0.42, ease: [0.76, 0, 0.24, 1] }}
          className="mx-auto grid max-w-page grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:gap-3 sm:px-7 lg:px-10"
        >
          <div className="hidden font-editorial text-xs leading-tight text-muted sm:block">
            <motion.div animate={{ opacity: compact ? 0 : 1, height: compact ? 0 : "auto" }} className="overflow-hidden">
              {siteConfig.location}
            </motion.div>
            <div className="mt-0.5 text-[11px] uppercase tracking-[0.14em]">
              {compact ? `${activeItem?.index ?? "01"} / ${activeItem?.label ?? "Front Page"}` : siteConfig.availability}
            </div>
          </div>
          <div className="font-editorial text-[11px] uppercase tracking-[0.14em] sm:hidden">{activeItem?.index ?? "01"} / MS</div>

          <Link href="/" className="group inline-flex min-h-11 min-w-0 items-center justify-self-center text-center font-domaine text-[15px] tracking-[-0.025em] sm:text-lg" aria-label="Manish Singh portfolio home" data-cursor-label="Front page">
            <span className="relative inline-block whitespace-nowrap">
              <span className="sm:hidden">Manish Singh</span>
              <span className="hidden sm:inline">The Manish Singh Portfolio</span>
              <span className="absolute inset-x-0 -bottom-1 h-px origin-right scale-x-0 bg-accent transition-transform duration-500 ease-editorial group-hover:origin-left group-hover:scale-x-100" />
            </span>
          </Link>

          <div className="flex items-center justify-end gap-2">
            <ThemeToggle />
            <button
              ref={menuButton}
              type="button"
              onClick={() => setOpen(true)}
              className="group flex h-11 items-center gap-2 overflow-hidden border border-line px-3 font-editorial text-[11px] uppercase tracking-[0.13em] transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Open site index"
              aria-expanded={open}
              aria-controls="site-index"
              data-cursor-label="Open index"
            >
              <span className="hidden sm:inline">Index</span>
              <Menu size={17} aria-hidden="true" className="transition-transform duration-500 group-hover:rotate-90" />
            </button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            ref={dialog}
            id="site-index"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={reduceMotion ? { opacity: 1 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-foreground text-background"
            data-lenis-prevent
          >
            <div className="pointer-events-none absolute right-[-2vw] top-[8vh] select-none font-display text-[32vw] leading-none text-background/[0.04]">MS</div>
            <div className="mx-auto flex min-h-screen max-w-page flex-col px-4 py-5 sm:px-7 lg:px-10 lg:py-7">
              <div className="relative flex items-start justify-between border-b border-background/40 pb-5">
                <div>
                  <div className="font-editorial text-[11px] uppercase tracking-[0.18em] text-background/75">Site index / 2026</div>
                  <div className="mt-1 font-domaine text-xl">The Chain Ledger</div>
                </div>
                <button ref={closeButton} type="button" onClick={() => setOpen(false)} className="group grid size-11 place-items-center border border-background/50 transition-colors hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-on-ink))]" aria-label="Close navigation" data-cursor-label="Close index">
                  <X size={19} aria-hidden="true" className="transition-transform duration-500 group-hover:rotate-90" />
                </button>
              </div>

              <nav className="relative my-auto py-10" aria-label="Primary navigation">
                <ul>
                  {navigation.map((item, index) => {
                    const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                    return (
                      <motion.li key={item.href} initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 0.16 + index * 0.065 }} className="border-b border-background/30">
                        <Link href={item.href} aria-current={active ? "page" : undefined} className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3 sm:py-4" data-cursor-label={`Open ${item.label}`}>
                          <span className="font-editorial text-[11px] text-background/70">{item.index}</span>
                          <span className="font-display text-[clamp(2.8rem,7.6vw,7.2rem)] uppercase leading-[0.8] tracking-[-0.065em] transition-all duration-700 ease-editorial group-hover:translate-x-4 group-hover:text-[rgb(var(--accent-on-ink))]">
                            {item.label}
                          </span>
                          <span className="relative grid size-11 place-items-center">
                            <span className={`absolute size-2.5 rounded-full border border-background/70 transition-all duration-500 ${active ? "scale-100 bg-[rgb(var(--accent-on-ink))]" : "scale-75 bg-transparent group-hover:scale-100"}`} />
                            <ArrowUpRight size={17} aria-hidden="true" className="translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
                          </span>
                          <span className="absolute bottom-[-1px] left-0 h-px w-0 bg-[rgb(var(--accent-on-ink))] transition-[width] duration-700 ease-editorial group-hover:w-full" />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <div className="relative grid gap-4 border-t border-background/40 pt-5 font-editorial text-sm sm:grid-cols-3">
                <a href={`mailto:${siteConfig.email}`} className="break-all underline decoration-background/45 underline-offset-4 hover:decoration-[rgb(var(--accent-on-ink))]">{siteConfig.email}</a>
                <span className="text-background/70 sm:text-center">Noida / India / GMT+5:30</span>
                <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="underline decoration-background/45 underline-offset-4 hover:decoration-[rgb(var(--accent-on-ink))] sm:text-right">LinkedIn ↗</a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
