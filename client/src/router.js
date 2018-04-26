import Vue from 'vue'
import Router from 'vue-router'
import Classes from './views/classes/Classes.vue'
import Creator from './views/creator/Creator.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'classes',
      component: Classes
    },
    {
      path: '/creator',
      name: 'creator',
      component: Creator
    }
  ]
})
