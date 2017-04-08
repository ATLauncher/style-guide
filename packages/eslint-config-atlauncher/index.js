const configs = [
    './configs/electron',
    './configs/react'
].map(require.resolve);

const rules = [
    // eslint rules
    './rules/possible-errors',
    './rules/best-practices',
    './rules/variables',
    './rules/nodejs',
    './rules/stylistic-issues',
    './rules/ecmascript-6',

    // eslint plugins
    './rules/plugin-filenames',
    './rules/plugin-import',
    './rules/plugin-jsx-a11y',
    './rules/plugin-promise',
    './rules/plugin-react'
].map(require.resolve);

module.exports = {
    plugins: [
        'import',
        'jsx-a11y',
        'react',
        'promise',
        'no-empty-blocks',
        'filenames'
    ],
    extends: rules,
    configs,
    env: {
        node: true,
        es6: true,
        browser: true,
        mocha: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        }
    }
};
