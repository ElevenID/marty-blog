/**
 * Foundations Page
 *
 * Structured textbook-style table of contents for the entire identity
 * infrastructure curriculum. Organizes all articles into a seven-part
 * learning path that covers the full stack of verifiable identity systems.
 *
 * Route: /blog/foundations (or /learn)
 */

import { Box, Typography, Paper, Chip, Divider, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { SEOHead } from '../seo';
import { useNavigate } from 'react-router-dom';
import { BLOG_POSTS, GUIDE_ARTICLE_MAP, GUIDE_CHAPTERS } from '../data';
import { ARTICLE_META, LAYER_COLORS } from '../data/articleMeta';

/**
 * The handbook structure — seven parts covering the full identity stack.
 * Each part has a number, title, description, layer color, and ordered slugs.
 */
const HANDBOOK_PARTS = [
  {
    part: 'I',
    title: 'Foundations',
    description: 'Core concepts of digital identity — what it is, who participates, and how credentials work.',
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
    description: 'The five primitives that define every identity system — from trust to execution.',
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
    description: 'Cryptographic foundations — public key infrastructure, trust anchors, and certificate chains.',
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
    description: 'How verifiable identity runs in real environments — airports, enterprises, kiosks, and edge devices.',
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
];

const GUIDE_CHAPTERS_BY_ID = Object.fromEntries(
  GUIDE_CHAPTERS.map((chapter) => [chapter.id, chapter]),
);

function computePartTime(slugs) {
  return slugs.reduce((sum, slug) => {
    const article = getHandbookEntry(slug)?.article;
    const match = article?.readTime?.match(/(\d+)/);
    return sum + (match ? parseInt(match[1], 10) : 0);
  }, 0);
}

export function getHandbookEntry(slug) {
  const guideArticle = GUIDE_ARTICLE_MAP[slug];
  const isGuide = Boolean(ARTICLE_META[slug]?.browseHidden && guideArticle);
  const article = isGuide
    ? guideArticle
    : BLOG_POSTS.find((post) => post.slug === slug);

  if (!article) return null;

  return {
    article,
    isGuide,
    chapterTitle: isGuide ? GUIDE_CHAPTERS_BY_ID[guideArticle.chapterId]?.title || null : null,
  };
}

function FoundationsPage() {
  const navigate = useNavigate();

  const totalArticles = HANDBOOK_PARTS.reduce((sum, part) => sum + part.slugs.length, 0);
  const totalMinutes = HANDBOOK_PARTS.reduce((sum, part) => sum + computePartTime(part.slugs), 0);

  // Running article counter across all parts
  let articleCounter = 0;

  return (
    <Box>
      <SEOHead
        title="Identity Infrastructure Foundations — Marty Identity Protocol"
        description="A structured introduction to verifiable identity infrastructure. Foundations, protocols, cryptography, deployment patterns, and governance."
        canonicalPath="/blog/foundations"
        keywords={['digital identity', 'verifiable credentials', 'identity infrastructure', 'PKI', 'OID4VCI', 'selective disclosure', 'trust profiles']}
      />

      {/* Back link */}
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/blog')} sx={{ mb: 3 }}>
        Blog
      </Button>

      {/* Hero */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, md: 6 },
          mb: 6,
          borderRadius: 3,
          background: 'linear-gradient(135deg, #0D1B2A 0%, #1B2838 50%, #1a237e 100%)',
          color: 'common.white',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <MenuBookIcon sx={{ fontSize: 28, opacity: 0.7 }} />
          <Typography
            variant="overline"
            sx={{
              fontWeight: 800,
              letterSpacing: 2,
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            The Identity Infrastructure Handbook
          </Typography>
        </Box>
        <Typography
          variant="h2"
          component="h1"
          fontWeight={900}
          gutterBottom
          sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.15, letterSpacing: '-0.02em' }}
        >
          Verifiable Identity Foundations
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ maxWidth: 640, lineHeight: 1.7, mb: 3, opacity: 0.85, fontWeight: 400, fontSize: { xs: '1rem', md: '1.15rem' } }}
        >
          A structured introduction to digital identity infrastructure — from foundational concepts to production deployment patterns.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
          <Chip
            label={`${totalArticles} articles`}
            sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'common.white', fontWeight: 700, fontSize: '0.78rem' }}
          />
          <Chip
            label={`~${totalMinutes} min total`}
            sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'common.white', fontWeight: 700, fontSize: '0.78rem' }}
          />
          <Chip
            label="7 parts"
            sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'common.white', fontWeight: 700, fontSize: '0.78rem' }}
          />
        </Box>
      </Paper>

      {/* Parts */}
      {HANDBOOK_PARTS.map((part, partIdx) => {
        const layerColor = LAYER_COLORS[part.layer] || '#546e7a';
        const partMinutes = computePartTime(part.slugs);
        const partStartNum = articleCounter + 1;

        return (
          <Box key={part.part} sx={{ mb: { xs: 6, md: 8 } }}>
            {/* Part header */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 2,
                mb: 1,
                flexWrap: 'wrap',
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  fontSize: '0.65rem',
                  color: layerColor,
                }}
              >
                Part {part.part}
              </Typography>
              <Chip
                label={`${part.slugs.length} articles · ~${partMinutes} min`}
                size="small"
                variant="outlined"
                sx={{ fontWeight: 700, fontSize: '0.68rem', borderColor: 'grey.400' }}
              />
            </Box>
            <Typography
              variant="h4"
              fontWeight={800}
              sx={{
                fontSize: { xs: '1.5rem', md: '1.85rem' },
                lineHeight: 1.3,
                mb: 0.75,
              }}
            >
              {part.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: 600, lineHeight: 1.7, fontSize: '1rem' }}
            >
              {part.description}
            </Typography>

            {/* Article list */}
            <Box
              sx={{
                borderLeft: '3px solid',
                borderColor: layerColor,
                pl: { xs: 2, md: 3 },
              }}
            >
              {part.slugs.map((slug) => {
                articleCounter++;
                const entry = getHandbookEntry(slug);
                const article = entry?.article;
                const meta = ARTICLE_META[slug];
                if (!article) return null;

                return (
                  <Box
                    key={slug}
                    onClick={() => navigate(`/blog/${slug}`)}
                    sx={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: { xs: 1.5, md: 2 },
                      py: 1.25,
                      cursor: 'pointer',
                      borderBottom: '1px solid',
                      borderColor: 'grey.100',
                      transition: 'all 0.15s',
                      '&:hover': { bgcolor: 'grey.50' },
                      '&:hover .article-title': { color: 'primary.main' },
                      px: 1,
                      mx: -1,
                      borderRadius: 1,
                    }}
                  >
                    {/* Number */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 800,
                        color: layerColor,
                        fontSize: '0.85rem',
                        minWidth: 28,
                        textAlign: 'right',
                        flexShrink: 0,
                      }}
                    >
                      {articleCounter}
                    </Typography>

                    {/* Title + meta */}
                    <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                      {entry?.isGuide && (
                        <Box sx={{ display: 'flex', gap: 0.75, mb: 0.75, flexWrap: 'wrap' }}>
                          <Chip
                            label="Guide"
                            size="small"
                            color="secondary"
                            sx={{ fontWeight: 700, fontSize: '0.62rem', height: 20 }}
                          />
                          {entry.chapterTitle && (
                            <Chip
                              label={entry.chapterTitle}
                              size="small"
                              variant="outlined"
                              sx={{ fontWeight: 600, fontSize: '0.62rem', height: 20 }}
                            />
                          )}
                        </Box>
                      )}
                      <Typography
                        className="article-title"
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          lineHeight: 1.4,
                          transition: 'color 0.15s',
                        }}
                      >
                        {article.title}
                      </Typography>
                      {article.summary && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: '0.8rem', lineHeight: 1.5, mt: 0.25 }}
                        >
                          {article.summary.length > 120 ? article.summary.slice(0, 118) + '…' : article.summary}
                        </Typography>
                      )}
                    </Box>

                    {/* Reading time + difficulty */}
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexShrink: 0 }}>
                      {meta?.primitive && (
                        <Chip
                          label={meta.primitive}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: '0.62rem', fontWeight: 600, height: 20, display: { xs: 'none', md: 'flex' } }}
                        />
                      )}
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontStyle: 'italic', fontSize: '0.75rem', whiteSpace: 'nowrap' }}
                      >
                        {article.readTime}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>

            {partIdx < HANDBOOK_PARTS.length - 1 && <Divider sx={{ mt: { xs: 5, md: 7 } }} />}
          </Box>
        );
      })}

      {/* Bottom CTA */}
      <Paper
        elevation={0}
        sx={{
          mt: 4,
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
          border: '1px solid',
          borderColor: 'primary.100',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" fontWeight={800} gutterBottom>
          Ready to start?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 480, mx: 'auto' }}>
          Begin with the foundations or jump to any section that matches your experience level.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate('/blog/what-is-digital-identity')}
          >
            Start with Article 1
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate('/blog')}
          >
            Browse All Articles
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default FoundationsPage;
