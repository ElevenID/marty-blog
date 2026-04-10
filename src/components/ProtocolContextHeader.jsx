/**
 * Protocol Context Header
 *
 * Compact info block rendered under article titles. Shows where the article
 * fits in the Marty protocol model: primitive, layer, topic, difficulty,
 * and related articles. Turns articles into protocol documentation nodes.
 */

import { Box, Typography, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data';
import { ARTICLE_META, LAYER_COLORS, LAYER_LABELS, DIFFICULTY_COLORS, isBrowseVisibleArticleSlug } from '../data/articleMeta';
import { SERIES_BY_POST_SLUG, START_HERE_SLUGS } from '../data';

function ProtocolContextHeader({ slug }) {
  const navigate = useNavigate();
  const meta = ARTICLE_META[slug];
  const seriesInfo = SERIES_BY_POST_SLUG[slug];
  const startHereIdx = START_HERE_SLUGS.indexOf(slug);

  if (!meta) return null;

  const layerColor = LAYER_COLORS[meta.layer] || '#546e7a';
  const layerLabel = LAYER_LABELS[meta.layer] || meta.layer;
  const relatedPosts = (meta.related || [])
    .map((s) => BLOG_POSTS.find((p) => p.slug === s))
    .filter((post) => post && isBrowseVisibleArticleSlug(post.slug))
    .slice(0, 3);

  return (
    <Box
      sx={{
        mb: 4,
        p: { xs: 2.5, md: 3 },
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'grey.200',
        borderLeft: '4px solid',
        borderLeftColor: layerColor,
        bgcolor: 'grey.50',
      }}
    >
      {/* Header label */}
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
        {startHereIdx >= 0 ? 'Part of the Learning Path' : 'Part of the Marty Identity Protocol'}
      </Typography>

      {/* Metadata grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(auto-fit, minmax(120px, 1fr))' },
          gap: { xs: 1.5, md: 2 },
          mb: relatedPosts.length > 0 ? 2 : 0,
        }}
      >
        {/* Series / Step */}
        {startHereIdx >= 0 && (
          <MetaField
            label="Series"
            value={`Start Here — Step ${startHereIdx + 1} of ${START_HERE_SLUGS.length}`}
          />
        )}
        {seriesInfo && startHereIdx < 0 && (
          <MetaField label="Series" value={seriesInfo.seriesTitle} />
        )}

        {/* Primitive */}
        {meta.primitive && <MetaField label="Primitive" value={meta.primitive} />}

        {/* Layer */}
        <Box>
          <Typography variant="caption" color="text.disabled" sx={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Layer
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mt: 0.25 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: layerColor, flexShrink: 0 }} />
            <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.85rem' }}>
              {layerLabel}
            </Typography>
          </Box>
        </Box>

        {/* Topic */}
        <MetaField label="Topic" value={meta.topic} />

        {/* Difficulty */}
        <Box>
          <Typography variant="caption" color="text.disabled" sx={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Difficulty
          </Typography>
          <Box sx={{ mt: 0.25 }}>
            <Chip
              label={meta.difficulty}
              size="small"
              color={DIFFICULTY_COLORS[meta.difficulty] || 'default'}
              sx={{ fontWeight: 700, fontSize: '0.72rem', height: 22 }}
            />
          </Box>
        </Box>
      </Box>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <Box sx={{ pt: 1.5, borderTop: '1px solid', borderColor: 'grey.200' }}>
          <Typography variant="caption" color="text.disabled" sx={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Related
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mt: 0.5 }}>
            {relatedPosts.map((rp) => (
              <Chip
                key={rp.slug}
                label={rp.title.length > 40 ? rp.title.slice(0, 38) + '…' : rp.title}
                size="small"
                variant="outlined"
                clickable
                onClick={() => navigate(`/blog/${rp.slug}`)}
                sx={{ fontSize: '0.72rem', fontWeight: 600 }}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

function MetaField({ label, value }) {
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" sx={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
        {label}
      </Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.85rem', mt: 0.25 }}>
        {value}
      </Typography>
    </Box>
  );
}

export default ProtocolContextHeader;
