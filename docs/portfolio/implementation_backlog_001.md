# Implementation Backlog 001

**Task:** MELLY-PORTFOLIO-HUB-SPEC-001
**Purpose:** Ordered, estimable backlog for building the portfolio site. Docs-only today — nothing below is started until explicitly approved.

Conventions: sizes are T-shirt (S ≈ ≤2h, M ≈ half-day, L ≈ 1–2 days). Every item lists its acceptance check. IDs are stable for ClickUp/GitHub import.

---

## Milestone 0 — Decisions (blocking)

| ID | Item | Size | Acceptance |
|---|---|---|---|
| PF-000 | Choose framework (recommended: Astro static; alt: Vite+React) and hosting target (GitHub Pages / Cloudflare Pages) | S | Decision recorded in this file's changelog section |
| PF-001 | Choose repo location: new dedicated repo (recommended) vs folder in workspace | S | Decision recorded; repo created empty if new |
| PF-002 | Confirm final personal links (GitHub, LinkedIn, email) and CV file to publish | S | Links verified reachable; CV PDF approved by Mateusz |

## Milestone 1 — Skeleton (first deploy, "walking skeleton")

| ID | Item | Size | Acceptance |
|---|---|---|---|
| PF-010 | Scaffold project, base layout (header/footer/nav), dark theme tokens, typography scale | M | Renders at 375px and 1440px; no horizontal scroll |
| PF-011 | Routing for all 7 pages with placeholder content | S | All routes resolve; nav highlights current page |
| PF-012 | Deploy pipeline to static host with preview builds | S | Push → live URL; Lighthouse run recorded as baseline |

**Recommended first implementation task: PF-010** (see final report — it forces the design-token and layout decisions everything else inherits).

## Milestone 2 — Content pages

| ID | Item | Size | Acceptance |
|---|---|---|---|
| PF-020 | Home page per `homepage_copy_001.md` (hero, what-I-do, 3 cards, how-I-work, credibility strip, contact band) | M | Copy matches doc verbatim or tightened-only; CTAs wired |
| PF-021 | Project content model (frontmatter schema from spec §5) + Projects index page | M | Cards generated from content files, not hardcoded |
| PF-022 | MellyTrade case study per `case_study_structure_001.md` §2.1 | M | All 8 template sections present incl. safety box |
| PF-023 | MellyCore AIOS case study per §2.2 (showcase CTA only if live link exists) | M | Same; no dead links |
| PF-024 | AI Workspace case study per §2.3 | M | Same |
| PF-025 | About page (story, skill matrix from `project_positioning_001.md` §4) | S | Non-technical readable; links to contact |
| PF-026 | Contact / CV page (mailto, profiles, CV PDF download) | S | CV downloads; no form backend; no secrets |

## Milestone 3 — Assets

| ID | Item | Size | Acceptance |
|---|---|---|---|
| PF-030 | Capture + sanitize real screenshots (MellyTrade dashboard, AIOS graph, workflow) — demo data labeled | M | No secrets/keys/personal data visible; AVIF/WebP + fallback |
| PF-031 | Draw 3 architecture/flow diagrams as static SVG | M | Legible at mobile width; dark-theme colors |
| PF-032 | OG image + favicon set | S | OG renders correctly in a link-preview checker |

## Milestone 4 — Quality gate

| ID | Item | Size | Acceptance |
|---|---|---|---|
| PF-040 | Accessibility pass: landmarks, focus states, contrast, reduced-motion | S | axe/Lighthouse a11y ≥ 95; keyboard-only walkthrough OK |
| PF-041 | SEO pass: titles, descriptions, sitemap, robots, JSON-LD Person | S | Lighthouse SEO ≥ 95; rich-results test passes |
| PF-042 | Performance pass against budget (spec §4): JS < 100KB gz on Home, LCP < 2.0s mobile | S–M | Lighthouse mobile Performance ≥ 90 |
| PF-043 | Honesty audit: re-read all copy against the no-fake-claims rules | S | Checklist signed off in PR description |
| PF-044 | Cross-check safety wording with MellyTrade posture (dry-run/read-only/no execution) | S | Wording identical in spirit across site + repos |

## Milestone 5 — Launch & after

| ID | Item | Size | Acceptance |
|---|---|---|---|
| PF-050 | Custom domain + HTTPS (optional) | S | Domain resolves; canonical URLs updated |
| PF-051 | Add portfolio link to CV, GitHub profile, LinkedIn | S | All three updated |
| PF-052 | (Later, optional) Light theme, blog/notes section, Polish CV variant | — | Separate spec required |

---

## Risks

| # | Risk | Impact | Mitigation |
|---|---|---|---|
| R1 | Scope creep toward cinematic effects (WebGL, heavy animation) breaking the performance budget | Slow, junior-unfriendly first impression | Spec forbids WebGL without approval; motion budget in spec §4 is binding |
| R2 | Overclaiming (metrics, "production" language) damaging credibility with technical reviewers | High — trust is the portfolio's core asset | PF-043 honesty audit is a release gate; copy rules are binding |
| R3 | Screenshots leaking secrets, tokens, personal data, or real account info | High | PF-030 sanitization step; capture from demo profiles only |
| R4 | Case studies drifting into unverifiable claims about AIOS/workflow | Medium | Every claim must map to a repo/doc (case study rule §3.2) |
| R5 | Stalling at framework choice / perfectionism before first deploy | Medium — site never ships | Milestone 1 is a walking skeleton; deploy placeholder within first session |
| R6 | Dead links (showcase `/aios`, repos) at review time | Low–medium | Links rendered only when real (PF-023 rule); link check in PF-041 |

## Changelog

- 2026-07-10 — Initial backlog created (docs-only; no implementation started).
