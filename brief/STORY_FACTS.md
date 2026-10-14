# Story facts (the truth every screen must agree with)

Product: onchain.cc Funded. Every trader has their own 30-day qualification window, starting the day they clear the entry gate. The frozen score on day 30 sets a tier. A seat in that tier is offered the moment one frees up, to the highest-scoring qualified trader in the tier. The trader trades our USDC and keeps 80% of the profit.

`MODEL.md` is the seat allocation model as decided. This file turns it into the rules, words and demo data the screens use. Where an older brief (`BRIEF.md`, `FINAL_PASS.md`, `ACCOUNT_BASE.md`, `DAILY_PNL.md`) clashes with this file, this file wins.

## Rules

- **Entry gate:** $100 deposited, $1,000 of volume traded, 10 closed trades. Clearing it starts the trader's window and puts them on the leaderboard. Before that, the Account shows the three steps.
- **Launch:** Oct 20. Traders who cleared the gate before launch, with past onchain.cc trades, start their window on Oct 20.
- **Window:** 30 days from the start date, the trader's own. No shared rounds, no group start, no shared freeze date. It cannot be restarted early. On day 30 the score freezes. If the trader keeps trading, the next window starts the next day, with no gap.
- **Score:** 0 to 100, whole numbers. Provisional during the window, frozen on day 30. Built from return for the risk taken (75%), worst trade (15%) and steadiness (10%). Volume, trade count, win rate and balance are not score factors. Withdrawals never affect the score.
- **There are no other requirements.** No 20 trades, no 15 trading days, no "in profit so far", no 25% drawdown floor. The score alone decides. Remove every requirement checklist; the only checklist left is the entry gate.
- **Tiers:** the frozen score sets the tier, and the tier sets the seat.

  | Score | Tier | Seat (USDC traded) | Daily pause at | Seat closes at |
  |---|---|---|---|---|
  | 50 to 55 | $500 | 500 USDC | $125 lost | $250 lost |
  | 56 to 61 | $1K | 1,000 USDC | $250 lost | $500 lost |
  | 62 to 67 | $2.5K | 2,500 USDC | $625 lost | $1,250 lost |
  | 68 to 73 | $5K | 5,000 USDC | $1,250 lost | $2,500 lost |
  | 74 to 79 | $10K | 10,000 USDC | $2,500 lost | $5,000 lost |
  | 80 or more | $20K | 20,000 USDC | $5,000 lost | $10,000 lost |

  Below 50 the trader does not qualify; the next window has already started.
- **Seats per tier (demo data):** $500: 30, $1K: 24, $2.5K: 12, $5K: 6, $10K: 3, $20K: 2. 77 seats, $169,000 of USDC.
- **Qualification lasts 30 days** from the freeze. While valid the trader is "in contention" in their tier. The next window, if it also qualifies, renews it. Stop trading and it lapses after 30 days.
- **Offers:**
  - A seat is offered the moment it frees up, to the qualified, active trader with the highest score in that tier. Not first come, first served.
  - 48 hours to accept. Declined or expired, it goes to the next highest score in the tier.
  - A seat from a lower tier can be offered first. Taking it is allowed; the qualification for their own tier stays valid while it lasts. Declining it changes nothing.
  - One seat at a time. A funded trader keeps trading and competing with their own money, but gets no offers while holding a seat.
  - There is no request step, no request window and no waitlist. The trader waits for an offer; the screen shows their place in their tier ("2nd in contention in the $2.5K tier").
- **Funding:** accepted seats are checked and funded once a day, on the daily run at 14:00 UTC. At most a day between accepting and trading. Say "Funded on today's run, 14:00 UTC" or "Funded on the next run, 14:00 UTC".
- **Trading the seat:**
  - Leverage up to 10x on the seat's USDC. A seat above 10x is frozen: the ticket blocks orders that would take it above 10x and warns from 8x.
  - Daily pause: lose 25% of the seat's USDC in a UTC day and new trades stop until 00:00 UTC. Closing is always allowed.
  - The seat closes at a loss of 50% of its USDC. The most a seat can lose is its USDC. Nothing else closes a seat (no "days below start").
  - At 10x, the pause comes at a 2.5% move against the trader and the close at a 5% move. Use this in the pre-trade impact line.
  - Allowed markets only (keep the "Market not allowed" screen).
