# Project Positioning 001

**Task:** MELLY-PORTFOLIO-HUB-SPEC-001
**Purpose:** Define how each project is framed for recruiters and developers, and how the three projects connect into one story.

---

## 1. The one-line identity

> **Mateusz Ozimkiewicz** — Junior Full-Stack Developer | React · TypeScript · FastAPI · AI Tools

AI tools are the **competitive advantage**, not the identity. The identity is
"full-stack developer who ships"; AI is the multiplier that lets a junior
developer operate with unusual breadth — and the portfolio must show the
engineering discipline that keeps that breadth safe.

## 2. The connecting story (the "red thread")

All three projects are chapters of one system:

1. **MellyTrade** — the *product*: a domain application (trading terminal) built with hard safety constraints.
2. **MellyCore AIOS** — the *platform*: the command center and context system that coordinates AI agents and knowledge.
3. **AI Second Brain / Agent Workspace** — the *process*: the personal workflow (knowledge base + agent orchestration) that built the other two.

Narrative for the site: *"I don't just use AI to autocomplete code. I built a
workflow (Second Brain), a platform (AIOS), and a product (MellyTrade) — each
layer feeding the next, each designed safety-first."*

This ordering also answers the recruiter's implicit question — "can a junior
really have built all this?" — by showing *how*: the workflow is the
force-multiplier, and it is documented, not hand-waved.

## 3. Per-project positioning

### 3.1 MellyTrade — "Safe AI trading terminal"

| Audience | Message |
|---|---|
| Recruiter | "A full-stack trading terminal (FastAPI + React + TypeScript, packaged as Tauri desktop app and PWA) built as a personal project with bank-grade caution: read-only, dry-run, no real orders." |
| Developer | "Risk-first architecture: the interesting problem wasn't fetching prices — it was designing a system where the unsafe path *doesn't exist*. No broker execution layer, no Buy/Sell controls, dry-run and read-only enforced at config and code level, max risk capped at 1%." |

**Lead with:** safety posture as an architectural decision, not a disclaimer.
**Proof points:** config flags (`autotrade=false`, `dry_run=true`, `read_only=true`, `live_orders_blocked=true`), separation of signal generation from execution (which is intentionally absent), test suite, CI.
**Never say:** "production trading system", "profitable", any performance/P&L claim, anything implying live money.

### 3.2 MellyCore AIOS — "AI command center"

| Audience | Message |
|---|---|
| Recruiter | "An AI command center that keeps projects, context, and agents organized — with a cinematic showcase route (`/aios`) that demonstrates frontend craft." |
| Developer | "A Living Context Graph: knowledge-graph-backed context that survives across agent sessions, with explicit agent handoff and a safety-first architecture (agents propose, humans approve)." |

**Lead with:** the Living Context Graph / agent handoff concept — it is the most distinctive engineering idea in the portfolio.
**Proof points:** the `/aios` cinematic route (visual craft), graph/context data model, handoff protocol docs.
**Never say:** "autonomous", "AGI-adjacent", anything implying agents act without review.

### 3.3 AI Second Brain / Agent Workspace — "The workflow that builds the rest"

| Audience | Message |
|---|---|
| Recruiter | "A documented personal system: an Obsidian-style knowledge base plus a repeatable workflow across ChatGPT, Claude Code, and Codex, with ClickUp/GitHub task orchestration." |
| Developer | "WAT pattern in practice — Workflows define tasks, Agents reason, Tools execute deterministically. Includes an optional local gateway concept (OmniRoute) for routing model traffic. This is process-as-code: the workflow itself is versioned and improvable." |

**Lead with:** this is *why* a junior developer can credibly ship the other two projects.
**Proof points:** workflow docs, task orchestration examples, before/after of how a feature travels from idea → task → agent session → reviewed PR.
**Never say:** "fully automated development", or claims that AI wrote everything (undermines credibility) — the honest framing is *AI-assisted, human-reviewed*.

## 4. Skill matrix the portfolio must evidence

| Skill | Evidenced by |
|---|---|
| React + TypeScript | MellyTrade UI, `/aios` showcase, portfolio site itself |
| FastAPI / Python | MellyTrade backend, services and schedulers |
| Desktop/PWA packaging | Tauri build + PWA of MellyTrade |
| System design | AIOS context graph, agent handoff, safety architecture |
| Engineering discipline | Dry-run/read-only posture, tests, CI, docs-first specs (this folder) |
| AI-tool fluency | Second Brain workflow, agent orchestration, OmniRoute concept |

## 5. Tone rules

- Confident, specific, modest about seniority: "junior developer" is stated, not hidden — the work speaks.
- Every claim traceable to a repo, doc, or screenshot.
- Prefer "designed / built / documented" verbs over "revolutionized / disrupted".
- English site copy; Polish CV variant can be linked later if needed.
