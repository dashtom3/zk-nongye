import Vue from 'vue'
import Vuex from 'vuex'

import Router from 'vue-router'
import Main from '@/components/Main'
import Middle from '@/components/Middle'
import Weather from '@/components/weather/Weather'
import Pest from '@/components/pest/Pest'
import Soil from '@/components/soil/Soil'
import Price from '@/components/price/Price'

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
      path: '/Middle/:id',
      name: 'Middle',
      component: Middle
    },
    {
      path: '/Weather/:id',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/Pest/:id',
      name: 'Pest',
      component: Pest
    },{
      path: '/Soil/:id',
      name: 'Soil',
      component: Soil
    },{
      path: '/Price/:id&:name',
      name: 'Price',
      component: Price
    }
  ]
})
