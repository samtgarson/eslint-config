module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended'
  ],
  plugins: [
    'import',
    'promise'
  ],
  rules: {
    'import/extensions': ['error', {
      'js': 'never',
      'json': 'always',
      'scss': 'always',
      'jpg': 'always',
      'jpeg': 'always',
      'png': 'always',
      'svg': 'always'
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
    'object-curly-spacing': ['error', 'always'],
    'promise/avoid-new': 'off',
    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': [
        'test/**/*',
        'nuxt.config.js',
        'rollup.config.js',
        'webpack.config.js',
        '**/__mocks__/**/*',
        'build/**/*',
        '**/*.spec.*',
        '**/*.test.*'
      ]
    }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.json', '.ts', '.tsx']
      }
    },
  },
  globals: {}
}
