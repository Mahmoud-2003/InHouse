import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

export default tseslint.config(
  { ignores: ['.next', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, ...nextCoreWebVitals],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  }
);
