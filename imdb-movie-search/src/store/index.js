import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchMovies: [],
  },
  mutations: {
    setMovies(state, payload) {
      state.searchMovies = payload;
    }
  },
  actions: {
    searchMovie({commit}, payload) {
      const axios = require('axios');
      axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=d1be01a0&s='+ payload).then((response) =>{

        if (response.data.totalResults) {
          commit('setMovies', response.data.Search)
        } else {
          window.vueInstance.$bvToast.toast(response.data.Error, {
            title: 'Error',
            autoHideDelay: 2000,
          })
        }
      })
    }
  },
  modules: {
  }
})
