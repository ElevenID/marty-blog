import { fileURLToPath } from 'url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const LIBRARY_ENTRIES = {
  index: fileURLToPath(new URL('./src/index.js', import.meta.url)),
  'blog-page': fileURLToPath(new URL('./src/components/BlogPage.jsx', import.meta.url)),
  'blog-post-page': fileURLToPath(new URL('./src/components/BlogPostPage.jsx', import.meta.url)),
  'authors-page': fileURLToPath(new URL('./src/components/AuthorsPage.jsx', import.meta.url)),
  'author-page': fileURLToPath(new URL('./src/components/AuthorPage.jsx', import.meta.url)),
  'foundations-page': fileURLToPath(new URL('./src/components/FoundationsPage.jsx', import.meta.url)),
  'prerender-data': fileURLToPath(new URL('./src/prerenderData.js', import.meta.url)),
};

const EXTERNAL_PACKAGES = [
  'react',
  'react-dom',
  'react-router',
  'react-router-dom',
  '@mui/material',
  '@mui/icons-material',
  '@emotion/react',
  '@emotion/styled',
];

function isExternalPackage(id) {
  return EXTERNAL_PACKAGES.some((pkg) => id === pkg || id.startsWith(`${pkg}/`));
}

export default defineConfig({
  // Host applications already own the public image paths referenced by blog
  // content. Do not duplicate the full social-image catalog in the package.
  publicDir: false,
  plugins: [react()],
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,jsx}'],
      exclude: ['src/**/__tests__/**'],
      thresholds: {
        lines: 90,
        branches: 80,
      },
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: LIBRARY_ENTRIES,
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: isExternalPackage,
      output: {
        // Node's ESM resolver requires the concrete file extension for MUI's
        // deep icon modules; browsers and Vite accept the same specifier.
        paths(id) {
          if (id.startsWith('@mui/icons-material/') && !id.endsWith('.js')) {
            return `${id}.js`;
          }
          return id;
        },
      },
    },
  },
});
