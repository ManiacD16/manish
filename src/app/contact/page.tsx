import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/contact-form";
import { TextReveal } from "@/components/motion/text-reveal";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Manish Singh for smart-contract engineering, regulated tokenization, Web3 products, cross-chain integrations, and full-stack development.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    url: absoluteUrl("/contact"),
    title: "Contact — Manish Singh",
    description: "Contact Manish Singh for smart-contract engineering, regulated tokenization, Web3 products, cross-chain integrations, and full-stack development."
  }
};

export default function ContactPage() {
  return (
    <Container className="py-8 sm:py-12 lg:py-16">
      <header className="border-b border-line pb-10">
        <div className="page-kicker">Contact desk / Issue 05</div>
        <TextReveal text="Start a conversation" as="h1" className="mt-5 page-title contact-title" />
      </header>

      <section className="grid gap-12 py-[var(--section-space)] lg:grid-cols-[0.72fr_1.28fr]">
        <Reveal>
        <div>
          <div className="page-kicker">Open for selected Web3 opportunities</div>
          <p className="mt-5 font-domaine text-4xl leading-[1.02] tracking-[-0.035em] sm:text-5xl">Building a regulated asset platform, smart-contract system, cross-chain workflow, or full-stack Web3 product?</p>
          <div className="mt-9 space-y-4 border-t border-line pt-5 font-editorial">
            <div><div className="page-kicker">Email</div><a className="editorial-link mt-1" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
            <div><div className="page-kicker">LinkedIn</div><a className="editorial-link mt-1" href={siteConfig.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/manishhsingh ↗</a></div>
            <div><div className="page-kicker">Location</div><p className="mt-1">{siteConfig.location}</p></div>
            <div><div className="page-kicker">Typical focus</div><p className="mt-1 leading-[1.5] text-muted">Solidity / RWA / ERC-3643 / ERC-1404 / EVM / React / Next.js / Node.js</p></div>
          </div>
        </div>
        </Reveal>
        <Reveal variant="clip" delay={0.08} className="border border-line bg-surface p-6 sm:p-8 lg:p-10">
          <div className="page-kicker">Project enquiry</div>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[0.82] tracking-[-0.05em] sm:text-7xl">The brief</h2>
          <div className="mt-9"><ContactForm /></div>
        </Reveal>
      </section>
    </Container>
  );
}
