# onchain.cc Funded, flow mockups

**Live:** https://gotoalberto.github.io/funded-onchain/

Navigable mockups of **onchain.cc Funded**. Every trader competes with their own money in their own 30-day qualification window, starting the day they clear the entry gate. The frozen score sets one of six seat tiers, from $500 to $20,000 of USDC. A seat is offered the moment one frees up, to the highest score in that tier; the trader trades our USDC and keeps 80% of the profit. The mockups follow one trader, kestrel, from sign-up to a funded seat, a payout, a closed seat and back to competing. All figures are demo data.

The seat allocation model is `brief/MODEL.md`; the rules and demo data every screen follows are in `brief/STORY_FACTS.md`.

## Flows

Eight flows in date order, 71 screens. Screens named "Variant" show other outcomes.

| # | Flow | Dates | What happens | Screens |
|---|---|---|---|---|
| 1 | Discover | Nov 7 | A visitor lands, sees the six seat tiers and real payouts, reads how it works and signs up. | 6 |
| 2 | Get on the board | Oct 20 to 21 | kestrel signs up on Oct 20, adds $250 and clears the entry gate on the tenth closed trade. Their own 30-day window starts. | 13 |
| 3 | Compete | Nov 7 | Day 18 of 30. kestrel's provisional score of 64 sits in the $2.5K tier, 4 points from $5K. | 10 |
| 4 | Get a seat offer | Nov 19 to 21 | Day 30: the score freezes at 66 and kestrel qualifies for the $2.5K tier. A lower seat is offered first, then a $2,500 seat frees up and kestrel is funded on the daily run. | 9 |
| 5 | Trade the seat | Nov 21 to 30 | kestrel trades 2,500 USDC at up to 10x. The seat is up $462. | 8 |
| 6 | Get paid | Nov 30 | kestrel closes their positions, takes a $370 payout and keeps trading. | 6 |
| 7 | Pause and close | Dec 1 to 2 | A bad run: the daily pause, then the seat closes at its loss limit. The payout stays theirs. | 4 |
| 8 | Back to competing | Dec 2 to 19 | kestrel keeps their payout, keeps competing in window 2 with their own money and qualifies again for the $1K tier. | 15 |

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
