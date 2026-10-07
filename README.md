# onchain.cc Funded, flow mockups

**Live:** https://gotoalberto.github.io/funded-onchain/

Navigable mockups of **onchain.cc Funded**. Traders compete with their own money in a 30-day qualification window. The best of them get a funded seat, trade our USDC and keep 80% of the profit. The mockups follow one trader, kestrel, from sign-up to a funded seat, a payout, a closed seat and back to competing. All figures are demo data.

## Flows

Eight flows in date order, 71 screens. Screens named "Variant" show other outcomes.

| # | Flow | Dates | What happens | Screens |
|---|---|---|---|---|
| 1 | Discover | Nov 6 | A visitor lands, sees real seats and real payouts, reads how it works and signs up. | 6 |
| 2 | Get on the board | Oct 20 | kestrel signs up on day one, adds $250, makes two trades and lands on the leaderboard. | 13 |
| 3 | Compete | Nov 6 | Day 18 of 30. kestrel holds a $25K seat today and is working on the last requirements. | 10 |
| 4 | Request a seat | Nov 18 to 19 | Scores freeze. kestrel requests a seat and gets funded. The other outcomes follow as variants. | 9 |
| 5 | Trade the seat | Nov 19 to 28 | kestrel trades 5,000 USDC with a $25,000 cap. The seat is up $923. | 8 |
| 6 | Get paid | Nov 28 to 30 | kestrel closes their positions, takes a $738 payout and keeps trading. | 6 |
| 7 | Pause and close | Dec 1 to 2 | A bad run: the daily pause, then the seat closes at its loss limit. The payout stays theirs. | 4 |
| 8 | Back to competing | Dec 2 to 18 | kestrel keeps their payout, competes again with their own money and requests a new seat. | 15 |

The flows, their screens and the order come from `src/stages.json`.

## Build and test

Requires Node 22 or later. There are no dependencies.

```
npm ci
npm run build   # writes dist/index.html and funded-onchain-mockups.html
npm test        # structure and copy checks
```

Open `dist/index.html` (or `funded-onchain-mockups.html`, the same file) in a browser. Every screen is in that one file, routed by hash, for example `#/f03-competing/01-home-competing`.

Every push and pull request builds the site, runs the tests and attaches the single HTML file to the Actions run. Every push to `main` also deploys `dist/` to GitHub Pages.

## Repository

| Path | What it is |
|---|---|
| `src/pages/` | One HTML fragment per screen, grouped in folders by page family. |
| `src/stages.json` | The eight flows: name, dates, description and screens (page key, screen name, type, question). |
| `src/titles.json` | Every page key and its fallback title. The build reads pages in this order. |
| `src/template.html` | The single-page shell with the shared styles. |
| `src/datauris.json` | Images inlined into the pages at build time. |
| `build.mjs` | Builds the single HTML file from `src/`. |
| `tests/` | Structure and copy tests. |
| `brief/` | Product rules and story facts every screen follows. |
| `reviews/` | Design reviews and critiques from earlier iterations. |

See CONTRIBUTING.md for how to change a screen.
