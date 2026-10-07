# funded.onchain.cc, flow mockups

Navigable static mockups of **funded.onchain.cc**, a standalone app where traders compete with their own money in dated cycles and the best ones get a funded account with Bitso's USDC, keeping 80% of the profit. Built in onchain.cc's visual language. All figures are demo data.

**Live site:** https://gotoalberto.github.io/funded-onchain/

**Single file version:** https://gotoalberto.github.io/funded-onchain/funded-onchain-mockups.html (every screen in one self-contained HTML).

## Flows

### F01 Onboarding

A visitor arrives from X, a creator or a referral link, understands the offer, sees the live leaderboard and the rules, and signs in with the same account they use on onchain.cc.

*Why:* It is the first contact and has to convince a professional trader in seconds: Bitso's real money, 80% of the profit, no challenge fees and clear rules.

[Open the flow](https://gotoalberto.github.io/funded-onchain/f01-onboarding/index.html), 5 screens.

### F02 Not qualified yet

The trader has signed in but does not meet the minimums to appear on the leaderboard yet: they see what is missing, deposit into their own account and choose an alias.

*Why:* Many arrive with no history. Without a short, concrete path to the leaderboard they leave before trading.

[Open the flow](https://gotoalberto.github.io/funded-onchain/f02-not-qualified/index.html), 6 screens.

### F03 Competing

The trader trades their own money during the cycle and follows their standing: board rank and seat, the seat map, score, stats and the terminal for their own account.

*Why:* This is where they spend most of their time and where the volume that pays for the business is generated. They must always know whether they are inside or outside the seats and what they are missing.

[Open the flow](https://gotoalberto.github.io/funded-onchain/f03-competing/index.html), 8 screens.

### F04 Seat claim

When the cycle closes there are 24 hours to request a seat; the live request board shows who has requested, and when it ends, who gets an account and who does not.

*Why:* It is the decisive moment of every cycle. It has to be transparent so nobody doubts how seats are assigned.

[Open the flow](https://gotoalberto.github.io/funded-onchain/f04-seat-claim/index.html), 9 screens.

### F05 Operating the funded account

The trader trades Bitso's USDC from the same terminal, with the trailing liquidation level always in view, and can switch to their own account without mixing figures.

*Why:* A professional needs to see on every order how much room is left before losing the account. That is what sets this product apart from any other terminal.

[Open the flow](https://gotoalberto.github.io/funded-onchain/f05-funded-trading/index.html), 6 screens.

### F06 Risk events

The two hard moments: the account liquidated when equity reaches its level, and a platform outage that closes positions while the account stays active.

*Why:* These are the moments where trust is won or lost. They must explain what happened, what the trader keeps and what they can do next, without ambiguity.

[Open the flow](https://gotoalberto.github.io/funded-onchain/f06-risk-events/index.html), 2 screens.

### F07 Claims

The trader claims whenever they want, with every position closed: 80% of the profit goes to their own account and the funded account returns to its starting size.

*Why:* Getting paid is the promise of the product. If it is not clear how much is claimed and what happens to the account afterwards, nobody trusts the rest.

[Open the flow](https://gotoalberto.github.io/funded-onchain/f07-claims/index.html), 5 screens.

### F08 After the account

After losing the account, the trader goes back to competing with their own money and can request a seat again at the next cycle close, with no penalty.

*Why:* Keeping the trader who loses is key to growth: every return to the competition brings more volume and more referrals.

[Open the flow](https://gotoalberto.github.io/funded-onchain/f08-after-account/index.html), 3 screens.

### F09 Deposit and withdraw

The own account: the balance and where it came from, USDC deposits from any EVM chain or Solana to a personal address, withdrawals to any EVM address, and what happens when a token that is not USDC arrives.

*Why:* Without their own money there is no competition. Moving funds in and out has to be as simple as on an exchange, and clearly separate from the funded account.

[Open the flow](https://gotoalberto.github.io/funded-onchain/f09-money/index.html), 8 screens.

## Repository

| Path | What it is |
|---|---|
| `docs/` | The published site (GitHub Pages serves this folder). Each flow is an independent folder with its own index and kit. |
| `src/pages/` | Source of every screen, one folder per flow. |
| `src/kit/` | Shared design kit: tokens and components taken from onchain.cc. |
| `src/manifest.json` | Flows, screens and the single question each screen answers. |
| `build.mjs` | Builds `dist/` from `src/`. |
| `bundle.mjs` | Packs the whole site into one HTML file. |
| `tests/` | Structure and render tests (every screen exists, links resolve, no overflow at 1280 and 1440). |
| `tools/` | Generators used for the terminal, leaderboard and money screens. |
| `BRIEF.md` | Product rules and decisions the mockups follow, in the order they were taken. |
| `reviews/` | Design reviews and critiques from each iteration. |

## Build

```
npm install
npm run pages   # builds the site into docs/ and the single file
npm test
```
