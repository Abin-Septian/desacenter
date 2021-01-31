import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user.js'
import Bumdes from './modules/bumdes.js'
import Peserta from './modules/peserta.js'
import Kuisioner from './modules/kuisioner.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User,
    Bumdes,
    Peserta,
    Kuisioner,
  },
})
