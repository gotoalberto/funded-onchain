# F06 Risk events, review

Reviewed: 5 screens at 1440 (01 daily pause, 02 frozen, 03 closed at max loss, 04 incident, 05 appeal), sources in `src/pages/f06-risk-events/`.

Overall: the math is clean (every figure in 01, 02, 03 and 04 adds up against the demo data) and the tone is calm and factual. The problems are (a) one date error in 03, (b) the four scenarios contradict each other when read as one story, (c) each screen repeats its key fact three or four times, and (d) the rules leave real gaps a pro will ask about: can I close while frozen, do SL fills count during an incident, what if live loss is already past the limit when the incident ends.

---

## 01 Daily pause (Trade, paused)

1. **Question:** "I lost 5% today. When can I trade again?" **Yes.** The amber banner states "Trading paused until 00:00 UTC (5h 12m)" with a 05:12:08 clock, above the fold.
2. **Components:** app header (window chip day 10 of 30, account chip Paused $4,934.20), event banner (pause) with clock and Appeal, market header, chart with paused zone and close marker, order book, bottom tabs on Rule log (5 rows plus day total, CSV), locked order ticket with countdown card, Account rules card (daily loss, max loss, open position, window profit, window ends), What you keep card with appeal line.
3. **Missing:**
   - The account itself in the banner: "$25K account". A cold reader of the first screen of the flow never sees the account size or starting USDC ($5,000) except in "What you keep".
   - What an appeal can actually change for a pause that ends in 5h while the desk answers in 24h (remedy: lift the pause early? reverse the loss?). Without it the Appeal button promises nothing.
4. **Superfluous / duplicated:**
   - The countdown appears four times: banner title "(5h 12m)", banner clock 05:12:08, ticket card 05:12:08, Account rules "Resets in 5h 12m". Keep the banner clock and the ticket lock; drop "(5h 12m)" from the title and "Resets in" from the card.
   - "At 00:00 UTC you trade again with $4,934.20 and a fresh $250 daily limit" repeats the title. Shorten body to the reduce only close and the fresh limit.
   - "A pause is not a strike": introduces a "strike" concept that does not exist in the brief. Remove.
   - Open position row "$0 of $25,000, All closed reduce only, 0%" says nothing while paused. Remove for this state.
   - Rule log row "00:00 UTC, Before the pause: 4 closed trades and fees" is a summary posing as an event with a fake timestamp. Make it a muted subtotal row without a time.
5. **Inconsistencies:**
   - Rule log closes "ETH-USD short 1.25 ETH" on Nov 29, while 02 (Nov 28) leaves the ETH short at 0.45 after the unmatched fill. Read as one flow the position size jumps back.
   - Chart last price tag 2,653.7 vs Mark 2,661.40 and book mid 2,661.40 (same on 04).
   - Now is 18:48 UTC but funding countdown reads 00:41:12 (hourly funding would be 00:12). Minor.
   - Appeal sits as a filled button next to the clock: a second action that competes with the only real answer (wait).
6. **Visual:** banner is good (amber is the correct semantic). Title is a 2 clause sentence that wraps poorly; split it: title "Paused until 00:00 UTC", body "You lost $250.40 today, the 5% daily limit of $250." The Appeal button in the banner should be a text link.

## 02 Frozen (Home)

1. **Question:** "An order was filled outside the terminal. What happens now?" **Yes.** Title, cause, review deadline, time left and Appeal are all in the first card.
2. **Components:** header (Frozen $5,184.60, unread bell), freeze summary card (title, cause, review due, time left, reviewed by, Appeal primary), unmatched fill card (fill facts, terminal order check, effect on account, Hyperliquid link), What happens next stepper with two outcome cards, While frozen card (3 rows, equity at freeze, window profit, note), Common causes card.
3. **Missing:**
   - Can I reduce or close positions while frozen? "No new orders" plus "Positions held as they are" means a trader holding XAU long 2.78 oz and ETH short 0.45 for 24h cannot cut risk. State the rule; recommend "Reduce only closes still work".
   - Are daily loss and max loss still enforced during the freeze? Say "Max loss still closes the account at $4,500.00".
   - What happens to the +$184.60 window profit if the outcome is Closed. A pro will ask whether profit is paid, forfeited or reviewed.
   - Does the unmatched fill's +$33.92 stay in equity if accepted / removed if rejected.
