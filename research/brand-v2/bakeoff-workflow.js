export const meta = {
  name: 'citizenmason-brand-bakeoff',
  description: 'Citizen Mason V2 brand bake-off: neutral kit + 5 full identity directions + a wordmark/mark sheet + hero x3 + conversion x3 layouts, judged, assembled into a clickable review+decide index.html',
  phases: [
    { title: 'Foundation', detail: 'shared neutral _kit.css + sample-content scaffold' },
    { title: 'Wireframe', detail: '5 identity directions (own css) + wordmark sheet + hero x3 + conversion x3' },
    { title: 'Curate', detail: 'judge identity / marks / modules, build the review+decide gallery' },
  ],
}

const REPO = '/Users/citizenmasonagent/Dev Projects/CitizenMason'
const AUDIT_DIR = REPO + '/marketing/brand-v2'
const WF = AUDIT_DIR + '/bakeoff'
const GROUNDING = AUDIT_DIR + '/GROUNDING.md'

const CONTEXT = [
  'CITIZEN MASON V2 BRAND BAKE-OFF, design generation. You produce DESIGN artifacts the user judges BY EYE for a real business. NOTE: every absolute path below contains a space (Dev Projects); the Write/Read tools handle it, but QUOTE the path in any Bash command. All files go under "' + WF + '" (already exists).',
  '',
  'WHAT CITIZEN MASON IS: a fractional AI-Ops and product partner for high-stakes small businesses. It inserts trustworthy AI workflows into the gaps between the tools a business already runs. The owner stays the final word on everything client-facing; the practice earns access one rung at a time (you read it, you approve the draft, you hit Send). Built by one operator who ships (a 15-year product record), not an agency.',
  'MISSION: give a small business the leverage of a Fortune 500 without losing the craft, taste, and trust that make it small.',
  'NORTH-STAR for the SITE: a high-stakes SMB owner books a discovery call. Felt outcome the page must produce: the visitor believes an AI can prepare and review the work while they still decide. PRIMARY DEVICE: laptop, must hold on mobile.',
  '',
  'GROUND EVERY CHOICE IN (read targeted): "' + GROUNDING + '" — read the Design-Brief Inputs section, the References teardown (generic traps + named best-in-class moves + identity territories), the Anonymization and Voice constraint block, and the Realistic Sample-Data set IN FULL.',
  '',
  '=== THE IDENTITY DECISION (load-bearing) ===',
  'Visual identity is FULLY OPEN per the client: color, type, logo, and wordmark are all on the table. Explore them genuinely. The grounding doc has a leftover charcoal-plus-amber-plus-Geist LOCKED note from an old brand doc. IGNORE that lock; the client reopened it. Keep these THREADS instead: (1) the NAME, Citizen Mason evokes masonry, building, civic trust, craftsmanship; (2) calm-authority restraint (premium, never hype, Stripe-Press and Ogilvy register); (3) the ANTI-GENERIC mandate below; (4) the keystone glyph is AVAILABLE equity, not mandatory.',
  '',
  '=== ANTI-GENERIC MANDATE (the number 1 and number 2 client pains are forgettable and feels-generic) ===',
  'DO NOT ship any of these generic-AI-shop cliches: dark mode plus a single neon accent; faint dot-grid or orbiting-network hero; glassmorphism cards plus gradient blobs; Inter or Geist-in-caps as the whole personality; long paragraphs broken only by metrics; dead-centered symmetrical grids; a bright CTA repeated 5-plus times. STEAL instead from: Linear (micro-interactions as personality), Stripe (type as logo, restraint), Vercel (kinetic type plus deliberate asymmetry), Anthropic (serif and sans contrast plus human and founder visibility), Mercury (mono as visual hierarchy), Arc (custom palette plus varied per-section composition), Basecamp (warm, conversational, a tilted motif). The identity must survive a thumbnail and be recognizable on sight.',
  '',
  'QUALITY BAR: the CURRENT live site scores 2 of 5 on distinctiveness and 2 of 5 on memorability. That is the FLOOR to ESCAPE, not match. Aim at Linear, Stripe, and Anthropic-grade distinctiveness with operator-built warmth. Production-grade, strong, owned visual design. No generic AI-app aesthetics. Every element earns its place.',
  '',
  '=== HARD CONSTRAINTS (every artifact inherits these) ===',
  'ANONYMIZATION: zero real client, vendor, or person names anywhere (no Coppel, Angie, Viviane, Charly, Caitlin; no DANZO, SAINT ELM, FINISHRITE; no project names or addresses; no free-for-referrals; no ARR or Jeff-hours). Anonymize the client as a boutique luxury studio. The 80,000-dollar mistake may appear ONLY anonymized and never tied to a named project: a boutique luxury studio absorbs five-figure errors, one missed detail can cost tens of thousands. Public-safe proof (use directly): Jeff Newman record, Phase, Magic Eden, Kraken, Scopely, NFL Digital Media, Miami HEAT, Deloitte, Maestro, and live products Crafted, Phase, Netrunner, Magic Eden.',
  'VOICE (the Twelve): open on a moment not a metric; plain agency (you read it, you approve the draft, you hit Send) not jargon (read-only, advisory, human-in-the-loop); product nouns not consultant-we; never pre-empt unraised objections; show the work, do not point at it; sell capacity and protection, never cost-cutting; never claim AI eliminates mistakes. BANNED: emdashes, emoji, metaphors and analogies, hedge adverbs (just, really, actually, simply, very), praise openers, the negation-reversal not-X-but-Y frame. Oxford commas.',
  'CONVERSION: ONE dominant ask, book a discovery call, visually primary (the accent lives on it). A single secondary AI-opportunity-plan intake is allowed at clearly lower weight. CTA copy is understanding, not urgency (Book a discovery call, not Start now). Pricing never appears.',
  '',
  '=== SAMPLE CONTENT (reuse these EXACT entities and copy across every render for coherence; never lorem) ===',
  '- Wordmark text: CITIZEN MASON. Nav links: Who it is for, How it works, Proof. Nav CTA: Book a call.',
  '- Hero eyebrow (mono): Fractional AI-Ops partner. Hero headline (KEEP, do not rewrite): Turn the work that slows you down into software that runs itself. Hero subhead: Citizen Mason builds AI systems that take the repetitive, expensive work off your team and run it, on the tools you already use. You stay in control of every call that matters. Hero primary CTA: Book a discovery call. Hero secondary: Get your AI opportunity plan.',
  '- Proof strip: founder line, built by an operator who ships, not an agency, a 15-year product record, plus record pills: Deloitte, NFL Digital Media, Miami HEAT, Kraken, Scopely, Maestro, plus live-product pills: Crafted, Phase, Netrunner, Magic Eden. Render pills as styled text, no external images.',
  '- Three workflow patterns (anonymized): Morning Brief (reads the inbox overnight, returns room-tagged items to scan in minutes), Shop Drawing Compare (pairs an instruction with the contractor response, flags what was not addressed, one missed detail can cost tens of thousands), Autofiler (incoming documents sort and file themselves into the existing structure).',
  '- Trust ladder (plain agency, three steps): You read it. / You approve the draft. / You hit Send.',
  '- Conversion frame-of-reference line: A 45-minute call. We find the one workflow worth building first. Understanding before scope.',
  '',
  'SELF-CONTAINED HTML, no build step. Module-layout and wordmark agents LINK the shared kit with a stylesheet link to _kit.css. Identity-direction agents ship their OWN style block (do not link the kit) to show full visual range. Import web fonts from Google Fonts. Restrained CSS motion and transitions are welcome; reduced-motion aware; keep JS minimal (tab and hover only).',
].join('\n')

