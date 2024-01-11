import './assets/main.css'
import 'primevue/resources/themes/lara-dark-pink/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'
import ToastService from 'primevue/toastservice'

createApp(App).use(PrimeVue).use(ToastService).use(router).mount('#app')
