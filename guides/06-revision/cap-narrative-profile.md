# Marty Protocol Editorial System — CAP Narrative Profile

Phase: 06 - Revision  
Purpose: Collapse phases `00`–`05` into one CAP Narrative Profile-aligned editorial artifact so the Marty publication can be audited, revised, and extended as a coherent system.  
Time to Complete: 45–60 minutes

<!-- guide:cap_narrative_profile -->

## Why This Matters

The earlier phases define the Marty publication from several angles:

- strategy and reader transformation
- thesis, promise, and hook
- narrator bench and stakeholder cast
- protocol world and deployment contexts
- structural clusters, paths, and collections
- source inventory and priority drafting packets

Phase 6 needs a single revision artifact that can hold all of that at once.

This document uses the structure and terminology of the CAP Narrative Profile to do that.
It turns the Marty publication into a reusable narrative system:

- with a stable cast
- a stable world model
- explicit story architecture
- canonical units and trajectories
- voice contracts
- revision audits

That makes editorial freedom easier to preserve without losing the Marty thesis.

## Conformance Note

This is a **CAP Narrative Profile-aligned synthesis**, not yet a schema-validated CAP JSON corpus.
It uses the concepts from `Origin-Draft/cap-narrative-profile` (`PROFILE.md` and `SPECIFICATION.md`) as a revision framework for the Marty publication.

Use it for:

- editorial consistency review
- topic evaluation
- narrator assignment
- revision and audit passes
- future conversion into structured CAP artifacts if we choose to operationalize that later

## Source Coverage Matrix

| Source phase artifact | CAP profile function in this document |
| --- | --- |
| `00-start-here/course-brief.md` | artifact scope, thesis boundary, topic freedom rules, core primitives, stakes, tone |
| `00-start-here/audience-and-transformation.md` | protagonist definition, ally/skeptic roles, reader-state transition model |
| `00-start-here/publishing-strategy.md` | unit types, CTA rhythm, navigation logic, canonical publishing semantics |
| `01-concept/series-thesis-and-logline.md` | controlling idea, central conflict, inciting pressure, argument spine |
| `01-concept/transformation-promise.md` | entry state, exit state, milestone ladder, observable success markers |
| `01-concept/narrative-hook.md` | curiosity gap, recurring open threads, return engine, event/cause pattern |
| `02-characters/author-character-profiles.md` | narrator registry, voice signatures, handoff logic, archetypes |
| `02-characters/stakeholder-role-map.md` | stakeholder cast, conversion signals, role-specific proof thresholds |
| `03-world-building/protocol-ecosystem-map.md` | five primitives, standards/trust map, core tensions, terminology discipline |
| `03-world-building/use-cases-and-deployment-contexts.md` | setting registry, deployment packages, recurring operational environments |
| `04-plot-and-structure/series-arc.md` | five gravity wells, return questions, deeper arc logic |
| `04-plot-and-structure/module-map.md` | cluster model, lead voices, reader outcomes, content gaps |
| `04-plot-and-structure/post-sequence.md` | canonical views, entry paths, orientation sequences |
| `05-drafting/course-manuscript-outline.md` | collection model, anchor pieces, conversion beats |
| `05-drafting/published-content-source-map.md` | proof surfaces and source-pairing logic |
| `05-drafting/priority-draft-briefs.md` | high-leverage unit candidates and next drafting packets |

## 1. Profile Declaration

### Working CAP-style header

- **protocol:** `canonical-artifact-protocol`
- **protocol_version:** `0.1.0` (working alignment target)
- **profile:** `narrative`
- **profile_version:** `1.0.0`
- **artifact_id:** `marty_protocol_editorial_system`
- **title:** `Marty Protocol Blog / Learn the Marty Protocol`
- **artifact mode:** topic-led technical publication with optional guided paths
- **domain:** cryptographically verifiable digital identity infrastructure
- **status:** revision-phase synthesis
- **primary reader transformation:** `confused -> oriented -> interested -> structured -> evaluative -> design_ready`

