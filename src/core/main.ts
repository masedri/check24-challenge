import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/core/App.vue'
import router from '@/core/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
