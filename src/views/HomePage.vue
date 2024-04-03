<template> 
  <FooterHomepage/>
  <NavBarHomepage/>
  <div class="content">
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import NavBarHomepage from '@/components/NavBarHomepage.vue';
import FooterHomepage from '@/components/FooterHomepage.vue';
</script>

<style lang="scss">

</style>