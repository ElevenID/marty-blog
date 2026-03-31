# Stakeholder Role Map

Phase: 02 - Characters  
Purpose: Define the reader-side cast — the real roles inside organizations that the Marty publication must educate, reassure, and convert.  
Time to Complete: 20–30 minutes

<!-- guide:stakeholder_role_map -->

## Why This Matters

The Marty publication is not speaking to a generic "developer audience."
It is speaking into a room with multiple stakeholders, each with different anxieties and different proof thresholds.

If we do not understand that cast, the blog will either sound too commercial for technical readers or too technical for buyers.

## Current Working Draft

### Core Stakeholder Roles

| Role | What they care about | What makes them skeptical | Which Marty content helps most | What conversion looks like |
| --- | --- | --- | --- | --- |
| **Protocol Sponsor** | Strategic differentiation, long-term infrastructure direction, avoiding lock-in | "Is this just another vendor abstraction?" | `why-identity-needs-a-protocol`, `introducing-mip`, portability and pricing content | They begin describing identity as infrastructure rather than as a vendor feature set |
| **Platform Architect** | Reusable model, standards coverage, deployment flexibility, clean abstractions | "Will I still need custom code for everything?" | guide chapters, primitive deep dives, schema walkthroughs, implementation posts | They can map a use case to MIP primitives |
| **Security / Compliance Lead** | Trust roots, revocation, governance, privacy, auditability | "Can this satisfy regulated requirements and change safely over time?" | trust anchors, compliance profiles, Cedar governance, privacy posts | They see Marty as governable data rather than risky application logic |
| **Operator / Deployment Owner** | Online vs offline behavior, edge constraints, lanes, failure modes, support model | "Does this work outside a clean cloud demo?" | deployment profiles, offline verification, airport and kiosk examples, pricing packages | They can compare self-hosted, hosted, and edge deployment models |
| **Application Implementer** | OID4VCI/OID4VP, schemas, flows, credential formats, interoperability | "How much real implementation help is here?" | guide chapters 4–6, schema walkthrough, conformance suite, implementation docs | They click into schemas, conformance, and protocol docs |
| **Commercial Buyer / Executive** | Cost model, portability, deployment packaging, risk reduction | "How is this commercially better than existing IDV?" | business case posts, pricing by deployment, portability framing | They evaluate Marty using infrastructure economics rather than per-check pricing |

### Multi-Entry Reality

Different stakeholders enter through different topics.

- Sponsors often enter through lock-in, economics, and timing.
- Architects enter through primitives, standards, and clean abstractions.
- Compliance leads enter through trust, auditability, and policy.
- Operators enter through offline, edge, and failure behavior.
- Implementers enter through schemas, flows, and compatibility clues.
- Commercial buyers enter through packaging and cost model.

That means the publication should not assume everyone begins with the same post or the same vocabulary.

### Primary Protagonist

**Primary protagonist for most of the publication:** The buyer-builder — someone who must both understand the architecture and defend the decision inside an organization.

This is why the publication still has to do two jobs at once:

- teach the model rigorously enough for technical credibility
- frame the model commercially enough to justify evaluation and adoption

### Secondary Internal Characters

**Ally stakeholders:**
- Technical implementers who want clean artifacts
- Governance leads who want explicit rules and auditability
- Operations owners who need offline and real-world deployment patterns

**Institutional skeptics:**
- Teams already committed to a metered IDV model
- Stakeholders who equate standards support with endless integration cost
- Buyers who hear "open protocol" and assume "immature" or "academic"

### What Each Role Needs Answered

#### Protocol Sponsor
- Why is a protocol layer strategically better than another platform integration?
- How does Marty turn repeated verification cost into reusable infrastructure?
- Why now?

#### Platform Architect
- What are the five primitives?
- How do standards map to those primitives?
- What becomes configuration instead of code?

#### Security / Compliance Lead
- How are trust anchors modeled?
- How do revocation and freshness work?
- How are governance and authorization expressed and audited?

#### Operator / Deployment Owner
- What changes between online, offline, hosted, self-hosted, and edge?
- How does cache freshness and failure behavior work?
- What is the packaging and licensing model?

#### Application Implementer
- Where are the schemas, flows, and compatibility clues?
- How do OID4VCI, OID4VP, mDoc, SD-JWT, and trust profiles fit together?
- What should I prototype first?

#### Commercial Buyer / Executive
- What are the units of purchase?
- Why is Marty priced by deployment and governance rather than by checks?
- Why does that become more favorable as adoption scales?

### Messaging Rules by Role

- **Sponsors:** start with lock-in, portability, and infrastructure economics
- **Architects:** start with the five primitives and standards alignment
- **Compliance/security:** start with trust, governance, privacy, and auditability
- **Operators:** start with deployment profiles, offline patterns, and packaging
- **Implementers:** start with schemas, guide chapters, and concrete flows
- **Commercial buyers:** start with pricing logic and reusable credential economics

### CAP Narrative Profile Role Registry

**Primary protagonist:** `protagonist_reader` = buyer-builder  
**Allies:** `ally_peer` = architect, implementer, compliance reviewer, operator  
**Skeptic:** `skeptic` = budget owner, incumbent platform advocate, standards-fatigued stakeholder  
**Mentor voice:** `mentor_voice` = Marty editorial bench and protocol artifacts  
**Antagonist system:** `antagonist_system` = fragmentation, lock-in, per-check economics, regulatory pressure, and jargon fog

### Signals of Reader Progress

A stakeholder is moving in the right direction when they begin asking questions like:

- "Which Trust Profile would we need here?"
- "Could this be an edge deployment instead of a hosted verifier?"
- "How would this map to EUDI or AAMVA?"
- "If pricing is per deployment, what would our environment count look like?"
- "Which parts of this are protocol and which parts are policy?"

Those are Marty-shaped questions. That is the goal.

## Related

- `author-cast.md` — the editorial cast answering these roles
- `../00-start-here/audience-and-transformation.md` — the macro transformation model
- `../03-world-building/use-cases-and-deployment-contexts.md` — the environments these stakeholders operate in
