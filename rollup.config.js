import { terser } from "rollup-plugin-terser";

const terserOptions = {
  compress: {
    passes: 2
  }
};

export default [
  {
    input: "./src/js/form-multiselect.js",
    output: [
      {
        file: "dist/js/form-multiselect.iife.js",
        name: "form_multiselect",
        format: "iife"
      },
      {
        file: "dist/js/form-multiselect.iife.min.js",
        name: "form_multiselect",
        format: "iife",
        plugins: [terser(terserOptions)]
      },
      {
        file: "dist/js/form-multiselect.esm.js",
        format: "esm"
      },
      {
        file: "dist/js/form-multiselect.esm.min.js",
        format: "esm",
        plugins: [terser(terserOptions)]
      }
    ]
  }

];
