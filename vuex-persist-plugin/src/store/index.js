import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'vuejsBootcamp'
})


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    updateDate: null,
  },
  mutations: {
    increment(state) {
      state.count++;
      state.updateDate = new Date();
      // localStorage.setItem('myCount', state.count);
    },
    /*setCount(state, payload) {
      state.count = payload
    }*/
  },
  plugins: [vuexLocal.plugin]
})
