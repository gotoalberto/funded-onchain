# F06 Risk events, final review (round 3 rules)

Two separate examples, each with its own caption. Checked against BRIEF round 3: no freeze state,
no fill check, no leverage or position cap, trailing liquidation at mark, closes at real prices,
claims allowed whenever the account is flat (also during an incident).

## 01 Account liquidated
Question: my equity reached the liquidation level, what happened and what do I keep?
- First viewport answers it: headline, the event in one paragraph, $738.40 kept (Own), $23,583.00
  back to Bitso (Funded), next step toward the Season 2 close. Figures match the canonical event
  (peak $26,140.00, level $23,640.00, -$57.00 at real fills, $738.40 / $184.60 claim split, own
  balance $2,022.60 in the header). Fill differences add up to -$57.00.
- MUST: footer linked to a "confirmed freeze" as a kind of automatic close. Freeze no longer
  exists. Removed.
- MUST: caption spoke of "the other two screens"; the flow has two. Now names the incident screen.
- SHOULD: "this record goes once you leave it" invented behaviour. Kept only the BRIEF fact
  "Past funded accounts are not kept in the app".
- Keep: closing fills table (mark vs real fill), it explains the $57.00 gap once.
- Primary action "Go to Season 2" goes to F08 (inactive here); same-flow link to 02 stays.

## 02 Platform incident
Question: orders can't reach Hyperliquid, what happened to my positions and my account?
- First viewport answers it: banner (positions closed at 14:31 at real fills, account active,
  trading back with service), +$200.81 realized, ticket locked, rule panel unchanged.
  Math checks: -$29.19 + $230.00 = +$200.81; liquidation $25,923.00 - $2,500 = $23,423.00,
  $2,406.93 away from $25,829.93; track positions match the $22,500 to $27,500 scale.
- MUST: amber warning "an order from any other frontend still freezes the account". Freeze and
  outside orders cannot happen (round 3). Removed.
- MUST: no link to another screen of the same flow inside <main>. Added "liquidation" link in the
  trade history footer.
- MUST: round 3 says a flat account can claim during an incident. The screen had no action. Added
  one sentence and the primary action "Claim profit" (to F07 02-claim). The amount stays once, in
  the rule panel ("Profit above $25,000 $829.93").
- Removed "No open positions" from the side, it repeated the banner body.
- Caption now names the liquidation screen.
- Keep: terminal context dimmed, Positions 0, "Incident, automatic" pills in blue (system state).

## Cross-screen
- Both use real fill prices for automatic closes and say it once each.
- No mention left of freeze, unmatched fills, fill checks, caps, windows, rollover, automatic or
  partial claims, daily loss, appeals, activation or waitlist.

## Left undefined (neutral on screen)
- Whether a claim needs Hyperliquid reachable during an incident: shown as available per round 3.
- How the platform decides an incident and how long it lasts: not stated.
