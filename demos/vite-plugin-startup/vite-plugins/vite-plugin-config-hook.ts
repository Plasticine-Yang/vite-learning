import { resolve } from 'path'
import { Plugin } from 'vite'
import { logWithDivider } from './shared'

export function vitePluginConfigHook(): Plugin {
  return {
    name: 'vite-plugin-config-hook',
    config(config, env) {
      logWithDivider('vite-plugin-config-hook')

      console.log(config)
      console.log(env)

      return {
        resolve: {
          alias: {
            '@@': resolve(__dirname, '../public'),
          },
        },
      }
    },
  }
}
