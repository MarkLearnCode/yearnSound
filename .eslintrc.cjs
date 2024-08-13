module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['@nuxtjs', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'no-undef': 'off',
    'no-console': 'off',
    'no-unused-vars': 'error',
    camelcase: 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': 'error'
  }
};
