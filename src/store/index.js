import Vuex from 'vuex'
import Vue from 'vue'
import greeter from './modules/greeter'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    greeter
  },
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    echoCount: (state, getters) => (id) => {
      const msg = 'Echo:' + state.count + ' ' + getters.shout + ' ' + id
      console.log(msg)
      return msg
    },
    shout () {
      return 'shouting'
    }
  },
  actions: {
    increment ({ commit, state, dispatch }, amount) {
      setTimeout(() => {
        console.log('This is an asynchronous step')
        console.log(state, amount)
        dispatch('print')
        commit('increment')
      }, 1000)
    },
    print ({ state }) {
      console.log('Dispatched printing current count:', state.count)
    }
  }
})
store.commit('increment')
console.log(store.state.count)

store.commit('increment')
console.log(store.state.count)

console.log(store.getters.echoCount(1))
export default store
