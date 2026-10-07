# Daily PnL widget (Kevin prefers the line plus day cells view)

Bring back the earlier view: a cumulative PnL line on top and a row of day cells underneath. Fix what looked broken: the line stopped halfway with no continuation.

- **Header:** left "Daily PnL"; right the running total in green or red ("+$413 so far", or "since Nov 19" on a seat) and a muted "8 green · 3 red".
- **One shared day grid.** The cells and the line use the same x positions: each day's cell centre is where that day's line point sits, so the line ends exactly above today's cell.
- **The line:**
  - It ends at today with a filled dot.
  - The dot carries a small value label ("+$413").
  - The area under the line has a light fill.
  - A thin dashed vertical "Today" guide runs from the dot down to today's cell.
- **After today** (qualification only, which has a fixed end):
  - The area to the right of the guide gets a very subtle hatched or shaded zone, labelled "12 days left" at the top.
  - The future cells show as faint outlines inside that zone.
  - The line itself stops at today. Do not project it.
- **Cells:**
  - Green for profit days, red for loss days, intensity by size.
  - Muted for days with no trade.
  - Today outlined.
- **Axis:** start date, today, end date only.
- **Funded seats have no end date.** Show only the elapsed days, with no future zone. The line and cells fill the full width and end at today. When there's a payout divider, it's a dashed vertical line labelled "Payout, Nov 28".
- **Totals must add up:** the line's end value equals the header total, and the green and red counts match the cells.
- Colours only from tokens. All SVG shapes get explicit fills. Labels stay inside the viewBox.
