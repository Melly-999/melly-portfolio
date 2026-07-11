# Case Study Structure 001

**Task:** MELLY-PORTFOLIO-HUB-SPEC-001
**Purpose:** One shared template for all three case studies so they read as a coherent series. Each case study is a markdown file rendered to `/projects/<slug>`.

---

## 1. Template (sections in order)

Every case study uses exactly these sections. Target length: 800–1,400 words + 3–6 images. Recruiters read sections 1–3; developers read 4–7.

### §1 Header block
- Title + one-line tagline
- Stack chips (max 6)
- Fact row: **Role** (Solo developer) · **Status** (honest: e.g. "Active personal project") · **Safety posture** (one line) · **Links** (repo / live / showcase, only if real)

### §2 TL;DR (recruiter layer)
3–4 sentences, plain language: what it is, what it's built with, what makes it notable. Must be understandable by a non-technical reader.

### §3 The problem
What itch this scratches, why existing tools didn't fit, and the explicit constraints accepted up front (safety rules, budget, solo scope).

### §4 Architecture & key decisions (developer layer)
- One simple diagram (SVG/static image — no interactive diagram library).
- 3–5 numbered decisions in the form: *context → options → choice → trade-off accepted*. This section carries the technical credibility; be specific.

### §5 The hard part
One section, one story: the single most difficult engineering problem and how it was solved (or worked around). Honest about dead ends.

### §6 Safety & honesty box (required, visually distinct)
A bordered callout stating exactly what the project does **not** do and why. This is a signature element across all case studies.

### §7 What I'd do next
2–4 realistic next steps. Signals judgment and roadmap thinking; no vaporware promises.

### §8 Footer nav
Previous/next case study links + contact CTA.

---

## 2. Per-project content plan

### 2.1 MellyTrade (`/projects/mellytrade`)

- **Tagline:** Safe AI trading terminal — dry-run by design.
- **§3 Problem:** wanted an AI-assisted market analysis terminal without the existential risk of automated money loss; constraint set chosen *before* code: `autotrade=false`, `dry_run=true`, `read_only=true`, `live_orders_blocked=true`, max risk ≤ 1%, no broker execution, no Buy/Sell/Execute controls.
- **§4 Decisions to feature:**
  1. FastAPI backend / React+TS frontend split, packaged as Tauri desktop + PWA from one codebase.
  2. Signal generation deliberately decoupled from (absent) execution — safety by architecture, not by if-statement.
  3. Config-enforced safety flags surfaced in the UI so posture is always visible.
  4. Paper/manual smoke checklist instead of pretending to have live validation.
- **§5 Hard part candidates:** keeping the safety invariants intact across desktop/PWA packaging, or the data-fetch → indicator → signal pipeline design. Pick one during writing.
- **§6 Safety box:** "MellyTrade never places orders. There is no execution path to any broker. All analysis is read-only and dry-run; no performance or profit claims are made."
- **Images:** terminal dashboard screenshot (demo data labeled as demo), architecture diagram, safety-flags UI close-up.

### 2.2 MellyCore AIOS (`/projects/aios`)

- **Tagline:** An AI command center with a living context graph.
- **§3 Problem:** agent sessions lose context; knowledge scattered across tools; needed one place where projects, context, and agents connect — with humans approving handoffs.
- **§4 Decisions to feature:**
  1. Living Context Graph as the core data model (knowledge graph, not folders).
  2. Explicit agent handoff protocol: context is packaged, transferred, and reviewed — not implicitly shared.
  3. Safety-first architecture: agents propose, human approves.
  4. Cinematic `/aios` showcase route as a deliberate frontend-craft exhibit, kept separate from the working UI.
- **§5 Hard part candidates:** modeling context so it stays useful across sessions, or performance/readability balance in the cinematic route.
- **§6 Safety box:** "AIOS agents do not act autonomously. Every handoff and every side-effectful action requires human review."
- **Special:** prominent secondary CTA `Open the /aios showcase` (links to the live cinematic route if/when deployed; omit the button until the link is real).
- **Images:** context graph visualization, handoff flow diagram, `/aios` showcase still.

### 2.3 AI Second Brain / Agent Workspace (`/projects/workspace`)

- **Tagline:** The documented workflow behind everything else.
- **§3 Problem:** solo developer bandwidth; the answer isn't "work more," it's a system: Obsidian-style knowledge base + task orchestration (ClickUp/GitHub) + agent sessions (ChatGPT, Claude Code, Codex) under the WAT pattern (Workflows → Agents → Tools).
- **§4 Decisions to feature:**
  1. WAT pattern: workflows define tasks, agents reason, tools execute deterministically.
  2. Knowledge base as source of truth; chat sessions are disposable, notes are not.
  3. Task round-trip: idea → ClickUp/GitHub task → agent session → reviewed PR → lesson logged back into the KB.
  4. OmniRoute as an *optional* local gateway concept for routing model traffic (concept stage — labeled as such).
- **§5 Hard part:** making the workflow repeatable instead of ad hoc — writing it down, versioning it, and actually following it.
- **§6 Safety box:** "AI output is never merged unreviewed. No secrets in prompts, repos, or logs. The human owns every decision that ships."
- **Images:** workflow diagram (idea→PR loop), knowledge-base screenshot (sanitized), WAT pattern diagram.

---

## 3. Writing rules

1. First person, past tense for what happened, present for what the system does.
2. Every technical claim must map to something in a repo or doc.
3. No jargon in §2–§3; full precision allowed in §4–§5.
4. All screenshots from real builds; demo data labeled.
5. The Safety & honesty box (§6) is mandatory and may not be softened.
