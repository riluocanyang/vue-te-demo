import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
// vuejsx 支持
import vueJsx from '@vitejs/plugin-vue-jsx'
import windiCSS from 'vite-plugin-windicss'
// 按需加载包
import vitePluginBabelImport from 'vite-plugin-babel-import'

export function getVitePlugin() {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
    // havt to
    vueJsx(),
    // have to
    windiCSS(),
    // vitePluginBabelImport([
    //   {
    //     libraryName: ''
    //   }
    // ])
  ]
  return vitePlugins
}
