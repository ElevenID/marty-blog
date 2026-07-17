/**
 * Start Here Section
 *
 * Numbered reading ladder for new readers - the first thing they should see
 * after the hero. Links to foundational posts in reading order.
 */

import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { START_HERE_SLUGS } from '../data/index.js';
import { BLOG_POST_SUMMARIES } from '../data/blogPostSummaries.js';
import { truncateAtWord } from '../utils/blogText.js';

function StartHereSection() {
  const posts = START_HERE_SLUGS
    .map((slug) => BLOG_POST_SUMMARIES.find((p) => p.slug === slug))
    .filter(Boolean);

  // Compute total reading time from readTime strings like "7 min read"
  const totalMinutes = posts.reduce((sum, p) => {
    const match = p.readTime?.match(/(\d+)/);
    return sum + (match ? parseInt(match[1], 10) : 0);
  }, 0);

  return (
    <Paper
      id="start-here"
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        mb: 5,
        borderRadius: 3,
        border: '2px solid',
        borderColor: 'primary.main',
        bgcolor: 'primary.50',
      }}
    >
      <Typography
        variant="overline"
        sx={{
          display: 'block',
          mb: 0.5,
          fontWeight: 800,
          letterSpacing: 1.5,
          color: 'primary.main',
          fontSize: '0.65rem',
        }}
      >
        Learning Path
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
        <PlayCircleOutlineIcon color="primary" sx={{ fontSize: 28 }} />
        <Typography variant="h5" fontWeight={800} color="primary.dark">
          Start Here
        </Typography>
        <Typography
          variant="caption"
          sx={{
            ml: 'auto',
            bgcolor: 'primary.main',
            color: 'common.white',
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            fontWeight: 700,
            whiteSpace: 'nowrap',
          }}
        >
          {posts.length} articles | ~{totalMinutes} min total
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, ml: 5.5 }}>
        New to digital identity? Follow this path to build a solid foundation.
      </Typography>

      <List disablePadding>
        {posts.map((post, idx) => (
          <ListItem key={post.slug} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={Link}
              to={`/blog/${post.slug}`}
              sx={{
                borderRadius: 2,
                py: 1.5,
                '&:hover': { bgcolor: 'primary.100' },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Typography
                  variant="h6"
                  fontWeight={800}
                  color="primary.main"
                  sx={{ width: 28, textAlign: 'center' }}
                >
                  {idx + 1}
                </Typography>
              </ListItemIcon>
              <ListItemText
                primary={post.title}
                secondary={
                  <>
                    {truncateAtWord(post.summary, 220)}
                    <Typography component="span" variant="caption" sx={{ display: 'block', mt: 0.5, fontWeight: 600, color: 'text.secondary' }}>
                      Step {idx + 1} of {posts.length} | {post.readTime}
                    </Typography>
                  </>
                }
                primaryTypographyProps={{ fontWeight: 700, fontSize: '0.95rem' }}
                secondaryTypographyProps={{ component: 'div', fontSize: '0.8rem', lineHeight: 1.5 }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 2, color: 'primary.main', flexShrink: 0 }}>
                <Typography variant="caption" sx={{ fontWeight: 800, letterSpacing: 0.2 }}>
                  Read article
                </Typography>
                <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default StartHereSection;