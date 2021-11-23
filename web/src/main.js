import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

if (process.env.NODE_ENV === 'production') {
  // TODO: Change after initial deploy.
  axios.defaults.baseURL = 'http://localhost:3000';
} else {
  axios.defaults.baseURL = 'http://localhost:3000';
}

