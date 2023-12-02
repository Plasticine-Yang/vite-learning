/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = () => ({
  name: 'esbuild:http',
  setup(build) {
    const http = require('http')
    const https = require('https')

    // 导入的模块是 http 链接的话需要进行处理
    build.onResolve(
      {
        filter: /^https?:\/\//,
      },
      (args) => {
        return {
          path: args.path,
          namespace: 'http-url',
        }
      },
    )

    // 拦截间接依赖的路径，并重写路径
    // tip: 间接依赖同样会被自动带上 `http-url` 的 namespace
    build.onResolve({ filter: /.*/, namespace: 'http-url' }, (args) => ({
      // 重写路径
      path: new URL(args.path, args.importer).toString(),
      namespace: 'http-url',
    }))

    build.onLoad({ filter: /.*/, namespace: 'http-url' }, async (args) => {
      const contents = await new Promise((resolve, reject) => {
        async function fetch(url) {
          console.log(`Downloading: ${url}`)

          const httpClient = url.startsWith('https') ? https : http
          const request = httpClient
            .get(url, (response) => {
              const statusCode = response.statusCode

              if ([301, 302, 307].includes(statusCode)) {
                fetch(new URL(response.headers.location, url).toString())
                request.destroy()
              } else if (statusCode === 200) {
                const chunks = []

                response.on('data', (chunk) => {
                  chunks.push(chunk)
                })

                response.on('end', () => {
                  resolve(Buffer.concat(chunks))
                })
              } else {
                reject(new Error(`GET ${url} failed: status ${statusCode}`))
              }
            })
            .on('error', reject)
        }

        fetch(args.path)
      })

      return {
        contents,
      }
    })
  },
})