4. **Superfluous / duplicated:**
   - "Review due by Nov 29, 14:02 UTC" and "Time left 21h 46m" are the same fact; keep Time left as the lead figure, date as subtext.
   - "Risk desk, Bitso" shown three times (summary, stepper, appeal). Keep once in the summary.
   - "Nobody has decided anything yet." Chatty; the stepper already says it. Remove.
   - "No payouts, nothing is due before Jan 15, 2027" is reassurance for a non issue. Remove or fold into one line.
   - "Within 24h" in the stepper duplicates the deadline.
   - Equity at freeze and window profit repeat the header chip.
5. **Inconsistencies:**
   - Day 9 (Nov 28): frozen at 14:02 UTC, yet 04 incident is also day 9 at 14:31 to 14:49 with the account Funded, ETH short 1.25 and identical equity $5,184.60. Same day, incompatible states.
   - Uses blue/cyan for the freeze icon; the brief only allows violet, green/red, amber. Either accept "info blue" as a kit token or use neutral.
6. **Visual:** good hierarchy. The stepper's two outcome cards are as large as the fill evidence; make them a compact two row list. Right column cards are dense small text.

## 03 Closed at max loss (Home)

1. **Question:** "I hit the 10% limit. What did I keep?" **Partly.** The lead figure "$0 owed" answers "do I owe anything", not "what did I keep". The keep list (record, own account, rank, right to request again) sits in the second card.
2. **Components:** header (Season 2 chip, Closed $0.00), result card (small heading, $0 owed, Bitso covers $511.40, body, 4 stats, slippage note), What you keep (4 items), account card (equity chart with start and floor lines, 6 stats, closing fills table), What next stepper with Go to Season 2 (primary), Appeal card.
3. **Missing:**
   - When seats from the Season 2 request start trading (funded windows start Dec 20 by the canonical pattern). The stepper ends at "Seats assigned".
   - The 25% drawdown floor for requesting: a 10% closed account may not affect the floor, but say whether the closed account counts in Season 2 max DD (the card says "do not count against your Season 2 score", extend to floors).
4. **Superfluous / duplicated:**
   - "Nothing owed" four times: hero "$0 owed", body "Nothing else is taken from you", keep item "Nothing owed", plus "Your own wallet was never at risk". Keep the hero and drop the keep item.
   - Four stats plus a footnote to explain $11.40 slippage. Reduce to two: "Returned to Bitso $4,488.60" and "Slippage -$11.40"; the floor and the $5,000 start are already in the chart.
   - Six trade stats (trades, win rate, peak, best, worst, volume) belong to the F09 history; keep the chart and closing fills (evidence for an appeal), drop the stats row.
   - "No payout due" is self evident after a loss below start. Remove.
5. **Inconsistencies:**
   - **Season 2 countdown is wrong.** Close at Dec 2, 15:20 UTC, Season 2 ends Dec 18 00:00 UTC: 15d 08h left, not "16d 08h" (header chip) and not "16 days left" (stepper).
   - "Your $25K account closed on Dec 2 at the 10% max loss" is rendered as a small grey label above the big figure: reads as an eyebrow, which the rules ban. Make it the h1.
   - "a closed Season 1 account" is correct (the seat came from Season 1) but reads oddly next to dates inside Season 2; say "the Season 1 seat".
   - Header logo badge still says "Funded" while the account chip says Closed (kit issue, check on F09 too).
6. **Visual:** two primary-weight elements: the $0 hero and the violet "Go to Season 2". Fine, but "Appeal this close" is a full width dark button of equal size to the primary; make it a text link. Equity chart fills red under the start line for the whole window, including days in profit; colour only the area below start.

