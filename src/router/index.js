import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Index from '@/pages/index'
import Exchange from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/exchange/symbol/:symbol',
      name: 'exchange',
      component: Exchange
    }
  ]
})
