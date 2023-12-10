import { resolve } from 'path'
import { defineConfig } from 'vite'

import { vitePluginConfigHook } from './vite-plugins/vite-plugin-config-hook'
import { vitePluginConfigResolvedHook } from './vite-plugins/vite-plugin-config-resolved-hook'
import { vitePluginConfigureServer } from './vite-plugins/vite-plugin-configure-server'
import { vitePluginHandleHotUpdate } from './vite-plugins/vite-plugin-handle-hot-update'
import { vitePluginTransformIndexHtml } from './vite-plugins/vite-plugin-transform-index-html'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vitePluginConfigHook(),
    vitePluginConfigResolvedHook(),
    vitePluginConfigureServer(),
    vitePluginTransformIndexHtml(),
    vitePluginHandleHotUpdate(),
  ],
})
