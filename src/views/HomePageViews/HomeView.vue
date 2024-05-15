<template>
    <div class="container">
        <div class="content">
          <section>
            <h1 class="title">SOFTWARE PARA LA ADMINISTRACIÓN DE TU NEGOCIO</h1>
            <p>Factura Electrónica, Nómina, Documento Soporte, Contabilidad, Cartera, Cotizaciones, Inventarios y más, todo en un solo lugar, <span>sin costos ocultos ni cláusulas de permanencia.</span></p>

          </section>
          <div class="image">
            <img src="@/assets/ImagenHome.png" alt="Imagen inicio" height="500px" width="500px">
          </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .content {
    display: flex;
    width: 80%;
    margin: 20px 0;
    padding-left: 10%;
    padding: auto;
    text-align: left;
    
  }
  .image{

    padding-left: 100px;
  }
  .section{
    max-width: 200px;
    margin-right: 100px;
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