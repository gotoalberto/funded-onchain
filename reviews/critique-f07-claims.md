# Critique: f07-claims (Claims flow)

Five desktop screens at 1440. Judged from screenshots only.

## 01 Profit to claim: "How much can I claim now, and what does claiming do to my account?"

Scores: clarity 9, hierarchy 8, simplicity 7, craft 7, trust 8

Problems
1. The breakdown gives Bitso's 20% the same white weight as the trader's 80%. The row that matters ("Your 80% to your Own account ... $738.40") reads like the other two. Fix: make the 80% row the total line, with a hairline rule above it, the value in semibold and USDC after it (the modal has "USDC", this page does not). Set the Bitso row in secondary grey.
2. The copy is clumsy. "Profit above $25,000, all of it" and "Your 80% to your [Own] account" with the chip in the middle of the sentence break the baseline and read like a template with the variables filled in. Fix: "Profit above $25,000", "Bitso share 20%", "To your own account 0x7a3F...c91E". Put the chip at the start of the row, not mid sentence.
3. The reset block ends on "The level then trails your highest equity again and locks at $25,000 from $27,500." That is a rule, not a consequence, and most traders will not parse it. Fix: show the old values dimmed and the new values in white (as screen 03 does; here both are white), and cut the footnote to "Liquidation trails your peak again until it locks at $25,000."

Keep: the hero. "$738.40 yours to claim now" plus the "All positions closed" check answers the question in under two seconds, and a CTA that carries the amount is exactly right.

## 02 Claim profit (modal): "Confirm the claim: all profit, 80% to my own account."

Scores: clarity 8, hierarchy 8, simplicity 5, craft 6, trust 6

Problems
1. The modal repeats screen 01 almost line for line, so it confirms nothing new. What a pro wants at the confirm step is missing: whether it can be undone, the full destination address (or a copy affordance), the network, the time to arrive and any fee. Fix: keep one compact line for the amount and its destination, then add "Irreversible. Arrives in ~1 min on <network>. No fee." Drop the reset table, or cut it to one line ("Funded resets to $25,000, liquidation $22,500").
2. The modal drifts from the page it sits on. Profit is green on the page and white here. The heading is "Then the [Funded] account resets" with a chip here, plain text on the page. "To your [Own] account" is bold here, regular there. It looks like two people built it. Fix: one row component and one heading style for both.
3. The 3-step mixed weight row "To your | Own | account 0x7a3F...c91E | $738.40 USDC" crowds the right edge, and the mono address almost touches the value. Fix: two lines, the label and address on the left and the value on the right, with the address on a second, smaller line.

Keep: the button sizing. Cancel is a quiet pill and the claim button is wide and violet with the amount repeated. That is a clear and safe primary action.

## 03 Profit claimed: "Did it reach my own account, and where does my funded account stand now?"

Scores: clarity 8, hierarchy 7, simplicity 7, craft 7, trust 6

Problems
1. Nothing says the transfer is confirmed. "Claimed" plus a violet hash link reads as submitted, not as settled. Fix: put a green "Confirmed" check with the block and time next to the hero, as screen 01 does with "All positions closed".
2. The footnote holds the most important trust rule, and it is worded wrong: "Counts as a season deposit: no PnL, return or Drawdown effect." Money left the account, so calling it a deposit confuses people, the capital "D" in Drawdown is inconsistent, and the sentence is 11px grey. Fix: give it its own row or line in body size: "This claim does not count against your PnL, return or drawdown for the leaderboard."
3. The subline is a run-on: "80% of $923.00 profit, Bitso $184.60. Sat, Nov 28, 2026, 17:32 UTC." Fix: move the split into the table (it is already in 01 and 02) and keep the date alone under the hero. The two CTAs fight a little because "Trade the funded account" is long. "Trade" alone is enough, with Share as the ghost button.

Keep: the "from to" rows, with the old value in grey and the new one in white and a role chip per row (Own balance, Funded equity, Funded liquidation). This is the best table in the flow. Make 01 and 02 match it.

## 04 Close positions to claim: "I have open positions. What do I need to do to claim?"

