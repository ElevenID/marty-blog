/**
 * Breadcrumbs
 *
 * Renders a breadcrumb trail for article pages with matching
 * JSON-LD structured data for SEO (BreadcrumbList schema).
 */

import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
import { ARTICLE_META, LAYER_LABELS } from '../data/articleMeta';
import { SECTION_BY_SLUG } from '../data';
import { buildBlogTagPath } from '../utils/blogTagRoutes';

const SECTION_LABELS = {
  featured: 'Featured',
  'start-learning': 'Start Here',
  'core-protocol': 'Five Primitives',
  implementation: 'Implementation',
  cryptography: 'Trust & PKI',
  business: 'Governance & Industry',
};

const SECTION_ANCHORS = {
  featured: 'overview',
  'start-learning': 'start-here',
  'core-protocol': 'five-primitives',
  implementation: 'implementation',
  cryptography: 'trust-pki',
  business: 'governance',
};

function Breadcrumbs({ slug, title }) {
  const section = SECTION_BY_SLUG[slug];
  const meta = ARTICLE_META[slug];
  const topicLabel = meta?.topic || null;
  const sectionLabel = topicLabel || SECTION_LABELS[section] || (meta ? (LAYER_LABELS[meta.layer] || meta.layer) : null);
  const sectionAnchor = SECTION_ANCHORS[section] || null;
  const sectionPath = topicLabel
    ? buildBlogTagPath(topicLabel)
    : (sectionAnchor ? `/blog#${sectionAnchor}` : '/blog');

  const crumbs = [
    { label: 'Blog', path: '/blog' },
  ];

  if (sectionLabel) {
    crumbs.push({
      label: sectionLabel,
      path: sectionPath,
    });
  }

  crumbs.push({ label: title, path: null });

  // Inject BreadcrumbList structured data
  useEffect(() => {
    const siteUrl = 'https://elevenidllc.com';
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.label,
        ...(crumb.path ? { item: `${siteUrl}${crumb.path}` } : {}),
      })),
    };

    let el = document.head.querySelector('script[data-seo-breadcrumb="true"]');
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.setAttribute('data-seo-breadcrumb', 'true');
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);

    return () => {
      const existing = document.head.querySelector('script[data-seo-breadcrumb="true"]');
      if (existing) existing.remove();
    };
  });

  return (
    <Box
      component="nav"
      aria-label="Breadcrumb"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        mb: 2,
        flexWrap: 'wrap',
      }}
    >
      {crumbs.map((crumb, idx) => {
        const isLast = idx === crumbs.length - 1;
        return (
          <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {idx > 0 && (
              <NavigateNextIcon sx={{ fontSize: 14, color: 'text.disabled' }} />
            )}
            <Typography
              variant="caption"
              component={crumb.path ? Link : 'span'}
              to={crumb.path || undefined}
              sx={{
                fontSize: '0.75rem',
                fontWeight: isLast ? 600 : 500,
                color: isLast ? 'text.primary' : 'text.secondary',
                cursor: crumb.path ? 'pointer' : 'default',
                maxWidth: isLast ? 280 : 'none',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                '&:hover': crumb.path ? { color: 'primary.main', textDecoration: 'underline' } : {},
              }}
            >
              {crumb.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default Breadcrumbs;