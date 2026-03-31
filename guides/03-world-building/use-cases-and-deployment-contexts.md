# Use Cases and Deployment Contexts

Phase: 03 - World Building  
Purpose: Record the real environments, buyer pain points, and deployment contexts already present in the Marty publication so authors have grounded topic pools to write from.  
Time to Complete: 25–40 minutes

<!-- guide:use_cases_and_deployment_contexts -->

## Why This Matters

A protocol argument only becomes persuasive when readers can place it inside recognizable environments.
The current Marty corpus already contains several strong settings where the protocol becomes concrete.

This file captures those settings so later phases can draft against them without forcing them into one strict order.

## Current Working Draft

### Canonical Use Cases Already Present in the Blog and Protocol Materials

| Use Case | Current source material | Relevant Marty primitives | What pain it makes vivid | What it sells |
| --- | --- | --- | --- | --- |
| **Pre-border / pre-boarding screening** | MIP README, airline deployment guide article, ICAO and offline material | Trust Profile, Presentation Policy, Deployment Profile, Flow | Multi-step identity checks, offline gates, travel document trust, throughput pressure | Marty as high-assurance, offline-capable infrastructure |
| **mDL issuance and verification** | mDoc/standards material, AAMVA references, guide chapters, roadmap | Credential Template, Trust Profile, Flow, Wallet/Compliance logic | Supporting government mobile credentials across standards and devices | Marty as a multi-standard identity substrate |
| **Age verification with minimum disclosure** | privacy posts, ZK/SD-JWT posts, retail deployment article | Presentation Policy, Credential Template, Trust Profile | Overcollection of PII for simple yes/no checks | Marty as privacy-by-design infrastructure |
| **Enterprise employee access** | enterprise access deployment article, flows, deployment profiles, Cedar governance | Credential Template, Flow, Presentation Policy, Deployment Profile | Fragmented identity across badge systems, VPN, and app access | Marty as reusable enterprise credential infrastructure |
| **EUDI wallet readiness** | `eudi-wallet-readiness`, compliance profile content, trust-list material | Compliance Profile, Trust Profile, Presentation Policy, Deployment Profile | Regulatory deadlines and standards pressure | Marty as a compliance-absorption layer |
| **Education / workforce credentials** | Open Badges content | Trust Profile, Credential Template, Compliance Profile | Format without trust governance | Marty as a trust framework beyond government ID |

### How To Use These Contexts

These use cases are not mandatory chapter slots.
They are reusable entry points.

An author can choose whichever context best sharpens the topic at hand:

- use travel when trust, offline, and throughput matter
- use retail when minimum disclosure and privacy clarity matter
- use enterprise when governance and reuse matter
- use EUDI when standards pressure and timing matter
- use education when format vs trust-governance distinction matters

### Deployment Packages in the Current Commercial Story

| Deployment Type | Current definition | Reader takeaway |
| --- | --- | --- |
| **Self-Hosted Deployment** | Downloadable packages, policy sync, PKD/IACA trust sync, annual per-deployment pricing | Best fit for sovereignty-minded and regulated teams; reinforces the infrastructure thesis |
| **Hosted Deployment** | Managed environment, monitoring, same capabilities, premium pricing | Convenience option for teams without infrastructure capacity |
| **Edge / Kiosk Deployment** | Offline-first runtime, local trust cache, TPM-bound licensing, QR/NFC/BLE | Marty is built for disconnected and physical-world verification, not just cloud demos |

### Control Plane Tiers in the Current Product Story

| Tier | What it signals in the publication |
| --- | --- |
| **Starter** | Proof that Marty can support a real first production flow without an enterprise-scale commitment |
| **Professional** | Marty as cross-product / multi-environment infrastructure |
| **Enterprise** | Marty as governed trust infrastructure at national, regulated, or large-scale organizational scope |

### Operational Environments the Publication Should Revisit Often

#### Airports, borders, gates, and high-throughput checkpoints
These environments make offline verification, trust-anchor freshness, revocation strategy, and latency trade-offs impossible to ignore.

#### Regulated web and API environments
These settings make EUDI, mDL, OID4VP, and minimum disclosure feel urgent rather than theoretical.

#### Enterprise estates
These environments make policy, governance, role separation, and reusable credentials feel valuable beyond public-sector identity.

#### Retail and age-gated flows
These settings make privacy benefits immediately legible to non-specialists.

#### Education and workforce ecosystems
These settings prove Marty is not only for passports and government credentials.

### What Each Context Teaches Best

| Context | Best lesson |
| --- | --- |
| Airline / border | Why deployments and offline profiles matter |
| Retail age gate | Why minimum disclosure matters |
| Enterprise access | Why one credential should work across many verification moments |
| EUDI readiness | Why compliance should be configuration, not code |
| Education / Open Badges | Why trust governance matters even when the credential format already exists |

### Commercial Alignment Notes

The existing pricing documents reinforce the publication's sales logic in a useful way:

- **Deployments** are the unit of purchase
- **Verifier / kiosk licenses** are the unit of runtime reality
- **Control plane access** is the unit of governance and automation
- **Wallets are free** because adoption is the growth lever, not the monetization target

That means the publication can legitimately teach and sell at the same time without collapsing into a hard pitch. The educational claim and the pricing claim point in the same direction.

### Deployment-Centered Questions the Publication Should Keep Answering

- Why would a team choose self-hosted over hosted?
- When does edge/kiosk deployment become mandatory?
- What changes between online and offline verification?
- How do pricing and packaging reinforce the protocol thesis?
- What proof does a regulated buyer need before taking Marty seriously?

### Infrastructure vs. Platform Migration Narratives (Case Studies)

To convince technical buyers that moving from per-check APIs to protocol infrastructure is commercially smart, the publication relies on these core migration case studies:

**Case Study 1: The High-Throughput Physical Gate (Airport / Stadium)**
- **Current Pain:** An airport or stadium pays an IDV vendor a tax per scan. Costs scale linearly with foot traffic. Furthermore, when the cloud goes down, the physical gates stop opening.
- **The Protocol Migration:** They migrate to Marty. They buy `Edge` deployment licenses for the gates. They own the infrastructure.
- **Economic & Operational Win:** Once the deployment is paid for, local verification events are free. Offline-first resilience is built-in; they are no longer dependent on continuous cloud connectivity to process passengers.

**Case Study 2: The Multi-Vendor Enterprise Estate**
- **Current Pain:** A large enterprise uses disconnected identity vendors for different surfaces (e.g., VPN access, building turnstiles, internal SaaS), each metering active users or verification checks separately.
- **The Protocol Migration:** They deploy Marty as their core credential protocol. They set up specific Presentation Policies and a self-hosted or managed Deployment Profile.
- **Economic & Operational Win:** They pay for the central control plane and deployments. The verification "checks" — whether a badging turnstile or a web gateway — become internal protocol events, not financially metered API calls. The infrastructure model caps their costs while expanding their capability.

### Known Source-Material Limits

The current corpus is strong on use-case framing and deployment logic, but still light on:

- named customer stories
- migration stories from incumbent vendors
- explicit ROI case studies beyond the repeated re-verification tax framing

Those are excellent future additions, but we already have enough material to build a strong Phase 03 world.

## Related

- `protocol-ecosystem-map.md` — the rules and abstractions governing these contexts
- `../04-plot-and-structure/series-arc.md` — the underlying logic that lets these contexts be reused across many topics
- `../05-drafting/priority-draft-briefs.md` — where these contexts become actual draft packets
