/**
 * AI Disclosure Banner
 *
 * Transparent, subtle disclosure that articles are written by AI research
 * personas with human editorial oversight. Follows responsible-AI best
 * practices by making authorship clear without being disruptive.
 */

import { Box, Typography } from '@mui/material';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

function AIDisclosureBanner() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1.5,
        mt: 4,
        mb: 2,
        py: 1.5,
        px: 2,
        borderRadius: 1.5,
        bgcolor: 'grey.50',
        border: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      <SmartToyOutlinedIcon sx={{ fontSize: 18, color: 'text.disabled', mt: 0.25, flexShrink: 0 }} />
      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.72rem', lineHeight: 1.55 }}>
        This article was produced by an AI research persona and reviewed by the ElevenID editorial team.
        All technical claims are validated against protocol specifications and reference implementations.
      </Typography>
    </Box>
  );
}

export default AIDisclosureBanner;