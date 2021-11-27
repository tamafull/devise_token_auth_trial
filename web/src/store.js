import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const persistedState = createPersistedState({
  key: process.env.VUE_APP_TOKEN_NAME,
  paths: ['token'],
  storage: window.sessionStorage,
})


const state = {
  token: '',
}

const getters = {
  token(state) {
    return state.token
  },
}

const mutations = {
  setToken(state, token) {
    state.token = token
  },
}

const actions = {
  setToken({ commit }, value) {
    commit('setToken', value)
  },
}

const store = createStore({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,

  plugins: [
    persistedState,
  ],
})

export default store
