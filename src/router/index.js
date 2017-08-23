import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Greet from '@/components/Greet'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/greet',
      name: 'Greet',
      component: Greet
    }
  ]
})
