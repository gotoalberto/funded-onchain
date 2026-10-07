# Brief: bring the funded.onchain.cc mockups in line with Kevin's flows

You are editing a 52-screen mockup of funded.onchain.cc (dark onchain.cc design system, high visual quality). The rules, UI and copy have drifted from the agreed product. Bring them in line with Kevin's flows document, keeping every screen and the mockup's own design system (classes, tokens, components, icons). This is about UI as well as copy: restructure panels, tiles, tables and modals where a screen needs to show different things.

## Files and tools

- Each screen is one HTML fragment in `src/pages/<flow>/<screen>.html`. It contains its own `<header class="app-header">`, `<main>`, a page `<style>` block and the `<nav class="mockbar">` at the bottom. Edit these files in place. Only edit the files assigned to you.
- `DATAURI_xxxxxxxxxx` tokens are images (the logo). Leave them exactly as they are.
- Do NOT edit the `<nav class="nav-track">` block. `build.mjs` rebuilds it for every page (Account, Trade, Leaderboard, How it works, Referrals) and sets the header chip to "Qualification". You may edit the rest of the header (the chip text inside `.season-chip`, the account chip amount).
- Preview: `npm run build`, then open `dist/index.html` at the screen's route (for example `dist/index.html#/f03-competing/01-home-competing`). `npm test` lists lint hits (em dash, Bitso, Hyperliquid, explorer, claim, season, liquidation, can't request, seat number, time weighted, percentile) per screen. Check every screen visually. Iterate until every screen looks finished and the tests pass.
- Titles and mockbar labels: a story screen takes its title, its mockbar label (for example `3/8 Referrals`) and its index entry from its name in `src/stages.json`. Rename it there. Pages outside the story keep their title in `src/titles.json`.
- Reference for the target UI and copy: Kevin's flows page `funded-flows.html` (kept outside this repository). Screen images of it are in its `docx/img/` folder:
  s00 1.1 Landing · s01 1.2 Sign up · s02 1.3 Add funds · s03 1.4 Funds ready · s04 1.5 Trade with progress strip · s05 1.6 How it works · s06 2.1 You're on the leaderboard · s07 2.2 Account, qualifying · s08 2.3 Leaderboard, traders · s09 2.3b Leaderboard, payouts · s10 2.4 Trade, qualifying · s11 2.5 Referrals · s12 3.1 Request a seat · s13 3.2 Waitlist · s14 3.3 Seat offered · s15 3.4 Short of a seat · s16 3.5 Missed the floors · s17 4.1 You're funded · s18 4.2 Account, funded · s19 4.3 Trade on the seat · s20 4.4 Near the daily pause · s21 4.5 Paused for the day · s22 4.6 Request a payout · s23 4.7 Payout sent · s24 4.8 Seat closed · s25 4.9 Public profile.
  Those are monochrome wireframes. Take their structure, content and copy; keep this mockup's visual design.

## The agreed rules (use these everywhere)

Brand
- The product is onchain.cc Funded. Never mention Bitso anywhere (it is a separate entity). "Bitso's USDC" becomes "our USDC" or just "USDC"; "20% to Bitso" becomes "20% to us"; footer "Accounts funded by Bitso." becomes "onchain.cc Funded."
- Never name Hyperliquid on a trader-facing screen and never link off the site. No "Explorer tx" links: a transaction is shown as an on-site "Receipt" with the short hash and a copy action. Records say "Verified onchain".
- No KYC: never mention ID or document checks.

Calendar
- Qualification windows, never numbered. The first runs Oct 20 to Nov 18, 30 days. At 00:00 UTC Nov 18 scores freeze and the 24-hour request window opens. Seats go live Nov 19, 00:00 UTC, when the next qualification window starts. It closes Dec 18, the one after closes Jan 17. Keep the mockup's existing dates and example moments.

Getting on the board (two steps only)
- Deposit $100 and trade $1,000 of perps volume. Then the score counts. (Remove "10 closed trades" from the board gate.)

