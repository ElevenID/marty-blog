# Protocol Ecosystem Map

Phase: 03 - World Building  
Purpose: Describe the technical, regulatory, and commercial world the Marty publication inhabits so authors can choose topics freely without losing conceptual coherence.  
Time to Complete: 25–40 minutes

<!-- guide:protocol_ecosystem_map -->

## Why This Matters

Marty is not teaching a fictional world; it is teaching a complicated real one.
The reader — and the author — need a stable map of that world:

- what entities exist
- which standards matter
- where trust comes from
- how protocol and policy separate
- which abstractions Marty introduces to make the world manageable

Without that map, later posts feel like acronym drift.
With it, authors can start from almost any topic and still leave the reader more oriented than before.

## Governing Law of the World

The most important sentence in the current Marty corpus is:

> **Digital identity management can be represented by Trust Profiles + Credential Templates + Presentation Policies + Deployment Profiles, orchestrated by Flows.**

Everything else in the ecosystem map either feeds into that model or is explained by it.

## Topic Anchoring Rule

Any strong topical article should make clear:

- which Marty primitive or supporting abstraction is active
- which standards or trust systems are involved
- which recurring tension is being clarified
- what use case, stakeholder, or deployment context makes the topic matter

That is how topical freedom stays coherent.

## Current Working Draft

### The Five Core Primitives

| Primitive | Question it answers | Current evidence in the blog/protocol |
| --- | --- | --- |
| **Trust Profile** | Who is trusted and how cryptographic validation works | `trust-profiles-explained`, guide chapters 2–3, MIP README/spec |
| **Credential Template** | What gets issued, with which claims and validity rules | `credential-templates-designing-what-gets-issued`, guide chapter 2 |
| **Presentation Policy** | What must be shown and what minimum disclosure rules apply | `presentation-policies-minimum-disclosure`, privacy/selective disclosure material |
| **Deployment Profile** | Where verification runs and how operational constraints are configured | `deployment-profiles-from-design-to-production`, deployment guide content, pricing docs |
| **Flow** | How identity moves across application, approval, issuance, presentation, and verification | `flows-orchestrating-identity-lifecycle`, guide chapter 4, MIP README |

### Supporting Abstractions Already Present in the Canon

| Abstraction | Why it matters |
| --- | --- |
| **Compliance Profile** | Maps a standard or regulation to Marty primitives so teams configure once instead of integrating everything by hand |
| **Application Template** | Shapes the user-facing application/approval side of issuance flows |
| **Revocation Profile** | Lets revocation choices vary without collapsing the rest of the model |
| **Wallet Profile** | Encodes wallet compatibility logic across format/protocol/compliance combinations |
| **Policy Set (Cedar)** | Expresses authorization and governance as auditable, formally verifiable policy |
| **Device Registration / Notification Targets** | Support operational delivery without changing the core protocol model |

### Standards Landscape

| Standard / Framework | What it contributes to the world | How Marty frames it |
| --- | --- | --- |
| **ICAO Doc 9303 / DTC** | Travel document trust, passport PKI, CSCA/DS chains | A compliance profile and trust model that can be expressed through Trust Profiles, templates, policies, and offline deployments |
| **ISO/IEC 18013-5 (mDoc / mDL)** | Government mobile identity format with device/proximity behavior | A credential and presentation format Marty can adopt without changing the protocol model |
| **OID4VCI** | Credential issuance protocol | One of the standard transport and issuance surfaces for Marty flows |
| **OID4VP** | Credential presentation protocol | One of the standard presentation surfaces for Marty flows |
| **W3C VC Data Model** | General credential data model | One source format Marty supports inside the broader model |
| **SD-JWT-VC** | Selective disclosure credential format | One practical privacy mechanism plugged into templates and policies |
| **DID Core** | Identifier and key resolution model | One trust-source style that can coexist with X.509-based trust |
| **EUDI Wallet / ARF** | Regulatory and wallet architecture pressure in Europe | A major driver for protocol-first compliance and configuration-based change |
| **AAMVA mDL guidance** | North American mobile licence ecosystem | Another standards cluster Marty absorbs via compliance profiles |
| **Open Badges 3.0** | Education/workforce credential format | A non-government example proving Marty's model applies beyond travel and ID |

### Trust Landscape

The current Marty content already presents three major trust worlds:

1. **X.509 / PKI chains** — passports, government credentials, traditional certificate hierarchies
2. **DID-based trust** — decentralized identifier resolution and key discovery
3. **Trust lists / registries** — EUDI lists, ICAO PKD, enterprise issuer registries, federation infrastructure

Marty's claim is not that one of these wins universally.
Marty's claim is that a stable protocol model can absorb all three.

### Core Tensions in This World

| Tension | Why it matters |
| --- | --- |
| **Platform vs protocol** | Determines whether credentials stay trapped or become portable |
| **Privacy vs overcollection** | Determines whether verification leaks more data than the decision requires |
| **Online freshness vs offline resilience** | Determines whether deployments can survive real-world conditions |
| **Standard fidelity vs implementation sanity** | Determines whether teams can actually ship multi-standard systems |
| **Governance clarity vs application sprawl** | Determines whether changes become policy updates or engineering fire drills |
| **Per-check economics vs infrastructure economics** | Determines whether adoption gets cheaper or more expensive as usage grows |

### Economic Rules of the World

The product-catalog materials make an important world-building move:

- Marty/ElevenID is priced by **deployment, verifier/kiosk runtime, and governance access**
- not by API call volume
- not by number of credential holders
- not by wallet installs

That commercial rule reinforces the protocol thesis:

> Reusable credentials should behave like infrastructure, not like a metered lookup service.

### Terminology Discipline

The publication should keep these terms stable:

- **Trust Profile** — not "trust config" in one place and "verification settings" in another
- **Credential Template** — not generic "credential schema" when the Marty entity is intended
- **Presentation Policy** — not "verification rule set" unless translating carefully for newcomers
- **Deployment Profile** — not "environment config" when the protocol object is the point
- **Flow** — not just "journey" or "workflow" if the MIP primitive matters

### Open Questions / World Gaps

The current canon is already strong on:

- protocol abstractions
- trust and privacy
- standards alignment
- deployment logic

It is currently lighter on:

- end-to-end customer case studies
- procurement stories from real adopters
- explicit migration stories from incumbent IDV platforms

Those are content gaps, not model gaps.

## Related

- `use-cases-and-deployment-contexts.md` — the environments where this world becomes concrete
- `../02-characters/author-cast.md` — the voices who explain this world
- `../04-plot-and-structure/module-map.md` — how this world gets organized into flexible topic clusters
