<template>
    <div class="container">
        <div class="content">
            <h1 class="title">SOFTWARE PARA LA ADMINISTRACIÓN DE TU NEGOCIO</h1>
            <p>Factura Electrónica, Nómina, Documento Soporte, Contabilidad, Cartera, Cotizaciones, Inventarios y más, todo en un solo lugar, <span>sin costos ocultos ni cláusulas de permanencia.</span></p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: left;
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
    max-width: 400px;
    padding-left: 10%;
    padding: auto;
    .title {
      text-align: left;
      width: 100%;
      color: $custom-dark-blue;
    }
    p {
      text-align: left;
      font-size: large;
      span {
        font-weight: bold;
      }
    }
  }

</style>