### Observables

- **Public publication name:** Marty Protocol Blog
- **Guided collection name:** Learn the Marty Protocol
- **Format:** technical blog + guide hub + author-led publication + protocol/product field guide
- **Current material base:** 6 guide chapters, 22 guide articles, 22 flagship posts, and a 40-post roadmap topic pool
- **Cadence:** biweekly flagship posts plus evergreen guide updates, topical essays, and protocol-doc cross-links
- **Primary audience:** buyer-builders, architects, product/security/compliance leads, operators, and implementers evaluating reusable credential infrastructure

### Core guarantee this profile is preserving

The Marty publication must allow free topical entry **without** losing the same deeper architecture argument:

> Digital identity becomes more portable, governable, privacy-preserving, and economically sane when trust, disclosure, deployment, and lifecycle logic are modeled as reusable protocol objects instead of opaque platform code.

## 2. Entity Registry

### 2.1 Core role entities

| Entity ID | Entity Type | Structural role | What it wants / pressures | Why it matters |
| --- | --- | --- | --- | --- |
| `protagonist_reader` | character | protagonist | Wants a durable, legible architecture model for real credential systems | The main reader whose understanding the publication is trying to transform |
| `ally_peer` | character | ally | Wants clean artifacts, credible governance, and practical deployment answers | Represents implementers, reviewers, architects, and internal supporters |
| `skeptic` | character | foil | Pressures every claim with procurement fatigue, standards skepticism, and fear of abstraction | Keeps the publication honest and concrete |
| `antagonist_system` | group | antagonist | Exerts lock-in economics, standards fragmentation, hidden trust logic, overcollection, and compliance confusion | The true opposing force in the Marty story |
| `ally_tooling` | group | helper | Contains guide chapters, flagship posts, MIP spec, schemas, conformance, and packaging material | Converts explanation into proof and evaluation readiness |

### 2.2 Narrator registry

These narrators are the recurring CAP `narrator` entities that carry the publication voice.

| Entity ID | Archetype | Core question | What this voice notices first | Best used for | Voice signature |
| --- | --- | --- | --- | --- | --- |
| `daniel_ortega` | Architect-Mentor | What minimum shared model makes identity interoperable? | missing abstractions, duplicated logic, code vs configuration | openings, synthesis, protocol reveal | calm, high-conviction, system-clarifying, contrast-driven |
| `aiko_tanaka` | Standards Cartographer | What do the standards and regulations actually require? | institutional pressure, standards gaps, timing | standards explainers, regulatory context, market timing | measured urgency, precise institutional framing |
| `marcus_vale` | Cryptographic Skeptic | What is the trust chain and where does it fail? | trust anchors, revocation, algorithms, assurance claims | trust, PKI, revocation, post-quantum, scrutiny | cool, exact, mechanism-first, skepticism without panic |
| `elena_kovacs` | Governance Realist | Who is allowed to do what, under which rules, and how does that change safely? | policy boundaries, separation of duties, auditability | governance, compliance, Cedar, control-plane logic | practical, institutionally literate, explicit about rule surfaces |
| `sofia_rahman` | Deployment Operator | What happens when this leaves the diagram and hits the device or lane? | runtime constraints, offline behavior, holder interactions, latency | deployments, offline, device flows, operational proof | grounded, tactile, environment-first, pragmatic |
| `victor_leclerc` | Ecosystem Cartographer | How does trust scale across issuers, institutions, and regions? | topology, federation, registries, issuer discovery | trust registries, federation, cross-ecosystem infrastructure | broad, infrastructural, network-minded |
| `nora_patel` | Privacy Conscience | What is the least information we need to know? | overcollection, linkability, verifier convenience, minimum disclosure | privacy, selective disclosure, presentation policy, ZK framing | principled, exact, quietly forceful |

### 2.3 Setting registry

