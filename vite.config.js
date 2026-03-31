import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'MartyBlog',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      // Externalize peer dependencies — they are provided by the consuming app
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react-router-dom',
        '@mui/material',
        '@mui/icons-material',
        '@emotion/react',
        '@emotion/styled',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDom',
        },
      },
    },
    // Emit source maps for better debugging in the consuming app
    sourcemap: true,
  },
});
