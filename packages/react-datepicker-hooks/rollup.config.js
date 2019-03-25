import {rollup} from '../../config/rollup.config'

export default rollup({
  input: 'src/index.tsx',
  packageJsonPath: './package.json',
})
