module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  plugins: ['react-refresh', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // typescript
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],

    'react/prop-types': 'off',

    // "no-console": "warn",
    // READ-MORE: https://typescript-eslint.io/rules/consistent-type-definitions
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    // typeAlias selectors should start with prefix T
    // READ-MORE: https://typescript-eslint.io/rules/naming-convention
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['typeAlias'],
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: true,
        },
      },
    ],
  },
  settings: {
    react: {
      // tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.d.ts', '**/*-d.ts'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
};
