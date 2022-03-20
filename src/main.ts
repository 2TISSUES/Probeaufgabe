import { createApp } from 'vue'
// import router from '@/router'
import './index.css'
import App from './App.vue'
import router from './router'
import { store, key } from './store'

createApp(App).use(router).use(store, key).mount('#app')
