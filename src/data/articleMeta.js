export {
  BROWSE_HIDDEN_ARTICLE_SLUGS,
  LEGACY_ARTICLE_SLUGS,
  getBrowseVisiblePosts,
  isBrowseVisibleArticleSlug,
} from './articleBrowseVisibility.js';

/**
 * Article Metadata
 *
 * Per-article protocol context: primitive, layer, topic, difficulty,
 * and related article slugs. Used by ProtocolContextHeader and
 * ContinueLearning components to turn articles into protocol
 * documentation nodes.
 */

/**
 * ARTICLE_META[slug] -> { primitive?, layer, topic, difficulty, related[] }
 *
 * Internal layer keys map to the protocol lifecycle.
 * Reader-facing labels should use LAYER_LABELS:
 *   Foundations -> Trust -> Issue (Issuance) -> Present (Presentation)
 *   -> Deploy (Deployment) -> Execute (Execution) -> Govern (Governance)
 *
 * Difficulty: Beginner | Intermediate | Advanced
 * Optional status fields:
 *   status: 'legacy' hides an article from browse/search surfaces while
 *   preserving the direct URL
 *   browseHidden: true hides a blog record from browse/search/list surfaces
 *   when another surface (for example a canonical guide) owns the slug
 *   canonicalSlug: canonical article to prefer for SEO + reader handoff
 */
export const LAYER_LABELS = {
  Foundations: 'Foundations',
  Trust: 'Trust',
  Issue: 'Issuance',
  Present: 'Presentation',
  Deploy: 'Deployment',
  Execute: 'Flow Orchestration',
  Govern: 'Governance',
};

