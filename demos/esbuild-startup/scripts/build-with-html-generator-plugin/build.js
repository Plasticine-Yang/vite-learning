/* eslint-disable @typescript-eslint/no-var-requires */
const { build } = require('esbuild')
const htmlGeneratorPlugin = require('./html-generator-plugin')

async function buildWithImportHttpPlugin() {
  await build({
    entryPoints: ['./src/index.jsx'],
    outdir: './dist/html-generator-demo',
    format: 'esm',
    bundle: true,
    splitting: true,
    sourcemap: true,
    metafile: true,
    plugins: [htmlGeneratorPlugin()],
  })

  console.log('Bundle finished!')
}

buildWithImportHttpPlugin()
