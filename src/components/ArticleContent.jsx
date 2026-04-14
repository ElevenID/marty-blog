/**
 * Article Content Renderer
 *
 * Renders post content blocks with support for:
 *   - heading (with anchor ids)
 *   - paragraph (with inline protocol cross-links)
 *   - code (syntax-highlighted code blocks)
 *   - resources (repo-backed external links)
 *
 * Protocol cross-links automatically detect references to protocol primitives,
 * series titles, and key concepts, turning them into clickable links to
 * their canonical articles.
 */

import { Fragment } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { headingToId } from './ArticleTableOfContents';

/**
 * Protocol terms -> canonical article slugs.
 * Ordered longest-first so "Presentation Policies" matches before "Policies".
 */
const PROTOCOL_TERMS = [
  { term: 'Presentation Policies', slug: 'presentation-policies-minimum-disclosure' },
  { term: 'Credential Templates', slug: 'credential-templates-designing-what-gets-issued' },
  { term: 'Deployment Profiles', slug: 'deployment-profiles-from-design-to-production' },
  { term: 'Trust Profiles', slug: 'trust-profiles-explained' },
  { term: 'Trust Profile', slug: 'trust-profiles-explained' },
  { term: 'Credential Template', slug: 'credential-templates-designing-what-gets-issued' },
  { term: 'Presentation Policy', slug: 'presentation-policies-minimum-disclosure' },
  { term: 'Deployment Profile', slug: 'deployment-profiles-from-design-to-production' },
  { term: 'Verifiable Credentials', slug: 'verifiable-credentials-explained' },
  { term: 'Verifiable Credential', slug: 'verifiable-credentials-explained' },
  { term: 'Selective Disclosure', slug: 'selective-disclosure' },
  { term: 'Trust Anchors', slug: 'understanding-trust-anchors' },
  { term: 'Trust Anchor', slug: 'understanding-trust-anchors' },
  { term: 'OID4VCI', slug: 'impl-oid4vci' },
  { term: 'OID4VP', slug: 'impl-oid4vp' },
  { term: 'OpenID4VCI', slug: 'impl-oid4vci' },
  { term: 'OpenID4VP', slug: 'impl-oid4vp' },
  { term: 'Compliance Profiles', slug: 'compliance-profiles-bridging-regulation' },
  { term: 'Compliance Profile', slug: 'compliance-profiles-bridging-regulation' },
  { term: 'Trust Registries', slug: 'building-trust-registries-at-scale' },
  { term: 'Trust Registry', slug: 'building-trust-registries-at-scale' },
  { term: 'Zero-Knowledge Predicates', slug: 'zero-knowledge-predicates-identity' },
  { term: 'SD-JWT', slug: 'sd-jwt-selective-disclosure-deep-dive' },
];

/**
 * Build a regex that matches any protocol term (case-sensitive, whole-word).
 */
