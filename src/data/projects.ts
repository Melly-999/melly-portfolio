import type { StatusVariant } from "./claims";
import { YUZUKI_SOURCE_HREF } from "./social";

/**
 * Project registry. Order is the hierarchy and is identical at every breakpoint:
 * Yuzuki (flagship) → Klaus (major) → MellyCore → RAG Document Assistant →
 * MellyTrade → supporting work. Prev/next sequencing reads this order.
 *
 * Truth notes:
 *  - Klaus: owner-defined role and architecture only. No repository or run
 *    evidence was located, so it is CONCEPT — no implemented capability is claimed.
 *  - RAG Document Assistant and MellyTrade: interface concept renders used as
 *    portfolio/case-study visuals, not evidence of a live deployment, production
 *    scale or trading system (assets pack ASSET_MANIFEST.md).
 *  - MellyCore: partial; its screenshot is a real static-preview snapshot.
 */
export interface ProjectChip {
  variant: StatusVariant;
  label?: string;
}

/**
 * Showcase copy. `problem` is the business problem the project answers and
 * `matters` is the one consequence that makes it worth commissioning. Both are
 * held here so the home page and /projects cannot drift apart, and both stay
 * inside the status each project is allowed to claim above.
 */

export const projects = [
  {
    slug: "yuzuki",
    weight: "flagship",
    variant: "product",
    badge: "Flagship",
    title: "Yuzuki Desktop",
    tagline: "Local-first AI desktop with fail-closed private mode",
    description:
      "A complete AI product, not a UI mockup: a Tauri desktop application with a live-verified local chat path, seven named routing modes, and Hermes Agent integration. Public source only.",
    problem:
      "Teams want AI inside their daily work but cannot send client files, contracts or internal notes to somebody else's API.",
    matters:
      "In private mode the conversation never leaves the machine — and if the local runtime cannot serve a turn, Yuzuki stops instead of quietly falling back to a cloud model.",
    stack: "Tauri · React · TypeScript · Python · Hermes Agent · Ollama",
    href: "/projects/yuzuki",
    sourceHref: YUZUKI_SOURCE_HREF,
    image: "/assets/yuzuki/01-home-desktop-1440.png",
    imageAlt:
      "Yuzuki desktop application showing the session rail, an empty conversation pane, and the context panel.",
    imageCaption:
      "Yuzuki desktop workspace — synthetic public fixture, empty state.",
    chips: [
      { variant: "verified", label: "PRIVATE · LIVE-VERIFIED" },
      { variant: "implemented", label: "6 MODES · IMPLEMENTED · NOT LIVE-VERIFIED" },
      { variant: "source" },
    ] satisfies ProjectChip[],
  },
  {
    slug: "klaus",
    weight: "major",
    variant: "platform",
    badge: "Agent",
    title: "Klaus",
    tagline: "AI orchestration and coding agent",
    description:
      "A personal AI engineering operator that coordinates agents and models, carries project context, and routes work through implementation, review and validation.",
    problem:
      "Hand one model a whole feature and it loses the thread: context runs out, nothing reviews the result, and nobody can say afterwards what was actually checked.",
    matters:
      "Work is split by role and gated, so a step that cannot be verified is reported as unverified instead of assumed to pass.",
    stack: "Orchestration · Coding agent · Project context · Review gates",
    href: "/projects/klaus",
    chips: [
      { variant: "concept", label: "CONCEPT · OWNER-DEFINED ARCHITECTURE" },
    ] satisfies ProjectChip[],
  },
  {
    slug: "aios",
    weight: "standard",
    variant: "platform",
    badge: "Platform",
    title: "MellyCore AIOS",
    tagline: "Command-center architecture for shared context and agent coordination",
    description:
      "A supervised, static-preview command center: shared context, a repository-derived topology, and explicit safety boundaries.",
    problem:
      "Once several agents share one codebase, nobody can see what context they hold or what they are about to do next.",
    matters:
      "Every step is gated before anything can run, and execution stays locked in this build — there are no live providers behind it.",
    stack: "Context Graph · Agent Handoffs · Safety Contracts · Static preview",
    href: "/projects/aios",
    chips: [
      { variant: "partial", label: "PARTIAL · DOCS + STATIC SLICE" },
    ] satisfies ProjectChip[],
  },
  {
    slug: "rag-assistant",
    weight: "standard",
    variant: "product",
    badge: "RAG system",
    title: "RAG Document Assistant",
    tagline: "RAG-powered document search with source-grounded answers",
    description:
      "Document intelligence for knowledge bases, procedures and support documentation: questions answered from a company's own documents, each answer shown with its sources.",
    problem:
      "Support and operations staff answer the same questions over and over by hunting through procedures, contracts and handbooks.",
    matters:
      "Each answer arrives with the document and page it came from, so a reader can check the claim instead of trusting it.",
    stack: "Retrieval · Embeddings · Indexing · Citations",
    href: "/projects/rag-assistant",
    chips: [
      { variant: "concept", label: "CONCEPT INTERFACE" },
    ] satisfies ProjectChip[],
  },
  {
    slug: "mellytrade",
    weight: "standard",
    variant: "product",
    badge: "Analytics",
    title: "MellyTrade",
    tagline: "Data-dense analytics and monitoring dashboard for signals, risk and system health",
    description:
      "Complex operational data — signals, risk, alerts and pipeline health — made readable in one view. A dashboard case study; read-only, dry-run.",
    problem:
      "Dense operational data defeats most dashboards: signals, risk, alerts and pipeline health end up on five screens nobody reads together.",
    matters:
      "One view a person can actually scan, and read-only by design — there is no broker execution behind it.",
    stack: "React · TypeScript · FastAPI · Analytics UI",
    href: "/projects/mellytrade",
    chips: [
      { variant: "concept", label: "CONCEPT INTERFACE · SAMPLE VALUES" },
    ] satisfies ProjectChip[],
  },
  {
    slug: "workspace",
    weight: "supporting",
    variant: "process",
    badge: "Process",
    title: "AI Agent Workspace",
    tagline: "Documented multi-agent development workflow",
    description:
      "A documented workflow connecting ChatGPT, Claude Code, Codex, Obsidian and GitHub through reusable context, task contracts and review gates.",
    stack: "Claude Code · Codex · Obsidian · GitHub · Documentation",
    href: "/projects/workspace",
    chips: [] satisfies ProjectChip[],
  },
] as const;

export type ProjectSlug = (typeof projects)[number]["slug"];

/** Concepts: honestly labelled, no route, no screenshot, no metrics. */
export const concepts = [
  {
    slug: "automation",
    title: "AI Automation / OpsPilot",
    tagline: "Operational signals to a human decision",
    statement: "A concept for a workflow I can build — not a shipped project.",
    chip: { variant: "concept" } satisfies ProjectChip,
  },
] as const;
