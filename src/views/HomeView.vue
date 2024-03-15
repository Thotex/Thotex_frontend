<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <NavBarHomepage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import NavBarHomepage from '@/components/NavBarHomepage.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    NavBarHomepage
  },
});
</script>
