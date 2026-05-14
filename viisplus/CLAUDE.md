# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Marketing website for **Viis+ Paigaldus**, an Estonian sticker/vinyl installation company based in Tallinn. The site is dark-teal themed, fully in Estonian.

## Two parallel codebases

This repo contains **two separate implementations** that must be kept in sync manually:

| File | Purpose |
|------|---------|
| `index.html` | **Primary working preview** — single-file vanilla HTML/CSS/JS. All visual changes are built and tested here first. Served via `python3 -m http.server 3456 --directory /Users/m/viisplus`. |
| `app/`, `components/` | Next.js 15 + TypeScript + Tailwind scaffold — component library, **not currently runnable** (no Node.js available in this environment). Components here are ported from index.html for future use. |

**When the user asks to change the design, edit `index.html`.** The Next.js files are secondary and do not need to reflect every change immediately.

## Commands

```bash
# Preview the static site (used by Claude Preview tool)
python3 -m http.server 3456 --directory /Users/m/viisplus

# Next.js (requires Node.js)
npm run dev      # localhost:3000
npm run build
npm run lint
```

## index.html architecture

All CSS lives in a single `<style>` block in `<head>`. All JS lives in a single `<script>` block before `</body>`. Structure within the CSS block:

1. CSS custom properties / reset
2. Typography & layout utilities
3. Header / nav
4. Hero section (gradient dots background, glass decoration)
5. Section-specific styles (services, portfolio, expertise, surfaces, testimonials, CTA, footer)
6. Buttons (`.glow-btn` / `.btn-ghost`)
7. Mobile breakpoints (`@media max-width: 900px`, `560px`)

### Key design tokens (CSS vars in `index.html`)
- `--teal-bright`: `#1de8d4`
- `--bg`: `#001413`
- Hero background: animated hexagonal dot grid via layered `radial-gradient` + `background-position` animation (`dotMove` / `dotHue` keyframes)

### Hero glass decoration
The right half of the hero (`div.hero-decoration`) is `position: absolute; right: 0; top: 0; bottom: 0; width: 50%`. It contains:
- `div.hd-orb` — dark teal sphere (pure CSS radial gradients + `box-shadow` glow pulse)
- `div.hd-s1` … `div.hd-s6` — vertical frosted-glass ribbon strips (`backdrop-filter: blur(5px)` + translucent teal gradients)

**Critical**: all children of `.hero-decoration` are `position: absolute`, so the container needs `bottom: 0` (not `height: 100%`) to have a defined height — `height: 100%` collapses to 0 when the parent only has `min-height`.

### Button system
- `.glow-btn` — dark teal background, cursor-tracking radial glow via `--gx`/`--gy` CSS vars set by `mousemove` JS
- `.btn-ghost` — border-ring only, JS injects `.btn-ghost-border > .btn-ghost-glow` on page load for the mask-composite border glow effect

## Next.js component inventory

| Component | Description |
|-----------|-------------|
| `components/ui/hover-glow-button.tsx` | Port of `.glow-btn` — cursor-tracking radial glow button |
| `components/ui/ripple-border-button.tsx` | Port of `.btn-ghost` — mask-composite border ripple |
| `components/ui/gradient-dots.tsx` | Port of hero dot-grid background using framer-motion |
| `components/ui/shiny-button-1.tsx` | Alternative glow button with SVG `feColorMatrix` filters |
| `components/ui/shape-landing-hero.tsx` | `ElegantShape` floating pill shapes + `HeroGeometric` layout |

## Colour palette

| Token | Hex | Usage |
|-------|-----|-------|
| Teal bright | `#1de8d4` | Accents, em text, button text |
| Teal mid | `#0aada0` | Gradients |
| Teal dark | `#047a71` | Gradients, borders |
| Background | `#001413` | Page background |
