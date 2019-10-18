import babel from 'rollup-plugin-babel';

module.exports = {
    input: './src/index.js',
    output: {
        file: './dist/index.js',
        format: 'cjs'
    },
    external: ['axios', 'url'],
    plugins: [
        babel({
            exclude: 'node_modules/**',
            plugins: ['@babel/plugin-proposal-class-properties'],
        }),
    ],
};
