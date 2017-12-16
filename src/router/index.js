import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
// import Greet from '@/components/Greet'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    // {
    //   path: '/greet',
    //   name: 'Greet',
    //   component: Greet
    // }
  ]
})
