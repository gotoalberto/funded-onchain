# Review: F01 Onboarding

Scope: 01-landing, 02-leaderboard, 03-rules, 04-sign-in. Screenshots at 1440, sources read.
Copy scan: no dashes, no exclamation marks, no funder/KYC/pool/subscribe words, no eyebrows. Good.

## 01 Landing

1. **Question:** "What is this and why should I care?" First viewport: **yes** for the offer
   (headline, 80%, free, CTA). **Partly** for "can I make it": the hero never mentions the
   performance floors, so a cold visitor thinks finishing top 60 is enough.
2. **Components:** guest header (season chip, Sign in), hero (headline, three check bullets,
   sub, Start trading, See the leaderboard, history note), live panel (countdown, season track,
   60 seat grid, band key, top 3 table, seat cut caption), How it works (6 dated steps),
   Account sizes (text plus table), Account rules in numbers (loss scale bars, window panel
   with segmented control, How you trade it list), Payout (80% figure, example split bar, week
   timeline), Compared with a paid challenge table, FAQ (6), closing CTA band, footer.
3. **Missing:**
   - Performance floors (net PnL > $0, max DD 25% or better, 15 trading days) appear nowhere
     on the page. They are half the eligibility logic.
   - Honest timing for a late joiner. Today is Nov 6 with 12 days left; a new trader cannot
     reach 15 trading days in Season 1. Only onchain.cc history since Oct 20 can make it.
     The page should say so and point to Season 2 (Nov 19 to Dec 18).
   - Referral arrival state (manifest says visitors come from referral links; nothing on the
     page acknowledges `/r/kestrel`).
