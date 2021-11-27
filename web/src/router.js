import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import store from './store'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.getters.token) next({ name: 'login' })
  else if (to.name == 'login' && store.getters.token) next({ name: 'home' })
  else next()
})

export default router
