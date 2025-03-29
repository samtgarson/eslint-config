import { defineConfig } from "eslint/config"
import eslintPluginImportX from 'eslint-plugin-import-x'
import tseslint from 'typescript-eslint'


export default defineConfig([
  tseslint.configs.recommendedTypeChecked,
  eslintPluginImportX.flatConfigs.typescript,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      "@typescript-eslint/ban-ts-ignore": 0,
      "@typescript-eslint/explicit-function-return-type": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "@stylistic/member-delimiter-style": [2, {
        multiline: {
          delimiter: "none",
        },

        singleline: {
          delimiter: "semi",
        },
      }],
      "@typescript-eslint/no-empty-function": 0,
      "@typescript-eslint/no-unused-vars": 1,
      "@typescript-eslint/no-use-before-define": 0,
      "@typescript-eslint/require-await": 0,
      "@typescript-eslint/restrict-template-expressions": 0,
    },
  }])
