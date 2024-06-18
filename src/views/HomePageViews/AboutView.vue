<template>
  <div class="container">
    <div class="content">
      <h1 class="title">Visión</h1>
      <p>Thotex será líder para el 2027 ofreciendo servicios contables a pequeños y medianos comercios, siendo una plataforma fiable, de fácil uso y comprensión ayudándoles a nuestros clientes con un enfoque en la transparencia y la excelencia en el servicio.</p>
    </div>
    <div class="content">
      <h1 class="title">Mision</h1>
      <p>Ofrecer una plataforma para la gestión de nómina e inventario, en la cual pueden gestionar y automatizar procesos financieros y contables, para que nuestros usuarios tomen las mejores decisiones en sus negocios.</p>
    </div>
  </div>
  <div class="presentacion">
    <AboutCards v-bind:class="'card-global'" image="https://i.imgur.com/GiocmnL.png" v-bind:title="'Miguel Angel Pinzón Garcia'" v-bind:content="'Desarrollador Frontend.'" v-bind:red-git="'https://github.com/MiPinzon'" v-bind:red-linked="'https://www.linkedin.com/in/miguel-angel-pinzón-garcia-1771a9267/'"></AboutCards>
    <AboutCards v-bind:class="'card-global'" image="https://i.imgur.com/LwOBLeM.png" v-bind:title="'Juan David Vasquez Pinzon'" v-bind:content="'Desarrollador Frontend.'"  v-bind:red-git="'https://github.com/MiPinzon'" v-bind:red-linked="'https://www.linkedin.com/in/miguel-angel-pinzón-garcia-1771a9267/'"></AboutCards>
    <AboutCards v-bind:class="'card-global'" image="https://i.imgur.com/u3AZVWo.png" v-bind:title="'Daniel Santiago Ramirez Rocha'" v-bind:content="'Desarrollador Backend.'" v-bind:red-git="'https://github.com/MiPinzon'" v-bind:red-linked="'https://www.linkedin.com/in/miguel-angel-pinzón-garcia-1771a9267/'"></AboutCards>
    <AboutCards v-bind:class="'card-global'" image="https://i.imgur.com/u3AZVWo.png" v-bind:title="'Javier Esteban Gonzales Vivas'" v-bind:content="'Desarrollador Backend.'" v-bind:red-git="'https://github.com/MiPinzon'" v-bind:red-linked="'https://www.linkedin.com/in/miguel-angel-pinzón-garcia-1771a9267/'"></AboutCards>

  </div>
</template>

<script setup lang="ts">

  import AboutCards from './AboutCards.vue';
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 20px;
  }
  .presentacion{
    display: flex;
    justify-content: center;
    padding-bottom: 200px;
    align-items: center;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin: 20px 0;
    text-align: center;
    overflow: hidden;
    .title {
      text-align: left;
      width: 90%;
      color: $custom-dark-blue;
    }
    p {
      text-align: justify;
      font-size: large;
      width: 90%;
    }
  }

</style>