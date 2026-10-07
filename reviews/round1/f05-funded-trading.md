# Review: F05 Operating the funded account

Scope: 4 screens, screenshots at 1440 full page, sources in `src/pages/f05-funded-trading/`.
Flow date: Nov 28, day 9 of the Nov 20 to Dec 20 window, Season 2 running (Nov 19 to Dec 18). Calendar checks pass for the window, the Season 2 close (Dec 18) and the "cannot request while live" rule.

## 01 Home, funded account

**1. Question:** How is my account doing against its rules? **Partly.** The first viewport answers it in prose ("Every rule is inside its limit. $187.90 ... $684.60") and the rule meters start at y 520, so Daily loss and Max loss are visible at 900. But the leading figure is equity ($5,184.60), not rule status, and the large chart sits between the answer and the meters.

**2. Components:** app header (funded chip, window chip), equity hero (figure, PnL pill, status sentence, Trade button), window equity chart (start line, floor line, today marker, hatched future), "Your account" spec card with progress bar, "First payout" card (date, 8 segment week bar, 80% so far, payout text, link), "Season 2, own account" card, "Account rules" card with 4 meters (Daily loss, Max loss, Open position, Window target) and "All inside" badge, "Today, Nov 28" closed trades table.

**3. Missing:**
- Basis of the daily loss: is it realized only or equity (realized plus unrealized) from the 00:00 UTC snapshot? Today's closed PnL is exactly $62.10 and open positions are +$58.78, so the screen implies realized only. Pros need this stated once (FTMO states it).
- First payout needs its condition: the window ends Dec 20, three weeks before Jan 15. The payout only happens if the account rolls over. Say "if the account rolls over on Dec 20".
- Unrealized PnL of open positions (today table shows closed only; "2 open" has no figure).

