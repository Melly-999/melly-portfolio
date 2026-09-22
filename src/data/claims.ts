import { cloudModes, privateMode } from "./routing";

/**
 * Status vocabulary + claim registry — the single data source for chips, the
 * evidence trace rail and the colophon record (handoff §11.3, §30).
 *
 * Every claim carries a `source`. A stamp with no cited source does not ship.
 */
export type StatusVariant =
  | "verified"
  | "validated"
  | "implemented"
  | "prototype"
  | "concept"
  | "development"
  | "shipped"
  | "source"
  | "partial"
  | "planned";

/** Default chip text per variant. Text + glyph + colour — never colour alone. */
export const statusText: Record<StatusVariant, string> = {
  verified: "LIVE-VERIFIED",
  validated: "VALIDATED",
  implemented: "IMPL · NOT LIVE-VERIFIED",
  prototype: "PROTOTYPE / FIXTURE DATA",
  concept: "CONCEPT · NOT YET BUILT",
  development: "IN DEVELOPMENT",
  shipped: "SHIPPED",
  source: "SOURCE ONLY",
  partial: "ACTIVE DEVELOPMENT",
  planned: "PLANNED",
};

export interface Claim {
  id: string;
  label: string;
  status: StatusVariant;
  /** Where the claim is made. Pages resolve `href` for the colophon record. */
  href: string;
  /** Section id that stamps this claim, per page. */
  sections: { home?: string; yuzuki?: string };
  /** Evidence source (not rendered; required so no stamp is uncited). */
  source: string;
}

const PACK = "PORTFOLIO_YUZUKI_INTEGRATION_PACK.md — Evidence Matrix";
const PROOF = "PROJECT_PROOF_MATRIX.md";

export const claims: readonly Claim[] = [
  {
    id: "local-chat",
    label: "Local chat path, end to end",
    status: "verified",
    href: "/projects/yuzuki#local-first",
    sections: { yuzuki: "local-first" },
    source: `${PACK} — Local-first behavior; case study §02`,
  },
  {
    id: "private-fail-closed",
    label: "PRIVATE fail-closed provider check",
    status: privateMode.status,
    href: "/projects/yuzuki#private",
    sections: { home: "systems", yuzuki: "private" },
    source: `${PACK} — PRIVATE fail-closed behavior`,
  },
  {
    id: "cloud-modes",
    label: "Six cloud routing modes",
    status: cloudModes.every((m) => m.status === "implemented")
      ? "implemented"
      : "verified",
    href: "/projects/yuzuki#routing",
    sections: { home: "systems", yuzuki: "routing" },
    source: `${PACK} — Routing modes (7 names)`,
  },
  {
    id: "advanced-projection",
    label: "ADVANCED read-only projection",
    status: "implemented",
    href: "/projects/yuzuki#routing",
    sections: { yuzuki: "routing" },
    source: `${PACK} — Routing Presentation, ADVANCED`,
  },
  {
    id: "constellation",
    label: "Knowledge Constellation",
    status: "prototype",
    href: "/projects/yuzuki#constellation",
    sections: { yuzuki: "constellation" },
    source: `${PACK} — Knowledge Constellation`,
  },
  {
    id: "lifecycle",
    label: "Lifecycle / Job Object process tree",
    status: "shipped",
    href: "/projects/yuzuki#lifecycle",
    sections: { yuzuki: "lifecycle" },
    source: `${PACK} — Lifecycle/safety engineering`,
  },
  {
    id: "validation",
    label: "Validation suites",
    status: "validated",
    href: "/projects/yuzuki#validation",
    sections: { yuzuki: "validation" },
    source: `${PACK} — Public CI; Validation Evidence`,
  },
  {
    id: "distribution",
    label: "Public distribution",
    status: "source",
    href: "/projects/yuzuki#status",
    sections: { home: "systems", yuzuki: "status" },
    source: `${PACK} — Public source-only distribution`,
  },
  {
    id: "mellycore-implemented",
    label: "MellyCore implemented layers",
    status: "partial",
    href: "/#mellycore",
    sections: { home: "mellycore" },
    source: `${PROOF} §3`,
  },
  {
    id: "mellycore-observatory",
    label: "MellyCore Observatory",
    status: "planned",
    href: "/#mellycore",
    sections: { home: "mellycore" },
    source: `${PROOF} §3`,
  },
  {
    id: "klaus",
    label: "Klaus Dev Orchestrator",
    status: "development",
    href: "/projects/klaus",
    sections: {},
    source: "Owner-defined role and architecture; no repository evidence located",
  },
  {
    id: "rag-assistant",
    label: "RAG Assistant interface",
    status: "development",
    href: "/projects/rag-assistant",
    sections: {},
    source: "Portfolio concept render (assets pack ASSET_MANIFEST.md truthfulness note)",
  },
  {
    id: "mellytrade-interface",
    label: "MellyTrade analytics interface",
    status: "concept",
    href: "/projects/mellytrade",
    sections: {},
    source: "Portfolio concept render (assets pack ASSET_MANIFEST.md truthfulness note)",
  },
  {
    id: "opspilot",
    label: "OpsPilot AI",
    status: "development",
    href: "/#automation",
    sections: { home: "automation" },
    source: `${PROOF} §4`,
  },
];

export type TracePage = "home" | "yuzuki";

/** Claims stamped on a page, in registry order. */
export function claimsFor(page: TracePage): Claim[] {
  return claims.filter((c) => c.sections[page]);
}
