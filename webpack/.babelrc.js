const browserslist = require('./.browserslist');

module.exports = {
    sourceType: 'unambiguous',
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    chrome: '60'
                },
                spec: true,
                corejs: '3',
                useBuiltIns: 'usage'
            }
        ],
        ['@babel/preset-react'],
        ['@babel/preset-typescript']
    ],
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            {
                regenerator: false
            }
        ],
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import'
    ]
};
