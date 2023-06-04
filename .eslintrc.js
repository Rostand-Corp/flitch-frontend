module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['import', 'react-hooks', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/parser': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'max-len': ['error', 120],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        groups: ['external', 'internal', 'parent', 'index', 'sibling'],
      },
    ],
    'import/no-unresolved': ['error', { ignore: ['.css', '.scss', '.sass'] }],
    'arrow-body-style': 'off',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        interfaces: {
          memberTypes: ['field', 'signature', 'method'],
          order: 'alphabetically',
        },
      },
    ],
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['const', 'let', 'export'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'export'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'export'],
        next: ['const', 'let', 'export'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'if',
          'class',
          'for',
          'do',
          'while',
          'switch',
          'try',
          'default',
          'interface',
        ],
      },
      {
        blankLine: 'always',
        prev: [
          'if',
          'class',
          'for',
          'do',
          'while',
          'switch',
          'try',
          'interface',
        ],
        next: '*',
      },
      { blankLine: 'always', prev: '*', next: 'return' },
      {
        blankLine: 'never',
        prev: ['case'],
        next: ['case'],
      },
      {
        blankLine: 'always',
        prev: ['block-like'],
        next: ['case'],
      },
      {
        blankLine: 'always',
        prev: ['block-like', 'expression'],
        next: ['break'],
      },
    ],
  },
};
