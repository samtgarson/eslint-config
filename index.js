import { defineConfig } from "eslint/config"
import eslintPluginImportX from 'eslint-plugin-import-x'
import promisePlugin from 'eslint-plugin-promise'
import globals from "globals"
import js from "@eslint/js"

export { default as typescript } from "./typescript"
export { default as react } from "./react"

export default defineConfig([
  js.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  promisePlugin.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".vue", ".json", ".ts", ".tsx"],
        },
      },
    },

    rules: {
      "import/extensions": ["error", {
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

      "comma-dangle": ["error", "never"],
      "import/no-unresolved": 0,
      semi: ["error", "never"],
      "no-debugger": 0,
      "arrow-parens": ["error", "always"],
      "no-underscore-dangle": "off",
      "no-confusing-arrow": "off",
      "no-return-assign": "off",
      "no-console": "off",
      "no-multi-assign": "off",
      "no-param-reassign": "off",
      "global-require": "off",
      "object-curly-spacing": ["error", "always"],
      "promise/avoid-new": "off",
      "promise/prefer-await-to-then": "error",
      "promise/prefer-await-to-callbacks": "error",
      "import/no-dynamic-require": "off",

      "import/no-extraneous-dependencies": ["error", {
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
    },
  }])
