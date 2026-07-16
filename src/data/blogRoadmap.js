import { normalizeBlogData } from '../utils/blogText.js';

/**
 * Editorial Publication Map and Author Avatar Prompts
 *
 * Historical publication map and avatar generation prompts.
 * `BLOG_ROADMAP` keeps its legacy export name for compatibility.
 */

// Legacy export name retained for compatibility with existing consumers.
export const BLOG_ROADMAP = normalizeBlogData([
  {
    phase: 1,
    title: 'Foundations',
    description: 'Core identity concepts that every reader needs before diving into standards or the protocol.',
    posts: [
      { order: 1, slug: 'what-is-digital-identity', title: 'What Is Digital Identity?', authorId: 'daniel-ortega', category: 'Technical', topic: 'Identity Concepts' },
      { order: 2, slug: 'four-actors-of-identity-systems', title: 'The Four Actors of Identity Systems', authorId: 'daniel-ortega', category: 'Technical', topic: 'Identity Concepts' },
      { order: 3, slug: 'issuers-holders-verifiers-explained', title: 'Issuers, Holders, Verifiers Explained', authorId: 'daniel-ortega', category: 'Technical', topic: 'Identity Concepts' },
      { order: 4, slug: 'credential-lifecycle', title: 'The Credential Lifecycle', authorId: 'daniel-ortega', category: 'Technical', topic: 'Identity Concepts' },
      { order: 5, slug: 'why-identity-depends-on-cryptography', title: 'Why Digital Identity Depends on Cryptography', authorId: 'marcus-vale', category: 'Cryptography', topic: 'Cryptographic Foundations' },
      { order: 6, slug: 'public-key-infrastructure-explained', title: 'Public Key Infrastructure Explained', authorId: 'marcus-vale', category: 'Cryptography', topic: 'Cryptographic Foundations' },
      { order: 7, slug: 'understanding-trust-anchors', title: 'Understanding Trust Anchors', authorId: 'marcus-vale', category: 'Cryptography', topic: 'Cryptographic Foundations' },
      { order: 8, slug: 'certificate-chains-and-validation', title: 'Certificate Chains and Validation', authorId: 'marcus-vale', category: 'Cryptography', topic: 'Cryptographic Foundations' },
    ],
  },
  {
    phase: 2,
    title: 'Standards',
    description: 'International identity standards that MIP builds upon - passports, driving licenses, and government PKI.',
    posts: [
      { order: 9, slug: 'how-passport-pki-works', title: 'How Passport PKI Works', authorId: 'aiko-tanaka', category: 'Technical', topic: 'Passport PKI' },
      { order: 10, slug: 'understanding-csca-certificates', title: 'Understanding CSCA Certificates', authorId: 'aiko-tanaka', category: 'Technical', topic: 'Passport PKI' },
      { order: 11, slug: 'what-icao-9303-specifies', title: 'What ICAO 9303 Actually Specifies', authorId: 'aiko-tanaka', category: 'Technical', topic: 'ICAO Standards' },
      { order: 12, slug: 'mobile-driving-licenses-iso-18013-5', title: 'Mobile Driving Licenses and ISO 18013-5', authorId: 'aiko-tanaka', category: 'Technical', topic: 'mDoc Standards' },
      { order: 13, slug: 'how-governments-build-identity-pki', title: 'How Governments Build Identity PKI', authorId: 'aiko-tanaka', category: 'Business', topic: 'Government Identity' },
    ],
  },
  {
    phase: 3,
    title: 'Credentials',
    description: 'How credentials are issued, structured, presented, and verified across different formats.',
    posts: [
      { order: 14, slug: 'how-credential-issuance-works', title: 'How Credential Issuance Works', authorId: 'daniel-ortega', category: 'Technical', topic: 'Credential Issuance' },
      { order: 15, slug: 'verifiable-credentials-explained', title: 'Verifiable Credentials Explained', authorId: 'daniel-ortega', category: 'Technical', topic: 'Credential Formats' },
      { order: 16, slug: 'presentation-protocols', title: 'Presentation Protocols', authorId: 'daniel-ortega', category: 'Technical', topic: 'Credential Presentation' },
      { order: 17, slug: 'interoperability-between-credential-formats', title: 'Interoperability Between Credential Formats', authorId: 'daniel-ortega', category: 'Technical', topic: 'Interoperability' },
    ],
  },
  {
    phase: 4,
    title: 'Wallets',
    description: 'Digital identity wallets - how users store, manage, and present credentials from their devices.',
    posts: [
      { order: 18, slug: 'what-is-a-digital-identity-wallet', title: 'What Is a Digital Identity Wallet', authorId: 'sofia-rahman', category: 'Technical', topic: 'Wallet Architecture' },
      { order: 19, slug: 'device-binding-and-credential-security', title: 'Device Binding and Credential Security', authorId: 'sofia-rahman', category: 'Technical', topic: 'Device Security' },
      { order: 20, slug: 'selective-disclosure-in-wallets', title: 'Selective Disclosure in Wallets', authorId: 'sofia-rahman', category: 'Technical', topic: 'Selective Disclosure' },
      { order: 21, slug: 'wallet-ux-design-for-identity', title: 'Wallet UX Design for Identity', authorId: 'sofia-rahman', category: 'Business', topic: 'Wallet UX' },
    ],
  },
  {
    phase: 5,
    title: 'Privacy',
    description: 'Privacy-preserving identity - data minimization, selective disclosure, and regulatory alignment.',
    posts: [
      { order: 22, slug: 'why-identity-systems-must-protect-privacy', title: 'Why Identity Systems Must Protect Privacy', authorId: 'nora-patel', category: 'Business', topic: 'Privacy Principles' },
      { order: 23, slug: 'data-minimization-in-identity', title: 'Data Minimization in Identity', authorId: 'nora-patel', category: 'Technical', topic: 'Data Minimization' },
      { order: 24, slug: 'selective-disclosure-explained', title: 'Selective Disclosure Explained', authorId: 'nora-patel', category: 'Cryptography', topic: 'Selective Disclosure' },
      { order: 25, slug: 'privacy-vs-compliance', title: 'Privacy vs Compliance', authorId: 'nora-patel', category: 'Business', topic: 'Privacy & Regulation' },
    ],
  },
  {
    phase: 6,
    title: 'Governance',
    description: 'Identity governance - how organizations define rules, permissions, and trust policies.',
    posts: [
      { order: 26, slug: 'identity-governance-models', title: 'Identity Governance Models', authorId: 'elena-kovacs', category: 'Business', topic: 'Governance' },
      { order: 27, slug: 'rbac-vs-abac', title: 'RBAC vs ABAC', authorId: 'elena-kovacs', category: 'Technical', topic: 'Access Control' },
      { order: 28, slug: 'policy-engines-for-identity-systems', title: 'Policy Engines for Identity Systems', authorId: 'elena-kovacs', category: 'Technical', topic: 'Policy Engines' },
      { order: 29, slug: 'governing-credential-ecosystems', title: 'Governing Credential Ecosystems', authorId: 'elena-kovacs', category: 'Business', topic: 'Ecosystem Governance' },
    ],
  },
  {
    phase: 7,
    title: 'Trust Infrastructure',
    description: 'Large-scale trust systems - registries, federation, and verifier infrastructure.',
    posts: [
      { order: 30, slug: 'trust-registries-explained', title: 'Trust Registries Explained', authorId: 'victor-leclerc', category: 'Technical', topic: 'Trust Registries' },
      { order: 31, slug: 'federation-in-identity-systems', title: 'Federation in Identity Systems', authorId: 'victor-leclerc', category: 'Technical', topic: 'Federation' },
      { order: 32, slug: 'verifier-infrastructure', title: 'Verifier Infrastructure', authorId: 'victor-leclerc', category: 'Technical', topic: 'Verification' },
      { order: 33, slug: 'discovering-trusted-issuers', title: 'Discovering Trusted Issuers', authorId: 'victor-leclerc', category: 'Technical', topic: 'Trust Discovery' },
    ],
  },
  {
    phase: 8,
    title: 'MIP',
    description: 'The Marty Identity Protocol itself - primitives, architecture, and how everything connects.',
    posts: [
      { order: 34, slug: 'why-the-marty-protocol-exists', title: 'Why the Marty Protocol Exists', authorId: 'daniel-ortega', category: 'Announcement', topic: 'Protocol Overview' },
      { order: 35, slug: 'the-marty-identity-model', title: 'The Marty Identity Model', authorId: 'daniel-ortega', category: 'Technical', topic: 'Protocol Architecture' },
      { order: 36, slug: 'trust-profile-evaluation-and-failure-handling', title: 'Trust Profile Evaluation and Failure Handling', authorId: 'daniel-ortega', category: 'Technical', topic: 'Trust Profiles' },
      { order: 37, slug: 'credential-templates-explained-deep', title: 'Credential Templates Explained', authorId: 'daniel-ortega', category: 'Technical', topic: 'Credential Templates' },
      { order: 38, slug: 'presentation-policies-explained-deep', title: 'Presentation Policies Explained', authorId: 'daniel-ortega', category: 'Technical', topic: 'Presentation Policies' },
      { order: 39, slug: 'deployment-profiles-explained-deep', title: 'Deployment Profiles Explained', authorId: 'daniel-ortega', category: 'Technical', topic: 'Deployment Profiles' },
      { order: 40, slug: 'how-everything-works-together', title: 'How Everything Works Together', authorId: 'daniel-ortega', category: 'Technical', topic: 'Protocol Synthesis' },
    ],
  },
]);