const RATIONALE_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    file: { type: 'string' }, title: { type: 'string' }, oneLineConcept: { type: 'string' },
    pros: { type: 'array', items: { type: 'string' } }, cons: { type: 'array', items: { type: 'string' } },
    distinctivenessMove: { type: 'string', description: 'the single most distinctive, anti-generic move in this artifact' },
    comeBackValue: { type: 'string', description: 'the mood, feeling, or emotion this identity lands' },
  },
  required: ['file', 'title', 'oneLineConcept', 'pros', 'cons', 'distinctivenessMove', 'comeBackValue'],
}

const JUDGE_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    axis: { type: 'string' },
    ranking: {
      type: 'array', items: {
        type: 'object', additionalProperties: false,
        properties: { id: { type: 'string' }, score: { type: 'number' }, strengths: { type: 'string' }, weaknesses: { type: 'string' } },
        required: ['id', 'score', 'strengths', 'weaknesses'],
      },
    },
    recommended: { type: 'string' },
    recommendationRationale: { type: 'string' },
    hybridNote: { type: 'string', description: 'best ideas to GRAFT from the runners-up into the winner (do not discard losers)' },
  },
  required: ['axis', 'ranking', 'recommended', 'recommendationRationale', 'hybridNote'],
}

// ---------- Foundation (barrier: neutral kit must exist before module/wordmark wireframes link it) ----------
phase('Foundation')
const kit = await agent(
  CONTEXT + '\n\nTASK (shared NEUTRAL visual kit): WRITE "' + WF + '/_kit.css", one self-contained stylesheet (CSS custom properties plus utility and component classes, NO build step) that gives the MODULE-LAYOUT and WORDMARK agents a clean, NEUTRAL, identity-agnostic substrate so their work is judged on LAYOUT and STRUCTURE, not on color. This kit is deliberately restrained: a single neutral palette (paper, ink, three gray surface tiers, ONE placeholder accent var named --accent the layout agents use sparingly), a Geist Sans plus Geist Mono type scale (import from Google Fonts) with real weight and size steps, a generous spacing scale, a 4/8/12/full radius scale, soft shadows. Provide component classes for: section container plus eyebrow (mono) plus a heading scale; a top nav bar (wordmark slot, links, CTA button); a hero shell; buttons by role (primary, secondary, ghost); a card; a pill and a logo-pill row; a three-step trust-ladder row; a proof strip; a booking and scheduler CARD mock (a day column, time-slot chips, a confirm button) and form input fields; a footer. ALSO write "' + WF + '/_kit.html" demoing every component (a living style sheet). Keep it neutral and modern, not a finished brand. Return the two paths plus a 3-line summary.',
  { label: 'kit:css', phase: 'Foundation', schema: RATIONALE_SCHEMA, agentType: 'Creative Lead' }
)
log('Foundation (neutral kit) done.')

