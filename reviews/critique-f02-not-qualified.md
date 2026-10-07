# Critique: f02 Not qualified yet

Six screens, desktop 1440. Judged from screenshots only.

## 01 Home, nothing met yet ("What do I need to do to get on the board?")

Scores: clarity 7, hierarchy 7, simplicity 6, craft 6, trust 6

Problems
1. The headline says "Hold $100 ... to start", yet trades (5 of 10) and volume ($410) are already half done. The page reads as three equal chores when it is really one blocker plus two partials. Fix: lead with the blocker and name the rest in the same sentence ("Deposit $100. Then 5 trades and $590 of volume put you on the board.").
2. The right panel is a wall of 12px grey text: trading days, PnL, drawdown, season close, seat range, 60 seats, all before the trader is even on the board. It also says "22 days left" while the header says "21d 15h" and screen 03 says "21 days left". Fix: cut it to the trading days bar plus one line ("Seats need 15 trading days. 4 so far."), push the rest behind a "How seats work" link, and round days the same way everywhere.
3. The action column is ragged: Deposit (violet), Trade (dark), then nothing for volume. Below the card, 450px of empty black. Fix: give volume the same Trade action or merge trades and volume into one "Trade" row with two bars; use the empty space for a compact "what the board looks like" preview or simply center the content vertically less top heavy.

Keep: the three row checklist with "$0 of $100" right aligned figures and a single violet Deposit. It is the right skeleton.

## 02 Deposit ("How do I fund my own trading account?")

Scores: clarity 8, hierarchy 8, simplicity 7, craft 7, trust 6

Problems
1. Two addresses on one screen: "Your address on Arbitrum 0x4E1d...A9b3" and "Lands in Your own account, 0x7a3F...c91E". A pro will stop and wonder which one is real. Fix: keep only the deposit address in full; rename the second line "Credited to: Own account" without a hex, or show it only on hover.
2. "More" wraps onto its own line under six chips, which looks like an overflow bug. Fix: either fit all chips on one row with "More" inline at the end, or use a single network select with the last used network preselected.
3. The QR center logo is a flat light blue square that reads as a placeholder, and "Fee and minimum: None" contradicts the $100 the trader came here for. Fix: use the real Arbitrum mark; change the row to "Fee: none. $100 counts toward the board."

Keep: the "Waiting for your deposit." live strip and the full width Copy address button. Exactly the right primary action.

## 03 Home, in progress ("How close am I?")

Scores: clarity 9, hierarchy 8, simplicity 7, craft 6, trust 7

Problems
1. The subtitle "Three $60 trades held a minute cover both" is a riddle: 3 x $60 is $180, not $360, unless the reader knows volume counts both fills. Fix: "Three trades of $60 or more, open and closed, count $120 of volume each."
2. Row heights jump: the met balance row loses its bar and gains a source line, so the three rows no longer share a rhythm, and the green "Met" pill sits in the button column looking like a disabled button. Fix: keep the bar (full, green) on met rows and put a check before the figure instead of a pill in the action slot.
3. The dashed "MOCKUP" card sits in the right column in the shipped frame. Fine for review, but it hides that the real right column on this state has only one small card. Fix: decide what lives there for real (trading days plus recent trades) before the next review.

Keep: the headline as the remaining gap ("3 more trades and $360 of volume"). Best headline in the flow; every Home state should be written like this.

## 04 Home, on the leaderboard ("I made it. Where do I stand?")

Scores: clarity 7, hierarchy 6, simplicity 5, craft 5, trust 5

Problems
1. Two hero numbers compete: "#812" at 56px left and "402.1" score right, plus a second message line ("10 more trading days to request a seat") that is the real news. Fix: keep #812 as the hero, move score into the subline ("Score 402.1, +282.8 to seat #60"), drop the floating score block.
2. The seat ladder is not to scale and badly balanced: five zones crammed into the left 60%, a long empty grey bar, a vertical cutoff line, then "You" floating beyond it as if you were ahead of seat #60. The zone chips use gold, orange, blue and two greys with no legend. Fix: draw the ladder by score with "You" on the left of the cutoff, one accent for the trader (violet) and neutral chips for zones; put seat count and amount in one label ("#7 to #21, $25K").
3. The numbers do not add up for a trust minded trader: balance $255.55 after a $250 deposit, but Net PnL +$9.85; the drawdown note ("trails your highest equity, $258.40, by $25.00 and stops at $250.00 from $275.00") needs three reads. Fix: make PnL reconcile with the header or show "incl. fees / unrealised" inline; rewrite the rule as "Your floor: $233.40. It rises with your best equity and stops rising at $250."

