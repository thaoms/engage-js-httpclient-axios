import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

module.exports = {
    input: './src/index.js',
    output: {
        file: './dist/index.js',
        format: 'cjs'
    },
    plugins: [
        resolve(),
        json(),
        babel({
            exclude: 'node_modules/**',
            plugins: ['@babel/plugin-proposal-class-properties'],
        }),
        commonjs(),
    ],
};
