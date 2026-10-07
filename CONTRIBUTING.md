# Working on the mockups

## Where things live

- Screens: `src/pages/<flow>/<screen>.html`. Each file starts with a `<!--page {...} -->` header (which nav item is active, which header variant, the cycle chip text) followed by the page body.
- Flows, screen order and the one question each screen answers: `src/manifest.json`. Add or rename screens here first.
- Shared styles and components: `src/kit/funded.css` (onchain.cc tokens, glass panels, meters, ladder, timeline, tags).
- Product rules every screen must follow: `BRIEF.md`. Later sections win over earlier ones.
- Generators for the denser screens (terminal, leaderboard, money): `tools/`.

## Run it locally

```
npm install
node build.mjs      # writes dist/
node bundle.mjs     # writes funded-onchain-mockups.html (every screen in one file)
npm test            # structure tests; the render test needs a local Chrome
```

Open `dist/index.html` in a browser.

## Sharing a version

The repository is private, so there is no public site. Every push and pull request runs `.github/workflows/build.yml`: it builds the site, runs the structure tests and attaches `funded-onchain-mockups.html` (every screen in one file) plus `dist/` as a downloadable artifact of the run. Do not commit `dist/` or `docs/`; they are generated.

Prefer a branch and a pull request for larger changes, so the build runs on the PR before it reaches `main`.

## Conventions

- Screens are in English. No em or en dashes in visible copy.
- One question, one leading figure and one primary action per screen.
- Violet only for primary actions and the trader's own items; the Funded tag is gold, the Own tag neutral.
- Every screen links to at least one other screen of the same flow (the tests check it).
