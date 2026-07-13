// Guide article card
// Protocol guide section
// Post card
/**
 * Blog Page
 *
 * Section-per-nav-item layout with sticky sub-navigation.
 * Sections: Overview -> Start Here -> Five Primitives -> Implementation
 *           -> Trust & PKI -> Privacy & Disclosure -> Deployment Patterns
 *           -> Governance & Trust Infrastructure -> Latest
 * Each curated section draws from distinct series - no duplicate exposure.
 */

import { useState, useCallback, useEffect, useMemo } from 'react';
import {
  Box, Typography, Card, CardContent, CardActionArea, Grid, Chip,
  Avatar, Button, Divider, useMediaQuery, useTheme,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SEOHead } from '../seo';
import { collectionPageSchema } from '../seo/structuredData';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { BLOG_AUTHORS } from '../data';
import { BLOG_POST_SUMMARIES } from '../data/blogPostSummaries';
import {
  GUIDE_ARTICLES,
  GUIDE_CHAPTERS,
  GUIDE_ARTICLES_BY_CHAPTER,
} from '../data';
import {
  BLOG_POST_CONCEPT_TAGS,
  BLOG_POST_STANDARDS_TAGS,
  SERIES_BY_POST_SLUG,
  BLOG_SERIES,
  SECTION_BY_SLUG,
} from '../data';
import { ARTICLE_BROWSE_TOPICS_BY_SLUG } from '../data/articleBrowseContext';
import { getBrowseVisiblePosts, isBrowseVisibleArticleSlug } from '../data/articleMeta';
import {
  buildCanonicalBlogTagPath,
  buildBlogTagPath,
  decodeBlogTagParam,
  findMatchingTagLabel,
  normalizeTag,
} from '../utils/blogTagRoutes';
import HeroSection from './HeroSection';
import StartHereSection from './StartHereSection';
import ProtocolDiagramSection from './ProtocolDiagramSection';
import BlogSubNav from './BlogSubNav';
import SystemMap from './SystemMap';

const TODAY = new Date().toISOString().split('T')[0];
const SCROLL_MT = { scrollMarginTop: '56px' };

// Section spacing - generous breathing room between sections (Stripe / Vercel pattern)
const SECTION_SPACING = { pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 12 } };

/**
 * Determine card type label based on section assignment and series.
 * Returns: 'Core Primitive' | 'Guide' | 'Concept' | null
 */
function getCardType(slug, sectionBySlug, seriesByPostSlug) {
  const section = sectionBySlug[slug];
  const series = seriesByPostSlug[slug];
  if (section === 'core-protocol' || series?.seriesId === 'five-primitives') return 'Core Primitive';
  if (section === 'implementation' || series?.seriesId === 'implementations') return 'Guide';
  if (section === 'start-learning') return 'Concept';
  if (series?.seriesId === 'deployments') return 'Guide';
  if (series?.seriesId === 'pki-for-identity') return 'Guide';
  if (series?.seriesId === 'privacy-and-disclosure') return 'Guide';
  if (series?.seriesId === 'governance' || series?.seriesId === 'wallets') return 'Guide';
  return null;
}

const CARD_TYPE_STYLES = {
  'Core Primitive': {
    borderLeft: '4px solid',
    borderLeftColor: '#1565c0',
    bgcolor: 'rgba(21, 101, 192, 0.03)',
    chipColor: 'primary',
  },
  Guide: {
    borderLeft: '4px solid',
    borderLeftColor: '#7b1fa2',
    bgcolor: 'transparent',
    chipColor: 'secondary',
  },
  Concept: {
    borderLeft: '4px solid',
    borderLeftColor: '#2e7d32',
    bgcolor: 'transparent',
    chipColor: 'success',
  },
};

/**
 * Compute total reading minutes from an array of posts.
 */
function computeReadingTime(posts) {
  return posts.reduce((sum, p) => {
    const match = p.readTime?.match(/(\d+)/);
    return sum + (match ? parseInt(match[1], 10) : 0);
  }, 0);
}

function matchesSearchFields(query, fields) {
  return fields.some((field) => field?.toLowerCase().includes(query));
}

function matchesTag(tag, values) {
  const normalizedTag = normalizeTag(tag);
  return values.some((value) => normalizeTag(value) === normalizedTag);
}

function getPostTagValues(post) {
  const topic = ARTICLE_BROWSE_TOPICS_BY_SLUG[post.slug];

  return [
    ...new Set([
      ...(BLOG_POST_STANDARDS_TAGS[post.slug] || []),
      ...(BLOG_POST_CONCEPT_TAGS[post.slug] || []),
      ...(topic ? [topic] : []),
    ]),
  ];
}

