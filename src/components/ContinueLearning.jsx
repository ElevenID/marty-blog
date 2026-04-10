/**
 * Continue Learning
 *
 * Bottom-of-article component that guides readers to the next step.
 * Three modes:
 *   1. Series — shows series progress with next article
 *   2. Start Here — shows learning path progress
 *   3. Related — shows recommended articles from article metadata
 */

import { Box, Typography, Button, Chip, Paper, LinearProgress } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data';
import { SERIES_BY_POST_SLUG, START_HERE_SLUGS } from '../data';
import { ARTICLE_META, isBrowseVisibleArticleSlug } from '../data/articleMeta';

function ContinueLearning({ slug }) {
  const navigate = useNavigate();
  const seriesInfo = SERIES_BY_POST_SLUG[slug];
  const startHereIdx = START_HERE_SLUGS.indexOf(slug);
  const meta = ARTICLE_META[slug];

  // ── Mode 1: Start Here learning path ──────────────────────────────────────
  if (startHereIdx >= 0) {
    const nextSlug = startHereIdx < START_HERE_SLUGS.length - 1 ? START_HERE_SLUGS[startHereIdx + 1] : null;
    const nextPost = nextSlug ? BLOG_POSTS.find((p) => p.slug === nextSlug) : null;
    const progress = ((startHereIdx + 1) / START_HERE_SLUGS.length) * 100;

    return (
      <Paper
        elevation={0}
        sx={{
          mt: 6,
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          border: '2px solid',
          borderColor: 'primary.main',
          bgcolor: 'primary.50',
        }}
      >
        <Typography
          variant="overline"
          sx={{ display: 'block', fontWeight: 800, letterSpacing: 1.5, fontSize: '0.6rem', color: 'primary.main', mb: 1 }}
        >
          Learning Path
        </Typography>
        <Typography variant="h6" fontWeight={800} color="primary.dark" gutterBottom>
          Continue the Learning Path
        </Typography>

        {/* Progress bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ flexGrow: 1, height: 6, borderRadius: 1 }}
          />
          <Typography variant="caption" fontWeight={700} color="primary.main">
            {startHereIdx + 1}/{START_HERE_SLUGS.length}
          </Typography>
        </Box>

        {/* Step list */}
        <Box sx={{ mb: 2.5 }}>
          {START_HERE_SLUGS.map((s, idx) => {
            const p = BLOG_POSTS.find((post) => post.slug === s);
            if (!p) return null;
            const isCompleted = idx < startHereIdx;
            const isCurrent = idx === startHereIdx;
            const isNext = idx === startHereIdx + 1;
            return (
              <Box
                key={s}
                onClick={() => navigate(`/blog/${s}`)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  py: 0.75,
                  cursor: 'pointer',
                  opacity: isCurrent || isCompleted || isNext ? 1 : 0.5,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {isCompleted ? (
                  <CheckCircleIcon sx={{ fontSize: 18, color: 'success.main' }} />
                ) : (
                  <Typography
                    variant="caption"
                    fontWeight={800}
                    sx={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.65rem',
                      bgcolor: isCurrent ? 'primary.main' : 'transparent',
                      color: isCurrent ? 'common.white' : 'text.secondary',
                      border: isCurrent ? 'none' : '1.5px solid',
                      borderColor: 'grey.400',
                    }}
                  >
                    {idx + 1}
                  </Typography>
                )}
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: isCurrent ? 700 : isNext ? 600 : 400,
                    fontSize: '0.82rem',
                    color: isCurrent ? 'primary.dark' : isNext ? 'text.primary' : 'text.secondary',
                  }}
                >
                  {p.title}
                  {isCurrent && ' ✓'}
                  {isNext && ' →'}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {nextPost && (
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate(`/blog/${nextSlug}`)}
            sx={{ fontWeight: 700 }}
          >
            Next: {nextPost.title.length > 40 ? nextPost.title.slice(0, 38) + '…' : nextPost.title}
          </Button>
        )}
      </Paper>
    );
  }

  // ── Mode 2: Series navigation ────────────────────────────────────────────
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
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate(`/blog/${nextSlug}`)}
            sx={{ fontWeight: 700 }}
          >
            Next: {nextPost.title.length > 40 ? nextPost.title.slice(0, 38) + '…' : nextPost.title}
          </Button>
        ) : (
          <Typography variant="body2" color="text.secondary" fontWeight={600}>
            You've completed this series.
          </Typography>
        )}

        {/* Related from meta */}
        {meta?.related && meta.related.length > 0 && (
          <RelatedBlock relatedSlugs={meta.related} navigate={navigate} sx={{ mt: 3 }} />
        )}
      </Paper>
    );
  }

  // ── Mode 3: Related articles only ────────────────────────────────────────
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
        <RelatedBlock relatedSlugs={meta.related} navigate={navigate} />
      </Paper>
    );
  }

  return null;
}

function RelatedBlock({ relatedSlugs, navigate, sx = {} }) {
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
            onClick={() => navigate(`/blog/${p.slug}`)}
            sx={{
              p: 1.5,
              borderRadius: 1.5,
              border: '1px solid',
              borderColor: 'grey.200',
              bgcolor: 'background.paper',
              cursor: 'pointer',
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
