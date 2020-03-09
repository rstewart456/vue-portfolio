import { db } from '@/firebase'

export default {
  state: {
    projects: null,
    pnull: null
  },
  mutations: {
    setprojects(state, payload) {
      state.projects = payload
    },
    setpnull(state, payload) {
      state.pnull = payload
    }
  },
  getters: {
    projects(state) {
      return state.projects
    }
  },
  actions: {
    getprojects({ commit }) {
      const project = db.collection('projects').orderBy('createdAt', 'desc')
      project.onSnapshot(snapShot => {
        const temp = []
        snapShot.forEach(doc => {
          const data = {
            id: doc.id,
            ...doc.data()
          }
          temp.push(data)
          commit('setprojects', temp)
        })
      })
    }
  }
}
