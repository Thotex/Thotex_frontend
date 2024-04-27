import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import { Icon } from '@iconify/vue'

//PINIA
import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)
app.component('IconifyIcon', Icon)

app.use(pinia).use(router).mount('#app')
