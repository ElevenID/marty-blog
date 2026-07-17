/**
 * Blog Sub-Navigation
 *
 * Sticky sub-nav bar for the blog page. Each item scrolls to a
 * section anchor. Active section is tracked via IntersectionObserver.
 * Utility area: expandable search, Authors link, RSS link.
 */

import { useState, useEffect } from 'react';
import {
  Box, Button, IconButton, TextField, InputAdornment, Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GroupsIcon from '@mui/icons-material/Groups';

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'start-here', label: 'Start Here' },
  { id: 'five-primitives', label: 'Five Primitives' },
  { id: 'implementation', label: 'Implementation' },
  { id: 'trust-pki', label: 'Trust & PKI' },
  { id: 'deployment', label: 'Deployment Patterns' },
  { id: 'governance', label: 'Governance & Trust Infrastructure' },
  { id: 'latest', label: 'Latest' },
];

function BlogSubNav({ searchValue, onSearch, onNavigateAuthors, sectionNavEnabled = true }) {
  const [activeSection, setActiveSection] = useState('overview');
  const [showSearch, setShowSearch] = useState(false);

  // Scroll-spy: highlight the nav item whose section is near the viewport top
  useEffect(() => {
    if (!sectionNavEnabled) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-60px 0px -75% 0px' },
    );

    const timer = setTimeout(() => {
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [sectionNavEnabled]);

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'grey.200',
        px: { xs: 1, md: 2 },
        py: 0.75,
        mb: 3,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* Nav items - horizontally scrollable on mobile */}
        <Box
          sx={{
            display: 'flex',
            gap: 0.25,
            overflowX: 'auto',
            flexGrow: 1,
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
          }}
        >
          {sectionNavEnabled ? (
            NAV_ITEMS.map((item) => (
              <Button
                key={item.id}
                size="small"
                component="a"
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? 'location' : undefined}
                sx={{
                  minWidth: 'auto',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  fontWeight: activeSection === item.id ? 700 : 500,
                  color: activeSection === item.id ? 'primary.main' : 'text.secondary',
                  bgcolor: activeSection === item.id ? 'primary.50' : 'transparent',
                  borderBottom: '2px solid',
                  borderColor: activeSection === item.id ? 'primary.main' : 'transparent',
                  whiteSpace: 'nowrap',
                  fontSize: '0.8rem',
                  textTransform: 'none',
                  textDecoration: 'none',
                  '&:hover': {
                    bgcolor: activeSection === item.id ? 'primary.50' : 'grey.50',
                  },
                }}
              >
                {item.label}
              </Button>
            ))
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, px: 1.5, minHeight: 32 }}>
              <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', letterSpacing: 0.3 }}>
                {searchValue ? 'Search results' : 'Filtered archive'}
              </Typography>
            </Box>
          )}
        </Box>

        {/* Utility area */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 1, flexShrink: 0 }}>
          {showSearch ? (
            <TextField
              size="small"
              autoFocus
              placeholder="Search trust profiles, OID4VCI, offline verification..."
              value={searchValue}
              onChange={(e) => onSearch(e.target.value)}
              sx={{ width: { xs: 200, md: 320 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => { setShowSearch(false); onSearch(''); }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          ) : (
            <IconButton
              size="small"
              onClick={() => setShowSearch(true)}
              sx={{ color: 'text.secondary' }}
              aria-label="Search articles"
            >
              <SearchIcon fontSize="small" />
            </IconButton>
          )}
          <IconButton
            size="small"
            onClick={onNavigateAuthors}
            sx={{ color: 'text.secondary' }}
            aria-label="Authors"
          >
            <GroupsIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            component="a"
            href="/blog/rss.xml"
            sx={{ color: 'text.secondary' }}
            aria-label="RSS feed"
          >
            <RssFeedIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default BlogSubNav;
