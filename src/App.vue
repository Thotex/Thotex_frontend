<template>
  <nav>
    <NavBarHomepage />
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
</template>

<script>

import NavBarHomepage from '@/components/NavBarHomepage.vue';

export default {
  name: 'App',
  components: {
    NavBarHomepage
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 0px;
  

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  margin: 0;
  font-family: 'Roboto';
}

:root {
  --custom-blue: #203B70;
}
</style>
