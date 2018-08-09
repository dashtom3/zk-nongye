// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'element-ui'
import Vuex from 'vuex'
import global from './global/global.js'
import echarts from 'echarts'


Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(axios)
Vue.use(Vuex)

Vue.prototype.$global = global
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
