module.exports = {
  extends: 'airbnb',
  env: {
    browser: true
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 0,
    'comma-dangle': 0
  }
};
