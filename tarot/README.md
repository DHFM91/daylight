# Daylight Tarot deck

A complete 78-card tarot deck plus a card back, drawn as clean vector art.

- `svg/` has one standalone SVG per card (200 x 320, no external files), numbered in traditional order:
  `00-the-fool.svg` to `21-the-world.svg`, then Wands, Cups, Swords and Pentacles (Ace to King), and `back.svg`.
- `../tarot-cards.js` is the source. It holds the card meanings and draws every card, so other programs can use it directly:
  - Browser: include the script, then `TarotCards.cardSVG(TarotCards.deck[0])` returns the SVG markup.
  - Node: `const TarotCards = require("./tarot-cards.js")`.
  - Each deck entry has `name`, `arcana`, `suit`, `num`, upright (`up`) and reversed (`rev`) keywords, and a short `phrase`.
- To regenerate the SVG files after changing the art: `node tools/export-tarot.js`.

Colour key: Major Arcana violet, Wands orange (fire), Cups blue (water), Swords slate (air), Pentacles green (earth).

## Card art used on the dashboard

The "Today's Global Tarot Draw" widget shows the original 1909 Rider-Waite-Smith deck (art by Pamela Colman Smith, public domain; scans by Saskia Jansen via Wikimedia Commons), stored in `rws/`:

- `rws/major-00.jpg` to `rws/major-21.jpg`, then `rws/wands-01.jpg` to `rws/pentacles-14.jpg` (01 = Ace, 11 = Page, 12 = Knight, 13 = Queen, 14 = King), plus `rws/back.jpg`. Each is 420 x 693.
- Numbering follows the printed cards: VIII is Strength and XI is Justice, the same order as `tarot-cards.js`.
- The same set, plus the full-size scans and per-card sources, lives in the Free Tarot Readings repo (`DHFM91/tarot-table`, `art/`).

The vector deck in `svg/` and `tarot-cards.js` is kept for reuse in other programs. The "Art Style: Classic / Simplified" link under the tarot widget's note switches the dashboard between the 1909 images and this vector deck (remembered per device; first-visit default is `TAROT_ART_STYLE` in `index.html`).
