export default {
  namespaced: true,
  state: {
    message: '',
    messages: [],
    isTyping: false
  },
  mutations: {
    SET (state, { key, value }) {
      state[key] = value
    },
    ADD_MESSAGE (state, { username, message, isMe }) {
      state.messages = state.messages.concat([{ username, message, isMe }])
    }
  },
  actions: {
    // onType ({ dispatch, commit, getters, rootGetters }, { key, value }) {
    onType ({ commit }, { key, value }) {
      commit('SET', { key, value })
    },
    onEnter ({ commit, getters, dispatch }) {
      const message = getters.message.trim()
      if (!message) {
        return
      }
      commit('ADD_MESSAGE', { message, username: 'john', isMe: true })
      commit('SET', { key: 'message', value: '' })

      // Fake user typing
      commit('SET', {
        key: 'isTyping',
        value: true
      })
      window.setTimeout(() => {
        commit('ADD_MESSAGE', { message, username: 'doe', isMe: false })
        commit('SET', {
          key: 'isTyping',
          value: false
        })
      }, 1000)
    }
  },
  getters: {
    // saySomething (state, getters, rootState, rootGetters)
    isTyping (state) {
      return state.isTyping
    },
    message (state) {
      return state.message
    },
    messages (state, getters, rootState, rootGetters) {
      return state.messages
    }
  }
}
