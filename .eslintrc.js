module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:flowtype/recommended',
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  'plugins': [
    'flowtype'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
