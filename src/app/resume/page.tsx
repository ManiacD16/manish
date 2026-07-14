import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stamp } from "@/components/ui/stamp";
import { education, experiences } from "@/data/experience";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Career Ledger",
  description: "Professional experience, education, certifications, and technical capabilities of Full Stack Blockchain Developer Manish Singh.",
  alternates: { canonical: absoluteUrl("/resume") },
  openGraph: {
    url: absoluteUrl("/resume"),
    title: "Career Ledger — Manish Singh",
    description: "Professional experience, education, certifications, and technical capabilities of Full Stack Blockchain Developer Manish Singh."
  }
};

export default function ResumePage() {
  return (
    <Container className="py-8 sm:py-12 lg:py-16">
      <header className="border-b border-line pb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="page-kicker">Career ledger / Issue 04</div>
          <a href={siteConfig.resume} download className="ink-button flex items-center gap-2" data-cursor-label="Download résumé">
            Download PDF <Download size={15} />
          </a>
        </div>
        <TextReveal text="Career Ledger" as="h1" className="mt-5 page-title max-w-7xl" />
        <div className="mt-8 grid gap-5 border-t border-line pt-5 md:grid-cols-2">
          <p className="font-domaine text-3xl leading-[1.04] tracking-[-0.03em] sm:text-4xl">Two years and six months of full-stack blockchain experience as of July 2026.</p>
          <p className="body-copy md:max-w-xl md:justify-self-end">The timeline below is based on professional experience from March 2024 to the present, with earlier digital publishing work included as the foundation for responsive UI and quality assurance.</p>
        </div>
      </header>

      <section className="py-[var(--section-space)]">
        <SectionHeading index="01" eyebrow="Professional experience" title="Work in sequence" />
        <div className="mt-8 divide-y divide-line border-y border-line">
          {experiences.map((experience, index) => (
            <Reveal key={`${experience.company}-${experience.period}`}>
              <article className="group grid gap-6 py-8 transition-colors duration-500 hover:bg-surface/55 md:grid-cols-[90px_0.8fr_1.2fr] lg:py-11">
                <div className="font-display text-6xl leading-none text-accent transition-transform duration-500 group-hover:translate-x-2">0{index + 1}</div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-domaine text-3xl tracking-[-0.03em] sm:text-4xl">{experience.company}</h2>
                    {experience.current ? <Stamp>Current</Stamp> : null}
                  </div>
                  <p className="mt-2 font-editorial text-sm uppercase tracking-[0.1em] text-muted">{experience.role}</p>
                  <p className="mt-1 font-editorial text-sm text-muted">{experience.location} / {experience.period}</p>
                </div>
                <div>
                  <p className="body-copy">{experience.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {experience.highlights.map((highlight) => <li key={highlight} className="flex gap-3 font-editorial text-base leading-[1.45]"><span className="text-accent">✦</span><span>{highlight}</span></li>)}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">{experience.stack.map((item) => <span key={item} className="border border-line px-2.5 py-1.5 font-editorial text-[11px] uppercase tracking-[0.1em] text-muted">{item}</span>)}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-[var(--section-space)]">
        <SectionHeading index="02" eyebrow="Education" title="Academic record" />
        <div className="mt-8 grid gap-px bg-line md:grid-cols-2">
          {education.map((item) => (
            <Reveal key={item.institution} className="group bg-background p-6 transition-colors duration-500 hover:bg-foreground hover:text-background sm:p-8">
              <div className="page-kicker transition-colors group-hover:text-background/75">{item.period}</div>
              <h2 className="mt-7 font-domaine text-4xl tracking-[-0.04em]">{item.program}</h2>
              <p className="mt-3 font-editorial text-lg">{item.institution}</p>
              <p className="mt-5 body-copy text-base transition-colors group-hover:text-background/70 sm:text-base">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface p-6 sm:p-9 lg:p-12">
        <div className="grid gap-8 md:grid-cols-[0.45fr_1fr]">
          <div>
            <Stamp>IIT Kanpur</Stamp>
            <div className="mt-5 page-kicker">Professional certificate</div>
          </div>
          <div>
            <h2 className="font-display text-[clamp(3rem,7vw,7.5rem)] uppercase leading-[0.78] tracking-[-0.055em]">Blockchain certification</h2>
            <p className="mt-6 max-w-3xl font-domaine text-3xl leading-[1.05] tracking-[-0.03em]">Professional Certificate Program in Blockchain</p>
            <ul className="mt-7 grid border-t border-line sm:grid-cols-2">
              {["Blockchain Fundamentals", "Blockchain Applications and Architecture", "Capstone Project", "Academic Masterclass"].map((item, index) => <li key={item} className="border-b border-line py-3 font-editorial text-sm sm:odd:border-r sm:odd:pr-4 sm:even:pl-4"><span className="mr-3 text-foreground/75">0{index + 1}</span>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
}
