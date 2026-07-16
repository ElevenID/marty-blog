import { normalizeBlogData } from '../utils/blogText.js';

// Lightweight browse-card fields for author routes.
const RAW_BLOG_POST_SUMMARIES = JSON.parse(String.raw`
[
  {
    "slug": "why-identity-needs-a-protocol",
    "title": "Why Identity Needs a Protocol",
    "summary": "Identity is still being sold as a platform problem. Cryptography proves facts, but protocol placement determines whether verified state can move across implementations instead of staying trapped inside one vendor boundary.",
    "authorId": "daniel-ortega",
    "date": "2025-01-06",
    "updatedDate": "2026-06-28",
    "category": "Business",
    "readTime": "7 min read"
  },
  {
    "slug": "trust-profiles-explained",
    "title": "Trust Profiles: The Foundation of Every Identity Decision",
    "summary": "Before you can verify a credential, you need to decide who to trust. Trust Profiles formalize that decision as configuration, not code.",
    "authorId": "victor-leclerc",
    "date": "2025-01-12",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "4 min read"
  },
  {
    "slug": "business-case-for-credential-portability",
    "title": "The Business Case for Credential Portability",
    "summary": "Vendor lock-in can turn identity verification into repeated spend. Portable credentials built on open standards help reduce duplicate checks across systems.",
    "authorId": "aiko-tanaka",
    "date": "2025-01-18",
    "updatedDate": "2026-04-17",
    "category": "Business",
    "readTime": "4 min read"
  },
  {
    "slug": "cryptographic-trust-anchors-primer",
    "title": "Cryptographic Trust Anchors: A Primer for Identity Systems",
    "summary": "X.509 chains, CSCA/DS certificates, and DID documents are cryptographic foundations that help make verifiable credentials actually verifiable.",
    "authorId": "marcus-vale",
    "date": "2025-01-23",
    "updatedDate": "2026-07-13",
    "category": "Cryptography",
    "readTime": "4 min read"
  },
  {
    "slug": "credential-templates-designing-what-gets-issued",
    "title": "Credential Templates: Designing What Gets Issued",
    "summary": "Credential Templates define credential type, compliance profile, claims, validity, issuer configuration, and disclosure posture without absorbing application intake or verifier policy.",
    "authorId": "daniel-ortega",
    "date": "2025-01-29",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "4 min read"
  },
  {
    "slug": "presentation-policies-minimum-disclosure",
    "title": "Presentation Policies and the Art of Minimum Disclosure",
    "summary": "Verifiers should not ask for everything. Presentation Policies define exactly what is needed, and nothing more.",
    "authorId": "nora-patel",
    "date": "2025-02-04",
    "updatedDate": "2026-05-04",
    "category": "Cryptography",
    "readTime": "4 min read"
  },
  {
    "slug": "eudi-wallet-readiness",
    "title": "EUDI Wallet Readiness: What the Regulation Actually Requires",
    "summary": "EU member states are expected to provide EUDI Wallets by the end of 2026. Readiness also requires relying-party registration, declared data requests, trust, policy, and operations.",
    "authorId": "aiko-tanaka",
    "date": "2025-02-10",
    "updatedDate": "2026-07-13",
    "category": "Business",
    "readTime": "4 min read"
  },
  {
    "slug": "deployment-profiles-from-design-to-production",
    "title": "Deployment Profiles: From Design to Production",
    "summary": "Trust Profiles and Presentation Policies are design-time. Deployment Profiles are how they get to devices, kiosks, and APIs in the real world.",
    "authorId": "sofia-rahman",
    "date": "2025-02-16",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "4 min read"
  },
  {
    "slug": "zero-knowledge-predicates-identity",
    "title": "Zero-Knowledge Predicates in Identity: What, Why, and How",
    "summary": "Proving you're over 21 without revealing your birthday. MIP's predicate-aware policies keep identity verification focused on the bounded question.",
    "authorId": "nora-patel",
    "date": "2025-02-21",
    "updatedDate": "2026-07-13",
    "category": "Cryptography",
    "readTime": "4 min read"
  },
  {
    "slug": "flows-orchestrating-identity-lifecycle",
    "title": "Flows: Orchestrating the Identity Lifecycle",
    "summary": "MIP Flows select governed protocol sequences for issuance, presentation, renewal, revocation, and other identity operations while keeping referenced policy and runtime objects explicit.",
    "authorId": "daniel-ortega",
    "date": "2025-02-27",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "4 min read"
  },
  {
    "slug": "compliance-profiles-bridging-regulation",
    "title": "Compliance Profiles: Bridging Standards and Regulation",
    "summary": "Compliance Profiles turn standards-oriented format, issuer-artifact, trust-compatibility, API, and verification-policy requirements into governed MIP configuration without claiming certification.",
    "authorId": "elena-kovacs",
    "date": "2025-03-05",
    "updatedDate": "2026-07-13",
    "category": "Business",
    "readTime": "4 min read"
  },
  {
    "slug": "sd-jwt-selective-disclosure-deep-dive",
    "title": "SD-JWT Selective Disclosure: A Deep Dive",
    "summary": "RFC 9901 standardizes selective disclosure for JWTs. Applying it to verifiable credentials still requires a pinned SD-JWT VC profile, holder binding, and disciplined presentation policy.",
    "authorId": "nora-patel",
    "date": "2025-03-11",
    "updatedDate": "2026-07-13",
    "category": "Cryptography",
    "readTime": "4 min read"
  },
  {
    "slug": "cedar-policies-for-identity-governance",
    "title": "Writing Cedar Policies for Identity Governance",
    "summary": "MIP uses Cedar PolicySets to keep access control, credential verification, and approval rules inspectable, validated, and governed before they reach production.",
    "authorId": "elena-kovacs",
    "date": "2025-03-17",
    "updatedDate": "2026-06-13",
    "category": "Technical",
    "readTime": "3 min read"
  },
  {
    "slug": "introducing-mip",
    "title": "Introducing the Marty Identity Protocol",
    "summary": "MIP is a draft, open-source specification for cryptographically verifiable digital identity management: five core primitives, explicit governance, and portable implementation surfaces.",
    "authorId": "daniel-ortega",
    "date": "2025-03-22",
    "updatedDate": "2026-07-10",
    "category": "Announcement",
    "readTime": "4 min read"
  },
  {
    "slug": "mip-json-schemas-walkthrough",
    "title": "MIP JSON Schemas: A Walkthrough for Implementers",
    "summary": "MIP publishes Draft 2020-12 JSON Schemas for its core primitives and supporting entities. This walkthrough shows how to validate payloads, generate typed bindings, and keep implementation contracts aligned.",
    "authorId": "daniel-ortega",
    "date": "2025-03-28",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "post-quantum-readiness-in-identity",
    "title": "Post-Quantum Readiness in Identity Protocols",
    "summary": "NIST has standardized post-quantum key establishment and digital signatures. MIP does not yet authorize those algorithms, but its explicit contracts expose the migration work.",
    "authorId": "marcus-vale",
    "date": "2025-04-03",
    "updatedDate": "2026-07-13",
    "category": "Cryptography",
    "readTime": "4 min read"
  },
  {
    "slug": "building-trust-registries-at-scale",
    "title": "Building Trust Registries at Scale",
    "summary": "Trust registries make authority discoverable. MIP separates issuer governance, verifier trust policy, and trust-anchor synchronization so each decision can be explained.",
    "authorId": "victor-leclerc",
    "date": "2025-04-09",
    "updatedDate": "2026-07-15",
    "category": "Business",
    "readTime": "4 min read"
  },
  {
    "slug": "offline-verification-design-patterns",
    "title": "Offline Verification: Design Patterns for Disconnected Environments",
    "summary": "Airports, border crossings, and field operations can't always reach the cloud. MIP's offline patterns make cache freshness, revocation posture, and failure behavior explicit when connectivity drops.",
    "authorId": "sofia-rahman",
    "date": "2025-04-15",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "4 min read"
  },
  {
    "slug": "holder-binding-beyond-biometrics",
    "title": "Holder Binding: Beyond Biometrics",
    "summary": "Holder binding proves control or legitimate possession of a credential; it does not automatically identify a human. MIP keeps presentation binding explicit without treating biometrics as the default.",
    "authorId": "sofia-rahman",
    "date": "2025-04-20",
    "updatedDate": "2026-07-15",
    "category": "Cryptography",
    "readTime": "4 min read"
  },
  {
    "slug": "mip-and-open-badges-education-credentials",
    "title": "MIP and Open Badges: Verifiable Education Credentials",
    "summary": "Open Badges 3.0 meets MIP - how the protocol brings trust governance to education and workforce credentials.",
    "authorId": "aiko-tanaka",
    "date": "2025-04-26",
    "updatedDate": "2026-07-13",
    "category": "Business",
    "readTime": "4 min read"
  },
  {
    "slug": "conformance-testing-for-implementers",
    "title": "Conformance Testing: Proving Your MIP Implementation Works",
    "summary": "MIP ships a conformance test suite with valid and invalid fixtures. Here's how to use it to validate your implementation.",
    "authorId": "daniel-ortega",
    "date": "2025-05-02",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "4 min read"
  },
  {
    "slug": "revocation-strategies-compared",
    "title": "Revocation Strategies Compared: OCSP, CRL, and Status Lists",
    "summary": "Revocation mechanisms and check timing solve different problems. MIP's Revocation Profile makes that choice explicit while implementations pin the actual W3C, IETF, or PKI profile used.",
    "authorId": "marcus-vale",
    "date": "2025-05-08",
    "updatedDate": "2026-07-13",
    "category": "Cryptography",
    "readTime": "4 min read"
  },
  {
    "slug": "five-primitives-in-one-picture",
    "title": "The Five Primitives in One Picture",
    "summary": "If digital identity still looks like an acronym graveyard, this is the picture that turns it back into a system.",
    "authorId": "daniel-ortega",
    "date": "2025-05-13",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "8 min read"
  },
  {
    "slug": "minimum-disclosure-is-a-policy-problem",
    "title": "Minimum Disclosure Is a Policy Problem",
    "summary": "Privacy fails first at the request boundary, which is why disclosure has to be governed as policy rather than left to verifier habit.",
    "authorId": "nora-patel",
    "date": "2025-05-19",
    "updatedDate": "2026-07-13",
    "category": "Cryptography",
    "readTime": "7 min read"
  },
  {
    "slug": "same-trust-model-different-runtime",
    "title": "Same Trust Model, Different Runtime",
    "summary": "The trust judgment should not have to change every time the runtime does. Marty keeps the verification model stable and uses Deployment Profiles to absorb the operational differences between cloud, self-hosted, and edge environments.",
    "authorId": "sofia-rahman",
    "date": "2025-05-25",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "6 min read"
  },
  {
    "slug": "one-protocol-many-ecosystems",
    "title": "One Protocol, Many Ecosystems",
    "summary": "The identity market does not lack standards. It lacks a stable way to operationalize them together. Marty treats ecosystem variation as profile data, not as a reason to rebuild the architecture every time the acronym changes.",
    "authorId": "aiko-tanaka",
    "date": "2025-05-31",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "7 min read"
  },
  {
    "slug": "why-marty-is-ready-for-evaluation",
    "title": "Why Marty Is Ready for Evaluation",
    "summary": "Serious teams do not evaluate identity ideas because they are elegant. They evaluate them because there is enough inspectable surface-specification, schemas, conformance, policy, and deployment choices-to decide whether the architecture deserves a real design review.",
    "authorId": "daniel-ortega",
    "date": "2025-06-06",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "7 min read"
  },
  {
    "slug": "infrastructure-economics-migration",
    "title": "The Infrastructure Economics Migration",
    "summary": "Identity economics change when verification becomes a repeated operating capability. Compare metered services and managed or self-operated infrastructure using measured workload, resilience, governance, and ownership costs.",
    "authorId": "daniel-ortega",
    "date": "2025-06-11",
    "updatedDate": "2026-07-13",
    "category": "Business",
    "readTime": "5 min read"
  },
  {
    "slug": "deployment-profiles-in-practice",
    "title": "Deployment Profiles in Practice",
    "summary": "Choose the runtime that matches your environment without rewriting the trust logic underneath it. Hosted, self-hosted, and edge deployments should differ operationally, not conceptually.",
    "authorId": "sofia-rahman",
    "date": "2025-06-17",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "offline-verification-guide",
    "title": "Offline Verification Guide",
    "summary": "Offline verification is not a magic trick. It is the discipline of deciding what trust material must already be on the device, how long it remains credible, and what the operator should do when freshness expires before the queue does.",
    "authorId": "sofia-rahman",
    "date": "2025-06-23",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "7 min read"
  },
  {
    "slug": "compliance-profiles-in-practice",
    "title": "Compliance Profiles in Practice",
    "summary": "Compliance only looks like paperwork from a distance. In production, it is the question of whether changing a rule means updating governed configuration or reopening application code in every regulated surface you own.",
    "authorId": "daniel-ortega",
    "date": "2025-06-29",
    "updatedDate": "2026-07-13",
    "category": "Business",
    "readTime": "6 min read"
  },
  {
    "slug": "deploy-airline-boarding",
    "title": "Deploying Marty for Airline Boarding",
    "summary": "At a boarding gate, identity architecture is judged in seconds: can the lane keep moving, can the verifier stay trustworthy when the network wobbles, and can operations tighten policy without rebuilding the device fleet?",
    "authorId": "daniel-ortega",
    "date": "2025-07-05",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "7 min read"
  },
  {
    "slug": "deploy-enterprise-access",
    "title": "Deploying Marty for Enterprise Access",
    "summary": "Enterprise access gets brittle when badges, network gateways, and internal applications all ask the same identity question through different systems. Marty turns that sprawl into one governed corporate credential, many bounded checks, and a policy surface security teams can actually inspect.",
    "authorId": "daniel-ortega",
    "date": "2025-07-10",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "6 min read"
  },
  {
    "slug": "selective-disclosure",
    "title": "Selective Disclosure",
    "summary": "Selective disclosure is not a magic privacy label. It is the discipline of revealing only what a decision requires, then choosing the lightest mechanism that can enforce that boundary.",
    "authorId": "daniel-ortega",
    "date": "2025-07-16",
    "updatedDate": "2026-07-13",
    "category": "Cryptography",
    "readTime": "5 min read"
  },
  {
    "slug": "deploy-age-verification",
    "title": "Deploying Marty for Age Verification",
    "summary": "At a grocery self-checkout kiosk, privacy is not an abstract principle. It is the difference between asking one yes-or-no question and quietly collecting a customer’s identity record because the lane was built for scanner convenience instead of disclosure discipline.",
    "authorId": "daniel-ortega",
    "date": "2025-07-28",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "deploy-membership-credentials",
    "title": "Deploying Marty for Membership Credentials",
    "summary": "Membership credentials test whether a non-government ecosystem can govern issuers, trust material, status, disclosure, and local verification without turning every relying party into a custom bilateral integration.",
    "authorId": "daniel-ortega",
    "date": "2025-08-03",
    "updatedDate": "2026-07-13",
    "category": "Business",
    "readTime": "5 min read"
  },
  {
    "slug": "impl-oid4vci",
    "title": "Implementing OID4VCI with Marty",
    "summary": "OID4VCI is the transport that gets a credential offer, token exchange, and credential response across the wire. Marty is the object model that decides what is being issued, how that issuance is orchestrated, and which evidence remains once the transport step is over.",
    "authorId": "daniel-ortega",
    "date": "2025-08-08",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "6 min read"
  },
  {
    "slug": "impl-oid4vp",
    "title": "Implementing OID4VP with Marty",
    "summary": "OID4VP carries the presentation request and response. Marty is the part that decides what the verifier actually needs, which issuers are trusted, and how the same exchange behaves in a browser, API, or constrained deployment without turning each runtime into a different system.",
    "authorId": "daniel-ortega",
    "date": "2025-08-14",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "what-is-digital-identity",
    "title": "What Is Digital Identity?",
    "summary": "Digital identity is not a user account sitting in someone else’s database. It is portable, machine-readable evidence about a person, organization, or device that can be checked under clear trust rules.",
    "authorId": "daniel-ortega",
    "date": "2025-08-20",
    "updatedDate": "2026-04-09",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "four-actors-of-identity-systems",
    "title": "The Four Actors of Identity Systems",
    "summary": "Identity ecosystems do not run on issuers, holders, and verifiers alone. They also depend on governance authorities that decide which issuers count, under which rules, and inside which trust framework.",
    "authorId": "daniel-ortega",
    "date": "2025-08-26",
    "updatedDate": "2026-04-09",
    "category": "Technical",
    "readTime": "6 min read"
  },
  {
    "slug": "issuers-holders-verifiers-explained",
    "title": "Issuers, Holders, Verifiers Explained",
    "summary": "Identity systems become legible when you can see the three operational roles clearly: who makes the claim, who carries it, and who decides whether it should count for a real-world action.",
    "authorId": "daniel-ortega",
    "date": "2025-09-01",
    "updatedDate": "2026-04-09",
    "category": "Technical",
    "readTime": "4 min read"
  },
  {
    "slug": "credential-lifecycle",
    "title": "The Credential Lifecycle",
    "summary": "Credentials are not static files that become trustworthy once and then stay trustworthy forever. They move through approval, issuance, presentation, verification, status change, and renewal under rules that have to hold up in production.",
    "authorId": "daniel-ortega",
    "date": "2025-09-06",
    "updatedDate": "2026-04-09",
    "category": "Technical",
    "readTime": "4 min read"
  },
  {
    "slug": "why-identity-depends-on-cryptography",
    "title": "Why Digital Identity Depends on Cryptography",
    "summary": "Without cryptography, digital credentials are just JSON. This post explains how signing, hashing, and key management make credentials verifiable.",
    "authorId": "marcus-vale",
    "date": "2025-09-12",
    "updatedDate": "2026-04-09",
    "category": "Cryptography",
    "readTime": "5 min read"
  },
  {
    "slug": "public-key-infrastructure-explained",
    "title": "Public Key Infrastructure Explained",
    "summary": "PKI is the backbone of digital trust. This post demystifies certificate authorities, key pairs, and the trust hierarchies that secure credentials.",
    "authorId": "marcus-vale",
    "date": "2025-09-18",
    "updatedDate": "2026-04-09",
    "category": "Cryptography",
    "readTime": "5 min read"
  },
  {
    "slug": "understanding-trust-anchors",
    "title": "Understanding Trust Anchors",
    "summary": "Trust anchors are the root certificates and public keys that ground all credential verification. This post explains how they work and why they matter.",
    "authorId": "marcus-vale",
    "date": "2025-09-24",
    "updatedDate": "2026-07-13",
    "category": "Cryptography",
    "readTime": "4 min read"
  },
  {
    "slug": "certificate-chains-and-validation",
    "title": "Certificate Chains and Validation",
    "summary": "Certificate chain validation is how systems verify that a credential traces back to a trusted authority. This post walks through the process step by step.",
    "authorId": "marcus-vale",
    "date": "2025-09-30",
    "updatedDate": "2026-07-13",
    "category": "Cryptography",
    "readTime": "4 min read"
  },
  {
    "slug": "how-passport-pki-works",
    "title": "How Passport PKI Works",
    "summary": "Every e-passport contains a signed chip. This post explains the PKI infrastructure - from CSCA to Document Signer certificates - that makes passport verification possible.",
    "authorId": "aiko-tanaka",
    "date": "2025-10-05",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "understanding-csca-certificates",
    "title": "Understanding CSCA Certificates",
    "summary": "CSCA certificates are the trust anchors of passport PKI. This post explains what they contain, how they're distributed, and why they're critical to travel document verification.",
    "authorId": "aiko-tanaka",
    "date": "2025-10-11",
    "updatedDate": "2026-04-09",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "what-icao-9303-specifies",
    "title": "What ICAO 9303 Actually Specifies",
    "summary": "ICAO Doc 9303 is the international standard for machine-readable travel documents. This post breaks down what it actually requires - and what it leaves to implementers.",
    "authorId": "aiko-tanaka",
    "date": "2025-10-17",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "mobile-driving-licenses-iso-18013-5",
    "title": "Mobile Driving Licenses and ISO 18013-5",
    "summary": "ISO 18013-5 defines how a driving licence can live on a phone without turning a government credential into a glorified screenshot. This post explains mDoc, proximity exchange, holder binding, and the trust model that makes mobile driving licences operationally credible.",
    "authorId": "aiko-tanaka",
    "date": "2025-10-23",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "7 min read"
  },
  {
    "slug": "how-governments-build-identity-pki",
    "title": "How Governments Build Identity PKI",
    "summary": "Government identity PKI is the infrastructure that lets passports, mobile licences, and other official credentials be trusted beyond the issuing agency. This post explains how sovereign roots, delegated signers, trust-list distribution, and refresh discipline make that possible in the real world.",
    "authorId": "aiko-tanaka",
    "date": "2025-10-29",
    "updatedDate": "2026-04-09",
    "category": "Business",
    "readTime": "7 min read"
  },
  {
    "slug": "how-credential-issuance-works",
    "title": "How Credential Issuance Works",
    "summary": "Credential issuance is the process of creating, approving, signing, and delivering a verifiable credential to a holder. This post explains the real mechanics of issuance without mistaking OID4VCI transport for the whole architecture.",
    "authorId": "daniel-ortega",
    "date": "2025-11-03",
    "updatedDate": "2026-04-09",
    "category": "Technical",
    "readTime": "6 min read"
  },
  {
    "slug": "verifiable-credentials-explained",
    "title": "Verifiable Credentials Explained",
    "summary": "Verifiable credentials are cryptographically signed documents that let a holder prove claims about themselves without asking the issuer to vouch for each use in real time.",
    "authorId": "daniel-ortega",
    "date": "2025-11-09",
    "updatedDate": "2026-04-09",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "presentation-protocols",
    "title": "Presentation Protocols",
    "summary": "A presentation protocol is how a verifier asks for bounded proof and how a holder’s wallet returns it. This post explains OID4VP, presentation definitions, and the mechanics that keep presentation safe.",
    "authorId": "daniel-ortega",
    "date": "2025-11-15",
    "updatedDate": "2026-04-09",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "interoperability-between-credential-formats",
    "title": "Interoperability Between Credential Formats",
    "summary": "VC-JWT, SD-JWT, mDoc, JSON-LD - these formats do not magically collapse into one universal credential. This post explains where interoperability is real, where it is bundle-based, and how Marty keeps one model across many format families.",
    "authorId": "daniel-ortega",
    "date": "2025-11-21",
    "updatedDate": "2026-04-09",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "what-is-a-digital-identity-wallet",
    "title": "What Is a Digital Identity Wallet",
    "summary": "A digital identity wallet is not just a place to store cards. It is the holder-side control point for receiving, holding, and presenting credentials under local control.",
    "authorId": "sofia-rahman",
    "date": "2026-04-09",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "device-binding-and-credential-security",
    "title": "Device Binding and Credential Security",
    "summary": "Device binding is the security choice that ties a credential to the holder’s device context instead of treating it like a copyable file.",
    "authorId": "sofia-rahman",
    "date": "2026-04-09",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "selective-disclosure-in-wallets",
    "title": "Selective Disclosure in Wallets",
    "summary": "Selective disclosure becomes real in a wallet when a verifier request is translated into a holder-readable choice about which claims to share.",
    "authorId": "sofia-rahman",
    "date": "2026-04-09",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "wallet-ux-design-for-identity",
    "title": "Wallet UX Design for Identity",
    "summary": "Identity-wallet UX succeeds when it makes requester intent, privacy boundaries, and recovery paths understandable before the holder is asked to share anything.",
    "authorId": "sofia-rahman",
    "date": "2026-04-09",
    "updatedDate": "2026-07-13",
    "category": "Business",
    "readTime": "5 min read"
  },
  {
    "slug": "why-identity-systems-must-protect-privacy",
    "title": "Why Identity Systems Must Protect Privacy",
    "summary": "Identity verification is inherently privacy-invasive. This post explains why privacy must be a design principle - not a feature - in identity systems.",
    "authorId": "nora-patel",
    "date": "2025-12-20",
    "updatedDate": "2026-07-13",
    "category": "Business",
    "readTime": "5 min read"
  },
  {
    "slug": "data-minimization-in-identity",
    "title": "Data Minimization in Identity",
    "summary": "Verifiers should only learn what they need. This post explains data minimization - the principle that drives selective disclosure, predicates, and privacy-preserving credentials.",
    "authorId": "nora-patel",
    "date": "2025-12-25",
    "updatedDate": "2026-04-09",
    "category": "Technical",
    "readTime": "3 min read"
  },
  {
    "slug": "selective-disclosure-explained",
    "title": "Selective Disclosure Explained",
    "summary": "Selective disclosure lets holders reveal specific claims without exposing the full credential. This post explains the cryptographic mechanisms that make it work.",
    "authorId": "nora-patel",
    "date": "2025-12-31",
    "updatedDate": "2026-04-10",
    "category": "Cryptography",
    "readTime": "9 min read"
  },
  {
    "slug": "privacy-vs-compliance",
    "title": "Privacy vs Compliance",
    "summary": "Regulations require both privacy protection and data availability. This post explores the tension between privacy and compliance - and how protocol design can resolve it.",
    "authorId": "nora-patel",
    "date": "2026-01-06",
    "updatedDate": "2026-07-13",
    "category": "Business",
    "readTime": "5 min read"
  },
  {
    "slug": "identity-governance-models",
    "title": "Identity Governance Models",
    "summary": "Identity governance is the question of who decides which issuers, rules, and operating boundaries count once credentials have to work beyond one team or one application.",
    "authorId": "elena-kovacs",
    "date": "2026-04-03",
    "updatedDate": "2026-07-13",
    "category": "Business",
    "readTime": "6 min read"
  },
  {
    "slug": "rbac-vs-abac",
    "title": "RBAC vs ABAC",
    "summary": "Role-based access control makes authorization legible fast. Attribute-based access control makes it nuanced. Serious identity systems usually need both, but they should know why before the policy surface gets messy.",
    "authorId": "elena-kovacs",
    "date": "2026-04-04",
    "category": "Technical",
    "readTime": "7 min read"
  },
  {
    "slug": "policy-engines-for-identity-systems",
    "title": "Policy Engines for Identity Systems",
    "summary": "A policy engine exists so identity decisions can be evaluated as governed rules instead of rediscovered inside handlers, gateways, and approval code every time the system grows another edge case.",
    "authorId": "elena-kovacs",
    "date": "2026-04-05",
    "category": "Technical",
    "readTime": "6 min read"
  },
  {
    "slug": "governing-credential-ecosystems",
    "title": "Governing Credential Ecosystems",
    "summary": "Credential ecosystems become trustworthy only when the network agrees who belongs, what obligations apply, and how those decisions change over time. Trust infrastructure comes later. Governance comes first.",
    "authorId": "elena-kovacs",
    "date": "2026-04-06",
    "updatedDate": "2026-07-13",
    "category": "Business",
    "readTime": "6 min read"
  },
  {
    "slug": "trust-registries-explained",
    "title": "Trust Registries Explained",
    "summary": "Trust registries turn ecosystem governance into loadable trust material. This post explains why credential networks need them, what they actually distribute, and how verifiers use them without turning every decision into a phone-home lookup.",
    "authorId": "victor-leclerc",
    "date": "2026-02-04",
    "updatedDate": "2026-04-09",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "federation-in-identity-systems",
    "title": "Federation in Identity Systems",
    "summary": "Federation is what lets separate organizations rely on shared identity rules without centralizing every verification decision. This post explains how shared trust, shared policy, and local verification make that possible.",
    "authorId": "victor-leclerc",
    "date": "2026-02-10",
    "updatedDate": "2026-04-09",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "verifier-infrastructure",
    "title": "Verifier Infrastructure",
    "summary": "A serious verifier is not just a signature checker. It is a runtime stack of trust synchronization, status caching, policy evaluation, audit, and failure handling. This post explains what that stack actually looks like.",
    "authorId": "victor-leclerc",
    "date": "2026-02-16",
    "updatedDate": "2026-04-09",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "discovering-trusted-issuers",
    "title": "Discovering Trusted Issuers",
    "summary": "Before a verifier can evaluate a credential, it has to know which issuers count. This post explains how trusted-issuer discovery works across trust lists, registries, pinned roots, and DID-based ecosystems.",
    "authorId": "victor-leclerc",
    "date": "2026-02-21",
    "updatedDate": "2026-04-09",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "why-the-marty-protocol-exists",
    "title": "Why the Marty Protocol Exists",
    "summary": "Every identity system solves the same problems differently. MIP defines the minimum shared primitives to make credential systems interoperable. This post explains why.",
    "authorId": "daniel-ortega",
    "date": "2026-02-27",
    "updatedDate": "2026-04-10",
    "category": "Announcement",
    "readTime": "8 min read"
  },
  {
    "slug": "the-marty-identity-model",
    "title": "The Marty Identity Model",
    "summary": "Marty turns digital identity from a pile of standards, integrations, and policy exceptions into a governable system with stable objects: who is trusted, what gets issued, what must be shown, where verification runs, and how the journey moves.",
    "authorId": "daniel-ortega",
    "date": "2026-03-05",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "trust-profile-evaluation-and-failure-handling",
    "title": "Trust Profile Evaluation and Failure Handling",
    "summary": "Trust Profiles are MIP's first primitive. This post walks through how trust sources, freshness rules, evaluation order, and fail-closed behavior turn a Trust Profile into a governed runtime decision boundary.",
    "authorId": "daniel-ortega",
    "date": "2026-03-11",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "7 min read"
  },
  {
    "slug": "credential-templates-explained-deep",
    "title": "Credential Templates Explained",
    "summary": "Credential Templates define what gets issued. This post provides a complete technical walkthrough of how schema, compliance, cryptographic artifacts, validity, privacy posture, and lifecycle state combine into one reusable issuance contract.",
    "authorId": "daniel-ortega",
    "date": "2026-03-17",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "6 min read"
  },
  {
    "slug": "presentation-policies-explained-deep",
    "title": "Presentation Policies Explained",
    "summary": "Presentation Policies define what verifiers require. This post provides a complete technical walkthrough of how required claims, predicates, fallback behavior, freshness, and holder binding combine into one machine-readable verifier contract.",
    "authorId": "daniel-ortega",
    "date": "2026-03-22",
    "updatedDate": "2026-04-09",
    "category": "Technical",
    "readTime": "6 min read"
  },
  {
    "slug": "deployment-profiles-explained-deep",
    "title": "Deployment Profiles Explained",
    "summary": "Deployment Profiles package trust, templates, and policies for runtime execution. This post provides a complete technical walkthrough of how network mode, lanes, devices, cache windows, and update behavior turn abstract identity rules into real endpoints.",
    "authorId": "daniel-ortega",
    "date": "2026-03-28",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "6 min read"
  },
  {
    "slug": "how-everything-works-together",
    "title": "How Everything Works Together",
    "summary": "Trust Profiles, Credential Templates, Presentation Policies, Deployment Profiles, and Flows - this post shows how all five MIP primitives compose into end-to-end identity systems.",
    "authorId": "daniel-ortega",
    "date": "2026-04-03",
    "updatedDate": "2026-04-10",
    "category": "Technical",
    "readTime": "10 min read"
  },
  {
    "slug": "mobile-wallet-architectures",
    "title": "Mobile Wallet Architectures for Verifiable Credentials",
    "summary": "How mobile credential wallets work - from platform secure elements to cloud backup, and what matters for interoperability.",
    "authorId": "aiko-tanaka",
    "date": "2026-04-07",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "5 min read"
  },
  {
    "slug": "secure-enclave-credential-storage",
    "title": "Secure Enclave Storage for Credentials",
    "summary": "Understanding how hardware-backed key storage protects credential holder binding - secure enclaves, StrongBox, and attestation.",
    "authorId": "marcus-vale",
    "date": "2026-04-08",
    "updatedDate": "2026-07-13",
    "category": "Cryptography",
    "readTime": "4 min read"
  },
  {
    "slug": "credential-portability-across-wallets",
    "title": "Credential Portability Across Wallets",
    "summary": "Can a credential issued to one wallet be moved to another? The technical and policy boundaries of credential portability.",
    "authorId": "elena-kovacs",
    "date": "2026-04-09",
    "category": "Technical",
    "readTime": "6 min read"
  },
  {
    "slug": "eudi-wallet-model-explained",
    "title": "The EUDI Wallet Model Explained",
    "summary": "How the EU Digital Identity Wallet architecture works - PID issuance, QEAA, trust lists, and what implementers need to know.",
    "authorId": "aiko-tanaka",
    "date": "2026-04-10",
    "updatedDate": "2026-07-13",
    "category": "Technical",
    "readTime": "5 min read"
  }
]
`);

const TODAY_ISO = new Date().toISOString().split('T')[0];

const stripFutureUpdatedDate = (post) => {
  if (!post.updatedDate || post.updatedDate <= TODAY_ISO) {
    return post;
  }

  const { updatedDate, ...rest } = post;
  return rest;
};

export const BLOG_POST_SUMMARIES = RAW_BLOG_POST_SUMMARIES
  .map(stripFutureUpdatedDate)
  .map((post) => normalizeBlogData(post));
