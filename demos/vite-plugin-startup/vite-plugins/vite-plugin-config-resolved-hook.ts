/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plugin, ResolvedConfig } from 'vite'

import { logWithDivider } from './shared'
import { inspect } from 'util'

export function vitePluginConfigResolvedHook(): Plugin {
  let resolvedConfig: ResolvedConfig

  return {
    name: 'vite-plugin-config-resolved-hook',
    configResolved(config) {
      logWithDivider('vite-plugin-config-resolved-hook')
      console.log(inspect(config, false, 100, true))

      resolvedConfig = config
    },
  }
}
