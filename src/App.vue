<template>
<div class="bg-blue-cool h-screen">
  <the-heading />
  <div id="main">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import Header from './components/header.vue';

export default {
  name: 'App',
  components: {
    'the-heading': Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#main {
  height: 100%;
}
</style>
