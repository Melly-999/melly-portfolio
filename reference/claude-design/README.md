# Claude Design Reference Package

## Source

This directory preserves the export from **Claude Design** (the prototype
package `Mateusz's Portfolio Prototype.zip`), used as the approved visual
reference for the Melly Portfolio site.

## Preservation policy

Files here are preserved **without semantic modification** — same names,
same content, same structure as exported. This is a source-preservation
step, not an implementation step.

## About `.dc.html` files

The `*.dc.html` files use Claude Design–specific custom elements, including:

- `x-dc`
- `dc-import`
- `sc-if`

These are **design references**, not production HTML. They will not render
correctly outside the Claude Design environment and must not be deployed
directly.

## Not for direct deployment

Nothing in this directory should be shipped as-is. The production
implementation (tracked as task **PF-010** and beyond) will reproduce the
approved design in the chosen production framework, following the copy and
structure specs in [`../../docs/portfolio/`](../../docs/portfolio/).

## Contents

- `index.dc.html`, `SiteNav.dc.html`, `Projects.dc.html` — navigation and hub pages
- `MellyTrade.dc.html`, `MellyCoreAIOS.dc.html`, `AIWorkspace.dc.html` — project case study pages
- `About.dc.html`, `Contact.dc.html` — supporting pages
- `DesignTokens.dc.html` — design token reference
- `CommandCore.dc.html`, `PlanningSurface.dc.html` — additional prototype surfaces included in the export
- `support.js` — prototype support script
- `screenshots/home-mobile.png` — prototype screenshot
- `_ds/` — design-system bundle (tokens, styles, manifest) referenced by the prototype
- `.thumbnail` — export thumbnail image (WebP)

## Safety

No real credentials or private data should ever be placed in this
directory. The scan performed at bootstrap time found none in the imported
files.
