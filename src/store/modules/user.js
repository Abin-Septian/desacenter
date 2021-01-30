const state = {
  user : {
    token : {

    },
    detail : {

    }
  }
}

const mutations = {
  SET_USER(state, payload) {
    state.user = payload
  },
}

const getters = {
  getUser: (state) => state.user,
}

const actions = {
  setUser({ commit }, payload) {
    commit('SET_USER', payload)
  },
}

export default {
  state,
  mutations,
  getters,
  actions,
}
