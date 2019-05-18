<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="@/assets/logo.jpg">

    <h3 :style="color">{{message}}</h3>
    <HelloWorld/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  computed: {
    color () {
      return `
        color: ${this.$store.state.alert.color};
      `
    },
    message () {
      return this.$store.state.alert.message
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 30px;
}
* {
  color: #000;
}
button {
  font-weight: bold;
}
.logo {
  width: 150px;
  height: 150px;
  display: inline-block;
  border-radius: 200px;
}
</style>
