<template>
  <div>
    <HomePage/>
  </div>
</template>

<script setup lang="ts">
  import HomePage from '@/views/HomePage.vue';
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  :root {
    --nav-bar-height: 100px;
    --custom-blue: #203B70;
    --custom-gray: #5D6473;
    --custom-dark-blue: #1D2F56;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }
</style>
