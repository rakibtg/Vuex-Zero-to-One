<template>
  <div class="hello">
    <h1>{{ $store.state.msg }}</h1>
    <h4>{{ $store.getters.fullName }}</h4>

    <h2>Friends</h2>
    <ul>
      <li 
        v-for="(friend, index) in $store.state.friendsModule.friends"
        :key="index"
      >
        {{ friend }} 
        <button
          @click.prevent="$store.dispatch('friendsModule/unFriendAction', index)"
        >Unfriend</button>
      </li>
    </ul>

    <button
      @click.prevent="$store.dispatch('friendsModule/addFriendAction')"
    >Add Friend</button>


    <p>Vuex tutorial by <a href="https://twitter.com/rakibtg">@rakibtg</a></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
