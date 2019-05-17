import random_name from 'node-random-name'

export const friendsModule = {
  namespaced: true,
  state: {
    friends: [],
  },
  getters: {
    friends (state) {
      return state.friends
    }
  },
  mutations: {
    addFriend (state, friend) {
      state.friends = [
        friend,
        ...state.friends,
      ]
    },
    unFriend (state, friendIndex) {
      state
        .friends
        .splice(friendIndex, 1)
    }
  },
  actions: {
    addFriendAction (context) {
      context.commit('addFriend', random_name())
      const alert = {
        message: 'Added',
        color: 'green',
      }
      context.dispatch('alert/alert', alert, { root: true })
    },
    unFriendAction (context, index) {
      context.commit('unFriend', index)
      const alert = {
        message: 'Removed',
        color: 'red',
      }
      context.dispatch('alert/alert', alert, { root: true })
    }
  },
}