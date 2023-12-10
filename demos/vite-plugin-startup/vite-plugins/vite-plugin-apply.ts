import { Plugin } from 'vite'

export function vitePluginApply(): Plugin {
  return {
    name: 'vite-plugin-apply',
    // serve or build
    apply: 'serve',

    // 通过函数配置，更加灵活
    // apply(config, env) {},
  }
}
