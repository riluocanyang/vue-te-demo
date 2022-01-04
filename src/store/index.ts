import type { App } from 'vue'
import { createStore } from 'vuex'

// Vite 支持使用特殊的import.meta.globEager 函数从文件系统导入多个模块
const modulesFiles = import.meta.globEager('./modules/**/*.ts')
const modules = Object.keys(modulesFiles).reduce((module, modulePath) => {
  // modulePath: ./modules/home.ts
  const moduleName = modulePath.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$2')
  const value = modulesFiles[modulePath]
  module[moduleName] = value.default
  return module
}, {})

const store = createStore({
  ...modules,
})

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }
