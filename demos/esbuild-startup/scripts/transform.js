/* eslint-disable @typescript-eslint/no-var-requires */
const { transform } = require('esbuild')

async function transformWithESBuild() {
  const transformResult = await transform('const isNull = (str: string): boolean => str.length > 0;', {
    sourcemap: true,
    loader: 'tsx',
  })

  console.log(transformResult)
}

transformWithESBuild()
