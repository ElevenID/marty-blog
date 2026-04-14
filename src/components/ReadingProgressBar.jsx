/**
 * Reading Progress Bar
 *
 * Thin progress indicator fixed at the top of the viewport that
 * fills as the reader scrolls through an article. Uses
 * requestAnimationFrame for smooth performance.
 */

import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

function ReadingProgressBar({ color = 'primary.main' }) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min((scrollTop / docHeight) * 100, 100));
      }
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 1200,
        bgcolor: 'grey.200',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: `${progress}%`,
          bgcolor: color,
          transition: 'width 0.1s linear',
        }}
      />
    </Box>
  );
}

export default ReadingProgressBar;