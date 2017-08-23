<template>
    <div class="color">
        <div class="paper">{{msg}} {{name}}</div>

        <div>Got the count: {{count}}</div>

        {{echoCount(1)}}
        {{shout}}

        <button @click="increment(3)">
            Click to increment
        </button>

        <button @click="someAction">
            say something {{saySomething}}
        </button>
        <router-link to="/">
            Back
        </router-link>    
    </div>
    
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'greet',
  computed: {
    ...mapState([
      'count'
    ]),
    ...mapState('greeter', [
      'name'
    ]),
    ...mapGetters([
      'echoCount',
      'shout'
    ]),
    ...mapGetters('greeter', [
      'saySomething'
    ])
  },
  beforeMount () {
    // this.$http.get('http://www.google.com').then((response) => {
    //   console.log(response)
    // })
  },
  data () {
    return {
      msg: 'vuex'
    }
  },
  methods: {
    ...mapActions([
      'increment'
    ]),
    ...mapActions('greeter', [
      'someAction'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.color {
    .paper {
        color: red;
    }
}
</style>
