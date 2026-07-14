import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="grid min-h-[70vh] place-items-center py-16 text-center">
      <div>
        <div className="page-kicker">Error / Missing ledger entry</div>
        <h1 className="mt-5 font-display text-[clamp(7rem,28vw,24rem)] leading-[0.65] tracking-[-0.08em]">404</h1>
        <p className="mx-auto mt-8 max-w-lg font-domaine text-3xl leading-[1.05]">This page was not recorded in the current edition.</p>
        <Link href="/" className="mt-8 inline-block border border-line px-5 py-3 font-editorial text-sm uppercase tracking-[0.12em] transition-colors hover:bg-foreground hover:text-background">Return to front page</Link>
      </div>
    </Container>
  );
}
