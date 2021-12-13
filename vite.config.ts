import { defineConfig } from 'vite'
import path from 'path'
import { getVitePlugin } from './build/vite/plugin'

const resolve = (dir) => path.resolve(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: getVitePlugin(),
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
