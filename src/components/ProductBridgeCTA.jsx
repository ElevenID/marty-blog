/**
 * Product Bridge CTA
 *
 * Context-aware call-to-action block at the bottom of articles.
 * Selects relevant product links based on the article's layer/topic
 * from ARTICLE_META, so readers see the most relevant next action.
 */

import { Box, Typography, Button, Paper } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { ARTICLE_META } from '../data/articleMeta';

/**
 * CTA options keyed by layer. Each article's layer maps to the most
 * relevant product surface. Falls back to generic when no match.
 */
const LAYER_CTAS = {
  Foundations: {
    headline: 'See it in action',
    body: 'Explore the Marty platform to see how these concepts become real credential operations.',
    primary: { label: 'Try the Verification API', path: '/verification' },
    secondary: { label: 'Explore Issuance', path: '/issuance' },
  },
  Trust: {
    headline: 'Build on this',
    body: 'Trust Profiles define who is trusted — see how Marty enforces them at runtime.',
    primary: { label: 'Explore Trust Profiles', path: '/protocol#trust-profiles' },
    secondary: { label: 'View the Protocol', path: '/protocol' },
  },
  Issue: {
    headline: 'Start issuing',
    body: 'From templates to live credentials — the issuance API handles formatting, signing, and delivery.',
    primary: { label: 'Explore Issuance', path: '/issuance' },
    secondary: { label: 'View JSON Schemas', path: '/protocol#schemas' },
  },
  Present: {
    headline: 'Verify credentials now',
    body: 'Presentation policies enforce minimum disclosure — try the verification API to see it work.',
    primary: { label: 'Try the Verification API', path: '/verification' },
    secondary: { label: 'View Presentation Policies', path: '/protocol#presentation-policies' },
  },
  Deploy: {
    headline: 'Deploy your own',
    body: 'Deployment profiles configure runtime environments — get started with a quickstart guide.',
    primary: { label: 'Quickstart Guide', path: '/docs/quickstart' },
    secondary: { label: 'View Deployment Profiles', path: '/protocol#deployment-profiles' },
  },
  Execute: {
    headline: 'Run a verifier locally',
    body: 'Flows orchestrate the full lifecycle — run a local verifier to see the complete flow.',
    primary: { label: 'Run a Verifier Locally', path: '/docs/quickstart' },
    secondary: { label: 'Explore Flows', path: '/protocol#flows' },
  },
  Govern: {
    headline: 'Governance in practice',
    body: 'Compliance profiles and Cedar policies enforce rules at every layer — explore the governance toolkit.',
    primary: { label: 'Explore Governance', path: '/protocol#governance' },
    secondary: { label: 'View Compliance Profiles', path: '/protocol#compliance-profiles' },
  },
};

const DEFAULT_CTA = {
  headline: 'Ready to build?',
  body: 'Explore the Marty platform — from credential issuance to verification APIs and deployment guides.',
  primary: { label: 'Try the Verification API', path: '/verification' },
  secondary: { label: 'Explore Issuance', path: '/issuance' },
};

function ProductBridgeCTA({ slug }) {
  const navigate = useNavigate();
  const meta = ARTICLE_META[slug];
  const cta = (meta && LAYER_CTAS[meta.layer]) || DEFAULT_CTA;

  return (
    <Paper
      elevation={0}
      sx={{
        mt: 6,
        p: { xs: 3, md: 4 },
        borderRadius: 3,
        background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
        border: '1px solid',
        borderColor: 'primary.100',
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" fontWeight={800} gutterBottom>
        {cta.headline}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 480, mx: 'auto' }}>
        {cta.body}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          size="small"
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate(cta.primary.path)}
        >
          {cta.primary.label}
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => navigate(cta.secondary.path)}
        >
          {cta.secondary.label}
        </Button>
      </Box>
    </Paper>
  );
}

export default ProductBridgeCTA;
