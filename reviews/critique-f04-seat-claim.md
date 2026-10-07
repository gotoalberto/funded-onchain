# Critique: f04 Seat claim

Independent review from screenshots only, 9 screens at 1440 wide. Scores: clarity / hierarchy / simplicity / craft / trust.

## 01 Home, request window open (8 / 6 / 7 / 6 / 6)
Question: the season is over, can I request a seat and what would I get?
1. The leading figure is wrong. `$25,000` is huge and reads as a promise, while the thing that makes it true, "Projected: #17 on the board, seat #14", sits right aligned in 14px on the divider line. Fix: make the hero "Seat #14 → $25K" as one unit (seat big, tier pill beside it), and keep $25,000 inside the terms row.
2. Numbers disagree. The pill says "611 requests so far" and the cut block says "552 below the cut"; 611 minus 60 is 551. Screen 03 (612 / 552) is right, this one is not. A pro trader stops trusting the ladder at the first wrong subtraction. Fix: derive both from one value in the fixture.
3. The right rail ends at y≈290 and the bottom 40% of the viewport is black. The "Season 1 result" card is good but floats alone. Fix: move the requirements card under the hero as a compact strip, or let the ladder card run the full 1248 width so the rail is not a lonely island.
Also: "Claims: All profit above $25,000, when flat" here vs "All profit when flat" in the modal. Pick one sentence.
Keep: "No request, no seat. You can withdraw it until the close." beside the button. Best microcopy in the flow.

## 02 Request a seat modal (9 / 8 / 6 / 8 / 8)
Question: confirm the request.
1. The modal re-prints the terms the page above already shows (liquidation, claims, lasts). Confirmation dialogs should say what changes, not re-sell. Fix: keep only Projected seat, tier, "withdraw any time before the close", "one funded account at a time"; collapse terms to one line with a link.
2. Long right aligned values ("$22,500, trails $2,500 below highest equity") make a ragged left edge across the table; the eye zigzags between 96px labels and 280px values. Fix: left align values in a second column at a fixed x.
3. Two exits (X and Cancel) for a two button dialog. Drop the X or the Cancel.
Keep: "Stops rising: At $25,000, from equity $27,500". The clearest explanation of the trailing lock anywhere in the flow.

## 03 Home, seat requested (9 / 9 / 7 / 8 / 9)
Question: where am I in the queue, how many seats are left above me?
1. "Live request board" is a 14px text link at the bottom right of the card, yet it is the natural next step for someone sitting at #14 with 18h to go. Fix: make it a secondary button in the hero beside the stats.
2. The right rail "Your request" card is mostly air: one row and a ghost button. Fix: fold "If granted $25K" and "Withdraw request" into the hero header row; delete the rail on this state.
3. "Above the last $25K seat +24.4 pts" is the most decision relevant number and it has the same weight as "Board rank". Fix: give the margin a green tint and put it first.
Keep: the amber variant "You moved from seat #14 to seat #16 ... from seat #22 it is $5K". Exactly the right event, with the next threshold.

