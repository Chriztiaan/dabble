module.exports = {
    root: true,
    globals: {
        NodeJS: true,
        $fetch: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:import/typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:nuxt/recommended',
        'plugin:vue/recommended'
    ],
    rules: {
        semi: [2, 'always'],
        eqeqeq: [0, 'never'],
        indent: ['error', 4]
    }
};
