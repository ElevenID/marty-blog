/**
 * Article Table of Contents
 *
 * Sticky sidebar that shows heading-based navigation for article content.
 * Built from post.content heading blocks. Highlights the active heading
 * using IntersectionObserver scroll-spy.
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Box, Typography } from '@mui/material';

/**
 * Generate a stable anchor id from heading text.
 */
function headingToId(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 60);
}

function ArticleTableOfContents({ content }) {
  const headings = useMemo(
    () =>
      (content || [])
        .filter((block) => block.type === 'heading')
        .map((block) => ({
          text: block.text,
          id: headingToId(block.text),
        })),
    [content],
  );

  const [activeId, setActiveId] = useState('');

  // Scroll-spy: highlight heading nearest viewport top
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -75% 0px' },
    );

    const timer = setTimeout(() => {
      headings.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [headings]);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  if (headings.length < 2) return null;

  return (
    <Box
      component="nav"
      aria-label="Table of contents"
      sx={{
        position: 'sticky',
        top: 80,
        alignSelf: 'flex-start',
        width: 220,
        flexShrink: 0,
        pl: 3,
        borderLeft: '1px solid',
        borderColor: 'grey.200',
        display: { xs: 'none', lg: 'block' },
      }}
    >
      <Typography
        variant="overline"
        sx={{
          display: 'block',
          fontWeight: 800,
          letterSpacing: 1.5,
          fontSize: '0.6rem',
          color: 'text.disabled',
          mb: 1.5,
        }}
      >
        On this page
      </Typography>

      {headings.map((h) => {
        const isActive = activeId === h.id;
        return (
          <Typography
            key={h.id}
            onClick={() => scrollTo(h.id)}
            variant="body2"
            sx={{
              display: 'block',
              py: 0.5,
              fontSize: '0.78rem',
              lineHeight: 1.4,
              fontWeight: isActive ? 700 : 400,
              color: isActive ? 'primary.main' : 'text.secondary',
              cursor: 'pointer',
              transition: 'color 0.15s',
              '&:hover': { color: 'primary.main' },
            }}
          >
            {h.text}
          </Typography>
        );
      })}
    </Box>
  );
}

export { headingToId };
export default ArticleTableOfContents;
