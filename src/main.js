// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import global from './global/global.js'
import echarts from 'echarts'
import dtime from 'time-formater'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false


Vue.use(ElementUI)
Vue.use(Vuex)

Vue.prototype.$global = global
Vue.prototype.$dtime = dtime
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
