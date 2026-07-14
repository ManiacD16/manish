"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const project = String(form.get("project") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "a new contact"}${project ? ` — ${project}` : ""}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject type: ${project}\n\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("Your email application has been opened with the brief prepared.");
  }

  const fieldClass = "w-full border-b border-line bg-transparent px-0 py-4 font-editorial text-lg text-foreground outline-none placeholder:text-foreground/42 transition-colors duration-300 focus:border-accent";
  const labelClass = "form-field group relative block font-editorial text-[10px] uppercase tracking-[0.16em] text-foreground/68";

  return (
    <form onSubmit={handleSubmit} className="space-y-9" aria-describedby="form-status">
      <div className="grid gap-9 sm:grid-cols-2">
        <label className={labelClass}>
          <span className="transition-colors duration-300 group-focus-within:text-accent">01 / Your name</span>
          <input name="name" autoComplete="name" required className={fieldClass} placeholder="Name" />
          <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-editorial group-focus-within:scale-x-100" />
        </label>
        <label className={labelClass}>
          <span className="transition-colors duration-300 group-focus-within:text-accent">02 / Email address</span>
          <input name="email" type="email" autoComplete="email" required className={fieldClass} placeholder="you@company.com" />
          <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-editorial group-focus-within:scale-x-100" />
        </label>
      </div>
      <label className={labelClass}>
        <span className="transition-colors duration-300 group-focus-within:text-accent">03 / Project type</span>
        <span className="relative block">
          <select name="project" className={`${fieldClass} appearance-none pr-10`} defaultValue="">
            <option value="" disabled>Select a focus</option>
            <option>Smart contract engineering</option>
            <option>Regulated tokenization / RWA</option>
            <option>Web3 product development</option>
            <option>Cross-chain integration</option>
            <option>Full-stack application</option>
            <option>Other collaboration</option>
          </select>
          <ChevronDown size={17} strokeWidth={1.4} aria-hidden="true" className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 transition-transform duration-300 group-focus-within:rotate-180" />
        </span>
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-editorial group-focus-within:scale-x-100" />
      </label>
      <label className={labelClass}>
        <span className="transition-colors duration-300 group-focus-within:text-accent">04 / The brief</span>
        <textarea name="message" required rows={6} className={`${fieldClass} min-h-40 resize-y leading-[1.5]`} placeholder="Tell me what you are building, the current stage, and where you need support." />
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-editorial group-focus-within:scale-x-100" />
      </label>
      <div className="flex flex-col items-start gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="ink-button group flex items-center gap-3 bg-foreground text-background" data-cursor-label="Prepare email">
          Prepare email <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
        <p id="form-status" role="status" className="flex max-w-sm items-start gap-2 font-editorial text-sm leading-[1.45] text-foreground/72">
          {status ? <Check size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" /> : null}
          <span>{status || "This form opens your email client; no data is stored on the website."}</span>
        </p>
      </div>
    </form>
  );
}
