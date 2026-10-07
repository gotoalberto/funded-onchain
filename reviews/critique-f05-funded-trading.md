# Critique: f05-funded-trading (Operating the funded account)

Six desktop screens at 1440. Judged from screenshots only. I checked the arithmetic on every visible figure; almost all of it reconciles, which is rare and is the flow's biggest asset. The problems are framing, not maths.

## 01 Home, funded account: "How is my account doing against its rules?"

Scores: clarity 8, hierarchy 7, simplicity 6, craft 7, trust 8

1. **The Claim card answers a question nobody asked yet, and hides the one number it should show.** Top right, "Close every position first. All profit above $25,000: 80%... Then back to $25,000, liquidation $22,500." is a paragraph of rules with a dead-looking dark button "Close positions to claim". The trader is up $923 and the card never says so. Fix: lead with "$923.00 claimable, $738.40 to you" as the figure, one line "Close 2 positions to claim", and move the rules behind "How rules count".
2. **The chart has no y axis and two lookalike guide lines.** "Lock $27,500" dotted and "Start $25,000" dashed both sit as flat grey lines; the Start chip sits *below* its line, the Lock chip *on* it. The liquidation stair has no value at its right end, so the chart repeats $23,423 nowhere. Fix: right-edge value tags for equity (violet), liquidation and lock, chips all on the same side of their line, drop "Start" or make it a faint baseline.
3. **Three "Funded" badges in one viewport** (next to the logo, in the account pill, on the hero) plus "Own" on the right card. It reads like a component library demo. Fix: keep the account pill as the single source of mode, drop the badge next to the logo, keep the hero badge only.

Also: two inline links ("How rules count", "What changes") compete in the Liquidation card; one is enough. "No new seat while this one is live" is internal jargon. The bottom 100px and the right column below 383px are empty while the positions table is squeezed into 880px.

Keep: the hero sentence "$2,500.00 above liquidation. New high today." It answers the screen's question in five seconds.

## 02 Trade, funded account: "Trade within the rules, with the risk of each order shown before I send it."

Scores: clarity 7, hierarchy 7, simplicity 5, craft 7, trust 6

1. **Two different "how much room do I have" figures that disagree.** The rules panel says "All stops fill -$544.08, $1,955.92 left"; the ticket says "At stop: -$205.99 with fee, $2,294.01 above liquidation", which ignores the two positions already open. Screen 05 then reveals the real figure ($1,749.93). A pro will catch this on the first order. Fix: the ticket shows the combined figure: "If every stop fills: $1,749.93 left above liquidation (was $1,955.92)".
2. **The rules panel slider is an unlabelled scale.** Track with two bare tick marks at ~1173 and ~1265 and a violet thumb near the right end: which end is liquidation, which is lock, what are the ticks? Fix: label both ends ($23,423 liquidation, $27,500 lock), put a marker for "after all stops" on the track, and drop the decorative ticks. And the thumb should not be violet (that is the primary action colour).
3. **The chart is overloaded with floating labels.** "+$400.00" and "-$200.00" float mid-plot over candles (the -$200 label collides with candles at ~2,644), four price-line chips stack on the left edge, and the "Liquidation 2,481.54, XAU alone" chip sits in the candle area. Fix: P/L amounts go into the right-edge chips of the draft lines ("TP 2,741.60 +$400"), nothing floats in the plot area.

Also: fees are in the ticket figure but not in the table's "Loss at stop" column; pick one. The "Underlying market" bar glyph in the header is unreadable. "Size by risk" with the Stop field squeezed beside the USD amount reads as two unrelated inputs; label it "Risk $200 to stop 2,621.60". The ~120px of dead space under the table.

Keep: risk-based sizing with "5.00 oz, $13,308.00, added to your long." and the "Ready to send" pre-flight box above the button. That is exactly the "risk before I send it" promise.

## 03 Order blocked: "Why can't I send this order?"

Scores: clarity 8, hierarchy 8, simplicity 7, craft 7, trust 8

1. **The block arrives too late.** Nothing in the header says ORDI-USD is not allowed; the trader picks the market, reads the chart, types a size, and only then sees red at the bottom of the ticket. Fix: a "Not allowed on funded" chip next to "ORDI-USD" in the market header and in the market picker list, the ticket box stays as confirmation.
2. **The ticket silently switched from "Risk $" to "Size"** and lost its stop. It makes the screen look like a different ticket. Fix: keep the same mode as screen 02 so the only change is the block.
3. **Red is the wrong tone for a rule, not a loss.** Red is PnL language in this product; the block box borrows it. Fix: neutral or amber border with a lock icon, matching the locked button.

Also: "There it does not count for the season." floats under the second button as orphan copy; fold it into the button sublabel.

Keep: the two exits ("Pick an allowed market, 9 markets" and "Trade ORDI from your own account") and "Nothing was sent." That is a model error state.

## 04 Switch account: "Move between my own account and the funded one."

