import typescript from "rollup-plugin-typescript2";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";

export function rollup({ input = "./src/index.tsx" }) {
  return {
    input: input,
    output: [
      {
        file: "lib/index.cjs.js",
        format: "cjs",
        exports: "named",
        sourcemap: true
      },
      {
        file: "lib/index.esm.js",
        format: "es",
        exports: "named",
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**"
      }),
      typescript({
        typescript: require("typescript"),
        rollupCommonJSResolveHack: true,
        clean: true
      }),
      external()
    ]
  };
}