4. **Superfluous / competing:**
   - Eight sections; the brief asks for one leading figure and one action. "The account rules,
     in numbers", "Account sizes" table and "Compared with a paid challenge" duplicate the Rules
     page. The 80% block repeats the headline.
   - Live panel stacks five things (countdown, track, seat grid, band key, top 3, cut). It
     competes with the headline. The seat grid and band key say the same thing twice.
   - "Free to enter" and "No challenge fee" are the same claim.
   - Header season chip "12d 04h" repeats the big countdown right below it.
   - Comparison table makes claims about competitors ("payouts come from fees", "terms page
     that can change"): marketing tone, legal risk, and introduces an "account contract you
     sign" not defined anywhere else.
   - Segmented control in the Trading window panel looks interactive with "1 week" preselected
     on a marketing page.
5. **Inconsistencies:**
   - Step 5 "From Nov 19, Trade the account": funded windows start **Nov 20** (seats assigned
     Nov 19).
   - "Up to $200,000 positions": brief says always quote both, and only 1 seat exists.
   - Closing band "12 days left to get on the Season 1 board" implies getting on the board is
     the goal; with 12 days no newcomer can request a Season 1 seat.
   - Window end: landing says "Below start" closes; Rules says "At or below". Pick one (Rules).
   - "Cross margin covers the rest": the gap between 20% USDC and the cap is leverage, not cross
     margin. Say "positions up to 5x the USDC".
   - "The cut can move up the board" is ambiguous. Rules page wording ("finish #70 on the board
     and still get a seat") is clear; reuse it.
   - FAQ "Orders placed anywhere else do not count": new rule for own accounts that is not in
     the brief or the Rules page.
   - Countdown 12d 04h 31m vs "today Nov 6": Nov 6 to Nov 18 00:00 is at most 12d 00h. Brief
     issue; fix in BRIEF or say "Nov 5".
   - Top 3 shows PnL and return but not score, while the board is ranked by score.
6. **Visual:** green check icons, green live dot and green "Above start" pill use green outside
   PnL/pass-fail. Band colours $200K yellow and $50K amber collide with amber = warning (the
   "Daily loss 5%" label uses the same amber). Rank #1/#3 gold and bronze lean casino.
   Payout section's giant "80%" is the largest type on the page, larger than the headline.

## 02 Public leaderboard

1. **Question:** "Who is winning seats right now?" First viewport: **partly**. Title, cut 701.4
   and the $200K to $50K bands are visible; the cut line itself (the answer to "who is in") is
   ~1,700px down in a second table.
2. **Components:** header stats (seat cut, traders, closes in), sign-in banner, band filter tabs
   with counts, search, ranked table with band separator rows and per-row band pill, pager,
   "Around the seat cut" table with cut line and dimmed rows, score footnote.
3. **Missing:**
   - Floor status. Seats go only to requesters who meet the floors, yet the board assigns bands
     to everyone. #62 fenwick has negative net PnL and would fail; nobody shows trading days.
     Add a "Days" column (x of 15) or a pass/fail floors mark, and label bands "Projected".
   - A one-line explanation that projected bands assume everyone above meets the floors and
     requests.
   - Link to the floors (Rules #floors), not only to the score.
4. **Superfluous:** band shown twice on every row (separator row plus band pill column): keep
   the separators, drop the column (or the reverse). Three header stats of equal weight: lead
   with the cut, demote the rest. Header Sign in plus banner Sign in = two violet primaries.
5. **Inconsistencies:** demo data matches the brief (kestrel #17 781.6, neighbours #15 to #19,
   #1 ormond, #2 tidewater, 2,314, 60 seats, tab counts sum to 60, 2,254 below). Return of
   kestrel +32.1% on $412.80 fits the $1,284.20 balance. No errors found.
6. **Visual:** cut line in green text (green is for PnL/pass-fail; use violet or neutral).
   Table is 2,200px tall at 1440: 25 rows plus 8 more in the cut table. Medal colours on
   #1 and #3. Below-cut dimming is good.

## 03 Rules

1. **Question:** "What exactly do I have to do, and what can I lose?" First viewport:
   **partly**. Calendar and minimums are visible; "what can I lose" (5% pause, 10% close,
   window end close) starts ~2,100px down. No summary answers the second half.
2. **Components:** sticky TOC with Start trading CTA and "fixed until" note, lede, calendar
   table, minimums tiles, floors tiles, score table, allocation steps, sizes table, account rule
   list, window bullets, payout tiles, freeze, appeals, one account, excluded regions.
3. **Missing:**
   - Calendar row "Nov 20, funded windows start" and Season 2 dates (Nov 19 to Dec 18,
     requests Dec 18 to 19), Season 3 (Dec 19 to Jan 17, 2027).
   - Explicit "You never owe anything. Losses on a funded account are Bitso's. Your own
     balance is only at risk from your own trades." Only the landing FAQ says it.
   - Latest start date to reach 15 trading days in Season 1 (Nov 3).
   - Daily pause: landing says "Open positions stay", Rules does not.
   - Payout timing vs short windows: with a 1 week window the first payout still comes at
     week 8 after rollovers; say so. What happens to unpaid profit if the account closes
     before week 8 is undefined (open product question, do not invent).
   - Referral rule (1bp of funded volume, self-referral earns nothing) is absent.
   - Leverage implied by the cap (5x the USDC).
4. **Superfluous:** "Max points" column duplicates "Weight" (300 = 30% of 1000): drop it.
   Account sizes table repeats the landing verbatim (fine here; remove it from the landing
   instead). Lede repeats "no fee, no application" also in Excluded regions ("no documents").
5. **Inconsistencies:**
   - "Fixed until Nov 19, 2026" vs landing "Fixed per season, written in the account contract
     you sign": which rules govern an account granted Nov 19 and running into Season 2?
   - Appeals "7 days", "3 business days" and freeze review are not in the brief; confirm or
     mark as placeholder.
   - "Each factor is ranked against everyone on the board" is new detail; fine if true.
6. **Visual:** long single column at 790px wide is readable. TOC CTA is small and below the
   fold of the TOC list. The three tile rows (minimums, floors, payouts) look identical, so
   the floors (the hard part) do not stand out.

## 04 Sign in

1. **Question:** "How do I get in? Same account as onchain.cc." First viewport: **yes**.
2. **Components:** modal over blurred landing, close, logo, title, subtitle, email field with
   Continue, Google, X, wallet group (MetaMask with Detected pill, Phantom, WalletConnect),
   history note, footer (rules acceptance, US, Privy).
3. **Missing:**
   - The real risk: picking a different method than on onchain.cc creates a new empty account
     with no history. Say "Use the method you use on onchain.cc, or you start with no history."
   - Only the methods onchain.cc actually offers should be listed; confirm the list.
   - Email code step (Privy OTP) is not shown.
4. **Superfluous:** history note repeats the subtitle and the landing line; merge into the
   subtitle. Six options at equal weight; consider "Last used on onchain.cc" marker instead of
   "Detected".
5. **Inconsistencies:** none in numbers. "By signing in you accept the Season 1 rules" is fine,
   but account rules are accepted again at seat request (F04); keep both, they are different.
6. **Visual:** green "Detected" pill misuses green. Continue is violet and full width before an
   email is typed, so it outweighs the social and wallet options; acceptable but consider a
   neutral button until input.

## Flow

**Sequence:** landing, board, rules, sign in covers the happy path. Missing states:
- Referral arrival (landing with "kestrel invited you", referral link in place). SHOULD.
- US geoblock screen (what a blocked visitor sees, no documents asked). SHOULD.
- Email code step of sign in. COULD.
- First sign-in result for an existing onchain.cc trader ("We found 23 closed trades since
  Oct 20") before handing off to F02/F03; today every exit goes to F02 01-home-new. COULD.
- Late-joiner / between-seasons landing variant (request window open Nov 18 to 19, landing
  must say "Season 1 closed, Season 2 starts Nov 19"). COULD.
Merge/drop: landing sections "Account rules in numbers", "Account sizes" table and the
comparison table move to (or already exist on) Rules; the landing keeps a short summary
and links.

**Shared kit components needed:**
- SeasonClock (header chip, landing countdown, board stat; one source, one format).
- BandPill and BandSizesTable (landing, rules, board separators, F04).
- RequirementTiles with variants minimums / floors (landing, rules, F02, F03 meters).
- LeaderboardTable with cut line, dimmed below-cut rows and own-row highlight (landing top 3,
  board, cut table, F03).
- SeatCutLine.
- LossLimitScale (landing, F05 home, F06).
- PayoutSplit bar (landing, F08).
- SignInOptions list (sign in, F02 if session expires).

## Fix list

### MUST
1. Landing hero and How it works: add the floors. Hero sub: "Trade perps during the season.
   Stay positive with drawdown under 25% over 15 trading days, finish in the top 60 and request
   a funded account." Add step "Meet the floors" between steps 2 and 3.
2. Landing step 5: "From Nov 19" to "From Nov 20".
3. Landing closing band and hero: honest late-joiner line. Replace "12 days left to get on the
   Season 1 board" with "Season 1 needs 15 trading days. New here? Your onchain.cc trades
   since Oct 20 count; otherwise Season 2 runs Nov 19 to Dec 18."
4. Landing hero bullet: "Up to $200,000 positions" to "Positions up to $200,000 on $40,000
   USDC" (or drop the bullet).
5. Leaderboard: add floors status (Days x/15 column or pass/fail mark) and rename Band to
   "Projected"; caption that seats need the floors and a request.
6. Rules: add a top summary answering both halves: "To get a seat" (minimums, floors, request
   Nov 18) and "What you can lose" (5% day pauses, 10% closes, below start at window end
   closes, you never owe anything).
7. Rules calendar: add Nov 20 funded windows start and Season 2 and 3 dates.
8. Sign in: add "Use the method you use on onchain.cc, or you start with no history."
9. Landing: align window end wording with Rules ("At or below the start closes").

### SHOULD
10. Landing: remove "The account rules, in numbers", the comparison table and the sizes
    table; keep one sentence plus links to Rules#account and Rules#sizes.
11. Landing live panel: keep countdown and top 3 (with score) plus cut; drop seat grid or band
    key (keep one). Drop header season chip on this page or the countdown.
12. Landing: merge "Free to enter" and "No challenge fee" into "Free. No challenge fee."
13. Landing: "cross margin covers the rest" to "positions up to 5x the USDC"; "cut can move up
    the board" to the Rules #70 wording.
14. Landing FAQ: remove "Orders placed anywhere else do not count" unless the rule exists, then
    add it to Rules.
15. Leaderboard: drop per-row band column (separators already carry it); remove banner or
    header Sign in duplication (keep the banner); cut line colour to neutral or violet; add
    link to Rules#floors.
16. Colour: replace green on check bullets, live dot, Detected pill, cut line; move band
    colours off amber/yellow so amber stays warning only; remove medal colours.
17. Rules: drop Max points column; add daily pause "open positions stay", payout timing for
    short windows, referral rule, 5x leverage line.
18. Add referral arrival state and US geoblock screen to the flow.

### COULD
19. Fix BRIEF "Nov 6, 12d 04h" (Nov 5 or 11d) so every countdown agrees.
20. Rules: confirm appeals 7 days / 3 business days and "Fixed until Nov 19" wording.
21. Sign in: show Privy email code step; "Last used" marker instead of "Detected".
22. Rules: make floors tiles visually distinct from minimums (they are the hard part).
23. Landing: replace the interactive-looking window segmented control with plain text.
