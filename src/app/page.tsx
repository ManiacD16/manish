import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import { GsapHero } from "@/components/motion/gsap-hero";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { ArchitectureFlow } from "@/components/sections/architecture-flow";
import { Container } from "@/components/ui/container";
import { Marquee } from "@/components/ui/marquee";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stamp } from "@/components/ui/stamp";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import {
  capabilityGroups,
  principles,
  siteConfig,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Full Stack Blockchain Developer",
  description: siteConfig.description,
};

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      {/* Portfolio highlights */}
      <Container className="pt-5 lg:pt-7">
        <section
          className="
            grid
            min-w-0
            border-y
            border-line
            md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)_minmax(0,1fr)]
          "
          aria-label="Portfolio edition highlights"
        >
          <Link
            href={`/work/${featured[0].slug}`}
            className="
              group
              relative
              min-w-0
              border-b
              border-line
              p-4
              transition-colors
              duration-500
              hover:bg-surface
              md:border-b-0
              md:border-r
              md:p-5
            "
            data-cursor-label="Open lead report"
          >
            <div className="page-kicker flex items-center justify-between gap-4">
              <span>Lead report</span>
              <span>{featured[0].year}</span>
            </div>

            <div className="relative mt-4 aspect-[16/9] overflow-hidden bg-surface">
              <Image
                src={featured[0].image}
                alt="Regulated RWA platform artwork"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="
                  object-cover
                  transition
                  duration-[1000ms]
                  ease-editorial
                  group-hover:scale-[1.07]
                  group-hover:rotate-[0.35deg]
                "
              />
            </div>

            <p className="mt-3 min-w-0 font-domaine text-2xl tracking-[-0.03em]">
              {featured[0].shortTitle}
            </p>
          </Link>

          <div
            className="
              flex
              min-w-0
              flex-col
              items-center
              justify-center
              border-b
              border-line
              px-5
              py-9
              text-center
              md:border-b-0
              md:border-r
            "
          >
            <Stamp>Portfolio Edition</Stamp>

            <p
              className="
                mt-4
                font-display
                text-5xl
                uppercase
                leading-[0.82]
                tracking-[-0.035em]
                sm:text-6xl
              "
            >
              Selected
              <br />
              Work
            </p>

            <p
              className="
                mt-4
                max-w-xs
                font-editorial
                text-sm
                leading-[1.45]
                text-muted
              "
            >
              Smart contracts, decentralized products, cross-chain systems,
              and full-stack Web3 engineering.
            </p>
          </div>

          <Link
            href={`/work/${featured[1].slug}`}
            className="
              group
              relative
              min-w-0
              p-4
              transition-colors
              duration-500
              hover:bg-surface
              md:p-5
            "
            data-cursor-label="Open independent work"
          >
            <div className="page-kicker flex items-center justify-between gap-4">
              <span>Independent work</span>
              <span>{featured[1].year}</span>
            </div>

            <div className="relative mt-4 aspect-[16/9] overflow-hidden bg-surface">
              <Image
                src={featured[1].image}
                alt="IINGO Network artwork"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="
                  object-cover
                  transition
                  duration-[1000ms]
                  ease-editorial
                  group-hover:scale-[1.07]
                  group-hover:rotate-[-0.35deg]
                "
              />
            </div>

            <p className="mt-3 min-w-0 font-domaine text-2xl tracking-[-0.03em]">
              {featured[1].shortTitle}
            </p>
          </Link>
        </section>
      </Container>

      {/* Main hero */}
      <Container className="pt-5 lg:pt-7">
        <GsapHero words={["Manish", "Singh"]} />
      </Container>

      {/* Technology marquee */}
      <div className="mt-5 overflow-hidden lg:mt-7">
        <Marquee
          items={[
            "Solidity",
            "ERC-3643",
            "ERC-1404",
            "RWA Tokenization",
            "Cross-Chain",
            "Next.js",
            "Node.js",
            "Avalanche",
          ]}
        />
      </div>

      {/* Profile */}
      <Container className="section-space">
        <Reveal>
          <section
            id="profile"
            className="
              grid
              min-w-0
              scroll-mt-28
              gap-10
              lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]
              lg:gap-16
            "
            aria-labelledby="profile-heading"
          >
            <ParallaxImage
              src="/images/portrait-ledger.svg"
              alt="Editorial portrait illustration representing Manish Singh"
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="aspect-[9/11] lg:sticky lg:top-28"
            />

            <div className="flex min-w-0 flex-col justify-between">
              <div className="min-w-0">
                <p className="page-kicker">
                  Profile / Full-stack blockchain engineering
                </p>

                <TextReveal
                  id="profile-heading"
                  text="Contract to interface."
                  as="h2"
                  className="
                    mt-4
                    w-full
                    min-w-0
                    max-w-full
                    pr-[0.1em]
                    font-display
                    text-[clamp(3.25rem,8vw,8.75rem)]
                    font-normal
                    uppercase
                    leading-[0.8]
                    tracking-[-0.025em]
                    [font-synthesis:none]
                    [text-rendering:geometricPrecision]
                  "
                />

                <p
                  className="
                    mt-7
                    max-w-3xl
                    font-domaine
                    text-[clamp(1.75rem,3.6vw,3.8rem)]
                    leading-[1.02]
                    tracking-[-0.03em]
                  "
                >
                  I build the complete Web3 product stack—from Solidity
                  contracts and blockchain integrations to APIs, data, and
                  responsive interfaces.
                </p>
              </div>

              <div
                className="
                  mt-10
                  grid
                  min-w-0
                  gap-5
                  border-t
                  border-line
                  pt-6
                  sm:grid-cols-2
                "
              >
                <p className="body-copy min-w-0">
                  <span
                    className="
                      float-left
                      mr-2
                      font-display
                      text-7xl
                      leading-[0.72]
                      text-accent
                    "
                  >
                    M
                  </span>
                  y current focus is regulated asset infrastructure, ERC-3643
                  and ERC-1404 workflows, cross-chain systems, and reliable EVM
                  applications.
                </p>

                <div
                  className="
                    flex
                    min-w-0
                    flex-col
                    items-start
                    justify-end
                    gap-4
                    font-editorial
                  "
                >
                  <Link href="/about" className="editorial-link">
                    Read the full profile ↗
                  </Link>

                  <a
                    href={siteConfig.resume}
                    className="editorial-link"
                    download
                  >
                    Download résumé ↓
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </Container>

      {/* Selected projects */}
      <Container className="pb-[var(--section-space)]">
        <SectionHeading
          index="01"
          eyebrow="Selected technical work"
          title="Reports from the field"
        />

        <div
          className="
            mt-8
            grid
            min-w-0
            gap-9
            lg:grid-cols-2
            lg:gap-x-8
            lg:gap-y-14
          "
        >
          {featured.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.05}
              className={
                index === 2
                  ? "min-w-0 lg:col-span-2 lg:w-[calc(50%-1rem)]"
                  : "min-w-0"
              }
            >
              <ProjectCard project={project} priority={index < 2} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/work"
            className="ink-button group flex items-center gap-3"
            data-cursor-label="Open work archive"
          >
            Open complete archive

            <ArrowDownRight
              size={17}
              className="
                transition-transform
                group-hover:translate-x-0.5
                group-hover:translate-y-0.5
              "
            />
          </Link>
        </div>
      </Container>

      {/* Architecture */}
      <section className="overflow-hidden bg-foreground py-[var(--section-space)] text-background">
        <Container>
          <Reveal>
            <div
              className="
                grid
                min-w-0
                gap-10
                lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]
                lg:items-end
                lg:gap-16
                xl:gap-20
              "
            >
              <h2
                className="
                  min-w-0
                  max-w-full
                  pr-[0.06em]
                  font-display
                  text-[clamp(3.75rem,12vw,7rem)]
                  font-normal
                  uppercase
                  leading-[0.82]
                  tracking-[-0.025em]
                  [font-synthesis:none]
                  [text-rendering:geometricPrecision]
                  sm:text-[clamp(4.75rem,10vw,7.75rem)]
                  lg:text-[clamp(5.5rem,8.2vw,9rem)]
                "
              >
                <span className="block">From</span>
                <span className="block">contract</span>
                <span className="block">to interface</span>
              </h2>

              <p
                className="
                  min-w-0
                  max-w-[24ch]
                  font-domaine
                  text-[clamp(1.65rem,2.7vw,3.15rem)]
                  leading-[1.08]
                  tracking-[-0.025em]
                  text-background/80
                  lg:justify-self-end
                  lg:pb-2
                "
              >
                A reliable blockchain product is a connected system. Every
                layer affects the user’s understanding, confidence, and
                outcome.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 min-w-0 text-foreground">
            <ArchitectureFlow />
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <Container className="section-space">
        <SectionHeading
          index="02"
          eyebrow="Capabilities"
          title="Three connected disciplines"
        />

        <div
          className="
            mt-8
            grid
            min-w-0
            grid-cols-1
            border-t
            border-line
            md:grid-cols-2
            2xl:grid-cols-3
          "
        >
          {capabilityGroups.map((group, index) => {
            const responsiveBorders =
              index === 0
                ? "md:border-r"
                : index === 1
                  ? "2xl:border-r"
                  : "";

            const responsiveSpan =
              index === 2
                ? "md:col-span-2 2xl:col-span-1"
                : "";

            return (
              <Reveal
                key={group.title}
                delay={index * 0.07}
                className={`
                  @container/capability
                  group
                  min-w-0
                  overflow-hidden
                  border-b
                  border-line
                  p-5
                  transition-colors
                  duration-500
                  hover:bg-surface
                  lg:p-7
                  ${responsiveBorders}
                  ${responsiveSpan}
                `}
              >
                <div
                  className="
                    page-kicker
                    flex
                    min-w-0
                    items-center
                    justify-between
                    gap-5
                  "
                >
                  <span>Chapter {group.number}</span>
                  <span>0{index + 1}</span>
                </div>

                <h3
                  className="
                    mt-9
                    min-w-0
                    max-w-full
                    pr-[0.06em]
                    font-display
                    text-[clamp(2.5rem,11cqw,4.6rem)]
                    font-normal
                    uppercase
                    leading-[0.94]
                    tracking-[-0.02em]
                    transition-transform
                    duration-700
                    ease-editorial
                    [font-synthesis:none]
                    [overflow-wrap:break-word]
                    [text-rendering:geometricPrecision]
                    [text-wrap:balance]
                    group-hover:translate-x-1
                    sm:group-hover:translate-x-2
                  "
                >
                  {group.title}
                </h3>

                <p
                  className="
                    mt-6
                    max-w-[36ch]
                    font-editorial
                    text-base
                    leading-[1.55]
                    text-foreground/70
                  "
                >
                  {group.description}
                </p>

                <ul className="mt-7 divide-y divide-line border-y border-line">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="
                        min-w-0
                        py-2.5
                        font-editorial
                        text-sm
                        leading-[1.4]
                      "
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </Container>

      {/* Experience */}
      <section className="border-y border-line bg-surface py-[var(--section-space)]">
        <Container>
          <SectionHeading
            index="03"
            eyebrow="Career ledger"
            title="Experience in sequence"
          />

          <div className="mt-8 divide-y divide-line border-t border-line">
            {experiences.slice(0, 4).map((experience, index) => (
              <Reveal key={`${experience.company}-${experience.period}`}>
                <article
                  className="
                    group
                    grid
                    min-w-0
                    gap-5
                    py-7
                    transition-colors
                    duration-500
                    hover:bg-background/55
                    md:grid-cols-[70px_minmax(0,1fr)_minmax(0,1fr)]
                    lg:py-9
                  "
                >
                  <div
                    className="
                      font-display
                      text-5xl
                      leading-none
                      text-accent
                      transition-transform
                      duration-500
                      group-hover:translate-x-2
                    "
                  >
                    0{index + 1}
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3
                        className="
                          min-w-0
                          font-domaine
                          text-3xl
                          tracking-[-0.03em]
                        "
                      >
                        {experience.company}
                      </h3>

                      {experience.current ? <Stamp>Current</Stamp> : null}
                    </div>

                    <p
                      className="
                        mt-2
                        font-editorial
                        text-sm
                        uppercase
                        leading-[1.45]
                        tracking-[0.11em]
                        text-foreground/75
                      "
                    >
                      {experience.role} / {experience.period}
                    </p>
                  </div>

                  <p className="body-copy min-w-0 text-base text-foreground/75">
                    {experience.summary}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link href="/resume" className="editorial-link">
              Read the complete career ledger ↗
            </Link>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <Container className="section-space">
        <SectionHeading
          index="04"
          eyebrow="Engineering principles"
          title="How the work is judged"
        />

        <div className="mt-8 grid min-w-0 gap-px bg-line md:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal
              key={principle.title}
              className="
                group
                min-w-0
                bg-background
                p-6
                transition-colors
                duration-500
                hover:bg-foreground
                hover:text-background
                sm:p-8
              "
            >
              <span
                className="
                  page-kicker
                  transition-colors
                  group-hover:text-background/75
                "
              >
                Principle 0{index + 1}
              </span>

              <h3
                className="
                  mt-7
                  min-w-0
                  font-domaine
                  text-3xl
                  tracking-[-0.03em]
                  sm:text-4xl
                "
              >
                {principle.title}
              </h3>

              <p
                className="
                  body-copy
                  mt-4
                  transition-colors
                  group-hover:text-background/70
                "
              >
                {principle.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}