// Persona avatar prompt descriptions for generating consistent illustrated portraits
export const AUTHOR_AVATAR_PROMPTS = {
  'aiko-tanaka': 'Professional portrait illustration of a Japanese female identity standards researcher in her early 40s, calm and analytical expression, short black hair, wearing a modern research lab blazer. Subtle background elements referencing passports, ICAO document seals, and global travel lines. Style: semi-realistic digital illustration, soft lighting, neutral academic background, professional LinkedIn style headshot, minimal color palette navy blue and gold.',
  'marcus-vale': 'Professional portrait illustration of a cryptography researcher, male in his late 30s, slightly rugged academic look, dark hair, thoughtful expression, wearing a dark sweater and glasses. Background subtly features mathematical diagrams, public key cryptography symbols, and certificate chains. Style: semi-realistic academic portrait, cool lighting, modern research institute aesthetic.',
  'elena-kovacs': 'Professional portrait illustration of a female policy and governance specialist, Eastern European appearance, early 40s, confident and composed expression. Wearing a professional blazer. Background subtly includes organizational diagrams, policy flow charts, and governance networks. Clean academic illustration style, neutral color palette, professional headshot.',
  'daniel-ortega': 'Portrait illustration of a protocol systems architect, Hispanic male mid-30s, focused analytical expression, wearing a casual technical jacket. Background features subtle diagrams of network protocols, arrows connecting issuer holder verifier systems, and flow charts. Semi-realistic digital illustration style, clean tech aesthetic.',
  'sofia-rahman': 'Professional portrait illustration of a female mobile security researcher, South Asian appearance, early 30s, approachable and intelligent expression. Background includes subtle smartphone wallet icons, device security symbols, and credential cards. Modern digital illustration style, warm lighting.',
  'victor-leclerc': 'Portrait illustration of a European infrastructure researcher, male early 40s, thoughtful expression, wearing a research institute sweater and glasses. Background includes subtle global trust networks, PKI certificate trees, and federation diagrams. Semi-realistic illustration style with muted colors.',
  'nora-patel': 'Professional portrait illustration of a female privacy researcher, South Asian appearance mid-30s, calm thoughtful expression. Background subtly includes zero knowledge proof diagrams, privacy icons, and shield symbols. Soft lighting, academic digital illustration style.',
};
