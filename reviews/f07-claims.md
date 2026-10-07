# F07 Claims: final review (round 3 rules)

Read: BRIEF.md (round 3, final consistency rules, round 2 as binding), manifest, kit, the five sources,
1440 shots. Persona kestrel, $25K funded account ($25,000 USDC), live since Nov 19, 2026, Season 2.
Moments: Nov 28 17:19 (04), 17:31 (01, 02), 17:32 (03), Dec 1 10:00 (05).

Figures checked against the canonical claim: $923.00 profit, $184.60 Bitso, $738.40 own, own balance
$1,284.20 to $2,022.60; equity $25,923.00, liquidation $23,423.00 then $22,500.00, lock at $27,500;
Dec 1 trail from $26,140.00 (Nov 30) to $23,640.00, equity $24,612.30 (meter 71.49%). Position math
in 04 is right (XAU -$11.12, ETH +$305.00). Season chips: 19d 06h on Nov 28, 16d 14h on Dec 1.
No windows, rollover, automatic or partial claims, 20% tranche, $5,000/$4,500/$5,500, daily loss,
appeals, activation, waitlist, position or leverage cap, Band column.

## MUST

1. 02 Claim modal: caption "an instant check confirms every fill came from funded.onchain.cc or
   onchain.cc. If one did not, the account freezes" plus a "What a freeze means" link. Round 3 removes
   the freeze state and the fill check. Remove the caption and the link.
2. 03 Profit claimed: "Every fill passed the check." Same rule. Remove.
3. 03 Profit claimed: round 3 says a claim landing in the own account counts as a deposit for the
   season (no PnL, no return, no effect on the Drawdown requirement). The screen says nothing, and a
   competing trader will ask. State it once, where the money lands.

## 01 Profit to claim

Question: how much can I claim, what does claiming do. First viewport answers it.
- KEEP lead $738.40, primary "Claim $738.40", ok-line, ledger with the Own tag, reset table.
- REMOVE "highest equity $25,923.00" inside the liquidation cell: equals equity on the row above,
  noise in a two column table.
- SHOULD: caption restated the $2,500 trail the table already shows; keep only the lock at $27,500
  and the link to 04.

## 02 Claim profit (modal)

Question: confirm, all profit, 80% to my own account. Answers it.
- KEEP route Funded to Own, ledger, reset lines, Cancel plus "Claim $738.40".
- MUST 1 above. Underlying page mirrors 01.

## 03 Profit claimed

Question: did it reach my own account, where does the funded account stand.
- CHANGE subtitle "USDC in your own account" to "claimed to your own account": the own balance is
  $2,022.60, not $738.40; the ledger already shows before and after.
- MUST 2 and 3 above: the caption now carries the season deposit fact instead of the fill check.
- REMOVE header link "Claims on this account" (pointed at a Dec 1 screen). The same-flow link moves
  into the reset caption ("Nothing to claim").
- KEEP primary "Trade the funded account", share card secondary with the referral link.

## 04 Close positions to claim

Question: open positions, what do I do. Heading and primary answer it.
- KEEP: same moment as F05 01 (XAU long, ETH short, $25,923.00 at mark), "set at the real closing
  prices" footnote, link to 01.
- No change.

## 05 Nothing to claim

Question: not above the start, what can I do.
- KEEP lead "$387.70 below the $25,000 start", meter between liquidation and start.
- CHANGE primary "Trade" to "Trade the funded account" (same label as 03, says which account).
- CHANGE meter label to "Equity at mark" (round 3: the trailing level uses Hyperliquid's mark).
- REMOVE "Claims on this account" table: one past row that does not answer the question. The caption
  links the Nov 28 claim (03) instead.

## Cross-screen

- Funded tag on funded figures, Own tag on own figures; header chip always the funded equity.
- Primary actions: Claim (01, 02), Trade the funded account (03, 05), Close in the terminal (04).

## Left undefined (phrased neutrally)

- Whether the claim transfer has a visible hash (kept as a transfer link, no claims about it).
- Time between "Claim" and funds arriving: not stated.
