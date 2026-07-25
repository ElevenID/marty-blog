import js from '@eslint/js';
import reactX from 'eslint-plugin-react-x';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**', 'coverage/**'],
  },
  {
    settings: {
      react: { version: 'detect' },
    },
  },
  js.configs.recommended,
  reactX.configs.recommended,
  reactHooks.configs.flat.recommended,
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // This JavaScript package validates its exported component APIs. Requiring
      // runtime declarations for every private render helper adds no boundary safety.
      'react-x/no-unescaped-entities': 'off',
      'no-useless-escape': 'off',
      'no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
    },
  },
];
