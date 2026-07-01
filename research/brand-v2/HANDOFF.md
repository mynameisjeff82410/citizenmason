# Citizen Mason website V2 brand bake-off — HANDOFF

**START HERE to resume cold.** Snapshot committed 2026-07-01. This is a `/design-bakeoff` for citizenmason.com, parked mid-flow. Goal: elevate the site to a real brand experience to drive short-term client acquisition. Positioning: a fractional AI-Ops / product partner for high-stakes SMBs.

## Orient (read in this order)
1. `GROUNDING.md` — the grounding pack: rubric, current-site pains, competitor/reference teardown, anonymization + voice constraints, sample data.
2. `bakeoff/index.html` — the review-and-decide gallery for the identity / mark / hero / conversion axes.
3. This file — locked decisions, open items, next steps.

## Locked decisions
- **Identity: "Craftsperson's Ledger"** — `bakeoff/identity-3.html`. Bone/paper canvas, single oxblood accent, Fraunces serif display + Geist Sans + Geist Mono, ruled-ledger motif. (Deliberately OFF the old charcoal+amber+Geist brand; Jeff reopened identity fully. Quarry/Stonework `identity-5.html` held as backup.)
- **Mark: "The Quoin"** — stacked-stone corner; favicon reduces to a bold L of three stones. See `bakeoff/wordmark-sheet.html`. To build: boxed favicon, flat one-color variant, Course & Bond secondary pattern.
- **Conversion: Conversion A** — `bakeoff/conversion-a.html` (embedded scheduler card). Wire to a real Cal.com/Calendly before ship (replaces today's mailto-only path).
- **Hero primitive: pipeline flow** — operational drag IN, the Quoin engine (the embedded AI-Ops partner), founder OUTCOMES out. Headline kept: "Turn the work that slows you down into software that runs itself."
- **Positioning: ONE LADDER** — lead with the embedded AI-Ops partner and the outcomes; "start with one workflow" is the on-ramp, not a co-equal offer. Pipeline OUTPUT = founder outcomes, never a faster deliverable.
- **Audience: 3 segments, each a DIFFERENT outcome** (do not flatten): founders of small businesses (grow / worth more / time back), agencies wanting to offer new AI services to their clients (a new service line + new revenue, making money), SMB leaders who want AI transformation but do not know how (a plan + a partner who has done it).
- Real founder photo replaces the monogram: `bakeoff/newman-headshot.jpeg`.

## Open (parked by Jeff 2026-07-01)
- **The hero final rendering.** Latest = a segment-selector hero, two versions still open:
  - `bakeoff/segment/hero-seg-schematic.html` (line-art scenes)
  - `bakeoff/segment/hero-seg-stateful.html` (one proof signal per scene)
  - Click Founders / Agencies / Exploring AI to swap the drawn per-segment outcome scene. Sharpen the agency B2B2C scene and the roadmap scene when a version is chosen.

## Next
1. Pick the hero rendering (or hybridize the two).
2. Design the remaining sections (recommended order): **the ladder / How it works** (the embedded-partner offer + on-ramp, the centerpiece), then Who-it's-for, What-gets-built (capability index; tactical workflows demoted here), Proof (outcomes + Jeff's operator record, de-identified), Founder, Why-custom, Conversion.
3. Assemble the picks into the live Next.js app at `marketing/site/` (this repo), replace V1, deploy to Vercel.

## Constraints that carry into the build
- **Anonymization (hard):** no real client/vendor/person names on the site (Coppel, Angie, Viviane, Charly; DANZO/SAINT ELM/FINISHRITE; the $80k mistake only anonymized). Public-safe proof: Jeff's record (Phase, Magic Eden, Kraken, Scopely, NFL Digital Media, Miami HEAT, Deloitte, Maestro) + live products (Crafted, Phase, Netrunner, Magic Eden).
- **Voice:** the Twelve (open on a moment not a metric, plain agency, product nouns not consultant-we, no pre-empting unraised objections; no emdashes, emoji, or metaphors). Details in `GROUNDING.md`.

## Resume commands
- Serve the gallery locally (self-contained HTML, any static server):
  `python3 -m http.server 4400 --directory "<path to>/research/brand-v2/bakeoff"`
  then open http://localhost:4400/ (or `/segment/hero-seg-schematic.html`, etc.).
- Re-run a bake-off workflow (from a session with the Workflow tool): the scripts are `bakeoff-workflow.js` and `transform-bakeoff.js` at this folder's root.
