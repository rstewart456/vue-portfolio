import Vue from 'vue'
import Vuex from 'vuex'
import projects from './Projects/projects'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projects
  }
})
