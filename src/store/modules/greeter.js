export default {
  namespaced: true,
  state: {
    name: 'this is module greeter'
  },
  mutations: {

  },
  actions: {
    someAction ({ dispatch, commit, getters, rootGetters }) {
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
