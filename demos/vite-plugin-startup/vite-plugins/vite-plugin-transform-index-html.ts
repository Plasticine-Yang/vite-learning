import { Plugin } from 'vite'
import { logWithDivider } from './shared'

export function vitePluginTransformIndexHtml(): Plugin {
  return {
    name: 'vite-plugin-transform-index-html',
    transformIndexHtml(html, ctx) {
      logWithDivider('vite-plugin-transform-index-html')
      console.log(ctx)

      // 1. 返回 string 对 html 进行转换
      // return html.replace(/<title>(.*?)<\/title>/, '<title>hello: $1</title>')

      // 2. 返回一个对象，除了可以替换 html 外还能往 html 中注入标签
      return {
        html,
        tags: [
          // 注入一个加载 lodash-es 的 script
          {
            tag: 'script',
            attrs: { type: 'module', src: 'https://unpkg.com/lodash-es@3.10.1/lodash.js' },
            injectTo: 'head',
          },
        ],
      }
    },
  }
}
