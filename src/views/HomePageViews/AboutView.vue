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
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 20px 0;
    text-align: center;
    overflow: hidden;
    .title {
      text-align: left;
      width: 100%;
      color: var(--custom-dark-blue);
    }
    p {
      text-align: left;
      font-size: large;
    }
  }
</style>