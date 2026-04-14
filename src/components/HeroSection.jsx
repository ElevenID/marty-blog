/**
 * Hero Section
 *
 * Minimal hero for the blog page with two clear entry points:
 * one for learners, one for implementers.
 */

import { Box, Typography, Button, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';
import { BLOG_POST_SUMMARIES } from '../data/blogPostSummaries';
import { getBrowseVisiblePosts } from '../data/articleBrowseVisibility';

function HeroSection() {
  const articleCount = getBrowseVisiblePosts(BLOG_POST_SUMMARIES).length;
  const now = new Date();
  const monthYear = now.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 4, md: 6 },
        mb: 5,
        borderRadius: 3,
        background: 'linear-gradient(135deg, #0D1B2A 0%, #1B2838 50%, #1a237e 100%)',
        color: 'common.white',
      }}
    >
      <Typography
        variant="overline"
        sx={{
          fontWeight: 800,
          letterSpacing: 2,
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.55)',
          mb: 1,
          display: 'block',
        }}
      >
        The Identity Infrastructure Handbook
      </Typography>
      <Typography
        variant="h2"
        component="h1"
        fontWeight={900}
        gutterBottom
        sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.15, letterSpacing: '-0.02em' }}
      >
        Learn the Marty Identity Protocol
      </Typography>
      <Typography
        variant="h6"
        component="p"
        sx={{ maxWidth: 580, lineHeight: 1.7, mb: 4, opacity: 0.85, fontWeight: 400, fontSize: { xs: '1rem', md: '1.15rem' } }}
      >
        Concepts, standards, and implementation guides for verifiable identity systems.
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mb: 4,
          opacity: 0.5,
          fontWeight: 500,
          fontSize: '0.8rem',
          letterSpacing: 0.3,
        }}
      >
        {articleCount} articles across foundations, PKI, deployment, and governance | Updated {monthYear}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<SchoolIcon />}
          component="a"
          href="#start-here"
          sx={{ bgcolor: 'primary.main', fontWeight: 700, px: 3 }}
        >
          Start Learning
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<CodeIcon />}
          component="a"
          href="#implementation"
          sx={{
            color: 'common.white',
            borderColor: 'rgba(255,255,255,0.4)',
            fontWeight: 600,
            px: 3,
            '&:hover': { borderColor: 'common.white', bgcolor: 'rgba(255,255,255,0.08)' },
          }}
        >
          Implement Marty
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<MenuBookIcon />}
          component={Link}
          to="/blog/foundations"
          sx={{
            color: 'common.white',
            borderColor: 'rgba(255,255,255,0.4)',
            fontWeight: 600,
            px: 3,
            '&:hover': { borderColor: 'common.white', bgcolor: 'rgba(255,255,255,0.08)' },
          }}
        >
          Read the Handbook
        </Button>
      </Box>
    </Paper>
  );
}

export default HeroSection;