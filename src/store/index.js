import Vue from 'vue'
import Vuex from 'vuex'
import random_name from 'node-random-name'
import { friendsModule } from './modules/friends.module'
import { alert } from './modules/alert.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Vuex from Zero to One',
    firstName: 'Foo',
    lastName: 'Bar',
  },
  getters: {
    fullName (state) {
      return `${state.firstName} ${state.lastName}`
    },
  },
  mutations: {},
  actions: {},
  modules: {
    friendsModule,
    alert
  }
})
