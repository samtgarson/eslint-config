module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime'
  ],
  rules: {
    'react/prop-types': 0
  }
}
