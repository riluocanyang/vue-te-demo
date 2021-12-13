// import 'virtual:windi.css'
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
import { createApp } from 'vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import App from './App.vue'

async function start() {
  const app = createApp(App)
  // config router
  setupRouter(app)
  setupStore(app)
  app.mount('#app')
}
start()
