/**
 * Series Block
 *
 * Horizontal scrollable card row for a named series.
 * Shows series title, description, and numbered post cards.
 */

import { Box, Typography, Card, CardActionArea, CardContent, Chip, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BLOG_AUTHORS } from '../data/blogAuthors';
import { BLOG_POST_SUMMARIES } from '../data/blogPostSummaries';
import { isBrowseVisibleArticleSlug } from '../data/articleBrowseVisibility';
import { truncateAtWord } from '../utils/blogText';

const TODAY = new Date().toISOString().split('T')[0];

function SeriesBlock({ series, navigate }) {
  const posts = series.slugs
    .map((slug) => BLOG_POST_SUMMARIES.find((p) => p.slug === slug))
    .filter((post) => post && isBrowseVisibleArticleSlug(post.slug));

  if (posts.length === 0) return null;

  // Calculate total reading time for the series
  const totalMinutes = posts.reduce((sum, p) => {
    const match = p.readTime?.match(/(\d+)/);
    return sum + (match ? parseInt(match[1], 10) : 0);
  }, 0);

  return (
    <Box sx={{ mb: 5 }}>
      <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', mb: 1 }}>
        <Box>
          <Typography variant="h6" fontWeight={800}>
            {series.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {series.description}
          </Typography>
        </Box>
        <Chip
          label={`${posts.length} articles | ~${totalMinutes} min`}
          size="small"
          variant="outlined"
          sx={{ flexShrink: 0, fontWeight: 600 }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          pb: 1,
          scrollSnapType: 'x mandatory',
          '&::-webkit-scrollbar': { height: 6 },
          '&::-webkit-scrollbar-thumb': { bgcolor: 'grey.300', borderRadius: 3 },
        }}
      >
        {posts.map((post, idx) => {
          const isFuture = post.date > TODAY;
          const author = BLOG_AUTHORS[post.authorId] || {};

          return (
            <Card
              key={post.slug}
              elevation={1}
              sx={{
                minWidth: 260,
                maxWidth: 300,
                flexShrink: 0,
                scrollSnapAlign: 'start',
                borderRadius: 2,
                transition: 'all 0.18s ease',
                '&:hover': { transform: 'translateY(-2px)', boxShadow: 3 },
              }}
            >
              <CardActionArea
                onClick={() => navigate(`/blog/${post.slug}`)}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
              >
                <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <Typography
                      variant="caption"
                      fontWeight={800}
                      sx={{
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: 'common.white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </Typography>
                    {isFuture && (
                      <Chip label="Update Pending" size="small" sx={{ bgcolor: 'warning.50', color: 'warning.dark', fontSize: '0.65rem', fontWeight: 600, height: 20 }} />
                    )}
                  </Box>
                  <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ lineHeight: 1.35 }}>
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: '0.78rem', lineHeight: 1.5, mb: 1.5 }}
                  >
                    {truncateAtWord(post.summary, 100)}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="caption" color="text.secondary">
                      {author.name || post.authorId}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      {post.readTime}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}

        {/* Scroll hint */}
        <Box
          sx={{
            minWidth: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <IconButton size="small" sx={{ color: 'text.disabled' }}>
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default SeriesBlock;