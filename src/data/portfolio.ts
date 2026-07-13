export type ProjectTone = "process" | "platform" | "product";

export interface PortfolioProject {
  number: string;
  layer: string;
  tone: ProjectTone;
  title: string;
  tagline: string;
  description: string;
  href: string;
  chips: readonly string[];
  visual: ProjectTone;
}

export const projects: readonly PortfolioProject[] = [
  {
    number: "01",
    layer: "Process",
    tone: "process",
    title: "AI Agent Workspace",
    tagline: "Documented multi-agent workflow",
    description:
      "A structured workflow connecting ChatGPT, Claude Code, Codex, Obsidian and GitHub through reusable context, task contracts and review gates.",
    href: "/projects/workspace",
    chips: ["ChatGPT", "Claude Code", "Codex", "Obsidian", "GitHub"],
    visual: "process",
  },
  {
    number: "02",
    layer: "Platform",
    tone: "platform",
    title: "MellyCore AIOS",
    tagline: "AI command center & context graph",
    description:
      "A docs-first prototype for context, agents and handoffs, presented as a static architecture model and portfolio showcase.",
    href: "/projects/aios",
    chips: ["Context graph", "Agent handoff", "React", "TypeScript"],
    visual: "platform",
  },
  {
    number: "03",
    layer: "Product",
    tone: "product",
    title: "MellyTrade",
    tagline: "Safe AI trading terminal",
    description:
      "A safety-first AI trading research dashboard. Read-only, dry-run and advisory, with broker execution blocked by design.",
    href: "/projects/mellytrade",
    chips: ["FastAPI", "React", "TypeScript", "Read-only", "Dry-run"],
    visual: "product",
  },
];

export const email = "mateusz.ozimkiewicz9@gmail.com";
export const githubProfile = "https://github.com/Melly-999";
