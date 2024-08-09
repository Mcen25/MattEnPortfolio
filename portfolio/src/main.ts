import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'

// Add the necessary CSS
import { createBootstrap } from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.use(createBootstrap()) // Important
app.mount('#app')
