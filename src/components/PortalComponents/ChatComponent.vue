<template>
    <div>
      <!-- Botón para abrir el modal -->
      <button @click="toggleModal" class="open-chat-button"><IconifyIcon icon="mdi:chat" /></button>
      
      <div v-show="showModal" class="chat-upper-container">
        <div class="chat-header">
            <button class="close-button" @click="toggleModal">X</button>
        </div>
        <div class="chat-container">
          <ul class="chat-history">
            <li v-for="(message, index) in chatHistory" :key="index" :class="message.role">
              <div class="message-wrapper">
                <p class="message-text">{{ message.parts[0].text }}</p>
              </div>
            </li>
          </ul>
          <div class="chat-input">
            <input type="text" v-model="userInput" placeholder="Chatea conmigo!..." />
            <button @click="sendMessage">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
  import { Ref, ref } from 'vue';

  const showModal = ref(false); // Variable para controlar la visibilidad del modal

function toggleModal() {
  showModal.value = !showModal.value;
}
  const genAI = new GoogleGenerativeAI(process.env.VUE_APP_GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  systemInstruction: "Objective and Scope:\n\n    El propósito principal de County es proporcionar asistencia y responder a preguntas relacionadas con la página web de Thotex. County debe ofrecer información precisa y útil sobre los productos, servicios y funcionalidades disponibles en thotex.online y mantener un tono profesional en todas las interacciones.\n\nInteraction Guidelines:\n\n    Respuestas Alineadas: County debe asegurarse de que todas las respuestas estén estrictamente relacionadas con la página web de Thotex. Cualquier solicitud o pregunta que no esté directamente vinculada con la página web debe ser desviada o redirigida adecuadamente, sin proporcionar una respuesta.\n    No Aceptar Solicitudes Externas: County no debe responder a solicitudes que no estén relacionadas con el contenido o los servicios de la página web. Las preguntas sobre temas externos o no relacionados deben ser rechazadas educadamente y, si es posible, redirigidas a un recurso adecuado o al equipo de soporte.\n\nProfessionalism and Tone:\n\n    Tono Profesional: County debe mantener un tono profesional en todas las interacciones. Las respuestas deben ser claras, corteses y respetuosas. Evitar el uso de jerga innecesaria o informalidades que puedan afectar la percepción de profesionalismo.\n    Precisión y Claridad: La información proporcionada debe ser precisa y clara. Evitar respuestas vagas o ambiguas y asegurar que la información sea coherente con la que se encuentra en thotex.online.\n\nHandling Specific Scenarios:\n\n    Desviación de Temas No Relacionados: Si un usuario realiza una solicitud o pregunta que no está relacionada con la página web, la respuesta debe ser algo como: \"Lo siento, pero no puedo ayudar con esa solicitud ya que no está relacionada con nuestra página web. Por favor, visita thotex.online para obtener más información.\"\n    Redirección: Si es posible, proporcionar un enlace o redirigir al usuario a la sección adecuada de la página web para que puedan encontrar la información que buscan.\n\nUpdate and Maintenance:\n\n    Actualización de Información: La información que County proporciona debe ser revisada y actualizada regularmente para asegurar su precisión. Cualquier cambio en Thotex o en thotex.online debe ser reflejado en las respuestas del chatbot.\n\nUser Privacy and Security:\n\n    Protección de Datos: County debe cumplir con todas las políticas de privacidad y seguridad de Thotex. No recopilar ni almacenar información personal del usuario sin su consentimiento explícito.\n\nAqui unos ejemplos de preguntas y respuestas:\n\n### 1. **Introducción General**\n\n\"Hola, soy el asistente virtual de Thotex. Estoy aquí para ayudarte con cualquier consulta sobre nuestra plataforma de gestión contable y financiera. Si necesitas información sobre precios, funcionalidades, o cómo usar alguna herramienta específica, solo pregúntame. Por favor, mantén el lenguaje respetuoso y relacionado con Thotex.\"\n\n### 2. **Precios y Suscripciones**\n\n\"¡Hola! Si tienes preguntas sobre los precios y opciones de suscripción de Thotex, estás en el lugar correcto. Ofrecemos suscripciones mensuales y anuales con descuentos. Dime qué información necesitas sobre nuestras tarifas o cómo cambiar tu suscripción.\"\n\n### 3. **Funcionalidades de la Plataforma**\n\n\"¡Hola! Thotex tiene muchas funcionalidades para ayudarte a gestionar tu negocio. Desde la gestión de inventarios hasta el análisis de ventas y la nómina. ¿Necesitas ayuda con alguna funcionalidad específica? Dime qué estás buscando y estaré encantado de asistirte.\"\n\n### 4. **Gestión de Inventario**\n\n\"¡Hola! Puedo ayudarte con cualquier pregunta relacionada con la gestión de inventario en Thotex. Puedes registrar productos, ver gráficos de ventas y compras, y más. ¿Cómo puedo asistirte con tu inventario?\"\n\n### 5. **Registro y Acceso**\n\n\"Hola, soy el asistente de Thotex. Si necesitas ayuda con el registro, la activación de tu cuenta, o el inicio de sesión, estás en el lugar adecuado. ¿Qué necesitas saber sobre cómo acceder a tu cuenta o resolver problemas de inicio de sesión?\"\n\n### 6. **Soporte Técnico**\n\n\"¡Hola! Si estás experimentando problemas técnicos con Thotex, estoy aquí para ayudarte. Por favor, describe el problema que estás enfrentando, y haré todo lo posible para asistirte o dirigir tu consulta al soporte adecuado.\"\n\n### 7. **Gestión de Usuario**\n\n\"Hola, ¿tienes preguntas sobre la gestión de usuarios en Thotex? Puedo ayudarte con temas como la configuración de perfiles, la seguridad de la cuenta y más. ¿En qué puedo ayudarte hoy?\"\n\n### 8. **Historial y Estadísticas**\n\n\"¡Hola! Thotex te permite ver históricos de ventas y compras, así como estadísticas detalladas. Si necesitas asistencia para generar informes o analizar datos, dímelo y te ayudaré con gusto.\"\n\n### 9. **Notificaciones y Recordatorios**\n\n\"Hola, ¿necesitas saber más sobre cómo configurar notificaciones y recordatorios en Thotex? Puedo ayudarte a configurar alertas para eventos importantes y plazos de cumplimiento. ¿En qué necesitas ayuda?\"\n\n### 10. **Términos y Políticas**\n\n\"¡Hola! Si tienes preguntas sobre los términos de servicio, políticas de privacidad, o cualquier otra política relacionada con Thotex, aquí estoy para ayudarte. ¿Qué te gustaría saber sobre nuestras políticas?\"\n\n---\n\nEstos prompts cubren una variedad de áreas dentro de la plataforma Thotex y están diseñados para dirigir a los usuarios hacia la información que necesitan, manteniendo el enfoque en la plataforma y un tono respetuoso.",  })  
  const generationConfig = {
    temperature: 0.5,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  interface Message {
      role: "user" | "model";
      parts: {text: string}[]
  }
  
  const safetySettings = [
  {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
        },
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
        },
        /*
        {
            category: HarmCategory.HARM_CATEGORY_UNSPECIFIED,
            threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
        }
        */
  ];
  
  let chatHistory : Ref<Message[]> = ref([

  ]);
  let userInput = ref("");
  
  async function sendMessage() {
    if (!userInput.value) return; // Prevent sending empty messages
  
    // chatHistory.push({ text: userInput, is_user: true }); // Add user message to history
  
    const chatSession = model.startChat({
      generationConfig,
      safetySettings,
      history: chatHistory.value,
    });
  
    await chatSession.sendMessage(userInput.value);
    userInput.value = ""; // Clear input field
  }
  </script>
  

  <style scoped lang="scss">
  .open-chat-button {
    background-color: #ffeb3b; // Amarillo para el botón
    border: none;
    border-radius: 50%;
    width: 60px; // Tamaño del botón
    height: 60px; // Tamaño del botón
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 20px; // Espacio desde el borde inferior
    right: 20px; // Espacio desde el borde derecho
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 24px; // Tamaño del ícono o texto dentro del botón
    z-index: 9999; // Asegura que el botón se muestre sobre otros elementos
  
    &:hover {
      background-color: #fdd835; // Amarillo más oscuro al pasar el ratón
    }
  }
  
  .chat-upper-container {
    position: fixed;
    bottom: 20px; // Espacio desde el borde inferior
    right: 90px; // Espacio desde el borde derecho
    max-width: 100%; // Asegurarse de que no se desborde
    max-height: 80vh; // Asegurarse de que no se desborde
    overflow: auto;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: $custom-blue; // Azul oscuro para el contenedor del chat
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 9999; // Asegura que el chat se muestre sobre otros elementos
  }
  
  .close-button {
    align-self: flex-end;
    background: #ff5722; // Naranja para el botón cerrar
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    margin: 10px;
  }
  
  .close-button:hover {
    background: #e64a19; // Naranja más oscuro al pasar el ratón
  }
  
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 400px; // Tamaño fijo para la ventana del chat
    border: 1px solid $custom-blue; // Azul oscuro para el borde
    border-radius: 8px;
    background-color: $custom-blue; // Azul oscuro para el fondo
  }
  
  .chat-history {
    list-style: none;
    padding: 10px;
    margin: 0;
    flex: 1;
    overflow-y: auto;
    background: #fff; // Azul oscuro para el historial de chat
    border-bottom: 1px solid $custom-blue; // Azul oscuro para el borde inferior
  }
  
  .chat-history li {
    margin-bottom: 10px;
  }
  
  .user {
    display: flex;
    justify-content: flex-end;
  }
  
  .model {
    display: flex;
    justify-content: flex-start;
  }
  
  .message-wrapper {
    padding: 8px 12px;
    border-radius: 12px;
    max-width: 80%;
  }
  
  .user .message-wrapper {
    background-color: #ffd54f; /* Amarillo para el mensaje del usuario */
    color: $custom-blue;
  }
  
  .model .message-wrapper {
    background-color: #81d4fa; /* Azul claro para el mensaje del modelo */
    color: $custom-blue;
  }
  
  .message-text {
    margin: 0;
  }
  
  .chat-input {
    position: sticky;
    bottom: 0;
    display: flex;
    padding: 10px;
    border-top: 1px solid $custom-blue; // Azul oscuro para el borde superior
    background: $custom-blue; // Azul oscuro para el fondo
    align-items: center;
  }
  
  .chat-header {
    display: flex;
    position: sticky;
    top: 0;
    background-color: $custom-blue; // Azul oscuro para el fondo
  }
  
  .chat-input input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ffd54f; // Amarillo para el borde
    border-radius: 4px;
    font-size: 16px;
    margin-right: 8px;
    color: $custom-blue;
    background: #fff;
  }
  
  .chat-input button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #ffeb3b; // Amarillo para el botón de enviar
    color: $custom-blue;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .chat-input button:hover {
    background-color: #fdd835; // Amarillo más oscuro al pasar el ratón
  }
  </style>
  