import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import { defineConfig } from 'rollup'

export default defineConfig(
  // 可以传一个对象或一个数组，使用场景区别：
  // - 对象：有一个或多个入口，但 output 配置是共用的
  // - 数组：有多个入口，且 output 配置不同
  [
    {
      input: ['src/index.js', 'src/utils.js'],
      output: [
        // {
        //   // 产物输出目录
        //   dir: 'dist',
        //   // 以下三个配置项都可以使用这些占位符:
        //   // 1. [name]: 去除文件后缀后的文件名
        //   // 2. [hash]: 根据文件名和文件内容生成的 hash 值
        //   // 3. [format]: 产物模块格式，如 es、cjs
        //   // 4. [extname]: 产物后缀名(带`.`)
        //   // 入口模块的输出文件名
        //   entryFileNames: `[name].js`,
        //   // 非入口模块(如动态 import)的输出文件名
        //   chunkFileNames: 'chunk-[hash].js',
        //   // 静态资源文件输出文件名
        //   assetFileNames: 'assets/[name]-[hash][extname]',
        //   // 产物输出格式，包括`amd`、`cjs`、`es`、`iife`、`umd`、`system`
        //   format: 'cjs',
        //   // 是否生成 sourcemap 文件
        //   sourcemap: true,
        //   // 如果是打包出 iife/umd 格式，需要对外暴露出一个全局变量，通过 name 配置变量名
        //   name: 'MyBundle',
        //   // 全局变量声明
        //   globals: {
        //     // 项目中可以直接用`$`代替`jquery`
        //     jquery: '$',
        //   },
        // },
        {
          dir: 'dist/es',
          format: 'esm',
        },
        // {
        //   dir: 'dist/cjs',
        //   format: 'cjs',
        // },
      ],
      // 对于某些第三方包，有时候我们不想让 Rollup 进行打包，也可以通过 external 进行外部化
      // 在 SSR 构建或者使用 ESM CDN 的场景中，这个配置将非常有用
      // external: ['lodash'],
      plugins: [nodeResolve(), commonjs()],
    },
    {
      input: ['src/index.js'],
      output: [
        {
          name: 'Foo',
          dir: 'dist/umd',
          format: 'umd',
          globals: {
            lodash: '_',
          },
        },
        {
          name: 'Foo',
          dir: 'dist/iife',
          format: 'iife',
          globals: {
            lodash: '_',
          },
        },
      ],
      plugins: [nodeResolve(), commonjs()],
    },
  ],
)
