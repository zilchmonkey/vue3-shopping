module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    rules: {
        'no-multi-spaces': ['error'],
        'vue/no-multiple-template-root': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'prettier/prettier': ['error', { tabWidth: 4 }],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
}
