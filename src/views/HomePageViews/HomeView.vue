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
          <input type="button" class="login-button" value="Comenzar ahora">
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
  { question: '¿Cuál es la utilidad de un software contable para mi negocio?', answer: 'Un software contable, como Thotex, te ayuda a gestionar y automatizar procesos financieros y contables de tu negocio, como el control de inventarios, la gestión de nómina, y el seguimiento de ventas y compras. Esto te permite ahorrar tiempo, reducir errores, y tener una visión clara de la situación financiera de tu negocio, lo que facilita la toma de decisiones informadas.' },
  { question: '¿Cómo puede Thotex ayudarme a gestionar mi inventario de manera más eficiente?', answer: 'Thotex facilita la gestión de inventario permitiéndote registrar productos, actualizar automáticamente el stock con cada compra o venta, y visualizar gráficos de barras que muestran el total de ventas y compras realizadas. Estas herramientas te permiten tener un control más preciso del inventario, identificar tendencias, y tomar decisiones basadas en datos para optimizar la gestión de tus productos.' },
  { question: '¿Cuándo tienes dudas a dónde te puedes comunicar?', answer: 'Tenemos diversos  canales de comunicacón  disponibles para que puedas solicitar información o soporte. Pudes elegir entre nuestras redes sociales, nuestro chat bot o enviarnos un mensaje en la seccion de contactenos del home. Estamos listos para atenderte en el canal que prefieras' },
  { question: '¿Cómo se realiza el pago de la suscripción de Thotex?', answer: 'El pago de la suscripción se realiza a través de la sección de suscripción en la plataforma, que se encuentra en el perfil. Puedes elegir entre opciones de pago mensual o anual, y proporcionar la información de tu método de pago preferido.' },
  { question: '¿Cómo configuro notificaciones para eventos importantes en Thotex?', answer: 'Puedes configurar notificaciones en la sección de calendario. Aquí puedes agregar eventos importantes y establecer recordatorios para recibir notificaciones por correo electrónico o en la plataforma.' },
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
  animation: fadeIn 2s ease-out; 
}
.login-button{
  margin-top: 10px;
  text-transform: uppercase;
  outline: 0;
  border: 0;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  background-color: $custom-blue;
  color: white;
  &:hover {
        background-color: #94AAD6;
        cursor: pointer;
    }
}

</style>