/**
 * Series Nav
 *
 * In-article navigation bar showing series position and prev/next links.
 * Rendered at the top and bottom of BlogPostPage when the post belongs to a series.
 */

import { Box, Typography, Button, Chip, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data';
import { truncateAtWord } from '../utils/blogText';

function SeriesNav({ seriesInfo }) {
  if (!seriesInfo) return null;

  const { seriesTitle, order, total, slugs } = seriesInfo;
  const prevSlug = order > 1 ? slugs[order - 2] : null;
  const nextSlug = order < total ? slugs[order] : null;

  const prevPost = prevSlug ? BLOG_POSTS.find((p) => p.slug === prevSlug) : null;
  const nextPost = nextSlug ? BLOG_POSTS.find((p) => p.slug === nextSlug) : null;

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 1,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
        <Chip
          label={seriesTitle}
          size="small"
          color="primary"
          variant="outlined"
          sx={{ fontWeight: 700 }}
        />
        <Typography variant="caption" color="text.secondary">
          {order} of {total}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 1 }}>
        {prevPost && (
          <Button
            size="small"
            component={Link}
            to={`/blog/${prevSlug}`}
            startIcon={<ArrowBackIcon />}
            sx={{ textTransform: 'none', fontSize: '0.78rem' }}
          >
            {truncateAtWord(prevPost.title, 35)}
          </Button>
        )}
        {nextPost && (
          <Button
            size="small"
            variant="contained"
            component={Link}
            to={`/blog/${nextSlug}`}
            endIcon={<ArrowForwardIcon />}
            sx={{ textTransform: 'none', fontSize: '0.78rem' }}
          >
            {truncateAtWord(nextPost.title, 35)}
          </Button>
        )}
      </Box>
    </Paper>
  );
}

export default SeriesNav;