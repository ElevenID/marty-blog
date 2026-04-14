/**
 * Bundle externals regression test
 *
 * Verifies that the built dist/index.js correctly externalizes all peer
 * dependencies (react, react-dom, react-router-dom, @mui/*) instead of
 * bundling them inline.
 *
 * Background: when @marty/blog is used as a symlinked local package in a
 * Vite host app (marty-ui), the blog's own node_modules/ contains a copy
 * of react-router-dom (installed as a devDependency). If react-router-dom
 * is not properly excluded from optimizeDeps in the host, Vite pre-bundles
 * the blog WITH that local copy, creating a second RouterContext instance.
 * The host's <BrowserRouter> then cannot be seen by blog components that
 * call useNavigate(), causing:
 *
 *   Error: useNavigate() may be used only in the context of a <Router>
 *
 * This test catches that regression by asserting the built bundle only
 * IMPORTS these packages and never inlines their source.
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { describe, it, expect, beforeAll } from 'vitest';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '../../dist/index.js');

// Known internal symbols from each peer dep that would appear if bundled inline.
// These strings do NOT appear in error-message template literals in the blog's
// own source, so a match means the library source was inlined rather than kept
// as an external import.
const BUNDLED_INTERNALS = {
  // react-router-dom internal: storage key used only inside its scroll-restoration code
  'react-router-dom': 'SCROLL_RESTORATION_STORAGE_KEY',
  // react-router internal: history factory that only lives inside the package
  'react-router':     'createBrowserHistory',
  // @mui/material internal: palette utility that only exists inside its source
  '@mui/material':    'augmentColor',
  // @mui/icons-material: individual icon that is only defined inside the package
  '@mui/icons-material': 'ArrowBackRounded',
};

// ES import statements that must appear in the dist (peer deps externalized):
const EXPECTED_IMPORTS = [
  'react-router-dom',
  'react/jsx-runtime',
  '@mui/material',
  '@mui/icons-material/ArrowBack',   // sub-path icon import ΓÇö must be external not inlined
  '@mui/icons-material/ArrowForward',
];

let dist;

describe('@marty/blog dist externals', () => {
  beforeAll(() => {
    if (!existsSync(DIST)) {
      throw new Error(
        `dist/index.js not found. Run 'npm run build' in marty-blog before running tests.`
      );
    }
    dist = readFileSync(DIST, 'utf-8');
  });

  it('dist/index.js exists', () => {
    expect(existsSync(DIST)).toBe(true);
  });

  it('does NOT bundle react-router-dom source inline', () => {
    // If react-router-dom is bundled, its SCROLL_RESTORATION_STORAGE_KEY
    // constant will appear in the output.
    expect(dist).not.toContain(BUNDLED_INTERNALS['react-router-dom']);
  });

  it('does NOT bundle react-router source inline', () => {
    expect(dist).not.toContain(BUNDLED_INTERNALS['react-router']);
  });

  it('does NOT bundle @mui/material source inline', () => {
    expect(dist).not.toContain(BUNDLED_INTERNALS['@mui/material']);
  });

  it('does NOT bundle @mui/icons-material source inline', () => {
    expect(dist).not.toContain(BUNDLED_INTERNALS['@mui/icons-material']);
  });

  it('imports react-router-dom as an external (single import statement)', () => {
    // The dist should have exactly one ES import line for react-router-dom.
    const lines = dist.split('\n');
    const routerImports = lines.filter(
      l => l.startsWith('import') && l.includes('react-router-dom')
    );
    expect(routerImports).toHaveLength(1);
    // It should import named hooks, not the entire namespace (* as X)
    expect(routerImports[0]).toMatch(/^\s*import\s*\{/);
  });

  it.each(EXPECTED_IMPORTS)('imports %s as an external', (pkg) => {
    expect(dist).toContain(`from "${pkg}"`);
  });

  it('lists react-router-dom in peerDependencies, not in dependencies', async () => {
    const pkg = JSON.parse(
      readFileSync(resolve(__dirname, '../../package.json'), 'utf-8')
    );
    expect(pkg.peerDependencies?.['react-router-dom']).toBeDefined();
    expect(pkg.dependencies?.['react-router-dom']).toBeUndefined();
  });
});