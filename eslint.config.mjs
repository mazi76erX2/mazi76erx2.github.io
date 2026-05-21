import js from '@eslint/js';

export default [
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'coverage/**', 'node_modules/**', 'public/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
        requestAnimationFrame: 'readonly',
        getComputedStyle: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        module: 'readonly',
        require: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-empty-pattern': 'off',
      'no-sparse-arrays': 'off',
    },
  },
];
