# Citizen Mason V2 Brand Bake-Off — Design Grounding

## Orientation

This file grounds the V2 brand bake-off for citizenmason.com. Citizen Mason is a fractional AI-Ops and product partner for high-stakes small businesses (lead case: boutique luxury interior-design studios; broadening to specialist marketing/creative agencies, galleries, boutique architecture, family offices). It inserts trustworthy AI workflows into the gaps between the tools a business already runs (email, Dropbox, CAD, spreadsheets) and earns access one rung at a time: read, then draft, then send. The principal stays the final word on everything client-facing. The bake-off produces ONE elevated single-scroll landing page. Positioning holds roughly as the live site frames it (fractional partner, high-stakes SMBs) and hero copy is iterated, not overhauled; visual identity (color, type, logo, wordmark) is fully open and is the priority. The page must produce one felt outcome in the visitor: "I can trust an AI to prepare and review the work while I still decide," and drive one action: book a discovery call or request an AI opportunity plan. Two units were audited: the live site's visual identity and its narrative/copy. Both scored identically low on the three flagged pains: forgettable identity, generic feel, weak conversion.

## Rubric Scorecard

Scored 1-5 (5 = best). Rows ordered worst-average first. Both audited units score identically; they are two lenses on the same live site.

| Unit | distinctiveness | brandMemorability | modernFeel | messageClarity | conversionClarity | accessibility | mobileFitness | Row Avg |
|------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Live Site — Visual Identity (`identity`) | 2 | 2 | 3 | 4 | 2 | 4 | 4 | 3.00 |
| Live Site — Narrative/Copy (`narrative`) | 2 | 2 | 3 | 4 | 2 | 4 | 4 | 3.00 |

Reading: distinctiveness, brandMemorability, and conversionClarity are the floor (2/5 across both lenses). messageClarity, accessibility, and mobileFitness are the ceiling (4/5). The site is well-built and clearly written but visually interchangeable with any premium B2B SaaS template, and its only conversion path is a mailto link.

## Pain-Point Register

Severity order: critical first, then high, medium, low. Unit codes: `identity` = visual-identity audit, `narrative` = narrative/copy audit.

