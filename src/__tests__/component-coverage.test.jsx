// @vitest-environment jsdom

import React from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import AIDisclosureBanner from '../components/AIDisclosureBanner.jsx';
import ArticleContent from '../components/ArticleContent.jsx';
import ArticleTableOfContents from '../components/ArticleTableOfContents.jsx';
import AuthorPage from '../components/AuthorPage.jsx';
import AuthorsPage from '../components/AuthorsPage.jsx';
import BlogPage from '../components/BlogPage.jsx';
import BlogPostPage from '../components/BlogPostPage.jsx';
import BlogSubNav from '../components/BlogSubNav.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import ChooseYourPathSection from '../components/ChooseYourPathSection.jsx';
import ContinueLearning from '../components/ContinueLearning.jsx';
import FoundationsPage from '../components/FoundationsPage.jsx';
import HeroSection from '../components/HeroSection.jsx';
import ProductBridgeCTA from '../components/ProductBridgeCTA.jsx';
import ProtocolContextHeader from '../components/ProtocolContextHeader.jsx';
import ProtocolDiagramSection from '../components/ProtocolDiagramSection.jsx';
import ProtocolGuidePage from '../components/ProtocolGuidePage.jsx';
import ReadingProgressBar from '../components/ReadingProgressBar.jsx';
import SectionedArticleFeed from '../components/SectionedArticleFeed.jsx';
import SeriesBlock from '../components/SeriesBlock.jsx';
import SeriesNav from '../components/SeriesNav.jsx';
import StartHereSection from '../components/StartHereSection.jsx';
import SystemMap from '../components/SystemMap.jsx';
import { BLOG_AUTHORS } from '../data/blogAuthors.js';
import { BLOG_POSTS } from '../data/blogPosts.js';
import { BLOG_POST_SUMMARIES } from '../data/blogPostSummaries.js';
import { BLOG_SERIES } from '../data/blogSeries.js';
import { GUIDE_ARTICLES } from '../data/guideContent.js';
import { HANDBOOK_ARTICLE_SLUGS } from '../data/handbookContent.js';
import SEOHead from '../seo/SEOHead.jsx';
import {
  articleSchema,
  breadcrumbListSchema,
  collectionPageSchema,
  organizationSchema,
  personSchema,
  protocolSchema,
  softwareApplicationSchema,
} from '../seo/structuredData.js';

class ImmediateIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe(element) {
    this.callback([{ isIntersecting: true, target: element }]);
  }

  unobserve() {}
  disconnect() {}
}

beforeAll(() => {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
  window.IntersectionObserver = ImmediateIntersectionObserver;
  globalThis.IntersectionObserver = ImmediateIntersectionObserver;
  window.requestAnimationFrame = (callback) => callback();
  window.cancelAnimationFrame = vi.fn();
  window.scrollTo = vi.fn();
  Element.prototype.scrollIntoView = vi.fn();
});

afterEach(() => {
  cleanup();
  document.head.querySelectorAll('meta, link, script[data-seo-jsonld], script[data-seo-breadcrumb]').forEach((node) => node.remove());
});

function renderRoute(path, pattern, element) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path={pattern} element={element} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('published pages', () => {
  it('renders the blog home, search, and tag routes', () => {
    renderRoute('/', '/', <BlogPage />);
    expect(screen.getAllByText(/Marty/i).length).toBeGreaterThan(0);
    cleanup();

    renderRoute('/?q=trust', '/', <BlogPage />);
    expect(document.body.textContent).toMatch(/trust/i);
    cleanup();

    renderRoute('/tag/cryptography', '/tag/:tag', <BlogPage />);
    expect(document.body.textContent).toMatch(/cryptography/i);
  });

  it('renders author list, known author, and missing author routes', () => {
    renderRoute('/authors', '/authors', <AuthorsPage />);
    expect(document.body.textContent).toMatch(/authors/i);
    cleanup();

    renderRoute('/authors/daniel-ortega', '/authors/:authorId', <AuthorPage />);
    expect(document.body.textContent).toMatch(/Daniel Ortega/i);
    cleanup();

    renderRoute('/authors/missing', '/authors/:authorId', <AuthorPage />);
    expect(screen.getByText('Author not found')).toBeTruthy();
  });

  it('renders known and missing blog posts', () => {
    renderRoute('/blog/why-identity-needs-a-protocol', '/blog/:slug', <BlogPostPage />);
    expect(document.body.textContent).toMatch(/Why Identity Needs a Protocol/i);
    cleanup();

    renderRoute('/blog/missing', '/blog/:slug', <BlogPostPage />);
    expect(document.body.textContent).toMatch(/not found/i);
  });

  it('renders guide and foundation routes', () => {
    renderRoute('/guide/foundations-identity', '/guide/:slug', <ProtocolGuidePage />);
    expect(document.body.textContent).toMatch(/Digital Identity/i);
    cleanup();

    renderRoute('/guide/missing', '/guide/:slug', <ProtocolGuidePage />);
    expect(document.body.textContent).toMatch(/not found/i);
    cleanup();

    renderRoute('/foundations', '/foundations', <FoundationsPage />);
    expect(document.body.textContent).toMatch(/foundation/i);
  });

  it('renders every author', () => {
    for (const authorId of Object.keys(BLOG_AUTHORS)) {
      renderRoute(`/authors/${authorId}`, '/authors/:authorId', <AuthorPage />);
      expect(document.body.textContent).toContain(BLOG_AUTHORS[authorId].name);
      cleanup();
    }
  });

  it('renders representative blog article variants', () => {
    for (const post of BLOG_POSTS.slice(0, 12)) {
      renderRoute(`/blog/${post.slug}`, '/blog/:slug', <BlogPostPage />);
      expect(document.body.textContent).toContain(post.title);
      cleanup();
    }
  });

  it('renders representative guide article variants', () => {
    for (const article of GUIDE_ARTICLES.slice(0, 8)) {
      renderRoute(`/guide/${article.slug}`, '/guide/:slug', <ProtocolGuidePage />);
      expect(document.body.textContent).toContain(article.title);
      cleanup();
    }
  });
});