function getGuideTagValues(article, chapterById) {
  const chapterTitle = chapterById[article.chapterId]?.title || null;

  return [
    ...new Set([
      ...(article.conceptTags || []),
      ...(chapterTitle ? [chapterTitle] : []),
    ]),
  ];
}

function postMatchesTag(post, tag) {
  return matchesTag(tag, getPostTagValues(post));
}

function guideMatchesTag(article, chapterById, tag) {
  return matchesTag(tag, getGuideTagValues(article, chapterById));
}

export function buildSearchResults(query, posts, guideArticles, guideChapters) {
  if (!query.trim()) return null;

  const normalizedQuery = query.toLowerCase();
  const chapterById = Object.fromEntries(guideChapters.map((chapter) => [chapter.id, chapter]));

  const postResults = posts
    .filter((post) => matchesSearchFields(normalizedQuery, [post.title, post.summary, post.category]))
    .map((post) => ({
      kind: 'post',
      slug: post.slug,
      item: post,
    }));

  const visiblePostSlugs = new Set(postResults.map((result) => result.slug));

  const guideResults = guideArticles
    .filter((article) => !visiblePostSlugs.has(article.slug))
    .filter((article) => {
      const chapter = chapterById[article.chapterId];
      return matchesSearchFields(normalizedQuery, [
        article.title,
        article.summary,
        chapter?.title,
        ...(article.conceptTags || []),
      ]);
    })
    .map((article) => ({
      kind: 'guide',
      slug: article.slug,
      item: article,
      chapterTitle: chapterById[article.chapterId]?.title || null,
    }));

  return [...postResults, ...guideResults];
}

export function buildTagResults(tag, posts, guideArticles, guideChapters) {
  if (!tag.trim()) return null;

  const chapterById = Object.fromEntries(guideChapters.map((chapter) => [chapter.id, chapter]));

  const postResults = posts
    .filter((post) => postMatchesTag(post, tag))
    .map((post) => ({
      kind: 'post',
      slug: post.slug,
      item: post,
    }));

  const visiblePostSlugs = new Set(postResults.map((result) => result.slug));

  const guideResults = guideArticles
    .filter((article) => !visiblePostSlugs.has(article.slug))
    .filter((article) => guideMatchesTag(article, chapterById, tag))
    .map((article) => ({
      kind: 'guide',
      slug: article.slug,
      item: article,
      chapterTitle: chapterById[article.chapterId]?.title || null,
    }));

  return [...postResults, ...guideResults];
}

