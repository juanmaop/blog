import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login'
import Index from '@/pages/index'
import BlogDetail from '@/pages/blogDetail'
import AddBlog from '@/pages/AddBlog'
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
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/index/:tag',
      name: 'Tag',
      component: Index
    },
    {
      path: '/blogDetail/:id',
      name: 'BlogDetail',
      component: BlogDetail
    },
    {
      path: '/AddBlog',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