// ---------- Wireframe ----------
phase('Wireframe')

// AXIS 1: FIVE full identity directions (each ships OWN css; renders the same landing slice)
const IDENTITY = [
  { id: '1', name: 'Evolve-Current', brief: 'CONSERVATIVE ANCHOR: the best possible version of TODAY. Keep charcoal, amber, and Geist but make it OWNED and elevated: warm-shift the charcoal toward a near-black warm ink, replace the default amber with a richer custom ochre or amber, introduce visible Geist Mono as composition (eyebrows, numbers, labels), deploy the KEYSTONE mark boldly (large, confident, used as a repeating structural motif), add one deliberate asymmetry. Prove that restraint plus craft beats the template without leaving the family. Choose light-first or dark-first deliberately and commit.' },
  { id: '2', name: 'Operator-Authority', brief: 'Ink-black canvas plus a COPPER accent (warm, metallic, not neon-amber). Geist with tight tracking; MONO-FORWARD labels and numbers as the signature (Mercury-style mono hierarchy). A typographic builders mark (a chiseled forward-slash, or the letters CM set as a stonemasons mark). Emotion: a founder who ships. Sharp, confident, precise micro-interactions (Linear-grade). Dark and premium without being a generic dark-mode AI site (the copper plus mono plus asymmetry is what saves it).' },
  { id: '3', name: 'Craftspersons-Ledger', brief: 'LIGHT, EDITORIAL, anti-dark-mode. A bone or paper canvas plus ink plus an ochre or oxblood accent. Pair a TRANSITIONAL SERIF display (for example Fraunces, Newsreader, or Spectral from Google Fonts) for headlines with Geist Sans body and Geist Mono labels (Anthropic-style serif and sans contrast). A chiseled-stone or engraved keystone mark. Generous editorial whitespace, ruled lines, a ledger or column motif. Emotion: I trust a craftsperson. This is the warm, human, print-quality direction for the luxury-studio beachhead.' },
  { id: '4', name: 'Blueprint', brief: 'BOLDEST DEPARTURE, tied to the build itself and the CAD and architecture world the beachhead lives in. A drafting-table aesthetic: either a deep blueprint-blue canvas with warm-white linework, or a warm drafting-paper canvas with blue linework, plus a single REDLINE accent (the markup color). Monospace-forward technical type, dimension-line and grid motifs, a quoin or keystone rendered as a technical drawing with callouts. Signals precise, deterministic, we draw the system before we build it. Must read as craft and engineering, NOT neon-tech. Avoid the faint-dot-grid cliche by making the grid intentional and structural, like a real drawing.' },
  { id: '5', name: 'Quarry-Stonework', brief: 'WARM and TACTILE. Stone neutrals (limestone, sand, warm gray, slate) plus ONE saturated earthy accent (deep terracotta or oxblood, or a slate-blue). A HEAVY CONDENSED display sans for big confident type (for example Archivo, Saira, or a similar condensed grotesk from Google Fonts) paired with Geist body and mono. A masonry-block, quoin, or brick-bond mark and motif. Emotion: real hands, expensive simplicity, work that lasts. Big type as composition, varied section rhythm, one tilted or offset motif.' },
]

