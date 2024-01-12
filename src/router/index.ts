import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import LinksPage from '@/views/LinksPage.vue'
import AdminLinksPage from "@/views/AdminLinksPage.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
  },
  {
    path: '/links',
    name: 'Links',
    component: LinksPage,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminLinksPage,
  },
]

const router = createRouter({
  history: createWebHistory(''),
  routes,
})
export default router