| Entity ID | Entity Type | Narrative use | Canonical examples |
| --- | --- | --- | --- |
| `institutional_environment` | location | Regulated or high-assurance setting where governance and compliance matter immediately | government, enterprise, travel, education |
| `public_social_market` | location | The market-facing discourse layer where vendor stories, standards narratives, and category framing collide | procurement discussions, ecosystem messaging, standards debate |
| `threshold_decision_point` | location | The moment of choosing an architecture, deployment, trust model, or vendor path | platform review, buying decision, architecture selection |
| `workbench_design_review` | location | The practical design table where abstractions become flows, policies, and schemas | whiteboards, implementation reviews, proof-of-concept planning |
| `field_operation_runtime` | location | Where runtime constraints punish vague architecture | airport lanes, kiosks, offline terminals, device-bound verification |
| `ecosystem_network` | location | The multi-party trust environment beyond a single issuer or verifier | trust registries, federation, cross-border acceptance |

### 2.4 Object and proof registry

| Entity ID | Entity Type | Function |
| --- | --- | --- |
| `five_mip_primitives` | object | Core model: Trust Profile, Credential Template, Presentation Policy, Deployment Profile, Flow |
| `standards_cluster` | object | ICAO 9303, ISO 18013-5, OID4VCI, OID4VP, W3C VC DM, SD-JWT-VC, DID Core, EUDI, AAMVA, Open Badges |
| `mip_specification` | object | Formal proof that the Marty model exists beyond editorial description |
| `schema_conformance_suite` | object | Implementation maturity surface that reinforces artifact proof |
| `deployment_packages` | object | Self-hosted, hosted, and edge/kiosk deployment choices |
| `pricing_model` | object | Infrastructure economics expressed through deployment and governance pricing |
| `guide_hub` | object | Structured guide layer that offers optional paths without forcing sequence |

## 3. Story Architecture

### 3.1 Observables

- **Surface genre:** topic-led technical publication + protocol field guide + implementation-oriented operator journal
- **Narrative posture:** specialist author bench with a shared protocol thesis underneath
- **Canonical unit:** one standalone essay, guide article, or flagship post that answers one important question well
- **Expected unit outcome:** a clearer model, a sharper decision lens, or a stronger path into evaluation material

### 3.2 Structure

#### Inciting pressure

The world is being forced to treat identity as infrastructure because several pressures now converge:

- EUDI readiness timelines
- mDL and government mobile credential adoption
- offline verification requirements
- privacy and minimum-disclosure expectations
- standards sprawl and cross-ecosystem interoperability pressure
- the need to escape per-check verification economics

#### Macro structure

The publication follows five recurring gravity wells rather than one rigid syllabus:

1. **Category Reframe** — why identity needs a protocol, not another platform
2. **Model Reveal** — the five MIP primitives as the reusable system
3. **Constraint Layer** — trust, governance, privacy, revocation, and policy pressure
4. **Operational Proof** — deployments, offline behavior, runtime reality, cross-context use cases
5. **Artifact and Adoption Proof** — spec, schemas, conformance, and deployment/package evaluation

#### Canonical unit types

- foundational explainer
- primitive deep dive
- standards or regulation explainer
- deployment pattern or use-case walkthrough
- implementation walkthrough
- business or pricing case
- synthesis / announcement post

#### Dominant event types

- diagnosis
- reframe
- comparison
- deep dive
- standards mapping
- deployment pattern
- implementation walkthrough
- synthesis

#### Dominant settings

- institutional environments
- workbench design reviews
- threshold decision points
- field-operation runtimes
- public market discourse
- ecosystem-scale trust networks

### 3.3 Interpretations

#### Central collision architecture

- **Protagonist:** the buyer-builder trying to make the identity stack legible and durable
- **Antagonist:** the system of lock-in, fragmentation, hidden policy logic, repeated re-verification cost, and compliance ambiguity
- **Mentor force:** the narrator bench plus the protocol artifacts