// AXIS 3: key module layouts on the NEUTRAL kit (judged on layout, not color)
const MODULES = [
  {
    id: 'hero', label: 'Hero', layouts: [
      { sfx: 'a', angle: 'Asymmetric statement', brief: 'Left-ranged headline, subhead, and CTA, with a deliberately OFFSET proof or trust-ladder element to the right or lower-right (Vercel-style broken symmetry). The asymmetry is the point. Eyebrow in mono. Primary CTA carries the accent; secondary is a quiet text link.' },
      { sfx: 'b', angle: 'Centered kinetic type', brief: 'Headline as the hero composition itself: large, type-as-art, with weight, size, and color variation across the line (one phrase emphasized). Minimal supporting chrome. A single centered-but-offset CTA. Restraint plus typographic confidence (Stripe and Vercel).' },
      { sfx: 'c', angle: 'Split statement plus live artifact', brief: 'Two-column hero: copy and CTA on one side, a believable PROOF ARTIFACT card on the other (a small anonymized Morning Brief card with room-tagged items, rendered with the kit card and pill components). Shows the product without a real demo. A founder and operator credibility line near the CTA.' },
    ],
  },
  {
    id: 'conversion', label: 'Conversion and Booking', layouts: [
      { sfx: 'a', angle: 'Embedded scheduler card', brief: 'The fix for the mailto problem. A real-looking inline booking card (using the kit scheduler mock: a day column, time-slot chips, a confirm button) as the primary, visually-dominant ask. A frame-of-reference line above it (A 45-minute call. Understanding before scope.). The AI-opportunity-plan intake is a clearly secondary link or row below. NOTE honestly in your rationale that the scheduler is a mock to be wired to a real Cal.com or Calendly before build.' },
      { sfx: 'b', angle: 'Two-path, clear hierarchy', brief: 'Two routes presented with UNEQUAL weight: a dominant Book-a-discovery-call card (accent, primary) and a lighter Prefer-to-start-async card that offers an AI opportunity plan in one week (ghost or outline). Fixes the current two-equal-weight-CTAs muddle. Each states what happens next.' },
      { sfx: 'c', angle: 'Conversational single-field', brief: 'A calm, conversational block: one short form (name, email, and one line, what slows you down most) that frames booking as starting a conversation, plus an explicit or-grab-a-time link to the scheduler. Plain-agency microcopy, no urgency. A frame-of-reference line present.' },
    ],
  },
]

const wireframeThunks = []
for (const d of IDENTITY) {
  wireframeThunks.push(() => agent(
    CONTEXT + '\n\nTASK (IDENTITY DIRECTION ' + d.id + ', "' + d.name + '"): Render a believable single-scroll LANDING SLICE in this full, distinct visual identity so the user compares directions by eye. WRITE "' + WF + '/identity-' + d.id + '.html" with your OWN inline style block (do NOT link _kit.css; show full range). Render this exact section sequence using the SAMPLE CONTENT: (1) a top nav with the wordmark or mark in this identity, (2) a hero (use the kept headline), (3) a short who-it-is-for or trust-ladder row, (4) a proof strip (founder line, record and product pills, the three workflow patterns), (5) the conversion block (book-a-call primary, intake secondary), (6) a footer. DIRECTION BRIEF: ' + d.brief + '\n\nPush color, type, the wordmark or mark, surface and texture, composition, and ONE tasteful signature motion idea. Obey every HARD CONSTRAINT (anonymization, voice, one dominant CTA). Make it genuinely distinctive and premium, escape the generic floor. Return RATIONALE (distinctivenessMove is the single most anti-generic move; comeBackValue is the emotion it lands).',
    { label: 'identity:' + d.id, phase: 'Wireframe', schema: RATIONALE_SCHEMA, agentType: 'Creative Lead' }
  ).then((r) => (r ? { ...r, axis: 'identity', id: d.id, name: d.name } : null)))
}

