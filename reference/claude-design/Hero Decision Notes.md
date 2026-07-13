# Hero decision note — Variant 1a (Terminal First)

## Why 1a was selected
- Strongest recruiter readability: role, headline and CTAs are visible immediately, with the Command Core kept as quiet atmosphere instead of a competing focal point.
- The terminal is the primary technical proof element, front and center, without turning the page into a gaming dashboard.
- Shortest, calmest first viewport — the full hero fits comfortably at 1440 × 900.

## What was borrowed from 1c
- A subtle radial amber glow behind the terminal card.
- Slightly deeper card shadow and a light backdrop blur on the terminal for depth.
- Nothing else — no full-bleed Command Core, no floor, no particles.

## What was intentionally rejected
- 1b's split command-center layout (demoted the terminal, produced a ~1000px hero).
- 1c's full cinematic composition (Command Core dominated the copy; too much glow).
- Fake live terminal output, timestamps, build numbers, test counts, deployment statuses.
- A "Download CV" CTA — no approved CV file exists yet (Contact offers "Request full CV" via email instead; no placeholder LinkedIn card).

## Honesty cleanup (final pass)
- Removed the unverified `melly.dev/aios` domain from the AIOS case study → "Portfolio preview · /projects/aios".
- Replaced the green pulsing "orchestrating" status on the AIOS panel with a static amber **DOCS-FIRST PROTOTYPE** label.
- Homepage + AIOS copy now say "docs-first prototype" / "static architecture model" instead of implying a live orchestration platform.

## Positioning (applied everywhere)
Mateusz Ozimkiewicz · Full-Stack Developer · React · TypeScript · FastAPI · AI Tools.
All public "Junior", "junior/mid", "mid-level" and "aspiring" wording removed from index, About, Contact, SiteNav and the Hero Explorations board.

## Astro + plain-CSS implementation notes
- One static Astro page (`src/pages/index.astro`); hero is plain HTML — no client-side JS required except the optional mobile-menu toggle (a ~10-line script or a checkbox pattern).
- Fonts: system sans-serif stack for headings/body (`ui-sans-serif, system-ui, -apple-system, "Segoe UI", Arial`). Monospace via a local stack (`ui-monospace, "JetBrains Mono", SFMono-Regular, Menlo, monospace`) — JetBrains Mono self-hosted or omitted; **no Google Fonts request needed**.
- Mobile nav: `[MO] Mateusz … [Menu]` bar with a toggled panel (Home / Projects / About / Contact / GitHub); ≥44px tap targets; no horizontal scrolling.
- Layout: CSS grid (`repeat(auto-fit, minmax(330px, 1fr))`) collapses the hero to a single column at 390px with identity → CTAs → terminal ordering; Command Core stays as a dimmed absolute background.

## Implementable with plain HTML/CSS/SVG (no JS, no images)
- **HTML**: nav, hero copy, CTAs, terminal card (plain text in a bordered card), availability pill, footer.
- **CSS gradients**: obsidian background washes, left-to-right hero scrim, amber CTA fill, terminal glow (radial-gradient), bottom fade.
- **CSS transforms**: hover lift on project cards, Command Core ring rotation offsets, mobile menu transitions.
- **Inline SVG**: Command Core — obsidian core, one continuous amber safety ring, two cyan context rings, restrained abstract nodes (pure decorative `<svg>`, `aria-hidden`, no text).
- **Optional CSS animation**: single blinking cursor (`@keyframes`), disabled under `prefers-reduced-motion`.

## Final design-polish pass (TASK-004)
- **Mobile hero (390×844) tightened**: heading min size 34→29px; all vertical margins converted to fluid `clamp()` minima; availability pill moved from above the eyebrow to its spec position (role → heading → copy → tech line → availability → CTAs → terminal); terminal now begins ~460px from the top so `portfolio.status` + most of `safety.check` are visible in the first viewport.
- **Command Core mobile restraint**: on <760px the core swaps to a small (0.6×), low-opacity (0.28) top-right fragment with the outer cyan ring hidden and a radial mask feathering it out; it never sits behind copy, CTAs or the terminal. Desktop keeps the approved 1a composition.
- **Typography**: system sans-serif is now the body/headings face on every page (previously subpages were fully monospace); JetBrains Mono is reserved for terminal content, eyebrows, labels, chips, badges and technical microcopy.
- **Accessibility**: decorative Command Core / PlanningSurface wrappers are `aria-hidden`; the hero terminal has a `role="group"` + accessible description stating it is static and illustrative; visible `:focus-visible` outlines on links/buttons site-wide; mobile menu button has `aria-expanded` + `aria-controls`, closes on Escape and on link click; all animation is disabled under `prefers-reduced-motion`.
- **MellyTrade honesty tightening**: the greyed "Place order" mock control was removed (replaced with "No trade controls — broker execution blocked by design"); "buy or sell" / "PnL" tokens rephrased into token-free negations ("never a trade recommendation", "no fabricated performance figures").
- **MellyCore AIOS**: panel labels now read "Context graph · static model" and "Agent handoff · illustrative flow"; the command-center feature copy is explicitly a static architecture model.
- **Screenshot**: `screenshots/home-mobile.png` re-captured at a true 390 × 844 with the polished hero.

### Astro notes added by this pass
- The responsive nav/hero breakpoint should be a CSS `@media (max-width: 759px)` query in Astro — no ResizeObserver needed in production (the prototype uses one only because Design Components style inline).
- Mobile menu in Astro: `<button aria-expanded aria-controls>` + Escape-key close + link-click close + visible focus ring, exactly as prototyped.
- The Command Core mobile variant = same inline SVG, scaled ~0.6, `opacity: .28`, outer ring hidden via a media query, masked with `mask-image: radial-gradient(...)`.

## Honesty confirmation
No production code, deployment, or live claims were created. The terminal is a static illustrative card. MellyTrade remains read-only / dry-run / advisory / no broker execution. MellyCore AIOS remains a docs-first prototype and static architecture showcase. No fake metrics, clients, awards, testimonials, monitoring, or trading results anywhere.