- **Payouts:** any time the seat has no open positions. All profit above the start, 80% to the trader's own account, 20% to us. The seat then resets to its starting USDC. Payouts stay on the public Payouts board and the trader's profile for good, even after a seat closes.
- No KYC. Never mention Bitso or Hyperliquid, never link off the site.

## Leaderboard

- One board of every trader with an active window, ranked by score. Columns: rank, trader, score (provisional, or frozen with a small "Frozen" mark), day (for example "18/30"), return, max drawdown, tier. The trader's own row is pinned.
- Seat map: one row per tier, top tier first: tier, score range, seats held of total, seats open now, traders in contention, top score in contention ("Next offer: wren, 79"). The trader's own marker sits on their tier. This replaces the old rank zones and the cut line.
- Filters: All, In contention, My tier, Around me.
- Funded traders and Payouts tabs stay; seat sizes are the six tiers.

## Words

- "Qualification" in chips and labels, "window" or "your window" in sentences. Status line during a window: "Day 18 of 30 · Provisional score 64 · $2.5K tier".
- Once qualified: "Qualified · $2.5K tier · In contention until Dec 19 · Score 66".
- "Tier" for the score band ($500 tier ... $20K tier). "Seat" for the funded side ("a $2,500 seat"). "My account" or "your own account" for the trader's money.
- "Offer", "Accept seat", "Decline". "In contention". "Daily run".
- "Payout", never "claim".
- Gaps in points: "4 points to the $5K tier", "9 points to qualify". Qualify at 50.
- Never: request window, request seat, waitlist, score to beat, the bar, seat number, days below start, position cap, epoch, season, cycle, liquidation, lock point, percentile, pilot, time weighted.

## kestrel's timeline (main character)

1. **Oct 20, launch day:** signs up with $0, deposits $250 by card, makes two trades ($600 then $400 of volume). Deposit and volume done, 2 of 10 closed trades. Not on the board yet: "8 more closed trades to start your window."
2. **Oct 21:** tenth closed trade. Gate cleared, window 1 starts: Oct 21 to Nov 19. "You're on the leaderboard": #812 of 1,040, day 1 of 30, provisional score 40. Own balance $254.
3. **Nov 7, day 18 of 30:** provisional score 64, #17 of 2,314, $2.5K tier, 4 points to the $5K tier. Return +$413, max drawdown 11.4%. Own balance $1,284.
4. **Nov 19, day 30:** score freezes at 66. Qualified, $2.5K tier, in contention until Dec 19, 2nd in contention in the $2.5K tier. Own balance $1,370. Window 2 starts Nov 20 and runs to Dec 19.
5. **Nov 20:** a $1,000 seat frees up and is offered to kestrel first. kestrel declines and waits for $2.5K.
6. **Nov 21, 09:12 UTC:** a $2,500 seat frees up. kestrel is now 1st in contention in the $2.5K tier, so the offer comes straight away. Accepts at 09:40.
7. **Nov 21, 14:00 UTC:** funded on the daily run. A $2,500 seat, 2,500 USDC, up to 10x. Daily pause at $625 lost, closes at $1,250 lost.
8. **Nov 30:** seat balance $2,962, profit +$462, loss room $1,712 before the seat closes, today's loss $180 of $625. Closes 2 positions and takes a $369.60 payout ($92.40 to us). The seat resets to 2,500 USDC. Own account goes from $1,320 to $1,689.60.
9. **Dec 1:** a bad run. Near the daily pause: $475 lost today, "$150 left before today's pause." Then paused until 00:00 UTC, seat $1,875.
10. **Dec 2:** the seat closes at $1,250 lost (balance 1,250 USDC). The $369.60 payout stays kestrel's. Window 2 is still running (day 13 of 30, Nov 20 to Dec 19). Own account $1,690.
11. **Dec 3:** My money, own $1,690. Deposit and withdraw flows run on this balance.
12. **Dec 10, day 21 of 30 (window 2):** provisional score 59, #33 of 2,380, $1K tier. Own $1,812.
13. **Dec 19:** window 2 freezes at 59. Qualified, $1K tier, in contention until Jan 18. Window 3 starts Dec 20. Waiting for a $1,000 seat, 3rd in contention.

