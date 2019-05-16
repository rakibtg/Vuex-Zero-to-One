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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
p {
  font-size: 20px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
