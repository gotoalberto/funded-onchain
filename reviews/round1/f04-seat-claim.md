# F04 Seat claim: review

Scope: 9 screens, screenshots at 1440, sources in `src/pages/f04-seat-claim/`. Checked against BRIEF.md, manifest.json and the canonical calendar (S1 Oct 20 to Nov 18, requests Nov 18 00:00 to Nov 19 00:00 UTC, seats Nov 19, windows from Nov 20, S2 Nov 19 to Dec 18, S3 Dec 19 to Jan 17 2027, first payout week 8).

Overall: the numbers mostly hold together (requester #14, 7 taken above in $25K, cut 776.9 at #21, last seat 714.2, +38.8% = $498.30 / $1,284.20, Jan 15 = Nov 20 + 8 weeks). The weak points are one impossible screen (05), a self contradiction about activation order (06 vs 07), the max loss figure shown two ways, and repetition: most home screens say the same thing three times (hero, side timeline, banner or table).

## Screen by screen

### 01 Home, request window open
1. Question: season over, can I request, what would I get. First viewport: yes. Heading, Request seat, $25K / $5,000 are all above the fold. Two problems: the 18h 12m clock is the largest type on the page and competes with the offer, and a cold reader meets two ranks (#17 final, #14 among requesters) with no bridge until the footnote under the table.
2. Components: app header with countdown chip; hero (title, deadline sentence, primary button, hint); countdown clock with track; offer strip (band chip + 5 stats); "Your place among requesters" panel (rank stat, seats stat, band ladder, band table, footnote); amber warning banner; "Your Season 1 result" card (rank, score, floors checklist); "What happens next" timeline.
3. Missing: one line linking #17 and #14 ("3 traders above you did not request or missed the floors"). The window choice (1 week, 2 weeks, 1 month) is not mentioned before the modal. Nothing says when the first payout could come (week 8) or that it needs the account to stay in profit through rollovers.
4. Superfluous: the band table repeats the ladder right above it (drop the table, or drop the ladder). The amber banner repeats the hero sentence "If you do not request, you get no seat". The countdown appears 3 times (header chip, clock, timeline row "Open now, 18h 12m left"). In the offer strip, "Your share of profit 80%" is a rule, not part of what you get. Move it to the modal.
5. Inconsistencies: "Max loss 10% $500". 02, 06 and 07 say "$4,500 floor". Pick one form everywhere: "Max loss 10%, floor $4,500". The banner copy "you wait until Season 2 closes on Dec 18" is right. "Requesting early or late changes nothing" is also said in 08 and 09.
6. Visual: the clock digits (about 48px) outweigh the h1 and the offer. The table's highlighted $25K row and the ladder marker both carry "You", so the eye gets two pointers. The amber banner at the bottom has the strongest colour on the page for a secondary message.

### 02 Request a seat (modal)
1. Question: pick a window, accept rules. First viewport: yes, everything fits in the modal and the footer echoes the choice.
2. Components: modal header with close; step 1 offer card + "#14 to #16, $25K either way" pill + note; step 2 window radio cards (3) + rollover/close outcomes; step 3 rules list + "Read the full rules" link + amber freeze notice + accept checkbox; step 4 wallet card; footer (Cancel, summary, Request seat).
3. Missing: the position cap is not in the rules list (it is only in step 1 as "Max position"). What the window choice means for payouts: first payout from week 8 (Jan 15, 2027), so a 1 week window needs 7 rollovers in profit to reach it. One line under step 2 covers it. Primary button should say what the signature does, e.g. "Sign and request seat".
4. Superfluous: step 1 repeats the home offer and the #14 to #16 explanation already on 01. Keep the band chip + two figures, drop the paragraph. "You can change the window until requests close" is fine, keep it.
5. Inconsistencies: none in numbers (Nov 20 to 27, Nov 20 to Dec 4, Nov 20 to Dec 20 are right). 1 month is preselected, so "rules accepted" is the only real decision the user makes. Consider no default.
6. Visual: 4 numbered steps for a one minute task feel heavy; step 4 has no control (the button is the action), so it should not be a numbered step. The amber freeze box is the loudest element in the modal.

### 03 Home, seat requested
1. Question: where am I in the queue, how many seats above me. First viewport: yes, "#14 of 640 requests" leads, the ladder shows the band.
2. Components: hero (status line, big requester rank, explanation, countdown clock, band ladder, footnote + link); "Cut line per band, live" table with live badge; "Requesters around you" table; "Your request" summary card + Change window; "At 00:00 UTC" timeline; "Tell me the result" notification toggles.
3. Missing: how many seats are left above me, literally the manifest question ("7 of 15 $25K seats taken above you, 8 left"). It is on 01's table but not here. A way to withdraw the request, or a line saying it cannot be withdrawn.
4. Superfluous: two tables (cut line + around you) for one question. The "Window" column in "Requesters around you" exposes others' choices and answers nothing. Drop the column, or the whole table, and keep the cut line. The "At 00:00 UTC" timeline repeats the clock and 01. Rows for $200K/$100K/$50K "short" by 156.9/129.7/41.4 are noise for a trader who cannot move anymore (scores are final). Show only own band and the band below.
5. Inconsistencies: "Cut scores only rise as more requests come in" plus "Final Season 1 scores. They no longer change" is correct but reads as contradictory to a cold reader; say "Scores are final; the cut only moves when more traders request." ormond 958.2 and tidewater 931.0 differ from the brief's 942.7 / 918.3 (those were Nov 6, acceptable, but flag for consistency with other flows). "Activate within 48 hours" here vs "Activate by Nov 21, 00:00 UTC" on 06: consistent, but say the date here too.
6. Visual: "#14" is huge and good. The clock again competes, and the header chip shows the same 17h 40m.

### 04 Home, cannot request
1. Question: why can't I request. First viewport: yes, "13 days, needs 15, 2 short" is clear.
2. Components: hero with disabled Request seat + "Read the floors"; rank/score side box; floors panel with 3 meters + day by day strip; "Next chance: Season 2" three tips + links + Keep trading; "Why the floors exist" card with 3 stats; "Season 1 close" timeline.
3. Missing: nothing essential.
4. Superfluous: "Why the floors exist" is justification copy with a marketing feel; drop it (the 1,487 / 60 / 2,314 stats do not help this user). The disabled violet Request seat button looks almost active; a disabled primary on a blocked screen is noise, remove it and make "Keep trading" the primary. The "Season 1 close" timeline is irrelevant for someone who cannot request.
5. Inconsistencies: same persona numbers as the eligible kestrel (#17, 801.3, +$498.30, 11.4%) but 13 trading days. 01 says 19 days. Either the flow uses a second persona with its own numbers or the screen must be labelled as a variant. "Back to the request window overview" goes to 01, which shows the eligible version; a cold reader lands on a screen that says they can request. Max drawdown meter sub label "Worst peak to trough ... 25%" reads like the trader's own value; write "Limit 25%".
6. Visual: good. Day strip is a strong, clear component. The red trading days meter is correctly the only red.

### 05 Home, already funded
1. Question: I hold an account, what does the season mean for me. First viewport: partly. The answer (cannot request, keep ranking, next chance depends on window end) is split between the hero and a panel below the funded account card.
2. Components: hero with rank/score box; funded account panel (equity, since start, starting USDC, window day, 3 meters, Open account); "When you can request a seat again" two outcome cards; "Season 2 for you" key/values; "Season 1 request window" card + link.
3. Missing: n/a until the timing is fixed (see 5).
4. Superfluous: the full funded account panel (7 figures, 3 meters) belongs to F05; here one row is enough: "$25K account, equity $5,184.60, window ends Dec 20, Open account". "Season 1 request window" card (612 requests, 60 seats) does not concern this user.
5. Inconsistencies, MUST: the screen is impossible. It is set in the Season 1 request window (Nov 18), but no funded account can exist before Nov 20, the first window start. It also shows a window "Nov 10 to Dec 10, day 9 of 30", which does not exist in the calendar. Move this screen to the Season 2 close (requests Dec 18 to 19): account from Nov 20, 1 month window to Dec 20, day 29 of 30. Then the "request again" rule becomes: above $5,000 on Dec 20 it rolls over; below, the USDC returns and the next chance is the Season 3 close (requests Jan 17, 2027), not Dec 18. Also "Funded $5,184.60" in the header is the brief's day 9 figure; recompute or keep the day 9 equity and accept it. Persona switches to #9 / 846.0 with no explanation.
6. Visual: calm and readable, but the funded panel with the violet "Open account" is the dominant block, so the screen reads as an account home, not a season answer.

### 06 Seat granted
1. Question: I got a seat, what exactly do I get. First viewport: yes, the h1 says $25K and $5,000, then the 8 figure account card.
2. Components: green status line above h1; hero h1 + text + Activate account + deadline hint; account card (8 stats); "Final allocation" ladder + 4 stats; "Share it" card preview + Post on X + Copy link + referral note; "From here" timeline.
3. Missing: "First payout from Jan 15, 2027" omits the condition. With a 1 month window ending Dec 20, Jan 15 is only reachable if the account rolls over. Write "From Jan 15, 2027 (week 8), if the account rolls over". The account card does not show the "every order from funded.onchain.cc or onchain.cc" rule, the one that freezes accounts; fine if 07 shows it.
4. Superfluous: the share card before activation (share after the account is live, or on 07's success state). "Final allocation" is a recap of a process the user no longer needs; keep "#14 of 701, cut at #60" in the hero line and drop the panel. "From here" timeline repeats the hero and the account card.
5. Inconsistencies: "Seats assigned Nov 19, 00:00 UTC" in green above the h1 is an eyebrow, which the brief forbids. "Activate it with one signature and Bitso deposits the USDC" says deposit after signature; 07 shows the deposit already Done before the signature. "Activate: Now. Before Nov 20 to trade from the first minute" is fine. Share card "I earned a funded seat" is the card's marketing voice, acceptable on a share card but the "Funded" pill on it is an eyebrow-like label.
6. Visual: strong hero. The account card's 8 equal stats compete; make $25,000 / $5,000 lead and put the rest in one quiet row.

### 07 Activate account (modal)
1. Question: sign once and start trading. First viewport: yes, the waiting step and the signature details are central.
2. Components: modal header; 3 step vertical stepper with status pills (Done, Waiting, Pending); deposit step with contract address; signature request card (key/value list, expiry timer, Open wallet again); rules step; footer (Back to your seat, disabled Start trading + hint).
3. Missing: what happens when activation is done on Nov 19, before the window opens: "Start trading" cannot work until Nov 20, 00:00 UTC. The success state should say "Trading opens Nov 20, 00:00 UTC, in 23h 50m". The order source rule (fill not matched to a terminal order freezes the account) belongs here, at the moment the trading key is registered.
4. Superfluous: the signature card's 6 rows are right for pros; keep. "Three steps. You sign once. No gas." fine.
5. Inconsistencies: deposit is step 1 and already Done before the user signs, which contradicts 06 ("activate with one signature and Bitso deposits"). Pick one order; the cleaner one is sign, then Bitso deposits, then rules on. Expiry 9:41 shows a colon clock where the rest of the flow uses "9m 41s" style.
6. Visual: good. The disabled Start trading button looks clickable (violet at reduced opacity).

### 08 No seat
1. Question (manifest entry, no seat): did I get one and why not. First viewport: yes, "#73, 7.7 points below the last seat".
2. Components: hero (h1, text, Start Season 2, hint, side box with requester rank, score, last seat); "Where the seats ended" table with cut divider and gap row; "What would have closed the gap" 3 stats; "What you keep" list; "Season 2" timeline + link.
3. Missing: nothing essential.
4. Superfluous: "What you keep" mostly restates the hero sentence "Nothing is lost". "Penalty for not getting a seat: None" is reassurance copy. Net PnL and Max DD columns in the cut table do not explain the order (score does); drop them.
5. Inconsistencies: "Start Season 2" suggests an action is needed; Season 2 is automatic. Use "Go to Season 2" or "Open leaderboard". "Nothing is lost." is a tone slip. Persona switch: score 706.5, rank #96 of 2,314 shows only in "What you keep"; the hero should show the season rank too for a cold reader. "$170 more net profit or 4 pts win rate" are invented estimates; fine as mock, but mark "estimate" in the stat label.
6. Visual: the table with the "Seats end at #60" divider is the best component of the flow. Greyed rows below the cut read well.

### 09 Missed (did not request)
1. Question (manifest: never requested): what happened and what now. First viewport: yes.
2. Components: hero (h1, text, Start Season 2, rank/score/floors box); "What you would have got" greyed offer + pill; "Remind me next time" toggles (2 channels, 3 moments); "Season 2" timeline; "How requesting works" card + link.
3. Missing: nothing essential.
4. Superfluous: "What you would have got" rubs it in with a whole greyed panel; one line in the hero is enough ("You would have had a $25K seat"). "How requesting works" repeats the hero and the reminders. The Season 2 timeline repeats the reminders panel dates.
5. Inconsistencies: "would have been #16 of 701" assumes both traders above requested, while 06 (same persona) says final #14 of 701, so neither did. Use #14 or another total. Same "Start Season 2" label issue as 08.
6. Visual: the reminders panel is the right primary content here, but the violet "Start Season 2" button outranks it. Make "Remind me" the leading block or the primary.

## Flow

Sequence: 01 open, 02 request, 03 requested, 06 granted, 07 activate is complete for the happy path; 04, 05, 08, 09 cover the side states. Missing states:
- Activation success (07 after signature): "Account active, trading opens Nov 20, 00:00 UTC", then Start trading. Needed, the flow currently ends on a waiting modal.
- Activation deadline missed (after Nov 21, 00:00): seat passed to the next requester. Required by the rule stated on 06.
- Granted in a lower band than shown during the window (e.g. two traders above request and push kestrel to a different band). 01 says it cannot happen for kestrel, but the state exists for others.
- Not on the leaderboard at all (entry minimums not met) when the window opens: what the home says. Could be one variant of 04.
- Optional: request withdrawn or edited confirmation (03 offers Change window; the result of that change is not shown).
Merge or drop: 02 step 1 into its header line; 09's "How requesting works" and "What you would have got" drop; 06 "Final allocation" and "From here" drop.

Shared kit components (used on several screens, should live in the kit):
- Band ladder with "You" marker and cut label (01, 03, 06).
- Countdown clock with track and start/end dates (01, 03).
- Vertical timeline/stepper (01, 03, 04, 06, 07, 08, 09).
- Rank/score side box in the hero (04, 05, 08, 09).
- Floors checklist and floors meters (01, 04); the day by day strip (04, also useful for F02/F03).
- Offer strip: band chip + max position + USDC (01, 02, 06, 09).
- Requester table with cut divider and "You" row (03, 08).
- Notification toggles block (03, 09).
- Share card preview (06, likely F07/F08).

## Fix list

MUST
1. 05: move the screen to the Season 2 close (Dec 18, requests close Dec 19 00:00 UTC). Account Nov 20 to Dec 20, day 29 of 30. Next chance below $5,000 is the Season 3 close (Jan 17, 2027), not Dec 18. Fix chip, window dates, days left.
2. 01: "Max loss 10% $500" to "Max loss 10%, floor $4,500", the same form as 02, 06, 07.
3. 06/07: one activation order. Either 06 says "Bitso has deposited $5,000 into your account contract. Sign once to switch it on" or 07 puts the deposit after the signature. Recommended: sign, then deposit, then rules on.
4. 07: add the success state and say trading opens Nov 20, 00:00 UTC when activated before then. "Start trading" cannot lead straight into the terminal on Nov 19.
5. 06: first payout line to "From Jan 15, 2027 (week 8), if the account rolls over". Same in the "From here" timeline.
6. 06: remove the green "Seats assigned Nov 19, 00:00 UTC" eyebrow above the h1; put the date in the paragraph.
7. 04: give the not eligible persona its own numbers (not the eligible kestrel's #17 / 801.3 with 19 vs 13 days), and point "Back to the request window overview" to a neutral target or remove it.
8. 09: "#16 of 701" to "#14 of 701" (or explain why it differs from 06).
9. Add the missing "activation deadline missed" screen (seat passed to the next requester, next chance Season 2 close Dec 18).

SHOULD
1. 01: delete the band table (the ladder plus "7 taken above you, 8 left" in the panel header answers it). Delete the amber banner (hero already says it). Remove "Open now, 18h 12m left" from the timeline.
2. 01: add one bridge line under the hero: "You are #14 among requesters: 3 traders above you did not request or missed the floors."
3. 01, 03: shrink the clock so the offer (01) and requester rank (03) are the largest figures; drop the header chip duplication on these screens or the clock, not both.
4. 03: add "7 of 15 $25K seats taken above you, 8 left" next to #14; drop the "Requesters around you" table or at least its Window column; cut table shows only $25K and $5K rows.
5. 02: drop step 4 as a numbered step (wallet line goes into the footer); rename the button "Sign and request seat"; add the week 8 payout line under the window choice.
6. 04: remove the disabled Request seat and "Why the floors exist"; make "Keep trading" primary.
7. 05: replace the funded panel with one summary row + Open account; drop the "Season 1 request window" card.
8. 06: move the share card to the activation success state; drop "Final allocation" and "From here"; make $25,000 / $5,000 the only large figures in the account card.
9. 08, 09: rename "Start Season 2" to "Go to Season 2"; drop "Nothing is lost.", "Penalty: None", and the Net PnL / Max DD columns.
10. 09: drop "What you would have got" panel and "How requesting works"; make the reminders block the main content.
11. 07: put the order source freeze rule in step 2 (trading key). Expiry as "9m 41s".

COULD
1. 02: no preselected window.
2. 03: a "Withdraw request" link or a line saying a request cannot be withdrawn.
3. 08: label the gap stats "Estimate".
4. Align ormond / tidewater scores with other flows, or note they are final scores.
5. Add a "not on the leaderboard" variant of 04 for traders who never met the entry minimums.
6. Make disabled primary buttons (04, 07) visibly inert (neutral fill, no violet).
