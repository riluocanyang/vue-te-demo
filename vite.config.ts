import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// vuejsx 支持
import vueJsx from '@vitejs/plugin-vue-jsx'
// 按需加载包
import vitePluginBabelImport from 'vite-plugin-babel-import'
import path from 'path'

const resolve = (dir) => path.resolve(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // vitePluginBabelImport([
    //   {
    //     libraryName: ''
    //   }
    // ])
  ],
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
