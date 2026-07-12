# Melly Portfolio

Owner: Mateusz Ozimkiewicz

Positioning: Junior Full-Stack Developer | React · TypeScript · FastAPI · AI Tools

Narrative: **Process → Platform → Product**

## Featured Projects

- **AI Agent Workspace** — Process
- **MellyCore AIOS** — Platform
- **MellyTrade** — Product

## Current Status

- Docs-first planning complete
- Claude Design prototype preserved ([`reference/claude-design/`](reference/claude-design/))
- Production scaffold in place: Astro + TypeScript, base layout, navigation,
  footer, dark design tokens, and route skeletons for all 7 pages
- Full homepage and case-study content not yet implemented

## Production Stack

- **Framework:** [Astro](https://astro.build) (static output, TypeScript strict)
- **Styling:** plain CSS with CSS custom properties (`src/styles/tokens.css`) — no Tailwind, no CSS-in-JS
- No React/Vue/Svelte integration and no animation library added yet — see [`docs/portfolio/implementation_backlog_001.md`](docs/portfolio/implementation_backlog_001.md) for when (if ever) an island is justified

### Local development

```
npm install       # first time / after dependency changes
npm run dev        # local dev server (default: http://localhost:4321)
npm run build       # static production build → dist/
npm run preview      # preview the production build locally
npm run check       # astro check (TypeScript + template diagnostics)
```

### Routes

| Route | Status |
|---|---|
| `/` | Walking skeleton (hero, Process → Platform → Product strip, projects placeholder, contact CTA) |
| `/projects` | Project index with 3 cards |
| `/projects/mellytrade` | Placeholder case study — safety label visible |
| `/projects/aios` | Placeholder case study |
| `/projects/workspace` | Placeholder case study |
| `/about` | Placeholder |
| `/contact` | Email (mailto) + GitHub; CV link intentionally omitted (no approved CV asset yet) |

## Safety And Honesty Principles

- No fake clients
- No fake awards
- No fake metrics
- No fake production claims
- MellyTrade is read-only, dry-run and advisory
- No broker execution
- Fixture/static data must be clearly labeled as such wherever shown

## Documentation Index

- [Portfolio Hub Spec 001](docs/portfolio/portfolio_hub_spec_001.md)
- [Project Positioning 001](docs/portfolio/project_positioning_001.md)
- [Homepage Copy 001](docs/portfolio/homepage_copy_001.md)
- [Case Study Structure 001](docs/portfolio/case_study_structure_001.md)
- [Implementation Backlog 001](docs/portfolio/implementation_backlog_001.md)
- [Higgsfield Prompt Pack 001](docs/portfolio/higgsfield_prompt_pack_001.md)

## Design Reference

[`reference/claude-design/`](reference/claude-design/) contains the original
Claude Design prototype (`.dc.html` files and design-system bundle). It is a
**design reference only** — not the production application. The production
implementation will reproduce the approved design using the chosen framework.

## Next Recommended Task

PF-020 — Home page full implementation per [`docs/portfolio/homepage_copy_001.md`](docs/portfolio/homepage_copy_001.md), followed by the project content model and the three case studies.
