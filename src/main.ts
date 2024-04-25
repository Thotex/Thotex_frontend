import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import { Icon } from '@iconify/vue'

const app = createApp(App)
app.component('IconifyIcon', Icon)

app.use(router).mount('#app')
