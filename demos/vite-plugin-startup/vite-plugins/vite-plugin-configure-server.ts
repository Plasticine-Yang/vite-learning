import { Plugin } from 'vite'

import { logWithDivider } from './shared'

export function vitePluginConfigureServer(): Plugin {
  return {
    name: 'vite-plugin-config-resolved-hook',
    configureServer(server) {
      // 在内置中间件执行之前执行
      server.middlewares.use((req, res, next) => {
        logWithDivider('vite-plugin-config-resolved-hook')
        console.log(req, res)

        next()
      })

      // 在内置中间件执行之后执行
      return () => {
        server.middlewares.use((req, res, next) => {
          logWithDivider('vite-plugin-config-resolved-hook')
          console.log(req, res)

          next()
        })
      }
    },
  }
}
