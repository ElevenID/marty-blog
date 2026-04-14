/**
 * Choose Your Path Section
 *
 * Four path cards that let readers self-select into the right learning track.
 */

import { Box, Typography, Grid, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import UploadIcon from '@mui/icons-material/Upload';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LockIcon from '@mui/icons-material/Lock';

const PATHS = [
  {
    icon: SchoolIcon,
    title: 'Learn the concepts',
    audience: 'New to identity',
    description: 'Understand digital identity, credentials, and the trust model from scratch.',
    color: '#1565c0',
    action: 'start-here',
  },
  {
    icon: UploadIcon,
    title: 'Implement issuance',
    audience: 'Issuer engineers',
    description: 'OID4VCI integration, credential templates, and issuer-side deployment.',
    color: '#7b1fa2',
    action: 'implementation',
  },
  {
    icon: VerifiedUserIcon,
    title: 'Implement verification',
    audience: 'Verifier engineers',
    description: 'OID4VP, presentation policies, offline verification, and verifier infrastructure.',
    color: '#2e7d32',
    action: 'implementation',
  },
  {
    icon: LockIcon,
    title: 'Explore PKI & standards',
    audience: 'Security architects',
    description: 'Trust anchors, certificate chains, SD-JWT, zero-knowledge proofs, and passport PKI.',
    color: '#e65100',
    action: 'cryptography',
  },
];

function ChooseYourPathSection({ onPathClick }) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" fontWeight={800} gutterBottom>
        Choose Your Path
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Whether you are learning for the first time or building an integration, pick the track that fits.
      </Typography>

      <Grid container spacing={2}>
        {PATHS.map((path) => {
          const Icon = path.icon;
          return (
            <Grid item xs={12} sm={6} md={3} key={path.title}>
              <Paper
                elevation={1}
                onClick={() => onPathClick(path.action)}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.18s ease',
                  borderTop: '3px solid',
                  borderColor: path.color,
                  '&:hover': { transform: 'translateY(-3px)', boxShadow: 4 },
                }}
              >
                <Icon sx={{ fontSize: 28, color: path.color, mb: 1.5 }} />
                <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 0.25, lineHeight: 1.3 }}>
                  {path.title}
                </Typography>
                <Typography variant="caption" sx={{ mb: 1, display: 'block', color: path.color, fontWeight: 600 }}>
                  {path.audience}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.55 }}>
                  {path.description}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ChooseYourPathSection;