Keep: the right panel checklist "To request a seat" with circle states. Clear, scannable, and the one open item (trading days) is obvious.

## 05 Choose an alias ("How will others see me on the board?")

Scores: clarity 9, hierarchy 9, simplicity 8, craft 8, trust 8

Problems
1. The input shows an "@" prefix but the board preview shows "kestrel" with no "@". Fix: pick one; drop the "@" from the input.
2. The avatar "K" for kestrel matches the account avatar "K" in the header by coincidence; with any other alias it will not, and the trader cannot see where the avatar comes from. Fix: show the real avatar source or derive it from the wallet, and say so.
3. "Shown with your wallet, 0x7a3F...c91E, on the board and share cards" is useful but small and grey under the preview, where privacy minded traders need it most. Fix: put it inside the preview row as the secondary line under the alias.

Keep: the live "Preview on the board" row with rank, score, PnL and seat state. It answers the question in one glance.

## 06 Home, new to onchain ("When can I realistically request a seat?")

Scores: clarity 7, hierarchy 7, simplicity 6, craft 6, trust 7

Problems
1. The headline "Your first seat request: Dec 18" is honest and strong, but the caption under it starts with "Example: a trader new to onchain.cc ..." which is mockup scaffolding leaking into the hero. Fix: remove the "Example" line from the design; put the reason in the subline ("Season 1 leaves you 12 trading days, seats need 15.").
2. The page shows two seasons at once: the left card is "Now: get on the Season 1 board", the right card is "Season 2, your path to a seat", and the header timer counts Season 1. The trader has to reconcile three timelines. Fix: frame the left card as "Get ready in Season 1 (no seat possible)" and highlight Dec 18 in the right timeline as the one date that matters.
3. The timeline nodes are all identical hollow circles; nothing marks today or the critical date. Fix: fill the "24 hours to request a seat, Dec 18" node in violet and add a "Today, Nov 6" marker above the first node.

Keep: the right timeline itself. Four dated steps with UTC times is exactly what a pro wants.

## The flow

Overall: 6.8 / 10

Patterns that repeat
* Every Home has a timestamp under the headline ("Oct 27, 08:30 UTC, your first visit") that reads like debug output and adds nothing.
* The "Own" chip appears in the header, rows, modals and panels. Overused, it becomes noise and still never explains itself.
* The right column is a dumping ground for rules in small grey text; it changes purpose on every screen (rules, mockup note, checklist, timeline).
* Day counts are inconsistent (22 days left, 21d 15h, 21 days left).
* Progress bars are white on grey everywhere; violet appears only on buttons, green only on one pill, so progress never feels like progress.
* The lower half of the 1440x900 viewport is empty on every Home.
* When the copy is a gap ("3 more trades and $360 of volume") the screen is excellent; when it is a rule, it is dense and hard.

Prioritized fixes
1. Rewrite every Home headline as the remaining gap or the date, and remove the timestamp line under it.
2. Rebuild the seat ladder on 04 to scale by score, with the trader left of the cutoff and one accent colour.
3. Make every number reconcile: PnL versus balance, days left everywhere, volume math in plain words.
4. Give the right column one job per state and cap it at three lines of rules plus a "How seats work" link.
5. Show one address in the deposit modal and fix the "More" wrap.
6. Unify checklist rows: same height, bar always present, green full bar plus check when met, an action on every open row.
7. Use "Own" once (header balance) and drop it from rows and modal titles.
8. Remove mockup scaffolding from frames ("Example:", dashed MOCKUP card) before the next critique round.
