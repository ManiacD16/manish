import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { TextReveal } from "@/components/motion/text-reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilityGroups, principles, siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Profile",
  description: "About Manish Singh, a Full Stack Blockchain Developer focused on regulated assets, smart contracts, cross-chain systems, and usable Web3 products.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    url: absoluteUrl("/about"),
    title: "Profile — Manish Singh",
    description: "About Manish Singh, a Full Stack Blockchain Developer focused on regulated assets, smart contracts, cross-chain systems, and usable Web3 products."
  }
};

export default function AboutPage() {
  return (
    <>
      <Container className="py-8 sm:py-12 lg:py-16">
        <header className="border-b border-line pb-10">
          <div className="page-kicker">Profile / Issue 03</div>
          <TextReveal text="About" as="h1" className="mt-5 page-title" />
        </header>

        <section className="grid gap-9 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
          <Reveal>
            <ParallaxImage src="/images/portrait-ledger.svg" alt="Editorial portrait illustration representing Manish Singh" priority sizes="(max-width: 1024px) 100vw, 40vw" className="aspect-[9/11] lg:sticky lg:top-28" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="page-kicker">Full Stack Blockchain Developer / Noida, India</div>
            <h2 className="mt-5 font-domaine text-[clamp(2.5rem,5vw,5.6rem)] leading-[0.98] tracking-[-0.04em]">
              I work where smart-contract architecture, product engineering, and user trust meet.
            </h2>
            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              <p className="body-copy"><span className="float-left mr-2 font-display text-7xl leading-[0.72] text-accent">M</span>y experience spans Solidity development, regulated token standards, cross-chain contracts, wallet integrations, APIs, databases, and responsive applications.</p>
              <p className="body-copy">I approach blockchain work as a complete system. The contract must be correct, but the wallet flow, application state, backend integration, and interface language must also help people understand what is happening.</p>
              <p className="body-copy">Current work focuses on RWA platforms using ERC-3643 and ERC-1404, alongside Ethereum, Avalanche, and other EVM-compatible networks.</p>
              <p className="body-copy">Independent work includes IINGO Network, where I own the product journey from on-chain interactions to wallet connectivity and responsive frontend behaviour.</p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/work" className="ink-button" data-cursor-label="View selected work">View work ↗</Link>
              <a href={siteConfig.resume} download className="ink-button" data-cursor-label="Download résumé">Download résumé ↓</a>
            </div>
          </Reveal>
        </section>

        <SectionHeading index="01" eyebrow="Working range" title="Connected disciplines" />
        <div className="grid border-b border-line lg:grid-cols-3">
          {capabilityGroups.map((group) => (
            <Reveal key={group.title} className="group border-b border-line p-6 transition-colors duration-500 hover:bg-surface last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <div className="page-kicker">Chapter {group.number}</div>
              <h3 className="mt-7 font-display text-5xl uppercase leading-[0.82] tracking-[-0.05em] transition-transform duration-700 ease-editorial group-hover:translate-x-2">{group.title}</h3>
              <p className="mt-5 body-copy text-base sm:text-base">{group.description}</p>
              <p className="mt-7 font-editorial text-sm leading-[1.7] text-muted">{group.skills.join(" / ")}</p>
            </Reveal>
          ))}
        </div>
      </Container>

      <section className="bg-foreground py-[var(--section-space)] text-background">
        <Container>
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div className="page-kicker text-background/75">Engineering manifesto</div>
            <div>
              <h2 className="font-display text-[clamp(4rem,11vw,11rem)] uppercase leading-[0.72] tracking-[-0.06em]">Trust is a product feature.</h2>
              <div className="mt-10 grid gap-px bg-background/30 sm:grid-cols-2">
                {principles.map((principle, index) => (
                  <Reveal key={principle.title} className="group bg-foreground p-6 transition-colors duration-500 hover:bg-background hover:text-foreground sm:p-8">
                    <span className="font-editorial text-xs uppercase tracking-[0.14em] text-[rgb(var(--accent-on-ink))]">0{index + 1}</span>
                    <h3 className="mt-6 font-domaine text-3xl tracking-[-0.03em]">{principle.title}</h3>
                    <p className="mt-4 font-editorial text-base leading-[1.5] text-background/70 transition-colors group-hover:text-muted">{principle.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
