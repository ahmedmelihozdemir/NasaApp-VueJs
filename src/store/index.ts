import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    epic: [],
  },
  getters: {
    getEpics: state => state.epic,
  },
  mutations: {
    setEpics: (state, payload) => {
      state.epic = payload
    }
  },
  actions: {
    /* nasaApiRequest({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=DEMO_KEY`)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
          .finally(() => {
            commit('setEpics', payload)
          })
      })
    }, */
    
    
  },
  modules: {
  }
})
