# Portfolio Hub Specification 001

**Task:** MELLY-PORTFOLIO-HUB-SPEC-001
**Status:** Draft for review (docs-only, no implementation)
**Date:** 2026-07-10
**Owner:** Mateusz Ozimkiewicz

---

## 1. Purpose

A personal portfolio website that presents **Mateusz Ozimkiewicz** as a
**Junior Full-Stack Developer | React · TypeScript · FastAPI · AI Tools**.

The site serves three audiences, in priority order:

1. **Recruiters (non-technical)** — need to understand within 30 seconds who Mateusz is, what he builds, and how to contact him.
2. **Hiring managers / developers (technical)** — need proof of depth: architecture decisions, safety posture, real code, real trade-offs.
3. **Peers / community** — need a coherent story connecting the projects.

### Non-goals

- Not a SaaS landing page. No pricing, no sign-up, no product claims.
- Not a blog platform (a blog section may be added later; out of scope now).
- No live trading, broker connections, or financial advice of any kind.

## 2. Positioning statement

> Junior full-stack developer who builds safety-first AI tooling:
> a read-only AI trading terminal, an AI command center with a living
> knowledge graph, and an agent-driven second brain — all designed with
> dry-run defaults, honest limitations, and no fake metrics.

The unifying narrative: **"AI leverage with engineering discipline."**
Every project demonstrates the same values — safety rails first, honest
scope, documented decisions, agent-assisted but human-reviewed workflow.

## 3. Site map

```
/                     Home
/projects             Projects index
/projects/mellytrade  MellyTrade case study
/projects/aios        MellyCore AIOS case study (links out to cinematic /aios route)
/projects/workspace   AI Second Brain / Agent Workspace case study
/about                About
/contact              Contact / CV
```

### Page inventory

| Route | Purpose | Primary audience | Key CTA |
|---|---|---|---|
| `/` | Hook + positioning + 3 project cards | Recruiters | "View projects" / "Download CV" |
| `/projects` | Scannable index of all projects | Both | Open a case study |
| `/projects/mellytrade` | Deep case study, safety-first trading terminal | Developers | GitHub link / next case study |
| `/projects/aios` | Case study + link to the cinematic `/aios` showcase in MellyCore | Both | "Open live showcase" |
| `/projects/workspace` | Case study of the agent workflow / second brain | Developers | Next case study / contact |
| `/about` | Human story, skills, learning path | Recruiters | Contact |
| `/contact` | Email, GitHub, LinkedIn, downloadable CV (PDF) | Recruiters | Email / CV download |

## 4. Design direction

### Visual language

- **Professional dark UI.** Near-black background (not pure `#000`), one accent color, high-contrast text. Cinematic feel comes from typography, spacing, and subtle motion — not heavy effects.
- **Readability beats spectacle.** Body text ≥ 16px, line length 60–75ch, WCAG AA contrast minimum.
- **Mobile-first.** Single-column layouts that scale up; test at 375px before desktop.
- **Recruiter-friendly.** Name, role, and contact reachable from every page (header + footer). No mystery navigation.

### Motion budget

- CSS transitions and small entrance reveals only (`prefers-reduced-motion` respected).
- **No WebGL / Three.js** unless explicitly approved later.
- No autoplaying video; screenshots and short optimized clips (user-initiated) only.

### Performance budget

- Static-first delivery (SSG or plain static hosting). Target: LCP < 2.0s on mid-range mobile, total JS < 100KB gzipped on the home page.
- No heavy dependencies: no UI kit imports for the sake of one component, no animation libraries above ~10KB unless justified in the backlog.
- Images: modern formats (AVIF/WebP with fallback), lazy-loaded below the fold.

### Honesty constraints (hard rules)

- **No fake metrics** (no invented user counts, P&L numbers, or performance stats).
- **No fake clients or testimonials.**
- **No fake production claims.** MellyTrade is described as a safety-first personal project with dry-run/read-only posture — never as a live trading system.
- Screenshots must come from real running builds; label demo data as demo data.

## 5. Content model

Each project is one markdown/frontmatter entry rendered into the index card and the case study page:

```yaml
slug: mellytrade
title: MellyTrade
tagline: Safe AI trading terminal — dry-run by design
stack: [FastAPI, React, TypeScript, Tauri, PWA]
role: Solo developer
status: Active personal project      # honest status only
safety: read-only / dry-run, no broker execution
links:
  repo: <optional GitHub URL>
  live: <optional demo URL>
highlights: [3-5 bullet strings]
```

Case study body structure is defined in `case_study_structure_001.md`.

## 6. Technical direction (for the later implementation task)

Decision deferred to implementation, but the spec constrains the choice:

- **Recommended:** Astro (static output, zero JS by default, markdown content collections fit the content model above). React islands only where interaction is needed.
- **Acceptable alternative:** Vite + React static build, if reusing existing MellyTrade UI components matters more than page weight.
- Plain CSS or a single utility layer (e.g. hand-rolled tokens or Tailwind) — one approach, not both.
- Hosting: any static host (GitHub Pages / Cloudflare Pages / Netlify). No backend. Contact = `mailto:` + linked profiles; **no form backend, no secrets**.

## 7. Accessibility & SEO baseline

- Semantic landmarks, one `h1` per page, skip link, visible focus states.
- `prefers-reduced-motion` and `prefers-color-scheme` respected (dark is default; light fallback optional later).
- Per-page `<title>` + meta description, Open Graph image, sitemap, robots.txt.
- Person + WebSite structured data (JSON-LD) on the home page.

## 8. Acceptance criteria for the built site (future)

1. All 7 routes render statically and pass Lighthouse ≥ 90 (Performance, A11y, Best Practices, SEO) on mobile emulation.
2. Every project page states its safety posture and honest status explicitly.
3. CV downloadable as PDF from Home and Contact.
4. No console errors, no network calls to third parties except hosting/CDN.
5. Content sourced only from the docs in `docs/portfolio/` — no invented claims.

## 9. Related documents

- [project_positioning_001.md](project_positioning_001.md) — narrative and per-project positioning
- [homepage_copy_001.md](homepage_copy_001.md) — approved homepage copy draft
- [case_study_structure_001.md](case_study_structure_001.md) — shared case study template
- [implementation_backlog_001.md](implementation_backlog_001.md) — ordered build backlog
