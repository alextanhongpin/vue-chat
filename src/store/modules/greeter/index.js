export default {
  namespaced: true,
  state: {
    name: 'this is module greeter'
  },
  mutations: {

  },
  actions: {
    onType ({ dispatch, commit, getters, rootGetters }, evt) {
      console.log(evt.currentTarget.value)
      console.log('dispatch', dispatch)
      console.log('commit', commit)
      console.log('getters', getters)
      console.log('rootGetters', rootGetters)
    }
  },
  getters: {
    saySomething (state, getters, rootState, rootGetters) {
      console.log('state:', state)
      console.log('getters:', getters)
      console.log('rootState:', rootState)
      console.log('rootGetters:', rootGetters)
      return 'Hellooo'
    }
  }
}
