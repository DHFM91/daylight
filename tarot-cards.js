/* Daylight Tarot — a complete 78-card deck drawn as SVG.
   Usage (browser):  TarotCards.cardSVG(TarotCards.deck[0])  ->  "<svg ...>"
                     TarotCards.backSVG()
   Usage (Node):     const TarotCards = require("./tarot-cards.js");
   Every card is a self-contained 200x320 SVG with no external assets. */
var TAROT = [
{ name: "The Fool", arcana: "major", num: "0", suit: null, up: "new beginnings, spontaneity, a leap of faith", rev: "recklessness, hesitation, a false start", phrase: "a fresh start that asks you to trust the leap" },
{ name: "The Magician", arcana: "major", num: "I", suit: null, up: "willpower, skill, resourcefulness", rev: "scattered focus, untapped potential, poor planning", phrase: "the power to turn your ideas into something real" },
{ name: "The High Priestess", arcana: "major", num: "II", suit: null, up: "intuition, inner knowing, quiet mystery", rev: "ignored instincts, secrets, disconnection from yourself", phrase: "a quiet invitation to listen to your inner voice" },
{ name: "The Empress", arcana: "major", num: "III", suit: null, up: "nurturing, abundance, creativity", rev: "overgiving, creative block, neglecting yourself", phrase: "the abundance that grows when you nurture what you love" },
{ name: "The Emperor", arcana: "major", num: "IV", suit: null, up: "structure, authority, stability", rev: "rigidity, control issues, a lack of discipline", phrase: "the steady structure that gives your goals a firm foundation" },
{ name: "The Hierophant", arcana: "major", num: "V", suit: null, up: "tradition, guidance, shared values", rev: "nonconformity, questioning rules, personal beliefs", phrase: "the wisdom found in tradition and trusted teachers" },
{ name: "The Lovers", arcana: "major", num: "VI", suit: null, up: "love, harmony, aligned choices", rev: "disharmony, misalignment, a difficult decision", phrase: "a heartfelt choice that reflects what you truly value" },
{ name: "The Chariot", arcana: "major", num: "VII", suit: null, up: "determination, momentum, victory", rev: "lack of direction, scattered energy, loss of control", phrase: "focused determination that carries you steadily toward your goal" },
{ name: "Strength", arcana: "major", num: "VIII", suit: null, up: "courage, patience, gentle resilience", rev: "self-doubt, low confidence, raw emotion", phrase: "the quiet courage of meeting challenges with patience and compassion" },
{ name: "The Hermit", arcana: "major", num: "IX", suit: null, up: "solitude, reflection, inner guidance", rev: "isolation, withdrawal, resisting reflection", phrase: "a pause for solitude and looking inward for answers" },
{ name: "Wheel of Fortune", arcana: "major", num: "X", suit: null, up: "cycles, change, good timing", rev: "resistance to change, setbacks, bad timing", phrase: "the turning of cycles and the change that comes with them" },
{ name: "Justice", arcana: "major", num: "XI", suit: null, up: "fairness, truth, accountability", rev: "bias, dishonesty, avoiding responsibility", phrase: "fairness and honesty guiding the choices you make now" },
{ name: "The Hanged Man", arcana: "major", num: "XII", suit: null, up: "surrender, new perspective, pause", rev: "stalling, resistance, needless sacrifice", phrase: "a pause that lets you see things from a new angle" },
{ name: "Death", arcana: "major", num: "XIII", suit: null, up: "endings, transformation, release", rev: "resisting change, clinging to the past, slow transition", phrase: "a meaningful ending that makes room for transformation and renewal" },
{ name: "Temperance", arcana: "major", num: "XIV", suit: null, up: "balance, moderation, patience", rev: "imbalance, excess, impatience", phrase: "a gentle balance found through patience and moderation" },
{ name: "The Devil", arcana: "major", num: "XV", suit: null, up: "attachment, temptation, shadow side", rev: "release, breaking free, reclaiming your power", phrase: "noticing the habits that bind you and choosing freedom" },
{ name: "The Tower", arcana: "major", num: "XVI", suit: null, up: "sudden change, upheaval, revelation", rev: "avoiding change, fear of disruption, slow rebuilding", phrase: "an unexpected shake-up that clears away what was unstable" },
{ name: "The Star", arcana: "major", num: "XVII", suit: null, up: "hope, healing, inspiration", rev: "discouragement, lost faith, disconnection", phrase: "renewed hope and a calm sense of healing" },
{ name: "The Moon", arcana: "major", num: "XVIII", suit: null, up: "intuition, dreams, uncertainty", rev: "clarity emerging, released fear, confusion lifting", phrase: "a time of dreams and uncertainty where intuition lights the way" },
{ name: "The Sun", arcana: "major", num: "XIX", suit: null, up: "joy, vitality, success", rev: "dimmed enthusiasm, temporary clouds, delayed happiness", phrase: "warmth, joy, and a bright sense of confidence" },
{ name: "Judgement", arcana: "major", num: "XX", suit: null, up: "reflection, awakening, a calling", rev: "self-doubt, avoiding the call, harsh self-criticism", phrase: "an awakening that invites you to answer a deeper calling" },
{ name: "The World", arcana: "major", num: "XXI", suit: null, up: "completion, fulfillment, wholeness", rev: "loose ends, delays, almost finished", phrase: "the satisfying completion of a cycle and a sense of wholeness" },
{ name: "Ace of Wands", arcana: "minor", num: "A", suit: "wands", up: "inspiration, new energy, creative spark", rev: "delays, lack of motivation, a dim spark", phrase: "a spark of inspiration ready to be turned into action" },
{ name: "Two of Wands", arcana: "minor", num: "2", suit: "wands", up: "planning, vision, future goals", rev: "indecision, fear of the unknown, playing it small", phrase: "planning ahead and weighing the bigger vision for your future" },
{ name: "Three of Wands", arcana: "minor", num: "3", suit: "wands", up: "expansion, foresight, progress", rev: "delays, obstacles, waiting longer than hoped", phrase: "growth on the horizon as your earlier efforts begin to pay off" },
{ name: "Four of Wands", arcana: "minor", num: "4", suit: "wands", up: "celebration, community, homecoming", rev: "instability, tension at home, uncertain belonging", phrase: "a joyful celebration with the people who make you feel at home" },
{ name: "Five of Wands", arcana: "minor", num: "5", suit: "wands", up: "competition, friction, differing opinions", rev: "resolving conflict, avoiding tension, finding common ground", phrase: "friendly competition and the lively clash of differing ideas" },
{ name: "Six of Wands", arcana: "minor", num: "6", suit: "wands", up: "victory, recognition, confidence", rev: "self-doubt, delayed recognition, pride", phrase: "well-earned recognition and the confidence that follows a success" },
{ name: "Seven of Wands", arcana: "minor", num: "7", suit: "wands", up: "defending your position, perseverance, conviction", rev: "exhaustion, giving way, feeling overwhelmed", phrase: "standing your ground and staying true to your convictions" },
{ name: "Eight of Wands", arcana: "minor", num: "8", suit: "wands", up: "speed, swift progress, news arriving", rev: "delays, frustration, scattered momentum", phrase: "swift movement and quick progress as things fall into place" },
{ name: "Nine of Wands", arcana: "minor", num: "9", suit: "wands", up: "resilience, persistence, last stretch", rev: "fatigue, defensiveness, near burnout", phrase: "the resilience to keep going through the final stretch" },
{ name: "Ten of Wands", arcana: "minor", num: "10", suit: "wands", up: "heavy responsibility, hard work, commitment", rev: "letting go, delegating, setting burdens down", phrase: "a heavy load that invites you to share the weight" },
{ name: "Page of Wands", arcana: "minor", num: "P", suit: "wands", up: "curiosity, enthusiasm, new ideas", rev: "restlessness, hesitation, unfinished plans", phrase: "curious enthusiasm for a bold new idea worth exploring" },
{ name: "Knight of Wands", arcana: "minor", num: "Kn", suit: "wands", up: "energy, adventure, passion", rev: "impulsiveness, impatience, scattered drive", phrase: "bold, adventurous energy that pushes you into motion" },
{ name: "Queen of Wands", arcana: "minor", num: "Q", suit: "wands", up: "confidence, warmth, determination", rev: "insecurity, withdrawal, wavering spirit", phrase: "warm confidence that draws others toward your passion" },
{ name: "King of Wands", arcana: "minor", num: "K", suit: "wands", up: "leadership, vision, bold action", rev: "overbearing, impatience, unrealistic expectations", phrase: "visionary leadership that turns a big idea into reality" },
{ name: "Ace of Cups", arcana: "minor", num: "A", suit: "cups", up: "new love, emotional openness, compassion", rev: "emotional blockage, guarded feelings, held-back love", phrase: "an open heart and the start of something emotionally rich" },
{ name: "Two of Cups", arcana: "minor", num: "2", suit: "cups", up: "partnership, mutual attraction, connection", rev: "imbalance, miscommunication, drifting apart", phrase: "a balanced partnership built on mutual respect and affection" },
{ name: "Three of Cups", arcana: "minor", num: "3", suit: "cups", up: "friendship, celebration, community", rev: "overindulgence, gossip, feeling left out", phrase: "joyful friendship and the pleasure of celebrating together" },
{ name: "Four of Cups", arcana: "minor", num: "4", suit: "cups", up: "contemplation, apathy, reevaluation", rev: "renewed interest, awareness, accepting an offer", phrase: "a thoughtful pause to reconsider what you really want" },
{ name: "Five of Cups", arcana: "minor", num: "5", suit: "cups", up: "grief, regret, looking back", rev: "acceptance, moving on, finding hope again", phrase: "honest mourning of a loss and the hope that remains" },
{ name: "Six of Cups", arcana: "minor", num: "6", suit: "cups", up: "nostalgia, childhood memories, kindness", rev: "stuck in the past, unrealistic memories, moving forward", phrase: "tender nostalgia and the simple kindness of old memories" },
{ name: "Seven of Cups", arcana: "minor", num: "7", suit: "cups", up: "choices, imagination, wishful thinking", rev: "clarity, decisiveness, seeing through illusions", phrase: "a wide field of dreams and the need to choose wisely" },
{ name: "Eight of Cups", arcana: "minor", num: "8", suit: "cups", up: "walking away, seeking meaning, moving on", rev: "fear of leaving, drifting, avoiding change", phrase: "the courage to walk away in search of deeper meaning" },
{ name: "Nine of Cups", arcana: "minor", num: "9", suit: "cups", up: "contentment, satisfaction, wishes fulfilled", rev: "dissatisfaction, smugness, hollow pleasure", phrase: "quiet contentment and the satisfaction of a wish fulfilled" },
{ name: "Ten of Cups", arcana: "minor", num: "10", suit: "cups", up: "family harmony, lasting happiness, emotional fulfillment", rev: "strained relationships, disconnection, unmet ideals", phrase: "lasting happiness shared with the people you love" },
{ name: "Page of Cups", arcana: "minor", num: "P", suit: "cups", up: "sensitivity, creative inspiration, a sweet message", rev: "emotional immaturity, mood swings, creative block", phrase: "a gentle, imaginative message that stirs your creative heart" },
{ name: "Knight of Cups", arcana: "minor", num: "Kn", suit: "cups", up: "romance, charm, following your heart", rev: "moodiness, unrealistic expectations, overidealizing", phrase: "a romantic offering and the call to follow your heart" },
{ name: "Queen of Cups", arcana: "minor", num: "Q", suit: "cups", up: "compassion, emotional depth, intuition", rev: "emotional overwhelm, dependence, blurred boundaries", phrase: "compassionate emotional depth that offers comfort and understanding" },
{ name: "King of Cups", arcana: "minor", num: "K", suit: "cups", up: "emotional balance, diplomacy, calm wisdom", rev: "mood swings, suppressed feelings, emotional distance", phrase: "calm emotional balance and the wisdom to lead with kindness" },
{ name: "Ace of Swords", arcana: "minor", num: "A", suit: "swords", up: "clarity, truth, a breakthrough", rev: "confusion, clouded thinking, unclear ideas", phrase: "a breakthrough of clarity that cuts through the confusion" },
{ name: "Two of Swords", arcana: "minor", num: "2", suit: "swords", up: "a difficult choice, stalemate, balance", rev: "indecision, information coming out, release of tension", phrase: "a pause at a crossroads where a hard choice awaits" },
{ name: "Three of Swords", arcana: "minor", num: "3", suit: "swords", up: "heartache, sorrow, honest grief", rev: "healing, forgiveness, recovering from pain", phrase: "honest sorrow that must be felt before healing can begin" },
{ name: "Four of Swords", arcana: "minor", num: "4", suit: "swords", up: "rest, recovery, quiet restoration", rev: "restlessness, burnout, returning to activity", phrase: "a much-needed rest that restores your mind and body" },
{ name: "Five of Swords", arcana: "minor", num: "5", suit: "swords", up: "conflict, hollow victory, tension", rev: "reconciliation, regret, letting the conflict go", phrase: "a conflict that asks what winning is really worth" },
{ name: "Six of Swords", arcana: "minor", num: "6", suit: "swords", up: "transition, moving on, calmer waters", rev: "resistance to moving on, unresolved baggage, delays", phrase: "a gentle passage toward calmer waters and a fresh start" },
{ name: "Seven of Swords", arcana: "minor", num: "7", suit: "swords", up: "strategy, stealth, acting alone", rev: "coming clean, conscience, being found out", phrase: "a careful strategy and the question of honest dealing" },
{ name: "Eight of Swords", arcana: "minor", num: "8", suit: "swords", up: "feeling trapped, self-imposed limits, restriction", rev: "release, new perspective, freeing yourself", phrase: "limits that feel real but may be loosened by a fresh view" },
{ name: "Nine of Swords", arcana: "minor", num: "9", suit: "swords", up: "anxiety, worry, sleepless nights", rev: "relief, hope returning, facing your fears", phrase: "heavy worries that grow lighter once you speak them aloud" },
{ name: "Ten of Swords", arcana: "minor", num: "10", suit: "swords", up: "a painful ending, release, hitting bottom", rev: "recovery, slow healing, learning from the past", phrase: "a painful ending that finally clears the way for renewal" },
{ name: "Page of Swords", arcana: "minor", num: "P", suit: "swords", up: "curiosity, sharp thinking, new ideas", rev: "hasty words, scattered thoughts, gossip", phrase: "sharp curiosity and a hunger to learn something new" },
{ name: "Knight of Swords", arcana: "minor", num: "Kn", suit: "swords", up: "ambition, quick action, directness", rev: "impulsiveness, bluntness, rushing ahead", phrase: "fast-moving ambition that needs a steady and thoughtful aim" },
{ name: "Queen of Swords", arcana: "minor", num: "Q", suit: "swords", up: "clear thinking, honesty, independence", rev: "coldness, guardedness, overly harsh judgment", phrase: "clear-eyed honesty delivered with independence and a sharp mind" },
{ name: "King of Swords", arcana: "minor", num: "K", suit: "swords", up: "intellect, fairness, reasoned authority", rev: "rigid thinking, detachment, misuse of authority", phrase: "fair, reasoned judgment grounded in knowledge and integrity" },
{ name: "Ace of Pentacles", arcana: "minor", num: "A", suit: "pentacles", up: "new opportunity, prosperity, a solid start", rev: "missed chance, poor planning, shaky footing", phrase: "a promising opportunity with solid ground beneath it" },
{ name: "Two of Pentacles", arcana: "minor", num: "2", suit: "pentacles", up: "balancing priorities, adaptability, juggling tasks", rev: "overwhelm, disorganization, stretched too thin", phrase: "the graceful juggling of competing priorities with a flexible mind" },
{ name: "Three of Pentacles", arcana: "minor", num: "3", suit: "pentacles", up: "teamwork, craftsmanship, collaboration", rev: "disharmony, poor teamwork, lack of effort", phrase: "teamwork and skilled craft that build something lasting together" },
{ name: "Four of Pentacles", arcana: "minor", num: "4", suit: "pentacles", up: "security, saving, holding on", rev: "generosity, loosening your grip, overspending", phrase: "a careful grip on security and the question of when to loosen it" },
{ name: "Five of Pentacles", arcana: "minor", num: "5", suit: "pentacles", up: "hardship, feeling left out, need for support", rev: "recovery, help arriving, improving circumstances", phrase: "a lean season that reminds you help is closer than it seems" },
{ name: "Six of Pentacles", arcana: "minor", num: "6", suit: "pentacles", up: "generosity, sharing, fair exchange", rev: "strings attached, imbalance, uneven giving", phrase: "generosity and the fair, open-handed sharing of resources" },
{ name: "Seven of Pentacles", arcana: "minor", num: "7", suit: "pentacles", up: "patience, long-term effort, assessing progress", rev: "impatience, doubts about results, poor returns", phrase: "patient tending of long-term effort while you wait for growth" },
{ name: "Eight of Pentacles", arcana: "minor", num: "8", suit: "pentacles", up: "diligence, skill building, dedication", rev: "perfectionism, boredom, lack of focus", phrase: "steady dedication to learning and improving your craft" },
{ name: "Nine of Pentacles", arcana: "minor", num: "9", suit: "pentacles", up: "self-reliance, comfort, earned rewards", rev: "overworking, dependence, insecure finances", phrase: "comfortable independence and the quiet reward of your own effort" },
{ name: "Ten of Pentacles", arcana: "minor", num: "10", suit: "pentacles", up: "legacy, family security, lasting wealth", rev: "family friction, unstable foundations, financial worries", phrase: "a lasting legacy and the security of a well-built foundation" },
{ name: "Page of Pentacles", arcana: "minor", num: "P", suit: "pentacles", up: "study, ambition, a practical new start", rev: "procrastination, lack of focus, unrealistic plans", phrase: "a practical new start and the eagerness to learn" },
{ name: "Knight of Pentacles", arcana: "minor", num: "Kn", suit: "pentacles", up: "reliability, hard work, steady progress", rev: "stagnation, stubbornness, perfectionism", phrase: "dependable, steady effort that wins through patience and persistence" },
{ name: "Queen of Pentacles", arcana: "minor", num: "Q", suit: "pentacles", up: "nurturing, practicality, abundance", rev: "self-neglect, overwork, imbalance at home", phrase: "practical care that makes a comfortable and abundant home" },
{ name: "King of Pentacles", arcana: "minor", num: "K", suit: "pentacles", up: "prosperity, stability, generous leadership", rev: "greed, stubbornness, overemphasis on material things", phrase: "grounded prosperity and the steady leadership of a patient provider" }
];

