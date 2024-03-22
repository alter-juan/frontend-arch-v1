import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './routes'
import { UserRouter } from './user/User.routes'

UserRouter(router)

createApp(App).use(router).mount('#app')
