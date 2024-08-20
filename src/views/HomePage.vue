<template> 
  <FooterHomepage class="fott"/>
  <NavBarHomepage :navBarRouterNames="navBarRouterNames"/>
  <div class="content">
    <router-view/>
  </div>
  <div class="footer-space">

  </div>
</template>

<script setup lang="ts">
  import NavBarHomepage from '@/components/HomePageComponents/NavBarHomepage.vue';
  import FooterHomepage from '@/components/HomePageComponents/FooterHomepage.vue';
  import IRouterShownName from '@/interfaces/IRouter';

  const navBarRouterNames:IRouterShownName[] = [
    {
      name: 'home',
      shownName: 'Inicio',
    },
    {
      name: 'about',
      shownName: 'Conocenos',
    },
    {
      name: 'prices',
      shownName: 'Precios',
    }
  ] 
</script>

<style lang="scss" scoped>
  .footer-space {
    height: 100px;
  }
  
.fott{
  border-width: 5px;
}
</style>