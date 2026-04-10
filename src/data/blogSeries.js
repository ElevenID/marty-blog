/**
 * Blog Series
 *
 * Named series group related posts into ordered reading sequences.
 * Each series has an id, title, description, and an ordered array of post slugs.
 */

export const BLOG_SERIES = [
  {
    id: 'foundations',
    title: 'Foundations',
    description: 'Start here if you are new to digital identity.',
    slugs: [
      'what-is-digital-identity',
      'four-actors-of-identity-systems',
      'issuers-holders-verifiers-explained',
      'credential-lifecycle',
    ],
  },
  {
    id: 'five-primitives',
    title: 'The Five Primitives',
    description: 'The core objects that make MIP work.',
    slugs: [
      'trust-profiles-explained',
      'credential-templates-designing-what-gets-issued',
      'presentation-policies-minimum-disclosure',
      'deployment-profiles-from-design-to-production',
      'flows-orchestrating-identity-lifecycle',
    ],
  },
  {
    id: 'pki-for-identity',
    title: 'PKI for Identity',
    description: 'Certificate chains, trust anchors, and passport PKI.',
    slugs: [
      'public-key-infrastructure-explained',
      'understanding-trust-anchors',
      'cryptographic-trust-anchors-primer',
      'certificate-chains-and-validation',
      'how-passport-pki-works',
      'understanding-csca-certificates',
    ],
  },
  {
    id: 'privacy-and-disclosure',
    title: 'Privacy & Disclosure',
    description: 'Selective disclosure, data minimization, and zero-knowledge proofs.',
    slugs: [
      'minimum-disclosure-is-a-policy-problem',
      'selective-disclosure',
      'data-minimization-in-identity',
      'sd-jwt-selective-disclosure-deep-dive',
      'zero-knowledge-predicates-identity',
    ],
  },
  {
    id: 'governance',
    title: 'Governance & Policy',
    description: 'How organizations define trust rules, compliance, and authorization.',
    slugs: [
      'compliance-profiles-bridging-regulation',
      'compliance-profiles-in-practice',
      'cedar-policies-for-identity-governance',
      'building-trust-registries-at-scale',
    ],
  },
  {
    id: 'deployments',
    title: 'Deployment Patterns',
    description: 'Real-world deployment guides — from airline boarding to enterprise access.',
    slugs: [
      'deployment-profiles-in-practice',
      'offline-verification-guide',
      'deploy-airline-boarding',
      'deploy-enterprise-access',
      'deploy-age-verification',
      'deploy-membership-credentials',
    ],
  },
  {
    id: 'implementations',
    title: 'Implementation Guides',
    description: 'OID4VCI, OID4VP, and transport-level integration.',
    slugs: [
      'impl-oid4vci',
      'impl-oid4vp',
      'mip-json-schemas-walkthrough',
      'conformance-testing-for-implementers',
    ],
  },
  {
    id: 'wallets',
    title: 'Wallets & Credential Storage',
    description: 'Mobile wallet architectures, secure enclaves, and credential portability.',
    slugs: [
      'mobile-wallet-architectures',
      'secure-enclave-credential-storage',
      'credential-portability-across-wallets',
      'eudi-wallet-model-explained',
    ],
  },
];

/**
 * Derived: series lookup by post slug → { seriesId, seriesTitle, order, total, slugs }
 */
export const SERIES_BY_POST_SLUG = (() => {
  const map = {};
  for (const series of BLOG_SERIES) {
    series.slugs.forEach((slug, idx) => {
      map[slug] = {
        seriesId: series.id,
        seriesTitle: series.title,
        order: idx + 1,
        total: series.slugs.length,
        slugs: series.slugs,
      };
    });
  }
  return map;
})();

/**
 * Derived: series lookup by id
 */
export const SERIES_BY_ID = Object.fromEntries(
  BLOG_SERIES.map((s) => [s.id, s]),
);

/**
 * Section assignments — maps post slugs to structured zones on the blog page.
 *
 * Sections: featured, start-learning, core-protocol, implementation,
 *           cryptography, business (default: unassigned → archive/recent)
 */
