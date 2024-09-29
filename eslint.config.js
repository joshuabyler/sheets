import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import stylisticJs from '@stylistic/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintConfigTypescript from '@vue/eslint-config-typescript';

const getRelaxedRulesDuringDevelopment = () => {
    // eslint-disable-next-line no-undef
    if (process.env.NODE_ENV !== 'production') {
        return {
            'no-warning-comments': ['warn', { location: 'anywhere' }],
            'no-console': 'warn',
            'no-debugger': 'off',
            'no-trailing-spaces': 'warn',
            'arrow-body-style': ['warn'],
            'vue-multiword-component-names': 'off',
            semi: 'warn'
        };
    }
    return {};
};

export default [
    {
        plugins: {
            '@stylistic/js': stylisticJs,
            'eslint-plugin-vue': pluginVue,
            '@vue/eslint-config-prettier': eslintConfigPrettier,
            '@vue/eslint-config-typescript/recommended': eslintConfigTypescript
        },
        files: ['**/*.{js,mjs,cjs,ts,vue}'],
        rules: {
            // So lets start by listing all the rules we want to be checked in production...
            'no-warning-comments': ['error', { location: 'anywhere' }],
            'no-console': ['error', { allow: ['error'] }],
            'no-debugger': 'error',
            'no-trailing-spaces': 'error',
            'arrow-body-style': ['error', 'as-needed'],
            semi: 'error',
            'no-unused-vars': ['off'],
            '@typescript-eslint/no-unused-vars': 'error',
            'arrow-parens': ['error', 'as-needed'],
            'arrow-spacing': 'error',
            'block-spacing': 'error',
            'brace-style': ['error', '1tbs', { allowSingleLine: true }],
            camelcase: 'error',
            'comma-spacing': 'error',
            'computed-property-spacing': 'error',
            eqeqeq: 'error',
            '@stylistic/js/function-call-spacing': ['error'],
            'func-style': ['error', 'expression'],
            'key-spacing': 'error',
            'keyword-spacing': 'error',
            'no-array-constructor': 'error',
            'no-duplicate-imports': 'error',
            'no-lonely-if': 'error',
            'no-magic-numbers': 'off',
            'no-mixed-operators': 'error',
            'no-multi-spaces': 'error',
            'no-multiple-empty-lines': 'error',
            'no-negated-condition': 'error',
            'no-restricted-globals': ['error', 'Date'],
            'no-shadow': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-shadow.md#how-to-use
            '@typescript-eslint/no-shadow': ['error'],
            'no-useless-constructor': 'off',
            '@typescript-eslint/no-useless-constructor': 'error',
            'no-var': 'error',
            'no-whitespace-before-property': 'error',
            'object-curly-spacing': ['error', 'always'],
            'object-shorthand': 'error',
            'one-var': ['error', 'never'],
            'padded-blocks': ['error', 'never'],
            'prefer-const': 'error',
            'prefer-template': 'error',
            quotes: ['error', 'single', { avoidEscape: true }],
            'rest-spread-spacing': 'error',
            'semi-spacing': 'error',
            'semi-style': 'error',
            'space-in-parens': 'error',
            'space-infix-ops': 'error',
            'space-unary-ops': 'error',
            // Allow exception for Wallaby.js live comments which require no space to work: `//?`
            // https://wallabyjs.com/docs/intro/advanced-logging.html#live-comments
            'spaced-comment': ['error', 'always', { exceptions: ['?'] }],
            'template-curly-spacing': 'error',
            '@typescript-eslint/explicit-module-boundary-types': 'warn',
            'vue/component-api-style': ['error', ['script-setup']],
            'vue/multiword-component-names': 'off',
            // Ok, now lets override what we want to loosen up for development
            ...getRelaxedRulesDuringDevelopment()
        }
    },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
    { ignores: ['node_modules/', 'dist/', '.output', '.nuxt', '.idea'] }
];
