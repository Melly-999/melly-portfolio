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
