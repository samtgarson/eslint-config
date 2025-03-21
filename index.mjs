import { defineConfig } from "eslint/config"
import eslintPluginImportX from 'eslint-plugin-import-x'
import promisePlugin from 'eslint-plugin-promise'
import stylistic from '@stylistic/eslint-plugin'
import js from "@eslint/js"

export default defineConfig([
  js.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  promisePlugin.configs['flat/recommended'],
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
    arrowParens: true,
    braceStyle: '1tbs',
    commaDangle: 'never'
  }),
  {
    settings: {
      "import-x/resolver": {
        node: {
          extensions: [".js", ".vue", ".json", ".ts", ".tsx"],
        },
      },
    },

    rules: {
      "global-require": "off",
      "import-x/no-dynamic-require": "off",
      "import-x/extensions": ["error", {
        js: "never",
        ts: "never",
        tsx: "never",
        jsx: "never",
        server: "always",
        client: "always",
        json: "always",
        scss: "always",
        jpg: "always",
        jpeg: "always",
        png: "always",
        svg: "always",
        wav: "always",
        mp4: "always",
        mp3: "always",
      }],
      "import-x/no-extraneous-dependencies": ["error", {
        devDependencies: [
          "test/**/*",
          "nuxt.config.js",
          "rollup.config.js",
          "webpack.config.js",
          "**/__mocks__/**/*",
          "build/**/*",
          "**/*.spec.*",
          "**/*.test.*",
        ],
      }],
      "import-x/no-unresolved": 0,
      "no-console": "off",
      "no-debugger": 0,
      "no-multi-assign": "off",
      "no-param-reassign": "off",
      "no-return-assign": "off",
      "no-underscore-dangle": "off",
      "object-curly-spacing": ["error", "always"],
      "promise/avoid-new": "off",
      "promise/prefer-await-to-callbacks": "error",
      "promise/prefer-await-to-then": "error",
    },
  }])