(function (root) {
  "use strict";

  const THEME = {
    major:     { ink: "#4c1d95", tint: "#ede9fe", accent: "#c9a227", label: "MAJOR ARCANA" },
    wands:     { ink: "#c2410c", tint: "#ffedd5", accent: "#c9a227", label: "WANDS \u00B7 FIRE" },
    cups:      { ink: "#1d4ed8", tint: "#dbeafe", accent: "#c9a227", label: "CUPS \u00B7 WATER" },
    swords:    { ink: "#475569", tint: "#e2e8f0", accent: "#c9a227", label: "SWORDS \u00B7 AIR" },
    pentacles: { ink: "#15803d", tint: "#dcfce7", accent: "#c9a227", label: "PENTACLES \u00B7 EARTH" }
  };
  const PAPER = "#fbf7ee", GOLD = "#c9a227", DARK = "#1f2937";
  const SERIF = "Georgia, 'Times New Roman', serif";

  /* ---------- suit symbols, drawn in a 0..24 box ---------- */
  const SUIT_ICON = {
    wands: (c) => `<rect x="9.8" y="2" width="4.4" height="21" rx="2.2" fill="${c}"/>
      <path d="M10.2 7.5c-2.2-.4-4.4.4-5.6 2.2 2.2.6 4.4 0 5.6-2.2zM13.8 12c2.2-.4 4.4.4 5.6 2.2-2.2.6-4.4 0-5.6-2.2zM10.2 16.2c-2-.3-4 .4-5.1 2 2 .6 4 0 5.1-2z" fill="#65a30d"/>
      <circle cx="12" cy="2.4" r="2.2" fill="${GOLD}"/>`,
    cups: (c) => `<path d="M4.5 2.5h15c0 6.6-3.2 10-7.5 10s-7.5-3.4-7.5-10z" fill="${c}"/>
      <path d="M6.2 4.3h11.6" stroke="${GOLD}" stroke-width="1.2"/>
      <rect x="10.9" y="12.3" width="2.2" height="6" fill="${c}"/>
      <path d="M6.5 22h11l-2-3.8h-7z" fill="${c}"/>`,
    swords: (c) => `<path d="M12 .6l3 3.6v12.3H9V4.2z" fill="#cbd5e1" stroke="${c}" stroke-width="1.1"/>
      <path d="M12 3v13" stroke="${c}" stroke-width=".7" opacity=".6"/>
      <rect x="5.5" y="16" width="13" height="2.4" rx="1.2" fill="${GOLD}"/>
      <rect x="10.9" y="18.3" width="2.2" height="3.6" fill="${c}"/>
      <circle cx="12" cy="22.6" r="1.4" fill="${GOLD}"/>`,
    pentacles: (c) => `<circle cx="12" cy="12" r="10.3" fill="${GOLD}" stroke="${c}" stroke-width="1.4"/>
      <circle cx="12" cy="12" r="8" fill="none" stroke="${c}" stroke-width=".8"/>
      <path d="${star(12, 12.6, 6.6, 2.7, 5)}" fill="${c}"/>`
  };
  function star(cx, cy, R, r, n, rot = -90) {
    let d = "";
    for (let i = 0; i < n * 2; i++) {
      const a = (rot + i * 180 / n) * Math.PI / 180, rad = i % 2 ? r : R;
      d += (i ? "L" : "M") + (cx + rad * Math.cos(a)).toFixed(2) + "," + (cy + rad * Math.sin(a)).toFixed(2);
    }
    return d + "Z";
  }
  const place = (inner, x, y, size) => `<g transform="translate(${(x - size / 2).toFixed(1)} ${(y - size / 2).toFixed(1)}) scale(${(size / 24).toFixed(3)})">${inner}</g>`;

  /* ---------- Major Arcana emblems, drawn in a 0..100 box ---------- */
  // c = ink colour, t = tint, g = gold
  const S = (c, w = 2.6) => `fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`;
  const sunRays = (cx, cy, r, R, n, c, w = 2.4) => Array.from({ length: n }, (_, i) => { const a = i * 2 * Math.PI / n; return `<path d="M${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}L${(cx + R * Math.cos(a)).toFixed(1)},${(cy + R * Math.sin(a)).toFixed(1)}" ${S(c, w)}/>`; }).join("");
  const MAJOR_ART = [
    /* 0 Fool */ (c, t, g) => `${sunRays(76, 20, 10, 16, 12, g)}<circle cx="76" cy="20" r="8" fill="${g}"/>
      <path d="M4 84h58v12" ${S(c, 3.2)}/><path d="M62 84l6 4M62 90l7 2" ${S(c, 1.6)}/>
      <circle cx="36" cy="36" r="6.5" fill="${c}"/>
      <path d="M36 43l2 22M38 65l-8 18M38 65l10 15M37 50l12 8M36 50l-10-8" ${S(c, 3.4)}/>
      <path d="M26 42l-8-14" ${S(c, 2.6)}/><circle cx="16" cy="25" r="6" fill="${g}" stroke="${c}" stroke-width="2"/>
      <path d="M49 58c3-4 6-3 8-1-2 1-4 3-4 6" fill="#fff" stroke="${c}" stroke-width="2" stroke-linejoin="round"/>`,
    /* I Magician */ (c, t, g) => `<path d="M30 22c-10 0-10-12 0-12s20 12 30 12 10-12 0-12-20 12-30 12z" transform="translate(5 2)" ${S(g, 3.2)}/>
      <path d="M50 34v52" ${S(c, 4)}/><circle cx="50" cy="33" r="4" fill="${c}"/>
      <path d="M22 88h56" ${S(c, 3)}/>
      ${place(SUIT_ICON.cups(c), 26, 64, 16)}${place(SUIT_ICON.pentacles(c), 74, 64, 16)}${place(SUIT_ICON.swords(c), 26, 44, 14)}${place(SUIT_ICON.wands(c), 74, 44, 14)}`,
    /* II High Priestess */ (c, t, g) => `<rect x="14" y="20" width="14" height="70" rx="2" fill="${c}"/><rect x="72" y="20" width="14" height="70" rx="2" fill="#fff" stroke="${c}" stroke-width="2.4"/>
      <text x="21" y="60" text-anchor="middle" font-family="${SERIF}" font-size="12" font-weight="700" fill="#fff">B</text><text x="79" y="60" text-anchor="middle" font-family="${SERIF}" font-size="12" font-weight="700" fill="${c}">J</text>
      <path d="M58 30a20 20 0 1 0 0 36 16 16 0 1 1 0-36z" fill="${g}"/><path d="M38 84h24" ${S(c)}/><path d="M50 72v12" ${S(c)}/>`,
    /* III Empress */ (c, t, g) => `${Array.from({ length: 9 }, (_, i) => { const a = Math.PI + i * Math.PI / 8; return `<path d="${star(50 + 30 * Math.cos(a), 34 + 18 * Math.sin(a), 3.4, 1.4, 6)}" fill="${g}"/>`; }).join("")}
      <circle cx="50" cy="48" r="16" ${S(c, 4)}/><path d="M50 64v24M40 77h20" ${S(c, 4)}/>
      <path d="M20 90c0-14 4-22 8-26M80 90c0-14-4-22-8-26" ${S("#65a30d", 2.4)}/><path d="M24 74l4 4M26 68l3 3M76 74l-4 4M74 68l-3 3" ${S("#65a30d", 2)}/>`,
    /* IV Emperor */ (c, t, g) => `<path d="M24 46l8-20 10 12 8-18 8 18 10-12 8 20z" fill="${g}" stroke="${c}" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="24" y="46" width="52" height="8" fill="${c}"/>
      <rect x="30" y="58" width="40" height="30" fill="${t}" stroke="${c}" stroke-width="2.6"/>
      <path d="M22 64c-8-2-10 8-4 10M78 64c8-2 10 8 4 10" ${S(c, 2.6)}/><circle cx="50" cy="73" r="6" fill="${g}"/>`,
    /* V Hierophant */ (c, t, g) => `<path d="M50 12v76M38 26h24M34 38h32M30 50h40" ${S(c, 4)}/>
      <g ${S(g, 3)}><circle cx="34" cy="76" r="6"/><path d="M38 80l14 10M48 86l3-4"/><circle cx="66" cy="76" r="6"/><path d="M62 80l-14 10M52 86l-3-4"/></g>`,
    /* VI Lovers */ (c, t, g) => `${sunRays(50, 22, 10, 16, 12, g)}<circle cx="50" cy="22" r="8" fill="${g}"/>
      <path d="M38 50c-8-10-24-2-16 10l16 18 16-18c8-12-8-20-16-10z" fill="${c}" opacity=".85"/>
      <path d="M62 50c-8-10-24-2-16 10l16 18 16-18c8-12-8-20-16-10z" fill="#fff" stroke="${c}" stroke-width="2.6"/>`,
    /* VII Chariot */ (c, t, g) => `<path d="${star(50, 18, 9, 3.6, 8)}" fill="${g}"/>
      <path d="M22 34q28-10 56 0" ${S(c, 3)}/><path d="M26 34v18M74 34v18" ${S(c, 2.4)}/>
      <rect x="22" y="52" width="56" height="20" rx="3" fill="${t}" stroke="${c}" stroke-width="2.6"/>
      <circle cx="30" cy="80" r="9" ${S(c, 3)}/><circle cx="70" cy="80" r="9" ${S(c, 3)}/><path d="M30 71v18M21 80h18M70 71v18M61 80h18" ${S(c, 1.6)}/>`,
    /* VIII Strength */ (c, t, g) => `<path d="M30 18c-8 0-8-9 0-9s16 9 24 9 8-9 0-9-16 9-24 9z" transform="translate(8 2)" ${S(g, 3)}/>
      <path d="${star(50, 60, 30, 21, 14)}" fill="${g}" stroke="${c}" stroke-width="1.6" stroke-linejoin="round"/>
      <circle cx="50" cy="60" r="18" fill="${t}" stroke="${c}" stroke-width="2.4"/>
      <circle cx="43" cy="56" r="2.4" fill="${c}"/><circle cx="57" cy="56" r="2.4" fill="${c}"/><path d="M46 64l4 4 4-4M50 68v4" ${S(c, 2.2)}/>`,
    /* IX Hermit */ (c, t, g) => `<path d="M30 10v80" ${S(c, 3.4)}/><path d="M30 20h20" ${S(c, 2.4)}/><path d="M50 20v8" ${S(c, 2)}/>
      <path d="M40 30h20l-3 34H43z" fill="${t}" stroke="${c}" stroke-width="2.6" stroke-linejoin="round"/><path d="M38 30h24M41 64h18" ${S(c, 3)}/>
      <path d="${star(50, 46, 9, 4.5, 6)}" fill="${g}"/>
      ${sunRays(50, 46, 20, 26, 8, g, 1.6)}`,
    /* X Wheel of Fortune */ (c, t, g) => `<circle cx="50" cy="50" r="36" ${S(c, 4)}/><circle cx="50" cy="50" r="27" ${S(g, 2)}/><circle cx="50" cy="50" r="8" fill="${g}" stroke="${c}" stroke-width="2.4"/>
      ${Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return `<path d="M${(50 + 8 * Math.cos(a)).toFixed(1)},${(50 + 8 * Math.sin(a)).toFixed(1)}L${(50 + 36 * Math.cos(a)).toFixed(1)},${(50 + 36 * Math.sin(a)).toFixed(1)}" ${S(c, 2.2)}/>`; }).join("")}
      ${["T", "A", "R", "O"].map((l, i) => { const a = -Math.PI / 2 + i * Math.PI / 2 + Math.PI / 4; return `<text x="${(50 + 31.5 * Math.cos(a)).toFixed(1)}" y="${(54 + 31.5 * Math.sin(a)).toFixed(1)}" text-anchor="middle" font-family="${SERIF}" font-size="9" font-weight="700" fill="${c}">${l}</text>`; }).join("")}`,
    /* XI Justice */ (c, t, g) => `<path d="M50 12v74M30 88h40" ${S(c, 3.4)}/><path d="M22 30h56" ${S(c, 3)}/><circle cx="50" cy="12" r="4" fill="${g}"/>
      <path d="M22 30l-10 26h20zM78 30l-10 26h20z" ${S(c, 1.8)}/><path d="M10 56a12 6 0 0 0 24 0zM66 56a12 6 0 0 0 24 0z" fill="${g}" stroke="${c}" stroke-width="2"/>`,
    /* XII Hanged Man */ (c, t, g) => `<path d="M20 14h60M30 14v-4M70 14v-4" ${S(c, 4)}/><path d="M50 14v14" ${S(c, 2.4)}/>
      <path d="M50 28v30M50 28l-12 14M50 40l12 0M42 50l8 8 8-8" ${S(c, 3)}/>
      <circle cx="50" cy="70" r="12" fill="${g}" opacity=".35"/><circle cx="50" cy="70" r="7" fill="${c}"/>`,
    /* XIII Death */ (c, t, g) => `${Array.from({ length: 5 }, (_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; return `<circle cx="${(50 + 15 * Math.cos(a)).toFixed(1)}" cy="${(46 + 15 * Math.sin(a)).toFixed(1)}" r="13" fill="#fff" stroke="${c}" stroke-width="2.4"/>`; }).join("")}
      <circle cx="50" cy="46" r="9" fill="${g}" stroke="${c}" stroke-width="2"/>
      <path d="M50 72v18M50 82c-6-2-10 0-12 4M50 80c6-2 10 0 12 4" ${S("#65a30d", 2.4)}/>`,
    /* XIV Temperance */ (c, t, g) => `${place(SUIT_ICON.cups(c), 26, 36, 30)}${place(SUIT_ICON.cups(c), 74, 70, 30)}
      <path d="M32 30c18 4 34 18 38 34" fill="none" stroke="#38bdf8" stroke-width="3.4" stroke-linecap="round" stroke-dasharray="1 6"/>
      <path d="M8 90h84" ${S(c, 2)}/><path d="${star(80, 20, 7, 3, 4)}" fill="${g}"/>`,
    /* XV Devil */ (c, t, g) => `<path d="M28 36c-6-12-2-22 6-26-2 8 0 14 6 18M72 36c6-12 2-22-6-26 2 8 0 14-6 18" fill="${c}"/>
      <path d="${star(50, 40, 14, 6, 5, 90)}" ${S(g, 2.6)}/>
      <g ${S(c, 3)}><rect x="20" y="62" width="14" height="9" rx="4.5"/><rect x="31" y="70" width="14" height="9" rx="4.5"/><rect x="43" y="74" width="14" height="9" rx="4.5"/><rect x="55" y="70" width="14" height="9" rx="4.5"/><rect x="66" y="62" width="14" height="9" rx="4.5"/></g>`,
    /* XVI Tower */ (c, t, g) => `<path d="M34 90V36h32v54z" fill="${t}" stroke="${c}" stroke-width="2.8" stroke-linejoin="round"/>
      <path d="M32 36h36v-8h-6v4h-6v-4h-6v4h-6v-4h-6v4h-6z" fill="${c}"/>
      <path d="M46 52h8v10h-8zM46 72h8v18h-8z" fill="${c}"/>
      <path d="M78 6L58 30h10L54 50l26-28H68z" fill="${g}" stroke="${c}" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M22 22l4 4M18 34l5 1M28 14l1 5" ${S(g, 2.2)}/>`,
    /* XVII Star */ (c, t, g) => `<path d="${star(50, 40, 26, 9, 8)}" fill="${g}" stroke="${c}" stroke-width="1.8" stroke-linejoin="round"/>
      ${[[20, 18], [80, 18], [16, 50], [84, 50], [26, 74], [74, 74], [50, 82]].map(([x, y]) => `<path d="${star(x, y, 5.5, 2, 8)}" fill="${c}"/>`).join("")}`,
    /* XVIII Moon */ (c, t, g) => `<circle cx="50" cy="38" r="24" fill="${g}"/><path d="M58 18a22 22 0 1 0 0 40 18 18 0 1 1 0-40z" fill="${c}"/>
      ${sunRays(50, 38, 27, 33, 16, g, 1.8)}
      ${[[34, 72], [50, 78], [66, 72]].map(([x, y]) => `<path d="M${x} ${y - 6}c3 5 4 7 0 9-4-2-3-4 0-9z" fill="${c}"/>`).join("")}
      <path d="M14 90V68h8v22M78 90V68h8v22" ${S(c, 2.4)}/>`,
    /* XIX Sun */ (c, t, g) => `${Array.from({ length: 16 }, (_, i) => { const a = i * Math.PI / 8, r1 = 24, r2 = i % 2 ? 36 : 42; return `<path d="M${(50 + r1 * Math.cos(a - .12)).toFixed(1)},${(48 + r1 * Math.sin(a - .12)).toFixed(1)}L${(50 + r2 * Math.cos(a)).toFixed(1)},${(48 + r2 * Math.sin(a)).toFixed(1)}L${(50 + r1 * Math.cos(a + .12)).toFixed(1)},${(48 + r1 * Math.sin(a + .12)).toFixed(1)}Z" fill="${i % 2 ? c : g}"/>`; }).join("")}
      <circle cx="50" cy="48" r="22" fill="${g}" stroke="${c}" stroke-width="2.4"/><circle cx="50" cy="48" r="14" fill="none" stroke="#fff" stroke-width="2" opacity=".7"/>`,
    /* XX Judgement */ (c, t, g) => `<path d="M18 30l46 14v-24z" fill="${g}" stroke="${c}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M64 20v24l12 6V14z" fill="${c}"/>
      <path d="M40 34v-20" ${S(c, 2)}/><path d="M40 14h12v8H40z" fill="#fff" stroke="${c}" stroke-width="1.6"/><path d="M46 14v8M40 18h12" stroke="#dc2626" stroke-width="1.6"/>
      <path d="M22 62l4 -6 4 6M40 66l4-6 4 6M58 62l4-6 4 6M76 66l4-6 4 6" ${S(c, 2.2)}/><path d="M10 80q40-14 80 0" ${S(c, 2.4)}/><path d="M10 90h80" ${S(c, 2)}/>`,
    /* XXI World */ (c, t, g) => `<ellipse cx="50" cy="50" rx="24" ry="36" fill="none" stroke="#65a30d" stroke-width="7" stroke-dasharray="3 3"/>
      <ellipse cx="50" cy="50" rx="24" ry="36" ${S(c, 1.4)}/>
      <path d="M44 14c4 4 8 4 12 0M44 86c4-4 8-4 12 0" ${S("#dc2626", 2.6)}/>
      <path d="${star(50, 50, 10, 4, 8)}" fill="${g}"/>
      ${[[14, 14], [86, 14], [14, 86], [86, 86]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="${c}"/><circle cx="${x}" cy="${y}" r="2" fill="${g}"/>`).join("")}`
  ];

  /* ---------- court emblems, 0..24 box ---------- */
  const COURT_ICON = {
    P: (c, g) => `<path d="M6 21c4-10 9-16 15-19-2 6-6 12-12 17" fill="${g}" stroke="${c}" stroke-width="1.2" stroke-linejoin="round"/><path d="M6 21l9-10" stroke="${c}" stroke-width="1.2"/>`,
    Kn: (c, g) => `<path d="M6 22h13v-3c0-6-2-11-7-15l-1-3-2 3.5-3.5 2.5 1.2 3.4 4.3-1.2L5 16z" fill="${c}"/><circle cx="10.4" cy="7" r="1" fill="${g}"/><path d="M5 22h15" stroke="${g}" stroke-width="1.6"/>`,
    Q: (c, g) => `<path d="M3 18L5 7l4 5 3-7 3 7 4-5 2 11z" fill="${g}" stroke="${c}" stroke-width="1.3" stroke-linejoin="round"/><circle cx="5" cy="6.4" r="1.4" fill="${c}"/><circle cx="12" cy="4.4" r="1.4" fill="${c}"/><circle cx="19" cy="6.4" r="1.4" fill="${c}"/><rect x="3" y="18" width="18" height="3" rx="1" fill="${c}"/>`,
    K: (c, g) => `<path d="M3 18l1-11 5 4 3-8 3 8 5-4 1 11z" fill="${g}" stroke="${c}" stroke-width="1.3" stroke-linejoin="round"/><rect x="3" y="18" width="18" height="3.4" rx="1" fill="${c}"/><path d="M12 0v4M10 1.8h4" stroke="${c}" stroke-width="1.4"/><circle cx="8" cy="15" r="1" fill="${c}"/><circle cx="12" cy="14.5" r="1.2" fill="#dc2626"/><circle cx="16" cy="15" r="1" fill="${c}"/>`
  };
  const COURT_TITLE = { P: "Page", Kn: "Knight", Q: "Queen", K: "King" };

  /* ---------- pip layouts for 2..10 (art zone centre 100,145) ---------- */
  const L = 72, R = 128, M = 100;
  const PIPS = {
    2: [[M, 95], [M, 195]], 3: [[M, 82], [M, 145], [M, 208]], 4: [[L, 95], [R, 95], [L, 195], [R, 195]],
    5: [[L, 92], [R, 92], [M, 145], [L, 198], [R, 198]], 6: [[L, 88], [R, 88], [L, 145], [R, 145], [L, 202], [R, 202]],
    7: [[L, 86], [R, 86], [M, 116], [L, 145], [R, 145], [L, 204], [R, 204]],
    8: [[L, 84], [R, 84], [M, 114], [L, 145], [R, 145], [M, 176], [L, 206], [R, 206]],
    9: [[L, 82], [R, 82], [L, 124], [R, 124], [M, 145], [L, 166], [R, 166], [L, 208], [R, 208]],
    10: [[L, 82], [R, 82], [M, 103], [L, 124], [R, 124], [L, 166], [R, 166], [M, 187], [L, 208], [R, 208]]
  };

  /* ---------- frame ---------- */
  function wrapName(name) {
    const words = name.split(" "); const lines = []; let cur = "";
    for (const w of words) { if ((cur + " " + w).trim().length > 17 && cur) { lines.push(cur); cur = w; } else cur = (cur + " " + w).trim(); }
    lines.push(cur); return lines;
  }
  function frame(th, numeral, name, art, uid) {
    const lines = wrapName(name.toUpperCase());
    const corner = (x, y) => `<path d="M${x} ${y - 5}l5 5-5 5-5-5z" fill="${GOLD}"/>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 320" class="tarot-card">
  <defs>
    <radialGradient id="bg${uid}" cx="50%" cy="42%" r="70%"><stop offset="0" stop-color="#fffdf8"/><stop offset="1" stop-color="${PAPER}"/></radialGradient>
    <pattern id="pt${uid}" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="5" cy="5" r=".8" fill="${th.ink}" opacity=".10"/></pattern>
  </defs>
  <rect x="2" y="2" width="196" height="316" rx="14" fill="url(#bg${uid})" stroke="${th.ink}" stroke-width="4"/>
  <rect x="11" y="11" width="178" height="298" rx="8" fill="none" stroke="${GOLD}" stroke-width="1.4"/>
  <rect x="15" y="15" width="170" height="290" rx="6" fill="none" stroke="${GOLD}" stroke-width=".6"/>
  ${corner(24, 24)}${corner(176, 24)}${corner(24, 296)}${corner(176, 296)}
  <rect x="26" y="58" width="148" height="176" rx="74" fill="${th.tint}"/>
  <rect x="26" y="58" width="148" height="176" rx="74" fill="url(#pt${uid})"/>
  <rect x="26" y="58" width="148" height="176" rx="74" fill="none" stroke="${th.ink}" stroke-width="1.2" opacity=".35"/>
  <circle cx="100" cy="36" r="17" fill="${th.ink}"/><circle cx="100" cy="36" r="14" fill="none" stroke="${GOLD}" stroke-width="1"/>
  <text x="100" y="${numeral.length > 3 ? 40 : 41.5}" text-anchor="middle" font-family="${SERIF}" font-size="${numeral.length > 3 ? 11 : 14}" font-weight="700" fill="#fff" letter-spacing=".5">${numeral}</text>
  ${art}
  <path d="M18 ${lines.length > 1 ? 244 : 250}h164l-8 ${lines.length > 1 ? 21 : 15} 8 ${lines.length > 1 ? 21 : 15}H18l8-${lines.length > 1 ? 21 : 15}z" fill="${th.ink}"/>
  ${lines.map((l, i) => `<text x="100" y="${(lines.length > 1 ? 262 : 270) + i * 16}" text-anchor="middle" font-family="${SERIF}" font-size="${l.length <= 11 ? 14 : l.length <= 13 ? 12.5 : l.length <= 15 ? 11 : 10}" font-weight="700" fill="#fff" letter-spacing="1.2">${l}</text>`).join("")}
  <text x="100" y="300" text-anchor="middle" font-family="${SERIF}" font-size="8" font-weight="700" fill="${th.ink}" letter-spacing="2" opacity=".75">${th.label}</text>
</svg>`;
  }

  /* ---------- public: one card ---------- */
  let uidCounter = 0;
  function cardSVG(card) {
    const uid = "t" + (++uidCounter);
    const th = THEME[card.arcana === "major" ? "major" : card.suit];
    let art = "", numeral = card.num;
    if (card.arcana === "major") {
      const idx = deck.indexOf(card) >= 0 ? deck.indexOf(card) : deck.findIndex(d => d.name === card.name);
      art = `<g transform="translate(35 81) scale(1.3)">${MAJOR_ART[idx](th.ink, th.tint, GOLD)}</g>`;
    } else {
      const icon = SUIT_ICON[card.suit](th.ink);
      if (card.num === "A") {
        art = `<circle cx="100" cy="145" r="54" fill="none" stroke="${GOLD}" stroke-width="1.4" stroke-dasharray="2 4"/>
          ${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return `<path d="M${(100 + 60 * Math.cos(a)).toFixed(1)},${(145 + 60 * Math.sin(a)).toFixed(1)}L${(100 + 70 * Math.cos(a)).toFixed(1)},${(145 + 70 * Math.sin(a)).toFixed(1)}" stroke="${GOLD}" stroke-width="2" stroke-linecap="round"/>`; }).join("")}
          ${place(icon, 100, 145, 92)}`;
        numeral = "ACE";
      } else if (PIPS[card.num]) {
        const n = +card.num, size = n <= 3 ? 54 : n <= 6 ? 46 : n <= 8 ? 40 : 36;
        art = PIPS[card.num].map(([x, y]) => place(icon, x, y, size)).join("");
        numeral = ["", "", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"][n];
      } else {
        art = `${place(COURT_ICON[card.num](th.ink, GOLD), 100, 114, 80)}
          <path d="M58 166h84" stroke="${GOLD}" stroke-width="1.4"/><text x="100" y="179" text-anchor="middle" font-family="${SERIF}" font-size="8" font-weight="700" fill="${th.ink}" letter-spacing="2" opacity=".7">${COURT_TITLE[card.num].toUpperCase()}</text>${place(icon, 100, 205, 44)}`;
        numeral = card.num === "Kn" ? "KN" : card.num;
      }
    }
    return frame(th, numeral, card.name, art, uid);
  }

  /* ---------- public: card back ---------- */
  function backSVG() {
    const ink = "#1e1b4b", uid = "b" + (++uidCounter);
    let rays = "";
    for (let i = 0; i < 24; i++) { const a = i * Math.PI / 12, r1 = 30, r2 = i % 2 ? 50 : 62; rays += `<path d="M${(100 + r1 * Math.cos(a)).toFixed(1)},${(160 + r1 * Math.sin(a)).toFixed(1)}L${(100 + r2 * Math.cos(a)).toFixed(1)},${(160 + r2 * Math.sin(a)).toFixed(1)}" stroke="${GOLD}" stroke-width="${i % 2 ? 1.2 : 2}" stroke-linecap="round"/>`; }
    const stars = [[40, 50], [160, 50], [40, 270], [160, 270], [100, 40], [100, 280], [30, 160], [170, 160]].map(([x, y]) => `<path d="${star(x, y, 6, 2.2, 4)}" fill="${GOLD}"/>`).join("");
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 320" class="tarot-card">
  <defs><radialGradient id="bk${uid}" cx="50%" cy="50%" r="70%"><stop offset="0" stop-color="#312e81"/><stop offset="1" stop-color="${ink}"/></radialGradient>
  <pattern id="bp${uid}" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 7h14M7 0v14" stroke="${GOLD}" stroke-width=".4" opacity=".25"/></pattern></defs>
  <rect x="2" y="2" width="196" height="316" rx="14" fill="url(#bk${uid})" stroke="${GOLD}" stroke-width="3"/>
  <rect x="2" y="2" width="196" height="316" rx="14" fill="url(#bp${uid})"/>
  <rect x="12" y="12" width="176" height="296" rx="8" fill="none" stroke="${GOLD}" stroke-width="1.4"/>
  <circle cx="100" cy="160" r="70" fill="none" stroke="${GOLD}" stroke-width="1" opacity=".6"/>
  ${rays}<circle cx="100" cy="160" r="26" fill="${GOLD}"/>
  <path d="M110 144a18 18 0 1 0 0 32 14 14 0 1 1 0-32z" fill="${ink}"/>
  ${stars}
</svg>`;
  }

  const deck = (typeof TAROT !== "undefined" ? TAROT : []);
  const api = { deck, cardSVG, backSVG, THEME };
  if (typeof module !== "undefined" && module.exports) module.exports = api; else root.TarotCards = api;
})(typeof window !== "undefined" ? window : globalThis);
