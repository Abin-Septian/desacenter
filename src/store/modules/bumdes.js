const state = {
    data: {

    }
}

const mutations = {
    UPDATE_BUMDES(state, payload) {
        state.data = payload
    },
}

const getters = {
    getBumdesData: (state) => state.data,
}

const actions = {
    updateLocalBumdes({ commit }, payload) {
        commit('UPDATE_BUMDES', payload)
    },
}

export default {
  state,
  mutations,
  getters,
  actions,
}
