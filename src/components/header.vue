<template>
<div id="container" class="h-12 bg-blue-50 px-6 py-2 text-blue-1000 text-center">
    <nav class="nav">
      <div class="font-mono text-2xl font-bold">
        <router-link :to="{ name: 'Home'}"> Medihelp </router-link>
      </div>
      <div class="right-nav font-semibold" v-if="isLoggedIn">
        <router-link :to="{ name: 'Settings'}">Settings</router-link>
        <a @click="handleLogOut">Log Out</a>

      </div>
      <div class="right-nav font-semibold" v-else>
        <router-link :to="{ name: 'Login'}">Log In</router-link>
        <router-link :to="{ name: 'Register'}">Register</router-link>
      </div>
    </nav>
</div>
</template>

<script>

// write logic to check if the person is logged in or not.
export default {
  methods: {
    handleLogOut(){
      this.$router.push({name: 'Home'})
      // TODO: Clear the auth token from the store.
    }
  }
}
</script>

<style scoped>
.router-link-active {
  text-decoration: underline;
}

nav {
  display: flex;
  justify-content: space-between;
}

.right-nav a{
  padding-left: 10px;
}
</style>