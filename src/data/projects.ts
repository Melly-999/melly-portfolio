export const projects = [
  {
    slug: "workspace",
    variant: "process",
    badge: "Process",
    title: "AI Agent Workspace",
    tagline: "Documented multi-agent development workflow",
    href: "/projects/workspace",
  },
  {
    slug: "aios",
    variant: "platform",
    badge: "Platform",
    title: "MellyCore AIOS",
    tagline: "Docs-first AI command center and context architecture prototype",
    href: "/projects/aios",
  },
  {
    slug: "mellytrade",
    variant: "product",
    badge: "Product",
    title: "MellyTrade",
    tagline: "Read-only, dry-run AI trading terminal case study",
    href: "/projects/mellytrade",
  },
] as const;

export type ProjectSlug = (typeof projects)[number]["slug"];
