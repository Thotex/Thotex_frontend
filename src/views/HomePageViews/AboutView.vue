<template>
  <div class="container">
    <div class="content">
      <h1 class="title">Visión</h1>
      <p>Thotex será líder para el 2027 ofreciendo servicios contables a pequeñas, medianas y grandes empresas, siendo una plataforma fiable de fácil uso y comprensión; facilitando a toda empresa emergente el conocimiento sobre el estado financiero actual de la organización así como ayudándoles a nuestros clientes a crear planes de acción para mejorar su rendimiento.</p>
    </div>
    <div class="content">
      <h1 class="title">Mision</h1>
      <p>Brindar una herramienta de fácil uso y entendimiento para todo aquel que quiera visualizar el estado financiero de su organización, por medio de instrucciones y elementos claros que guían al usuario en cada acción para obtener una abstracción del comportamiento de su organización y ayudarlos en la toma de decisiones.</p>
    </div>
  </div>
  <div class="presentacion">
    <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/kbL2ErW.png" v-bind:title="'Migueal Angel Pinzón Garcia'" v-bind:content="''"></CardComponent>
    <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/LwOBLeM.png" v-bind:title="'Juan'" v-bind:content="''"></CardComponent>
    <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/u3AZVWo.png" v-bind:title="'Daniel'" v-bind:content="''"></CardComponent>
    <CardComponent v-bind:class="'card-global'" image="https://i.imgur.com/u3AZVWo.png" v-bind:title="'Javier'" v-bind:content="''"></CardComponent>

  </div>
</template>

<script setup lang="ts">
  import CardComponent from '../../components/PortalComponents/CardComponent.vue';    
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