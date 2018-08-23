import Vue from 'vue'
import Vuex from 'vuex'

import Router from 'vue-router'
import Main from '@/components/Main'
import Topic from '@/components/Topic'
import pest_topic from '@/components/pest_topic'
import Soil from '@/components/Soil'

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
    },
    {
      path: '/pest_topic/:id',
      name: 'pest_topic',
      component: pest_topic
    },{
      path: '/Soil/:id',
      name: 'Soil',
      component: Soil
    }
  ]
})
