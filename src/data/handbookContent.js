import { normalizeBlogData } from '../utils/blogText.js';

export const HANDBOOK_PARTS = normalizeBlogData([
  {
    part: 'I',
    title: 'Foundations',
    description: 'Core concepts of digital identity - what it is, who participates, and how credentials work.',
    layer: 'Foundations',
    slugs: [
      'what-is-digital-identity',
      'verifiable-credentials-explained',
      'issuers-holders-verifiers-explained',
      'credential-lifecycle',
    ],
  },
  {
    part: 'II',
    title: 'The Marty Protocol Model',
    description: 'The five primitives that define every identity system - from trust to flow orchestration.',
    layer: 'Trust',
    slugs: [
      'five-primitives-in-one-picture',
      'the-marty-identity-model',
      'trust-profiles-explained',
      'credential-templates-designing-what-gets-issued',
      'presentation-policies-minimum-disclosure',
      'deployment-profiles-from-design-to-production',
      'flows-orchestrating-identity-lifecycle',
    ],
  },
  {
    part: 'III',
    title: 'Trust & PKI',
    description: 'Cryptographic foundations - public key infrastructure, trust anchors, and certificate chains.',
    layer: 'Trust',
    slugs: [
      'why-identity-depends-on-cryptography',
      'public-key-infrastructure-explained',
      'understanding-trust-anchors',
      'cryptographic-trust-anchors-primer',
      'certificate-chains-and-validation',
      'how-passport-pki-works',
      'understanding-csca-certificates',
    ],
  },
  {
    part: 'IV',
    title: 'Privacy & Disclosure',
    description: 'Data minimization, selective disclosure, and zero-knowledge proofs.',
    layer: 'Present',
    slugs: [
      'minimum-disclosure-is-a-policy-problem',
      'selective-disclosure',
      'data-minimization-in-identity',
      'sd-jwt-selective-disclosure-deep-dive',
      'zero-knowledge-predicates-identity',
    ],
  },
  {
    part: 'V',
    title: 'Implementation',
    description: 'Transport protocols, schemas, and integration patterns for building with Marty.',
    layer: 'Issue',
    slugs: [
      'impl-oid4vci',
      'impl-oid4vp',
      'mip-json-schemas-walkthrough',
      'conformance-testing-for-implementers',
    ],
  },
  {
    part: 'VI',
    title: 'Deployment Patterns',
    description: 'How verifiable identity runs in real environments - airports, enterprises, kiosks, and edge devices.',
    layer: 'Deploy',
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
    part: 'VII',
    title: 'Governance & Trust Infrastructure',
    description: 'Compliance frameworks, policy engines, trust registries, and wallet architecture.',
    layer: 'Govern',
    slugs: [
      'compliance-profiles-bridging-regulation',
      'compliance-profiles-in-practice',
      'cedar-policies-for-identity-governance',
      'building-trust-registries-at-scale',
      'mobile-wallet-architectures',
      'secure-enclave-credential-storage',
      'credential-portability-across-wallets',
      'eudi-wallet-model-explained',
    ],
  },
]);

export const HANDBOOK_ARTICLE_SLUGS = HANDBOOK_PARTS.flatMap((part) => part.slugs);

export const HANDBOOK_ARTICLE_CONTEXT_BY_SLUG = (() => {
  const totalArticles = HANDBOOK_ARTICLE_SLUGS.length;
  const context = {};
  let articleNumber = 0;

  HANDBOOK_PARTS.forEach((part, partIndex) => {
    part.slugs.forEach((slug, partArticleIndex) => {
      articleNumber += 1;
      context[slug] = {
        slug,
        articleNumber,
        totalArticles,
        globalIndex: articleNumber - 1,
        part: part.part,
        partTitle: part.title,
        partIndex: partIndex + 1,
        partArticleNumber: partArticleIndex + 1,
        partArticleCount: part.slugs.length,
      };
    });
  });

  return context;
})();

export function isHandbookArticleSlug(slug) {
  return Boolean(HANDBOOK_ARTICLE_CONTEXT_BY_SLUG[slug]);
}

export function getHandbookArticleNavigation(slug) {
  const context = HANDBOOK_ARTICLE_CONTEXT_BY_SLUG[slug];

  if (!context) {
    return null;
  }

  return {
    ...context,
    prevSlug: context.globalIndex > 0 ? HANDBOOK_ARTICLE_SLUGS[context.globalIndex - 1] : null,
    nextSlug:
      context.globalIndex < HANDBOOK_ARTICLE_SLUGS.length - 1
        ? HANDBOOK_ARTICLE_SLUGS[context.globalIndex + 1]
        : null,
  };
}