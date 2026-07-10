import { describe, expect, it } from 'vitest';

import { buildBlogGrammarReviewManifest } from '../../scripts/grammar-review-manifest.mjs';

describe('grammar review manifest exporter', () => {
  it('exports stable Grammarly review blocks for browse-visible blog posts only', () => {
    const manifest = buildBlogGrammarReviewManifest([
      {
        slug: 'what-is-digital-identity',
        title: 'What Is Digital Identity?',
        summary: 'A concise primer for reusable identity infrastructure.',
        authorId: 'daniel-ortega',
        date: '2025-01-01',
        category: 'Foundations',
        content: [
          { type: 'paragraph', text: 'Identity systems need clear trust boundaries.' },
          { type: 'heading', text: 'Why protocols matter' },
          { type: 'code', code: '{"protected": true}' },
        ],
      },
      {
        slug: 'selective-disclosure-explained',
        title: 'Legacy disclosure explainer',
        summary: 'Legacy page.',
        authorId: 'nora-patel',
        date: '2025-01-01',
        category: 'Privacy',
        content: [{ type: 'paragraph', text: 'Hidden legacy content.' }],
      },
      {
        slug: 'why-identity-needs-a-protocol',
        title: 'Future post',
        summary: 'Not public yet.',
        authorId: 'daniel-ortega',
        date: '2999-01-01',
        category: 'Business',
        content: [{ type: 'paragraph', text: 'Future content.' }],
      },
    ]);

    expect(manifest).toMatchObject({
      version: 1,
      source: 'marty-blog',
      contentScope: 'blog',
    });
    expect(manifest.documents).toHaveLength(1);
    expect(manifest.documents[0]).toMatchObject({
      documentId: 'blog:what-is-digital-identity',
      sourceRepo: 'marty-blog',
      sourcePath: 'src/data/blogPosts.js',
      slug: 'what-is-digital-identity',
      canonicalUrl: 'https://elevenidllc.com/blog/what-is-digital-identity',
      authorId: 'daniel-ortega',
      sourceHash: expect.any(String),
    });
    expect(manifest.documents[0].blocks).toEqual([
      expect.objectContaining({
        id: 'blog:what-is-digital-identity:title',
        kind: 'title',
        sourceField: 'title',
        protected: false,
      }),
      expect.objectContaining({
        id: 'blog:what-is-digital-identity:summary',
        kind: 'summary',
        sourceField: 'summary',
        protected: false,
      }),
      expect.objectContaining({
        id: 'blog:what-is-digital-identity:content:0000:paragraph',
        kind: 'paragraph',
        sourceField: 'content[0]',
        protected: false,
      }),
      expect.objectContaining({
        id: 'blog:what-is-digital-identity:content:0001:heading',
        kind: 'heading',
        sourceField: 'content[1]',
        protected: false,
      }),
      expect.objectContaining({
        id: 'blog:what-is-digital-identity:content:0002:code',
        kind: 'code',
        sourceField: 'content[2]',
        protected: true,
      }),
    ]);
  });

  it('keeps source hashes stable until review-relevant text changes', () => {
    const post = {
      slug: 'what-is-digital-identity',
      title: 'What Is Digital Identity?',
      summary: 'A concise primer.',
      authorId: 'daniel-ortega',
      date: '2025-01-01',
      category: 'Foundations',
      content: [{ type: 'paragraph', text: 'Identity systems need clear trust boundaries.' }],
    };

    const first = buildBlogGrammarReviewManifest([post]).documents[0].sourceHash;
    const second = buildBlogGrammarReviewManifest([{ ...post }]).documents[0].sourceHash;
    const changed = buildBlogGrammarReviewManifest([
      { ...post, content: [{ type: 'paragraph', text: 'Identity systems need explicit trust boundaries.' }] },
    ]).documents[0].sourceHash;

    expect(second).toBe(first);
    expect(changed).not.toBe(first);
  });

  it('filters review documents by explicit slug, category, and roadmap phase', () => {
    const posts = [
      {
        slug: 'business-case-for-credential-portability',
        title: 'Credential Portability',
        summary: 'A business summary.',
        authorId: 'daniel-ortega',
        date: '2025-01-01',
        category: 'Business',
        content: [{ type: 'paragraph', text: 'Portability changes buyer behavior.' }],
      },
      {
        slug: 'what-is-digital-identity',
        title: 'What Is Digital Identity?',
        summary: 'A concise primer.',
        authorId: 'daniel-ortega',
        date: '2025-01-01',
        category: 'Technical',
        content: [{ type: 'paragraph', text: 'Identity systems need clear trust boundaries.' }],
      },
      {
        slug: 'public-key-infrastructure-explained',
        title: 'Public Key Infrastructure Explained',
        summary: 'A PKI primer.',
        authorId: 'marcus-vale',
        date: '2025-01-01',
        category: 'Cryptography',
        content: [{ type: 'paragraph', text: 'PKI binds keys to issuers.' }],
      },
    ];

    expect(
      buildBlogGrammarReviewManifest(posts, {
        documentSet: 'slug:what-is-digital-identity,business-case-for-credential-portability',
      }).documents.map((document) => document.slug),
    ).toEqual(['what-is-digital-identity', 'business-case-for-credential-portability']);

    expect(
      buildBlogGrammarReviewManifest(posts, { documentSet: 'category:Business' }).documents.map((document) => document.slug),
    ).toEqual(['business-case-for-credential-portability']);

    expect(
      buildBlogGrammarReviewManifest(posts, { documentSet: 'roadmap-phase-1' }).documents.map((document) => document.slug),
    ).toEqual(['what-is-digital-identity', 'public-key-infrastructure-explained']);
  });
});
