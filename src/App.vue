<template>
  <div id="container">
    <Header></Header>
    <RecordOne></RecordOne>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import RecordOne from './components/RecordOne.vue'

export default {
  name: 'App',
  components: {
    Header,
    RecordOne
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
