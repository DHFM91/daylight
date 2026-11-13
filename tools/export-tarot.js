// Writes every card (and the back) as a standalone SVG file into tarot/svg/.
// Run from the repo root:  node tools/export-tarot.js
const fs = require("fs"), path = require("path");
const T = require("../tarot-cards.js");
const out = path.join(__dirname, "..", "tarot", "svg");
fs.mkdirSync(out, { recursive: true });
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
T.deck.forEach((c, i) => fs.writeFileSync(path.join(out, `${String(i).padStart(2, "0")}-${slug(c.name)}.svg`), T.cardSVG(c) + "\n"));
fs.writeFileSync(path.join(out, "back.svg"), T.backSVG() + "\n");
console.log(`Wrote ${T.deck.length + 1} SVG files to ${out}`);
