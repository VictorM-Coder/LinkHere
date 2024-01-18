import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import LinksPage from '@/views/LinksPage.vue'
import AdminLinksPage from '@/views/AdminLinksPage.vue'
import { useUserStore } from '@/stores/UserStore'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/links',
    name: 'Links',
    component: LinksPage,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: AdminLinksPage,
    meta: {
      requiresAuth: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(''),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !useUserStore().isAuthenticated) {
    next('login')
  } else {
    next()
  }
})

export default router