| Unit | Severity | Issue |
|------|----------|-------|
| identity | critical | CONVERSION PATHWAY BROKEN. CTAs are mailto links with no form fallback or booking integration. High friction (open email client, copy-paste subject). No Calendly, no contact form, no calendar picker. |
| narrative | critical | WEAK CONVERSION MECHANISM. All CTAs route to plain mailto links with no form, no calendar, no next-step clarity. Copy says "Book a discovery call" but the UX is "send an email and hope someone responds." No urgency, no confirmation flow, no stated response time. |
| identity | critical | VISUAL IDENTITY IS GENERIC. Charcoal + amber + Geist + default layout is a 2022-2024 SaaS template. No distinctive color, texture, illustration, pattern, or icon system. Keystone mark underutilized. Other AI/fractional shops use an identical palette. |
| narrative | critical | FORGETTABLE IDENTITY. Keystone glyph is subtle to the point of invisibility. Amber accent is the only signature element and is shared by dozens of B2B sites. Wordmark is text-only recognition, no symbol strength, nothing that survives a thumbnail or share. |
| identity | high | PROOF SECTION LACKS ANONYMIZATION SAFEGUARDS. Range section shows logo pills and product names with no copy guardrails. If real client names appear as workflow names elsewhere, risk of confidentiality exposure. Recommend checking live site for name leakage. |
| narrative | high | GENERIC PREMIUM FEEL. Clean, accessible, well-executed, but visually interchangeable with Vercel or Stripe. No bold type choice, no color departure, no unexpected visual move. Safe, not distinctive. |
| identity | high | BRAND MEMORABILITY IS LOW. No secondary mark, icon set, or pattern beyond the keystone glyph. No custom illustration or signature color combination. Visitor leaves with a generic "professional AI shop" memory. |
| narrative | high | PROOF SECTION UNDER-LEVERAGES DIFFERENTIATION. Range shows track record and two workflows but never says why those builds matter to the SMB visitor. Narrative reads "he built for big companies," not "he solved the exact problem you have." |
| identity | medium | DARK MODE STRONG BUT LIGHT MODE DEFAULT. Light canvas (#FAFAFA) + gray borders + charcoal text reads safe/template. Dark mode is richer (higher contrast, stronger amber). No visible light/dark toggle mechanism in Nav. If light is default, first impression is generic. |
| identity | medium | MOTION VOCABULARY IS STANDARD. Staggered fade-in + slide-up across all sections with copy-paste durations and easing. No signature micro-interaction, no accent-color motion cue. Competent, not distinctive. |
| identity | medium | FEATURE CARD HOVER STATE IS SUBTLE. Accent-bar fill + shadow lift + edge shimmer is elegant but needs deliberate hover. No color shift, no icon animation. Mobile and non-interactive contexts miss it. Distinctiveness gain minimal. |
| narrative | medium | CTA BUTTON PLACEMENT/HIERARCHY MUDDLED. Hero primary CTA is clear, but the secondary ("Get your AI opportunity plan") is equal-weight link variant. Start section repeats two equal-weight CTAs. Unclear which is the primary conversion moment. |
| narrative | medium | MISSING FRICTION REDUCTION. No testimonials, no case-study snippet, no typical timeline or cost range. Start mentions "pricing anchored to value" with no reference point. Prospect has no frame for "is this for me, is it affordable?" |
| narrative | low | NETWORK CANVAS FALLBACK PLAIN. Hero background is decorative and correctly aria-hidden, but on slow/low-end devices it may not render, leaving the hero without visual interest. Safe but plain. |

## Current-State: Live Site — Visual Identity (`identity`)

**Job.** Own-ability signal: convince a senior SMB principal (interior-design studio, creative agency) that an AI system can prepare work they still control. Trust comes from visible builder pedigree and a deterministic workflow promise, not generic AI assurance.

**Component inventory.**
- Nav header (sticky; keystone glyph + wordmark + scroll-spy links + CTA button)
- Hero (NetworkCanvas animated background, staggered entrance animation, dual CTA)
- Takeaways cards (3-column grid; FeatureCard with index + hover states)
- Problem section (headline + body copy)
- Tracks section (3 vertical cards: Studios, Agencies, Your Business)
- HowItWorks section (3-step cards with index, description, reveal animation)
- Range section / Proof (4 cards, product + client logos, pills)
- Founder section (image + bio card, LinkedIn + email links)
- WhyCustom section (referenced in page structure)
- Start section (CTA block, dual button group, mailto links)
- Footer (keystone + wordmark, nav links, email, separator)
- FeatureCard primitive (index + label + title + description + hover fill bar + edge shimmer)
- Button variants (solid / outline / ghost / subtle / destructive / link, with size modifiers)
- Network animation canvas (14 orbiting nodes, amber pulses, charcoal ring system, reduced-motion aware)

**Concrete UI facts (exact values).**
- Light mode: canvas `#FAFAFA`, surface `#FFFFFF`, foreground `#121212`, accent `#D98A1E` (amber), accent-hover `#C2761A`, accent-active `#9E5E14`, muted-foreground `#525252`, border `#E4E4E4`, link `#9E5E14`.
- Dark mode: canvas `#121212`, surface `#181818`, foreground `#FAFAFA`, accent `#F0A93B` (lighter amber), accent-hover `#F4D79A`, muted-foreground `#A3A3A3`, border `#242424`.
- Typography: Geist Sans (primary, weights 400-700), Geist Mono (accents, indexes, eyebrows; 0.12em letter-spacing on uppercase). System fallback: Segoe UI, Roboto.
- Hero headline: `max-w-4xl`, `text-7xl` (lg), bold — "Turn the work that slows you down into software that runs itself".
- Hero eyebrow: `font-mono`, `text-xs`, uppercase, `tracking-[0.14em]`, muted-foreground.
- Wordmark: "Citizen Mason" + animated keystone glyph (tapered trapezoid, wider at top, 2-layer SVG with chisel depth), `text-sm font-semibold` uppercase `tracking-[0.12em]`.
- Keystone glyph: inline SVG, 20x24 viewBox, 2 paths (outer + inner chisel), `currentColor`, `h-5` on nav, `h-1.5` rotated 45deg in dividers.
- Button primary: `bg-accent` (#D98A1E), `text-accent-foreground` (#121212), `hover:bg-accent-hover`, `h-10 px-6 text-base`, `rounded-md`. Link variant: `text-link underline-offset-4 hover:underline`.
- Card hover: `translate-y-0.5` down, `shadow-lg`, left accent bar fills top-to-bottom (`scale-y` 0→1 on hover).
- Network canvas: 14 nodes orbiting; amber core radial (`#D98A1E` rgba 0.12), charcoal dots (0.07), charcoal rings (0.04), amber pulse on node (0.25 opacity expanding ring).
- Motion: 3-frame staggered hero entrance (eyebrow 700ms, headline 1000ms delay-300, subhead delay-500), `ease-[cubic-bezier(0.2,0,0,1)]` standard easing, all reduced-motion aware.
- CTA copy: "Book a discovery call" + "Get your AI opportunity plan"; mailto links with subject lines.
- Meta title: "Citizen Mason". Meta description: "A second pair of senior eyes that prepares the work. You keep the final call."
- Footer tagline: "Let's build something that runs."
- Edge shimmer: amber gradient (217,138,30) sweeping top hairline, 1.1s animation, fires on scroll-reveal (0.15s delay) and hover, opacity fade.

**What to keep.**
- Message clarity. The headline "Turn the work that slows you down into software that runs itself" is strong. Keep the value-prop strategy (owner stays in control, no config change, deterministic, reduction not elimination). Section order (Hero > Problem > Verticals > HowItWorks > Proof > Founder > CTA) flows well.
- NetworkCanvas concept. 14-node orbiting system with amber pulses is a credible hero background that signals real systems, not a generic gradient. Reduced-motion awareness is exemplary. Keep the concept; differentiate the color/motion signature (keystone-shaped nodes, distinct pulse rhythm).
- FeatureCard index + reveal pattern. Numbered cards (01, 02, 03) with scroll-reveal + shimmer is a reusable primitive. Keep it; invest in a stronger hover micro-interaction and a color shift.
- Accessibility foundation. Skip link, focus rings, semantic HTML, reduced-motion respect, ARIA labels. Non-negotiable in V2; build on it.
- Responsive foundation. Container system, grid scales, type hierarchy scales smoothly. Preserve the Tailwind + Kit CSS structure; do not over-engineer.
- Founder credibility section. Image + 15-year product record + named clients is trustworthy. Keep it visible and prominent; the operator story is the differentiator.
- Metadata one-liner. "A second pair of senior eyes that prepares the work. You keep the final call." is the brand essence. Preserve across all copy.

## Current-State: Live Site — Narrative / Copy (`narrative`)

**Job.** Convert a high-stakes small-business owner (principal of a boutique luxury studio, agency, or specialist firm) to book a discovery call or request an AI opportunity plan, by establishing trust that AI preparation plus senior control is both valuable and safe.

**Component inventory.**
- Nav (sticky; keystone glyph wordmark, main anchors, "Book a call" CTA)
- Hero (eyebrow "AI systems for small business", display headline, subhead, dual CTAs, network canvas background)
- Takeaways (3-column grid: Time back / Runs on your tools / You stay in control)
- Problem (headline + paragraph on the senior-time bottleneck)
- Tracks (3-column cards: Studios / Agencies / Maybe yours)
- HowItWorks (3-column process cards: Find friction / Ship one system / It runs you control)
- Range (4-column proof: high-craft studio example + data-center example + live products + 15-year track record, pill badges)
- Founder (hero image left, text-right card: built-by-operator narrative + LinkedIn/email)
- WhyCustom (3-column cards: Why not SaaS / Why not ChatGPT / Why not agency)
- Start (centered CTA: headline + subhead + dual CTAs)
- Footer (wordmark, tagline, email link, nav links)

**Concrete UI facts (exact copy + values).**
- Hero headline: "Turn the work that slows you down into software that runs itself."
- Hero subhead: "Citizen Mason builds AI systems that take the repetitive, expensive work off your team and run it, on the tools you already use. You stay in control of every call that matters."
- Primary CTA (solid button): "Book a discovery call" → `href="#start"` (anchor), then `mailto:jeff@citizenmason.com?subject=Discovery%20call` in the Start section.
- Secondary CTA (link variant): "Get your AI opportunity plan" → `href="#start"`, then `mailto:jeff@citizenmason.com?subject=AI%20opportunity%20plan`.
- Accent: `#D98A1E` (light) / `#F0A93B` (dark). Accent hover `#C2761A` / `#F4D79A`.
- Canvas `#FAFAFA`/`#121212`; surface `#FFFFFF`/`#181818`; foreground `#121212`/`#FAFAFA`; muted-foreground `#525252`/`#A3A3A3`; link `#9E5E14`/`#F0A93B`.
- Font family (all): Geist Sans (fallback Segoe UI, Roboto). Mono: Geist Mono. Display font = Geist Sans (same as body).
- Hero headline size: `h1`, `text-5xl sm:text-6xl lg:text-7xl`. Subhead: `text-lg`, muted tone.
- Primary button size: lg (`h-10 px-6 text-base`).
- Wordmark: keystone glyph + "CITIZEN MASON" uppercase, `tracking-wider`. Eyebrow: `font-mono`, `text-xs`, uppercase, `tracking-[0.14em]`, muted-foreground.
- All CTAs route to `mailto:jeff@citizenmason.com` with subject params. NO form, NO scheduler.
- Meta description: "A second pair of senior eyes that prepares the work. You keep the final call."

**What to keep.**
- The message arc: problem → solution → proof → differentiation. Clear, specific, honest. Must survive V2.
- Operator-vs-agency framing: "built by an operator, not an agency." Differentiated and credible. Stays.
- Founder credibility: photo + 15-year history + live products. Strongest proof. Keep, possibly amplify.
- Control and trust messaging: "You stay in control," "anything client-facing waits for your yes." Load-bearing copy; must survive.
- Scroll-reveal animation pattern: subtle fade-in + translate-y. Tasteful, not gratuitous. Keep; enhance hierarchy via design.
- Semantic structure: section IDs, heading hierarchy, scroll-spy nav. Retain.
- Accessibility foundation: focus rings, reduced-motion hooks, skip-to-content, semantic HTML. Build on it.
- Grid layout system: 3-col and 2-col reflow, mobile-friendly. Keep.
- One-workflow pricing posture: "start with one workflow, pricing anchored to value not hours." Differentiated; must survive and possibly become more prominent.

## Input Digests

### Positioning

Source: `citizen-mason-principles.md`, `2026-06-16-website-foundation-principles.md`.

Citizen Mason is a fractional AI-Ops partner for high-stakes small businesses (interior design, agencies, galleries, architecture, wealth management). The brand must prove one core idea: a second pair of senior eyes that prepares work and never sends, signs, or speaks for the principal. Visual identity is entirely open. North Star: convert skeptical principals into trust ("I can trust an AI to prepare and review while I still decide").

Key points:
- Lead with the trust ladder (read-only → draft → send), not features. Use plain agency ("You hit Send. You sign. You decide") over jargon ("human-in-the-loop").
- Voice: open on a concrete scene, not a metric. Calm authority (Stripe Press, Ogilvy restraint). Section titles sell value not mechanism ("Shop Drawing Head Start" not "Pre-Read Advisory"). Do not pre-empt unraised objections.
- Proof inventory: one real anonymized artifact per pattern (read-summarize, compare-flag, capture-file) demonstrates the offering. Jeff's 15-year record is publishable credibility.
- Conversion: primary CTA = 45-minute structured discovery call (Citizen Mason owns the meeting stack). Secondary = 10-question intake with voice-memo option, returns a plan in one week. Pricing stays off-site (posture only: value against mistakes prevented and time freed).
- Wedge: shared pain (principal-as-product, senior compression, expensive absorbed mistakes, trust-gated buying) replaces a single vertical. Beachhead: luxury boutique interior design. In scope now: specialist agencies, fashion, galleries, boutique architecture, family offices.
- Mental shift: the product is the lived experience ("I can trust an AI to prepare and review while I still decide"), not the agents. Agents are commodity. Trust is earned one workflow at a time, starting read-only.

Implications for brand:
- Visual identity must signal restraint, not hype. No CTA hype or consultant-deck flourish. Calm authority: premium, current, not templated.
- Distinctiveness lives in proving the mental shift, not naming the mechanism. Show one real artifact, let the principal feel the trust shift.
- Founder visibility: Jeff's record is the only publishable credibility. Decide founder-forward or practice-forward; either way the founder is the second pair of eyes, not a hidden consultant.
- Conversion clarity must sound like a principal's conversation, not sales. "Understand before scope" (call) and "plan in a week" (intake) are low-friction asks.
- Never lead with cost or time saved. Locked positioning is capacity ("each person 2x more productive"), never cost-cutting. No "fire and hire us," no percentage time-saves.
- Self-selection is the brand's filter. "Who it's for" must attract principals with authority and budget and repel tire-kickers and price-shoppers. Narrow visible wedge (luxury services), language broad enough for adjacents.

**CONSTRAINTS (positioning):**
- **Hard anonymization.** Never name Coppel, Angie, Viviane, Charly, Caitlin; vendor names (DANZO, SAINT ELM, FINISHRITE); project names/addresses; the "free for referrals" terms; ARR targets or Jeff-hours thresholds. Anonymize as "a boutique luxury studio." The $80,000 mistake figure is allowed ONLY anonymized ("five-figure errors; one missed detail can cost tens of thousands") and never tied to a named project.
- **Proof assets.** Morning Brief recreated on a fictional studio. Shop Drawing Compare as a synthetic diff on fictional drawings. Dropbox assets fully de-identified. Trust guarantees (send path, copies-only, revocation) and Jeff's product record are public-safe and usable directly.
- **Messaging bans.** No "AI eliminates mistakes" (honest frame: AI plus human review reduces preventable errors). No "without losing your authority" or pre-empting unraised fears. No pre-signing-off objections ("Risk: None"). No consultant-we ("We deliver"); use product nouns and you-framing ("The Brief delivers"). No "fire X and hire us" cost comparisons.
- **Voice and tone.** Plain agency over jargon. Section titles sell value not mechanism. Open on a concrete moment not a metric. Calm authority. Register: Stripe Press (authoritative) + Ogilvy (single concrete object).
- **Conversion path.** Single-scroll landing page only (no multi-page, no live interactive demo this round). Primary CTA = 45-minute discovery call. Secondary = 10-question intake. Pricing never appears. Hero copy iterated, not overhauled. Promise "understanding before scope," not scope or price.
- **Positioning holds.** Fractional partner. High-stakes SMB audience. Principal stays decision-maker and final word. AI is back-of-house, principal is front-house. Every workflow ships read-only or draft-only first (trust ladder non-negotiable).

### Voice

Source: `strategy/writing-principles.md` (v0.6).

Copy must operate from concrete moments and proven trust language, never from consultant framing or defensive preemption. Twelve principles establish a plain-authority voice: open with a specific moment, not a metric; name moral stakes before mechanics; use client language, not abstract translation; lead with plain human agency ("You decide. You send. You sign.") instead of technical constraints; drop consultant-we entirely; show the work, never point at it; write to a confident reader assuming curiosity, not skepticism.

Key points:
- P1: Open on a moment, not a metric. A concrete scene, not stats ($10M signals consultant-speak; specific memory signals presence).
- P3: Name the moral stake before mechanics. Protection, standard, or relationship comes before describing the work.
- P4: Use client concrete imagery, not the abstract version. "The team's faces when something must be redone" beats "team morale impact."
- P5: Translate technical containment to plain agency. "Read-only" and "advisory" are the wrong frame; say what the human does: "You hit Send. You sign. You decide."
- P7 (three-class pronoun rule): Cut consultant-we (corporate royal we, "We will deliver"); keep collaborative-we (you-and-I in the same room, "we spend 45 minutes together"); keep commitment-I (writer accountable, "I'll follow up Friday").
- P8: Show, never point. Cut meta-claims that describe what the next paragraph will do.
- P9: Never pre-empt objections the reader has not raised. Cut "without losing your authority," "without sacrificing quality."
- P10: Write to a confident reader. Assume curiosity not skepticism; cut hedging, reassurance scaffolding, capability tours.
- Banned constructions: metaphors/analogies ("cheap now/expensive later," "boil the ocean," "spine/backbone/heart," "paint ourselves into a corner"); hedge phrases ("if it makes sense," "let me know if I can help," "happy to"); negative-form commitment ("We are not yet earning"); emdashes; emoji.
- Move: product nouns over future-tense verbs. "The Morning Brief delivers…" not "We will deliver a morning brief…" One concrete object beats a paragraph of description.
- Numerals rule: numerals where operational ("45 minutes," "1pm PT," "3 workflows"); spell out at the emotional point ("eighty-thousand-dollar chandelier").

Implications for brand:
- Hero copy leads with a specific, credible moment, rooting trust in "I was in the room" witness-authority, not abstract capability.
- Every section opens on a concrete scene or a named moral stake (what the principal is protecting), not a problem definition or workflow description.
- Conversion copy uses plain human agency: "You stay the final word," "You hit Send," "You decide." Not "read-only," "advisory," "human-in-the-loop."
- Visual identity and wordmark avoid metaphor entirely. State the literal role; do not use figurative language ("backbone," "partner," "guide") to signal positioning.
- Proof sections show the work (concrete artifact, client moment, tangible outcome), not "proof that demonstrates…" or credential lists with praise openers.
- Messaging is values-first, not features-first: name what is protected (craft, reputation, final-decision authority) before describing the workflow.
- Copy voice is calm authority to a smart, curious reader. No reassurance scaffolding, no objection pre-emption, no "we propose," no corporate plural. Stripped to imperative and declaration.
- Logo/mark cannot be abstract or metaphorical. If it uses an object (Ogilvy's Rolls-Royce rule), the object must do the selling, not require explanation.

**CONSTRAINTS (voice):**
- **Banned in all copy:** emdashes, emoji, metaphors (spine/backbone/heart/hub, cheap-now-expensive-later, boil-the-ocean, paint-into-corner, like/akin-to), analogies, figurative comparisons.
- **Banned pronouns:** consultant-we ("We will deliver," "We propose," "We are not X"). Keep collaborative-we (you-and-I together) and commitment-I only.
- **Banned hedge phrases:** "if it makes sense," "let me know if I can help," "happy to," "please don't hesitate," "want to," "trying to," "hoping to," "would rather than."
- **Banned objection-preemption:** no "without losing X," no "this is not about replacing Y," no defense against unraised questions.
- **Banned negative-commitment claims:** "We are not yet earning," "we want to be honest about." If the next sentence is honest it needs no defensive preface.
- **Banned in copy:** question-list sections ("Questions we want to answer"); compress discovery-call residue into a single decision paragraph.
- **Required:** every section opens on a moment/scene or a named moral stake, not a metric or problem definition.
- **Required:** lead with what is protected (craft, reputation, decision authority) before describing the workflow.
- **Required:** plain human agency language ("You decide. You send. You sign."), never technical constraint terms.
- **Required:** show the work (concrete artifact, moment, outcome); never announce "the following demonstrates."
- **Required:** numerals operational (45 minutes, 1pm PT, 3 workflows); emotional points spelled out (eighty-thousand-dollar mistake).
- **Required:** cut all meta-claims that describe what the next paragraph will do, sum the prior one, or announce a takeaway.
- **Anonymization hard lock:** no real names (Coppel, Angie, Viviane, Charly, Caitlin; vendor names DANZO/SAINT ELM/FINISHRITE; project names, addresses, ARR, Jeff-hours). Use "a boutique luxury studio." The $80K mistake anonymized only; proof via Jeff Newman's record (Phase, Magic Eden, Kraken, Scopely, NFL, HEAT, Deloitte) and live products (Crafted, Phase, Netrunner, Magic Eden).

### References

Source: custom brand research synthesis grounded in Citizen Mason V2 positioning, the 15-year founder record, and a competitive teardown of best-in-class premium B2B sites (Linear, Stripe, Vercel, Anthropic, Retool, Basecamp, Mercury, Arc).

Summary: V2 must escape the generic AI-consultancy visual formula (dark mode + neon accent + faint grid + glassmorphism) by anchoring on three moves: motion as the luxury signal (precise micro-interactions, not decorative animation), type as composition (Geist weight/size/color variation, not typeface swaps), and ruthless restraint (one amber accent, one CTA, one proof artifact + founder record). The distinctive identity is not in color alone but in how color, type, asymmetry, and wordmark signal "operator-built, principal-protective" instead of "agency template."

This teardown is reproduced in full below because the wireframe agents depend on it.

**Generic traps to avoid (do not do these):**
1. Dark mode + single neon accent (every AI shop).
2. Faint dot-grid or network hero (says "technology" not "craft").
3. Glassmorphism cards + gradient blobs (dates fast).
4. Inter + Geist Mono everywhere (zero personality).
5. Long paragraph copy broken only by metrics (reads consultant-speak).
6. Centered, symmetrical grid (safe, forgettable).
7. Hamburger nav + sticky header (abandons craft on desktop).
8. Bright CTA repeating 5+ times (reads desperate, breaks the "one ask" constraint).

**Best-in-class moves to steal (named references):**
- **Linear:** micro-interactions as personality. Every hover/scroll has precision feedback.
- **Stripe:** type as logo. Minimal color restraint (serif + white space + one accent).
- **Vercel:** kinetic type + deliberate asymmetry-breaking (off-center CTA).
- **Anthropic:** serif + sans contrast + founder visibility (signals a human team, not a black box).
- **Retool:** proof through building (live components, not mockups).
- **Basecamp:** conversational copy + warm color + tilted visual motif.
- **Mercury:** mono type as visual hierarchy (not utility).
- **Arc:** custom color palette + variable spatial composition per section.

**Five candidate identity territories** (each: color feeling, type idea, wordmark concept, emotion):
1. **Craftsperson's Ledger** — warm charcoal + ochre-amber; serif paired with Geist; chiseled-stone mark. Emotion: "I trust a craftsperson."
2. **Operator's Authority** — ink-black + copper-amber; Geist with tight tracking; typographic slash mark. Emotion: "founder who ships."
3. **Reliable Proxy** — warm gray + sage-bronze; serif; double-line accent. Emotion: "read the details for me."
4. **Unfussy Premium** — pure charcoal + gold; aggressive weight variation; chevron/roofline mark. Emotion: "simplicity is expensive."
5. **Studio Stamp** — deep charcoal + rust; condensed sans; tilted quoin block. Emotion: "real hands, warm, artisanal."

**Other key points:**
- **Motion as luxury:** fast micro-interactions (150-250ms, not cinematic/slow). Every animation earns itself. Hovers, reveals, mono counters ticking. Proof of craft, not decoration.
- **Type as composition:** Geist + Geist Mono is locked. Unlock within by varying weight, size, color. If every headline is the same weight/size, composition is lost. Mono type should be visible on the homepage, not hidden.
- **Asymmetry breaks template feel:** one deliberate asymmetry per page (offset image, ranged CTA, broken grid) signals intentionality. Scatter it everywhere and it becomes a pattern (template again).
- **Proof formula:** one real artifact (Morning Brief component, live DataTable, actual workflow step) + the founder's 15-year record. Artifact + track record beats ten case studies.
- **Copy discipline:** open on a moment, not a metric. Zero stats in the hero. No long paragraphs broken only by data. Conversational plain agency, no jargon.
- **One accent, one CTA:** amber appears only on the primary CTA or a single key moment. Book the call is the only conversion ask. This restraint is credible.

Implications for brand:
- Wordmark must feel owned. Avoid Geist-set-in-caps as default. Territory 1 (serif pairing + chiseled mark) signals "design principal"; Territory 2 (monospace authority + slash mark) signals "founder-built"; Territory 5 (condensed + tilted quoin) signals "studio stamp." Mock 2-3 during build; pick one that is not the Webflow-template path.
- Color customization. Charcoal + amber is locked, but shift amber tone (warmer ochre, deeper gold, terra-cotta rust) and charcoal warmth (taupe-gray, pure ink) to make the palette feel owned, not SaaS-default.
- Motion budget. All micro-interactions at 150-250ms. Two or three cinematic moments (hero reveal, one section stagger, one mono counter build), not five.
- Section composition varies. Never repeat the same layout twice. Text-left + component-right, then flip, then center, then asymmetric. Teach the eye that this is designed.
- Proof section is the anchor of the page. Three patterns (read, compare, capture) demonstrate the offering without reusing one client story. Make them feel interactive (click to reveal, scroll to show), not static screenshots.
- Founder visibility proportional to the authority claim. Photo, bio, "built by." Do not hide it; it proves this is not a 6-month-tenure agency.
- Anonymization at design time. Mock data in all wireframes ("a boutique luxury studio," "a shop-drawing project"). Zero real names.
- CTA copy away from urgency. "Book a discovery call," not "Start now" or "Get started today." The call is understanding, not urgency.

**CONSTRAINTS (references):**
- **Hard:** charcoal + amber as the sole color palette. Geist + Geist Mono as the sole typefaces (weight/size/color variation allowed, no typeface swaps).
- **Hard:** one CTA ask across the entire page — a discovery call. No secondary email signup, no download, no quiz. (Note: positioning permits a single secondary "AI opportunity plan" intake; treat the discovery call as the dominant, visually-primary ask and keep amber on it alone.)
- **Hard:** one amber accent. Every other color is charcoal-gray-ink-paper. Amber appears on one CTA or one key moment only.
- **Hard:** zero real client/vendor/person names in any public artifact. Anonymize as "a boutique luxury studio." Never use Coppel, Angie, Viviane, Charly, Caitlin, DANZO, SAINT ELM, FINISHRITE, project names/addresses, "free for referrals" terms, ARR/hours thresholds.
- **Hard:** the $80,000 mistake figure appears only anonymized, never tied to a named project. Phrasing: "A boutique luxury studio absorbs five-figure errors; one missed detail can cost tens of thousands."
- **Hard:** no real client names, photos, or testimonials without written permission. Proof of work uses anonymized or fictional examples.
- **Hard:** copy voice adheres to the Twelve (open on moment not metric, plain agency over jargon, product nouns not consultant-we, no pre-empting unraised objections).
- **Hard:** proof section shows one real artifact per pattern (read-summarize, compare-flag, capture-file) + the founder's 15-year portfolio. No case-study catalog.
- **Hard:** motion is fast (150-250ms) and earned. No slow cinematic "luxury" animations. Reduced-motion fallbacks on all animations.
- **Hard:** asymmetry as an intentional design signal. At least one deliberate layout break (off-center CTA, offset image, ranged text). Not scattered (then it becomes a pattern again).
- **Constraint:** wordmark should NOT be default Geist-set-in-caps. Mock 2-3 owned options (serif pairing, monospace authority, typographic marks, geometric shapes, tilted blocks). Decide during build.

## Design-Brief Inputs

The sharpest takeaways that should steer the bake-off.

1. **The bake-off lives or dies on distinctiveness and memorability.** Both are at 2/5 and both are explicitly flagged client pains. Message clarity, accessibility, and mobile fitness are already at 4/5 — do not spend the build re-solving them. Spend it on a mark, color, type, and motion that someone recognizes on sight.
2. **Single most important anti-generic move: escape the dark-mode + neon-accent + faint-network-grid + glassmorphism formula.** That formula is exactly what the current site approximates and exactly what every other AI shop ships. Owned color gamut (custom amber + custom charcoal warmth), type-as-composition (Geist weight/size/color variation, visible mono), and one deliberate asymmetry per page are the levers.
3. **The wordmark must stop being text-in-caps.** The keystone glyph is the only equity worth keeping, and it is underdeployed (small, simple, no secondary marks). Mock 2-3 owned wordmark directions tied to the identity territories. The mark must survive a thumbnail.
4. **Fix conversion structurally, not cosmetically.** Replace the mailto-only path. Give the discovery call a real next step (scheduler or embedded form), make it the single visually-primary amber CTA, and demote the "AI opportunity plan" intake to clear secondary weight. Add one frame-of-reference line ("understanding before scope," "a plan in one week") so the prospect knows what happens after the click. No urgency language.
5. **Strongest candidate identity territory: Operator's Authority** (ink-black + copper-amber, Geist with tight tracking, a typographic slash mark, "founder who ships"). It maps directly onto the load-bearing differentiation (built by an operator, not an agency; 15-year record; founder is the second pair of eyes) and onto the voice (plain authority, no metaphor). **Craftsperson's Ledger** (serif + chiseled-stone mark, "I trust a craftsperson") is the strong runner-up for the luxury-studio beachhead and should be carried as a second axis in the bake-off.
6. **Proof is acceptable as-is in approach — improve framing, not format.** The client did NOT flag "proof is told not shown." Keep the founder record and the artifact-plus-track-record formula. The fix is connecting the record to the visitor's problem ("solved the exact problem you have," not "built for big companies") and showing the three patterns (read, compare, capture) as interactive-feeling artifacts.
7. **Motion is the luxury signal, kept on a budget.** Fast micro-interactions at 150-250ms with precision feedback (Linear-grade hovers), two or three cinematic moments max, all reduced-motion aware. Differentiate the hero canvas's pulse rhythm or node shape rather than shipping another generic orbiting-dots field.
8. **Vary section composition; never repeat a layout twice.** Text-left/component-right, flip, center, asymmetric. The current copy-paste of one fade-in pattern across every section is a primary reason it reads templated.

### Anonymization + Voice Constraint Block (load-bearing — every wireframe inherits this)

- Zero real client/vendor/person names in any artifact, sample, or alt text. Banned: Coppel, Angie, Viviane, Charly, Caitlin; DANZO, SAINT ELM, FINISHRITE; any project name or address; the "free for referrals" terms; ARR targets; Jeff-hours.
- Anonymize the client as "a boutique luxury studio" (or "a boutique luxury interior-design studio").
- The $80,000 mistake may appear ONLY anonymized and never tied to a named project. Use: "A boutique luxury studio absorbs five-figure errors; one missed detail can cost tens of thousands."
- Public-safe and usable directly: Jeff Newman's record (Phase, Magic Eden, Kraken, Scopely, NFL Digital Media, Miami HEAT, Deloitte, Maestro) and live products (Crafted, Phase, Netrunner, Magic Eden).
- Copy follows the Twelve: open on a moment not a metric; plain agency ("You hit Send. You sign. You decide.") not technical terms ("read-only," "advisory," "human-in-the-loop"); product nouns not consultant-we; no pre-empting unraised objections; show the work not point at it. No emdashes, no emoji, no metaphors or analogies.
- Never "AI eliminates mistakes." Honest frame: AI plus human review reduces preventable errors.
- Never lead with cost or time saved. Sell capacity (each person more productive) and protection (craft, reputation, the final call), never cost-cutting.
- CTA copy is understanding, not urgency: "Book a discovery call," not "Start now."

### Realistic Sample-Data Set (anonymized — reuse these in wireframes)

Proof entities (anonymized, fictional, safe to render):
- **The studio:** "a boutique luxury interior-design studio" (the lead/beachhead case). Adjacent personas for the Tracks section: a specialist creative/marketing agency principal; a gallery owner; a boutique-architecture principal; a family-office principal.
- **Workflow pattern 1 — read-summarize ("Morning Brief"):** a daily brief that reads the studio's inbox overnight and returns room-tagged, thread-grouped items the principal scans in minutes. Render on a fictional studio, not real mail.
- **Workflow pattern 2 — compare-flag ("Shop Drawing Compare"):** a synthetic diff report over two fictional shop drawings that pairs an instruction with the contractor's response and flags what was not addressed. Anonymized phrasing for stakes: "one missed detail can cost tens of thousands."
- **Workflow pattern 3 — capture-file ("Autofiler"):** a de-identified folder snapshot showing incoming documents sorted and filed into the studio's existing structure.
- **Trust-ladder labels (plain agency):** "You read it. / You approve the draft. / You hit Send." Never "read-only / draft-only / send."

Jeff Newman record items (public-safe, reuse verbatim as proof pills/logos):
- Career / led-to-market: Deloitte, NFL Digital Media, Miami HEAT, Kraken, Scopely, Maestro.
- Built / live products: Crafted, Phase, Netrunner, Magic Eden.
- Founder line: 15-year product record; built by an operator who ships, not an agency. "A second pair of senior eyes that prepares the work. You keep the final call."
