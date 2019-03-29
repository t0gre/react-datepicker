import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import analyze from 'rollup-plugin-analyzer'

export function rollup({packageJsonPath, input = './src/index.ts'}) {
  return {
    input: input,
    external: ['react', 'react-dom'],
    output: [
      {
        file: 'lib/index.cjs.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: 'lib/index.esm.js',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      analyze(),
      resolve(),
      commonjs({
        include: 'node_modules/**',
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        namedExports: {
          'node_modules/react/index.js': [
            'cloneElement',
            'createContext',
            'Component',
            'createElement',
          ],
          'node_modules/react-dom/index.js': ['render', 'hydrate'],
          'node_modules/react-is/index.js': ['isElement', 'isValidElementType', 'ForwardRef'],
        },
      }),
      babel({
        exclude: 'node_modules/**',
      }),
      typescript({
        typescript: require('typescript'),
        rollupCommonJSResolveHack: true,
        clean: true,
      }),
    ],
  }
}
