# F08 Payouts, review round 3

Scope: 6 screens, 1440 full page shots plus sources. Judged against BRIEF.md and its Decisions.
Arithmetic checked: 80% of $184.60 = $147.68; $6,240.50 minus $5,000 = $1,240.50, split $992.40 / $248.10;
Nov 28 to Jan 15 = 48 days; window 2 Dec 20 to Jan 19 and window 3 Jan 19 to Feb 18 are 30 days each; day
counters in the header chip (9 of 30, 27 of 30, 28 of 30) are right. Numbers agree across the flow.

## 01 Payouts, before week 8

Question: when can I get paid for the first time? First viewport answers it: h1 "First payout Jan 15, 2027".

| Component | Verdict | Why |
|---|---|---|
| h1 date + caption ($25K, $5,000 USDC, started Nov 20, Nov 28 now) | KEEP | Leading fact, dated cold. |
| Paragraph "Payouts start after 8 full weeks, then monthly... week 2, 48 days to go" | CHANGE | Says the rule that "How payouts work" says again, and "week 2" repeats the strip. Keep only "48 days to go, only while the account is live". |
| Right stat "Above the high water mark today +$184.60 / $147.68 yours if it held" | KEEP | Useful, honest conditional. Consider dropping the +$184.60 and leading with "$147.68 if it held", one figure. |
| Week strip (8 weeks + payout) | KEEP, CHANGE | Good instrument. Week 5 loses its start date (Dec 18) to the amber label; show both. "End of week 8, Jan 15" is wrong: week 8 is Jan 8 to Jan 14, Jan 15 is "after week 8". |
| Caption on window 1 end and window 2 | KEEP | This is the binding amber warning reason; it is the most important rule on the page. Make it the amber banner instead of muted caption so it reads as a warning, and drop the amber text inside the strip (one warning, not two). |
| Footer "Until payday, profit stays in the account..." + Trade | KEEP | Trade is a sensible single primary. |
| "How payouts work" 4 items | CHANGE | "After 8 weeks, then monthly" duplicates the lead. "Fill review first" duplicates F08 02. Keep the HWM definition (80/20 of equity above the HWM) and "claims stay open until next payout date"; cut to 2 items or fold into one caption under the strip. |

Missing: nothing essential. Superfluous: rule restated twice, week number shown three ways (h1 days, "week 2", strip).
Inconsistent: "End of week 8" vs Decisions "after 8 full weeks".
Hierarchy: lead panel is fine; the second panel has equal visual weight to the lead and reads like a FAQ.

## 02 Fill review in progress

Question: it's payday, why can't I claim? Answered in the first viewport: "$992.40 on hold for the fill review" + meter.

| Component | Verdict | Why |
|---|---|---|
| Figure $992.40 "on hold" | CHANGE | Contradicts "The amount follows equity until you sign" in the footer. If it follows equity it is not held. Say "$992.40 at current equity, claimable after the fill review". |
| Caption "First payout, Jan 15, 2027. 02:10 UTC now." | KEEP | Dated. |
| Explainer paragraph | KEEP | Short, states what is checked. |
| "In review" info pill | REMOVE | Repeats the subtitle and the meter title. |
| Meter "Fills matched 145 of 214", started, "Usually under 24 hours" | KEEP | Precise, trustworthy. "Usually under 24 hours" is an unstated SLA (see questions). |
| Disabled violet "Claim $992.40" + "Turns on when the review clears" | CHANGE | A disabled control painted violet is not the primary action of this screen. Use a neutral disabled button, or remove it and keep the caption. The caption is a hidden link to 03 (mockup convenience; fine, but make it a plain mockup link). |
| "While it runs" panel (keep trading, if a fill does not match) | KEEP | Both items answer the next real worry; link to F06 frozen is right per Decisions. |

Missing: the amber window warning. Window 2 ends Jan 19, before the Feb 15 next payout, and Decisions say to warn in amber when that happens; 03 to 05 do, 02 does not. One line is enough.
Inconsistent: "on hold" vs "follows equity".

## 03 Payout ready

Question: how much can I take out today, and what does it do to my account? Answered: $992.40 + settlement table + equity after.

