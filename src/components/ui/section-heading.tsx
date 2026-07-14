import { TextReveal } from "@/components/motion/text-reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  className
}: {
  index: string;
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("section-heading group relative grid gap-5 overflow-hidden border-y border-line py-6 md:grid-cols-[120px_1fr] md:gap-10 lg:py-8", className)}>
      <div className="relative z-10 flex items-start gap-3 font-editorial text-[10px] uppercase tracking-[0.18em] text-foreground/72 sm:text-[11px]">
        <span className="font-display text-4xl leading-none text-accent transition-transform duration-700 ease-editorial group-hover:translate-x-1">{index}</span>
        <span className="max-w-[8rem] pt-1.5 leading-[1.35]">{eyebrow}</span>
      </div>
      <TextReveal
        text={title}
        as="h2"
        className="relative z-10 max-w-6xl font-display text-[clamp(3.4rem,8.8vw,9.5rem)] uppercase leading-[0.73] tracking-[-0.067em]"
      />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-1000 ease-editorial group-hover:scale-x-100" />
      <span className="pointer-events-none absolute -right-4 -top-10 font-display text-[9rem] leading-none text-foreground/[0.025] sm:text-[13rem]">{index}</span>
    </div>
  );
}
