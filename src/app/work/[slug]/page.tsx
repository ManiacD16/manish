import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { Container } from "@/components/ui/container";
import { Stamp } from "@/components/ui/stamp";
import { getProject, projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: absoluteUrl(`/work/${project.slug}`) },
    openGraph: { title: project.title, description: project.summary, images: [project.image] }
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const hasLongWord = project.title.split(" ").some((word) => word.length >= 10);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <Container className="py-8 sm:py-12 lg:py-16">
        <header>
          <div className="flex flex-wrap items-center justify-between gap-3 border-y border-line py-3 page-kicker">
            <span>Technical report {project.number}</span>
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <TextReveal text={project.title} as="h1" className={`mt-7 max-w-7xl page-title ${hasLongWord ? "project-title-long" : ""}`} />
          <div className="mt-8 grid gap-6 border-t border-line pt-5 md:grid-cols-[1fr_1fr]">
            <div>
              <div className="flex flex-wrap gap-2"><Stamp>{project.accent}</Stamp>{project.confidential ? <Stamp tone="ink">Confidential</Stamp> : null}</div>
              <p className="mt-5 font-domaine text-3xl leading-[1.04] tracking-[-0.03em] sm:text-4xl">{project.summary}</p>
            </div>
            <dl className="grid grid-cols-2 gap-x-5 gap-y-4 font-editorial text-sm md:justify-self-end md:max-w-xl">
              <div className="border-b border-line pb-3"><dt className="page-kicker">Role</dt><dd className="mt-1">{project.role}</dd></div>
              <div className="border-b border-line pb-3"><dt className="page-kicker">Status</dt><dd className="mt-1">{project.status}</dd></div>
              <div className="border-b border-line pb-3"><dt className="page-kicker">Networks</dt><dd className="mt-1">{project.networks.join(", ")}</dd></div>
              <div className="border-b border-line pb-3"><dt className="page-kicker">Standards</dt><dd className="mt-1">{project.standards.join(", ")}</dd></div>
            </dl>
          </div>
        </header>

        <ParallaxImage src={project.image} alt={`${project.title} case study artwork`} priority sizes="100vw" className="mt-10 aspect-[16/10] sm:mt-14" />

        <section className="grid gap-7 border-b border-line bg-surface/45 px-5 py-12 md:grid-cols-[0.42fr_1fr] lg:px-8 lg:py-20">
          <div className="page-kicker">Outcome / Verified scope</div>
          <p className="max-w-5xl font-domaine text-[clamp(2rem,4.5vw,5rem)] leading-[0.98] tracking-[-0.035em]">{project.outcome}</p>
        </section>

        <div>
          {project.sections.map((section, sectionIndex) => (
            <Reveal key={section.title} variant={sectionIndex % 2 === 0 ? "clip" : "left"}>
              <section className="grid gap-7 border-b border-line py-12 md:grid-cols-[0.42fr_1fr] lg:py-20">
                <div className="page-kicker">0{sectionIndex + 1} / {section.eyebrow}</div>
                <div>
                  <h2 className="max-w-5xl font-display text-[clamp(3rem,7vw,7.5rem)] uppercase leading-[0.78] tracking-[-0.055em]">{section.title}</h2>
                  <div className="mt-7 grid gap-5 lg:grid-cols-2">
                    {section.body.map((paragraph) => <p key={paragraph} className="body-copy">{paragraph}</p>)}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-8 grid border-t border-line sm:grid-cols-2">
                      {section.bullets.map((bullet, bulletIndex) => <li key={bullet} className="border-b border-line py-3 font-editorial text-sm sm:odd:border-r sm:odd:pr-4 sm:even:pl-4"><span className="mr-3 text-accent">0{bulletIndex + 1}</span>{bullet}</li>)}
                    </ul>
                  ) : null}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <section className="grid gap-7 py-12 md:grid-cols-[0.42fr_1fr] lg:py-20">
          <div className="page-kicker">Technology register</div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((technology) => <span key={technology} className="border border-line px-3 py-2 font-editorial text-xs uppercase tracking-[0.12em] transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-paper">{technology}</span>)}
          </div>
        </section>
      </Container>

      <nav className="grid border-y border-line md:grid-cols-2" aria-label="Project navigation">
        <Link href={`/work/${previous.slug}`} className="group relative overflow-hidden border-b border-line p-6 transition-colors hover:bg-surface md:border-b-0 md:border-r lg:p-10" data-cursor-label="Previous report">
          <div className="page-kicker">← Previous report</div>
          <div className="mt-4 font-display text-5xl uppercase leading-[0.82] tracking-[-0.05em] transition-all duration-700 ease-editorial group-hover:-translate-x-2 group-hover:text-accent sm:text-7xl">{previous.shortTitle}</div>
        </Link>
        <Link href={`/work/${next.slug}`} className="group relative overflow-hidden p-6 text-right transition-colors hover:bg-surface lg:p-10" data-cursor-label="Next report">
          <div className="page-kicker">Next report →</div>
          <div className="mt-4 font-display text-5xl uppercase leading-[0.82] tracking-[-0.05em] transition-all duration-700 ease-editorial group-hover:translate-x-2 group-hover:text-accent sm:text-7xl">{next.shortTitle}</div>
        </Link>
      </nav>
    </article>
  );
}
