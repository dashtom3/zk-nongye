import Vue from 'vue'
import Vuex from 'vuex'

import Router from 'vue-router'
import Main from '@/components/Main'
import Topic from '@/components/Topic'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Topic/:id',
      name: 'Topic',
      component: Topic
    }
  ]
})
