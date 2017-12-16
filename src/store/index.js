import Vuex from 'vuex'
import Vue from 'vue'

import greeter from './modules/greeter/index'
import chat from './modules/chat'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    greeter,
    chat
  },
  state: {
    count: 0,
    ws: null,
    isWebsocketConnected: false,
    // Create fake users where you can select to start conversations
    users: [
      {
        name: 'john',
        lastMessage: 'this is unexpected..',
        id: 1
      },
      {
        name: 'katy',
        lastMessage: 'awesome!',
        id: 2
      },
      {
        name: 'perry',
        lastMessage: 'okay lo',
        id: 3
      }
    ]
  },
  mutations: {
    SET (state, { key, value }) {
      state[key] = value
    }
  },
  getters: {
    // echoCount: (state, getters) => (id) => {
    //   const msg = 'Echo:' + state.count + ' ' + getters.shout + ' ' + id
    //   console.log(msg)
    //   return msg
    // },
    // shout () {
    //   return 'shouting'
    // },
    users (state) {
      return state.users
    }
  },
  actions: {
    // increment ({ commit, state, dispatch }, amount) {
    //   setTimeout(() => {
    //     console.log('This is an asynchronous step')
    //     console.log(state, amount)
    //     dispatch('print')
    //     commit('increment')
    //   }, 1000)
    // },
    // print ({ state }) {
    //   console.log('Dispatched printing current count:', state.count)
    // }
  }
})

// function connectWebsocket () {
//   const socket = new window.WebSocket(`ws://localhost:3000/ws?room=car`)

//   socket.onopen = function () {
//     store.commit('SET', {
//       key: 'ws',
//       value: socket
//     })
//     store.commit('SET', {
//       key: 'isWebsocketConnected',
//       value: true
//     })
//     const msg = {
//       handle: 'hello socket',
//       text: 'this is a new text message',
//       room: 'car'
//     }
//     socket.send(JSON.stringify(msg))
//   }

//   socket.onmessage = function (event) {
//     console.log(JSON.parse(event.data))
//     // store.commit('SET')
//   }
// }
// connectWebsocket()
export default store