function buildBrowseTagOptions(posts, guideArticles, guideChapters) {
  const chapterById = Object.fromEntries(guideChapters.map((chapter) => [chapter.id, chapter]));
  const counts = new Map();

  const addTag = (tag) => {
    if (!tag) return;
    counts.set(tag, (counts.get(tag) || 0) + 1);
  };

  posts.forEach((post) => {
    getPostTagValues(post).forEach(addTag);
  });

  guideArticles.forEach((article) => {
    getGuideTagValues(article, chapterById).forEach(addTag);
  });

  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

function resultMatchesTag(result, tag, chapterById) {
  if (result.kind === 'post') {
    return postMatchesTag(result.item, tag);
  }

  return guideMatchesTag(result.item, chapterById, tag);
}

// Sidebar rail items for sticky left navigation
const RAIL_ITEMS = [
  { id: 'start-here', verb: 'Learn', label: 'Start Here' },
  { id: 'system-map', verb: 'Map', label: 'System Map' },
  { id: 'five-primitives', verb: 'Protocol', label: 'Five Primitives' },
  { id: 'implementation', verb: 'Build', label: 'Implementation' },
  { id: 'trust-pki', verb: 'Security', label: 'Trust & PKI' },
  { id: 'deployment', verb: 'Deploy', label: 'Deployment Patterns' },
  { id: 'governance', verb: 'Govern', label: 'Governance' },
  { id: 'latest', verb: 'Archive', label: 'Latest' },
];

/**
 * Map each nav section to the series it displays.
 * No series appears in two sections -> no duplicate articles.
 */
const SECTION_SERIES = {
  'five-primitives': ['five-primitives'],
  implementation: ['implementations'],
  'trust-pki': ['pki-for-identity'],
  'privacy-disclosure': ['privacy-and-disclosure'],
  deployment: ['deployments'],
  governance: ['governance', 'wallets'],
};

const SECTION_INDEX_ITEMS = [
  { verb: 'Learn', label: 'Start Here', target: 'start-here' },
  { verb: 'Map', label: 'System Map', target: 'system-map' },
  { verb: 'Understand', label: 'Five Primitives', target: 'five-primitives' },
  { verb: 'Build', label: 'Implementation', target: 'implementation' },
  { verb: 'Secure', label: 'PKI & Trust', target: 'trust-pki' },
  { verb: 'Deploy', label: 'Deployment Patterns', target: 'deployment' },
  { verb: 'Govern', label: 'Governance', target: 'governance' },
];

const CATEGORY_COLORS = {
  Announcement: 'primary',
  Technical: 'info',
  Business: 'success',
  Cryptography: 'warning',
  Guide: 'secondary',
};

// Guide article card

function GuideArticleCard({ article }) {
  return (
    <Card
      elevation={1}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        transition: 'all 0.18s ease',
        '&:hover': { transform: 'translateY(-3px)', boxShadow: 5 },
      }}
    >
      <CardActionArea
        component={Link}
        to={`/blog/${article.slug}`}
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
      >
        <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
          <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ lineHeight: 1.35 }}>
            {article.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.55, fontSize: '0.8rem' }}
          >
            {article.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function GuideSearchCard({ article, chapterTitle }) {
  return (
    <Card
      elevation={1}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'grey.200',
        borderLeft: '4px solid',
        borderLeftColor: '#7b1fa2',
        transition: 'all 0.18s ease',
        '&:hover': { transform: 'translateY(-3px)', boxShadow: 5 },
      }}
    >
      <CardActionArea
        component={Link}
        to={`/blog/${article.slug}`}
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
      >
        <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
          <Box sx={{ display: 'flex', gap: 0.75, mb: 2, flexWrap: 'wrap' }}>
            <Chip label="Guide" size="small" color="secondary" sx={{ fontWeight: 700, fontSize: '0.68rem' }} />
            {chapterTitle && (
              <Chip label={chapterTitle} size="small" variant="outlined" sx={{ fontWeight: 600, fontSize: '0.68rem' }} />
            )}
            <Chip label={article.readTime} size="small" variant="outlined" sx={{ fontWeight: 600, fontSize: '0.68rem' }} />
          </Box>
          <Typography variant="h6" fontWeight={700} gutterBottom sx={{ lineHeight: 1.35, fontSize: '1.05rem' }}>
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.84rem' }}>
            {article.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function TagFilterBar({ availableTags, activeTag }) {
  if (!availableTags.length && !activeTag) return null;

  const normalizedActiveTag = normalizeTag(activeTag);
  const visibleTags = normalizedActiveTag && !availableTags.some(({ tag }) => normalizeTag(tag) === normalizedActiveTag)
    ? [{ tag: activeTag, count: 0 }, ...availableTags]
    : availableTags;

  return (
    <Box
      sx={{
        mb: 3,
        p: 2.5,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'grey.200',
        bgcolor: 'grey.50',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, flexWrap: 'wrap', mb: 1 }}>
        <Typography
          variant="overline"
          sx={{ fontWeight: 800, letterSpacing: 1.5, fontSize: '0.65rem', color: 'text.disabled' }}
        >
          Filter by Tag
        </Typography>
        {activeTag && (
          <Button component={Link} to="/blog" size="small" sx={{ ml: 'auto', fontWeight: 700 }}>
            Clear filter
          </Button>
        )}
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
        Jump straight to a protocol, standard, or topic without paging through the full archive.
      </Typography>
      <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
        <Chip
          label="All topics"
          clickable
          component={Link}
          to="/blog"
          color={!activeTag ? 'primary' : 'default'}
          variant={!activeTag ? 'filled' : 'outlined'}
          sx={{ fontWeight: 700 }}
        />
        {visibleTags.map(({ tag, count }) => (
          <Chip
            key={tag}
            label={count ? `${tag} (${count})` : tag}
            clickable
            component={Link}
            to={buildBlogTagPath(tag)}
            color={normalizeTag(tag) === normalizedActiveTag ? 'primary' : 'default'}
            variant={normalizeTag(tag) === normalizedActiveTag ? 'filled' : 'outlined'}
            sx={{ fontWeight: 600 }}
          />
        ))}
      </Box>
    </Box>
  );
}

// Protocol guide section

function ProtocolGuideSection() {
  const [activeChapter, setActiveChapter] = useState(1);
  const chapterArticles = GUIDE_ARTICLES_BY_CHAPTER[activeChapter] || [];

  return (
    <Box
      sx={{
        mb: 4,
        p: { xs: 3, md: 4 },
        borderRadius: 3,
        background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
        border: '1px solid',
        borderColor: 'primary.100',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
        <SchoolIcon color="primary" />
        <Typography variant="h6" fontWeight={800} color="primary.dark">
          Structured Guide
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, ml: 4.5 }}>
        Six chapters of progressive learning - pick up where your series knowledge leaves off.
      </Typography>

      {/* Chapter selector chips */}
      <Box sx={{ display: 'flex', gap: 0.75, mb: 3, flexWrap: 'wrap' }}>
        {GUIDE_CHAPTERS.map((ch) => (
          <Chip
            key={ch.id}
            label={`${ch.id}. ${ch.title}`}
            clickable
            color={activeChapter === ch.id ? 'primary' : 'default'}
            variant={activeChapter === ch.id ? 'filled' : 'outlined'}
            onClick={() => setActiveChapter(ch.id)}
            sx={{
              fontWeight: activeChapter === ch.id ? 700 : 500,
              bgcolor: activeChapter === ch.id ? undefined : 'background.paper',
            }}
          />
        ))}
      </Box>

      {/* Guide article cards for selected chapter */}
      <Grid container spacing={2}>
        {chapterArticles.map((article) => (
          <Grid item xs={12} sm={6} md={3} key={article.slug}>
            <GuideArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// Post card

function PostCard({ post, featured = false }) {
  const author = BLOG_AUTHORS[post.authorId] || {};
  const isFuture = post.date > TODAY;
  const dateStr = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const updatedStr = post.updatedDate
    ? new Date(post.updatedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : null;
  const seriesInfo = SERIES_BY_POST_SLUG[post.slug];
  const standardsTags = BLOG_POST_STANDARDS_TAGS[post.slug] || [];
  const cardType = getCardType(post.slug, SECTION_BY_SLUG, SERIES_BY_POST_SLUG);
  const typeStyle = cardType ? CARD_TYPE_STYLES[cardType] : null;
  // Featured: editorial spotlight treatment
  // Featured: editorial spotlight treatment
  if (featured) {
    return (
      <Box
        component={Link}
        to={`/blog/${post.slug}`}
        sx={{
          mb: 6,
          p: { xs: 4, md: 6 },
          borderRadius: 3,
          background: 'linear-gradient(135deg, #0D1B2A 0%, #1B2838 50%, #1a237e 100%)',
          color: 'common.white',
          cursor: 'pointer',
          display: 'block',
          textDecoration: 'none',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': { transform: 'translateY(-2px)', boxShadow: 12 },
        }}
      >
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            mb: 2,
            fontWeight: 800,
            letterSpacing: 2,
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          Featured
        </Typography>
        <Typography
          variant="h3"
          fontWeight={900}
          sx={{
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          {post.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: 640,
            lineHeight: 1.8,
            mb: 4,
            opacity: 0.85,
            fontSize: { xs: '1rem', md: '1.1rem' },
          }}
        >
          {post.summary}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar src={author.avatarImage} sx={{ width: 36, height: 36, bgcolor: 'primary.light', fontSize: '0.8rem' }}>{author.avatar}</Avatar>
            <Box>
              <Typography variant="body2" fontWeight={600} sx={{ color: 'common.white' }}>{author.name}</Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                {dateStr} | {post.readTime}
              </Typography>
            </Box>
          </Box>
          <Box
            component="span"
            sx={{
              ml: 'auto',
              px: 2,
              py: 1,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: 999,
              fontWeight: 700,
              color: 'common.white',
            }}
          >
            <Typography component="span" variant="body2" sx={{ color: 'inherit', fontWeight: 700 }}>
              Read article
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: '1rem' }} />
          </Box>
        </Box>
      </Box>
    );
  }
  // Standard card with card-type differentiation
  // Standard card with card-type differentiation
  // Section article grid
  return (
    <Card
      elevation={1}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'grey.200',
        transition: 'all 0.2s',
        '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
        ...(typeStyle ? {
          borderLeft: typeStyle.borderLeft,
          borderLeftColor: typeStyle.borderLeftColor,
          bgcolor: typeStyle.bgcolor,
        } : {}),
      }}
    >
      <CardActionArea
        component={Link}
        to={`/blog/${post.slug}`}
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
      >
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ display: 'flex', gap: 0.75, mb: 2, flexWrap: 'wrap' }}>
            {cardType && (
              <Chip
                label={cardType}
                size="small"
                color={typeStyle?.chipColor || 'default'}
                sx={{ fontWeight: 700, fontSize: '0.68rem' }}
              />
            )}
            <Chip label={post.category} size="small" color={CATEGORY_COLORS[post.category] || 'default'} variant="outlined" sx={{ fontWeight: 600 }} />
            {seriesInfo && <Chip label={seriesInfo.seriesTitle} size="small" variant="outlined" sx={{ fontSize: '0.7rem', fontWeight: 600 }} />}
            {standardsTags.map((tag) => (
              <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ fontFamily: 'monospace', fontSize: '0.65rem', fontWeight: 600, borderColor: 'info.main', color: 'info.main' }} />
            ))}
            {isFuture && <Chip label="Update Pending" size="small" sx={{ bgcolor: 'warning.50', color: 'warning.dark', fontWeight: 600, fontSize: '0.68rem' }} />}
          </Box>
          <Typography variant="h6" fontWeight={700} gutterBottom sx={{ lineHeight: 1.35, fontSize: '1.15rem' }}>
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.65, fontSize: '0.875rem' }}>
            {post.summary}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar src={author.avatarImage} sx={{ width: 26, height: 26, fontSize: '0.7rem', bgcolor: 'primary.main' }}>{author.avatar || '?'}</Avatar>
              <Typography variant="caption" color="text.secondary" noWrap sx={{ fontSize: '0.75rem' }}>
                {author.name || post.authorId} | {dateStr}{updatedStr ? ` | Upd. ${updatedStr}` : ''}
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ flexShrink: 0, fontStyle: 'italic', fontSize: '0.75rem' }}>
              {post.readTime}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// Section article grid

