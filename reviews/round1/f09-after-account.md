# Review: F09 After the account

Screens: 01-home-after-loss (Dec 3), 02-competing-again (Dec 10), 03-request-again (Dec 18, 09:40 UTC).
Story: kestrel's Season 1 $25K seat (Nov 20 to Dec 2) closed at max loss; kestrel competes on Season 2
with own money and requests again when Season 2 closes. Dates check out against the canonical
calendar (Season 2 Nov 19 to Dec 18, window Dec 18 to Dec 19 00:00 UTC, 13 active days, $500 = 10% of
$5,000, ladder marker positions, countdowns, 44 to 33 = "11 this week", 1.4 point gap, requester math
on 03). The problems are hierarchy, two false "you could request" claims, and missing states.

---

## 01 Home after losing the account

**1. Question:** "My account is gone. How do I get another one?" First viewport: **partly**. The answer
(request again on Dec 18, and you still need 9 more trading days in the 15 left) is split across a
paragraph, the floors panel and the timeline. The leading figure is rank #44, which answers "where am I
on the board", not "how do I get another account". The flow's cold open is clear enough (closed
yesterday, side panel shows the closed account), but the actual blocker (trading days 6 of 15) sits in
the second panel at a small size.

**2. Components:** app header (member, Season 2 chip, Own $1,284.20); standing hero (label heading,
#44 of 2,871, explanatory paragraph, score 716.8 + sparkline + link, seat ladder, band sentence, Trade
button); floors panel (3 meters, "2 of 3 met" pill, caption); "The account that closed" kv card with
Closed tag; Season 2 timeline card.

**3. Missing:**
- That no payout was due (closed on day 13, payouts start in week 8). A pro trader will ask.
- Final equity on close as a figure (the card says "equity hit $4,500.00"; reduce-only closing can
  slip below the floor, so state the actual returned amount or say "about").
- When a new account would start (funded windows start Dec 20, the day after assignment).

**4. Superfluous / competing:**
- Score + sparkline + "Your Season 2 standing" link compete with #44 and with the closure news.
- Season 2 is counted down three times: header chip (14d 22h), "15 days to climb", timeline "14 days
  22 hours left". Dec 18 appears in paragraph, floors title and timeline.
- Paragraph is 4 lines and repeats "you can request again if you meet the floors" which the floors
  panel already shows.
- Timeline card: only "Season closes Dec 18" matters here; the rest repeats the header.

**5. Inconsistencies:**
- **"If Season 2 closed now you could request a $5K account"** is false: floors are 2 of 3 (trading
  days 6 of 15). If it closed now kestrel could not request.
- Ladder maps board rank to band, but bands are assigned by rank among requesters (03 explains this).
  01 states it as fact with no "about".
- "Days you traded the funded account do not add to these floors" is a rule the brief does not
  contain. It reads as a hidden penalty and contradicts the warm "you are not penalised" line. Confirm
  with Alberto or drop.
- "You are not penalised." in bold is reassurance copy; fine in substance, but the bold plus
  "One account at a time is the only limit" leans to marketing tone. British "penalised" vs "penalty"
  on 02, pick one spelling (US: penalized).
- Own balance $1,284.20 is identical to Season 1 Nov 6 and to 02 and 03 although Season 2 PnL goes
  +$96.40, +$218.40, +$341.20. The header balance should move.
- Heading "Back on your own account, Season 2" is a small label above the number, functioning as an
  eyebrow (same pattern as F03, but the brief forbids eyebrows).

**6. Visual:** the closed-account card (top right) carries the story but is visually equal to the
timeline card below it. The floors panel, which holds the real next step, is the lowest-weight block.
Bottom 300px of the 900 viewport is empty, so there is room to promote the blocker instead of adding.

---

## 02 Competing again

**1. Question:** "I'm back on the board. Does my last account count against me?" First viewport:
**partly**. The answer exists in three places (strip pill "No penalty on your score", right-rail
"Does the last account count?" panel, nothing in the hero). The hero leads with #33 and the band
sentence, so the question in the manifest is answered by secondary elements.

**2. Components:** header (Season 2 ends in 7d 22h); standing hero (#33, "11 this week" pill, sentence,
score 744.2 + sparkline + "How it's built", ladder, gap sentence, Trade); previous account strip
(band, season, close reason, days/trades, "No penalty" pill, Details); floors panel (2 of 3);
"Around you" table (5 rows); Season 2 timeline; "Does the last account count?" explainer (3 items);
"Seats this season" table.