export const ARTICLE_META = {
  // Start Here / Foundations
  'what-is-digital-identity': {
    topic: 'Foundations',
    layer: 'Foundations',
    difficulty: 'Beginner',
    related: ['verifiable-credentials-explained', 'issuers-holders-verifiers-explained', 'why-identity-needs-a-protocol'],
  },
  'verifiable-credentials-explained': {
    topic: 'Foundations',
    layer: 'Foundations',
    difficulty: 'Beginner',
    related: ['what-is-digital-identity', 'credential-lifecycle', 'issuers-holders-verifiers-explained'],
  },
  'four-actors-of-identity-systems': {
    topic: 'Foundations',
    layer: 'Foundations',
    difficulty: 'Beginner',
    related: ['verifiable-credentials-explained', 'issuers-holders-verifiers-explained', 'building-trust-registries-at-scale'],
  },
  'issuers-holders-verifiers-explained': {
    topic: 'Foundations',
    layer: 'Foundations',
    difficulty: 'Beginner',
    related: ['what-is-digital-identity', 'credential-lifecycle', 'verifiable-credentials-explained'],
  },
  'credential-lifecycle': {
    topic: 'Foundations',
    layer: 'Foundations',
    difficulty: 'Beginner',
    related: ['verifiable-credentials-explained', 'issuers-holders-verifiers-explained', 'five-primitives-in-one-picture'],
  },
  'five-primitives-in-one-picture': {
    topic: 'Protocol Overview',
    layer: 'Foundations',
    difficulty: 'Beginner',
    related: ['trust-profiles-explained', 'credential-templates-designing-what-gets-issued', 'flows-orchestrating-identity-lifecycle'],
  },
  'the-marty-identity-model': {
    topic: 'Protocol Overview',
    layer: 'Foundations',
    difficulty: 'Beginner',
    related: ['five-primitives-in-one-picture', 'flows-orchestrating-identity-lifecycle', 'why-identity-needs-a-protocol'],
  },
  'why-identity-needs-a-protocol': {
    topic: 'Protocol Vision',
    layer: 'Foundations',
    difficulty: 'Beginner',
    related: ['five-primitives-in-one-picture', 'the-marty-identity-model', 'what-is-digital-identity'],
  },

  // Five Primitives (Core Protocol)
  'trust-profiles-explained': {
    primitive: 'Trust Profiles',
    layer: 'Trust',
    topic: 'Core Protocol',
    difficulty: 'Intermediate',
    related: ['understanding-trust-anchors', 'public-key-infrastructure-explained', 'building-trust-registries-at-scale'],
  },
  'credential-templates-designing-what-gets-issued': {
    primitive: 'Credential Templates',
    layer: 'Issue',
    topic: 'Core Protocol',
    difficulty: 'Intermediate',
    related: ['impl-oid4vci', 'credential-lifecycle', 'mip-json-schemas-walkthrough'],
  },
  'presentation-policies-minimum-disclosure': {
    primitive: 'Presentation Policies',
    layer: 'Present',
    topic: 'Core Protocol',
    difficulty: 'Intermediate',
    related: ['selective-disclosure', 'minimum-disclosure-is-a-policy-problem', 'impl-oid4vp'],
  },
  'deployment-profiles-from-design-to-production': {
    primitive: 'Deployment Profiles',
    layer: 'Deploy',
    topic: 'Core Protocol',
    difficulty: 'Intermediate',
    related: ['deployment-profiles-in-practice', 'offline-verification-guide', 'deploy-airline-boarding'],
  },
  'flows-orchestrating-identity-lifecycle': {
    primitive: 'Flows',
    layer: 'Execute',
    topic: 'Core Protocol',
    difficulty: 'Intermediate',
    related: ['credential-lifecycle', 'impl-oid4vci', 'impl-oid4vp'],
  },

  // PKI for Identity
  'public-key-infrastructure-explained': {
    layer: 'Trust',
    topic: 'PKI for Identity',
    difficulty: 'Intermediate',
    related: ['understanding-trust-anchors', 'certificate-chains-and-validation', 'trust-profiles-explained'],
  },
  'understanding-trust-anchors': {
    layer: 'Trust',
    topic: 'PKI for Identity',
    difficulty: 'Intermediate',
    related: ['public-key-infrastructure-explained', 'cryptographic-trust-anchors-primer', 'trust-profiles-explained'],
  },
  'cryptographic-trust-anchors-primer': {
    layer: 'Trust',
    topic: 'PKI for Identity',
    difficulty: 'Advanced',
    related: ['understanding-trust-anchors', 'certificate-chains-and-validation', 'how-passport-pki-works'],
  },
  'certificate-chains-and-validation': {
    layer: 'Trust',
    topic: 'PKI for Identity',
    difficulty: 'Advanced',
    related: ['public-key-infrastructure-explained', 'how-passport-pki-works', 'understanding-csca-certificates'],
  },
  'how-passport-pki-works': {
    layer: 'Trust',
    topic: 'PKI for Identity',
    difficulty: 'Advanced',
    related: ['certificate-chains-and-validation', 'understanding-csca-certificates', 'cryptographic-trust-anchors-primer'],
  },
  'understanding-csca-certificates': {
    layer: 'Trust',
    topic: 'PKI for Identity',
    difficulty: 'Advanced',
    related: ['how-passport-pki-works', 'certificate-chains-and-validation', 'public-key-infrastructure-explained'],
  },

  // Privacy & Disclosure
  'minimum-disclosure-is-a-policy-problem': {
    layer: 'Present',
    topic: 'Privacy & Disclosure',
    difficulty: 'Intermediate',
    related: ['selective-disclosure', 'presentation-policies-minimum-disclosure', 'data-minimization-in-identity'],
  },
  'selective-disclosure': {
    layer: 'Present',
    topic: 'Privacy & Disclosure',
    difficulty: 'Intermediate',
    related: ['sd-jwt-selective-disclosure-deep-dive', 'minimum-disclosure-is-a-policy-problem', 'data-minimization-in-identity'],
  },
  'sd-jwt-selective-disclosure-deep-dive': {
    layer: 'Present',
    topic: 'Privacy & Disclosure',
    difficulty: 'Advanced',
    related: ['selective-disclosure', 'zero-knowledge-predicates-identity', 'presentation-policies-minimum-disclosure'],
  },
  'zero-knowledge-predicates-identity': {
    layer: 'Present',
    topic: 'Privacy & Disclosure',
    difficulty: 'Advanced',
    related: ['sd-jwt-selective-disclosure-deep-dive', 'selective-disclosure', 'data-minimization-in-identity'],
  },

  // Implementation Guides
  'impl-oid4vci': {
    primitive: 'Credential Templates',
    layer: 'Issue',
    topic: 'Implementation',
    difficulty: 'Advanced',
    browseHidden: true,
    related: ['impl-oid4vp', 'credential-templates-designing-what-gets-issued', 'mip-json-schemas-walkthrough'],
  },
  'impl-oid4vp': {
    primitive: 'Presentation Policies',
    layer: 'Present',
    topic: 'Implementation',
    difficulty: 'Advanced',
    browseHidden: true,
    related: ['impl-oid4vci', 'presentation-policies-minimum-disclosure', 'conformance-testing-for-implementers'],
  },
  'mip-json-schemas-walkthrough': {
    layer: 'Issue',
    topic: 'Implementation',
    difficulty: 'Intermediate',
    related: ['impl-oid4vci', 'credential-templates-designing-what-gets-issued', 'conformance-testing-for-implementers'],
  },
  'conformance-testing-for-implementers': {
    layer: 'Execute',
    topic: 'Implementation',
    difficulty: 'Advanced',
    related: ['impl-oid4vci', 'impl-oid4vp', 'mip-json-schemas-walkthrough'],
  },

  // Governance & Policy
  'compliance-profiles-bridging-regulation': {
    layer: 'Govern',
    topic: 'Governance',
    difficulty: 'Intermediate',
    related: ['compliance-profiles-in-practice', 'cedar-policies-for-identity-governance', 'building-trust-registries-at-scale'],
  },
  'compliance-profiles-in-practice': {
    layer: 'Govern',
    topic: 'Governance',
    difficulty: 'Advanced',
    browseHidden: true,
    related: ['compliance-profiles-bridging-regulation', 'cedar-policies-for-identity-governance', 'building-trust-registries-at-scale'],
  },
  'cedar-policies-for-identity-governance': {
    layer: 'Govern',
    topic: 'Governance',
    difficulty: 'Advanced',
    related: ['compliance-profiles-in-practice', 'building-trust-registries-at-scale', 'trust-profiles-explained'],
  },
  'building-trust-registries-at-scale': {
    layer: 'Govern',
    topic: 'Governance',
    difficulty: 'Advanced',
    related: ['trust-profiles-explained', 'compliance-profiles-in-practice', 'cedar-policies-for-identity-governance'],
  },

  // Deployment Patterns
  'deployment-profiles-in-practice': {
    primitive: 'Deployment Profiles',
    layer: 'Deploy',
    topic: 'Deployment Patterns',
    difficulty: 'Intermediate',
    browseHidden: true,
    related: ['deployment-profiles-from-design-to-production', 'offline-verification-guide', 'deploy-airline-boarding'],
  },
  'offline-verification-guide': {
    layer: 'Deploy',
    topic: 'Deployment Patterns',
    difficulty: 'Intermediate',
    browseHidden: true,
    related: ['deployment-profiles-in-practice', 'deploy-airline-boarding', 'deploy-enterprise-access'],
  },
  'deploy-airline-boarding': {
    layer: 'Deploy',
    topic: 'Deployment Patterns',
    difficulty: 'Intermediate',
    browseHidden: true,
    related: ['deploy-enterprise-access', 'deployment-profiles-in-practice', 'offline-verification-guide'],
  },
  'deploy-enterprise-access': {
    layer: 'Deploy',
    topic: 'Deployment Patterns',
    difficulty: 'Intermediate',
    browseHidden: true,
    related: ['deploy-airline-boarding', 'deploy-age-verification', 'deployment-profiles-in-practice'],
  },
  'deploy-age-verification': {
    layer: 'Deploy',
    topic: 'Deployment Patterns',
    difficulty: 'Intermediate',
    browseHidden: true,
    related: ['deploy-membership-credentials', 'deploy-enterprise-access', 'selective-disclosure'],
  },
  'deploy-membership-credentials': {
    layer: 'Deploy',
    topic: 'Deployment Patterns',
    difficulty: 'Intermediate',
    browseHidden: true,
    related: ['deploy-age-verification', 'deploy-enterprise-access', 'credential-templates-designing-what-gets-issued'],
  },

  // Wallets
  'mobile-wallet-architectures': {
    layer: 'Deploy',
    topic: 'Wallets',
    difficulty: 'Intermediate',
    related: ['secure-enclave-credential-storage', 'credential-portability-across-wallets', 'eudi-wallet-model-explained'],
  },
  'secure-enclave-credential-storage': {
    layer: 'Deploy',
    topic: 'Wallets',
    difficulty: 'Advanced',
    related: ['mobile-wallet-architectures', 'credential-portability-across-wallets', 'eudi-wallet-model-explained'],
  },
  'credential-portability-across-wallets': {
    layer: 'Deploy',
    topic: 'Wallets',
    difficulty: 'Intermediate',
    related: ['mobile-wallet-architectures', 'eudi-wallet-model-explained', 'business-case-for-credential-portability'],
  },
  'eudi-wallet-model-explained': {
    layer: 'Deploy',
    topic: 'Wallets',
    difficulty: 'Intermediate',
    related: ['mobile-wallet-architectures', 'credential-portability-across-wallets', 'compliance-profiles-bridging-regulation'],
  },

  // Business / Industry
  'business-case-for-credential-portability': {
    layer: 'Foundations',
    topic: 'Industry',
    difficulty: 'Beginner',
    related: ['credential-portability-across-wallets', 'why-identity-needs-a-protocol', 'infrastructure-economics-migration'],
  },
  'eudi-wallet-readiness': {
    layer: 'Govern',
    topic: 'Industry',
    difficulty: 'Intermediate',
    related: ['eudi-wallet-model-explained', 'compliance-profiles-bridging-regulation', 'mobile-wallet-architectures'],
  },
  'infrastructure-economics-migration': {
    layer: 'Foundations',
    topic: 'Industry',
    difficulty: 'Intermediate',
    related: ['business-case-for-credential-portability', 'why-identity-needs-a-protocol', 'compliance-profiles-bridging-regulation'],
  },
  'mip-and-open-badges-education-credentials': {
    layer: 'Issue',
    topic: 'Industry',
    difficulty: 'Intermediate',
    related: ['credential-templates-designing-what-gets-issued', 'credential-lifecycle', 'impl-oid4vci'],
  },

  // Standalone / Advanced
  'why-identity-depends-on-cryptography': {
    layer: 'Trust',
    topic: 'Foundations',
    difficulty: 'Beginner',
    related: ['public-key-infrastructure-explained', 'understanding-trust-anchors', 'what-is-digital-identity'],
  },
  'post-quantum-readiness-in-identity': {
    layer: 'Trust',
    topic: 'PKI for Identity',
    difficulty: 'Advanced',
    related: ['public-key-infrastructure-explained', 'cryptographic-trust-anchors-primer', 'certificate-chains-and-validation'],
  },
  'revocation-strategies-compared': {
    layer: 'Execute',
    topic: 'Implementation',
    difficulty: 'Advanced',
    related: ['credential-lifecycle', 'conformance-testing-for-implementers', 'flows-orchestrating-identity-lifecycle'],
  },
  'holder-binding-beyond-biometrics': {
    layer: 'Present',
    topic: 'Privacy & Disclosure',
    difficulty: 'Advanced',
    related: ['selective-disclosure', 'sd-jwt-selective-disclosure-deep-dive', 'presentation-policies-minimum-disclosure'],
  },
  'offline-verification-design-patterns': {
    layer: 'Deploy',
    topic: 'Implementation',
    difficulty: 'Advanced',
    related: ['offline-verification-guide', 'deployment-profiles-in-practice', 'deploy-airline-boarding'],
  },
  'introducing-mip': {
    topic: 'Protocol Vision',
    layer: 'Foundations',
    difficulty: 'Beginner',
    related: ['why-identity-needs-a-protocol', 'five-primitives-in-one-picture', 'the-marty-identity-model'],
  },

  // Runtime, Evaluation & Strategy
  'same-trust-model-different-runtime': {
    layer: 'Deploy',
    topic: 'Deployment Patterns',
    difficulty: 'Intermediate',
    related: ['deployment-profiles-from-design-to-production', 'deployment-profiles-in-practice', 'offline-verification-guide'],
  },
  'one-protocol-many-ecosystems': {
    layer: 'Foundations',
    topic: 'Protocol Vision',
    difficulty: 'Intermediate',
    related: ['same-trust-model-different-runtime', 'compliance-profiles-in-practice', 'deploy-membership-credentials'],
  },
  'why-marty-is-ready-for-evaluation': {
    layer: 'Foundations',
    topic: 'Protocol Vision',
    difficulty: 'Intermediate',
    related: ['why-the-marty-protocol-exists', 'mip-json-schemas-walkthrough', 'conformance-testing-for-implementers'],
  },

  // Standards & PKI
  'what-icao-9303-specifies': {
    layer: 'Trust',
    topic: 'Passport PKI',
    difficulty: 'Intermediate',
    related: ['how-passport-pki-works', 'understanding-csca-certificates', 'how-governments-build-identity-pki'],
  },
  'mobile-driving-licenses-iso-18013-5': {
    layer: 'Deploy',
    topic: 'mDoc Standards',
    difficulty: 'Intermediate',
    related: ['how-governments-build-identity-pki', 'mobile-wallet-architectures', 'presentation-protocols'],
  },
  'how-governments-build-identity-pki': {
    layer: 'Trust',
    topic: 'Government Identity',
    difficulty: 'Intermediate',
    related: ['how-passport-pki-works', 'mobile-driving-licenses-iso-18013-5', 'understanding-trust-anchors'],
  },

  // Issuance, Presentation & Interoperability
  'how-credential-issuance-works': {
    layer: 'Issue',
    topic: 'Credential Issuance',
    difficulty: 'Intermediate',
    related: ['credential-lifecycle', 'impl-oid4vci', 'credential-templates-designing-what-gets-issued'],
  },
  'presentation-protocols': {
    layer: 'Present',
    topic: 'Credential Presentation',
    difficulty: 'Intermediate',
    related: ['impl-oid4vp', 'presentation-policies-minimum-disclosure', 'interoperability-between-credential-formats'],
  },
  'interoperability-between-credential-formats': {
    layer: 'Present',
    topic: 'Interoperability',
    difficulty: 'Advanced',
    related: ['verifiable-credentials-explained', 'presentation-protocols', 'mobile-driving-licenses-iso-18013-5'],
  },

  // Wallets & Holder Experience
  'what-is-a-digital-identity-wallet': {
    layer: 'Deploy',
    topic: 'Wallets',
    difficulty: 'Beginner',
    related: ['mobile-wallet-architectures', 'device-binding-and-credential-security', 'selective-disclosure-in-wallets'],
  },
  'device-binding-and-credential-security': {
    layer: 'Deploy',
    topic: 'Wallets',
    difficulty: 'Advanced',
    related: ['what-is-a-digital-identity-wallet', 'secure-enclave-credential-storage', 'holder-binding-beyond-biometrics'],
  },
  'selective-disclosure-in-wallets': {
    layer: 'Present',
    topic: 'Wallets',
    difficulty: 'Intermediate',
    related: ['selective-disclosure', 'what-is-a-digital-identity-wallet', 'wallet-ux-design-for-identity'],
  },
  'wallet-ux-design-for-identity': {
    layer: 'Deploy',
    topic: 'Wallets',
    difficulty: 'Intermediate',
    related: ['what-is-a-digital-identity-wallet', 'selective-disclosure-in-wallets', 'eudi-wallet-model-explained'],
  },

  // Privacy, Governance & Trust Infrastructure
  'why-identity-systems-must-protect-privacy': {
    layer: 'Present',
    topic: 'Privacy & Disclosure',
    difficulty: 'Beginner',
    related: ['minimum-disclosure-is-a-policy-problem', 'data-minimization-in-identity', 'privacy-vs-compliance'],
  },
  'data-minimization-in-identity': {
    layer: 'Present',
    topic: 'Privacy & Disclosure',
    difficulty: 'Intermediate',
    related: ['minimum-disclosure-is-a-policy-problem', 'why-identity-systems-must-protect-privacy', 'privacy-vs-compliance'],
  },
  'selective-disclosure-explained': {
    layer: 'Present',
    topic: 'Privacy & Disclosure',
    difficulty: 'Advanced',
    status: 'legacy',
    canonicalSlug: 'selective-disclosure',
    legacyNotice: 'This older explainer is kept as a legacy comparison-oriented article. Start with Selective Disclosure for the canonical mechanism overview, then return here only if you need the longer mechanism-by-mechanism framing.',
    related: ['selective-disclosure', 'sd-jwt-selective-disclosure-deep-dive', 'data-minimization-in-identity'],
  },
  'privacy-vs-compliance': {
    layer: 'Govern',
    topic: 'Privacy & Disclosure',
    difficulty: 'Intermediate',
    related: ['why-identity-systems-must-protect-privacy', 'compliance-profiles-in-practice', 'minimum-disclosure-is-a-policy-problem'],
  },
  'identity-governance-models': {
    layer: 'Govern',
    topic: 'Governance',
    difficulty: 'Beginner',
    related: ['compliance-profiles-bridging-regulation', 'governing-credential-ecosystems', 'policy-engines-for-identity-systems'],
  },
  'rbac-vs-abac': {
    layer: 'Govern',
    topic: 'Governance',
    difficulty: 'Intermediate',
    related: ['policy-engines-for-identity-systems', 'cedar-policies-for-identity-governance', 'deploy-enterprise-access'],
  },
  'policy-engines-for-identity-systems': {
    layer: 'Govern',
    topic: 'Governance',
    difficulty: 'Advanced',
    related: ['cedar-policies-for-identity-governance', 'rbac-vs-abac', 'identity-governance-models'],
  },
  'governing-credential-ecosystems': {
    layer: 'Govern',
    topic: 'Governance',
    difficulty: 'Intermediate',
    related: ['identity-governance-models', 'building-trust-registries-at-scale', 'trust-registries-explained'],
  },
  'trust-registries-explained': {
    layer: 'Govern',
    topic: 'Trust Infrastructure',
    difficulty: 'Intermediate',
    related: ['building-trust-registries-at-scale', 'discovering-trusted-issuers', 'federation-in-identity-systems'],
  },
  'federation-in-identity-systems': {
    layer: 'Govern',
    topic: 'Trust Infrastructure',
    difficulty: 'Intermediate',
    related: ['trust-registries-explained', 'discovering-trusted-issuers', 'verifier-infrastructure'],
  },
  'verifier-infrastructure': {
    layer: 'Execute',
    topic: 'Trust Infrastructure',
    difficulty: 'Advanced',
    related: ['offline-verification-guide', 'trust-registries-explained', 'discovering-trusted-issuers'],
  },
  'discovering-trusted-issuers': {
    layer: 'Trust',
    topic: 'Trust Infrastructure',
    difficulty: 'Intermediate',
    related: ['trust-registries-explained', 'building-trust-registries-at-scale', 'understanding-trust-anchors'],
  },

  // Protocol Deep Dives & Synthesis
  'why-the-marty-protocol-exists': {
    layer: 'Foundations',
    topic: 'Protocol Vision',
    difficulty: 'Beginner',
    related: ['why-identity-needs-a-protocol', 'the-marty-identity-model', 'why-marty-is-ready-for-evaluation'],
  },
  'trust-profile-evaluation-and-failure-handling': {
    primitive: 'Trust Profiles',
    layer: 'Trust',
    topic: 'Core Protocol',
    difficulty: 'Advanced',
    related: ['trust-profiles-explained', 'building-trust-registries-at-scale', 'understanding-trust-anchors'],
  },
  'credential-templates-explained-deep': {
    primitive: 'Credential Templates',
    layer: 'Issue',
    topic: 'Core Protocol',
    difficulty: 'Advanced',
    related: ['credential-templates-designing-what-gets-issued', 'how-credential-issuance-works', 'mip-json-schemas-walkthrough'],
  },
  'presentation-policies-explained-deep': {
    primitive: 'Presentation Policies',
    layer: 'Present',
    topic: 'Core Protocol',
    difficulty: 'Advanced',
    related: ['presentation-policies-minimum-disclosure', 'presentation-protocols', 'selective-disclosure'],
  },
  'deployment-profiles-explained-deep': {
    primitive: 'Deployment Profiles',
    layer: 'Deploy',
    topic: 'Core Protocol',
    difficulty: 'Advanced',
    related: ['deployment-profiles-from-design-to-production', 'deployment-profiles-in-practice', 'offline-verification-guide'],
  },
  'how-everything-works-together': {
    layer: 'Foundations',
    topic: 'Protocol Overview',
    difficulty: 'Advanced',
    related: ['the-marty-identity-model', 'five-primitives-in-one-picture', 'flows-orchestrating-identity-lifecycle'],
  },
};

/**
 * Layer display colors - keyed by the internal protocol layer codes.
 */
export const LAYER_COLORS = {
  Foundations: '#546e7a',
  Trust: '#1565c0',
  Issue: '#7b1fa2',
  Present: '#2e7d32',
  Deploy: '#e65100',
  Execute: '#00695c',
  Govern: '#4a148c',
};

/**
 * Difficulty display colors.
 */
export const DIFFICULTY_COLORS = {
  Beginner: 'success',
  Intermediate: 'info',
  Advanced: 'warning',
};

export function getCanonicalArticleSlug(slug) {
  return ARTICLE_META[slug]?.canonicalSlug || slug;
}

export function getLegacyArticleMeta(slug) {
  const meta = ARTICLE_META[slug];
  return meta?.status === 'legacy' ? meta : null;
}
