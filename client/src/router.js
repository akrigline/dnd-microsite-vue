import Vue from 'vue'
import Router from 'vue-router'
import Classes from './views/classes/Classes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'classes',
      component: Classes
    }
  ]
})