Scores: clarity 8, hierarchy 7, simplicity 8, craft 6, trust 5

Problems
1. The numbers do not add up on screen. The unrealized PnL is -$11.12 and +$305.00 (= $293.88), yet the footnote says equity is "$923.00 above $25,000". The missing $629.12 of realized profit is invisible, so a trader will assume a bug. Fix: add a summary strip above the table: "Realized +$629.12, Unrealized +$293.88, At mark +$923.00, about $738.40 to you".
2. The trader's motivation is missing. Screens 01 and 03 lead with a big dollar figure. This one leads with an H2 and never says what closing is worth. Fix: use the same hero pattern, "~$738.40 claimable once 2 positions close", with the mark caveat beside it.
3. The gutters drift. The header text is at x=296, the table cells at 288 and the footnote at 292, while every other screen insets at 296 or 310. Fix: one inner padding for the whole card. Also think about "Close all and claim" as the primary action, with "Close in the terminal" as secondary. Making a pro leave the page to finish is friction.

Keep: the plain, honest table (Market, Side, Size, Entry, Mark, Unrealized PnL) with right-aligned numbers and green/red only on PnL. It looks like a real terminal, not a mockup.

## 05 Nothing to claim: "My account is not above its start. What can I do?"

Scores: clarity 6, hierarchy 5, simplicity 7, craft 7, trust 7

Problems
1. The hero misleads. "$387.70" in the same big white style as "$738.40 yours to claim" reads as money the trader has, and the eye catches it before it reads "below". Fix: lead with what the trader can do, "$387.70 to go" or "Claims open at $25,000", and set the deficit figure in red or neutral grey, never in the positive hero style.
2. The bar is neutral grey and its ends are wrong for the question. It runs from liquidation to start, so the trader sees risk and target as one grey track. Fix: two segments. Liquidation to now shows the buffer, $972.30, tinted toward red as it shrinks. Now to $25,000 shows the gap to claimable, $387.70. Label both on the bar, not in a footnote.
3. The footnote reveals that the trader peaked at $26,140 on Nov 30 and could have claimed then. That is useful but buried, and nothing on Claims shows the history the "Nov 28 claim" link points to. Fix: a "Past claims" list below the card (the lower 65% of the viewport is empty on every screen).

Keep: the single CTA, "Trade the funded account". The page has one way forward, and that is correct.

## Flow

Overall score: 7/10

Repeating patterns
- A strong hero system (64px figure plus a 20px suffix plus a primary pill top right) used on 01, 03 and 05, broken on 04 and misused on 05.
- Row tables are inconsistent: inset box with 310 padding (01, 03), full bleed (04), no box (05), and different "from to" treatments (all white on 01 and 02, dim to bright on 03).
- Role chips (Own, Funded) are used inconsistently: mid sentence, row start, in a heading, or missing.
- The key rules sit in 11px grey footnotes (trailing liquidation, claim does not hit PnL, mark versus close).
- Every screen leaves about 60% of the viewport black, and the Claims tab has no claim history.
- USDC appears as a unit only in the modal.

Prioritized fixes
1. Screen 04: show realized plus unrealized so it adds up to $923.00, and lead with the estimated $738.40 the trader unlocks by closing.
2. Screen 05: stop showing a deficit in the positive hero style. Lead with "$387.70 to go" and split the bar into buffer and gap.
3. Screen 02: turn the modal into a real confirmation (irreversible, network, ETA, fee, full address) and drop the duplicate reset table.
4. Screen 03: add an explicit "Confirmed" state and promote "does not count against your PnL or drawdown" from footnote to body text, with "deposit" removed.
5. Add a "Past claims" list under the card on every Claims state (date, amount to own, Bitso share, tx).
6. One row component for the whole flow: chip at row start, dim old value to white new value, 80% total line emphasised, USDC unit everywhere.
7. Fix the inner padding of 04 (288/292/296) to match the 296/310 grid of the other screens.
8. Rewrite the copy without template filler: "all of it", "Your 80% to your Own account", the trailing liquidation sentence, and the run-on subline on 03.