| Component | Verdict | Why |
|---|---|---|
| Figure "$992.40 ready to claim" + dated caption | KEEP | |
| Paragraph "Your 80% ... wallet 0x7a3F…c91E. No network fee." | CHANGE | Wallet appears again in 04 where it matters; here keep "80% of the profit above the high water mark". "No network fee" vs 04 "costs no gas": pick one wording. |
| Pill "Fill review cleared" + "214 of 214 fills matched, 03:12 UTC" | KEEP | Trust signal; pill green is pass/fail, allowed. |
| Settlement table | KEEP, CHANGE | Best component of the flow. Rename "Above it" to "Profit above the high water mark". Remove "1 open position, $11,240 of $25,000" from the unrealized row: position size is not a payout fact. Keep the unrealized +$86.30, it is precisely what a pro needs. |
| Amber banner (window 2 ends Jan 19) | KEEP, CHANGE | Required by Decisions. 4 lines; it restates "brings equity to $5,000.00" already in the table. Trim to: "Window 2 ends Jan 19, 00:00 UTC. After claiming, equity sits at $5,000, so any loss before then closes the account. You can claim until Feb 15." |
| Footer "Until you sign, the amount follows equity. Next payout Feb 15, 2027." + Claim | KEEP | Next payout date also appears in the banner; drop it from one. |

$992.40 appears 3 times in the first viewport (figure, table total, button). The button with the amount is mandated by the brief; the table total is the receipt. Acceptable, but no fourth.

## 04 Claim payout (modal)

Question: confirm the amount and where it goes. Answered.

