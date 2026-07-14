# Senior QA Report — Manish Singh Chain Ledger Portfolio

**Audit date:** 14 July 2026  
**Build:** Next.js 15.5.20 production build  
**Scope:** Home, work archive, four case studies, profile, career ledger, contact, custom 404, light and dark themes

## Executive result

The portfolio was run as an optimized production build and reviewed against the supplied Miranda-inspired design tokens and editorial specification. The final interface preserves the intended parchment, bone-cream, ink-black, charcoal, and ember visual language while remaining readable and responsive.

The QA pass covered **10 content routes at 1440px, 1024px, 390px, and 320px**, plus representative desktop and mobile dark-mode captures. The final build generated **17 static/SSG routes**.

## Defects found and fixed

### Critical and high priority

1. **Motion could leave content visually absent**
   - Reveal components relied too heavily on an initial hidden state.
   - Converted reveals to progressive enhancement so content remains visible if animation is interrupted, reduced, or unavailable.
   - Added reduced-motion-safe behavior and clear property cleanup after GSAP animation.

2. **Work archive could render as an empty page**
   - Framer Motion items began in a hidden state during interrupted hydration or automated rendering.
   - Changed archive cards to render visibly by default while retaining animated filtering and layout transitions.

3. **Narrow-screen grid clipping at 320px**
   - Large editorial headings could impose their min-content width on a single-column grid.
   - Added a safe grid-child sizing rule so content wraps within the available column.
   - Verified all content routes at the 320px minimum width with no root-level horizontal scrolling.

4. **Tablet/mobile overflow caused by animated content**
   - Marquee and hero transforms could inflate internal element width.
   - Contained hero and marquee paint/layout, disabled the moving marquee below 1100px, wrapped labels into a balanced editorial strip, and limited scroll-linked hero transforms to large screens.

5. **Fixed scroll label obstructed content**
   - The previous “SCROLL 00” element could cover forms and project text.
   - Replaced it with a non-obstructive two-pixel edge progress indicator.

### Accessibility and interaction

6. **Menu focus management was incomplete**
   - Added dialog semantics, focus-on-open, Tab/Shift+Tab trapping, Escape close, inert background content, body-scroll locking, and focus restoration.

7. **Small interactive target in the mobile masthead**
   - Increased the portfolio-home link to a 44px minimum target without changing its visual appearance.

8. **Low-contrast accent combinations**
   - Introduced dedicated light-on-ink and ink-on-light accent values.
   - Improved active filter, navigation, stamp, focus, and dark-theme contrast.

9. **Touch and reduced-motion behavior**
   - Disabled Lenis on coarse/touch pointers and narrow screens.
   - Paused smooth scrolling while the document is hidden.
   - Removed nonessential cursor and motion behavior on touch devices.
   - Ensured reduced-motion mode leaves no meaningful headings, links, or paragraphs hidden.

### Visual polish and consistency

10. **Uniform typography and spacing rhythm**
    - Refined responsive title clamps for long project names and contact headings.
    - Increased undersized micro-labels to a more legible baseline.
    - Standardized minimum control heights and footer link targets.
    - Preserved sharp image geometry and restrained accent use from the supplied design system.

11. **Homepage visual hierarchy**
    - Separated calm reading sections from cinematic hero moments.
    - Kept GSAP only for high-value choreography and Framer Motion for route/component transitions.
    - Simplified the tablet/mobile marquee so it supports, rather than competes with, page hierarchy.

12. **Dark-mode consistency**
    - Corrected surface, border, muted-text, accent, selection, and texture behavior.
    - Verified representative desktop and mobile routes in dark mode.

### Performance and SEO

13. **First-visit loading experience**
    - Reintroduced the opening sequence as a short publication-composition moment rather than an artificial wait.
    - Made it progressive: it is hidden without JavaScript, skipped for reduced motion, aria-hidden, and never required to access page content.
    - Kept all subsequent route transitions brief and content-first.

14. **Excessive motion work on low-power devices**
    - Limited parallax and scroll-linked hero transforms by viewport and motion preference.
    - Used transform/opacity animation and paused off-context smooth scrolling.

15. **Incorrect canonical URLs on secondary pages**
    - Work, profile, career ledger, and contact inherited the homepage canonical.
    - Added route-specific canonical and Open Graph URLs.

16. **Dependency security**
    - Confirmed `npm audit --omit=dev` reports zero vulnerabilities.

## Final verification matrix

| Check | Result |
|---|---|
| TypeScript | Pass |
| ESLint | Pass |
| Optimized production build | Pass |
| Generated routes | 17 |
| Content routes rendered | 10 |
| Light-mode viewport renders | 40 |
| Dark-mode representative renders | 6 |
| Root horizontal overflow | 0 routes |
| Broken images | 0 |
| Unnamed buttons | 0 |
| Undersized primary-breakpoint targets | 0 |
| Axe violations | 0 across 10 routes |
| Internal broken links/assets | 0 |
| Route-specific titles/descriptions | Pass |
| Route-specific canonicals | Pass |
| npm vulnerabilities | 0 |

## Production bundle snapshot

- Shared first-load JavaScript: approximately **102 kB**
- Homepage first-load JavaScript: approximately **211 kB**
- Work archive first-load JavaScript: approximately **211 kB**
- Case-study first-load JavaScript: approximately **164 kB**
- Contact first-load JavaScript: approximately **157 kB**
- Largest public asset: résumé PDF, approximately **79 kB**
- All project artwork is local SVG, approximately **1–2 kB each**

The bundle is appropriate for a motion-rich portfolio using both GSAP and Framer Motion. No WebGL runtime, remote font request, stock image dependency, or autoplaying media is present.

## Methodology note

The sandbox browser blocks direct URL navigation by policy. Production HTML, CSS, JavaScript references, and local assets were therefore fetched from the running Next.js production server and rendered in Playwright for visual, responsive, DOM, and axe audits. Server responses, links, metadata, build output, source-level focus logic, reduced-motion behavior, and native form validation were checked separately. A synthetic Lighthouse score was not reported because it would not be trustworthy in this constrained navigation environment.

## Remaining intentional product decisions

- The exact proprietary display fonts were not supplied. The project uses a zero-request editorial system-font stack and includes guidance for adding properly licensed WOFF2 files.
- The contact form intentionally prepares a `mailto:` message and stores no visitor data. A server-backed form can be added when a delivery provider is selected.
- Confidential work is represented with qualitative outcomes rather than invented business metrics.
