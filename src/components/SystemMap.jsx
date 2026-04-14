/**
 * System Map
 *
 * Visual knowledge map of the identity infrastructure stack.
 * Each node links to its canonical article. Layers use the same
 * colour vocabulary as the rest of the site (LAYER_COLORS).
 */

import { useState } from 'react';
import { Box, Typography, Tooltip, Collapse, useMediaQuery, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Link } from 'react-router-dom';
import { normalizeBlogData } from '../utils/blogText';

const LAYERS = normalizeBlogData([
  {
    label: 'Foundations',
    color: '#546e7a',
    description: 'Core concepts every identity system builds on - what credentials are, who uses them, and how they move through a lifecycle.',
    nodes: [
      { text: 'Digital Identity', slug: 'what-is-digital-identity', tip: 'What digital identity means and why it matters' },
      { text: 'Verifiable Credentials', slug: 'verifiable-credentials-explained', tip: 'The building block of trust: tamper-evident digital claims' },
      { text: 'Issuers / Holders / Verifiers', slug: 'issuers-holders-verifiers-explained', tip: 'The three roles in every credential exchange' },
      { text: 'Credential Lifecycle', slug: 'credential-lifecycle', tip: 'From issuance through presentation to revocation' },
    ],
  },
  {
    label: 'Protocol Model',
    color: '#1565c0',
    description: 'The five primitives that define every Marty identity system - from trust establishment to orchestrated flows.',
    nodes: [
      { text: 'Trust Profiles', slug: 'trust-profiles-explained', tip: 'Define who is trusted and under what conditions' },
      { text: 'Credential Templates', slug: 'credential-templates-designing-what-gets-issued', tip: 'Schema + rules for what gets issued' },
      { text: 'Presentation Policies', slug: 'presentation-policies-minimum-disclosure', tip: 'What verifiers can ask for - and nothing more' },
      { text: 'Deployment Profiles', slug: 'deployment-profiles-from-design-to-production', tip: 'Runtime configurations for real environments' },
      { text: 'Flows', slug: 'flows-orchestrating-identity-lifecycle', tip: 'Multi-step sequences that coordinate the primitives' },
    ],
  },
  {
    label: 'Transport & Implementation',
    color: '#6a1b9a',
    description: 'Concrete protocols and schemas for integrating Marty into production systems.',
    nodes: [
      { text: 'OID4VCI', slug: 'impl-oid4vci', tip: 'OpenID for Verifiable Credential Issuance' },
      { text: 'OID4VP', slug: 'impl-oid4vp', tip: 'OpenID for Verifiable Presentations' },
      { text: 'JSON Schemas', slug: 'mip-json-schemas-walkthrough', tip: 'Machine-readable schemas for every MIP primitive' },
      { text: 'Conformance Testing', slug: 'conformance-testing-for-implementers', tip: 'Test suites for verifying interoperability' },
    ],
  },
  {
    label: 'Trust & Cryptography',
    color: '#00838f',
    description: 'Cryptographic foundations - PKI, trust anchors, and privacy-preserving disclosure mechanisms.',
    nodes: [
      { text: 'PKI', slug: 'public-key-infrastructure-explained', tip: 'Public key infrastructure for identity systems' },
      { text: 'Trust Anchors', slug: 'understanding-trust-anchors', tip: 'Root certificates that establish chains of trust' },
      { text: 'Certificate Chains', slug: 'certificate-chains-and-validation', tip: 'How certificates validate back to a trust root' },
      { text: 'Selective Disclosure', slug: 'selective-disclosure', tip: 'Reveal only what is needed - nothing more' },
      { text: 'Zero-Knowledge Proofs', slug: 'zero-knowledge-predicates-identity', tip: 'Prove a fact without revealing the underlying data' },
    ],
  },
  {
    label: 'Deployment',
    color: '#e65100',
    description: 'Real-world deployment patterns - airports, enterprises, kiosks, and edge devices.',
    nodes: [
      { text: 'Offline Verification', slug: 'offline-verification-guide', tip: 'Verify credentials without network connectivity' },
      { text: 'Airline Boarding', slug: 'deploy-airline-boarding', tip: 'Gate-to-gate identity verification flow' },
      { text: 'Enterprise Access', slug: 'deploy-enterprise-access', tip: 'Employee credential-based access control' },
      { text: 'Age Verification', slug: 'deploy-age-verification', tip: 'Prove age without revealing birth date' },
      { text: 'Membership Credentials', slug: 'deploy-membership-credentials', tip: 'Portable membership and loyalty credentials' },
    ],
  },
  {
    label: 'Governance',
    color: '#2e7d32',
    description: 'Compliance frameworks, policy engines, trust registries, and wallet architecture.',
    nodes: [
      { text: 'Compliance Profiles', slug: 'compliance-profiles-bridging-regulation', tip: 'Map regulatory requirements to protocol rules' },
      { text: 'Cedar Policies', slug: 'cedar-policies-for-identity-governance', tip: 'Fine-grained authorization with Cedar policy language' },
      { text: 'Trust Registries', slug: 'building-trust-registries-at-scale', tip: 'Directories of trusted issuers and verifiers' },
      { text: 'Wallet Architectures', slug: 'mobile-wallet-architectures', tip: 'How mobile wallets store and present credentials' },
    ],
  },
]);

