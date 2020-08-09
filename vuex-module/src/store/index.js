import Vue from 'vue'
import Vuex from 'vuex'

import authentication from "./module/authentication";
import users from "./module/users";
import product from "./module/product";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  mutations: {
  },
  actions: {  },
  getters: {
  },
  modules: {
    authentication,
    users,
    product
  }
})
