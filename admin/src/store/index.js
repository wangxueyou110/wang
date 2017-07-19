import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    login: true
  },
  getters: {
    login: state => {
      return state.login
    }
  },
  mutations: {
    checkLogin: (state, payload) => {
      state.login = payload;
    },
    changeLogin:()=>{
      this.login=false
    }
  },
  actions: {
    checkLogin: ({ commit }, payload) => {
      commit('checkLogin', payload);
    }
  }
})