| Component | Verdict | Why |
|---|---|---|
| Amount + "To onchain.cc wallet 0x7a3F…c91E" | KEEP | |
| Account equity $6,240.50 to $5,000.00 | KEEP | |
| Open positions "Stay open" | KEEP | Pro traders will ask. |
| Loss limits "Unchanged, floor $4,500.00" | CHANGE | Only the max loss floor is stated. The daily loss rule (5% drop from the day's starting equity) would trip on a $1,240.50 withdrawal unless the payout is excluded. Say explicitly "Daily loss: the claim does not count" once the rule is decided (question 1). |
| Amber banner | KEEP | The modal is the commit point; repeating the page warning here is the one justified repeat. |
| Caption "You sign one message... costs no gas. The amount is fixed when you sign." | KEEP | Resolves "follows equity". |
| Cancel + "Sign and claim $992.40" | KEEP | |

Missing: what happens if equity moves between opening the modal and signing (amount shown is stale). A one line "Amount at 09:40:12 UTC, refreshes on sign" or a live value.

## 05 Payout sent

Question: did it arrive, and can I share it? Answered: "$992.40 USDC arrived in your wallet", Arrived pill.

| Component | Verdict | Why |
|---|---|---|
| Figure + caption (09:42, one minute after signing) | KEEP | |
| "Arrived" pill | REMOVE | Same words as the subtitle. |
| Receipt (sent to, tx, Bitso 20%, equity now = HWM, was $6,240.50) | KEEP | Tx link is the trust anchor. |
| Amber banner | KEEP | Still true, still needed. |
| Footer "Next payout Feb 15, on equity above $5,000.00. If there is none" + Trade (violet) | CHANGE | The screen's second question is sharing; Trade is in the nav already. Either make "Post on X" the primary or make Trade glass. One primary only, and it should serve the question. "If there is none" is a mockup jump to 06; label it as such or drop it. |
| Share card | CHANGE | "$25K account" chip and "Funded" brand text are violet; Decisions: band chips use band classes, $25K is neutral, violet only for actions, selection and own row. Use `band-25`. "on onchain.cc" should read funded.onchain.cc for consistency with the link. |
| Share copy (referral 1bp, own volume earns nothing) | KEEP | Accurate to the brief. |
| Payout history (one row) | REMOVE | Repeats every number above (date, $1,240.50, $992.40, $248.10, tx) plus "Total paid $992.40", a fourth $992.40. History belongs to the steady state (06 and the Payouts nav). |

Hierarchy: three stacked panels of similar weight; removing history leaves receipt then share, which is the story.

## 06 Nothing to claim this month

Question: it's payday but my account is not above its start, what now? Partly answered. The real answer is in the amber banner (account closes in under 3 days unless equity gains $129.80), but the page leads with $0.00 and a large "Next payout Mar 15, 2027".

| Component | Verdict | Why |
|---|---|---|
| Figure "$0.00 to claim this month" | KEEP | Correct lead per manifest; dimmed figure is right. |
| Paragraph "Equity $4,870.20 is $129.80 below... Nothing to do: the account keeps trading" | CHANGE | "Nothing to do" contradicts the banner: if equity stays below $5,000 at Feb 18 the account closes. Drop "Nothing to do". |
| Right stat "Next payout Mar 15, 2027 / 80% of equity above $5,000.00 that day" | CHANGE | Displayed as a sure thing at large size, while the banner says Mar 15 only exists if the account rolls over. Demote to the footer caption, or replace the side stat with "Window 3 closes in 2d 16h, needs +$129.80". |
| Amber banner (window 3 ends Feb 18, needs +$129.80) | KEEP | Correct, honest, binding. Should be visually first after the figure. |
| Footer "Window 3, Jan 19 to Feb 18. Max loss floor $4,500.00." + Trade | KEEP | Trade is the right action here. Window dates repeat the banner; keep only the floor. |
| Payout history (Feb 15 $0.00 row, Jan 15 row) | KEEP | This is the right home for history. The "Nothing to pay" row with three $0.00 is noise; consider "No payout, equity below the high water mark" spanning the row. |

## Flow level

Sequence 01 locked, 02 review, 03 ready, 04 claim, 05 sent, 06 nothing is complete for the happy path and the
zero month. 01 sets context cold. Dates are stated on every screen. Colour is clean except the 05 share card and
the 02 disabled violet button.

States missing (only the ones that earn a screen or a line):
- Review found an unmatched fill: covered by link to F06 frozen. Fine, no screen needed.
- Window rollover between payout and claim: 03 warns; no state shows an unclaimed payout after a window closes
  below $5,000 (is the claim lost?). Needs a rule before a screen (question 3).
- Second payout with a high water mark above $5,000 (trader did not claim all, or claimed and grew). The HWM rule
  "or equity right after the last payout if higher" is never shown with a number; one line in 06 or 01 would do.
- Claim sent but not yet arrived (pending tx). COULD; the 1 minute arrival makes it rare.

Redundant: "How payouts work" on 01 overlaps 02; payout history on 05 overlaps the receipt.

## Fix list

MUST
1. 06: remove "Nothing to do" and demote the "Next payout Mar 15" side stat; lead the secondary area with the
   closure risk (window 3 closes Feb 18 00:00 UTC, 2d 16h, needs +$129.80). Today the page says calm and doom at once.
2. 02: resolve "$992.40 on hold" vs "The amount follows equity until you sign"; use "at current equity".
3. 02: add the one line amber warning that window 2 ends Jan 19, before the Feb 15 payout (Decisions, binding).
4. 05: share card chip "$25K account" and "Funded" in violet break the colour rule; use `band-25` neutral and plain text.
5. 05: one primary action that serves the screen: Post on X primary or Trade glass, not Trade violet with share glass.
6. 04: state how the claim interacts with the daily loss limit (a $1,240.50 withdrawal is a 5% plus equity drop).
   Needs Alberto's rule first (question 1); until then the "Loss limits: Unchanged" line is not trustworthy.
7. 01: "End of week 8, Jan 15" is wrong; say "After week 8, Jan 15", and keep Week 5's date (Dec 18) next to "Window 1 ends Dec 20".

SHOULD
8. 05: remove the one row Payout history and the "Arrived" pill (both repeat the lead).
9. 01: cut "How payouts work" to the HWM definition and the claim deadline; remove the restated schedule and fill review item; drop "week 2" from the paragraph.
10. 01: turn the window 1 caption into the amber banner and remove the amber text from the strip (one warning).
11. 02: replace the disabled violet Claim button with a neutral disabled one, or remove it; remove the "In review" pill.
12. 03: rename "Above it" to "Profit above the high water mark"; remove "1 open position, $11,240 of $25,000"; trim the amber banner to 2 lines without restating equity after claim.
13. 03/04: one wording for fees ("No network fee" vs "costs no gas").

COULD
14. 04: show the time the amount was computed, or make it live, since it follows equity.
15. 06: render the $0 history row as a single muted sentence instead of three $0.00 cells.
16. 05: share card subtitle "on funded.onchain.cc".
17. Show one example of a HWM above $5,000 somewhere (06 caption) so the rule is seen with a number.

## Undefined product rules (questions for Alberto)

1. Does a payout withdrawal count as an equity drop for the 5% daily loss rule? If not, does the day's starting
   equity reset to post claim equity?
2. Is unrealized PnL payable (03 includes +$86.30 from an open position)? Or only realized profit, or must positions
   be closed before claiming?
3. If the window ends (or the account closes at max loss) between payout day and claim, is the unclaimed profit
   lost, frozen at payout day value, or still claimable?
4. What happens to an unclaimed payout on the next payout date (Feb 15)? Rolled into the new figure, or expired?
5. Is a trading window "1 month" a calendar month or 30 days? Mockups use 30 days (Dec 20 to Jan 19); a calendar
   month would end Jan 20 and shift every later date.
6. Fill review: is there a promised SLA ("Usually under 24 hours")? What if it runs past the claim deadline?
7. Partial claims: can the trader claim less than the full 80% to keep a cushion before a window end? The 03
   warning would be much simpler if yes.
8. Who pays gas on the USDC transfer, and is "no network fee" a promise?
9. Does the max loss floor stay at $4,500 after a payout, or is it relative to the new HWM? (Mockups assume fixed.)