#### Controlling idea

When trust, disclosure, governance, deployment, and lifecycle behavior are made explicit as governed protocol objects, digital identity becomes understandable, portable, and operationally credible across real environments.

#### Core themes

- protocol vs platform
- portability vs lock-in
- policy vs buried code
- privacy vs overcollection
- online freshness vs offline resilience
- standard fidelity vs implementation sanity
- infrastructure economics vs metered verification extraction

#### Protagonist arc

- **entry state:** curious but structurally under-informed
- **middle states:** oriented, interested, structured, evaluative
- **desired end state:** design-ready and able to map a real use case to Marty primitives, standards, and deployment choices

#### Antagonist design

The enemy is not a single vendor.
It is the repeating system pattern that keeps identity fragmented:

- proprietary platforms hiding critical trust logic
- disconnected standards clusters
- verifier convenience overriding privacy
- deployment assumptions collapsing in the real world
- compliance change requiring engineering fire drills

#### Open threads that keep readers returning

- If standards already exist, what layer is still missing?
- Which primitive is actually doing the work here?
- What changes when the same trust model must survive offline or at the edge?
- Can privacy, compliance, and deployment realism coexist?
- Is Marty real enough to evaluate, not just admire?

## 4. Canonical Unit Map

These are the publication's five primary CAP-style units at the cluster / collection level.

| Unit ID | Unit type | Lead voices | Reader shift | Event / causal role | Core sources | Semantic fingerprint | Conversion beat |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `category_reframe` | chapter_segment | Daniel, Aiko | `confused -> oriented` | diagnosis / setup | `why-identity-needs-a-protocol`, `business-case-for-credential-portability`, foundations guide material | `PROTAGONIST_READER reframes ANTAGONIST_SYSTEM | ROLE=setup | SHIFT=confused→oriented | BEAT=category_reframe | POV=expository | TONE=rigorous` | The reader stops treating identity as a per-check platform category |
| `five_primitive_model` | chapter_segment | Daniel, Victor, Nora | `oriented -> structured` | revelation / trigger | primitive guides, `trust-profiles-explained`, `credential-templates-designing-what-gets-issued`, `presentation-policies-minimum-disclosure`, `deployment-profiles-from-design-to-production`, `flows-orchestrating-identity-lifecycle` | `MENTOR_VOICE maps FIVE_MIP_PRIMITIVES | ROLE=trigger | SHIFT=oriented→structured | BEAT=model_reveal | POV=expository | TONE=clear` | The reader can map a problem to Marty objects instead of vendor features |
| `constraint_layer` | chapter_segment | Marcus, Elena, Nora | `structured -> serious` | deep_dive / complication | `cryptographic-trust-anchors-primer`, `compliance-profiles-bridging-regulation`, `zero-knowledge-predicates-identity`, `cedar-policies-for-identity-governance`, `building-trust-registries-at-scale`, `revocation-strategies-compared` | `PROTAGONIST_READER tests ANTAGONIST_SYSTEM | ROLE=complication | SHIFT=structured→serious | BEAT=constraint_layer | POV=analytic | TONE=exact` | The reader sees Marty as able to survive trust, privacy, and governance pressure |
| `operational_proof` | chapter_segment | Sofia, Aiko, Nora | `serious -> confident` | deployment_pattern / crisis | deployment guides, `offline-verification-design-patterns`, `holder-binding-beyond-biometrics`, `eudi-wallet-readiness`, `mip-and-open-badges-education-credentials` | `SOFIA_RAHMAN proves FIELD_OPERATION_RUNTIME | ROLE=crisis | SHIFT=serious→confident | BEAT=operational_proof | POV=pragmatic | TONE=grounded` | The reader believes the same model can survive travel, retail, enterprise, education, and edge conditions |
| `artifact_adoption_proof` | chapter_segment | Daniel, Elena, Sofia | `confident -> design_ready` | synthesis / resolution | `introducing-mip`, `mip-json-schemas-walkthrough`, `conformance-testing-for-implementers`, `marty-protocol/README.md`, pricing/packaging materials | `ALLY_TOOLING reveals MIP_SPECIFICATION | ROLE=resolution | SHIFT=confident→design_ready | BEAT=artifact_proof | POV=evaluative | TONE=concrete` | The reader moves into spec, schemas, deployment evaluation, and implementation review |