**4. Superfluous / competing:**
- "Your account" card repeats the header chip (day 9 of 30), the hero ($25K) and the rules card (USDC $5,000). Keep only "Earned in Season 1, rank #17" and split, or drop the card.
- Window target meter duplicates the chart (start, floor, current). Keep one. The chart is the better instrument; the meter's $5,500 right end is an invented target.
- Chart hatched future area with a centred sentence ("21 days left. Above $5,000 on Dec 20 ...") repeats the window target note.
- First payout card: week bar plus "Week 2 of 8" pill plus "Opened Nov 20 / Week 8" is three ways to say one thing. Keep date and one line.
- Season 2 own account card: correct but it is a second leading figure (#44). Reduce to one line with link.
- Fee column and "Exit by" pills in the today table are terminal detail; fine on Trade, heavy on Home.

**5. Inconsistencies:**
- "Window target" implies a profit target. There is none: the rule is "above start at window end rolls over". Rename "Window end".
- "Week 2 of 8" vs brief "first payout from week 8": Nov 20 + 8 weeks = Jan 15, which is the start of week 9. Either the date is Jan 8 (week 8 starts) or the label is "after 8 weeks". Align with F08.
- "Your 80% of profit so far $147.68" uses unrealized window profit; payout is only on profit above high water mark at payout. Label "if paid today" or drop.
- Copy: no dashes, no funder or KYC words. "Equity, $25K funded account" label is acceptable (labels a figure, not an eyebrow).

**6. Visual:**
- Max loss meter reads as empty: grey fill with a white tick at the left edge. A trader reads "0 used". Fill should show distance to floor ($684.60 of $500 cushion... see fix) in the same direction as Daily loss (used grows right).
- Chart occupies the strongest area but 70% of it is hatched empty future.
- Right column ends at y 720, left at 1020: unbalanced, and the right column holds three cards of equal weight.
- Trade button is the primary (violet) and correct; "All inside" green badge is fine.

## 02 Trade, funded account

**1. Question:** Trade within the rules, with the risk of each order shown before I send it. **Yes.** Ticket shows "Within your account rules" with stop loss in $ and share of the daily limit, position after fill and fee; chart shows account lines; rules panel sits under the ticket.

**2. Components:** market header (mark, oracle, 24h change, OI, volume, funding countdown, underlying market hours), chart toolbar (timeframes, Indicators, Account lines, Events, headlines), candlestick chart with TP / entry / SL / account close line, CPI event marker, order book, positions tabs (Positions, Open orders, Trade history, Funding, Rule log), positions table with Risk to stop, order ticket (side, type, price, Size by risk, stop, TP bracket, rule check box, Place button, shortcuts), Account rules panel, Moving now, CPI alert.

**3. Missing:**
- Cross margin facts: margin used, leverage, liquidation price per position. In a cross account liquidation can come before the 10% floor; pros will look for it.
- Allowed markets: the market selector should show that only allowed markets are listed (one line, or a lock on others).
- Risk check should include open orders (3) and existing stops. The ticket counts this order alone.
- The "orders only from this terminal or onchain.cc, otherwise freeze" rule is nowhere in this flow. One line in the rules panel or Rule log.

**4. Superfluous / competing:**
- "Moving now" and the second CPI alert in the right column compete with the rules panel and push the page to 1300 px. The CPI marker is already on the chart. Drop Moving now from the funded terminal or move it to the market selector.
- Rules panel repeats Window profit and window end rule which are in the header chip and Home. Keep Daily loss, Max loss, Open position only.
- "3 headlines today" and "Underlying market" are fine for RWA, keep.

**5. Inconsistencies:**
- The draft order (long 2.78 oz XAU @ 2,662.20, SL 2,644.20, TP 2,698) is identical to the XAU position already open. It reads as if the ticket shows the open position. Use a different draft (e.g. a second market or a different size).
- "-$50.04, 20% of today's room": 50.04 is 20% of the $250 limit but 27% of the $187.90 room left. Same in positions table ("20% of today"). Say "20% of the daily limit" or "27% of today's room".
- "Account closes if XAU reaches 2,600.10" is wrong. Room $684.60 / 2.78 oz = $246.26, so about 2,415 (ETH short also moves equity). And the line is drawn near 2,480 on the axis anyway.
- Chart lines do not match the price axis: TP 2,698 drawn near 2,760, SL 2,644.20 drawn near 2,590, last price tag 2,653.7 while mark is 2,661.40.
- Place long button is green (buy colour) and links to 03, which shows a different order (7.57 oz). Clicking a valid order lands on a blocked one. Link the button to a "sent" state and reach 03 from a size change.
- Copy clean: no dashes, no banned words.

**6. Visual:**
- Bottom half of the left column is empty (positions table ends at y 740, page runs to 1300) because the right column is too long.
- The amber floor line is strong and reads well; the dashed TP and SL lines are faint.
- Ticket rule box (green border) is good: it is the instrument the brief asks for.

## 03 Order over the limit

**1. Question:** Why can't I send this order? **Yes.** "2 account rules would break" with both rules, exact amounts and one click fixes, disabled button "Place long, fix 2 rules first", "Nothing was sent ..." note, draft stop on chart.

**2. Components:** same terminal as 02, red ticket fields (size, stop), rule break box with two items and fix chips, "Max size alone fixes both" line, CPI warning, disabled place button, note, "Account rules, after this order" panel with overflow bars (Daily loss 272.17 of 250, Open position 126%), draft stop line on chart.

**3. Missing:**
- Nothing essential. Arithmetic checks out (20,160 order, 31,400 vs 25,000, 210.07 risk, 272.17, 5.16 oz, 143.19).
- Optional: the server side variant ("rejected because a rule changed while you typed") is not shown.

**4. Superfluous / competing:**
- Three fixes for two rules ("Use max size", "Move stop", "Max size alone fixes both"). Lead with the single fix that clears both ("Use 5.16 oz, fixes both") and keep the per rule fix as secondary.
- CPI warning inside the ticket adds a third coloured box under a red box. Drop it here; the chart marker carries it.
- "Account rules, after this order" panel repeats the two numbers already in the break box. Keep it, but drop Window profit / Window ends rows.

**5. Inconsistencies:**
- Daily loss is checked as worst case of this order only. The XAU position already open has its own $50.04 at stop, which is not added. If the rule is "pre-trade worst case", count all stops; if not, state "this order alone".
- Calling a stop that would exceed the daily room a "break" is a product choice (the real rule pauses trading). Fine if intended, but the copy "trading would pause until 00:00 UTC" should be consistent with blocking. It is.
- "Move stop to 2,647.00" is arbitrary; the widest stop that fits is about 2,638.30. Use the boundary value or explain ("leaves $66 room").
- "Use max size 5.16 oz" links to 02, which shows 2.78 oz.
- Chart draft stop line (2,635.35) drawn near 2,560 on the axis.
- Same "Account closes if XAU reaches 2,600.10" error as 02.

**6. Visual:**
- Red is used for both input errors and PnL red in positions: acceptable (pass/fail).
- The disabled button with lock reads well. Hatched red overflow on bars is clear.
- Right column runs to y 1240; the "after this order" panel is below the fold, fine since the break box answers first.

## 04 Switch account

**1. Question:** Move between my own account and the funded one. **Yes.** Popover from the header chip "Trade with", two cards, selected state, note that ticket and rules follow the pick, warning that the draft is cleared.

**2. Components:** header account chip (open state), popover with title and "Same login, same terminal", funded card (tag, equity, PnL, daily room, open position, window, line), own card (tag, Competing pill, balance, Season 2 rank, score, season end, Rules None, line), info note, amber warning.

**3. Missing:**
- The state after switching: terminal in own mode while the funded account still has 2 open positions and 3 orders. Need a visible cue that funded positions keep running (and still count on rules) when trading own. The own card links to F03 trade, which is dated Nov 6 / Season 1, not this flow's Nov 28.
- Keyboard or explicit action: cards are the action, fine, but no shortcut shown.

**4. Superfluous / competing:**
- Each card carries three stats plus a sentence. For a switcher, one figure per card (balance) plus one line is enough. Drop Score, Rules None, Daily room / Window columns.
- "Same login, same terminal" plus the info note say the same thing. Keep the note.

**5. Inconsistencies:**
- Own card "Season 2, #44" and "Score 702.4" match Home. "Rules None" is wrong in spirit: own account has no funded rules but entry minimums and floors still apply to the score. Say "No account rules".
- The warning repeats the identical-to-position draft from 02.

**6. Visual:**
- Popover covers the ticket (Long/Short, price). Good for focus; but the dim on the rest is weak, the ticket bleeding through reads as active.
- Violet selection on the funded card is correct use of primary.

## Flow

**Sequence.** Home > Trade > Blocked > Switch. Gaps:
- Missing "order sent / filled" state on the funded account (toast plus updated rules panel). Today the valid order leads to the blocked screen.
- Missing terminal in own account mode while the funded account is live (needed as destination of 04 inside this flow).
- Missing daily loss warning state (e.g. 80% of the limit used) before F06 pause. Could live in F06; if so, link it.
- Missing market not allowed (picking a market outside the list). One small state on the market selector.
- Cold start: 01 sets context well (funded chip, "$25K funded account", rules). It does not say what "funded" means (Bitso's USDC) in the first viewport; "USDC from Bitso" is in the side card. Put "Bitso's USDC" in the hero label.
- 03 and 02 could be one screen with two ticket states, but keeping both is useful for Esteban. Keep.

**Shared kit components** (used or needed across flows):
- Rule meter (label, value of limit, bar, left/right captions, overflow hatched state): Home, Trade, Blocked, F06.
- Ticket rule check box (pass and fail variants, fix chips).
- Account switcher popover and header account chip (own / funded / paused / frozen).
- Window chip in header ("Window day 9 of 30").
- Account lines on the chart (entry, TP, SL, draft, account close line) with correct axis mapping.
- Event alert (CPI) and market hours pill for RWA.
- Positions table with Risk to stop column.
- Spec list card (label / value rows) used by "Your account".

## Fix list

### MUST
1. 02, 03: fix "Account closes if XAU reaches 2,600.10" to the computed price (about 2,415 for XAU alone) and draw it at that price.
2. 02, 03: map chart lines to the price axis (TP 2,698, SL 2,644.20, draft stop 2,635.35, last price tag = mark 2,661.40).
3. 02: "20% of today's room" to "20% of the daily limit" (or "27% of today's room"), same in positions table "Risk to stop".
4. 02: change the draft order so it is not identical to the open XAU position (e.g. long 1.50 oz XAU at 2,655.00, or a BTC draft).
5. 02: "Place long" should not lead to 03. Link it to a new "Order sent" state; reach 03 by editing size (7.57 oz).
6. 01: rename "Window target" to "Window end" and remove the invented $5,500 end; or drop the meter (chart already shows it).
7. 01: First payout card: add the condition "if the account rolls over on Dec 20"; align Jan 15 and "week 8" with F08 (Nov 20 + 8 weeks = Jan 15 = start of week 9).
8. 01, 02: Max loss meter: show consumption in the same direction as other meters (used $0 of $500, or $684.60 cushion as a filled bar), not a grey bar with a tick at zero.
9. 01, 02, 03: state the daily loss basis once ("realized and unrealized since 00:00 UTC" or "closed trades only"), and make the 03 check consistent with it (include existing stops or say "this order alone").

### SHOULD
1. 01: remove "Your account" card or reduce it to Season 1 rank and split; remove the hatched future area and its sentence from the chart.
2. 01: shrink "Season 2, own account" card to one line plus "Switch to own account".
3. 01: put "Bitso's USDC" in the hero label ("Equity, $25K account, Bitso's USDC").
4. 02: remove "Moving now" and the duplicate CPI card from the funded terminal; drop Window profit and Window ends rows from the rules panel.
5. 02: add liquidation price and margin used per position, and leverage in the ticket.
6. 03: lead with the single fix "Use 5.16 oz, fixes both"; drop the CPI box from the ticket; make "Move stop" the boundary value.
7. 04: one figure per card (balance) plus one line; "Rules None" to "No account rules".
8. Flow: add "Trade, own account while funded is live" screen as the target of 04 inside F05.
9. Rules panel or Rule log: one line "Orders only from funded.onchain.cc or onchain.cc. Other fills freeze the account."

### COULD
1. 02: allowed markets hint in the market selector, plus a "market not allowed" state.
2. 01: unrealized PnL of the 2 open positions next to "2 open".
3. 03: server side rejection variant.
4. 04: stronger scrim behind the popover; shortcut hint.
5. Daily loss 80% warning state, or link to F06.
