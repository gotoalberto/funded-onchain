# Open questions on the rolling windows model (2026-10-14)

The mockups take an answer for each so the screens are complete. Each line says what the mockups assume today.

## Product

1. **Does accepting a seat use up the qualification?** Assumed yes: after a seat closes, the trader is back in contention only with their next qualifying window.
2. **Lower tier seat taken while qualified higher.** MODEL says the own tier qualification stays valid, but one seat at a time. Assumed: holding the lower seat blocks offers; the higher qualification only matters if the lower seat closes before it lapses. Is an upgrade (swap the lower seat for the higher one) intended?
3. **Who gets a lower tier seat first** when that tier has its own traders in contention. Assumed: the tier's own traders first; higher tier traders only when nobody in that tier is in contention.
4. **Seats per tier and total USDC.** Demo: 30, 24, 12, 6, 3, 2 (77 seats, $169,000).
5. **Daily run time.** Demo: 14:00 UTC.
6. **Launch date and pre-launch traders.** Demo: launch Oct 1, first freezes Oct 30.
7. **Lapse and restart.** Assumed a new window starts on the first closed trade after a lapse. Does it need the full entry gate again?
8. **Score while funded.** Assumed the own account keeps its windows running while the trader holds a seat, with no offers until the seat ends.
9. **Leverage base.** Assumed leverage is measured on the seat's starting USDC. On the current balance, a seat near its daily pause runs higher leverage on the same positions.
10. **Above 10x.** Assumed the ticket blocks orders past 10x and warns from 8x, and the keeper freezes the seat only if price moves take it past 10x. What does "frozen" allow: reduce only, until when?
11. **Payout timing.** Assumed paid straight away when flat.
12. **Volume for the gate.** Assumed opening and closing both count toward the $1,000.

## Engineering (from MODEL.md)

1. Real time offers ranked by score within a tier, with checks and funding on one daily run.
2. Keeper freezing accounts above 10x and applying the daily pause and close per tier in USDC.
3. Score pipeline per rolling window, against a fixed reference pool recalibrated quarterly.
4. Linked wallets funding each other check on staggered windows.
5. Guardian signing automated before launch so the daily run can become instant.
