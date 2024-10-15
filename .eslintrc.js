module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'plugin:react/recommended',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },

  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['jsx', 'global'],
      },
    ],
    'indent': ['error', 2],
    // 'linebreak-style': ['error', 'unix'], // Optional: enforce Unix line endings
    // 'quotes': ['error', 'single'], // Optional: enforce single quotes
    // 'semi': ['error', 'always'], // Optional: enforce semicolons
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },
}
