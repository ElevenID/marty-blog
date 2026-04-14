/**
 * Sectioned Article Feed
 *
 * Structured zones: Recent -> Series -> Topic grids.
 * Supports topic-based filtering by user intent.
 */

import { useState, useMemo } from 'react';
import {
  Box, Typography, Grid, Chip, Button, Divider,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BLOG_POST_SUMMARIES } from '../data/blogPostSummaries';
import { BLOG_SERIES, SECTION_BY_SLUG } from '../data';
import { getBrowseVisiblePosts } from '../data/articleBrowseVisibility';
import SeriesBlock from './SeriesBlock';

const TODAY = new Date().toISOString().split('T')[0];

const INITIAL_RECENT_COUNT = 9;
const LOAD_MORE_INCREMENT = 9;

/**
 * Maps intent-based topic filter keys to matching post slugs/sections/categories.
 * A post matches a topic if its SECTION_BY_SLUG assignment, category, or slug keywords match.
 */
const TOPIC_MATCHERS = {
  Concepts: (p) =>
    SECTION_BY_SLUG[p.slug] === 'start-learning' ||
    SECTION_BY_SLUG[p.slug] === 'core-protocol' ||
    p.category === 'Guide',
  Issuance: (p) =>
    p.slug.includes('issu') ||
    p.slug.includes('credential-template') ||
    p.slug.includes('oid4vci') ||
    p.slug.includes('impl-oid4vci'),
  Verification: (p) =>
    p.slug.includes('verif') ||
    p.slug.includes('presentation-polic') ||
    p.slug.includes('oid4vp') ||
    p.slug.includes('impl-oid4vp') ||
    p.slug.includes('offline-verification'),
  PKI: (p) =>
    SECTION_BY_SLUG[p.slug] === 'cryptography' ||
    p.category === 'Cryptography',
  Governance: (p) =>
    p.slug.includes('governance') ||
    p.slug.includes('compliance') ||
    p.slug.includes('cedar') ||
    p.slug.includes('trust-registr') ||
    p.slug.includes('policy'),
  Deployment: (p) =>
    p.slug.includes('deploy') ||
    p.slug.includes('deployment') ||
    p.slug.includes('offline') ||
    SECTION_BY_SLUG[p.slug] === 'business',
};

const SECTION_DEFS = [
  { key: 'core-protocol', title: 'Core Marty Protocol', description: 'The five primitives and how they work together.' },
  { key: 'implementation', title: 'Implementation Guides', description: 'OID4VCI, OID4VP, and transport-level integration.' },
  { key: 'cryptography', title: 'Trust, PKI & Cryptography', description: 'Trust anchors, selective disclosure, and cryptographic foundations.' },
  { key: 'business', title: 'Industry & Business', description: 'Compliance, governance, deployments, and business strategy.' },
];