Qualifying for a seat (checked at the freeze)
- 20 closed trades
- 15 trading days
- In profit so far
- Max drawdown 25% or less (peak to trough on the trader's own account; replaces the old trailing "drawdown requirement" and "your line" entirely)
- A trader who goes past 25% drawdown is marked "Over 25% drawdown" on the board (replaces "Can't request" / "Broken"). Use about 60 such traders on the board, not 186.

Score
- 0 to 100, whole numbers. Convert existing scores by dividing by 10 and rounding (781.6 becomes 78). Gaps in points are whole numbers, minimum 1.
- Built from three parts: return for the risk taken (75%), worst trade (15%), steadiness (10%). Volume, trade count, win rate and balance are NOT score factors. Withdrawals never affect the score.
- Explain drivers as plain advice ("One day made 38% of your gains. Steadier days lift you most.", "Your worst trade lost 6%. Cut losers sooner.").

Seats (pilot)
- 61 seats, two sizes only:
  - $25K seat: 5,000 USDC, $25,000 position cap. Daily pause at $1,250 lost in a day. Seat closes at $2,500 lost.
  - $5K seat: 1,000 USDC, $5,000 position cap. Daily pause at $250. Seat closes at $500 lost.
- Seats go by score: 77 and above gets a $25K seat, 70 to 76 gets a $5K seat, below 70 no seat. "Score to beat" is 70. Ranks #1 to #21 hold $25K seats today and #22 to #61 hold $5K seats, but show ONE number only: the board rank. Remove separate seat numbers and the board-vs-seat double numbering everywhere. Use "Seat today: $25K / $5K / none".
- Total: $145,000 of USDC in 61 seats. Remove the $50K, $100K and $200K tiers everywhere (seat maps, tables, payouts, filters).
- One seat at a time. While funded, the trader's own account stays on the board but cannot request another seat.

Request window and outcomes
- Qualified and at or above the score to beat: request within 24 hours, one tick to accept the seat terms. Withdraw a request any time before the window closes.
- Seats ran out before your rank: waitlist. When a seat frees up, the next trader on the list is offered it with 48 hours to accept ("A seat is yours. Accept within 47h 52m."). Passing keeps their place.
- Short of a seat: next qualification window, with the points they were short and "You kept +$214" (their own profit is theirs).
- Missed a requirement: the checklist with what fell short, and "The next qualification window is live".

Funded seat
- Starts at 5,000 USDC (a $25K seat) with a $25,000 position cap, cross margin, the allowed markets list.
- Daily pause: lose $1,250 in a UTC day and new trades stop until 00:00 UTC. Closing is always allowed. Own account not affected.
- Seat closes: $2,500 lost in total (balance down to 2,500 USDC), or 7 days in a row below its start balance. There is no trailing liquidation and no "lock point". Show "Loss room $X before the seat closes" and "Days below start 0 of 7".
- Payouts (never "claims"): any time the seat is flat (no positions, no open orders). Takes all profit above the start: 80% to the trader's own account, 20% to us, paid within 72 hours. The seat then resets to its start. Two choices: "Take the payout, keep trading" or "Take the payout, close the seat". Skipping a payout is fine; profit stays in the seat. Buttons: "Request payout". Blocked state: "Close 1 open position first". Empty state: "No payout yet".
- Payouts stay on the public Payouts board and the trader's profile for good, even after a seat closes.

Example data for the funded protagonist (kestrel, $25K seat), keep consistent across flows
- Seat start 5,000 USDC. On Nov 28: balance $5,923, profit since last payout +$923, payout $738.40 (80%), $184.60 to us. Loss room $3,423 (balance minus 2,500). Today's loss used $180 of $1,250.
- After the Nov 28 payout: balance back to $5,000, loss room $2,500, paid to you $738.40.
- Seat closed example (F06/F08, Dec 2): the seat lost $2,500 and closed at 2,500 USDC. The $738.40 payout stays theirs. Next request when the qualification window closes, Dec 18.
- Platform incident (Dec 4): trading paused, positions closed, seat safe, payout available because flat.
- Other screens: convert the numbers to these rules. Round headline numbers (no cents in headlines; cents fine in tables and receipts).

Money in and out
- Add funds is the live onchain.cc modal: title "Add funds", Crypto | Cash tabs, USDC selector, "Amount (USD)", presets $50 $100 $250 $500 $1,000, primary button "Buy $X of USDC", line "Pay with card, Apple Pay, or Google Pay in a secure checkout", Apple Pay, Mastercard, Visa marks. First deposit: Cash tab selected, amount pre-filled to $110 with "$110 lands at least $100 after fees. Enough for the leaderboard." Crypto tab shows the USDC deposit address (any EVM chain or Solana).

Referrals (new tab, mirrors the Colosseum referral page)
- Code card with the trader's code (KESTREL), Copy code, Copy link, Share on X, Share card.
- "Earn 10% of your friends' trading fees, plus 1bp of the volume on any seat they win."
- Three stats: Active referrals, Total earned, Pending with a "Collect" button. "Collect up to $500 a day."
- Your referrals table by stage (Signed up, Active, On the board, Qualified, Funded) with what each earned you. "Friends count as active after one $10 trade."
- Tier ladder: Wood 5% (0 active), Bronze 10% (5), Silver 15% (20), Gold 20% (50), Platinum 25% (100, partners), with "13 more to Silver".
- Earned by source: friends' trading fees, friends' funded seats (1bp).
- Share moments carry the referral code: on the board (Share my rank), funded (share card), payout (Share the payout).

## Copy rules

- No em dashes anywhere. No colons used as a dramatic pause in headlines.
- Sell the outcome, not the mechanism. One idea per sentence. No brackets, no arithmetic in sentences ("Today plus the 11 days left make 12" is out).
- Plain words. Out: line, lock point, on the bubble, time weighted, percentile, trailing, liquidation level, starting capital, counts as a deposit, seat number. In: score, bar, score to beat, loss room, daily pause, days below start, payout, seat.
- No fear words: Broken, closed for good, none comes back, the loss stays with, you owe nothing as a headline. Calm and specific: "Your seat closed. Your $738 payout is yours to keep. Next chance: Dec 18."
- Buttons say what happens: "Request seat", "Request payout", "Keep trading", "Close the seat", "Accept seat", "Pass".
- Headline style from Kevin's flows: "Trade your way. Get funded.", "You're on the leaderboard", "You qualified. Request your seat in the next 21h 14m.", "Seats ran out before your rank.", "You're funded.", "$512 payout ready", "$150 left before today's pause.", "Paused until 00:00 UTC.".
- Mockup notes (the dashed "Mockup note" boxes) may stay but must be short and match the new rules.

## UI direction

- Signed-in Home is the trader's Account dashboard. Lead with money and status tiles like Kevin's 2.2 (qualifying) and 4.2 (funded); keep the requirement checklist visible while qualifying.
- Trade while qualifying: a score strip under the header (score, rank, points clear of the score to beat, days left, trades 14/20, days 9/15, drawdown x of 25%), a "You on BTC-USD this qualification window" card (net PnL, trades, win rate, best, worst, share of profit), and under the ticket "Close this and it counts as trade 15 of 20. Trading today makes day 10 of 15."
- Trade while funded: the seat bar (balance, profit since last payout, today's loss of $1,250, loss room), Seat / My account switch on the ticket, "A 5% move against this position uses $300 of today's $1,250.", a "Seat on BTC-USD" card. Remove the R-multiple sizing, "If every stop fills" and OCO bracket panel; a plain ticket is enough.
- Leaderboard pages have a Qualification | Funded traders | Payouts switch at the top, with Load more instead of pagination. Board columns: rank, trader, score, return, max drawdown, trading days, seat today. The trader's own row is pinned.
- Request seat, payout and add funds are modals over the page they open from (this mockup already does modals; keep that pattern).
- Keep the seat map visual but with two zones ($25K, $5K) plus "no seat", and one rank number.

## Report back

When done, reply with: the files you changed, any screen name changes (also written to `src/stages.json`), anything you could not make consistent, and the final lint line for each of your screens.
