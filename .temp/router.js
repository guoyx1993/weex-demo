import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Login from '@/views/user/login'
import Hello from '@/components/HelloWorld'
Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
