# F01 Onboarding, review (rf7, round 3 answers applied, 2026-10-06 night)

Screenshots: `.shots/rf6-f01-onboarding-<screen>.png` at 1440, rules also at 1280.
Judged against BRIEF with "Alberto's answers, round 3" first, then "Final consistency rules",
round 2, the 2026-10-06 answers, then Decisions and the canonical board.

## 01 Landing

Question: what is this and why should I care. First viewport answers it: headline (Bitso's USDC,
80% of profit), free, $5,000 to $200,000, 60 seats, one violet action "Start trading", projected
seats panel with the date of the data.

- Hero, seats panel, How it works (6 steps), Two accounts (Own neutral, Funded gold), Rules on a
  $25K account, Questions: KEEP. Step 3 already says "10% drawdown requirement".
- Funded card "lives until it is liquidated or a freeze is confirmed": MUST, freeze state is gone.
- Size fact "No position cap or leverage rule of ours": MUST rephrase positively (round 3: never
  quote a cap; leverage is what Hyperliquid allows per market).
- FAQ "not available in the US" and footer "Not available in the United States": MUST remove,
  US visitors get the same treatment as onchain.cc and no screen or rule of our own.
- No windows, rollover, automatic or partial claims, tranche, $5,000 / $4,500 / $5,500 on a $25K
  account, daily loss, activation, waitlist, appeals or Band column on the page.

## 02 Public leaderboard

Question: who is winning seats right now. Answered by the seat map lead (last seat #60, 701.4).
Seat map, zone separators, bubble, cut row, guest bar: owner's design, KEEP.

- Column "Drawdown" with Kept / Broken, tooltips "10% drawdown requirement", caption "Own
  accounts only", "projected" in the seat map title: all compliant. No change.
- "Frozen at the close" refers to the season score: fine.
- Canonical rows match. Full page capture still shows the sticky cut row over row #4 (capture
  artifact, not a layout bug).

## 03 Rules

Question: what exactly do I have to do, and what can I lose. The two account summary answers both
halves in the first viewport.

- Funded "What you can lose": a freeze line (fill not placed from our terminals): MUST remove.
- TOC entry and section "What freezes an account" (freeze, Bitso confirms the breach, appeals):
  MUST remove entirely.
- "How long it lasts ... or a freeze is confirmed": MUST, liquidation only.
- Claims paragraph "instant automatic check ... the account freezes": MUST remove (no fill check
  before claims).
- "What blocks an order ... no position cap and no leverage rule": MUST rephrase: leverage as far
  as Hyperliquid allows per market, the trailing liquidation is the only brake.
- "Where you trade: every order must be placed from ...": SHOULD state the fact instead of a rule
  the trader could break: the trading key works only from funded.onchain.cc and onchain.cc.
- Trailing liquidation: equity measured at Hyperliquid's mark price is missing: SHOULD add.
- Incidents: the account can claim once flat is missing: SHOULD add; "live" becomes "active".
- Claims: a claim counts as a deposit for the season (no PnL, no return, no drawdown effect) is
  missing and directly affects the reader's own score: SHOULD add. "At any time" SHOULD be said.
- "Excluded regions" section (US blocked, VPN): MUST replace with a neutral line, same
  availability as onchain.cc.
- Calendar, minimums, floors with "Drawdown requirement" and "your line" ($1,000 / $900 / $950 /
  $1,000 example correct), score, allocation, sizes table, liquidation chart ($25,923 peak,
  $23,423 level, lock $27,500, matches F05), one account, referrals: KEEP.

## 04 Sign in

Question: how do I get in. Same Privy sign in, terms accepted once, no warning about other
methods. Foot "Not available in the United States": MUST remove (round 3). Underlay follows the
landing.

## Flow

Landing, leaderboard, rules, sign in is complete for a cold visitor; every page links within the
flow. No US screen is needed (round 3).

## Fix list (all applied)

MUST
1. Landing: funded card "until it is liquidated", no freeze.
2. Landing: size fact says "Leverage as Hyperliquid allows per market", no cap wording.
3. Landing FAQ, landing footer, sign in foot: no US statements.
4. Rules: freeze line, freeze section and TOC entry, freeze in "How long it lasts", fill check in
   Claims all removed.
5. Rules: "What blocks an order" without cap wording; leverage per Hyperliquid market.
6. Rules: "Excluded regions" becomes "Regions", same availability as onchain.cc.

SHOULD
7. Rules: trading key works only from our terminals (fact, not rule).
8. Rules: equity at Hyperliquid's mark price; claim "at any time"; claim counts as a season
   deposit; incident account can claim once flat.

## Undefined, for Alberto

- Whether the reason and date a trader broke the drawdown requirement are public (tooltip).
- Whether a visitor arriving from a referral link sees who referred them.
