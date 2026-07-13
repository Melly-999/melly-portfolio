# Melly Portfolio

Mateusz Ozimkiewicz’s static portfolio for full-stack development, AI tooling and safety-first product work. The site connects three parts of one story:

- AI Agent Workspace — process
- MellyCore AIOS — platform
- MellyTrade — product

Public positioning: **Full-Stack Developer | React · TypeScript · FastAPI · AI Tools**.

## Stack and boundaries

- Astro 7 with strict TypeScript
- Plain CSS and custom properties
- Static output with minimal client JavaScript
- System font stacks; no external font request
- No UI framework, Tailwind, database, authentication, analytics or external API
- Stable static production deployment on Vercel

The production `site` value is `https://mateusz-ozimkiewicz-portfolio.vercel.app`. Canonical and Open Graph URLs are generated from that stable domain; preview deployment URLs are never published as the portfolio URL.

## Local setup

Requires Node.js 22.12 or newer.

```powershell
npm ci
npm run dev
```

Production validation:

```powershell
npm run build
npm run check
git diff --check
```

The repository does not currently define separate lint or format-check scripts.

## Routes

| Route | Purpose |
|---|---|
| `/` | Terminal-first home page and project narrative |
| `/projects` | Project index |
| `/projects/workspace` | AI Agent Workspace case study |
| `/projects/aios` | MellyCore AIOS static architecture showcase |
| `/projects/mellytrade` | MellyTrade safety-first research dashboard case study |
| `/about` | Profile, skills and working principles |
| `/contact` | Direct email, GitHub and CV-request links |

## Safety and honesty

- MellyTrade is read-only, dry-run and advisory.
- Live orders and broker execution remain blocked.
- Fixture content is labelled as static and illustrative.
- No fabricated performance, clients, users, testimonials or production claims.
- MellyCore AIOS is described as a docs-first prototype and static architecture model.
- The terminal is an illustrative portfolio element, not live monitoring.

## Design source

The selected Terminal First prototype is the visual and content reference. Design-tool HTML, runtime scripts and boards are internal reference material only; the production site is implemented as maintainable Astro components and plain CSS.

Deployment uses the stable Vercel project `mateusz-ozimkiewicz-portfolio`. GitHub profile linking is performed only after merged-main production QA passes.
