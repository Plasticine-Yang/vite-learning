import { resolve } from 'path'
import * as rollup from 'rollup'
import { fileURLToPath } from 'url'
import { inspect } from 'util'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

async function build() {
  const rollupBuild = await rollup.rollup({
    input: [resolve(__dirname, 'demo.js')],
    external: ['./module-foo'],
  })

  const rollupOutput = await rollupBuild.write({
    dir: resolve(__dirname, 'output'),
    format: 'esm',
  })

  console.log(inspect(rollupOutput, false, 100, true))
}

build()
