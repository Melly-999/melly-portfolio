/**
 * Social identity data — the single source for the dock (§5), the footer and
 * the Systems Index `links/` entries.
 *
 * GitHub and LinkedIn are owner-confirmed. X is deliberately pending:
 * NEEDS_USER_CONFIRMATION_X_URL — do not invent a handle. Adding it later is a
 * one-line data change (set `href` and `enabled: true`) with zero layout reflow.
 */
export type SocialId = "github" | "linkedin" | "x";

export interface SocialLink {
  id: SocialId;
  /** Exact accessible name. */
  label: string;
  /** Short mono label shown under the glyph. */
  short: string;
  handle: string | null;
  href: string | null;
  enabled: boolean;
}

export const social: readonly SocialLink[] = [
  {
    id: "github",
    label: "GitHub — Mateusz Ozimkiewicz",
    short: "GitHub",
    handle: "Melly-999",
    href: "https://github.com/Melly-999",
    enabled: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn — Mateusz Ozimkiewicz",
    short: "LinkedIn",
    handle: "mateusz-ozimkiewicz-335b213bb",
    href: "https://www.linkedin.com/in/mateusz-ozimkiewicz-335b213bb/",
    enabled: true,
  },
  {
    id: "x",
    label: "X — Mateusz Ozimkiewicz",
    short: "X",
    handle: null,
    href: null,
    enabled: false,
  },
];

/** Canonical public source for the flagship. Verified public. */
export const YUZUKI_SOURCE_HREF = "https://github.com/Melly-999/yuzuki-desktop";

/**
 * SOURCE_PUBLICATION_STATUS: PUBLIC. Flip to `false` only if a URL check fails —
 * the case-study CTA then falls back to a disabled, non-link variant. The normal,
 * expected state is `true` (active "View source").
 */
export const YUZUKI_SOURCE_PUBLIC = true;
