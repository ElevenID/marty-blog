/**
 * Blog Post Page
 *
 * Renders an individual blog post by slug from the BLOG_POSTS data.
 * If the slug matches a guide article, delegates to ProtocolGuidePage.
 * Includes related articles based on matching category, and concept tags.
 */

import { Box, Typography, Paper, Chip, Button, Divider, Avatar, Grid, Card, CardContent, CardActionArea, useMediaQuery, useTheme } from '@mui/material';
import { SEOHead } from '../seo';
import { articleSchema } from '../seo/structuredData';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BLOG_POSTS, BLOG_AUTHORS } from '../data';
import { GUIDE_ARTICLE_MAP, BLOG_POST_CONCEPT_TAGS, BLOG_POST_STANDARDS_TAGS } from '../data';
import { SERIES_BY_POST_SLUG } from '../data';
import { getBlogSocialImageUrl } from '../data/blogSocialImages';
import ProtocolGuidePage from './ProtocolGuidePage';
import SeriesNav from './SeriesNav';
import ProtocolContextHeader from './ProtocolContextHeader';
import ArticleTableOfContents from './ArticleTableOfContents';
import ContinueLearning from './ContinueLearning';
import ArticleContent from './ArticleContent';
import Breadcrumbs from './Breadcrumbs';
import ReadingProgressBar from './ReadingProgressBar';
import AIDisclosureBanner from './AIDisclosureBanner';
import ProductBridgeCTA from './ProductBridgeCTA';
import { getBrowseVisiblePosts, getCanonicalArticleSlug, getLegacyArticleMeta } from '../data/articleMeta';
import { buildBlogTagPath } from '../utils/blogTagRoutes';

const TODAY = new Date().toISOString().split('T')[0];

const CATEGORY_COLORS = {
  Announcement: 'primary',
  Technical: 'info',
  Business: 'success',
  Cryptography: 'warning',
  Guide: 'secondary',
};