Assumption used until Alberto decides: accepting a seat uses up that qualification. After a seat closes, the trader is back in contention with their next qualifying window (for kestrel, window 2 on Dec 19). Screens do not promise an offer before then.

## Variants (other people or other outcomes, labelled "Variant")

- **marten:** past onchain.cc trades cleared the gate before launch, so the window started on launch day, Oct 20.
- **Not qualified:** a window frozen at 41. "Window 2 started today." 9 points to qualify.
- **Waiting for an offer:** qualified, 3rd in contention in the tier, no seat free yet.
- **Lower seat offered:** a $1,000 seat offered while qualified for $2.5K. Take it now or keep waiting; the $2.5K qualification stays valid until Dec 19.
- **Offer expired:** 48 hours passed, the seat went to the next trader. Still in contention.
- **Qualification lapsed:** stopped trading, 30 days passed. Trade again to start a new window.
- **Already funded:** halyard holds a seat, keeps competing with own money, gets no offers.
- **Platform incident:** halyard, trading paused, positions closed, seat safe, payout available because flat.

## Canonical board, Nov 7 (use the same aliases and scores on every board, profile and "Around you")

Provisional scores of traders with an active window. Tier follows from the score.

| Rank | Trader | Score | Day | Tier |
|---|---|---|---|---|
| #1 | wren | 84 | 22/30 | $20K |
| #2 | osprey | 81 | 9/30 | $20K |
| #3 | marlowe | 79 | 26/30 | $10K |
| #4 | vandal | 77 | 14/30 | $10K |
| #5 | sable_fx | 76 | 30/30 | $10K |
| #6 | corvid | 75 | 5/30 | $10K |
| #7 | 0x91c2…4ab0 | 74 | 19/30 | $10K |
| #8 | pike | 73 | 11/30 | $5K |
| #9 | tern | 72 | 27/30 | $5K |
| #10 | heron | 71 | 3/30 | $5K |
| #11 | lumen | 70 | 16/30 | $5K |
| #12 | juno_t | 69 | 24/30 | $5K |
| #13 | ash | 68 | 8/30 | $5K |
| #14 | quill | 67 | 20/30 | $2.5K |
| #15 | merlin | 66 | 12/30 | $2.5K |
| #16 | fen | 65 | 29/30 | $2.5K |
| #17 | kestrel | 64 | 18/30 | $2.5K |
| #18 | rook | 64 | 6/30 | $2.5K |
| #19 | bramble | 63 | 21/30 | $2.5K |
| #20 | nyx | 62 | 15/30 | $2.5K |

2,314 traders with an active window on Nov 7.

Seat map on Nov 7 (seats held of total, traders in contention, next offer goes to the top score in contention):

| Tier | Score | Seats held | In contention | Next offer |
|---|---|---|---|---|
| $20K | 80 or more | 2 of 2 | 3 | atlas, 83 |
| $10K | 74 to 79 | 3 of 3 | 5 | sable_fx, 77 |
| $5K | 68 to 73 | 6 of 6 | 8 | ibis, 72 |
| $2.5K | 62 to 67 | 12 of 12 | 14 | morrow, 67 |
| $1K | 56 to 61 | 23 of 24 | 19 | 1 offered, 31h left |
| $500 | 50 to 55 | 28 of 30 | 26 | 2 offered |

Funded traders include halyard ($10K seat). Use realistic sizes from the six tiers on the Funded traders and Payouts boards.
