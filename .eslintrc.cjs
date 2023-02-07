/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
  'comma-dangle': [ 'error', 'never' ],
    'semi': [ 'error', 'never' ],
    'quotes': [ 'error', 'single' ],
    'react/react-in-jsx-scope': 'off',
    'react/display-name': [ 'off' ],
    'space-before-function-paren': [ 'error' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'vue/multi-word-component-names': 0
}
}