function BlogPostPage() {
  const { slug } = useParams();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Delegate to ProtocolGuidePage for guide articles
  if (GUIDE_ARTICLE_MAP[slug]) {
    return <ProtocolGuidePage />;
  }

  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const legacyMeta = getLegacyArticleMeta(slug);
  const canonicalSlug = getCanonicalArticleSlug(slug);
  const canonicalPost = canonicalSlug !== slug
    ? BLOG_POSTS.find((p) => p.slug === canonicalSlug)
    : null;
  const author = post ? (BLOG_AUTHORS[post.authorId] || {}) : {};
  const conceptTags = (BLOG_POST_CONCEPT_TAGS[slug] || []);
  const standardsTags = (BLOG_POST_STANDARDS_TAGS[slug] || []);
  const seriesInfo = SERIES_BY_POST_SLUG[slug] || null;

  // Related: same category, already published, not this post, up to 3
  const relatedPosts = post
    ? getBrowseVisiblePosts(BLOG_POSTS).filter(
        (p) => p.slug !== post.slug && p.category === post.category,
      )
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3)
    : [];

  if (!post) {
    return (
      <Box sx={{ textAlign: 'center', py: 10 }}>
        <Typography variant="h4" gutterBottom>Post not found</Typography>
        <Button variant="outlined" component={Link} to="/blog" startIcon={<ArrowBackIcon />}>
          Back to Blog
        </Button>
      </Box>
    );
  }

  const dateStr = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const updatedStr = post.updatedDate
    ? new Date(post.updatedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : null;
  const socialImageUrl = getBlogSocialImageUrl(canonicalSlug);

  return (
    <Box>
      <ReadingProgressBar />
      <SEOHead
        title={post.title}
        description={post.summary}
        canonicalPath={`/blog/${canonicalSlug}`}
        ogImage={socialImageUrl}
        keywords={['MIP', 'identity protocol', post.category.toLowerCase(), 'verifiable credentials']}
        ogType="article"
        ogMeta={{
          'article:published_time': post.date,
          'article:author': author.name || 'The MIP Authors',
          'article:section': post.category,
          'og:image:width': 1200,
          'og:image:height': 627,
        }}
        structuredData={articleSchema({
          headline: post.title,
          description: post.summary,
          datePublished: post.date,
          dateModified: post.updatedDate || post.date,
          authorName: author.name || 'The MIP Authors',
          authorType: author.name ? 'Person' : 'Organization',
          url: `https://elevenidllc.com/blog/${canonicalSlug}`,
          image: socialImageUrl,
        })}
      />

      {/* Back link */}
      <Button component={Link} to="/blog" startIcon={<ArrowBackIcon />} sx={{ mb: 1 }}>
        All Posts
      </Button>

      {/* Breadcrumb navigation */}
      <Breadcrumbs slug={slug} title={post.title} />

      {/* Canonical handoff for legacy merge surfaces */}
      {legacyMeta && canonicalPost && (
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 2.5, md: 3 },
            mb: 3,
            borderRadius: 2,
            borderColor: 'warning.light',
            borderLeft: '4px solid',
            borderLeftColor: 'warning.main',
            bgcolor: 'warning.50',
          }}
        >
          <Typography
            variant="overline"
            sx={{ display: 'block', fontWeight: 800, letterSpacing: 1.5, fontSize: '0.65rem', color: 'warning.dark', mb: 0.75 }}
          >
            Legacy explainer
          </Typography>
          <Typography variant="h6" fontWeight={800} gutterBottom>
            Start with {canonicalPost.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
            {legacyMeta.legacyNotice}
          </Typography>
          <Button
            variant="contained"
            color="warning"
            component={Link}
            to={`/blog/${canonicalSlug}`}
            endIcon={<ArrowForwardIcon />}
            sx={{ fontWeight: 700 }}
          >
            Read {canonicalPost.title}
          </Button>
        </Paper>
      )}

      {/* Post header */}
      <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, mb: 4, bgcolor: 'grey.50', borderRadius: 2 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          <Chip label={post.category} size="small" color={CATEGORY_COLORS[post.category] || 'primary'} sx={{ fontWeight: 600 }} />
          <Chip label={post.readTime} size="small" variant="outlined" />
          {standardsTags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              sx={{ fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 700, borderColor: 'info.main', color: 'info.main' }}
            />
          ))}
          {conceptTags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              color="default"
              clickable
              component={Link}
              to={buildBlogTagPath(tag)}
              sx={{ fontFamily: 'monospace', fontSize: '0.75rem' }}
            />
          ))}
        </Box>
        <Typography variant="h3" component="h1" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
          {post.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {post.summary}
        </Typography>
        {/* Author + date metadata row */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
          <Avatar
            component={Link}
            to={`/authors/${post.authorId}`}
            src={author.avatarImage}
            sx={{ width: 40, height: 40, bgcolor: 'primary.main', fontSize: '0.85rem', textDecoration: 'none' }}
          >
            {author.avatar || '?'}
          </Avatar>
          <Box>
            <Typography
              variant="body2"
              fontWeight={600}
              component={Link}
              to={`/authors/${post.authorId}`}
              sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main', textDecoration: 'underline' } }}
            >
              {author.name || post.authorId}{author.title ? ` | ${author.title}` : ''}{author.subtitle ? ` - ${author.subtitle}` : ''}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {dateStr}{updatedStr && ` | Updated ${updatedStr}`} | {post.readTime} | {post.category}
            </Typography>
            {author.expertise && author.expertise.length > 0 && (
              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mt: 0.75 }}>
                {author.expertise.slice(0, 4).map((tag) => (
                  <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ fontSize: '0.65rem', height: 20, fontWeight: 600, color: 'text.secondary' }} />
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Paper>

      {/* Series navigation (top) */}
      {seriesInfo && (
        <Box sx={{ mb: 3 }}>
          <SeriesNav seriesInfo={seriesInfo} />
        </Box>
      )}

      {/* Protocol context header */}
      <ProtocolContextHeader slug={slug} />

      <Divider sx={{ mb: 4 }} />

      {/* Post body + ToC sidebar */}
      <Box sx={{ display: 'flex', gap: 0 }}>
        <Box sx={{ maxWidth: 780, flexGrow: 1, minWidth: 0 }}>
          <ArticleContent content={post.content} currentSlug={slug} />
        </Box>

        {/* Sticky table of contents (desktop only) */}
        {isDesktop && <ArticleTableOfContents content={post.content} />}
      </Box>

      {/* AI authorship disclosure */}
      <AIDisclosureBanner />

      {/* Continue Learning - protocol-aware next-step guidance */}
      <ContinueLearning slug={slug} />

      {/* Author bio */}
      {author.bio && (
        <Paper variant="outlined" sx={{ p: 3, mt: 6, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Avatar
              component={Link}
              to={`/authors/${post.authorId}`}
              src={author.avatarImage}
              sx={{ width: 48, height: 48, bgcolor: 'primary.main', fontSize: '1rem', flexShrink: 0, textDecoration: 'none' }}
            >
              {author.avatar}
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                component={Link}
                to={`/authors/${post.authorId}`}
                sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                {author.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {author.title}{author.subtitle ? ` - ${author.subtitle}` : ''}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.5 }}>{author.bio}</Typography>
              {author.expertise && author.expertise.length > 0 && (
                <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 1.5 }}>
                  {author.expertise.map((tag) => (
                    <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ fontFamily: 'monospace', fontSize: '0.7rem' }} />
                  ))}
                </Box>
              )}
              {author.disclosure && (
                <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  {author.disclosure}
                </Typography>
              )}
            </Box>
          </Box>
        </Paper>
      )}

      {/* Series navigation (bottom) */}
      {seriesInfo && (
        <Box sx={{ mt: 6 }}>
          <SeriesNav seriesInfo={seriesInfo} />
        </Box>
      )}

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <Box sx={{ mt: 8 }}>
          <Divider sx={{ mb: 4 }} />
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Related Articles
          </Typography>
          <Grid container spacing={3}>
            {relatedPosts.map((related) => {
              const relatedAuthor = BLOG_AUTHORS[related.authorId] || {};
              return (
                <Grid item xs={12} sm={6} md={4} key={related.slug}>
                  <Card
                    elevation={1}
                    sx={{
                      height: '100%',
                      borderRadius: 2,
                      transition: 'all 0.2s',
                      '&:hover': { transform: 'translateY(-3px)', boxShadow: 5 },
                    }}
                  >
                    <CardActionArea
                      component={Link}
                      to={`/blog/${related.slug}`}
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                    >
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Chip
                          label={related.category}
                          size="small"
                          color={CATEGORY_COLORS[related.category] || 'default'}
                          sx={{ mb: 1.5, fontWeight: 600 }}
                        />
                        <Typography variant="h6" fontWeight={700} gutterBottom sx={{ fontSize: '1rem', lineHeight: 1.4 }}>
                          {related.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '0.85rem' }}>
                          {related.summary}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {relatedAuthor.name || related.authorId} | {related.readTime}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}

      {/* Context-aware product CTA */}
      <ProductBridgeCTA slug={slug} />

      <Divider sx={{ my: 6 }} />

      {/* Footer nav */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Button variant="outlined" component={Link} to="/blog" startIcon={<ArrowBackIcon />}>
          All Posts
        </Button>
        <Button variant="contained" component={Link} to="/protocol" endIcon={<ArrowForwardIcon />}>
          Explore the Protocol
        </Button>
      </Box>
    </Box>
  );
}

export default BlogPostPage;
