export function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const content = [...items, ...items];
  return (
    <div className="marquee-shell overflow-hidden border-y border-line bg-surface py-3.5">
      <span className="sr-only">{items.join(", ")}</span>
      <div aria-hidden="true" className={`marquee-track flex w-max items-center gap-9 whitespace-nowrap font-editorial text-[11px] uppercase tracking-[0.16em] text-muted motion-reduce:animate-none sm:text-xs ${reverse ? "marquee-reverse" : ""}`}>
        {content.map((item, index) => (
          <span key={`${item}-${index}`} data-marquee-duplicate={index >= items.length ? "true" : undefined} className="flex items-center gap-9">
            <span className="transition-colors duration-300 hover:text-foreground">{item}</span><span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
