import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Logout from './components/Logout.vue'
import Signup from './components/Signup.vue'
import store from './store'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/logout', name: 'logout', component: Logout },
  { path: '/signup', name: 'signup', component: Signup },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const unauth_view = to.name == 'login' || to.name == 'signup'

  if (!unauth_view && !store.getters.token) next({ name: 'login' })
  else if (unauth_view && store.getters.token) next({ name: 'home' })
  else next()
})

export default router
