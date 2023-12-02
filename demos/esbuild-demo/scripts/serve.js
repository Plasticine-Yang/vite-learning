/* eslint-disable @typescript-eslint/no-var-requires */
const { serve } = require('esbuild')

async function serveWithESBuild() {
  const serveResult = await serve(
    {
      port: 8000,
      servedir: './dist',
    },
    {
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
    },
  )

  console.log(`HTTP server starts at port: ${serveResult.port}`)
}

serveWithESBuild()