**3. Missing:**
- Days left next to "3 more needed" (8 calendar days remain; the meter foot on 01 had it, 02 drops it).
  This is the only thing standing between kestrel and a seat.

**4. Superfluous / competing:**
- "Seats this season" table duplicates the ladder exactly. Drop.
- Previous account strip and "Does the last account count?" panel say the same thing. Keep one.
- "Around you" table is F03 content; it does not answer this screen's question. Drop or reduce to the
  one gap sentence already in the hero.
- Timeline card again repeats the header countdown.
- Result: 7 blocks on a screen that should be calm with one figure.

**5. Inconsistencies:**
- **"You are inside the seats. If the season closed now you could request a $5K account"** is false:
  trading days are 12 of 15, floors 2 of 3. Same bug as 01.
- "The $25K band starts at #21" is ambiguous ($25K is #7 to #21). Say "The last $25K seat is #21,
  18.6 points above you".
- "On your profile: the closed account stays in your history, where others can see it." Public
  profiles and public loss history are not in the brief. It is also a soft penalty that undercuts
  the screen's answer. Confirm or remove.
- Return +17.0% on +$218.40 implies ~$1,285 starting capital, yet the header balance is still
  $1,284.20 (should be ~$1,503).
- Board size 2,871 is the same on Dec 3, Dec 10 and Dec 18; it should grow as traders meet minimums.
- Season 2 "60 seats" and same band table assumed for S2; the brief only fixes S1. Fine as demo, but
  mark it as an assumption or keep it identical in every flow.

**6. Visual:** the strip's green "No penalty" pill is the strongest green on the page and pulls the eye
away from the hero; green is reserved for PnL and pass/fail. The right rail is taller than the main
column. The "11 this week" pill is green for a rank move (not PnL), borderline against the colour rule.

---

## 03 Request a seat again

**1. Question:** "Season 2 closed. Can I request a seat now?" First viewport: **yes**. #29 final rank,
"Eligible" pill, Request seat button and deadline all visible. Best screen of the flow.

**2. Components:** header (Requests close in 14h 20m, unread dot); hero (label heading, #29, Eligible
pill, paragraph, final score 768.0 + timestamp, two band option cards, requester position block,
window sentence, Request seat); floors panel (3 of 3); request window timeline; "Since your last
account" kv card.

**3. Missing:**
- When the account would start: seats assigned Dec 19 00:00 UTC, funded window starts Dec 20. Only
  "Season 3 starts" is shown.
- "10 of 28 above you have not requested": say whether those 10 meet the floors and hold no seat.
  Ineligible traders cannot push kestrel down, so the risk figure may be overstated.
- That requesting does not stop Season 3 competition on the own account (one line, optional).

**4. Superfluous / competing:**
- Leading figure: #29 (board rank) competes with #19 among requesters, which is what decides the band.
  Two ranks of equal visual weight is confusing. Lead with eligibility, show #19 of 604 as the
  band-deciding number, #29 secondary.
- Paragraph (5 lines) repeats the deadline (header chip, paragraph, timeline), the two bands (also
  in cards) and "does not count against you" (also in right card).
- Floors panel: all 3 met, already summarised by the Eligible pill. Collapse to one line.
- "Since your last account" card: Effect "None" and final rank #29 duplicate the hero; rank on Dec 3
  is history. Drop, or keep one line "Season 1 account closed Dec 2, no effect".
- "Dec 18, 09:40 UTC now" is a mockup time stamp; awkward wording ("Now: Dec 18, 09:40 UTC").

**5. Inconsistencies:**
- "16 of 15" trading days reads like an error. Use "16, 15 needed".
- Score went 744.2 to 768.0 while #21 (the last $25K rank) was 762.8 on Dec 10; final board #29 at
  768.0 is plausible only because the board moved. Fine, but check the "You are here now: $25K"
  pill is about requester rank (#19), and say so on the card.
- Header balance still $1,284.20 with +$341.20 season PnL.
- Heading "Season 2 closed Dec 18. You can request a seat" is again the small label above the figure.

**6. Visual:** the two band cards are near equal; the "likely" one is distinguished only by a thin
border and a grey pill. The requester block is dense small text right above the CTA and pushes the
button to y 560. Fine at 1440, check 1280.

---

## Flow

**Sequence completeness.** The flow tells loss, recovery and eligibility, but stops before the
outcome and skips the hard case. Missing:
- **04 Requested, waiting** (after the button): "Requested, seats assigned in Xh. Window: 1 month."
  The CTA leaves the flow (inactive link), so as an independent project the flow ends mid-action.
- **05 Seat granted again** (Dec 19): new band, USDC, window Dec 20 to ..., limits. Or link the state
  from F04 and show the short version here.
- **Not eligible at close**: trading days short on Dec 18 ("14 of 15, next chance Jan 17, 2027 at
  Season 3 close"). This is the realistic failure after 01 and the flow never shows it.
- **Requested, no seat / pushed out of 60**: edge, but the rules explicitly allow the cut to move.
- Optional: account lost by freeze (unmatched fill) instead of max loss, if eligibility or copy differs.

**Merge / drop.** 01 and 02 are the same layout a week apart. Merge the "does it count" answer into
01 (one line under the closure) and either drop 02 or turn it into the "almost there" state (12 of 15
days, 8 days left) with the answer to its question as the heading. In-flow links between them are time
jumps labelled as navigation ("Your Season 2 standing", "Details", "Back to when the account closed");
label them as states or remove them.

**Shared kit components** (all are page-local CSS copied in every page, and in F03):
- Standing hero (rank figure, score + sparkline, foot sentence + primary CTA).
- Seat ladder by rank with "you" marker and "no seat below #60" segment.
- Floor meter group with "n of 3 met" pill (kit has `.meter`, not the group/pill/foot pattern).
- Season / request window timeline (`.timeline`, `.tl-dot`).
- Account summary card (closed / active) built on `.kv` + `.acct-tag`.
- Band option card (band, max position, USDC) and requester position block (`.cutline`).
- Previous account strip, if kept.

---

## Fix list

### MUST
1. **01 hero foot and 02 hero sentence:** "If Season 2 closed now you could request a $5K account"
   is false while floors are 2 of 3. Change to "Meet the trading days floor and you would be in the
   $5K band (#22 to #60), about $1,000 USDC." or "Not yet: 9 trading days to go." (02: "3 trading
   days to go, 8 days left.")
2. **01:** lead with how to get the account back. H1 "Your $25K account closed on Dec 2. Request a
   new seat on Dec 18." Leading figure: trading days 6 of 15 (9 more in 15 days), rank #44 secondary.
   Move the floors meters into the hero; drop the score sparkline.
3. **02:** make the hero answer the manifest question: heading "Your last account does not count
   against your score or floors", then #33. Drop the duplicate strip pill or the right explainer
   (keep one), drop "Seats this season", drop or shrink "Around you".
4. **01 caption and 02 "On your profile":** remove the two rules not in the brief (funded days not
   counting toward floors; closed account public on profile) or get Alberto's confirmation.
5. **All three:** header own balance must follow Season 2 PnL (01 ~$1,380, 02 ~$1,503, 03 ~$1,626
   with matching return), not $1,284.20 everywhere.
6. **Flow:** add the "not eligible at close" state and a "requested, waiting for Dec 19" state so the
   flow ends inside itself.

### SHOULD
7. **03:** promote "#19 of 604 among requesters" as the band-deciding figure; #29 secondary. Mark
   the likely band card clearly (primary border plus "Likely" label instead of "You are here now").
8. **03:** add "Seats assigned Dec 19, 00:00 UTC. Your window would start Dec 20." in the CTA foot.
9. **03:** collapse the floors panel to one line ("3 of 3 floors met"), drop "Since your last
   account" or reduce it to one kv line.
10. **03:** qualify the 10 traders above as eligible requesters ("10 eligible traders above you have
    not requested yet").
11. **01, 02:** remove the repeated countdowns; keep the header chip and one date (Dec 18) in body.
    Drop the Season 2 timeline card on 01 and 02, or keep it only on 01.
12. **02:** "The $25K band starts at #21" to "The last $25K seat is #21, 18.6 points above you".
    Add "8 days left" to the trading days foot.
13. **01 closed card:** add "Payout: none, the account closed before week 8" and show final returned
    equity as an exact or "about" figure.
14. **All:** replace the small label-above-number headings with a real heading sentence (no eyebrows).
15. **Kit:** promote standing hero, ladder, floor group, timeline, band card into `funded.css`.

### COULD
16. **03:** "16 of 15" to "16, 15 needed"; "Dec 18, 09:40 UTC now" to "Now: Dec 18, 09:40 UTC".
17. **All:** grow the board size across dates (2,871 then e.g. 3,040, 3,118).
18. **02:** neutral colour for the "11 this week" rank pill and the "No penalty" pill (green is for
    PnL and pass/fail).
19. **01:** spelling "penalized" (US English) to match the rest of the product, and drop the bold.
20. Rename in-flow time-jump links ("Details", "Back to when the account closed") so they do not
    look like product navigation, or remove them once states are reachable from the flow index.