function SystemMap() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [collapsed, setCollapsed] = useState({});

  const toggleLayer = (label) => {
    setCollapsed((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Typography
        variant="overline"
        sx={{
          fontWeight: 800,
          letterSpacing: 2,
          fontSize: '0.65rem',
          color: 'text.secondary',
          display: 'block',
          mb: 0.5,
        }}
      >
        Identity Infrastructure Map
      </Typography>
      <Typography
        variant="h4"
        fontWeight={800}
        sx={{
          fontSize: { xs: '1.5rem', md: '1.85rem' },
          lineHeight: 1.3,
          mb: 1,
        }}
      >
        The System at a Glance
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: 580, lineHeight: 1.7, fontSize: '1rem', mb: 4 }}
      >
        Six reader-facing layers organize the handbook from foundations to governance.
        The five protocol primitives live inside the Protocol Model layer.
      </Typography>

      {/* Map grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 0,
          border: '1px solid',
          borderColor: 'grey.200',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        {LAYERS.map((layer, layerIdx) => {
          const isCollapsed = isMobile && collapsed[layer.label];
          return (
            <Box
              key={layer.label}
              sx={{
                borderBottom: isMobile
                  ? (layerIdx < LAYERS.length - 1 ? '1px solid' : 'none')
                  : (layerIdx < LAYERS.length - 3 ? '1px solid' : 'none'),
                borderRight: isMobile
                  ? 'none'
                  : ((layerIdx % 3 !== 2) ? '1px solid' : 'none'),
                borderColor: 'grey.200',
                p: { xs: 2.5, md: 3 },
              }}
            >
              {/* Layer header */}
              <Box
                onClick={isMobile ? () => toggleLayer(layer.label) : undefined}
                sx={{
                  mb: isCollapsed ? 0 : 2,
                  pb: 1.5,
                  borderBottom: '2px solid',
                  borderColor: layer.color,
                  cursor: isMobile ? 'pointer' : 'default',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      bgcolor: layer.color,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      letterSpacing: 0.5,
                      color: layer.color,
                      textTransform: 'uppercase',
                      flexGrow: 1,
                    }}
                  >
                    {layer.label}
                  </Typography>
                  {isMobile && (
                    isCollapsed
                      ? <ExpandMoreIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                      : <ExpandLessIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                  )}
                </Box>
                <Typography
                  variant="caption"
                  sx={{ display: 'block', mt: 0.75, color: 'text.secondary', fontSize: '0.72rem', lineHeight: 1.45 }}
                >
                  {layer.description}
                </Typography>
              </Box>

              {/* Nodes */}
              <Collapse in={!isCollapsed} timeout={200}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {layer.nodes.map((node, nodeIdx) => (
                    <Box
                      key={node.slug}
                      sx={{ display: 'flex', alignItems: 'stretch' }}
                    >
                      {/* Tree connector */}
                      <Box
                        sx={{
                          width: 20,
                          flexShrink: 0,
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: 4,
                            top: 0,
                            bottom: nodeIdx === layer.nodes.length - 1 ? '50%' : 0,
                            width: '1.5px',
                            bgcolor: 'grey.300',
                          },
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            left: 4,
                            top: '50%',
                            width: 12,
                            height: '1.5px',
                            bgcolor: 'grey.300',
                          },
                        }}
                      />

                      {/* Node link with tooltip */}
                      <Tooltip
                        title={node.tip}
                        placement="right"
                        arrow
                        enterDelay={300}
                        leaveDelay={0}
                      >
                        <Typography
                          component={Link}
                          to={`/blog/${node.slug}`}
                          sx={{
                            display: 'block',
                            py: 0.6,
                            fontSize: '0.84rem',
                            fontWeight: 500,
                            color: 'text.primary',
                            lineHeight: 1.4,
                            textDecoration: 'none',
                            transition: 'color 0.12s',
                            '&:hover': { color: layer.color, textDecoration: 'underline' },
                          }}
                        >
                          {node.text}
                        </Typography>
                      </Tooltip>
                    </Box>
                  ))}
                </Box>
              </Collapse>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default SystemMap;