## 5. Canonical Views and Reader Trajectories

### 5.1 Default orientation view

The cleanest guided path remains:

1. `why-identity-needs-a-protocol`
2. `centralized-vs-verifiable`
3. `business-case-for-credential-portability`
4. `trust-profiles-explained`
5. `credential-templates-designing-what-gets-issued`
6. `presentation-policies-minimum-disclosure`
7. `deployment-profiles-from-design-to-production`
8. `flows-orchestrating-identity-lifecycle`
9. `compliance-profiles-bridging-regulation`
10. `offline-verification-design-patterns`
11. `introducing-mip`
12. `mip-json-schemas-walkthrough`
13. `conformance-testing-for-implementers`

### 5.2 Reader-type views

| View | Primary trajectory |
| --- | --- |
| **Strategic / buyer** | category reframe -> business case -> EUDI / deployment pressure -> implementation/evaluation proof |
| **Architecture** | foundations -> five primitives -> flows -> schema walkthrough |
| **Privacy / governance** | presentation policies -> ZK / SD-JWT -> compliance profiles -> Cedar governance |
| **Operator / deployment** | deployment profiles -> offline guide -> offline patterns -> holder binding -> deployment examples |
| **Implementer** | issuance flows -> presentation flows -> protocol integrations -> schemas -> conformance |

### 5.3 Protagonist trajectory view

| State | Observable sign |
| --- | --- |
| `confused` | Sees identity as acronym fog, vendors, and disconnected standards |
| `oriented` | Understands the platform-vs-protocol argument |
| `interested` | Can name the five primitives and why they matter |
| `structured` | Connects standards, use cases, and deployments to those primitives |
| `evaluative` | Asks Marty-shaped questions about trust profiles, deployment profiles, and policy surfaces |
| `design_ready` | Can sketch a first-pass Marty architecture or evaluation brief |

### 5.4 Expansion pool view

The roadmap remains a **topic pool**, not a required queue, across these domains:

- foundations
- standards
- credentials
- wallets
- privacy
- governance
- trust infrastructure
- advanced Marty protocol synthesis

## 6. Prose Analysis and Voice Contract

### 6.1 Global voice contract

| Dimension | Default setting |
| --- | --- |
| **Narrative register** | calm, rigorous, explanatory, commercially honest |
| **Default diction** | standards-literate, practical, compressed, example-driven |
| **Default pacing** | brisk enough for busy technical readers, slow enough to preserve clarity |
| **Sentence tendency** | medium-to-long explanatory sentences, broken up by clean contrasts and concrete examples |
| **Dominant discourse mode** | explanation -> example -> implication -> next step |
| **Signature constructions** | platform vs protocol; code vs configuration; one-off integration vs reusable primitive; use case -> primitive -> deployment -> evaluation |
| **Avoided constructions** | hype, vague SSI futurism, empty vendor-neutrality, unexplained jargon, compliance overclaim, generic thought leadership |

### 6.2 Narrator-specific modulation

| Narrator | Register shift | Best paragraph mode | Handoff tendency |
| --- | --- | --- | --- |
| Daniel | architectural synthesis | category framing + clean model reveal | hand to Aiko, Sofia, or Elena for grounding |
| Aiko | standards pressure | ecosystem comparison + implementation implication | hand to Daniel or Victor |
| Marcus | trust scrutiny | trade-off explanation + assurance boundary | hand to Nora or Victor |
| Elena | governance clarity | rule surface + policy consequence | hand to Daniel or Aiko |
| Sofia | runtime realism | environment narrative + failure mode | hand to Daniel or Nora |
| Victor | network-scale trust | federation/topology explanation | hand to Aiko or Marcus |
| Nora | privacy boundary | overcollection moment -> minimum required knowledge -> mechanism | hand to Sofia or Marcus |

