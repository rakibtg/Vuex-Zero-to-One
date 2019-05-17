export const alert = {
  namespaced: true,
  state: {
    message: '',
    color: '',
  },
  getters: {
    getAlerts (state) {
      return state
    }
  },
  mutations: {
    addAlert (state, alert) {
      state.message = alert.message
      state.color = alert.color
    }
  },
  actions: {
    alert (context, payloads) {
      context.commit('addAlert', payloads)
    }
  },
}