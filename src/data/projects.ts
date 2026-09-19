import type { StatusVariant } from "./claims";
import { YUZUKI_SOURCE_HREF } from "./social";

/**
 * Project registry. Order is the hierarchy: Yuzuki (flagship) → MellyCore →
 * the rest. Order is identical at every breakpoint and never re-sorted by CSS.
 *
 * Only entries with a real route live here (prev/next sequencing reads this).
 * OpsPilot is a concept with no route, so it lives in `concepts` below.
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
      "A Tauri desktop application with a live-verified local chat path, seven named routing modes, and Hermes Agent integration. Public source only.",
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
    slug: "aios",
    weight: "standard",
    variant: "platform",
    badge: "Platform",
    title: "MellyCore AIOS",
    tagline: "Docs-first AI command center and context architecture prototype",
    description:
      "An architecture for agent handoffs, knowledge graphs and explicit safety contracts. Partly implemented; the full Observatory is planned.",
    stack: "Context Graph · Agent Handoffs · Safety Contracts · Product Architecture",
    href: "/projects/aios",
    chips: [
      { variant: "partial", label: "PARTIAL · DOCS + STATIC SLICE" },
    ] satisfies ProjectChip[],
  },
  {
    slug: "workspace",
    weight: "standard",
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
  {
    slug: "mellytrade",
    weight: "standard",
    variant: "product",
    badge: "Product",
    title: "MellyTrade",
    tagline: "Read-only, dry-run AI trading terminal case study",
    description:
      "A read-only, dry-run AI trading-terminal case study built with React, TypeScript and FastAPI, with broker execution blocked.",
    stack: "React · TypeScript · FastAPI · Tauri/PWA",
    href: "/projects/mellytrade",
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
