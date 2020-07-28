<template>
  <div id="container">
    <Header></Header>
    <Player></Player>
    <RecordOne></RecordOne>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import RecordOne from './components/RecordOne.vue'
import Player from './components/Player.vue'

export default {
  name: 'App',
  components: {
    Header,
    RecordOne,
    Player
  }
}
</script>

<style>
.container{
  margin: 0 auto;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  padding: 0;
} */
</style>
