export const meta = {
  name: 'citizenmason-hero-transform-bakeoff',
  description: 'Focused bake-off on the V2 hero right-side TRANSFORMATION visual: 6 distinct visual-first concepts in the locked Ledger identity, judged, assembled into a review+decide gallery',
  phases: [
    { title: 'Wireframe', detail: '6 visual transformation concepts, full hero, Ledger identity' },
    { title: 'Curate', detail: 'judge the 6, build the review+decide gallery' },
  ],
}

const REPO = '/Users/citizenmasonagent/Dev Projects/CitizenMason'
const BO = REPO + '/marketing/brand-v2/bakeoff'
const WF = BO + '/transform'
const IDENTITY3 = BO + '/identity-3.html'
const LEFTSRC = BO + '/hero-value-transform.html'

const CONTEXT = [
  'CITIZEN MASON V2, FOCUSED HERO BAKE-OFF. You produce ONE design artifact judged BY EYE. Paths contain a space (Dev Projects); the Read and Write tools handle it, QUOTE the path in any Bash. All files for this round go under "' + WF + '" (already exists).',
  '',
  'SCOPE: this round designs ONLY the hero RIGHT-SIDE artifact. The transformation idea is the locked topline of the page. The prior execution (a two-block text ledger of pain mapped to outcome) was REJECTED for being too text-heavy, which buried the value prop. This round makes transformation a VISUAL that reads in a single glance, with minimal words.',
  '',
  'THE ONE MESSAGE the visual must land: the slow, manual, expensive work that holds a business back becomes AI systems that run on their own, and the owner stays in control. Show that shift visually. Do not explain it in prose.',
  '',
  'IDENTITY IS LOCKED to Craftspersons Ledger. READ "' + IDENTITY3 + '" and match its system EXACTLY: bone and paper canvas, a single oxblood accent used once, a transitional serif display (Fraunces) plus Geist Sans body plus Geist Mono labels, ruled-line and ledger motif, the keystone and Quoin mark. Premium, calm, editorial.',
  '',
  'KEEP THE LEFT COLUMN CONSTANT. READ "' + LEFTSRC + '" and carry over VERBATIM: the nav (with the outline Book a call), the entire LEFT hero column (mono eyebrow Fractional AI-Ops partner, the headline Turn the work that slows you down into software that runs itself, its weight choreography and self-drawing underscore, the subhead, the oxblood primary CTA Book a discovery call, the quiet secondary ruled link Get your AI opportunity plan, the operator line), and the credibility strip beneath. REPLACE ONLY the right-column artifact with your visual concept.',
  '',
  'AUDIENCE, one level higher, DO NOT bias toward luxury interior design or any one vertical. Sell to: founders of small businesses; agencies that want to offer new AI services to their clients; leaders in SMBs who want AI transformation but do not know how. Frame the visual HORIZONTALLY. NO interior-design, shop-drawing, room, pendant, chandelier, or five-figure-mistake specifics. Keep any example content generic and universal (reporting, follow-ups, data, client work, scheduling, operations) or purely iconographic.',
  '',
  'VALUE PROPS to land through the visual (pick what your concept expresses best, do not cram all): take the repetitive, expensive work off the team and run it; grow and take on more without hiring; a partner who finds where AI pays and builds it; you stay in control, nothing client-facing goes out without your yes.',
  '',
  'CONSTRAINTS: a VISUAL metaphor inside the illustration is fine if it reads instantly with no explanation; but any TEXT labels follow plain agency, product nouns not consultant-we, and contain NO written metaphors or analogies, NO emdashes, NO emoji, Oxford commas. Keep words to an absolute minimum (a short caption or a few mono labels at most). Zero real client, vendor, or person names. No pricing. Exactly one oxblood primary CTA on the page (it lives in the kept left column; do not add another filled oxblood button).',
  '',
  'CRAFT: self-contained HTML, own style block, import fonts from Google Fonts, reduced-motion aware, restrained and premium motion (the transformation may animate, but it must also read clearly in its static and reduced-motion end-state). Match identity-3 precisely. Escape the generic-AI-shop look. This is a hero artifact, make it feel expensive and effortless.',
].join('\n')

const RATIONALE_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    file: { type: 'string' }, title: { type: 'string' }, oneLineConcept: { type: 'string' },
    pros: { type: 'array', items: { type: 'string' } }, cons: { type: 'array', items: { type: 'string' } },
    transformationRead: { type: 'string', description: 'how the visual makes the transformation read in a single glance' },
    wordCount: { type: 'string', description: 'roughly how many words of text appear in the artifact' },
  },
  required: ['file', 'title', 'oneLineConcept', 'pros', 'cons', 'transformationRead', 'wordCount'],
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
    hybridNote: { type: 'string', description: 'best ideas to GRAFT from the runners-up into the winner' },
  },
  required: ['axis', 'ranking', 'recommended', 'recommendationRationale', 'hybridNote'],
}

