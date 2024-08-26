<template> 
  <FooterHomepage class="fott"/>
  <NavBarHomepage :navBarRouterNames="navBarRouterNames"/>
  <div class="content">
    <router-view/>
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
.fott{
  border-width: 5px;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Asegúrate de que tenga un valor mayor al del contenido */
  background-color: white; /* Esto es opcional para asegurar que el contenido no lo atraviese */
}
.content {

  @media (max-width: 768px) {
    margin-top: 80px; 
}
}
</style>