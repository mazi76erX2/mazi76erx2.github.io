import js from '@eslint/js';

export default [
  {
    ignores: [
      '.next/**',
      // Configuration for JSX files
      {
        files: ['**/*.{js,jsx}'],
      'coverage/**',
      'node_modules/**',
      'public/**',
      '.git/**',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
            clearTimeout: 'readonly',
            setTimeout: 'readonly',
            requestAnimationFrame: 'readonly',
            cancelAnimationFrame: 'readonly',
            getComputedStyle: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        React: 'readonly',
        fetch: 'readonly',
        localStorage: 'readonly',
      // Configuration for CommonJS config files
      {
        files: ['next.config.js', 'jest.config.js'],
        languageOptions: {
          sourceType: 'commonjs',
          globals: {
            module: 'writable',
            console: 'readonly',
          },
        },
      },
      // Configuration for Jest test files
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
        sessionStorage: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
