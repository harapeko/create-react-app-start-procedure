module.exports = {
  plugins: [
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
  ],
  extends: [
    'stylelint-config-rational-order',
    './node_modules/prettier-stylelint/config.js',
    'stylelint-config-prettier',
  ],
  rules: {
    'indentation': 2,
    'string-quotes': 'single',
  },
  ignoreFiles: [
    '**/node_modules/**',
    'src/styles/**'
  ],
};