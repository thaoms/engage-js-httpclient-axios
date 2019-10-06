import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

module.exports = {
    input: './src/index.js',
    output: {
        file: './dist/index.js',
        format: 'cjs'
    },
    plugins: [
        globals(),
        builtins(),
        resolve({
            preferBuiltins: true,
        }),
        json(),
        babel({
            exclude: 'node_modules/**',
            plugins: ['@babel/plugin-proposal-class-properties'],
        }),
        commonjs(),
    ],
};
