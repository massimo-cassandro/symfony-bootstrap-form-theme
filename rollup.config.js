import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const terserOptions = {
  compress: {
    passes: 2
  }
};

export default [
  {
    input: './symfony-test-app/public/assets/prism/prism.js',
    plugins: [sourcemaps(), resolve(), commonjs()],
    output: [
      {
        file: './symfony-test-app/public/assets/prism/prism-min.js',
        name: 'Prism',
        format: 'umd',
        plugins: [terser(terserOptions)]
      }
    ]
  },

  {
    input: './symfony-test-app/public/assets/bs4/sf-bs4-form-test.js',
    plugins: [sourcemaps(), resolve(), commonjs()],
    output: [
      {
        file: './symfony-test-app/public/assets/bs4/sf-bs4-form-test-min.js',
        name: 'test_bs4',
        format: 'iife',
        plugins: [terser(terserOptions)]
      }
    ]
  },
  {
    input: './symfony-test-app/public/assets/bs5/sf-bs5-form-test.js',
    plugins: [sourcemaps(), resolve(), commonjs()],
    output: [
      {
        file: './symfony-test-app/public/assets/bs5/sf-bs5-form-test-min.js',
        name: 'test_bs5',
        format: 'iife',
        plugins: [terser(terserOptions)]
      }
    ]
  }

];
