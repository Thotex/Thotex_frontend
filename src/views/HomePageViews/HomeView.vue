<template>
 <div class="container">
    <div class="content">
      <section>
        <h1 class="title">SOFTWARE PARA LA ADMINISTRACIÓN DE TU NEGOCIO</h1>
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
    <div  id="pqrFormSection" class="subContainer" >
      <h1>Formulario PQRS</h1>
      <div class="card-global card-centered posi">
        <form class="form-global" @submit.prevent="submitForm">
          <div class="column">
            <h2 class="label">Nombre</h2>
            <input
              required
              v-model="pqrForm.name"
              class="input"
              type="text"
              placeholder="Nombre Completo"
              @input="validateName"
            />
            
            <h2 class="label">Correo Electrónico</h2>
            <input
              required
              v-model="pqrForm.email"
              class="input"
              type="email"
              placeholder="Correo Electrónico"
            />
          </div>
          <div class="column">
            <h2 class="label">Asunto</h2>
            <select
              required
              v-model="pqrForm.subject"
              class="input"
            >
              <option value="" disabled>Selecciona una opción</option>
              <option value="Petición">Petición</option>
              <option value="Queja">Queja</option>
              <option value="Reclamo">Reclamo</option>
              <option value="Sugerencia">Sugerencia</option>
            </select>
            
            <h2 class="label">Mensaje</h2>
            <textarea
              required
              v-model="pqrForm.message"
              class="textarea"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>
        </form>
        <div class="flex-centered-button">
          <button class="button-global btn-center" @click="submitForm">Enviar</button>
        </div>
      </div>
    </div>
    <div id="pqrFormFAQS" class="faq-section">
    <h1 >Preguntas Frecuentes</h1>
    <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
      <div class="faq-question" @click="toggleAnswer(index)">
        <h2>{{ faq.question }}</h2>
        <span :class="{ 'active': activeIndex === index }">+</span>
      </div>
      <div v-if="activeIndex === index" class="faq-answer">
        <p>{{ faq.answer }}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import swal from 'sweetalert';

const pqrForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const validateName = () => {
  pqrForm.value.name = pqrForm.value.name.replace(/\d+/g, '');
};

const submitForm = () => {
  if (pqrForm.value.name && pqrForm.value.email && pqrForm.value.subject && pqrForm.value.message) {
    console.log("Formulario enviado", pqrForm.value);
    swal("¡Genial!", "Tu solicitud PQRS ha sido enviada", "success");
  } else {
    swal("Error", "Por favor, completa todos los campos", "error");
  }
};

const faqs = ref([
  { question: '¿Qué tipos de usuarios pueden registrarse en Thotex?', answer: 'En Thotex, los usuarios pueden registrarse como personas naturales o empresas, asegurando la seguridad y personalización de sus datos.' },
  { question: '¿Cómo puedo gestionar el inventario de mi negocio en Thotex?', answer: 'Puedes registrar productos y el inventario se actualizará automáticamente con cada compra o venta, permitiéndote tener un control en tiempo real de tus productos en stock.' },
  { question: '¿Es posible analizar el rendimiento de mis productos en inventario?', answer: 'Sí, Thotex ofrece un historial detallado del inventario y diversas estadísticas que te permiten analizar el comportamiento de tus productos y tomar decisiones informadas.' },
  { question: '¿Cómo puedo gestionar las relaciones con mis clientes y proveedores?', answer: 'La plataforma permite gestionar clientes, proveedores, y otros terceros, agilizando los procesos comerciales y facilitando el manejo de tus relaciones comerciales.' },
  { question: '¿Qué opciones de personalización están disponibles para mi perfil en Thotex?', answer: 'Puedes personalizar tu perfil con varias opciones de configuración, adaptando la plataforma a las necesidades específicas de tu negocio.' },
  { question: '¿Thotex me ayuda a cumplir con mis obligaciones legales?', answer: 'Sí, puedes registrar eventos importantes en el calendario, incluidos los requeridos por la DIAN, y recibir notificaciones para cumplir con tus obligaciones legales.' },
  { question: '¿Cómo puedo controlar la nómina y el trabajo de mis empleados?', answer: 'Thotex permite gestionar a tus empleados, registrar sus horas trabajadas y optimizar el control de costos asociados a la nómina.' },
  { question: '¿Puedo acceder a estadísticas de mis ventas y compras en Thotex?', answer: 'La plataforma ofrece varias estadísticas relacionadas con tus ventas e ingresos, así como con las compras y egresos, para ayudarte a evaluar el rendimiento financiero de tu negocio.' },
  { question: '¿Qué métodos de pago puedo utilizar para mi suscripción en Thotex?', answer: 'Thotex ofrece flexibilidad en los métodos de pago de la suscripción y te permite controlar tu suscripción, incluyendo opciones para suspender o cancelar.' },
  { question: '¿Thotex es fácil de usar para alguien sin experiencia en contabilidad?', answer: 'Sí, Thotex está diseñada para ser intuitiva y accesible, incluso para usuarios sin experiencia previa en contabilidad, facilitando la gestión financiera y contable de tu negocio.' }
]);

const activeIndex = ref<number | null>(null);

const toggleAnswer = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

</script>

<style scoped lang="scss">
  .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #f7f9fc;
  overflow-y: auto;
  overflow-x: hidden; /* Ocultar el desbordamiento horizontal */

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
  margin-bottom: 27%;
  
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
    font-size: 48px;
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
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  
}

/* General: Para asegurar que no haya desbordamiento horizontal */
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Ocultar el desbordamiento horizontal en todo el documento */
}

.contenido {
  margin-right: 30%;
  text-align: justify;
  font-size: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    font-size: 18px;
  }
}

.card-global {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin: auto;
}

.form-global {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.column {
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
}

.label {
  margin-bottom: 10px;
  font-weight: bold;
}

.input, .textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
}

.textarea {
  resize: vertical;
}

.flex-centered-button {
  display: flex;
  justify-content: center;
}

.button-global {
  background-color: #FCBB01;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darken(#FCBB01, 10%);
  }
}
.posi{
  width: 70%;
  margin-bottom: 50px;
}
.faq-container {
  padding: 20px;
  background-color: #f9f9f9;
  
}

.faq-item {
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

.faq-question {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #e3ecff;
  border-radius: 5px;
  font-weight: bold;
}

.faq-question:hover {
  background-color: #cce0ff;
}

.faq-answer {
  padding: 10px;
  background-color: white;
  border-radius: 5px;
}

.faq-question span {
  font-size: 20px;
  transition: transform 0.3s;
}

.faq-question span.active {
  transform: rotate(45deg);
}
.faq-section{
  padding: 50px;
  padding-top: 0;
  margin-bottom: 100px;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.title {
  animation: fadeIn 2s ease-out; /* Duración y suavidad de la animación */
}


</style>