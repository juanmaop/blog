// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// import Vueaxios from 'vue-axios'
Vue.config.productionTip = false
// Vue.prototype.$http=axios
Vue.prototype.$axios = axios
axios.defaults.baseURL = "http://119.29.96.116:8762/"
Vue.use(ElementUI)
// Vue.use(Vueaxios, axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  render: h => h(App),
  // components: { App },
  template: '<App/>'
})
