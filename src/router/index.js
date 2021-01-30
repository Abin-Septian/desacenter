import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Login from '@/views/LoginUser';
import Logout from '@/views/Logout';
import SignUp from '@/views/SignUp';
import Bumdes from '@/views/Bumdes';
import Peserta from '@/views/Peserta';
import Kuisioner from '@/views/Kuisioner';

// import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/login'
      },
      {
        path: '/',
        redirect: '/login'
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/logout',
        name: 'Logout',
        component: Logout
      },
      {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
      },
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/bumdes',
        name: 'Bumdes',
        component: Bumdes,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/peserta',
        name: 'Peserta',
        component: Peserta,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/kuisioner',
        name: 'Kuisioner',
        component: Kuisioner,
        meta: {
          requiresAuth: true
        }
      }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
