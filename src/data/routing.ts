/**
 * Yuzuki routing modes — the single source for the orbit, the list form and the
 * evidence trace, so a status can never drift between them (handoff §9).
 *
 * Truth (integration pack, Evidence Matrix + Routing Presentation):
 *  - PRIVATE is the only LIVE_VERIFIED mode: local only, no cloud fallback.
 *  - The other six are IMPLEMENTED_NOT_LIVE_VERIFIED: deterministic tests
 *    against a fake transport, disabled by default, never a live provider request.
 *  - ADVANCED is a read-only projection of models the Hermes runtime approved.
 * Nothing here is inferred from a mode's name.
 */
export type RoutingStatus = "verified" | "implemented";

export interface RoutingMode {
  name: string;
  status: RoutingStatus;
  /** Safe wording, verbatim from the integration pack. */
  copy: string;
  /** Extra clause chip, used only where a reader could misread the mode. */
  clause?: string;
  clauseCopy?: string;
}

export const routingModes: readonly RoutingMode[] = [
  {
    name: "PRIVATE",
    status: "verified",
    copy: "Conversation stays on device, fail-closed.",
  },
  {
    name: "SAVER",
    status: "implemented",
    copy: "Cost-aware routing (not live-verified).",
  },
  {
    name: "FAST",
    status: "implemented",
    copy: "Low-latency routing (not live-verified).",
  },
  {
    name: "SMART",
    status: "implemented",
    copy: "Balanced routing (not live-verified).",
  },
  {
    name: "DEEP",
    status: "implemented",
    copy: "Reasoning-oriented routing (not live-verified).",
  },
  {
    name: "CREATIVE",
    status: "implemented",
    copy: "Creative-task routing (not live-verified).",
  },
  {
    name: "ADVANCED",
    status: "implemented",
    copy: "Manual model selection from an approved list (not live-verified).",
    clause: "READ-ONLY PROJECTION",
    clauseCopy:
      "A read-only projection of models the Hermes runtime has already approved. Yuzuki does not invent, discover or activate models.",
  },
];

export const privateMode = routingModes[0];
export const cloudModes = routingModes.slice(1);
