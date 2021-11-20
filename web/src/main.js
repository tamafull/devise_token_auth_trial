import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

createApp(App).mount('#app')

if (process.env.NODE_ENV === 'production') {
  // TODO: Change after initial deploy.
  axios.defaults.baseURL = 'http://localhost:3000';
} else {
  axios.defaults.baseURL = 'http://localhost:3000';
}
