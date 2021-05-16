import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind-2.1.2.min.css'
import './assets/styles.scss'
import VueQRCodeComponent from 'vue-qrcode-component'

createApp(App).use(store).use(router).component('qr-code', VueQRCodeComponent).mount('#app')
