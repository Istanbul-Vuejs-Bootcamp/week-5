import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value: 1
  },
  mutations: {
    setValueData(state, payload) {
      state.value = payload;
    }
  },
  getters: {
    getValueData: (state) => state.value,
  },
  actions: {
  },
})
