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
      // Externalize ALL peer dependencies and their sub-paths.
      // Using regex ensures sub-path imports (e.g. @mui/icons-material/ArrowBack,
      // @mui/material/colors) are also excluded from the bundle.  Without this,
      // Vite inlines sub-path modules and pulls in their transitive deps (MUI
      // internals, a second copy of react-router-dom via the local node_modules,
      // etc.), which causes duplicate-instance errors in the consuming app.
      external: [
        'react',
        'react-dom',
        /^react\//, // react/jsx-runtime, react/jsx-dev-runtime, etc.
        'react-router-dom',
        'react-router',
        /^@mui\//, // @mui/material, @mui/icons-material, @mui/material/colors …
        /^@emotion\//, // @emotion/react, @emotion/styled …
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
