<template>
  <div class="page">
    <div class="split-page">

      <!--SIDEBAR: Contains the user list-->
      <div class="aside">
        <div class="user-row" v-for="user in users">
          <div class="user-column-left">
            <div class="user-photo"></div>
          </div>
          <div class="user-column-right">
            <div class="user-nickname">{{user.name}}</div>
            <div class="user-message">{{user.lastMessage}}</div>
          </div>
        </div>
      </div>

      <!--MAIN: Contains the main chat and the chat bubbles-->
      <div class="main">

        <div class="socket-indicator-wrapper">
          <span
            class="socket-indicator"
            :class="{'is-enabled': isWebsocketConnected }"
          >
          </span>
          <small v-if="isWebsocketConnected">Connected</small>
          <small v-else>Disconnected</small>
        </div>

        <div>
          {{msg}}
        </div>

        <div class="chat-wrapper">
          <div class="chat-row">
            <div class="chat-bubble">Hi!</div>
          </div>

          <div 
            class="chat-row" 
            :class="{'is-right': item.isMe }" 
            v-for="item in messages"
          >
            <div class="chat-bubble">
              {{item.message}}
            </div>
          </div>
        </div>
        
        <br/>

        <div v-if="isTyping">
          <small>someone is typing...</small>
        </div>
        <br>

        <input 
          class="chat-input" 
          type="text" 
          placeholder="Enter your message"
          :value="message"
          @keyup="onTypeDispatch" 
          @keyup.enter="onEnter"
        />
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'template',
  data () {
    return {
      msg: 'chat'
    }
  },
  computed: {
    ...mapGetters(['isWebsocketConnected', 'users']),
    ...mapGetters('chat', ['message', 'messages', 'isTyping'])
  },
  methods: {
    ...mapActions('chat', ['onType', 'onEnter']),
    onTypeDispatch (evt) {
      // Skip if enter key
      if (evt.keyCode === 13) {
        return false
      }
      this.onType({
        key: 'message',
        value: evt.currentTarget.value
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../styles/theme.scss";

.page {
  @extend %page;
  background: white;
}

.split-page {
  display: grid;
  grid-template-columns: 240px 1fr;
  .aside {
    grid-column: 1 / 2;
    border-right: $border-primary;
  }
  .main {
    grid-column: 2 / 3;
  }
}

.chat-input {
  width: 100%;
  height: 30px;
  font-size: 14px;
  padding: 0 5px;
  border: none;
  border-top: $border-primary;
  border-bottom: $border-primary;
}

.chat-row {
  display: flex;
  width: 100%;
}

.chat-row .chat-bubble {
  background: $gallery;
}

.chat-row.is-right {
  justify-content: flex-end;
}

.chat-row.is-right .chat-bubble {
  background: rgba($mountain-meadow, .5);
}

.chat-bubble {
  height: 30px;
  line-height: 30px;
  padding: 0 8px;
  border-radius: 11px;
  display: inline-block;
  color: black;
  font-size: 14px;
}

.socket-indicator-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.socket-indicator {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: $silver;
  display: inline-block;
  margin: 0 4px;
}

.socket-indicator.is-enabled {
  background: $crimson-red;
}

.user-row {
  display: grid;
  grid-template-columns: 10px 40px 10px 1fr 10px;
  grid-template-rows: 10px 1fr 10px;
  font-size: 14px;
  border-bottom: $border-primary;
}

.user-photo {
  height: 40px;
  width: 40px;
  background: $gallery;
  display: block;
  border-radius: 50%;
}
.user-column-left {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}
.user-column-right {
  grid-column: 4 / 5;
  grid-row: 2 / 3;
}

.user-nickname {
  font-weight: bold;
}
.user-message {

}
</style>