function SectionArticleGrid({ title, description, posts }) {
  if (!posts.length) return null;
  const totalMinutes = computeReadingTime(posts);
  return (
    <Box sx={{ mb: 5 }}>
      {title && (
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, flexWrap: 'wrap' }}>
            <Typography
              variant="h4"
              fontWeight={800}
              sx={{ fontSize: { xs: '1.5rem', md: '1.85rem' }, lineHeight: 1.3 }}
            >
              {title}
            </Typography>
            <Chip
              label={`${posts.length} article${posts.length !== 1 ? 's' : ''} | ~${totalMinutes} min`}
              size="small"
              variant="outlined"
              sx={{ fontWeight: 700, fontSize: '0.72rem', borderColor: 'grey.400' }}
            />
          </Box>
          {description && (
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1, maxWidth: 600, lineHeight: 1.7, fontSize: '1rem' }}>
              {description}
            </Typography>
          )}
        </Box>
      )}
      <Grid container spacing={2.5}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.slug}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// Latest feed
// Latest feed

function LatestFeed({ articles }) {
  const [count, setCount] = useState(9);
  return (
    <Box sx={{ mb: 6 }}>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 1 }}>
        <Typography variant="h4" fontWeight={800} sx={{ fontSize: { xs: '1.5rem', md: '1.85rem' } }}>
          Latest
        </Typography>
        <Chip
          label={`${articles.length} articles`}
          size="small"
          variant="outlined"
          sx={{ fontWeight: 700, fontSize: '0.72rem', borderColor: 'grey.400' }}
        />
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1rem' }}>
        All articles in reverse-chronological order.
      </Typography>
      <Grid container spacing={2.5}>
        {articles.slice(0, count).map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.slug}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
      {articles.length > count && (
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button variant="outlined" onClick={() => setCount((c) => c + 9)}>
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
}

// Blog page

// Sticky sidebar rail - appears on desktop, hidden on mobile
function SectionRail({ activeSection }) {
  return (
    <Box
      component="nav"
      aria-label="Section navigation"
      sx={{
        display: { xs: 'none', lg: 'block' },
        position: 'sticky',
        top: 72,
        alignSelf: 'flex-start',
        width: 200,
        flexShrink: 0,
        pr: 3,
      }}
    >
      {RAIL_ITEMS.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <Box
            key={item.id}
            component="a"
            href={`#${item.id}`}
            aria-current={isActive ? 'location' : undefined}
            sx={{
              display: 'block',
              cursor: 'pointer',
              py: 1,
              pl: 2,
              color: 'inherit',
              borderLeft: '2px solid',
              borderColor: isActive ? 'primary.main' : 'grey.200',
              textDecoration: 'none',
              transition: 'all 0.15s',
              '&:hover': { borderColor: 'primary.light' },
            }}
          >
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: 1,
                fontSize: '0.6rem',
                color: isActive ? 'primary.main' : 'text.disabled',
                mb: 0.25,
              }}
            >
              {item.verb}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: isActive ? 700 : 500,
                fontSize: '0.82rem',
                color: isActive ? 'text.primary' : 'text.secondary',
                lineHeight: 1.3,
              }}
            >
              {item.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

function BlogPage() {
  const navigate = useNavigate();
  const { tag: tagParam } = useParams();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [activeRailSection, setActiveRailSection] = useState('start-here');
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const rawActiveTag = decodeBlogTagParam(tagParam) || normalizeTag(searchParams.get('tag') || '');
  const guideChapterById = useMemo(
    () => Object.fromEntries(GUIDE_CHAPTERS.map((chapter) => [chapter.id, chapter])),
    [],
  );

  // Rail scroll-spy observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveRailSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -70% 0px' },
    );
    const timer = setTimeout(() => {
      RAIL_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 200);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Resolve series slugs -> post objects
  const getSeriesArticles = useCallback((seriesIds) => {
    return seriesIds.flatMap((id) => {
      const series = BLOG_SERIES.find((s) => s.id === id);
      return series
        ? series.slugs
          .map((slug) => BLOG_POST_SUMMARIES.find((p) => p.slug === slug))
          .filter((post) => post && isBrowseVisibleArticleSlug(post.slug))
        : [];
    });
  }, []);

  const featuredPost = useMemo(
    () => getBrowseVisiblePosts(BLOG_POST_SUMMARIES).find((p) => SECTION_BY_SLUG[p.slug] === 'featured'),
    [],
  );

  const fivePrimitivesArticles = useMemo(() => getSeriesArticles(SECTION_SERIES['five-primitives']), [getSeriesArticles]);
  const implementationArticles = useMemo(() => getSeriesArticles(SECTION_SERIES.implementation), [getSeriesArticles]);
  const trustPkiArticles = useMemo(() => getSeriesArticles(SECTION_SERIES['trust-pki']), [getSeriesArticles]);
  const privacyDisclosureArticles = useMemo(() => getSeriesArticles(SECTION_SERIES['privacy-disclosure']), [getSeriesArticles]);
  const deploymentArticles = useMemo(() => getSeriesArticles(SECTION_SERIES.deployment), [getSeriesArticles]);
  const governanceArticles = useMemo(() => getSeriesArticles(SECTION_SERIES.governance), [getSeriesArticles]);

  const latestArticles = useMemo(
    () => [...getBrowseVisiblePosts(BLOG_POST_SUMMARIES)].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [],
  );

  // Search mode: flat filtered results
  const searchResults = useMemo(() => {
    return buildSearchResults(search, latestArticles, GUIDE_ARTICLES, GUIDE_CHAPTERS);
  }, [search, latestArticles]);

  const tagResults = useMemo(() => {
    return rawActiveTag ? buildTagResults(rawActiveTag, latestArticles, GUIDE_ARTICLES, GUIDE_CHAPTERS) : null;
  }, [rawActiveTag, latestArticles]);

  const allTagOptions = useMemo(() => {
    return buildBrowseTagOptions(latestArticles, GUIDE_ARTICLES, GUIDE_CHAPTERS);
  }, [latestArticles]);

  const browseTagOptions = useMemo(() => allTagOptions.slice(0, 14), [allTagOptions]);

  const activeTag = useMemo(() => {
    return findMatchingTagLabel(rawActiveTag, allTagOptions.map(({ tag }) => tag)) || rawActiveTag;
  }, [allTagOptions, rawActiveTag]);
  const canonicalTagPath = useMemo(() => {
    return activeTag ? buildCanonicalBlogTagPath(activeTag, allTagOptions.map(({ tag }) => tag)) : '/blog';
  }, [activeTag, allTagOptions]);

  useEffect(() => {
    if (!tagParam || !activeTag) {
      return;
    }

    const canonicalParam = canonicalTagPath.replace('/blog/tag/', '');
    if (tagParam !== canonicalParam) {
      navigate(canonicalTagPath, { replace: true });
    }
  }, [activeTag, canonicalTagPath, navigate, tagParam]);

  const flatResults = useMemo(() => {
    if (searchResults) {
      return activeTag
        ? searchResults.filter((result) => resultMatchesTag(result, activeTag, guideChapterById))
        : searchResults;
    }

    return tagResults;
  }, [activeTag, guideChapterById, searchResults, tagResults]);

  // Publishable implementation articles for reading time
  const implPublished = implementationArticles;
  const implMinutes = computeReadingTime(implPublished);
  const isSearchMode = Boolean(searchResults);
  const seoTitle = !isSearchMode && activeTag
    ? `${activeTag} Articles - Marty Identity Protocol Blog`
    : 'Blog - Marty Identity Protocol';
  const seoDescription = !isSearchMode && activeTag
    ? `${flatResults?.length || 0} Marty Identity Protocol articles and guide chapters tagged ${activeTag}.`
    : 'Concepts, standards, and implementation guides for verifiable identity systems.';
  const seoCanonicalPath = !isSearchMode && activeTag ? canonicalTagPath : '/blog';
  const seoStructuredData = useMemo(() => {
    if (!isSearchMode && activeTag) {
      return collectionPageSchema({
        name: `${activeTag} Articles`,
        description: seoDescription,
        url: `https://elevenidllc.com${canonicalTagPath}`,
        items: (flatResults || []).slice(0, 24).map((result) => ({
          name: result.item.title,
          url: `https://elevenidllc.com/blog/${result.slug}`,
        })),
      });
    }

    return collectionPageSchema({
      name: 'Marty Identity Protocol Blog',
      description: 'Concepts, standards, and implementation guides for verifiable identity systems.',
      url: 'https://elevenidllc.com/blog',
      items: latestArticles.slice(0, 24).map((post) => ({
        name: post.title,
        url: `https://elevenidllc.com/blog/${post.slug}`,
      })),
    });
  }, [activeTag, canonicalTagPath, flatResults, isSearchMode, latestArticles, seoDescription]);

  return (
    <Box>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalPath={seoCanonicalPath}
        keywords={activeTag
          ? ['MIP blog', activeTag, 'identity protocol', 'verifiable credentials']
          : ['MIP blog', 'identity protocol', 'open standard', 'verifiable credentials', 'digital identity']}
        structuredData={seoStructuredData}
      />

      <BlogSubNav
        searchValue={search}
        onSearch={setSearch}
        onNavigateAuthors={() => navigate('/authors')}
        sectionNavEnabled={!flatResults}
      />

      <TagFilterBar
        availableTags={browseTagOptions}
        activeTag={activeTag}
      />

      {/* Search results mode */}
      {flatResults ? (
        <Box sx={{ mb: 4 }}>
          <Typography variant="overline" sx={{ display: 'block', mb: 0.5, fontWeight: 800, letterSpacing: 1.5, fontSize: '0.65rem', color: 'text.disabled' }}>
            {searchResults ? 'Search results' : 'Filtered archive'}
          </Typography>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 0.75 }}>
            {searchResults
              ? `${flatResults.length} result${flatResults.length !== 1 ? 's' : ''} for "${search}"${activeTag ? ` in ${activeTag}` : ''}`
              : `Results for "${activeTag}"`}
          </Typography>
          {!searchResults && (
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {flatResults.length} published article{flatResults.length !== 1 ? 's and guide chapters' : ''} currently match this tag.
            </Typography>
          )}
          {flatResults.length > 0 ? (
            <Grid container spacing={2}>
              {flatResults.map((result) => (
                <Grid item xs={12} sm={6} md={4} key={`${result.kind}:${result.slug}`}>
                  {result.kind === 'guide' ? (
                    <GuideSearchCard
                      article={result.item}
                      chapterTitle={result.chapterTitle}
                    />
                  ) : (
                    <PostCard post={result.item} />
                  )}
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 6 }}>
              {searchResults
                ? 'No articles or guide chapters match the current search and tag filter. Try "trust profiles", "OID4VCI", or "deployment".'
                : `No published articles or guide chapters match the "${activeTag}" tag yet.`}
            </Typography>
          )}
        </Box>
      ) : (
        <>
          {/* Overview */}
          <Box id="overview" sx={SCROLL_MT}>
            <HeroSection />

            {/* Section index - orient readers on the long page */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: 1.5, md: 3 },
                flexWrap: 'wrap',
                my: 3,
                py: 2,
                px: 2,
                borderRadius: 2,
                bgcolor: 'grey.50',
                border: '1px solid',
                borderColor: 'grey.200',
              }}
            >
              {SECTION_INDEX_ITEMS.map((item, idx) => (
                <Box
                  key={item.target}
                  component="a"
                  href={`#${item.target}`}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    cursor: 'pointer',
                    color: 'inherit',
                    textDecoration: 'none',
                    '&:hover .section-label': { color: 'primary.main' },
                  }}
                >
                  <Typography
                    variant="caption"
                    fontWeight={800}
                    color="primary.main"
                    sx={{ textTransform: 'uppercase', fontSize: '0.7rem' }}
                  >
                    {item.verb}
                  </Typography>
                  <Typography
                    className="section-label"
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontWeight: 600, fontSize: '0.75rem', transition: 'color 0.15s' }}
                  >
                    {item.label}
                  </Typography>
                  {idx < SECTION_INDEX_ITEMS.length - 1 && (
                    <Typography variant="caption" color="grey.400" sx={{ ml: { xs: 0.5, md: 1 } }}>-&gt;</Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Content with sidebar rail */}
          <Box sx={{ display: 'flex', gap: 0 }}>
            {/* Sticky sidebar rail (desktop only) */}
            {isDesktop && <SectionRail activeSection={activeRailSection} />}

            {/* Main content column */}
            <Box sx={{ flexGrow: 1, minWidth: 0 }}>

              {/* Start Here */}
              <Box id="start-here" sx={{ ...SCROLL_MT, ...SECTION_SPACING }}>
                <StartHereSection />
              </Box>

              {/* System map */}
              <Box id="system-map" sx={{ ...SCROLL_MT, ...SECTION_SPACING, borderTop: '1px solid', borderColor: 'grey.100' }}>
                <SystemMap />
                {featuredPost && (
                  <Box sx={{ mt: 6 }}>
                    <PostCard post={featuredPost} featured />
                  </Box>
                )}
              </Box>

              {/* Five primitives */}
              <Box id="five-primitives" sx={{ ...SCROLL_MT, ...SECTION_SPACING, borderTop: '1px solid', borderColor: 'grey.100' }}>
                <ProtocolDiagramSection />
                <SectionArticleGrid
                  title="Five Primitives"
                  description="The protocol layer contains five primitives: Trust Profiles, Credential Templates, Presentation Policies, Deployment Profiles, and Flows."
                  posts={fivePrimitivesArticles}
                />
              </Box>

              {/* Implementation */}
              <Box id="implementation" sx={{ ...SCROLL_MT, ...SECTION_SPACING, borderTop: '1px solid', borderColor: 'grey.100' }}>
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h4"
                    fontWeight={800}
                    sx={{ fontSize: { xs: '1.5rem', md: '1.85rem' }, lineHeight: 1.3, mb: 1 }}
                  >
                    Identity Foundations
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, lineHeight: 1.7, fontSize: '1rem' }}>
                    Core concepts - digital identity basics, credential models, and verification.
                  </Typography>
                </Box>
                <ProtocolGuideSection />

                <Box sx={{ mb: 3, mt: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, flexWrap: 'wrap' }}>
                    <Typography
                      variant="h4"
                      fontWeight={800}
                      sx={{ fontSize: { xs: '1.5rem', md: '1.85rem' }, lineHeight: 1.3 }}
                    >
                      Implementation Guides
                    </Typography>
                    <Chip
                      label={`${implPublished.length} article${implPublished.length !== 1 ? 's' : ''} | ~${implMinutes} min`}
                      size="small"
                      variant="outlined"
                      sx={{ fontWeight: 700, fontSize: '0.72rem', borderColor: 'grey.400' }}
                    />
                  </Box>
                  <Typography variant="body1" color="text.secondary" sx={{ mt: 1, maxWidth: 600, lineHeight: 1.7, fontSize: '1rem' }}>
                    Transport protocols, schemas, and integration patterns for building systems with Marty.
                  </Typography>
                </Box>
                <SectionArticleGrid posts={implementationArticles} />
              </Box>

              {/* Trust and PKI */}
              <Box id="trust-pki" sx={{ ...SCROLL_MT, ...SECTION_SPACING, borderTop: '1px solid', borderColor: 'grey.100' }}>
                <SectionArticleGrid
                  title="Trust & PKI"
                  description="Cryptographic foundations of verifiable identity: trust anchors, certificate chains, and validation."
                  posts={trustPkiArticles}
                />
                <SectionArticleGrid
                  title="Privacy & Disclosure"
                  description="Selective disclosure, data minimization, and zero-knowledge proofs."
                  posts={privacyDisclosureArticles}
                />
              </Box>

              {/* Deployment */}
              <Box id="deployment" sx={{ ...SCROLL_MT, ...SECTION_SPACING, borderTop: '1px solid', borderColor: 'grey.100' }}>
                <SectionArticleGrid
                  title="Deployment Patterns"
                  description="How verifiable identity runs in real environments: airports, enterprises, kiosks, and edge devices."
                  posts={deploymentArticles}
                />
              </Box>

              {/* Governance and trust infrastructure */}
              <Box id="governance" sx={{ ...SCROLL_MT, ...SECTION_SPACING, borderTop: '1px solid', borderColor: 'grey.100' }}>
                <SectionArticleGrid
                  title="Governance & Trust Infrastructure"
                  description="Compliance frameworks, policy engines, and trust registries."
                  posts={governanceArticles}
                />
              </Box>

              {/* Latest */}
              <Box id="latest" sx={{ ...SCROLL_MT, ...SECTION_SPACING, borderTop: '1px solid', borderColor: 'grey.100' }}>
                <LatestFeed articles={latestArticles} />
              </Box>

            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}

export default BlogPage;
