import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import { Icon } from '@iconify/vue'

//PINIA
import { createPinia } from 'pinia'
const pinia = createPinia()

//WAVE-UI
// import WaveUI from 'wave-ui'
// import 'wave-ui/dist/wave-ui.css'

//COOKIES
import { globalCookiesConfig } from 'vue3-cookies';
globalCookiesConfig({
    expireTimes: '1m',
})

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCDbTrhmXRxUd3p25xWcPr9aGWItYhG-4s",

  authDomain: "thotex-firebase-implementation.firebaseapp.com",

  projectId: "thotex-firebase-implementation",

  storageBucket: "thotex-firebase-implementation.appspot.com",

  messagingSenderId: "1006552697489",

  appId: "1:1006552697489:web:5ad173566b1046a038cd30",

  measurementId: "G-FXJVNK6L37"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebaseApp);

const app = createApp(App)
app.component('IconifyIcon', Icon)
app.use(pinia)
app.use(router)
// app.use(WaveUI)
app.mount('#app')