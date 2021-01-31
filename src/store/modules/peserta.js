const state = {
    data:[
        {
            nama: "",
            email: ""
        }
    ],
}

const mutations = {
    UPDATE_PESERTA(state, payload) {
        state.data = payload
    },
}

const getters = {
    getPesertaData: (state) => state.data,
}

const actions = {
    updateLocalPeserta({ commit }, payload) {
        commit('UPDATE_PESERTA', payload)
    },
}

export default {
  state,
  mutations,
  getters,
  actions,
}