## 04 Incident (Trade, live)

1. **Question:** "Something broke on our side. Am I protected?" **Partly.** The banner title states the problem ("Hyperliquid API degraded. Order placement has been failing for 18 minutes."); the answer ("rules held at 14:31, TP and SL still trigger") is in body text. Lead with the answer.
2. **Components:** header (Funded $5,170.60), incident banner with Status page and "I was affected", market header, chart with TP/SL lines and incident zone, order book, Positions tab (2 rows with Protection column), ticket with unavailable callout and disabled button, Account rules card with "Measured at 14:31" pill and live equity, Status updates stepper, status.onchain.cc link.
3. **Missing:**
   - Do SL or TP fills during the incident count? "Measured as they stood at 14:31" plus "TP and SL still trigger" leaves this open. One sentence: "Losses from your own TP and SL count; price moves without a fill do not."
   - What happens when the incident ends and live loss is already past a limit (here daily loss is $62.10 held, but live equity is $14 lower; in a bad case it could be past $250). State a grace period or review.
   - What happens if Hyperliquid liquidates or the max loss floor is crossed during the incident.
   - The question says "our side" but the copy blames Hyperliquid. Decide: the manifest question should read "Something broke outside my control".
4. **Superfluous / duplicated:**
   - "14:31" appears six times (banner, pill, daily loss, max loss, footnote, status update). Keep banner and pill.
   - "Order placement unavailable" twice in the ticket (callout title and button), plus "Prices live, orders unavailable" in the tabs, plus banner. Keep banner and disabled button.
   - "You can prepare this order. It is not queued" invites work that cannot be sent. Remove; lock the ticket like 01.
   - Status page link twice (banner and card footer). Keep one.
   - Status updates stepper with 4 entries in the side rail pushes the page to 1,360px. Show the latest update only, link the rest.
5. **Inconsistencies:**
   - Same day as 02 (see above). Put the incident on another day (e.g. Dec 5) or state that the screens are separate scenarios in the flow index.
   - Open position $11,254 vs demo $11,240 (the computed $11,254 is right; update BRIEF or the rows).
   - Chart last price 2,653.7 vs mark 2,661.40.
   - "I was affected" opens the appeal modal pre-filled for the freeze (05), not for the incident.
6. **Visual:** blue banner competes with violet primary; blue is outside the palette rules (see 02). The terminal at full density is right for this state since positions stay live.

## 05 Appeal (modal over 02)

1. **Question:** "I think this was wrong. How do I contest it?" **Yes.** Modal with reason, event, text, screenshots, reply email, deadline and Send appeal.
2. **Components:** scrim over frozen page, modal (title, subtitle, reason select, affected event card "Selected", textarea with counter, attachments, reply to field, desk deadline note, Cancel, Send appeal).
3. **Missing:**
   - The sent state: confirmation, appeal reference and where to follow it (the frozen page should then show "Appeal sent Nov 28, 16:16").
   - Variants for the other entry points: pause, close, incident ("I was affected"). Today all four links land on a freeze appeal.
   - Remedy line per event: what the desk can do if the appeal wins (unfreeze, reopen with corrected equity, lift pause).
4. **Superfluous:** "Affected event" card with a "Selected" tag implies a picker with one option; show it as plain read only text. "From your sign in" label is fine.
5. **Inconsistencies:**
   - Reason select "Wrong freeze" while the user's text concedes the bot was theirs. The demo text is good (it is the common case), but then the reason should be "It was my API wallet" or neutral "Explain the fill".
   - Reply email: BRIEF has no email for kestrel. Check with Privy login if email exists; otherwise make it optional input.
6. **Visual:** clean. Counter "223 of 2,000" correct.

---

## Flow

