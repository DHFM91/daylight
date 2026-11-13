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
