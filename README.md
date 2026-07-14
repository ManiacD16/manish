# The Chain Ledger — Manish Singh Portfolio

An award-focused, production-oriented developer portfolio built with Next.js, React, Tailwind CSS, GSAP, Framer Motion, Lenis, and next-themes. The design translates the supplied Miranda-inspired editorial system into an original blockchain-focused identity.

## Included

- Responsive home page with editorial hero and selected work
- Filterable project archive
- Four statically generated technical case-study routes
- Profile, career ledger, and contact pages
- Dark and light editions
- First-visit printing-press loader and route loading state
- Character-level GSAP hero choreography and scroll-linked parallax
- Pointer-responsive project cards and contextual cursor labels
- Editorial index navigation with scroll-aware header behavior
- GSAP scroll choreography
- Framer Motion masked typography, page, archive, and component transitions
- Lenis smooth scrolling
- Reduced-motion, keyboard, touch, and coarse-pointer support
- SEO metadata, Open Graph image, JSON-LD, sitemap, robots, and manifest
- Downloadable résumé PDF
- Original local SVG artwork; no stock-image dependency
- Supplied design tokens and documentation retained in `design-reference/`

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- GSAP + `@gsap/react`
- Framer Motion
- Lenis
- `next-themes`
- Lucide icons

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

See `FINAL_WOW_REFINEMENT.md` for the final design-engineering review and `AWWWARDS_REFINEMENT.md` for the earlier jury-style audit.

## Production checks

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## Configuration

Set the production origin in `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This value is used for canonical URLs, sitemap entries, and structured metadata.

## Content updates

- Project content: `src/data/projects.ts`
- Career and education: `src/data/experience.ts`
- Contact, navigation, capabilities, and principles: `src/data/site.ts`
- Resume PDF: `public/resume/Manish-Singh-Resume.pdf`
- Project artwork: `public/images/`

## Typography

The supplied reference specifies proprietary typefaces (Editorial New, Canopee, Domaine Display, and Germgoth), but no licensed font files were included. To keep builds private, fast, and network-independent, the implementation uses carefully selected editorial system-font stacks:

- Iowan Old Style / Palatino / Georgia — editorial body
- Bodoni 72 / Bodoni MT / Didot — compressed display headings
- Baskerville / Times New Roman — secondary display text
- Copperplate / Georgia — rare decorative accents

For pixel-level typography, replace these stacks with properly licensed WOFF2 files through `next/font/local`. Do not add or distribute unauthorized font binaries.

## Contact form

The contact form intentionally prepares a `mailto:` message and stores no visitor data. For server-side delivery, connect the form to a transactional email provider and add abuse protection before deployment.

## Confidential work

Two case studies are marked confidential. Their public copy avoids contract addresses, private architecture, production data, and proprietary logic. Review all project text and artwork with the relevant employer before publishing.

## Deployment

The project is suitable for Vercel or any Node.js host supporting Next.js. On Vercel, import the repository, set `NEXT_PUBLIC_SITE_URL`, and deploy.
