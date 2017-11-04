**eslint-config** Soho House's shared eslint config

## Usage

1. Ensure you have your local environment setup ([more information](https://sohohousedev.atlassian.net/wiki/spaces/DEV/pages/19103762/Private+NPM+Registry)).

2. Add the dependency
```bash
yarn add @sohohouse/eslint-config
```

3. Extend your Eslint config
```js
// .eslintrc.js
module.exports = {
  extends: ['@sohohouse']
}
```
