<template>
  <!-- TODO: meter el navbar y el footer en el componente Homepage-->
  <NavBarHomepage class="navbar" />
  <div class="content">
    <HelloWorld />
  </div>
  <FooterHomepage/>
</template>

<script>
import NavBarHomepage from '@/components/NavBarHomepage.vue';
import FooterHomepage from '@/components/FooterHomepage.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    NavBarHomepage,
    HelloWorld,
    FooterHomepage
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

  :root {
    --nav-bar-height: 100px;
    --custom-blue: #203B70;
    --custom-gray: #5D6473;
    --custom-dark-blue: #1D2F56;
  }

  div.content {
    margin-top: var(--nav-bar-height);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }
</style>
