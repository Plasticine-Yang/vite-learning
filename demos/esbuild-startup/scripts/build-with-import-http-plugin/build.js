/* eslint-disable @typescript-eslint/no-var-requires */
const { build } = require('esbuild')
const importHttpPlugin = require('./import-http-plugin')

async function buildWithImportHttpPlugin() {
  await build({
    entryPoints: ['./src/import-http-demo.jsx'],
    outdir: './dist/import-http-demo',
    format: 'esm',
    bundle: true,
    splitting: true,
    sourcemap: true,
    metafile: true,
    plugins: [importHttpPlugin()],
  })

  console.log('Bundle finished!')
}

buildWithImportHttpPlugin()
