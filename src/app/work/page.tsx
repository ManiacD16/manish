import type { Metadata } from "next";
import { ProjectArchive } from "@/components/sections/project-archive";
import { Container } from "@/components/ui/container";
import { TextReveal } from "@/components/motion/text-reveal";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Technical case studies covering regulated tokenization, Web3 products, cross-chain infrastructure, and full-stack EVM applications.",
  alternates: { canonical: absoluteUrl("/work") },
  openGraph: {
    url: absoluteUrl("/work"),
    title: "Selected Work — Manish Singh",
    description: "Technical case studies covering regulated tokenization, Web3 products, cross-chain infrastructure, and full-stack EVM applications."
  }
};

export default function WorkPage() {
  return (
    <Container className="py-8 sm:py-12 lg:py-16">
      <header className="border-b border-line pb-8 lg:pb-12">
        <div className="page-kicker">Archive / Issue 02</div>
        <TextReveal text="Work" as="h1" className="mt-5 page-title" />
        <div className="mt-8 grid gap-5 border-t border-line pt-5 md:grid-cols-[1fr_1fr]">
          <p className="font-domaine text-3xl leading-[1.02] tracking-[-0.03em] sm:text-4xl">Selected technical reports from smart-contract, cross-chain, and full-stack product work.</p>
          <p className="body-copy md:max-w-xl md:justify-self-end">Each report focuses on verified responsibilities, system context, engineering decisions, and honest outcomes. Confidential work is deliberately documented without protected implementation details.</p>
        </div>
      </header>
      <div className="pt-8 lg:pt-12">
        <ProjectArchive projects={projects} />
      </div>
    </Container>
  );
}
