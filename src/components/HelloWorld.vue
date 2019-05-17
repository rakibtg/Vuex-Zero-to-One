<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Vuex tutorial by <a href="https://twitter.com/rakibtg">@rakibtg</a></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  a {
    color: blue;
    text-decoration: none;
  }
  p {
    font-size: 20px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  li {
    padding-bottom: 5px;
  }
</style>
