# Critique: f01 Onboarding

Independent review from screenshots only (1440 wide, demo data). Flow: a visitor from X or a referral understands the offer, sees the live board and the rules, and signs in with the onchain.cc account.

## 01 Landing: "What is this and why should I care?"

| Clarity | Hierarchy | Simplicity | Craft | Trust |
|---|---|---|---|---|
| 8 | 7 | 7 | 7 | 7 |

Problems
1. The hero never says the competition runs on your own money. "No challenge fee" plus "keep 80%" reads like free capital; the catch only appears in step 1 ("From your own account") and in "Two accounts" far below. A pro will feel baited when they find out. Fix: one clause in the subtitle, "Trade your own onchain.cc account for the season; the top 60 get Bitso's USDC". Also drop "requesters" from the hero, it is internal jargon on the first line a stranger reads.
2. The seat card fights the headline for attention and its tier chips are a fake palette: gold, grey, bronze, then two slate greys that nobody can tell apart at 8px. The faded "Board #63 and below / 2,252 traders, no seat" row looks disabled, not informative. Fix: drop the colour squares (the dollar figure is the tier), make the "Last seat, #60" rule the only accent, and show the cut score in full contrast: "Cut today: 701.4".
3. The bottom half thins out into template: a five dot stepper with equal weight, then a "Questions" section with only two questions and ~250px of dead space before the footer. Fix: cut the stepper to three steps (Trade, Make the cut, Get funded) with the dates as the visual anchor, and either add the 4 questions people actually ask (what do I lose, when am I paid, can I lose the seat, regions) or remove the section and end on a second Start trading.

Keep: the headline. "Trade Bitso's real USDC and keep 80% of the profit." is concrete, short, and answers the screen's question in two seconds. The "Your onchain.cc trades since Oct 20 already count" line under the CTAs is also excellent.

## 02 Public leaderboard: "Who is winning seats right now?"

| Clarity | Hierarchy | Simplicity | Craft | Trust |
|---|---|---|---|---|
| 7 | 5 | 4 | 4 | 6 |

