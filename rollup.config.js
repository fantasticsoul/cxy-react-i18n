import babel from "rollup-plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/index.js",
  output: {
    file: "./lib/bundle.js",
    format: "cjs",
    exports: "auto",
  },
  plugins: [babel(), nodeResolve(), terser()],
  external: [],
};
