import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../pages/Home.vue')
const Register = () => import('../pages/Register.vue')
const Login = () => import('../pages/Login.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/register', name: 'register', component: Register },
    { path: '/login', name: 'login', component: Login },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router 