function SectionedArticleFeed({ navigate, PostCard, FeaturedCard, categoryFilter, searchFilter, topicFilter = 'All', featuredOnly = false, skipFeatured = false }) {
  const [recentCount, setRecentCount] = useState(INITIAL_RECENT_COUNT);

  const allPosts = useMemo(
    () => [...getBrowseVisiblePosts(BLOG_POST_SUMMARIES)].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [],
  );

  // Determine if we need flat filtered view
  const isFiltered = (topicFilter && topicFilter !== 'All') || searchFilter?.trim();

  // --- Filtered mode: flat grid ---
  const filteredPosts = useMemo(() => {
    let posts = allPosts;
    // Topic filter
    if (topicFilter && topicFilter !== 'All' && TOPIC_MATCHERS[topicFilter]) {
      posts = posts.filter(TOPIC_MATCHERS[topicFilter]);
    }
    // Text search
    if (searchFilter?.trim()) {
      const q = searchFilter.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }
    return posts;
  }, [allPosts, topicFilter, searchFilter]);

  if (isFiltered) {
    return (
      <Box>
        <Grid container spacing={3}>
          {filteredPosts.slice(0, recentCount).map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.slug}>
              <PostCard
                post={post}
                onClick={() => navigate(`/blog/${post.slug}`)}
              />
            </Grid>
          ))}
        </Grid>
        {filteredPosts.length > recentCount && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              onClick={() => setRecentCount((c) => c + LOAD_MORE_INCREMENT)}
            >
              Load More Articles
            </Button>
          </Box>
        )}
        {filteredPosts.length === 0 && (
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
            No articles match your filters.
          </Typography>
        )}
      </Box>
    );
  }

  // --- Structured mode ---

  // Featured posts
  const featuredPosts = allPosts.filter(
    (p) => SECTION_BY_SLUG[p.slug] === 'featured',
  );

  // featuredOnly mode: render only the featured card and return
  if (featuredOnly) {
    if (featuredPosts.length === 0) return null;
    return (
      <Box sx={{ mb: 5 }}>
        {featuredPosts.slice(0, 1).map((post) => (
          <FeaturedCard
            key={post.slug}
            post={post}
            onClick={() => navigate(`/blog/${post.slug}`)}
          />
        ))}
      </Box>
    );
  }

  // Section posts
  const postsBySection = {};
  for (const def of SECTION_DEFS) {
    postsBySection[def.key] = allPosts.filter(
      (p) => SECTION_BY_SLUG[p.slug] === def.key,
    );
  }

  // Recent = everything not already featured, sorted by date, published only
  const featuredSlugs = new Set(featuredPosts.map((p) => p.slug));
  const recentPosts = allPosts.filter((p) => !featuredSlugs.has(p.slug));

  return (
    <Box>
      {/* Featured (skip if already rendered above in featuredOnly mode) */}
      {!skipFeatured && featuredPosts.length > 0 && (
        <Box sx={{ mb: 5 }}>
          {featuredPosts.slice(0, 1).map((post) => (
            <FeaturedCard
              key={post.slug}
              post={post}
              onClick={() => navigate(`/blog/${post.slug}`)}
            />
          ))}
        </Box>
      )}

      {/* Recent chronological feed first (moved up per IA improvement) */}
      <Divider sx={{ mb: 4 }}>
        <Chip label="Recent Articles" size="small" sx={{ fontWeight: 600 }} />
      </Divider>

      <Grid container spacing={3}>
        {recentPosts.slice(0, recentCount).map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.slug}>
            <PostCard
              post={post}
              onClick={() => navigate(`/blog/${post.slug}`)}
            />
          </Grid>
        ))}
      </Grid>

      {recentPosts.length > recentCount && (
        <Box sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
          <Button
            variant="outlined"
            onClick={() => setRecentCount((c) => c + LOAD_MORE_INCREMENT)}
          >
            Load More Articles
          </Button>
        </Box>
      )}

      <Divider sx={{ my: 4 }} />

      {/* Series Blocks */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" fontWeight={800} sx={{ mb: 3 }}>
          Article Series
        </Typography>
        {BLOG_SERIES.map((series) => (
          <SeriesBlock key={series.id} series={series} navigate={navigate} />
        ))}
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Section grids */}
      {SECTION_DEFS.map((def) => {
        const sectionPosts = postsBySection[def.key];
        if (!sectionPosts || sectionPosts.length === 0) return null;
        return (
          <Box key={def.key} id={`section-${def.key}`} sx={{ mb: 6 }}>
            <Typography variant="h6" fontWeight={800} gutterBottom>
              {def.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {def.description}
            </Typography>
            <Grid container spacing={2}>
              {sectionPosts.slice(0, 3).map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.slug}>
                  <PostCard
                    post={post}
                    onClick={() => navigate(`/blog/${post.slug}`)}
                  />
                </Grid>
              ))}
            </Grid>
            {sectionPosts.length > 3 && (
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Button size="small" endIcon={<ArrowForwardIcon />}>
                  View all {sectionPosts.length} {def.title.toLowerCase()} articles
                </Button>
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
}

export default SectionedArticleFeed;