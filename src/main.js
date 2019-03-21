// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/dark.css'
import axios from 'axios'
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
// import Vueaxios from 'vue-axios'
Vue.config.productionTip = false
// Vue.prototype.$http=axios
Vue.prototype.$axios = axios
axios.defaults.baseURL = "http://119.29.96.116:8762/"
Vue.use(ElementUI)
// Vue.use(mavonEditor)
// Vue.use(Vueaxios, axios)
/* eslint-disable no-new */
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
      hljs.highlightBlock(block)
  })
})

new Vue({
  el: '#app',
  router,
  axios,
  render: h => h(App),
  template: '<App/>'
})