const CONCEPTS = [
  { id: 'state', name: 'Before and after state', brief: 'Two compact panels showing the same workload in two states, the visual contrast IS the message. The before panel: overloaded, many faint fragmented task chips crowding the space, a large muted mono number (for example a high hours-per-week figure), slightly restless. The after panel: one calm running system tile, a small number, a single quiet running pulse, the lone oxblood touch. Labels minimal (two short mono captions at most). Transformation reads instantly as many-and-heavy becoming one-and-light.' },
  { id: 'flow', name: 'Pipeline flow', brief: 'A flow diagram, left to right or gently diagonal: a few scattered input task chips feed a central labeled SYSTEM node, which outputs one finished result that passes through a small you-approve gate. A restrained animated flow line carries a single token along the path (reduced-motion shows the resolved state). Iconographic and near text-free. Shows the mechanism: messy inputs become a running system with the owner in control.' },
  { id: 'build', name: 'Masonry build', brief: 'On-brand for the name Citizen Mason. Scattered loose blocks or stones assemble into a built structure, a keystone arch or a coursed wall, with the Quoin and keystone as the locking stone that completes it. Represents building the system the business is missing. CSS or SVG animation performs the assemble; the reduced-motion and static end-state shows the finished built structure. Nearly text-free, one short caption. Premium, ownable, distinctive. It must read clearly as building and structure, not as abstract floating shapes.' },
  { id: 'capacity', name: 'Reclaimed capacity', brief: 'Visualize the grow-without-hiring value prop. A workload grid or a gauge or a dial where dense manual blocks convert into freed, open capacity, or a dial swings from buried to room-to-grow, with one mono number that counts up to signal capacity to take on more. One or two labels at most. The visual says: the same team does more, no new hire.' },
  { id: 'clears', name: 'The list that clears itself', brief: 'A compact worklist where repetitive items each get a quiet RUNNING stamp and lift or fade away one by one (reduced-motion and static state show the cleared end-state), leaving only one or two high-value DECISION items for the owner, marked as needing a person. Transformation equals the pile clearing and senior attention freed for what matters. Relatable to any SMB leader. Minimal text; the emptying carries it.' },
  { id: 'switch', name: 'The work becomes the system', brief: 'A single bold device that enacts the headline literally: a switch, flip, or morph where a cluster reading as the work that slows you down visibly turns into a single calm tile reading as software that runs itself. One strong, premium, crafted transition (reduced-motion shows the resolved system state). Echoes the headline as a visual. Very low text. Make it feel deliberate and expensive, not a gimmick.' },
]

phase('Wireframe')
const thunks = CONCEPTS.map((c) => () => agent(
  CONTEXT + '\n\nTASK (TRANSFORMATION VISUAL ' + c.id.toUpperCase() + ', "' + c.name + '"): Build the FULL hero (kept nav, kept left column, your new right-side visual, kept credibility strip) and WRITE "' + WF + '/hero-tx-' + c.id + '.html". CONCEPT BRIEF: ' + c.brief + '\n\nThe right-side visual must make the transformation read in ONE glance with minimal words. Obey every CONSTRAINT. Match the Ledger identity from identity-3 exactly. Return RATIONALE (transformationRead = how the glance lands; wordCount = rough words of text in the artifact).',
  { label: 'tx:' + c.id, phase: 'Wireframe', schema: RATIONALE_SCHEMA, agentType: 'Creative Lead' }
).then((r) => (r ? { ...r, id: c.id, name: c.name } : null)))

const results = (await parallel(thunks)).filter(Boolean)
log('Built ' + results.length + '/' + CONCEPTS.length + ' transformation visuals.')

phase('Curate')
const judge = await agent(
  CONTEXT + '\n\nTASK (JUDGE the 6 transformation visuals): READ each hero-tx-*.html file in "' + WF + '". Score each 0-100, weighting HIGHEST: does the transformation read INSTANTLY in one glance, and is it VISUAL rather than text-heavy (the prior reject failed exactly here). Then: fit for the broad audience (SMB founders, agencies adding AI services, SMB leaders who want AI transformation but do not know how), distinctiveness and premium feel, legibility and a11y including the reduced-motion and static end-state, and fidelity to the Ledger identity. Penalize anything wordy or that needs explanation. Recommend ONE plus a hybrid note (what to graft from the runners-up). Be a rigorous critic.\n' + JSON.stringify(results, null, 1),
  { label: 'judge:transform', phase: 'Curate', schema: JUDGE_SCHEMA, agentType: 'Creative Lead' }
)

const gallery = await agent(
  CONTEXT + '\n\nTASK (build the review+decide gallery): WRITE "' + WF + '/index.html", a clean self-contained gallery (own inline css, polished, styled in the Ledger palette) that is BOTH review and decision in one file. Sections: (1) a short orientation, this is the focused bake-off for the hero transformation visual, the goal is transformation that reads in a glance with minimal text for a broad SMB audience; (2) six cards, one per concept, each linking hero-tx-ID.html (open in a new tab) with the concept name, the one-line concept, its transformationRead note, and a RECOMMENDED badge on the judge pick. DECISION CONTROLS in the same file: a Primary select pre-set to the judge recommendation, an optional Secondary select, a Notes textarea pre-seeded with the judge hybrid note, persisted to localStorage under the key cm-hero-transform, plus Copy-to-clipboard and Download-txt buttons emitting a short paste-back-able handoff (primary, secondary, notes). VERIFY the inline JS is valid and the page is well-formed. Return the index path, a 3-line summary, and the exact default Copy output.\n\nJUDGE:\n' + JSON.stringify(judge, null, 1) + '\n\nFILES:\n' + JSON.stringify(results.map((x) => ({ id: x.id, name: x.name, file: x.file, title: x.title })), null, 1),
  { label: 'build:gallery', phase: 'Curate', agentType: 'Creative Lead' }
)

return { gallery, judge, count: results.length, concepts: results.map((x) => ({ id: x.id, name: x.name, file: x.file })) }
