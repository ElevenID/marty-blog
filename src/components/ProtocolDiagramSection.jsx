/**
 * Protocol Diagram Section
 *
 * Visual overview of the five Marty Protocol primitives with labels
 * and CTA buttons linking to the guide and docs.
 */

import { Box, Typography, Paper } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import DescriptionIcon from '@mui/icons-material/Description';
import PolicyIcon from '@mui/icons-material/Policy';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const PRIMITIVES = [
  {
    icon: SecurityIcon,
    title: 'Trust Profiles',
    description: 'Who is trusted',
    verb: 'Trust',
    color: '#1565c0',
  },
  {
    icon: DescriptionIcon,
    title: 'Credential Templates',
    description: 'What is issued',
    verb: 'Issue',
    color: '#7b1fa2',
  },
  {
    icon: PolicyIcon,
    title: 'Presentation Policies',
    description: 'What must be shown',
    verb: 'Present',
    color: '#2e7d32',
  },
  {
    icon: CloudUploadIcon,
    title: 'Deployment Profiles',
    description: 'Where it runs',
    verb: 'Deploy',
    color: '#e65100',
  },
  {
    icon: AccountTreeIcon,
    title: 'Flows',
    description: 'How journeys are orchestrated',
    verb: 'Flows',
    color: '#00695c',
  },
];

function ProtocolDiagramSection() {
  return (
    <Paper
      id="protocol-diagram"
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        mb: 5,
        borderRadius: 3,
        bgcolor: 'grey.50',
        border: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      <Typography variant="h5" fontWeight={800} gutterBottom>
        How the Marty Identity Protocol Works
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 560 }}>
        Five primitives define the protocol layer - from who is trusted to how credential journeys are orchestrated.
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 3, maxWidth: 620, lineHeight: 1.6 }}>
        The system map groups the handbook into reader-facing layers. This diagram names the five protocol primitives inside that layer.
      </Typography>

      {/* Visual architecture diagram with connecting arrows */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 0, md: 0 },
          mb: 3,
        }}
      >
        {PRIMITIVES.map((p, idx) => {
          const Icon = p.icon;
          return (
            <Box key={p.title} sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 2.5,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  border: '2px solid',
                  borderColor: p.color,
                  minWidth: { xs: 180, md: 140 },
                  position: 'relative',
                  transition: 'all 0.18s ease',
                  '&:hover': { transform: 'translateY(-3px)', boxShadow: 3, bgcolor: `${p.color}08` },
                }}
              >
                <Icon sx={{ fontSize: 36, color: p.color, mb: 0.75 }} />
                <Typography variant="subtitle2" fontWeight={700} sx={{ lineHeight: 1.3, fontSize: '0.85rem' }}>
                  {p.title}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.25 }}>
                  {p.description}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    mt: 0.5,
                    fontWeight: 700,
                    color: p.color,
                    fontSize: '0.65rem',
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                  }}
                >
                  {p.verb}
                </Typography>
              </Box>
              {/* Connecting arrow between primitives */}
              {idx < PRIMITIVES.length - 1 && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: { md: 0.5 },
                    py: { xs: 0.5, md: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.2rem',
                      color: 'grey.400',
                      fontWeight: 700,
                      transform: { xs: 'rotate(90deg)', md: 'none' },
                    }}
                  >
                    -&gt;
                  </Typography>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>

      {/* Simplified summary flow */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 0.75,
          py: 1.5,
          px: 2,
          bgcolor: 'background.paper',
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'grey.200',
        }}
      >
        {PRIMITIVES.map((p, idx) => (
          <Box key={p.title} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <Typography variant="caption" fontWeight={700} sx={{ color: p.color }}>
              {p.verb}
            </Typography>
            {idx < PRIMITIVES.length - 1 && (
              <Box sx={{ width: 24, height: 1, bgcolor: 'grey.300' }} />
            )}
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default ProtocolDiagramSection;