// AXIS 2: wordmark / mark exploration sheet (one file, 6 concepts), neutral ground
wireframeThunks.push(() => agent(
  CONTEXT + '\n\nTASK (WORDMARK and MARK SHEET): The number 1 client pain is a FORGETTABLE identity and a mark that does not survive a thumbnail. WRITE "' + WF + '/wordmark-sheet.html" (link _kit.css for layout, but draw the marks yourself as inline SVG). Present SIX distinct, owned wordmark and mark concepts for CITIZEN MASON, each in its own labeled cell, and each shown FOUR ways: (a) the full lockup (mark plus the words CITIZEN MASON), (b) the mark alone at nav size, (c) the mark alone at a 32px favicon-scale square (the thumbnail test), (d) reversed (a light mark on a dark ground). Concept territories to cover (pick the 6 strongest, vary them genuinely): an evolved keystone; a stonemasons slash or chisel mark; a CM monogram cut like a maker stamp; a masonry-block or quoin geometric mark; a keystone-arch combining the two words; a brick-bond or coursing pattern motif. For each concept give a one-line name, the rationale, and which identity direction it pairs with. All inline SVG, no external assets. Return RATIONALE (pros are the 6 concept names; distinctivenessMove is which concept best survives the favicon test).',
  { label: 'wordmark:sheet', phase: 'Wireframe', schema: RATIONALE_SCHEMA, agentType: 'Creative Lead' }
).then((r) => (r ? { ...r, axis: 'wordmark', id: 'sheet', name: 'Wordmark sheet' } : null)))

for (const m of MODULES) {
  for (const lay of m.layouts) {
    wireframeThunks.push(() => agent(
      CONTEXT + '\n\nTASK (MODULE LAYOUT, ' + m.label + ', option ' + lay.sfx.toUpperCase() + ': "' + lay.angle + '"): Design this LAYOUT on the NEUTRAL kit and WRITE "' + WF + '/' + m.id + '-' + lay.sfx + '.html" (link _kit.css; use the neutral kit tokens, do NOT invent a bespoke palette, the identity is decided on the other axis). Layout brief: ' + lay.brief + '\n\nUse the SAMPLE CONTENT and obey the HARD CONSTRAINTS. High-fidelity, realistic, polished. The judgement is about structure, hierarchy, and conversion mechanics, not color. Return RATIONALE.',
      { label: 'mod:' + m.id + '-' + lay.sfx, phase: 'Wireframe', schema: RATIONALE_SCHEMA, agentType: 'Creative Lead' }
    ).then((r) => (r ? { ...r, axis: 'module', module: m.id, moduleLabel: m.label, id: lay.sfx, angle: lay.angle } : null)))
  }
}

const wfRes = (await parallel(wireframeThunks)).filter(Boolean)
const identityResults = wfRes.filter((x) => x.axis === 'identity')
const wordmarkResults = wfRes.filter((x) => x.axis === 'wordmark')
const moduleResults = wfRes.filter((x) => x.axis === 'module')
log('Wireframes: ' + identityResults.length + ' identity, ' + wordmarkResults.length + ' wordmark, ' + moduleResults.length + ' module layouts.')