export const SECTION_BY_SLUG = {
  // Featured (manually pinned flagship posts)
  'why-identity-needs-a-protocol': 'featured',
  'five-primitives-in-one-picture': 'featured',
  'introducing-mip': 'featured',

  // Start Learning (foundations entry path)
  'what-is-digital-identity': 'start-learning',
  'verifiable-credentials-explained': 'start-learning',
  'four-actors-of-identity-systems': 'start-learning',
  'issuers-holders-verifiers-explained': 'start-learning',
  'credential-lifecycle': 'start-learning',
  'why-identity-depends-on-cryptography': 'start-learning',

  // Core Protocol (five primitives + flows)
  'trust-profiles-explained': 'core-protocol',
  'credential-templates-designing-what-gets-issued': 'core-protocol',
  'presentation-policies-minimum-disclosure': 'core-protocol',
  'deployment-profiles-from-design-to-production': 'core-protocol',
  'flows-orchestrating-identity-lifecycle': 'core-protocol',
  'the-marty-identity-model': 'core-protocol',

  // Implementation Guides
  'impl-oid4vci': 'implementation',
  'impl-oid4vp': 'implementation',
  'mip-json-schemas-walkthrough': 'implementation',
  'conformance-testing-for-implementers': 'implementation',
  'offline-verification-design-patterns': 'implementation',
  'cedar-policies-for-identity-governance': 'implementation',
  'same-trust-model-different-runtime': 'implementation',
  'deployment-profiles-in-practice': 'implementation',
  'offline-verification-guide': 'implementation',
  'mobile-driving-licenses-iso-18013-5': 'implementation',
  'how-credential-issuance-works': 'implementation',
  'presentation-protocols': 'implementation',
  'interoperability-between-credential-formats': 'implementation',
  'what-is-a-digital-identity-wallet': 'implementation',
  'device-binding-and-credential-security': 'implementation',
  'selective-disclosure-in-wallets': 'implementation',
  'rbac-vs-abac': 'implementation',
  'policy-engines-for-identity-systems': 'implementation',
  'verifier-infrastructure': 'implementation',
  'mobile-wallet-architectures': 'implementation',
  'secure-enclave-credential-storage': 'implementation',

  // Trust, PKI & Cryptography
  'cryptographic-trust-anchors-primer': 'cryptography',
  'public-key-infrastructure-explained': 'cryptography',
  'understanding-trust-anchors': 'cryptography',
  'certificate-chains-and-validation': 'cryptography',
  'how-passport-pki-works': 'cryptography',
  'understanding-csca-certificates': 'cryptography',
  'sd-jwt-selective-disclosure-deep-dive': 'cryptography',
  'zero-knowledge-predicates-identity': 'cryptography',
  'selective-disclosure': 'cryptography',
  'minimum-disclosure-is-a-policy-problem': 'cryptography',
  'post-quantum-readiness-in-identity': 'cryptography',
  'revocation-strategies-compared': 'cryptography',
  'holder-binding-beyond-biometrics': 'cryptography',
  'what-icao-9303-specifies': 'cryptography',
  'data-minimization-in-identity': 'cryptography',
  'selective-disclosure-explained': 'cryptography',

  // Industry & Business
  'business-case-for-credential-portability': 'business',
  'eudi-wallet-readiness': 'business',
  'compliance-profiles-bridging-regulation': 'business',
  'compliance-profiles-in-practice': 'business',
  'infrastructure-economics-migration': 'business',
  'mip-and-open-badges-education-credentials': 'business',
  'building-trust-registries-at-scale': 'business',
  'deploy-airline-boarding': 'business',
  'deploy-enterprise-access': 'business',
  'deploy-age-verification': 'business',
  'deploy-membership-credentials': 'business',
  'one-protocol-many-ecosystems': 'business',
  'why-marty-is-ready-for-evaluation': 'business',
  'how-governments-build-identity-pki': 'business',
  'wallet-ux-design-for-identity': 'business',
  'why-identity-systems-must-protect-privacy': 'business',
  'privacy-vs-compliance': 'business',
  'identity-governance-models': 'business',
  'governing-credential-ecosystems': 'business',
  'trust-registries-explained': 'business',
  'federation-in-identity-systems': 'business',
  'discovering-trusted-issuers': 'business',
  'credential-portability-across-wallets': 'business',
  'eudi-wallet-model-explained': 'business',

  // Protocol overviews and primitive deep dives
  'why-the-marty-protocol-exists': 'core-protocol',
  'trust-profile-evaluation-and-failure-handling': 'core-protocol',
  'credential-templates-explained-deep': 'core-protocol',
  'presentation-policies-explained-deep': 'core-protocol',
  'deployment-profiles-explained-deep': 'core-protocol',
  'how-everything-works-together': 'core-protocol',
};

/**
 * Start Here reading list — the ordered entry path for new readers.
 * Progression: general identity → credentials → verification → architecture.
 */
export const START_HERE_SLUGS = [
  'what-is-digital-identity',
  'verifiable-credentials-explained',
  'issuers-holders-verifiers-explained',
  'credential-lifecycle',
  'five-primitives-in-one-picture',
  'the-marty-identity-model',
  'flows-orchestrating-identity-lifecycle',
];
