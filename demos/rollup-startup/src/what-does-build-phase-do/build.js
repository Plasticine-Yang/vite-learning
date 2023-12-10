import { resolve } from 'path'
import * as rollup from 'rollup'
import { fileURLToPath } from 'url'
import { inspect } from 'util'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

async function build() {
  const rollupBuild = await rollup.rollup({
    input: [resolve(__dirname, 'demo.js')],
  })

  console.log(inspect(rollupBuild, false, 100, true))
}

build()
