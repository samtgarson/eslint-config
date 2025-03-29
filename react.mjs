import { defineConfig } from "eslint/config"
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks';

export default defineConfig([
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs['recommended-latest'],
  {
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      'react/prop-types': 0
    },
  }
])
