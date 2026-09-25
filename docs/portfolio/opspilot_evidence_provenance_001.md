# OpsPilot visual evidence provenance — 001

Provenance record for the OpsPilot screenshots served from
`public/assets/opspilot/`. Every asset listed here was rendered from a fresh
production build of the OpsPilot frontend at the source head below. No asset
in this set is a mockup, an upscale, or a reuse of an earlier capture.

## Source

| Field | Value |
| --- | --- |
| `SOURCE_REPOSITORY` | `Melly-999/opspilot` |
| `SOURCE_BRANCH` | `feat/opspilot-dark-visual-refresh-001` |
| `SOURCE_HEAD` | `02802269017bf9856b01376f84afd69483e77a13` |
| Frontend | `frontend/` — React 18 + TypeScript 5.5 + Vite 5.4, fixture adapter |
| Build | `npm run typecheck` and `npm run build` both passed; `dist/` served locally |
| Theme | OLED-dark visual system (`color-scheme: dark`, `--paper: #05070b`) |

## Capture conditions

- Chromium (Playwright), `deviceScaleFactor: 1`, `colorScheme: "dark"`.
- Served from the production `dist/` bundle over loopback only.
- Zero outbound requests left the loopback origin during capture; the demo has
  no backend, no provider, and no network dependency.
- Zero console errors and zero page errors across every captured route.
- Each capture waited for `networkidle` and `document.fonts.ready`, so no
  loading skeleton or unstyled text is present in any frame.
- Tall frames were captured by growing the viewport to the document height
  rather than by stitching, so no sticky element is duplicated or misplaced.

## Assets

| Asset | Route | State | Viewport / capture | Dimensions | SHA-256 |
| --- | --- | --- | --- | --- | --- |
| `01-opspilot-overview-1440x900.png` | `/` | Overview, loaded (fixture-backed) | 1440x900 viewport | 1440x900 | `111e6e52eef5c03e6d2ff319db861e059bd4f2f7c022607c2898e42afd41e498` |
| `02-opspilot-lead-queue-1440x900.png` | `/queue` | Lead queue, loaded (13 fixture leads) | 1440x900 viewport | 1440x900 | `e02838d6caf56f257bbcece127fa71fc8a3427c30f65d6600e9c7bf72efb39fa` |
| `03-opspilot-acme-dossier-1440-full.png` | `/leads/acme-robotics` | AWAITING_APPROVAL (full dossier) | 1440 wide, full document height | 1440x1913 | `fb18a3f0ec05479c44c143a8f022e111fb4d7f8118453c3fc94372ed2528269a` |
| `04-opspilot-simulated-execution-1440x900.png` | `/leads/acme-robotics` | APPROVED -> SUCCEEDED (bounded frame on execution state) | 1440x900 viewport | 1440x900 | `7b4b35c05a43cc33f1ca9d85c7971bdb39d390710c32eeb1c1e884716be89e99` |
| `05-opspilot-mobile-queue-390x844.png` | `/queue` | Lead queue, loaded | 390x844 viewport | 390x844 | `716449ba45d0a958d5294277db82adab31de861d6f530a2a57b17b10bf7e19ad` |
| `demo-flow/01-awaiting-approval.png` | `/leads/acme-robotics` | AWAITING_APPROVAL (approval + execution sections) | clipped region, 1440 wide capture | 906x357 | `b663318afe7f53e2cc77b838ab555f56f523bbdf846166356f30f7d8b08e09cf` |
| `demo-flow/02-approved-ready-to-simulate.png` | `/leads/acme-robotics` | APPROVED, execution armed PENDING | clipped region, 1440 wide capture | 906x382 | `dfeeb8cb59da786a6ffeb8c09a010f9c00d17a9cfc4f2aacc36a8bad39fefb59` |
| `demo-flow/03-succeeded-with-audit.png` | `/leads/acme-robotics` | SUCCEEDED with audit timeline | clipped region, 1440 wide capture | 906x890 | `58e69b3f368a2891b20c7055ffe7fb476d9b9cca3d2eb1aa191dd27750b0ba93` |

## Truth labels present in each asset

| Asset | Visible truth labels |
| --- | --- |
| `01-opspilot-overview-1440x900.png` | DEMO DATA / FIXTURE-BACKED / SIMULATED / NO LIVE OUTBOUND (nav rail) |
| `02-opspilot-lead-queue-1440x900.png` | DEMO DATA / FIXTURE-BACKED / SIMULATED / NO LIVE OUTBOUND (nav rail) |
| `03-opspilot-acme-dossier-1440-full.png` | DEMO DATA / FIXTURE-BACKED / SIMULATED / NO LIVE OUTBOUND (nav rail); "Demo decision only - no message is sent" |
| `04-opspilot-simulated-execution-1440x900.png` | DEMO DATA / FIXTURE-BACKED / SIMULATED / NO LIVE OUTBOUND (nav rail); SIMULATED badge beside SUCCEEDED |
| `05-opspilot-mobile-queue-390x844.png` | DEMO DATA / FIXTURE-BACKED / SIMULATED / NO LIVE OUTBOUND (header banner) |
| `demo-flow/01-awaiting-approval.png` | "Demo decision only - no message is sent and no real approval system is called." |
| `demo-flow/02-approved-ready-to-simulate.png` | SIMULATED badge; "Simulated execution only - no outbound email is ever sent by this frontend." |
| `demo-flow/03-succeeded-with-audit.png` | SIMULATED badge beside SUCCEEDED; audit entry "(simulated, no message sent)" |

## Boundary this evidence does not cross

These captures show a deterministic, fixture-backed frontend demo. They do not
show, and must not be described as showing, a production deployment, customer
traffic, a production PostgreSQL instance, real outbound delivery, provider
activation, or customer data. The approval and execution controls mutate an
in-memory fixture projection only.

The separate PostgreSQL 16.15 acceptance referenced in the case study is a
repository-level technical acceptance against a disposable real instance. It is
not part of this visual evidence set and is not a deployment claim.
