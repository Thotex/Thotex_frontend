<template>
    <div class="container">
        <div class="content">
          <section>
            <h1 class="title contenido">SOFTWARE PARA LA ADMINISTRACIÓN DE TU NEGOCIO</h1>
            <p class="contenido">Thotex es una plataforma diseñada para facilitar
              la gestión contable y financiera de pequeños y medianos comercios. 
              Ofreciendo  funcionalidades que permiten a los 
              usuarios a gestionar inventarios,
              controlar la nómina, y realizar un seguimiento detallado de sus operaciones
              económicas.</p>

          </section>
          <div class="image">
            <img src="@/assets/ImagenHome.png" alt="Imagen inicio" height="600px" width="600px">
          </div>
        </div>
        <div class="subContainer">
          <label >asdad</label>
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
  background: white;
  overflow-y: auto;
  overflow-x: hidden; /* Ocultar el desbordamiento horizontal */
  padding: 20px;
  box-sizing: border-box; /* Incluir padding y border en el ancho y alto del contenedor */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  padding: 0 5%;
  text-align: left;
  box-sizing: border-box;
  margin-bottom: 23%;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 10%;
    text-align: left;
  }
}

.image {
  margin-top: 20px;
  padding: 0;
  box-sizing: border-box; /* Asegura que padding no cause desbordamiento */
  
  img {
    max-width: 100%;
    height: auto;
    display: block; /* Evita espacio en blanco debajo de la imagen */
  }
}

.section {
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
  
  .title {
    text-align: center;
    color: $custom-dark-blue;
    margin-bottom: 20px;
  }

  p {
    text-align: justify;
    font-size: 1rem;
    span {
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    margin-right: 50px;

    .title {
      text-align: left;
    }
  }
}

.subContainer {
  background-color: #E3ECFF;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
}

/* General: Para asegurar que no haya desbordamiento horizontal */
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Ocultar el desbordamiento horizontal en todo el documento */
}
.contenido{
  margin-left: 70px;
  margin-right: 30%;
  text-align: justify;
  font-size: 20px;
}

</style>