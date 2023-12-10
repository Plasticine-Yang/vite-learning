import { Plugin } from 'vite'

import { logWithDivider } from './shared'

export function vitePluginHandleHotUpdate(): Plugin {
  return {
    name: 'vite-plugin-handle-hot-update',
    async handleHotUpdate(ctx) {
      logWithDivider('vite-plugin-handle-hot-update')

      logWithDivider('需要热更的文件')
      console.log(ctx.file)

      logWithDivider('需要热更的模块，如一个 Vue 单文件会涉及多个模块')
      console.log(ctx.modules)

      logWithDivider('时间戳')
      console.log(ctx.timestamp)

      logWithDivider('Vite Dev Server 实例')
      console.log(ctx.server)

      logWithDivider('读取最新的文件内容')
      console.log(await ctx.read())

      // 自行处理 HMR 事件
      ctx.server.ws.send({
        type: 'custom',
        event: 'hot-update-ctx-info',
        data: {
          ctxInfo: {
            file: ctx.file,
            modules: ctx.modules,
            timestamp: ctx.timestamp,
            latestContent: await ctx.read(),
          },
        },
      })

      return []
    },
  }
}
