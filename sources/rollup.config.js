import typescript from 'rollup-plugin-typescript2'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'typescript/libsiren.ts',
  output: {
    format: 'umd',
    name: 'libsiren',
    file: '../libsiren.js'
  },
  plugins: [
    typescript(),
    uglify()
  ]
}