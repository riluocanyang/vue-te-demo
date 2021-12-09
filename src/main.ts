import { createApp } from 'vue'
import { setupRouter } from '@/router'
import App from './App.vue'

async function start() {
  const app = createApp(App)
  // config router
  setupRouter(app)
  app.mount('#app')
}
start()
