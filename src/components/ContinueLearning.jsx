  // Mode 1: Start Here learning path
  // Mode 2: Series navigation
  // Mode 3: Related articles only
/**
 * Continue Learning
 *
 * Bottom-of-article component that guides readers to the next step.
 * Handbook articles use the canonical handbook navigation. Other articles use
 * series progress or metadata-driven recommendations.
 */

import { Box, Typography, Button, Chip, Paper, LinearProgress } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/index.js';
import {
  SERIES_BY_POST_SLUG,
  HANDBOOK_PARTS,
  getHandbookArticleNavigation,
} from '../data/index.js';
import { ARTICLE_META, isBrowseVisibleArticleSlug } from '../data/articleMeta.js';
import { truncateAtWord } from '../utils/blogText.js';

function ArticleNavCard({ label, title, subtitle, to, align = 'left', direction = 'forward' }) {
  const isForward = direction === 'forward';

  return (
    <Box
      component={Link}
      to={to}
      sx={{
        display: 'block',
        p: 2.25,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'grey.300',
        bgcolor: 'background.paper',
        color: 'inherit',
        textDecoration: 'none',
        textAlign: align,
        transition: 'all 0.15s',
        '&:hover': {
          borderColor: 'primary.main',
          bgcolor: 'primary.50',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
          gap: 0.5,
          mb: 0.5,
        }}
      >
        {!isForward && <ArrowBackIcon sx={{ fontSize: 14, color: 'text.secondary' }} />}
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
          }}
        >
          {label}
        </Typography>
        {isForward && <ArrowForwardIcon sx={{ fontSize: 14, color: 'text.secondary' }} />}
      </Box>
      <Typography variant="body1" fontWeight={700} sx={{ lineHeight: 1.35 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75, lineHeight: 1.55 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

function resolveHandbookRelatedSlugs(slug, handbookInfo, relatedSlugs) {
  const curatedSlugs = (relatedSlugs || []).filter(
    (candidateSlug) =>
      candidateSlug !== slug &&
      candidateSlug !== handbookInfo.prevSlug &&
      candidateSlug !== handbookInfo.nextSlug,
  );

  if (curatedSlugs.length > 0) {
    return curatedSlugs.slice(0, 3);
  }

  const handbookPart = HANDBOOK_PARTS.find((part) => part.part === handbookInfo.part);

  if (!handbookPart) {
    return [];
  }

  return handbookPart.slugs
    .filter(
      (candidateSlug) =>
        candidateSlug !== slug &&
        candidateSlug !== handbookInfo.prevSlug &&
        candidateSlug !== handbookInfo.nextSlug,
    )
    .slice(0, 3);
}

function ContinueLearning({ slug }) {
  const seriesInfo = SERIES_BY_POST_SLUG[slug];
  const meta = ARTICLE_META[slug];
  const handbookInfo = getHandbookArticleNavigation(slug);

  if (handbookInfo) {
    const prevPost = handbookInfo.prevSlug
      ? BLOG_POSTS.find((post) => post.slug === handbookInfo.prevSlug)
      : null;
    const nextPost = handbookInfo.nextSlug
      ? BLOG_POSTS.find((post) => post.slug === handbookInfo.nextSlug)
      : null;
    const relatedSlugs = resolveHandbookRelatedSlugs(slug, handbookInfo, meta?.related);

    return (
      <Paper
        elevation={0}
        sx={{
          mt: 6,
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'grey.300',
          bgcolor: 'grey.50',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <MenuBookIcon fontSize="small" color="primary" />
          <Typography
            variant="overline"
            sx={{ display: 'block', fontWeight: 800, letterSpacing: 1.5, fontSize: '0.6rem', color: 'primary.main' }}
          >
            Article Navigation
          </Typography>
        </Box>
        <Typography variant="h6" fontWeight={800} gutterBottom>
          Continue in the Handbook
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.7 }}>
          You are on article {handbookInfo.articleNumber} of {handbookInfo.totalArticles} in Part {handbookInfo.part}: {handbookInfo.partTitle}.
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2.5 }}>
          <Chip label={`Article ${handbookInfo.articleNumber} of ${handbookInfo.totalArticles}`} size="small" color="primary" variant="outlined" sx={{ fontWeight: 700 }} />
          <Chip label={`Part ${handbookInfo.part} · ${handbookInfo.partTitle}`} size="small" variant="outlined" sx={{ fontWeight: 700 }} />
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
            gap: 2,
          }}
        >
          <ArticleNavCard
            label="Previous in Handbook"
            title={prevPost ? prevPost.title : 'Handbook overview'}
            subtitle={prevPost ? prevPost.summary : 'Return to the full handbook table of contents.'}
            to={prevPost ? `/blog/${prevPost.slug}` : '/blog/foundations'}
            direction="back"
          />
          <ArticleNavCard
            label="Next in Handbook"
            title={nextPost ? nextPost.title : 'Browse the handbook'}
            subtitle={nextPost ? nextPost.summary : 'Choose your next article from the handbook overview.'}
            to={nextPost ? `/blog/${nextPost.slug}` : '/blog/foundations'}
            align="right"
          />
        </Box>

        {relatedSlugs.length > 0 && <RelatedBlock relatedSlugs={relatedSlugs} sx={{ mt: 3 }} />}
      </Paper>
    );
  }

  // Series navigation
  if (seriesInfo) {
    const { seriesTitle, order, total, slugs: seriesSlugs } = seriesInfo;
    const nextSlug = order < total ? seriesSlugs[order] : null;
    const nextPost = nextSlug ? BLOG_POSTS.find((p) => p.slug === nextSlug) : null;
    const progress = (order / total) * 100;

    return (
      <Paper
        elevation={0}
        sx={{
          mt: 6,
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'grey.300',
          bgcolor: 'grey.50',
        }}
      >
        <Typography
          variant="overline"
          sx={{ display: 'block', fontWeight: 800, letterSpacing: 1.5, fontSize: '0.6rem', color: 'text.disabled', mb: 1 }}
        >
          Continue Learning
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Chip label={seriesTitle} size="small" color="primary" variant="outlined" sx={{ fontWeight: 700 }} />
          <Typography variant="caption" color="text.secondary">
            {order} of {total}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ flexGrow: 1, height: 5, borderRadius: 1 }}
          />
          <Typography variant="caption" fontWeight={700} color="text.secondary">
            {Math.round(progress)}%
          </Typography>
        </Box>

        {nextPost ? (
          <Button
            variant="contained"
            component={Link}
            to={`/blog/${nextSlug}`}
            endIcon={<ArrowForwardIcon />}
            sx={{ fontWeight: 700 }}
          >
            Next: {truncateAtWord(nextPost.title, 40)}
          </Button>
        ) : (
          <Typography variant="body2" color="text.secondary" fontWeight={600}>
            You’ve completed this series.
          </Typography>
        )}

        {/* Related from meta */}
        {meta?.related && meta.related.length > 0 && (
          <RelatedBlock relatedSlugs={meta.related} sx={{ mt: 3 }} />
        )}
      </Paper>
    );
  }
  // Related articles only
  if (meta?.related && meta.related.length > 0) {
    return (
      <Paper
        elevation={0}
        sx={{
          mt: 6,
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'grey.300',
          bgcolor: 'grey.50',
        }}
      >
        <Typography
          variant="overline"
          sx={{ display: 'block', fontWeight: 800, letterSpacing: 1.5, fontSize: '0.6rem', color: 'text.disabled', mb: 1 }}
        >
          Continue Learning
        </Typography>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          Recommended Next
        </Typography>
        <RelatedBlock relatedSlugs={meta.related} />
      </Paper>
    );
  }

  return null;
}

function RelatedBlock({ relatedSlugs, sx = {} }) {
  const posts = relatedSlugs
    .map((s) => BLOG_POSTS.find((p) => p.slug === s))
    .filter((post) => post && isBrowseVisibleArticleSlug(post.slug))
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <Box sx={sx}>
      <Typography variant="caption" color="text.disabled" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, fontSize: '0.65rem' }}>
        Related Topics
      </Typography>
      <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {posts.map((p) => (
          <Box
            key={p.slug}
            component={Link}
            to={`/blog/${p.slug}`}
            sx={{
              display: 'block',
              p: 1.5,
              borderRadius: 1.5,
              border: '1px solid',
              borderColor: 'grey.200',
              bgcolor: 'background.paper',
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.15s',
              '&:hover': { borderColor: 'primary.main', bgcolor: 'primary.50' },
            }}
          >
            <Typography variant="body2" fontWeight={700} sx={{ fontSize: '0.85rem', lineHeight: 1.3 }}>
              {p.title}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.72rem' }}>
              {p.readTime}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ContinueLearning;
