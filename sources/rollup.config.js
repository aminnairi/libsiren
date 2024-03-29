import typescript from 'rollup-plugin-typescript2'
import clean from 'rollup-plugin-cleaner'
import license from 'rollup-plugin-license'

import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'typescript/libsiren.ts',
  output: {
    format: 'umd',
    name: 'libsiren',
    file: '../libsiren.js'
  },
  plugins: [
    clean({ targets: [ '../libsiren.js', '../libsiren.d.ts' ] }),
    typescript(),
    uglify(),
    license({ banner: 'GNU GENERAL PUBLIC LICENSE Version 3' })
  ]
}