## 7. Revision Audit (`representation_audit` analogue)

Phase 6 should use this section the way the CAP Narrative Profile uses audit layers: as a revision instrument, not as generation-first material.

| Audit dimension | What must stay true | Common failure mode | Revision rule |
| --- | --- | --- | --- |
| **Thesis coherence** | Every strong piece should make the Marty model easier to understand | topical drift into generic IAM commentary | name the active primitive, tension, or deployment context explicitly |
| **Terminology discipline** | The five primitives and major standards should keep stable names | synonym drift that hides the protocol object | normalize names before publication |
| **Reader-role balance** | Sponsors, architects, security/compliance, operators, implementers, and buyers all need paths in | over-serving one stakeholder at the expense of others | note the primary role and secondary role for every draft |
| **Use-case breadth** | Marty should appear relevant across travel, retail, enterprise, education, and regulated web/API contexts | overfitting the publication to one standards cluster or one deployment story | add at least one secondary use-case pointer when a piece risks narrowness |
| **Privacy integrity** | Minimum disclosure and holder control must remain structural concerns | verifier convenience quietly overriding privacy principles | ask what the verifier truly needs to know, then test the policy boundary |
| **Governance honesty** | Policy, trust, and compliance logic should be visible as governed data | pretending governance is solved by wallet support or format choice alone | make rule surfaces, trust sources, and policy change paths explicit |
| **Deployment realism** | Online/offline, edge, latency, and operator conditions are real architectural constraints | cloud-only assumptions sneaking into supposedly general pieces | include a runtime consequence or deployment implication in revision |
| **Commercial honesty** | Marty is being taught and sold as infrastructure, not hidden behind fake neutrality | slipping into either hard pitch or evasive non-positioning | keep product handoff proportional and artifact-backed |
| **AI persona transparency** | Authors remain curated AI research personas, not faux autobiographical humans | persona cosplay or implied lived experience | preserve disclosure language and avoid fake personal claims |
| **Proof surface strength** | Strong claims should point toward guide, spec, schema, conformance, or packaging proof | making the thesis sound clever without showing artifact reality | add at least one proof surface when the claim carries architectural weight |

## 8. Draft Evaluation Checklist

Before a Marty draft leaves Phase 6, ask:

1. **What reader state shift does this piece cause?**
2. **Which entity or pressure is focalized most strongly?**
3. **Which primitive, abstraction, or recurring tension is active?**
4. **Which setting makes the claim concrete?**
5. **Which narrator is best suited to carry the piece?**
6. **What proof surface backs the argument?**
7. **What adjacent topic, guide, spec, or evaluation asset is the next step?**
8. **Does the piece preserve Marty's protocol thesis without sounding repetitive?**

## 9. Practical Use in Later Phases

Use this document when:

- assigning a narrator to a topic
- checking whether a draft belongs in the Marty publication at all
- auditing whether a standalone piece still fits the full arc
- designing pathing, CTAs, and adjacent links
- preparing a future machine-readable CAP artifact set from the editorial system

## Related

- `../00-start-here/course-brief.md`
- `../01-concept/series-thesis-and-logline.md`
- `../02-characters/author-character-profiles.md`
- `../03-world-building/protocol-ecosystem-map.md`
- `../04-plot-and-structure/series-arc.md`
- `../05-drafting/course-manuscript-outline.md`
- `publication-backlog-table.md`
- `publication-scene-cards.md`
- `publication-post-packets.md`
- `publication-evidence-packets.md`

This is the Phase 6 artifact that lets Marty behave like a flexible publication on the surface and a coherent protocol education system underneath.