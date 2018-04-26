import Vue from 'vue'
import Vuex from 'vuex'
import creator from './modules/creator'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    creator
  }
})
