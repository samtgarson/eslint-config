module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'none'
        },
        singleline: {
          delimiter: 'semi'
        }
      }
    ],
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-unused-vars': 1,
    "@typescript-eslint/explicit-module-boundary-types": 0
  }
}