// ---------- Curate ----------
phase('Curate')
const [identityJudge, markJudge, moduleJudge] = await parallel([
  () => agent(
    CONTEXT + '\n\nTASK (JUDGE the 5 identity directions): READ each identity-N.html file in "' + WF + '" and weigh its rationale. Score 0-100 weighting DISTINCTIVENESS and MEMORABILITY highest (the top client pains), then modern feel, brand fit (operator-built, principal-protective, craft), color and type discipline, legibility and a11y, and emotional fit for a skeptical high-stakes SMB owner. Penalize anything that drifts back toward the generic-AI-shop floor. Recommend ONE with reasoning plus a hybrid note (what to graft from the runners-up into the winner). Be a rigorous critic.\n' + JSON.stringify(identityResults, null, 1),
    { label: 'judge:identity', phase: 'Curate', schema: JUDGE_SCHEMA, agentType: 'Creative Lead' }
  ),
  () => agent(
    CONTEXT + '\n\nTASK (JUDGE the wordmark and mark concepts): READ "' + WF + '/wordmark-sheet.html" and evaluate all six concepts. Score each 0-100 on: survives-the-favicon-test (thumbnail recognizability), ownability and distinctiveness, fit to the Citizen Mason name (masonry, building, craft, civic trust), legibility at nav size, and reversibility. Return axis equal to wordmark, ranking equal to the six concepts (id is the concept name or number), recommended is the single best concept (plus a strong runner-up in the rationale), hybridNote is how to combine the best ideas. Be rigorous about the thumbnail test specifically.\n' + JSON.stringify(wordmarkResults, null, 1),
    { label: 'judge:wordmark', phase: 'Curate', schema: JUDGE_SCHEMA, agentType: 'Creative Lead' }
  ),
  () => agent(
    CONTEXT + '\n\nTASK (CURATE module layouts): For EACH module (hero, conversion) READ its 3 option files in "' + WF + '" and pick the best, with strengths and weaknesses per option plus a hybrid note. Weight conversion mechanics and hierarchy clarity highest for the conversion module (the mailto problem must be solved), and the opening impression plus asymmetry and typographic strength for the hero. Return axis equal to modules, ranking equal to all 6 options (id is module-sfx), recommended is the comma-joined winners (one per module, for example hero-a, conversion-b), the rationale explains each pick, hybridNote lists grafts.\n' + JSON.stringify(moduleResults, null, 1),
    { label: 'judge:modules', phase: 'Curate', schema: JUDGE_SCHEMA, agentType: 'Creative Lead' }
  ),
])

const indexResult = await agent(
  CONTEXT + '\n\nTASK (build the review+decide gallery): WRITE "' + WF + '/index.html", a clean, self-contained gallery (own inline css, polished, on-brand-restrained) that is BOTH review and decision in ONE file. REVIEW sections: (1) a short orientation (what this is, the 3 pains it targets: forgettable identity, feels generic, weak conversion) plus a legend; (2) IDENTITY DIRECTIONS, five cards, each linking identity-N.html (open in a new tab), with the direction name, the one-line concept, its distinctiveness move, and a RECOMMENDED badge on the identity judge pick; (3) WORDMARK and MARK, a card linking wordmark-sheet.html with the recommended concept named and badged; (4) MODULE LAYOUTS grouped by module (Hero, Conversion), each option linking its file, the winner badged; (5) a Foundations row linking _kit.html and "' + GROUNDING + '". DECISION CONTROLS baked into the SAME file (do not defer to a separate cockpit): a sticky or persistent panel where each decision (Identity, Wordmark, Hero, Conversion) has a Primary select pre-set to that judge recommendation, an optional Secondary select, and a Notes textarea pre-seeded with that judge graft or hybrid note; persist every change to localStorage under the key cm-brand-bakeoff; and a live handoff panel with Copy-to-clipboard and Download-txt buttons that emit a structured, paste-back-able selection summary (each decision: primary, secondary, notes; plus an overall-direction note field). Pre-select every recommendation so the default Copy output already equals the recommended set. VERIFY the inline JS is syntactically valid and the page is well-formed. Return the index path plus a 4-line summary plus the exact default Copy output.\n\nIDENTITY JUDGE:\n' + JSON.stringify(identityJudge, null, 1) + '\n\nWORDMARK JUDGE:\n' + JSON.stringify(markJudge, null, 1) + '\n\nMODULE CURATOR:\n' + JSON.stringify(moduleJudge, null, 1) + '\n\nFILES:\n' + JSON.stringify(wfRes.map((x) => ({ axis: x.axis, id: x.id, module: x.module || null, file: x.file, title: x.title })), null, 1),
  { label: 'build:index', phase: 'Curate', agentType: 'Creative Lead' }
)

return {
  index: indexResult, kit,
  counts: { identity: identityResults.length, wordmark: wordmarkResults.length, modules: moduleResults.length },
  identityJudge, markJudge, moduleJudge,
  wireframes: wfRes.map((x) => ({ axis: x.axis, id: x.id, module: x.module || null, file: x.file, title: x.title })),
}
