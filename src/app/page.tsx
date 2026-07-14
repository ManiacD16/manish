import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { GsapHero } from "@/components/motion/gsap-hero";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { TextReveal } from "@/components/motion/text-reveal";
import { Reveal } from "@/components/motion/reveal";
import { ArchitectureFlow } from "@/components/sections/architecture-flow";
import { Container } from "@/components/ui/container";
import { Marquee } from "@/components/ui/marquee";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stamp } from "@/components/ui/stamp";
import { capabilityGroups, principles, siteConfig } from "@/data/site";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Full Stack Blockchain Developer",
  description: siteConfig.description
};

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <Container className="pt-5 lg:pt-7">
        <section className="grid border-y border-line md:grid-cols-[1fr_0.8fr_1fr]" aria-label="Portfolio edition highlights">
          <Link href={`/work/${featured[0].slug}`} className="group relative border-b border-line p-4 transition-colors duration-500 hover:bg-surface md:border-b-0 md:border-r md:p-5" data-cursor-label="Open lead report">
            <div className="flex items-center justify-between page-kicker">
              <span>Lead report</span><span>{featured[0].year}</span>
            </div>
            <div className="relative mt-4 aspect-[16/9] overflow-hidden bg-surface">
              <Image src={featured[0].image} alt="Regulated RWA platform artwork" fill priority sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-[1000ms] ease-editorial group-hover:scale-[1.07] group-hover:rotate-[0.35deg]" />
            </div>
            <p className="mt-3 font-domaine text-2xl tracking-[-0.03em]">{featured[0].shortTitle}</p>
          </Link>

          <div className="flex flex-col items-center justify-center border-b border-line px-5 py-9 text-center md:border-b-0 md:border-r">
            <Stamp>Portfolio Edition</Stamp>
            <p className="mt-4 font-display text-5xl uppercase leading-[0.78] tracking-[-0.055em] sm:text-6xl">Selected<br />Work</p>
            <p className="mt-4 max-w-xs font-editorial text-sm leading-[1.4] text-muted">Smart contracts, decentralized products, cross-chain systems, and full-stack Web3 engineering.</p>
          </div>

          <Link href={`/work/${featured[1].slug}`} className="group relative p-4 transition-colors duration-500 hover:bg-surface md:p-5" data-cursor-label="Open independent work">
            <div className="flex items-center justify-between page-kicker">
              <span>Independent work</span><span>{featured[1].year}</span>
            </div>
            <div className="relative mt-4 aspect-[16/9] overflow-hidden bg-surface">
              <Image src={featured[1].image} alt="IINGO Network artwork" fill priority sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-[1000ms] ease-editorial group-hover:scale-[1.07] group-hover:rotate-[-0.35deg]" />
            </div>
            <p className="mt-3 font-domaine text-2xl tracking-[-0.03em]">{featured[1].shortTitle}</p>
          </Link>
        </section>
      </Container>

      <Container className="pt-5 lg:pt-7">
        <GsapHero words={["Manish", "Singh"]} />
      </Container>

      <div className="mt-5 lg:mt-7">
        <Marquee items={["Solidity", "ERC-3643", "ERC-1404", "RWA Tokenization", "Cross-Chain", "Next.js", "Node.js", "Avalanche"]} />
      </div>

      <Container className="section-space">
        <Reveal>
          <section id="profile" className="grid scroll-mt-28 gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16" aria-labelledby="profile-heading">
            <ParallaxImage
              src="/images/portrait-ledger.svg"
              alt="Editorial portrait illustration representing Manish Singh"
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="aspect-[9/11] lg:sticky lg:top-28"
            />
            <div className="flex flex-col justify-between">
              <div>
                <p className="page-kicker">Profile / Full-stack blockchain engineering</p>
                <TextReveal id="profile-heading" text="Contract to interface." as="h2" className="mt-4 max-w-5xl font-display text-[clamp(3.7rem,9.3vw,10rem)] uppercase leading-[0.72] tracking-[-0.07em]" />
                <p className="mt-7 max-w-3xl font-domaine text-[clamp(1.75rem,3.6vw,3.8rem)] leading-[0.98] tracking-[-0.035em]">
                  I build the complete Web3 product stack-from Solidity contracts and blockchain integrations to APIs, data, and responsive interfaces.
                </p>
              </div>
              <div className="mt-10 grid gap-5 border-t border-line pt-6 sm:grid-cols-2">
                <p className="body-copy"><span className="float-left mr-2 font-display text-7xl leading-[0.72] text-accent">M</span>y current focus is regulated asset infrastructure, ERC-3643 and ERC-1404 workflows, cross-chain systems, and reliable EVM applications.</p>
                <div className="flex flex-col items-start justify-end gap-4 font-editorial">
                  <Link href="/about" className="editorial-link">Read the full profile ↗</Link>
                  <a href={siteConfig.resume} className="editorial-link" download>Download résumé ↓</a>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </Container>

      <Container className="pb-[var(--section-space)]">
        <SectionHeading index="01" eyebrow="Selected technical work" title="Reports from the field" />
        <div className="mt-8 grid gap-9 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-14">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05} className={index === 2 ? "lg:col-span-2 lg:w-[calc(50%-1rem)]" : ""}>
              <ProjectCard project={project} priority={index < 2} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-end">
          <Link href="/work" className="ink-button group flex items-center gap-3" data-cursor-label="Open work archive">
            Open complete archive <ArrowDownRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </Link>
        </div>
      </Container>

      <section className="bg-foreground py-[var(--section-space)] text-background">
        <Container>
          <Reveal>
            <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <h2 className="font-display text-[clamp(4rem,12vw,12rem)] uppercase leading-[0.72] tracking-[-0.06em]">From<br />contract<br />to interface</h2>
              <p className="max-w-2xl font-domaine text-[clamp(1.7rem,3.3vw,3.6rem)] leading-[1.02] text-background/80">A reliable blockchain product is a connected system. Every layer affects the user’s understanding, confidence, and outcome.</p>
            </div>
          </Reveal>
          <div className="mt-10 text-foreground">
            <ArchitectureFlow />
          </div>
        </Container>
      </section>

      <Container className="section-space">
        <SectionHeading index="02" eyebrow="Capabilities" title="Three connected disciplines" />
        <div className="mt-8 grid border-t border-line lg:grid-cols-3">
          {capabilityGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.07} className="group border-b border-line p-5 transition-colors duration-500 hover:bg-surface lg:border-r lg:last:border-r-0 lg:p-7">
              <div className="flex items-center justify-between page-kicker"><span>Chapter {group.number}</span><span>0{index + 1}</span></div>
              <h3 className="mt-9 font-display text-5xl uppercase leading-[0.82] tracking-[-0.045em] transition-transform duration-700 ease-editorial group-hover:translate-x-2 sm:text-6xl">{group.title}</h3>
              <p className="mt-5 font-editorial text-base leading-[1.45] text-muted">{group.description}</p>
              <ul className="mt-7 divide-y divide-line border-y border-line">
                {group.skills.map((skill) => <li key={skill} className="py-2.5 font-editorial text-sm">{skill}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>

      <section className="border-y border-line bg-surface py-[var(--section-space)]">
        <Container>
          <SectionHeading index="03" eyebrow="Career ledger" title="Experience in sequence" />
          <div className="mt-8 divide-y divide-line border-t border-line">
            {experiences.slice(0, 4).map((experience, index) => (
              <Reveal key={`${experience.company}-${experience.period}`}>
                <article className="group grid gap-5 py-7 transition-colors duration-500 hover:bg-background/55 md:grid-cols-[70px_1fr_1fr] lg:py-9">
                  <div className="font-display text-5xl leading-none text-accent transition-transform duration-500 group-hover:translate-x-2">0{index + 1}</div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-domaine text-3xl tracking-[-0.03em]">{experience.company}</h3>
                      {experience.current ? <Stamp>Current</Stamp> : null}
                    </div>
                    <p className="mt-2 font-editorial text-sm uppercase tracking-[0.11em] text-foreground/75">{experience.role} / {experience.period}</p>
                  </div>
                  <p className="body-copy text-base text-foreground/75 sm:text-base">{experience.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex justify-end"><Link href="/resume" className="editorial-link">Read the complete career ledger ↗</Link></div>
        </Container>
      </section>

      <Container className="section-space">
        <SectionHeading index="04" eyebrow="Engineering principles" title="How the work is judged" />
        <div className="mt-8 grid gap-px bg-line md:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} className="group bg-background p-6 transition-colors duration-500 hover:bg-foreground hover:text-background sm:p-8">
              <span className="page-kicker transition-colors group-hover:text-background/75">Principle 0{index + 1}</span>
              <h3 className="mt-7 font-domaine text-3xl tracking-[-0.03em] sm:text-4xl">{principle.title}</h3>
              <p className="mt-4 body-copy transition-colors group-hover:text-background/70">{principle.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
