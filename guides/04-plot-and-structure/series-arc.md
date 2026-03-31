# Series Arc

Phase: 04 - Plot and Structure  
Purpose: Define the underlying Marty arc so independent topical essays still feel like parts of one larger argument.  
Time to Complete: 25–40 minutes

<!-- guide:series_arc -->

## Why This Matters

The Marty corpus already has strong ingredients:

- a clear protocol thesis
- a live guide curriculum
- a set of primitive deep dives
- deployment and privacy examples
- an open-source launch post
- implementation artifacts and pricing logic

What it does **not** need is a rigid publishing queue.
What it **does** need is an underlying arc that can survive topical freedom.

## Current Working Draft

### Arc as Gravity, Not Order

Think of the Marty arc as five gravity wells.
Authors can begin from any one of them, but the publication stays coherent because the same deeper questions keep repeating.

#### Gravity Well 1 — Category Reframe
**Reader feeling:** The current identity market is expensive, fragmented, and conceptually wrong-footed.  
**Core materials:**
- `why-identity-needs-a-protocol`
- `business-case-for-credential-portability`
- guide chapter 1 (`foundations-*`, `centralized-vs-verifiable`)

**Narrative job:** Break the reader's assumption that identity should be bought as a platform or consumed as a per-check API.

#### Gravity Well 2 — Model Reveal
**Reader feeling:** There is a cleaner way to think about this system.  
**Core materials:**
- `trust-profiles-explained`
- `credential-templates-designing-what-gets-issued`
- `presentation-policies-minimum-disclosure`
- `deployment-profiles-from-design-to-production`
- `flows-orchestrating-identity-lifecycle`
- guide chapters 2 and 4

**Narrative job:** Reveal the five Marty primitives as the reusable model that explains the ecosystem.

#### Gravity Well 3 — Constraint Layer
**Reader feeling:** This is not just elegant — it also has to survive real trust, privacy, and governance pressures.  
**Core materials:**
- `cryptographic-trust-anchors-primer`
- `zero-knowledge-predicates-identity`
- `compliance-profiles-bridging-regulation`
- `cedar-policies-for-identity-governance`
- `building-trust-registries-at-scale`
- `revocation-strategies-compared`
- guide chapter 3

**Narrative job:** Show that Marty's abstractions remain useful when the hard parts arrive.

#### Gravity Well 4 — Operational Proof
**Reader feeling:** The model works in environments that actually matter.  
**Core materials:**
- guide chapter 5 deployment and use-case articles
- `offline-verification-design-patterns`
- `holder-binding-beyond-biometrics`
- `eudi-wallet-readiness`
- `mip-and-open-badges-education-credentials`

**Narrative job:** Prove the model in travel, retail, enterprise, education, and regulated deployment contexts.

#### Gravity Well 5 — Artifact and Adoption Proof
**Reader feeling:** This is no longer just a conceptual framework — it is a thing we can evaluate, implement, and possibly buy.  
**Core materials:**
- `introducing-mip`
- `mip-json-schemas-walkthrough`
- `conformance-testing-for-implementers`
- pricing/deployment packaging materials
- guide chapter 6

**Narrative job:** Land the publication in open-source artifacts, concrete implementation surfaces, and deployment/governance packaging.

### Return Questions

| Return question | Why it matters in the Marty arc |
| --- | --- |
| **Why protocol, not platform?** | Keeps the category reframe alive |
| **Which primitive is really at issue here?** | Prevents topical drift |
| **What trust, privacy, or governance constraint changes the answer?** | Keeps the hard parts visible |
| **Where does this actually run?** | Forces deployment realism |
| **What artifact proves this is real?** | Connects editorial insight to Marty evaluation |

### How Authors Can Enter Anywhere

A strong article may start from:

- a standard or regulation
- a deployment pain point
- a privacy problem
- a trust or revocation question
- a flow or runtime behavior
- a product or protocol artifact

But it should still do three things before it ends:

1. identify the deeper Marty question it belongs to
2. reconnect the local topic to one or more primitives or supporting abstractions
3. suggest the most useful next layer for the reader to explore

### Common Post-Level Scene Shapes

The strongest current Marty flagship posts suggest three recurring scene shapes.

1. **Three-scene explainer**
   - scene 1: name the market pressure, misconception, or runtime problem
   - scene 2: reveal the Marty distinction or mechanism that changes the answer
   - scene 3: land the operational, commercial, or architectural implication
   - best current pattern references: `why-identity-needs-a-protocol`, `business-case-for-credential-portability`, `presentation-policies-minimum-disclosure`, `offline-verification-design-patterns`

2. **Four-scene bridge / evaluation post**
   - scene 1: frame the credibility problem or decision threshold
   - scene 2: reveal the protocol model, spec surface, or structural answer
   - scene 3: show concrete proof surfaces
   - scene 4: hand the reader into the next evaluation or implementation asset
   - best current pattern reference: `introducing-mip`

3. **Single-scene proof note**
   - one sharply bounded operational, implementation, or use-case example does most of the work
   - best reserved for supporting backlog items rather than core anchor posts

The shape should fit the question. Do not add scenes for their own sake.
When a post belongs to the Five Primitives navigation model, it should also make clear where the reader is on that map.

### Topic Freedom Rules

1. **Answer the real question first.**  
   Do not force every article to begin with the same identity 101 framing.

2. **Name the active primitive or tension.**  
   The reader should know whether this topic is mainly about trust, disclosure, deployment, flow, governance, or artifact proof.

3. **Use a real context whenever possible.**  
   Travel, retail, enterprise, education, EUDI, or edge deployment contexts make abstraction memorable.

4. **Link sideways and downward.**  
   Sideways = adjacent topic. Downward = guide/spec/schema/deployment asset.

5. **Let the product reveal be proportional.**  
   Not every article must hard-sell Marty, but every good article should make Marty easier to evaluate.

### Most Important Insight To Protect

The most important sentence in the whole publication is still something like:

> The hard part of identity is not storing claims in a wallet. The hard part is making trust, disclosure, governance, deployment, and lifecycle behavior legible and configurable.

If later topics lose that sentence, the arc weakens.

### Ending State

Across many different entry points, the reader should eventually be able to say:

- I understand the Marty model
- I understand which standards and deployment contexts it absorbs
- I know what I would evaluate first in my environment
- I understand why Marty is priced and packaged like infrastructure

## Related

- `module-map.md` — organizes the publication into flexible topic clusters
- `post-sequence.md` — records recommended paths rather than one mandatory order
- `../05-drafting/course-manuscript-outline.md` — turns this arc into topic-led drafting logic