const TERM_REGEX = new RegExp(
  `(${PROTOCOL_TERMS.map((t) => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
  'g',
);

/**
 * Split text into segments: plain strings and { term, slug } link objects.
 * Each term is only linked once per paragraph to avoid over-linking.
 */
function splitWithLinks(text, currentSlug) {
  const linked = new Set();
  const parts = [];
  let lastIndex = 0;

  // Reset regex state
  TERM_REGEX.lastIndex = 0;
  let match;

  while ((match = TERM_REGEX.exec(text)) !== null) {
    const matchedTerm = match[1];
    const entry = PROTOCOL_TERMS.find((t) => t.term === matchedTerm);
    if (!entry || entry.slug === currentSlug || linked.has(entry.slug)) {
      continue;
    }

    // Add plain text before this match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push({ term: matchedTerm, slug: entry.slug });
    linked.add(entry.slug);
    lastIndex = match.index + matchedTerm.length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

/**
 * Renders a paragraph with protocol cross-links.
 */
function LinkedParagraph({ text, currentSlug }) {
  const parts = splitWithLinks(text, currentSlug);

  return (
    <Typography variant="body1" paragraph sx={{ lineHeight: 1.85, fontSize: '1.05rem' }}>
      {parts.map((part, i) => {
        if (typeof part === 'string') {
          return <Fragment key={i}>{part}</Fragment>;
        }
        return (
          <Box
            key={i}
            component={Link}
            to={`/blog/${part.slug}`}
            sx={{
              display: 'inline',
              color: 'primary.main',
              fontWeight: 600,
              textDecoration: 'none',
              borderBottom: '1px dotted',
              borderColor: 'primary.light',
              transition: 'color 0.15s, border-color 0.15s',
              '&:hover': { color: 'primary.dark', borderColor: 'primary.main' },
            }}
          >
            {part.term}
          </Box>
        );
      })}
    </Typography>
  );
}

/**
 * Renders a code block with syntax label.
 */
function CodeBlock({ block }) {
  return (
    <Paper
      elevation={0}
      sx={{
        my: 3,
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      {/* Language / label header */}
      {(block.lang || block.label) && (
        <Box
          sx={{
            px: 2,
            py: 0.75,
            bgcolor: 'grey.100',
            borderBottom: '1px solid',
            borderColor: 'grey.200',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          {block.lang && (
            <Typography
              variant="caption"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                color: 'text.secondary',
              }}
            >
              {block.lang}
            </Typography>
          )}
          {block.label && (
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
              {block.label}
            </Typography>
          )}
        </Box>
      )}

      {/* Code body */}
      <Box
        component="pre"
        sx={{
          m: 0,
          p: 2.5,
          bgcolor: '#1e1e2e',
          color: '#cdd6f4',
          overflowX: 'auto',
          fontFamily: '"SF Mono", "Fira Code", "Fira Mono", Menlo, Consolas, monospace',
          fontSize: '0.85rem',
          lineHeight: 1.65,
          '&::-webkit-scrollbar': { height: 6 },
          '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(255,255,255,0.15)', borderRadius: 3 },
        }}
      >
        <code>{block.code}</code>
      </Box>
    </Paper>
  );
}

function ResourceList({ block }) {
  return (
    <Paper
      elevation={0}
      sx={{
        my: 3,
        p: 2.5,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'primary.100',
        bgcolor: 'grey.50',
      }}
    >
      {block.title && (
        <Typography
          variant="overline"
          sx={{ display: 'block', mb: 1, fontWeight: 800, letterSpacing: 1.4, fontSize: '0.65rem', color: 'primary.main' }}
        >
          {block.title}
        </Typography>
      )}
      {block.intro && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
          {block.intro}
        </Typography>
      )}
      <Box sx={{ display: 'grid', gap: 1.5 }}>
        {block.items.map((item) => (
          <Box key={item.href}>
            <Typography
              component="a"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                color: 'primary.main',
                fontWeight: 700,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              {item.label}
            </Typography>
            {item.note && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.35, lineHeight: 1.6 }}>
                {item.note}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

/**
 * Main content renderer - replaces inline rendering in BlogPostPage.
 */
function ArticleContent({ content, currentSlug }) {
  return (
    <>
      {content.map((block, idx) => {
        if (block.type === 'heading') {
          return (
            <Typography
              key={idx}
              id={headingToId(block.text)}
              variant="h5"
              fontWeight={700}
              sx={{ mt: 4, mb: 2, scrollMarginTop: '80px' }}
            >
              {block.text}
            </Typography>
          );
        }

        if (block.type === 'code') {
          return <CodeBlock key={idx} block={block} />;
        }

        if (block.type === 'resources') {
          return <ResourceList key={idx} block={block} />;
        }

        // Default: paragraph with protocol cross-links
        return (
          <LinkedParagraph
            key={idx}
            text={block.text}
            currentSlug={currentSlug}
          />
        );
      })}
    </>
  );
}

export default ArticleContent;