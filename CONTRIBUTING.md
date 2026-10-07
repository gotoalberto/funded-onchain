# Working on the mockups

## Where things live

- Screens: `src/pages/<folder>/<screen>.html`, one final HTML fragment per screen. Each holds its own `<header class="app-header">`, `<main>`, a page `<style>` block and a placeholder `<nav class="mockbar">`. The page key is the path without `.html`, for example `f03-competing/01-home-competing`, and the route is `#/<key>`.
- `DATAURI_xxxxxxxxxx` tokens in a page are images listed in `src/datauris.json`. Leave them as they are.
- The story: `src/stages.json` lists the eight flows in date order. Each flow has a name, dates, a description and its screens. Each screen has a page key, a screen name, a type (`account`, `trade`, `lb`, `funded`, `payouts`, `stats`, `money`, `score`, `referrals`, `rules`, `landing`, `modal`) and the one question it answers. A screen can live in any folder; its flow comes from `stages.json`.
- Titles: a story screen's title, mockbar label and index entry come from its name in `src/stages.json`. `src/titles.json` lists every page key with a fallback title, used for pages outside the story. The build reads pages in that order, so a new page must be added there too.
- Shared styles: `src/template.html`, the single-page shell. Page-specific styles stay in the page's own `<style>` block.
- Product rules every screen follows: `brief/`. `STORY_FACTS.md` is the truth every screen must agree with; `FINAL_PASS.md`, `ACCOUNT_BASE.md` and `DAILY_PNL.md` add the later decisions on top of `BRIEF.md`.

## What the build does

`build.mjs` writes `dist/index.html` and copies it to `funded-onchain-mockups.html`. For every page it:

- Rebuilds the main nav (Account, Trade, Leaderboard, How it works, Referrals), sets the current tab from the screen type and handles the signed-out pages. Do not edit the `<nav class="nav-track">` block by hand.
- Normalises the header chip copy to "Qualification".
- Removes designer notes (`mock-note`, `mock-tag`).
- Makes breadcrumbs go back to wherever the trader came from.
- Points in-page links to the same flow's version of each page type, with fallbacks to a related type and then to the nearest other flow.
- Regenerates the mockbar (previous, next, position and the Next flow button), the top index and the eight flow indexes.
- Inlines the images and writes all pages into the template as one JSON blob.

## Run it locally

```
npm ci
npm run build   # writes dist/index.html and funded-onchain-mockups.html
npm test        # structure and copy checks
```

Open `dist/index.html` in a browser. The tests check that every story screen is built, every `#/` link resolves, every screen has exactly one mockbar, the top index links all eight flows and no visible copy uses a banned word or dash.

## Publishing

Every push and pull request runs `.github/workflows/build.yml`: it builds the site, runs the tests and attaches `funded-onchain-mockups.html` plus `dist/` to the run. Every push to `main` runs `.github/workflows/pages.yml`, which deploys `dist/` to https://gotoalberto.github.io/funded-onchain/.

GitHub Pages must be set to **Source: GitHub Actions** in the repository settings (Settings, Pages, Build and deployment) for the deploy to work.

Do not commit `dist/` or `funded-onchain-mockups.html`; they are generated. Prefer a branch and a pull request for changes, so the build runs before they reach `main`. When flows change in `src/stages.json`, update the flow table in README.md to match.

## Conventions

- Screens are in English. No em or en dashes in visible copy.
- One question, one leading figure and one primary action per screen.
- Never mention Bitso or Hyperliquid, and never link off the site.
- Payout, never claim. Qualification, never epoch or season. Score to beat, never the bar.
