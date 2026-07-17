import { describe, expect, it } from 'vitest';

import { BLOG_POSTS } from '../data/blogPosts.js';
import { BLOG_POST_SUMMARIES } from '../data/blogPostSummaries.js';

describe('blog post summaries', () => {
  it('stay aligned with full post card fields', () => {
    expect(BLOG_POST_SUMMARIES).toHaveLength(BLOG_POSTS.length);
    expect(BLOG_POST_SUMMARIES.map((post) => post.slug)).toEqual(BLOG_POSTS.map((post) => post.slug));

    const postsBySlug = new Map(BLOG_POSTS.map((post) => [post.slug, post]));

    for (const summary of BLOG_POST_SUMMARIES) {
      const post = postsBySlug.get(summary.slug);

      if (!post) {
        throw new Error(`Missing full post for summary ${summary.slug}`);
      }

      expect(summary).toMatchObject({
        slug: post.slug,
        title: post.title,
        summary: post.summary,
        authorId: post.authorId,
        date: post.date,
        category: post.category,
        readTime: post.readTime,
      });

      if (post.updatedDate) {
        expect(summary.updatedDate).toBe(post.updatedDate);
      } else {
        expect(summary).not.toHaveProperty('updatedDate');
      }

      expect(summary).not.toHaveProperty('content');
    }
  });
});