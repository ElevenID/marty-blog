import { describe, expect, it } from 'vitest';

import * as PUBLIC_BLOG_DATA from '../data/index.js';
import { BLOG_POST_DRAFTS } from '../data/blogPostDrafts.js';
import { BLOG_POSTS } from '../data/blogPosts.js';

const INTERNAL_EDITORIAL_SCAFFOLDING = [
  /\bReader or system question:/i,
  /\bpublication spine\b/i,
  /\bopening path through the publication\b/i,
  /\bnavigation contract\b/i,
  /\bcontinue with\b/i,
  /\bThat is the point of this post\b/i,
  /^Why readers need a map$/i,
];

describe('public blog editorial copy', () => {
  it('does not contain internal reading-path scaffolding', () => {
    const prose = BLOG_POSTS.flatMap((post) =>
      post.content
        .filter((block) => block.type === 'heading' || block.type === 'paragraph')
        .map((block) => `${post.slug}: ${block.text}`),
    );

    for (const pattern of INTERNAL_EDITORIAL_SCAFFOLDING) {
      expect(prose.filter((text) => pattern.test(text))).toEqual([]);
    }
  });
});

describe('unpublished editorial drafts', () => {
  it('keeps complete, uniquely named drafts outside the public data surface', () => {
    const liveSlugs = new Set(BLOG_POSTS.map((post) => post.slug));
    const draftSlugs = BLOG_POST_DRAFTS.map((post) => post.slug);

    expect(BLOG_POST_DRAFTS.length).toBeGreaterThan(0);
    expect(new Set(draftSlugs).size).toBe(draftSlugs.length);
    expect(PUBLIC_BLOG_DATA).not.toHaveProperty('BLOG_POST_DRAFTS');

    for (const draft of BLOG_POST_DRAFTS) {
      expect(draft).toMatchObject({
        status: 'draft',
        slug: expect.any(String),
        title: expect.any(String),
        summary: expect.any(String),
        authorId: expect.any(String),
        category: expect.any(String),
        readTime: expect.any(String),
      });
      expect(liveSlugs.has(draft.slug)).toBe(false);
      expect(draft.content.length).toBeGreaterThan(0);
      expect(draft.content.every((block) => typeof block.type === 'string')).toBe(true);
    }
  });
});
