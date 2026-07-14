import { cn } from "@/lib/utils";

export function Stamp({
  children,
  className,
  tone = "accent"
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "accent" | "ink";
}) {
  return (
    <span
      className={cn(
        "relative inline-grid min-h-7 place-items-center overflow-hidden rounded-stamp px-2.5 py-1 font-editorial text-[10px] font-semibold uppercase tracking-[0.14em] before:absolute before:inset-[3px] before:border after:absolute after:-right-2 after:-top-2 after:size-4 after:rotate-45 after:border",
        tone === "accent"
          ? "bg-[#aa330d] text-[#f7f3ef] before:border-[#f7f3ef]/32 after:border-[#f7f3ef]/18"
          : "bg-foreground text-background before:border-background/30 after:border-background/20",
        className
      )}
    >
      <span className="relative">{children}</span>
    </span>
  );
}
