# Funded Accounts: Rolling Entry Windows

There is no shared round to wait for and no group start date. Every trader gets their own 30-day qualification window, starting the day they clear the entry gate. Your score decides your seat.

## The short version

- Your window is your own. It starts when you clear the entry gate, not when a group does.
- You trade for 30 days. On day 30 your score freezes.
- Your score sets your tier. You qualify at 50, and every 6 points steps you up a seat, to the top tier at 80.
- A seat is offered the moment it frees up, to the highest-scoring active trader in that tier. Accepted seats are funded on a daily run.
- Qualification lasts 30 days. Keep trading and your next window renews it.

## 1. Entry

You start your 30-day window once you clear the entry gate:

- $100 deposited
- $1,000 of volume traded
- 10 closed trades

Everyone who clears the gate before launch starts their window on launch day. From then on, every trader starts on the day they clear the gate.

## 2. Your window

- **Length:** 30 days from your start date.
- **Fixed:** you cannot restart a window early. Your score freezes on day 30.
- **Back to back:** if you do not qualify, your next window starts the following day. There is no gap and no waiting for a new round.

What you see during your window:

> Day 18 of 30 · Provisional score 58 · $1K tier

## 3. Your score sets your tier

The score runs from 0 to 100. Your frozen score on day 30 places you in a tier. The tier sets the USDC you trade.

| Score | Seat (USDC you trade) |
|---|---|
| 50 to 55 | $500 |
| 56 to 61 | $1,000 |
| 62 to 67 | $2,500 |
| 68 to 73 | $5,000 |
| 74 to 79 | $10,000 |
| 80 or more | $20,000 |

Below 50, you do not qualify. Your next window starts the next day.

## 4. Qualification lasts 30 days

- A qualifying score keeps you in contention for a seat in your tier for 30 days.
- Keep trading and your next window renews your qualification. A trader who keeps scoring stays in contention without a break.
- Stop trading and your qualification lapses after 30 days.

What you see once you qualify:

> Qualified · $1K tier · In contention for 30 days · Score 58

## 5. How seats are offered

- **When:** a seat is offered the moment it frees up. No offer days, no waiting for a batch.
- **Who gets the offer:** the qualified, active trader with the highest score in that tier. Not first come, first served: the score decides.
- **48 hours to accept.** If the trader does not accept, the seat goes to the next highest score in that tier.
- **Taking a lower seat:** if a seat in a lower tier is offered to you first, you can take it now. You keep your qualification for your own tier while it is valid.
- **One seat at a time.**
- **Funding:** accepted seats are checked and funded once a day, at a set time. A trader waits at most a day between accepting and trading.

Offers happen in real time. Checks, contract setup and funding run as one daily batch, so the team works to a schedule while every trader keeps their own window. Once funding is fully automated, the daily run can become instant.

## 6. Trading the seat

- **Leverage:** up to 10x on the seat's USDC. Accounts above 10x are frozen.
- **Daily pause:** trading pauses until 00:00 UTC if the seat loses 25% of its USDC in a day.
- **Seat closes:** at a loss of 50% of its USDC.
- **Most a seat can lose:** its USDC.

| Seat (USDC) | Daily pause at | Seat closes at |
|---|---|---|
| $500 | $125 lost | $250 lost |
| $1,000 | $250 lost | $500 lost |
| $2,500 | $625 lost | $1,250 lost |
| $5,000 | $1,250 lost | $2,500 lost |
| $10,000 | $2,500 lost | $5,000 lost |
| $20,000 | $5,000 lost | $10,000 lost |

At 10x, the daily pause comes at a 2.5% price move against the trader and the seat closes at a 5% move.

## 7. Payouts

- 80% of profit to the trader, 20% to onchain.cc.
- Paid any time the seat has no open positions.
- After a payout the seat resets to its starting USDC.

## Example: one trader

| Date | What happens |
|---|---|
| Day 0 | Deposits $100, trades $1,000 over 10 closed trades. Window 1 starts. |
| Day 30 | Score freezes at 41. Does not qualify. Window 2 starts the next day. |
| Day 61 | Score freezes at 58. Qualifies for the $1K tier, in contention for 30 days. Window 3 starts the next day. |
| Day 65 | A $500 seat frees up and is offered first. Declines and waits for $1K. |
| Day 69 | A $1,000 seat frees up. Highest active score in the $1K tier, so the offer comes straight away. Accepts the same day. |
| Day 70 | Seat checked and funded on the daily run. Trading starts. |

## Why rolling windows

- **No dead time.** Traders start the day they are ready, not when the next round opens.
- **Continuous activity.** Back-to-back windows keep traders trading every day, with a live score to protect.
- **Score over timing.** Seats go to the best active traders in each tier, not to whoever happened to qualify first.
- **No idle seats.** A freed seat is offered straight away, and checks and funding run once a day on a schedule.

## Open questions for engineering

1. Can a seat be offered the moment it frees up, ranked by score within its tier, with checks and funding on one daily run?
2. Can the keeper freeze accounts above 10x leverage, and apply the daily pause and close limits per tier in USDC?
3. Can the score pipeline score each trader on their own rolling window, against a fixed reference pool recalibrated quarterly?
4. Does the check for linked wallets funding each other work on staggered windows, not only on shared rounds?
5. Can the guardian signing that moves the USDC be automated before launch, so the daily funding run can become instant?
