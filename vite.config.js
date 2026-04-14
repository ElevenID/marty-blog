import { fileURLToPath } from 'url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const LIBRARY_ENTRY = fileURLToPath(new URL('./src/index.js', import.meta.url));

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
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: LIBRARY_ENTRY,
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: isExternalPackage,
    },
  },
});