**Sequence.** Four parallel states plus one shared modal. Read cold, 01 sets context only partially (no account size). Missing:
- **Flow intro / state index** or a stronger 01: one line naming the $25K account and $5,000 USDC.
- **Appeal sent** state (02 with appeal pending).
- **Appeal outcome**: unfrozen (back to F05) and frozen then closed (differs from 03: closed by review, possibly in profit).
- **Incident resolved** state: rules measuring live again, what changed.
- **Pause cleared** at 00:00 is trivial (back to F05), no screen needed.
- Optional: **max loss warning** before the close (equity within e.g. $100 of the floor). Probably belongs to F05.

**Merge/drop.** 05 could be a state of 02 (it already is visually). No screen should be dropped.

**Story consistency.** Pick one timeline: Nov 28 freeze (accepted, ETH back to 1.25 by a new order or keep 0.45), Nov 29 pause, Dec 2 close, incident on another date. Then make positions match across 01, 02, 04.

**Shared kit components needed**
- `event-banner` with variants pause (amber), frozen, incident, closed: title, one line body, one figure (clock), one action as link. Used in 01, 04, and should replace the custom top card in 02.
- `rules-card` (Account rules) with states: normal, paused, held at time, frozen. Used 01, 04, and needed in 02.
- `stepper` (What happens next / What next / Status updates): used 02, 03, 04.
- `keep-list` (What you keep): 01, 02, 03.
- `appeal-modal` with event variants.
- `locked-ticket` (ticket lock with reason and countdown): 01, 04, 02 in Trade.
- `fill-evidence` table (unmatched fill, closing fills): 02, 03.
- Status colour token for "info / system state" (freeze, incident) if blue stays; otherwise neutral.

## Fix list

**MUST**
1. 03: Season 2 countdown to "15d 08h" in the header chip and "15 days left" in What next.
2. 01/02/04: make the scenarios one coherent timeline. Move 04 to a different day (e.g. Dec 5) with its own equity, and reconcile the ETH short (02 leaves 0.45, 01 closes 1.25).
3. 02: state whether reduce only closes work while frozen and whether max loss still applies. Recommended copy: "You can still close positions. Max loss still closes the account at $4,500.00."
4. 04: say whether TP and SL fills during the incident count, and what happens if the live loss is past a limit when the incident ends.
5. 04: lead the banner with the answer: title "Your rules are held at 14:31 UTC while orders fail on Hyperliquid", body with duration.
6. 03: promote "Your $25K account closed on Dec 2 at the 10% max loss" to the h1; it is an eyebrow now.
7. 05: appeal variants per entry point; "I was affected" (04), "Appeal" (01) and "Appeal this close" (03) must not open a freeze appeal.
8. 01: remove "A pause is not a strike" (no strike concept in the product).
9. 02: say what happens to the +$184.60 window profit if the review closes the account.

**SHOULD**
1. 01: one countdown in the banner, the lock in the ticket; drop "(5h 12m)" from the title and "Resets in 5h 12m".
2. 01, 03: appeal as a text link, not a button next to the main figure or the primary.
3. 01: add "$25K account" to the banner body so the flow opens with context.
4. 02: lead with "21h 46m" and put the date under it; say "Risk desk, Bitso" once; drop "Nobody has decided anything yet" and the payouts row.
5. 03: cut hero stats to Returned to Bitso and Slippage; drop the 6 trade stats and "No payout due"; drop the "Nothing owed" keep item.
6. 04: lock the ticket instead of "You can prepare this order"; keep 14:31 in two places only; latest status update only, one status link.
7. 05: add Appeal sent state and a remedy line per event.
8. 03: add "Funded windows start Dec 20" to the What next stepper.
9. Chart last price tag to match mark 2,661.40 (01, 04).

**COULD**
1. 02: compact the two outcome cards into a two row list.
2. 03: shade the equity chart only below the start line.
3. 01: rule log subtotal row without a fake "00:00 UTC" time.
4. 05: "Affected event" as read only text, no "Selected" tag; reason default neutral.
5. Decide a kit token for system states (freeze, incident) instead of ad hoc blue.
6. 01: funding countdown consistent with the 18:48 clock.
7. BRIEF: open position $11,254 to match the computed rows.
