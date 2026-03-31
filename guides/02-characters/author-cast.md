# Author Cast

Phase: 02 - Characters  
Purpose: Define the recurring editorial cast for a topic-led Marty publication, clarifying what each author persona owns and how their voice supports both trust and conversion.  
Time to Complete: 20–30 minutes

<!-- guide:author_cast -->

## Why This Matters

The Marty blog already uses a specialist bench rather than a single anonymous brand voice.
That is a strength.

It lets the publication:

- distribute authority across domains
- make standards and cryptography feel human-scale
- let authors pursue timely topics without losing coherence
- sell Marty through expertise rather than through constant product claims

This document records the current editorial cast based on the live blog content.

## Current Working Draft

### Editorial Ensemble

| Persona | Domain | What they teach | What they sell implicitly |
| --- | --- | --- | --- |
| **Daniel Ortega** — Protocol Architect | Protocol design, flows, architecture, schemas | Why identity needs a protocol, how MIP primitives compose, what the spec contains, how implementations line up | Marty as the unifying architecture layer |
| **Aiko Tanaka** — Standards Analyst | ICAO, ISO 18013-5, EUDI, Open Badges, portability economics | Why standards matter, what regulations require, where interoperability pressure is coming from | Marty as the practical bridge from standards to deployments |
| **Marcus Vale** — Cryptography Researcher | PKI, trust anchors, revocation, post-quantum readiness | Why verifiability is cryptographic, how trust chains work, how revocation and algorithm agility should be modeled | Marty as a trust model that can survive technical change |
| **Elena Kovacs** — Identity Governance Specialist | Compliance profiles, Cedar, governance, ecosystem rules | How policy, authorization, and governance fit into identity infrastructure | Marty as governable infrastructure rather than ad hoc code |
| **Sofia Rahman** — Wallet Systems Specialist | Deployment profiles, offline verification, holder binding, wallet operations | How the protocol behaves on devices, in lanes, in air-gapped environments, and in user-facing flows | Marty as deployable in the real world, not just on whiteboards |
| **Victor Leclerc** — Trust Infrastructure Researcher | Trust profiles, registries, federation, verifier infrastructure | How issuers become discoverable and trustworthy at ecosystem scale | Marty as infrastructure for inter-organizational trust |
| **Nora Patel** — Privacy & Data Minimization Researcher | Presentation policies, selective disclosure, zero-knowledge, privacy | Why minimum disclosure matters and how privacy can be encoded in the protocol model | Marty as a privacy-by-design alternative to data-hungry verification |

### Persona-by-Persona Working Notes

#### Daniel Ortega

**Role in the publication:** Primary synthesis voice  
**Best current source posts:**
- `why-identity-needs-a-protocol`
- `credential-templates-designing-what-gets-issued`
- `flows-orchestrating-identity-lifecycle`
- `introducing-mip`
- `mip-json-schemas-walkthrough`
- `conformance-testing-for-implementers`

**Function:** Daniel frames the big picture and performs synthesis. He is the right lead voice when a topic must connect business pain to protocol model to implementation artifact.

#### Aiko Tanaka

**Role in the publication:** Standards legitimacy and regulatory pressure  
**Best current source posts:**
- `business-case-for-credential-portability`
- `eudi-wallet-readiness`
- `mip-and-open-badges-education-credentials`
- roadmap phases for standards and government identity

**Function:** Aiko proves that Marty is not inventing a parallel universe. She grounds the publication in ICAO, ISO, EUDI, and the practical economics of portability.

#### Marcus Vale

**Role in the publication:** Technical trust and cryptographic seriousness  
**Best current source posts:**
- `cryptographic-trust-anchors-primer`
- `post-quantum-readiness-in-identity`
- `revocation-strategies-compared`
- roadmap entries on PKI, trust anchors, and certificate validation

**Function:** Marcus gives the protocol teeth. He turns trust from an abstract marketing word into certificate chains, revocation models, and algorithm choices.

#### Elena Kovacs

**Role in the publication:** Governance, policy, and control-plane credibility  
**Best current source posts:**
- `compliance-profiles-bridging-regulation`
- `cedar-policies-for-identity-governance`
- governance roadmap topics

**Function:** Elena explains how Marty becomes governable inside real organizations, especially where authorization, role separation, and regulated updates matter.

#### Sofia Rahman

**Role in the publication:** Deployment realism and operator confidence  
**Best current source posts:**
- `deployment-profiles-from-design-to-production`
- `offline-verification-design-patterns`
- `holder-binding-beyond-biometrics`
- deployment guide chapter material

**Function:** Sofia makes it obvious that Marty is built for devices, kiosks, lanes, offline caches, and other operationally painful environments.

#### Victor Leclerc

**Role in the publication:** Ecosystem trust and large-scale interoperability  
**Best current source posts:**
- `trust-profiles-explained`
- `building-trust-registries-at-scale`
- roadmap topics on federation and issuer discovery

**Function:** Victor helps readers imagine identity beyond one vendor, one issuer, or one deployment. He is the bridge from local verification to trust ecosystems.

#### Nora Patel

**Role in the publication:** Privacy conscience and data minimization discipline  
**Best current source posts:**
- `presentation-policies-minimum-disclosure`
- `zero-knowledge-predicates-identity`
- `sd-jwt-selective-disclosure-deep-dive`
- roadmap phase on privacy

**Function:** Nora prevents the publication from treating privacy as optional polish. She makes it part of the core protocol logic and part of the commercial argument.

### Ensemble Logic

The cast works best when readers can enter through any specialist voice and still find their way back to the Marty model.

Common high-value patterns:

1. **A specialist opens with the real topic in front of the reader.**
2. A second voice or linked asset broadens the implication.
3. A synthesis voice reconnects the detail to the full Marty system.

That pattern prevents the publication from fragmenting into domain silos while preserving real subject-matter texture.

### Detailed Character Profiles

Use `author-character-profiles.md` as the character-bible companion to this file.

This file (`author-cast.md`) should stay focused on:

- editorial ownership
- what each persona teaches and sells implicitly
- what kinds of topics they should lead
- how the voices can hand off to one another

The detailed profile file should answer the deeper narrator questions:

- what each author notices first
- how each voice sounds on the page
- what emotional temperature they bring
- what examples, contrasts, and proof types they prefer
- where each persona needs a handoff to another voice

### Voice Guardrails

- Keep each persona's domain ownership consistent.
- Let specialists make Marty more credible, not merely more performative.
- Do not pretend the personas are real humans; keep the existing disclosure pattern that they are curated AI research personas.
- Avoid turning every persona into a product marketer. Their authority comes from explanation quality.
- If a topic could be written by anyone, choose the author whose question makes that topic most useful.

### Recommended Use by Editorial Situation

- **Category reframe / synthesis:** Daniel
- **Standards pressure / regulatory interpretation:** Aiko
- **Trust mechanics / cryptography trade-offs:** Marcus
- **Governance / policy / control plane:** Elena
- **Runtime behavior / deployment reality / device context:** Sofia
- **Federation / registries / ecosystem-scale trust:** Victor
- **Minimum disclosure / privacy boundary / holder control:** Nora

## Related

- `author-character-profiles.md` — detailed narrator profiles, voice rules, and handoff logic
- `stakeholder-role-map.md` — the reader-side cast and buying/implementation roles
- `../03-world-building/protocol-ecosystem-map.md` — the world these voices are explaining
- `../04-plot-and-structure/series-arc.md` — the underlying logic that keeps free-topic writing coherent