## 09 Live request board (8 / 7 / 5 / 4 / 6)
Question: who has requested, where does the cut sit?
1. Rendering bug: the sticky "Last seat, #60, score 708.3" divider is pinned between rows #4 and #6 and hides row #5 (a clipped avatar pokes out). Meanwhile, at the real cut after #93 teasel, there is only an empty band before the faded rows. Fix: the cut divider lives in the table after the last seat row; when scrolled off, show it as a sticky edge marker at top or bottom, never over a row.
2. "Last seat" is said three times within 140px (top right figure 708.3, ladder "Last seat, #60", plus the table divider). Fix: one source. Keep the big 708.3 block, drop the ladder's cut label on this page.
3. The table is 4 data columns spread over 940px: a ~470px dead gap between Trader and Score, while the "13 trading days at the close, 15 needed" tooltip floats in that gap detached from the "Can't request" badge it explains. Fix: tighten to a 720px table or add a useful column (score margin to the cut); anchor tooltips to their badge.
Also: footer "of 2,314" vs header "1,487 eligible traders" with no explanation; "You to #15" chips are clever but cryptic, say "if they request, you → #15".
Keep: the "You" bar (Seat #14, $25K, 24.4 pts, Worst case seat #16). That is the screen's real answer, well composed.

## 04 Home, cannot request (9 / 7 / 7 / 7 / 9)
Question: why can't I request?
1. Mockup copy leaks into product UI: "Another trader, hollis." sits in the subtitle in product style. Same leak on 05, 07, 08. Fix: move all scenario labels into the dashed mockup note.
2. Two equal halves (failed meter left, passed checks right) split attention. The failed requirement should own the card. Fix: meter full width on top, passed checks as a single quiet line ("Net PnL, Drawdown, Balance: met").
3. "Next chance" card puts the Trade CTA in the header row, far from "Start by Dec 3 to still reach 15", the line that actually motivates it. Fix: put Trade under that column or make "Start by Dec 3" the CTA's caption.
Keep: the segmented 13 of 15 meter with the two red missing days. Instant answer.

## 05 Home, already funded (8 / 7 / 6 / 6 / 8)
Question: I already hold an account, what does the season mean for me?
1. Three text levels stacked under the title (subtitle, 17px statement, then a card) with the 17px line louder than the subtitle and quieter than the title. Fix: merge "One funded account at a time" into the subtitle.
2. "When you can request a seat again" has three cards but the third, "Claiming keeps the account", does not answer the header; the first uses a red X icon for a neutral branch, which reads like an error. Fix: two cards with neutral icons; move the claim note to a footnote.
3. `Funded` + `$25K` as two adjacent badges before Equity is redundant chrome. Fix: one badge "Funded $25K".
Keep: "Funded trading does not count for the season." Precisely the rule a pro would worry about.

## 06 Seat granted, account live (9 / 8 / 7 / 5 / 7)
Question: what exactly do I get, can I trade now?
1. The liquidation track is mis-built: the $22,500 label is offset right of its red tick, a red fill runs left of the liquidation line to the edge (what lives below $22,500?), and "$27,500 / Liquidation locks at $25,000" under one tick is hard to parse. Fix: center labels on ticks, drop the red fill, label the right tick "Lock point $27,500".
2. The explanatory sentence "Trails your highest equity..." sits 8px under the track labels, visually glued. Fix: 20px gap or move it into the terms grid.
3. Card inside card (bordered panel nested in a bordered panel) only on this screen, plus a 928px container while sibling Home states use 1088 or 1248. Fix: one border level, the shared Home width.
Also: "Lasts: No end date" here vs "Until liquidated" on 01/02; "Hyperliquid leverage" is vague, state the max.
Keep: "Trade now" as the single primary with the Own account note beside it. The flow lands cleanly.

## 07 No seat (9 / 7 / 8 / 7 / 9)
Question: why not, and when next?
1. The hero shouts "#69" for a loss. The why is the 7.7 points, set in body text. Fix: lead with "7.7 points short" and demote #69 of 701 to the caption.
2. "Go to Season 2" has the arrow on the left; on 08 the same button has it on the right. Fix: arrow right, everywhere.
3. "Where the seats ended" has a divided card header and ~50px of empty space above the ladder, unlike the ladder cards on 01/03 that have no divider. Fix: one ladder card spec.
Keep: the ladder with "You, seat #69" sitting in the hatched zone past the cut. Final and unarguable.

## 08 Request window missed (9 / 8 / 8 / 7 / 8)
Question: I forgot to request, what now?
1. Three bright violet toggles compete with the violet primary; violet is supposed to mean action. Fix: neutral or muted violet on toggles, or a single "Remind me" control.
2. The hero never says when the next window is; you have to read the toggle rows. Fix: add "Next window: Dec 18, 00:00 UTC, 24 hours" under the title.
3. Hero text block is only 560px wide inside a 1088 card, leaving the right half empty. Fix: put the "would have been $25K" fact as a right side figure, mirroring 05's result card.
Keep: reminders on by default, with the 6h and 1h "if not requested" rules. That is the real fix for forgetting.

## Flow

Overall: 7/10. The content model is strong: every state answers its question in honest, specific numbers, and the tier ladder is a distinctive, reusable asset. What drags it down is craft drift between sibling states and a few number and layout bugs that hit trust.

Patterns across screens:
- Home changes skeleton per state: main + rail at 1248 (01, 03, 07), single card at 1088 (04, 05, 08), single card at 928 (06). The same route should keep one grid.
- Demo scenario copy ("Another trader, hollis.", "Example: kestrel a month later") is set as product subtitles.
- Funded terms are restated in four places with drifting wording (claims, "Until liquidated" vs "No end date").
- Bottom half of the 900px viewport is empty on every Home state; rails end early.
- The ladder is consistent on 01/03/07/09 (good), but cut labels duplicate and card headers vary.
- Violet is used for toggles and links, diluting "primary action".
- "Funded" is violet in the top bar lockup and gold everywhere else.

Prioritized fixes:
1. Fix the board's misplaced sticky cut divider covering row #5 and put the cut after #93 (09).
2. Make every count derive from one value: 611 requests vs 552 below the cut (01), 2,314 vs 1,487 (09).
3. One Home grid for all seat states; pick main + rail at 1248 and fill the rail with the state's secondary info.
4. One "Funded terms" component with fixed wording, used on 01, 02, 06; the modal shows only what the request changes.
5. Lead with the decision number: seat + tier on 01, margin to cut on 03, points short on 07, next window on 08.
6. Move all scenario/demo labels out of subtitles into the mockup notes.
7. Rebuild the liquidation track on 06 (ticks, labels, no red fill) and remove the nested card.
8. Normalize small details: arrow side on "Go to Season 2", single Funded badge, neutral toggles, one ladder card header style, tighter board table.
