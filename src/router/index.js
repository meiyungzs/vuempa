import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index/index'
import Demo from '@/pages/demo/demo'
import Test from '@/pages/test/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
