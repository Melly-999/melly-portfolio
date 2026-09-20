# Mateusz Ozimkiewicz — Portfolio

**AI Automation & Full-Stack Developer** · also an AI Product Engineer

A premium portfolio presenting AI automation, full-stack product engineering, agent orchestration, RAG/document intelligence, and systems architecture work.

Live site: <https://mateusz-ozimkiewicz-portfolio.vercel.app>

## Projects

Every project carries a status label on the site so that what is built, what is a prototype, and what is a concept stay clearly separate.

| Project | What it is | Status shown on the site |
|---|---|---|
| **Yuzuki** | Flagship. A local-first Windows desktop AI application with seven named routing modes and a fail-closed private mode. Tauri, React and TypeScript front end, a local Node API, and Hermes Agent integration over loopback. Public source only. | Private mode and the local chat path are live-verified; other routing modes are implemented but not live-verified; the Knowledge Constellation is a prototype on fixture data |
| **Klaus** | An AI orchestration and coding agent: coordinates agents and models, carries project context, and routes work through implementation, review and validation. | Concept — owner-defined architecture |
| **MellyCore AIOS** | A command-center architecture for shared context and agent coordination. | Partial — documentation plus a static preview; execution locked, no live providers |
| **RAG Document Assistant** | Document search with source-grounded answers for knowledge bases and support documentation. | Concept interface |
| **MellyTrade** | A data-dense analytics and monitoring dashboard for signals, risk and system health. | Concept interface with sample values; read-only, dry-run, no broker execution |

A supporting page describes a documented multi-agent development workflow.

## Site

- Astro 7 with strict TypeScript
- Plain CSS with custom properties; no UI framework, database, analytics or external API
- Static output with a small amount of client script for motion and navigation
- Deployed on Vercel; canonical and Open Graph URLs come from the production `site` value in `astro.config.mjs`

Routes: `/`, `/projects`, `/projects/yuzuki`, `/projects/klaus`, `/projects/aios`, `/projects/rag-assistant`, `/projects/mellytrade`, `/projects/workspace`, `/about`, `/contact`.

## Development

Requires Node.js 22.12 or newer.

```bash
npm ci
npm run dev      # local dev server
npm run check    # Astro type and template diagnostics
npm run build    # static production build to dist/
```

`npm run preview` serves the production build locally.

## Continuous integration

GitHub Actions installs dependencies with `npm ci`, then runs `npm run check` and `npm run build` on pushes and pull requests to `main`.

## Notes on claims

The site does not present fabricated metrics, clients, users, testimonials or production results. Concept interfaces and fixture data are labelled as such wherever they appear.

## Links

- Yuzuki source: <https://github.com/Melly-999/yuzuki-desktop>
- GitHub: <https://github.com/Melly-999>
- Contact: see the `/contact` page on the live site
