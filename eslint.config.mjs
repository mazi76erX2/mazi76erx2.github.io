import js from '@eslint/js';

export default [
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'coverage/**', 'node_modules/**', 'public/**', '.git/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        module: 'readonly',
        require: 'readonly',
        React: 'readonly',
        fetch: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        clearTimeout: 'readonly',
        setTimeout: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        getComputedStyle: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  {
    files: ['next.config.js', 'jest.config.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        module: 'writable',
        require: 'readonly',
        console: 'readonly',
      },
    },
  },
  {
    files: ['**/*.test.js', '**/*.test.jsx', 'tests/**/*'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        afterEach: 'readonly',
        beforeEach: 'readonly',
        afterAll: 'readonly',
        beforeAll: 'readonly',
      },
    },
  },
];
