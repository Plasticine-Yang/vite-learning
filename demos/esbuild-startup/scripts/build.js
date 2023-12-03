/* eslint-disable @typescript-eslint/no-var-requires */
const { build } = require('esbuild')

async function buildWithESBuild() {
  const result = await build({
    absWorkingDir: process.cwd(),
    entryPoints: ['./src/index.jsx'],
    outdir: './dist',
    bundle: true,
    format: 'esm',
    external: [],
    splitting: true,
    sourcemap: true,
    metafile: true,
    minify: false,
    write: true,
    loader: {
      '.png': 'base64',
    },
  })

  console.log(result)
}

buildWithESBuild()
