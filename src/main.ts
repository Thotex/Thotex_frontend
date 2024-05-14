import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
//import store from './store'

import { Icon } from '@iconify/vue'

const app = createApp(App)
app.component('IconifyIcon', Icon)

//app.use(store).use(router).mount('#app')