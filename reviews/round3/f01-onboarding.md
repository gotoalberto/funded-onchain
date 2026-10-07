# Review: f01-onboarding (round 3)

Scope: 01-landing, 02-leaderboard, 03-rules, 04-sign-in. Screenshots at 1440, sources in src/pages/f01-onboarding.
Reference truth: BRIEF.md, Decisions section binding. The seat zones table on the landing is Alberto's own request (no grid): its concept stays, only its content and styling are reviewed.

## 01-landing

1. Question: "What is this and why should I care?" The first viewport answers it: headline (Bitso USDC, 80%), free, the season and the seat zones. Leading figure is the 80% in the h1. Good.

2. Components
- Header season chip "Season 1 ends in 11d 14h": KEEP. It is the single place for the countdown on every screen.
- H1 "Trade Bitso's real USDC and keep 80% of the profit.": KEEP.
- Check "Free. No challenge fee": KEEP.
- Check "Positions up to $200,000 on $40,000 USDC": CHANGE to "Accounts from $5K to $200K, 60 seats". Only one trader gets $200K; quoting the top alone reads like prop firm marketing to the exact audience that distrusts it.
- Hero sub paragraph: CHANGE. It says "finish in the top 60", which the zones caption and the rules contradict (#70 on the board can get a seat). Say "rank in the top 60 among requesters". It also restates the floors that step 3 states; shorten to one sentence that points down.
- Primary "Start trading" plus secondary "See the leaderboard": KEEP.
- Caption "Already trade perps on onchain.cc? ... since Oct 20 count": KEEP here, remove elsewhere on the page (see 3).
- Live panel, "Season 1 is live" plus dates: KEEP the dates.
- Countdown boxes 11 / 14 / 31 plus progress track: REMOVE. Third statement of the same countdown (header chip, boxes, FAQ "11 days left"), visually the heaviest object in the hero and the "aggressive counter" the brief rules out. Keep one line: "Closes Nov 18, 00:00 UTC".
- Seat zones table: KEEP the concept (Alberto's request). CHANGE the content:
  - title "60 seats, read straight off the leaderboard" lacks "Projected" (Decisions: label bands on live boards "Projected"); the word only appears in the 11px caption. Title: "Projected seats today".
  - "Min score" column disagrees with the leaderboard: #3 to #6 shows 836.4 but #6 on the board is 851.0; #7 to #21 shows 772.4 but #21 is 769.1. #22 to #60 (701.4) is right. Use the board figures, and rename to "Lowest score" (a "min" of one seat is odd for #1 and #2).
  - "Holding it": "vandal +14" for #7 to #21 (vandal is #16) and "sable_fx +38" for #22 to #60 (sable_fx is #19, inside the $25K zone). Use the first holder of each zone: ferro +14, pelorus +38. Rename column to "Projected holders".
  - rank text coloured gold, silver, bronze (#1, #2, #3 to #6): REMOVE. Medal colours appear nowhere else in the flow and lean casino.
  - "Last seat, #60" cut line is green (kit `.cut-line`): CHANGE to the neutral line the leaderboard already uses. Green is for PnL and pass/fail.
  - "#61 and below / No seat / 0 / 2,254 traders / under 701.4": KEEP.
  - caption: KEEP, it carries the honest rule.
- "How it works", 6 steps with dates: KEEP. Remove the violet ring on step 1 (not an action, selection or own marker).
- Section head line "There is no application and no challenge...": KEEP (only place it is said).
- "The funded account", 4 facts: KEEP. CHANGE "What you can lose" to add the freeze rule: "Orders only from funded.onchain.cc or onchain.cc. Any other fill freezes the account." Hyperliquid natives run bots and API keys; this is the rule most likely to surprise them and it is missing from the whole landing. Use the exact daily loss wording ("5% of the starting USDC") so it matches the rules page.
- FAQ: "Is it free?": REMOVE (the hero check says it). "Do I have to send documents?": KEEP. "I am new. Can I get a Season 1 seat?": KEEP but make it exact: on Nov 6, 12 UTC days remain (Nov 6 to Nov 17), so a trader needs at least 3 trading days already. "Only traders with onchain.cc trades since Oct 20" is vaguer than the rules page ("first one by Nov 3"). "Can I hold two accounts?": KEEP.
- Closing panel "Seats need 15 trading days. Start counting today." plus Season 2 line: REMOVE the copy, it is the FAQ answer and the hero caption a third time. Either drop the panel or keep only a CTA row. "Start counting today" is also misleading for a brand new trader, who cannot make Season 1.
- Footer: KEEP.

Missing
- Nothing about what can be traded. One phrase in "Size" or in the hero sub: "crypto and RWA perps (gold, oil, US500, NVDA, TSLA)". Forex and futures traders decide on this.
- Nothing on how the score is built. A link "How the score works" next to the zones table (the leaderboard has it in its footer).

3. Repeated or superfluous on this screen
- Countdown: chip, boxes, FAQ.
- onchain.cc history counts: hero caption, step 1, FAQ, closing panel.
- 15 trading days and floors: hero sub, step 3, FAQ, closing panel.
- Free: hero check, FAQ.
- 80%: h1, step 6, Payouts fact. Step 6 can say "Monthly, in USDC, to your onchain.cc wallet" and leave 80% to the h1 and the fact.

4. Inconsistencies
- "Finish in the top 60" vs "#70 can still get a seat" (same screen, rules, leaderboard).
- Zone min scores and holders vs 02-leaderboard (above).
- Green cut line here, neutral cut line on 02.
- Medal rank colours here only.

5. Hierarchy
- Right panel outweighs the h1: countdown boxes, five coloured chips, medal ranks. Removing the boxes and medal colours lets the headline lead.
- Below the fold, four text sections of equal weight (steps, facts, FAQ, closing) say overlapping things; after the cuts above the page is roughly 30% shorter.

## 02-leaderboard

1. Question: "Who is winning seats right now?" First viewport: title, projected cut 701.4, sign in banner and the top 6 by band. Answered.

2. Components
- H1 plus caption (dates, "Updated every minute", projected rule): KEEP. CHANGE "Updated every minute" to a timestamp ("As of Nov 6, 10:00 UTC"); a pro checks staleness.
- Stat "Projected seat cut, #60 701.4 / 2,314 traders": KEEP as the leading figure.
- Sign in banner: KEEP (it is the only bridge to "my rank"). CHANGE the violet tinted background and violet icon to neutral; the header already has a violet Sign in, the banner button is glass, so the banner itself needs no violet.
- Band filter tabs ($200K 1, $100K 1 ...): REMOVE or reduce to "All" and "Below the cut". The band separators in the table already group rows; a tab that shows one row adds nothing. Keep the search.
- Search: KEEP.
- Table columns Rank, Trader, Score, Net PnL, Return, Max DD, Trading days: KEEP.
  - "Trading days" shows "18 of 15", "17 of 15": CHANGE. More than the target reads as an error. Show the count ("18") with a pass mark once at 15 or more, and "11 of 15" only while short.
  - nadir #63: "Can't request" replaces the trading days value. CHANGE: keep the days figure, put "Can't request" as a status next to the trader or under the red 27.4%. A status inside a numeric column breaks the scan.
- Band separator rows "Projected. 1 seat, $40,000 USDC": KEEP; chip gives the position, row gives USDC, both quoted as required.
- Pager: KEEP.
- "Around the seat cut" panel: KEEP (it shows the cut without paging to 3). REMOVE its caption ("#70 here and still get a seat"), the head caption already says it.
- Cut line text "Projected seat cut, #60 at score 701.4": CHANGE to "Projected seat cut, #60". 701.4 is the lead stat.
- Footer score weights and trading day definition: KEEP.

Missing
- Nothing marks who currently meets the floors. A cold visitor cannot tell that vandal (13 of 15) or fenwick (-$84.10) would not be allowed to request today. Not a new column: the pass mark on days and the red on PnL/DD already do it if days show a mark (see above).

3. Repeated: cut score three times (stat, cut line, implicitly the band row); the "#70" explanation twice.

4. Inconsistencies
- Zone scores vs landing (see 01).
- $200K chip gold and $50K chip orange are kit band classes; acceptable per Decisions, but note amber-like gold is otherwise reserved for warnings.
- Rows inside seat bands with fewer than 15 trading days (lumen.trade 14, vandal 13, kestrel 11, #21 14): allowed by Decisions ("can still meet"), but no screen says so. One phrase in the head caption: "Bands include traders who can still meet the floors."

5. Hierarchy: good. The sign in banner (violet) is the brightest object on the page after the header button; neutralising it puts the eye on the cut figure.

## 03-rules

1. Question: "What exactly do I have to do, and what can I lose?" The summary card answers both in the first viewport. Good.

2. Components
- TOC with "Start trading": KEEP.
- Lede "Every perps trader is in. Bitso funds every account...": CHANGE. "Funds every account" overclaims (60 seats). "Bitso funds 60 accounts in Season 1 with its own USDC."
- Summary "To get a seat": KEEP. "What you can lose": CHANGE, add the freeze ("Any fill not placed from funded.onchain.cc or onchain.cc freezes the account"). It is the harshest rule and the summary omits it.
- Season calendar: KEEP. Nov 21 activation deadline has no consequence stated (see questions).
- Entry minimums: KEEP. Say when the $100 balance is measured (question).
- Performance floors: KEEP. The Nov 3 sentence is exact; reuse it on the landing.
- Score table: KEEP. "Each factor is ranked against everyone on the board" is not enough for a pro to reproduce a score (question).
- Seat allocation: KEEP, merge step 4 into step 2 ("until all 60 are taken; no seat below #60. No request, no seat.").
- Account sizes: KEEP. "Largest position you can hold open": say whether it is per position or total open notional (question).
- Account rules: KEEP; wording matches Decisions exactly. Missing an "Activation" row: sign to register the trading key, Bitso deposits, rules switch on, trading opens Nov 20 00:00 UTC.
- Trading window: KEEP.
- Payouts: KEEP. CHANGE "With a 1 week or 2 week window it gets there by rolling over": a 1 month window (Nov 20 to Dec 20) also has to roll over to reach Jan 15. Say "Every window length reaches it only by rolling over."
- Freeze, Appeals, One account, Referrals, Regions: KEEP.

3. Repeated: the summary card restates sections by design (acceptable as the answer to the screen's question). Seat allocation steps 2 and 4 overlap.

4. Inconsistencies: none in numbers. Daily loss, max loss and window end wording match Decisions.

5. Hierarchy: a long single column with 14 sections of equal weight. Acceptable for a reference page; the summary carries the hierarchy.

## 04-sign-in

1. Question: "How do I get in? Same account as onchain.cc." Answered in the modal subtitle.

2. Components
- Modal title: KEEP.
- Subtitle "Use the method you use on onchain.cc, or you start with no history.": CHANGE wording, this is the one sentence that decides whether history carries over: "Use the same sign in as on onchain.cc. A different email or wallet opens a new account with no history." Drop "since Oct 20 count here" (said on every prior screen).
- Violet logo tile: CHANGE to neutral (decoration, not action).
- Email plus violet Continue, Google, X, wallets: KEEP. Rabby is the common Hyperliquid wallet; COULD add it or rely on "Detected".
- Footer "By signing in you accept the Season 1 rules. Not available in the United States. Protected by Privy.": KEEP.

3. Nothing superfluous besides the history line.

4. Close goes to 01-landing even when the modal was opened from 02 or 03. Fine for a mockup; note for the build.

5. Hierarchy: clean.

## Flow

- Sequence landing, leaderboard, rules, sign in is complete for the happy path.
- Missing state: referral arrival. The flow summary says visitors land "from X, a creator or a referral link", and referrers earn 1bp, but no screen shows a referral landing (for example a caption under the hero "Invited by marlowe" and the same line in the sign in modal). Without it the attribution moment is undesigned.
- Missing state: US visitor (geoblock). Every screen says "not available in the US"; nothing shows what a blocked visitor sees. One blocked variant of the landing or the sign in modal.
- Redundant: none of the four screens is redundant. Inside screens, repetition is the main problem (landing).
- Sign in leads to f02 01-home-new (0 of 3 met) for every method; an onchain.cc user with history lands elsewhere. That branch belongs to f02, but the sign in screen could note which home each case reaches.

## Fix list

MUST
1. 01-landing, zones table: use the leaderboard figures (#3 to #6 lowest 851.0, #7 to #21 lowest 769.1) and the first holder per zone (ferro +14, pelorus +38). Numbers must agree across screens.
2. 01-landing, zones table title: add "Projected" ("Projected seats today"). Decisions require it on live boards.
3. 01-landing, hero sub: replace "finish in the top 60" with "rank in the top 60 among requesters". It contradicts the #70 rule on three screens.
4. 01-landing: remove the countdown boxes and track; keep "Closes Nov 18, 00:00 UTC". One countdown per screen.
5. 01-landing: remove the "Is it free?" FAQ and the closing panel copy (keep at most a CTA row). Each fact once.
6. 01-landing and 03-rules summary: add the freeze rule to "What you can lose". The most surprising rule for bot and API traders is missing from both answers to "what can I lose".
7. 01-landing: cut line neutral, no medal rank colours. Green only for PnL and pass/fail, matches 02.

SHOULD
8. 01-landing: hero check to "Accounts from $5K to $200K, 60 seats".
9. 01-landing: new trader FAQ states the exact rule (3 trading days before Nov 6, or first day by Nov 3).
10. 01-landing: name the markets (crypto and RWA) once.
11. 02-leaderboard: trading days as a count with a pass mark at 15+, never "18 of 15"; "Can't request" as a status, not in the days column.
12. 02-leaderboard: remove band filter tabs (keep search); remove the duplicated "#70" caption and the score from the cut line.
13. 02-leaderboard: timestamp instead of "Updated every minute"; one phrase that bands include traders who can still meet the floors.
14. 03-rules: lede "Bitso funds 60 accounts in Season 1"; payouts sentence covers every window length; add an Activation row.
15. 04-sign-in: subtitle rewritten as the same-account warning.
16. Flow: add the referral arrival state and the US blocked state.

COULD
17. 01-landing: no violet ring on step 1; 02 sign in banner neutral; 04 logo tile neutral.
18. 03-rules: merge seat allocation steps 2 and 4.
19. 04-sign-in: Rabby in the wallet list.
20. 01-landing: step 6 without the 80% (already in h1 and the Payouts fact).

## Undefined product rules (questions for Alberto)

1. Trading day: a UTC calendar day with at least one closed trade? Does a partial close count? The screens assert it; the brief does not define it.
2. Max drawdown: peak to trough of own account equity in the season? How are deposits and withdrawals treated? Same question for the "capital" in return on capital.
3. Score: how is each factor normalised ("ranked against everyone on the board")? Is it recomputed among requesters at the close? Tie break?
4. Net PnL: after trading fees and funding?
5. Account size: cap on the single largest position, or on total open notional across positions? Any per market leverage limit?
6. $100 balance minimum: measured at the close, continuously, or once? Does dropping below $100 remove a trader from the board?
7. Activation deadline Nov 21 missed: does the seat pass to the next requester, and who is that?
8. Seats and bands after Season 1: always 60 with the same split?
9. Referral: how long does a link attribute, can it be added after sign up, when and where is the 1bp paid?
10. Sign in with a different method than on onchain.cc: can accounts be linked later in Privy, or is history lost?
11. Max loss floor after a payout: stays $4,500 or moves with the high water mark?
12. Legal: terms of service and privacy beyond "the Season 1 rules"? VPN policy for the US block?
13. RWA markets: behaviour outside market hours and over weekends, for the daily loss and the window end.
