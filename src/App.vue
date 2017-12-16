<template>
  <div id="app">
    <header>
      <span>{{ title }}</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      title: 'Go Chat'
    }
  }
}
</script>

<style lang="scss">
@import "./styles/main.scss";

</style>
