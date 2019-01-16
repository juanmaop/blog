import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login'
import Index from '@/pages/index'
Vue.use(Router)

export default new Router({
  mode:'history', //去掉/#/
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: '',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
  ]
})
