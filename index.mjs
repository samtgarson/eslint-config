import { defineConfig } from "eslint/config"
import eslintPluginImportX from 'eslint-plugin-import-x'
import promisePlugin from 'eslint-plugin-promise'
import stylistic from '@stylistic/eslint-plugin'
import js from "@eslint/js"

export default defineConfig([
  js.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  promisePlugin.configs['flat/recommended'],
  {
    settings: {
      "import-x/resolver": {
        node: {
          extensions: [".js", ".vue", ".json", ".ts", ".tsx"],
        },
      },
    },

    plugins: {
      "@stylistic": stylistic,
    },

    rules: {
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/semi": ["error", "never"],
      "@stylistic/arrow-parens": ["error", "always"],
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
          "eslint.config.mjs",
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
