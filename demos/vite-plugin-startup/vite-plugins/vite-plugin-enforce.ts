import { Plugin } from 'vite'

export function vitePluginEnforce(): Plugin {
  return {
    name: 'vite-plugin-enforce',
    enforce: 'pre',
  }
}
