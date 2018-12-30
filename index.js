module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "allowImportExportEverywhere": true
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'airbnb-base',
    'plugin:promise/recommended',
    'plugin:vue/essential'
  ],
  plugins: [
    'html',
    'jest',
    'import',
    'node',
    'promise'
  ],
  rules: {
    'import/extensions': ['error', {
      'js': 'never',
      'vue': 'never', // don't require .vue extension when importing
      'json': 'always',
    }],
    'comma-dangle': ['error', 'never'],
    'import/no-unresolved': 0,
    'space-before-function-paren': ['error', 'always'],
    'semi': ['error', 'never'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // allow debugger during development
    'arrow-parens': ['error', 'as-needed'],
    'no-underscore-dangle': 'off',
    'no-confusing-arrow': 'off',
    'no-return-assign': 'off',
    'no-console': 'off',
    'no-multi-assign': 'off',
    'no-param-reassign': 'off',
    'global-require': 'off',
    'promise/avoid-new': 'off',
    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': ['test/**/*', 'nuxt.config.js', 'rollup.config.js', 'webpack.config.js']
    }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.json']
      }
    },
  },
  globals: {}
}