describe('shared components', () => {
  it('renders article blocks and a table of contents', () => {
    const content = [
      { type: 'heading', text: 'Trust & Verification' },
      { type: 'paragraph', text: 'Trust profiles connect credential and verifier policy.' },
      { type: 'code', label: 'JSON', lang: 'json', code: '{"verified":true}' },
      {
        type: 'resources',
        title: 'References',
        items: [
          { label: 'Protocol', href: 'https://example.com/protocol', note: 'Normative reference' },
          { label: 'Local guide', href: '/guide/foundations-identity' },
        ],
      },
    ];

    render(
      <MemoryRouter>
        <ArticleContent content={content} currentSlug="trust-profiles-explained" />
        <ArticleTableOfContents content={content} />
      </MemoryRouter>,
    );
    expect(screen.getAllByText('Trust & Verification').length).toBeGreaterThan(0);
    expect(screen.getByText('Normative reference')).toBeTruthy();
  });

  it('renders navigation, protocol, and SEO helpers', () => {
    const onSearch = vi.fn();
    const onNavigateAuthors = vi.fn();
    const onPathClick = vi.fn();

    render(
      <MemoryRouter>
        <SEOHead title="Quality" description="Quality description" canonical="/quality" keywords={['identity']} structuredData={{ '@type': 'Article' }} />
        <AIDisclosureBanner />
        <Breadcrumbs slug="why-identity-needs-a-protocol" title="Why Identity Needs a Protocol" />
        <BlogSubNav searchValue="" onSearch={onSearch} onNavigateAuthors={onNavigateAuthors} />
        <ChooseYourPathSection onPathClick={onPathClick} />
        <ContinueLearning slug="why-identity-needs-a-protocol" />
        <HeroSection />
        <ProductBridgeCTA slug="why-identity-needs-a-protocol" />
        <ProductBridgeCTA slug="missing" />
        <ProtocolContextHeader slug="why-identity-needs-a-protocol" />
        <ProtocolContextHeader slug="missing" />
        <ProtocolDiagramSection />
        <ReadingProgressBar />
        <StartHereSection />
        <SystemMap />
      </MemoryRouter>,
    );

    expect(document.title).toMatch(/Quality/);
    const searchButton = screen.getAllByRole('button').find((button) => button.getAttribute('aria-label')?.toLowerCase().includes('search'));
    if (searchButton) fireEvent.click(searchButton);
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(document.body.textContent).toMatch(/protocol/i);
  });

  it('renders series and both section-feed modes', () => {
    const navigate = vi.fn();
    const Card = ({ post }) => <button onClick={() => navigate(post.slug)}>{post.title}</button>;
    const Featured = ({ post }) => <button onClick={() => navigate(post.slug)}>{post.title}</button>;
    const firstSeries = Object.values(BLOG_SERIES)[0];

    const { rerender } = render(
      <MemoryRouter>
        <SeriesBlock series={firstSeries} navigate={navigate} />
        <SeriesNav seriesInfo={{ title: 'Series', current: 1, total: 3, previous: BLOG_POST_SUMMARIES[0], next: BLOG_POST_SUMMARIES[1] }} />
        <SectionedArticleFeed navigate={navigate} PostCard={Card} FeaturedCard={Featured} topicFilter="All" />
      </MemoryRouter>,
    );
    expect(document.body.textContent).toMatch(/articles/i);

    rerender(
      <MemoryRouter>
        <SectionedArticleFeed
          navigate={navigate}
          PostCard={Card}
          FeaturedCard={Featured}
          categoryFilter="Business"
          searchFilter="identity"
          topicFilter="All"
          featuredOnly
        />
      </MemoryRouter>,
    );
    expect(document.querySelectorAll('button').length).toBeGreaterThan(0);
  });

  it('exercises continuation modes and interactive filter branches', () => {
    for (const post of BLOG_POSTS) {
      render(
        <MemoryRouter>
          <ContinueLearning slug={post.slug} />
        </MemoryRouter>,
      );
      cleanup();
    }
    for (const slug of HANDBOOK_ARTICLE_SLUGS) {
      render(
        <MemoryRouter>
          <ContinueLearning slug={slug} />
        </MemoryRouter>,
      );
      cleanup();
    }
    render(
      <MemoryRouter>
        <ContinueLearning slug="missing" />
      </MemoryRouter>,
    );
    expect(document.body.textContent).toBe('');
    cleanup();

    const navigate = vi.fn();
    const Card = ({ post, onClick }) => <button onClick={onClick}>{post.title}</button>;
    const Featured = Card;
    for (const topicFilter of ['Concepts', 'Issuance', 'Verification', 'PKI', 'Governance', 'Deployment']) {
      render(
        <MemoryRouter>
          <SectionedArticleFeed navigate={navigate} PostCard={Card} FeaturedCard={Featured} topicFilter={topicFilter} />
        </MemoryRouter>,
      );
      const firstButton = document.querySelector('button');
      if (firstButton) fireEvent.click(firstButton);
      cleanup();
    }

    render(
      <MemoryRouter>
        <SectionedArticleFeed navigate={navigate} PostCard={Card} FeaturedCard={Featured} searchFilter="no-such-article-value" />
      </MemoryRouter>,
    );
    expect(screen.getByText('No articles match your filters.')).toBeTruthy();
  });

  it('covers sidebar search, empty headings, and JSON-LD optional fields', () => {
    vi.useFakeTimers();
    const onSearch = vi.fn();
    const { rerender } = render(
      <MemoryRouter>
        <BlogSubNav searchValue="" onSearch={onSearch} onNavigateAuthors={vi.fn()} sectionNavEnabled={false} />
        <ArticleTableOfContents content={[]} />
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByLabelText('Search articles'));
    fireEvent.change(screen.getByPlaceholderText(/Search trust profiles/), { target: { value: 'OID4VCI' } });
    expect(onSearch).toHaveBeenCalledWith('OID4VCI');

    rerender(
      <MemoryRouter>
        <BlogSubNav searchValue="OID4VCI" onSearch={onSearch} onNavigateAuthors={vi.fn()} sectionNavEnabled={false} />
      </MemoryRouter>,
    );
    expect(screen.getByText('Search results')).toBeTruthy();

    rerender(
      <MemoryRouter>
        <BlogSubNav searchValue="" onSearch={onSearch} onNavigateAuthors={vi.fn()} />
        <div id="overview" />
        <div id="first-heading" />
        <div id="second-heading" />
        <ArticleTableOfContents content={[{ type: 'heading', text: 'First Heading' }, { type: 'heading', text: 'Second Heading' }]} />
      </MemoryRouter>,
    );
    act(() => vi.advanceTimersByTime(350));
    expect(screen.getByRole('navigation', { name: 'Table of contents' })).toBeTruthy();
    vi.useRealTimers();

    expect(organizationSchema()['@type']).toBe('Organization');
    expect(protocolSchema()['@type']).toBe('TechArticle');
    expect(softwareApplicationSchema({ name: 'Marty', description: 'Identity', offers: { price: '0' } }).offers.price).toBe('0');
    expect(softwareApplicationSchema({ name: 'Marty', description: 'Identity' }).offers).toBeUndefined();
    expect(articleSchema({ headline: 'Title', description: 'Description', authorName: 'Aiko', datePublished: '2026-01-01', image: '/image.png', url: '/post' }).image).toBe('/image.png');
    expect(articleSchema({ headline: 'Title', description: 'Description', dateModified: '2026-02-01', url: '/post' }).dateModified).toBe('2026-02-01');
    expect(articleSchema({ headline: 'Title', description: 'Description', url: '/post' }).image).toBeUndefined();
    expect(personSchema({ name: 'Aiko', description: 'Author', url: '/authors/aiko', jobTitle: 'Architect', image: '/aiko.png', knowsAbout: ['MIP'] }).knowsAbout).toEqual(['MIP']);
    expect(personSchema({ name: 'Aiko', description: 'Author', url: '/authors/aiko' }).jobTitle).toBeUndefined();
    expect(collectionPageSchema({ name: 'Blog', description: 'Posts', url: '/blog', items: [{ name: 'Post', url: '/post' }] }).mainEntity.itemListElement).toHaveLength(1);
    expect(collectionPageSchema({ name: 'Blog', description: 'Posts', url: '/blog' }).mainEntity).toBeUndefined();
    expect(breadcrumbListSchema([{ name: 'Home', url: '/' }]).itemListElement[0].position).toBe(1);
  });

  it('covers mobile map toggles and scroll progress updates', () => {
    window.matchMedia.mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    Object.defineProperty(document.documentElement, 'scrollHeight', { configurable: true, value: 2000 });
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 1000 });
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 500 });

    render(
      <MemoryRouter>
        <ReadingProgressBar color="secondary.main" />
        <SystemMap />
      </MemoryRouter>,
    );
    window.dispatchEvent(new Event('scroll'));
    fireEvent.click(screen.getByText('Foundations'));
    fireEvent.click(screen.getByText('Foundations'));
    expect(document.body.textContent).toMatch(/System at a Glance/);
  });
});