Problems
1. Visible bug: the sticky "Last seat, #60, score 701.4" divider is pinned over the table at viewport height and covers row #5 entirely (score, trader and PnL unreadable between #4 and #6). On a page whose whole job is trust in the ranking, a hidden row is fatal. Fix: render the cut line inline between #62 and #63 only; when it is off screen, show it as a compact chip in the table header ("Cut 701.4, 24 rows below"), never floating over rows.
2. Too many ways to slice the same 60 seats: the tier bar card, the five tier header bands in the table, the left filter chips (All / In seats / On the bubble / Can't request) and a second set of tier jump chips on the right ($200K ... Cut). Four systems for one idea is clutter. Fix: keep the tier header bands in the table and the left filters; delete the right chip row; shrink the top card to one line ("60 seats. Cut 701.4. You need 1.8 points to pass corsair_7") or fold it into the header.
3. Two rank columns (Board and Seat) diverge from row #4 on and nobody understands why without reading the footnote. The rows below the cut (#63 to #70) are faded to roughly 25% opacity, failing contrast exactly where a hopeful trader is looking for their name. Fix: lead with Seat, show Board as a small grey prefix only when it differs; fade below the cut to 60%, not 25%. Also unify Trading days: "18 ✓" next to "14/15" mixes two formats; use "14/15" everywhere and colour it.

Also: the tier bar's segment widths are not proportional to anything (1 seat and 4 seats get equal width, 39 seats get triple), so the visual lies. Make it proportional to seats or to USDC, or remove it.

Keep: the "On the bubble" block with the left rule and the per row points to the cut (+9.9, +1.8, -1.8). That is the most useful, most "pro" idea in the flow. The sign in banner ("see your rank, seat and distance to the cut") is also well placed.

## 03 Rules: "What exactly do I have to do, and what can I lose?"

| Clarity | Hierarchy | Simplicity | Craft | Trust |
|---|---|---|---|---|
| 7 | 6 | 6 | 7 | 8 |

Problems
1. The drawdown requirement, the rule that silently kills a season, is a single dense paragraph: "On $1,000: line $900, $950 at a $1,050 high, locked at $1,000 from $1,100." Unreadable at speed. Meanwhile the funded account's trailing liquidation, which is easier, gets a full chart. Fix: give the drawdown requirement the same chart treatment (reuse the component, own account scale), and move it above Score.
2. Three identical three card stat rows (Entry minimums, Performance floors, Claims) make the page look generated and flatten priority: "10 closed trades" carries the same weight as "Kept, all season". Fix: merge Entry minimums and Performance floors into one checklist of six requirements with two columns ("to be on the board" / "to request a seat"); keep cards only for Claims, where 80% deserves to be big.
3. The trailing liquidation chart labels the dot at $27,500 as "Equity $27,500" while the line keeps rising to about $28,200 with no label, so the reader cannot tell which point locked the level. Fix: label the lock event at the moment equity crosses $27,500 ("Level locks at $25,000"), and mark the real peak. The column header "Locked at the size from" in Seats and sizes needs the same plain wording ("Level stops rising at").

Also: content column is ~720px with ~400px of empty space on the right at 1440; fine for reading, but the Seats and sizes table is cramped as a result. Let tables break wider than the prose column.

Keep: "What you can lose" inside each account card, right at the top. It answers the second half of the screen's question before anything else, which is exactly what builds trust. The sticky table of contents is also right.

## 04 Sign in: "How do I get in? Same account as onchain.cc."

| Clarity | Hierarchy | Simplicity | Craft | Trust |
|---|---|---|---|---|
| 8 | 7 | 7 | 7 | 7 |

Problems
1. Nothing tells a newcomer what happens if they have no onchain.cc account, and nothing tells an existing user that picking a different method creates a second, empty account (the classic Privy trap). Fix: subtitle "Pick the method you use on onchain.cc. New here? This creates your account." and, after login, show the detected onchain.cc balance or alias as confirmation.
2. Continue is fully lit violet with an empty email field, so the primary action looks available when it is not, and it outweighs the wallet path most perps traders will use. Fix: disabled style until a valid email is typed; if the referrer is X or a wallet was detected, lead with that row.
3. Row affordances are inconsistent: Google, X and Other wallets have a chevron, MetaMask has a "Detected" pill and no chevron; only the wallet group has a label ("Wallet"), socials have none. The candlestick icon on top is generic and adds nothing. Fix: one row anatomy (icon, label, trailing status or chevron), group labels for both groups or neither, and replace the glyph with the onchain.cc Funded mark. "you accept the rules, once" reads oddly; say "you accept the Season rules".

Keep: the blurred landing behind the modal, with the seat card still faintly visible. The offer stays present while signing in.

## Flow

Overall: **6.8 / 10**. The copy and the information model are strong; the visual system is not yet as disciplined as the thinking.

Patterns across screens
- Excellent product language ("Two accounts, never mixed", "distance to the cut", "What you can lose"), consistent between landing and rules.
- Too many parallel representations of the seat ladder: hero card, tier bar, tier bands, tier chips, sizes table. Each screen re-explains it in a new shape.
- Templated components repeat: numbered stepper, three stat cards (three times on Rules), two column FAQ.
- The colour of the tier chips (gold, grey, bronze, slate, slate) is a medal metaphor that breaks at the fourth tier and competes with violet and green/red.
- Faded states are overused (board #63 rows, "no seat" row in the hero card) and fall below readable contrast.
- The own money catch is told clearly on Rules, late on Landing.

Prioritized fixes
1. Fix the floating "Last seat, #60" divider covering row #5 on the leaderboard.
2. Say "your own account competes" in the landing hero subtitle; remove "requesters".
3. Cut the leaderboard to one slicing system: tier bands plus left filters; drop the right tier chips and shrink the top tier card to a one line cut summary.
4. Chart the drawdown requirement on Rules like trailing liquidation, and move it up.
5. One tier style across the flow: dollar label in neutral, no medal colours; violet only for actions and "you".
6. Raise contrast of below cut and "no seat" rows to at least 60%; unify Trading days as "n/15".
7. Sign in: clarify new vs existing account, disable empty Continue, one row anatomy.
8. Replace the five step stepper and thin FAQ on the landing with three steps and the four real questions, or end on the CTA.