Scores: clarity 8, hierarchy 8, simplicity 8, craft 8, trust 8

1. **The draft order survives the switch with no warning.** Draft TP/stop lines and "Place long on funded account" stay behind the overlay. Fix: footer line "Your draft order will move to the account you pick" or clear it, and say which.
2. **Own card lacks its live state.** Funded shows equity and liquidation; Own shows only a balance, no open positions or PnL. Fix: "$1,284.20 balance, 1 position, +$12.40".
3. **The dropdown covers the rules panel**, the one thing the flow says must always be in view. Fix: anchor it lower or keep the liquidation figure visible in the pill itself ("Funded $25,923, liq $23,423").

Keep: "equity" vs "balance" labels and "Not counted on the leaderboard" vs "#44 on the Season 2 board". The no-mixing promise is visible.

## 05 Order placed: "My order went in. What did it change in my limits?"

Scores: clarity 5, hierarchy 5, simplicity 6, craft 6, trust 7

1. **The change in limits is the smallest text on screen.** The real change is "$1,955.92 left" becoming "$1,749.93 left", and it has no "was". The only "was" is a grey "was $2,500.00" under a $6.99 move caused by the fee. Fix: highlight the "left" row for a few seconds with "was $1,955.92", move the slider thumb's "after stops" marker visibly.
2. **The toast is in the wrong place.** Bottom right, below the table, away from the ticket the eye is on. Fix: show the fill confirmation in the ticket area, where the "Ready to send" box was, for 4 to 6 seconds.
3. **The ticket reset looks broken.** Price and Stop show placeholders, TP and the pre-flight box vanished (the panel shrinks ~200px), yet "Place long on funded account" is still violet and enabled with no price. Fix: keep the layout height, disable the button until a valid order exists.

Also: the XAU row now has two TP/SL pairs stacked; fine for accuracy, but the chart now shows two TPs and two SLs for one position with no grouping.

Keep: the "+5.00 now" under 18.90 oz and the highlighted row. Every figure (avg entry 2,662.04, liquidation 2,529.49, open orders 4 to 6) reconciles.

## 06 Liquidation locked: "I'm 10% up. Where is my liquidation level now, and why won't it rise further?"

Scores: clarity 8, hierarchy 6, simplicity 7, craft 6, trust 5

1. **"Example: Mon, Dec 7, 14:03 UTC." leaks mockup copy into the product.** Fatal for trust in a review. Fix: "Locked Dec 7, 13:41 UTC, when equity passed $27,500 (+10%)."
2. **Wrong primary action.** The news is "$2,562.00 you can claim", yet Trade is the violet button and "Claim $2,562.00" is the dark secondary. Fix: on this state Claim is primary, Trade becomes a text link or secondary.
3. **The chart drifted from screen 01.** No "Start $25,000" line here, the liquidation end has no value, the dashed projection is unexplained, and the "Liquidation" chip hides the last stair step. Fix: same guide set as 01, with a tag "Liquidation $25,000, locked" at the end of the flat line.

Also: three competing figures ($25,000, $2,562.00, $27,562.00) with equity demoted to a small right-aligned block; equity should sit beside the liquidation, same size tier. "Then $25,000, liquidation $22,500" as a table row is cryptic; say "After the claim: $25,000 equity, liquidation back to $22,500".

Keep: "It never rises above the $25,000 Bitso put in... it can end slightly below $25,000." Honest, specific, the exact "why" the screen owes.

## The flow

Overall: **6.8 / 10.** The numbers are excellent; the presentation of risk is not yet one system.

Patterns across screens:
- One concept, three names and three calculations: "away", "above liquidation", "left" (rules panel vs ticket vs toast). Fees included in some places, not others.
- A grey explanatory sentence under every block (footnote disease): table footers, card subtitles, chart captions. Most could be tooltips or go.
- Charts without y axes and with inconsistent guide lines between 01 and 06.
- Primary action does not follow state: Trade stays violet even when Claim is the job.
- Two layouts: Home is a centred 880+360 column, Trade is edge to edge from 16px; the left edge jumps on every tab switch. 100 to 200px of dead space at the bottom of every screen.
- Badge inflation: "Funded" appears 3 times per viewport.

Prioritized fixes:
1. One risk figure everywhere: "left above liquidation if every stop fills", fee included, shown in the ticket before sending and with a "was" after filling (02, 05).
2. Remove "Example:" from 06 and audit every screen for mockup copy.
3. Flag disallowed markets in the header and picker before the ticket (03).
4. Make Claim primary when profit is claimable; show the claimable figure on 01 even when positions are open.
5. Label the rules slider: both ends, current, after-stops marker; not violet.
6. One chart grammar for 01 and 06: y value tags on the right edge, same guides, no chips covering data; on Trade, no floating P/L labels in the plot.
7. Fill confirmation inside the ticket, layout height stable, button disabled on empty price (05).
8. Cut repeated "Funded" badges and the footnote sentences; align Home and Trade container edges.
