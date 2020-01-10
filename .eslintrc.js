// Global packages required for linting
// npm install -g eslint@latest standard@latest eslint-plugin-node@latest eslint-plugin-jest@latest eslint-plugin-react@latest eslint-plugin-import@latest eslint-plugin-promise@latest eslint-plugin-standard@latest babel-eslint@latest typescript@latest
//const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin').configs.recommended;
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
    es6: true
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // 'eslint:recommended',  /* disabled this to shut off 'unexpected console statement' */
    'plugin:react/recommended',
    'plugin:jest/recommended'
  ],
  plugins: [
    'react',
    'react-hooks',
    'jest',
    'import'
  ],
  // add your custom rules here
  rules: {
    'jest/valid-expect': 'off',
    'jest/no-commented-out-tests': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    // 'react-hooks/exhaustive-deps': 'warn',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow global React
    'react/react-in-jsx-scope': 'off',
    // currently not using prop types
    'react/prop-types': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // Indent with 2 spaces
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    // Indent JSX with 2 spaces
    'react/jsx-indent': ['error', 2],
    // Indent props with 2 spaces
    'react/jsx-indent-props': ['error', 2], 
    'prefer-const': 'error',
    'quotes': ["error", "single", { avoidEscape: true, allowTemplateLiterals: true }],
    // "allowTemplateLiterals": 0 // Severity should be one of the following: 0 = off, 1 = warn, 2 = error
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: [ '@typescript-eslint' ],
      /*rules: Object.assign(typescriptEslintRecommended.rules, {
        '@typescript-eslint/no-unused-vars': 'error'
        })*/
    }
  ],
  settings: {
    'react': {
      'createClass': 'createReactClass', // Regex for Component Factory to use,
      // default to 'createReactClass'
      'pragma': 'React', // Pragma to use, default to 'React'
      'version': 'detect', // React version, default to the latest React stable release
      'flowVersion': '0.53' // Flow version
    },
    'propWrapperFunctions': [ 'forbidExtraProps' ] // The names of any functions used to wrap the
    // propTypes object, e.g. `forbidExtraProps`.
    // If this isn't set, any propTypes wrapped in
    // a function will be skipped.
  }
}