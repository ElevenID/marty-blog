import { describe, expect, it } from 'vitest';

import { buildSocialManifest, canonicalBlogUrl, sourceHashForPost } from '../../scripts/social-manifest.mjs';

describe('social manifest exporter', () => {
  it('exports only browse-visible blog posts with canonical LinkedIn-ready fields', () => {
    const manifest = buildSocialManifest([
      {
        slug: 'test-only-unmapped-post',
        title: 'What Is Digital Identity?',
        summary: 'A clear primer for reusable identity infrastructure.',
        authorId: 'daniel-ortega',
        date: '2025-01-01',
        category: 'Foundations',
      },
      {
        slug: 'selective-disclosure-explained',
        title: 'Legacy disclosure explainer',
        summary: 'Legacy page.',
        authorId: 'nora-patel',
        date: '2025-01-01',
        category: 'Privacy',
      },
      {
        slug: 'impl-oid4vci',
        title: 'Hidden guide collision',
        summary: 'Hidden from browse surfaces.',
        authorId: 'victor-leclerc',
        date: '2025-01-01',
        category: 'Implementation',
      },
      {
        slug: 'why-identity-needs-a-protocol',
        title: 'Future post',
        summary: 'Not public yet.',
        authorId: 'daniel-ortega',
        date: '2999-01-01',
        category: 'Business',
      },
    ]);

    expect(manifest).toEqual([
      {
        slug: 'test-only-unmapped-post',
        title: 'What Is Digital Identity?',
        summary: 'A clear primer for reusable identity infrastructure.',
        authorId: 'daniel-ortega',
        date: '2025-01-01',
        category: 'Foundations',
        canonicalUrl: 'https://elevenidllc.com/blog/test-only-unmapped-post',
        socialImagePath: '/images/social/elevenid-blog-default.png',
        socialImageUrl: 'https://elevenidllc.com/images/social/elevenid-blog-default.png',
        socialImageAlt: 'What Is Digital Identity? social preview image for ElevenID LLC',
        socialImages: expect.objectContaining({
          master: expect.objectContaining({
            path: '/images/social/master/elevenid-blog-default-master.png',
          }),
          platforms: expect.objectContaining({
            linkedin: expect.objectContaining({
              path: '/images/social/elevenid-blog-default.png',
            }),
            twitter: expect.objectContaining({
              path: '/images/social/platforms/elevenid-blog-default-twitter.png',
            }),
          }),
        }),
        imageGenerationPrompt: expect.stringContaining('What Is Digital Identity?'),
        imageReviewStatus: 'seeded_placeholder',
        sourceHash: expect.any(String),
      },
    ]);
  });

  it('supports a configurable canonical base URL and stable source hash', () => {
    const post = {
      slug: 'why-identity-needs-a-protocol',
      title: 'Why Identity Needs a Protocol',
      summary: 'Identity should behave like reusable infrastructure.',
      authorId: 'daniel-ortega',
      date: '2025-01-01',
      category: 'Business',
    };
    const url = canonicalBlogUrl(post.slug, 'https://example.test/');

    expect(url).toBe('https://example.test/blog/why-identity-needs-a-protocol');
    expect(sourceHashForPost(post, url)).toBe(sourceHashForPost({ ...post }, url));
    expect(sourceHashForPost({ ...post, summary: 'Changed.' }, url)).not.toBe(sourceHashForPost(post, url));

    const [manifestPost] = buildSocialManifest([post], { baseUrl: 'https://example.test/' });
    expect(manifestPost.socialImagePath).toBe('/images/social/why-identity-needs-a-protocol.png');
    expect(manifestPost.socialImageUrl).toBe('https://example.test/images/social/why-identity-needs-a-protocol.png');
    expect(manifestPost.socialImages.platforms.linkedin.width).toBe(1200);
    expect(manifestPost.socialImages.platforms.linkedin.height).toBe(627);
    expect(manifestPost.socialImages.platforms.twitter.path).toBe('/images/social/platforms/why-identity-needs-a-protocol-twitter.png');
  });
});
