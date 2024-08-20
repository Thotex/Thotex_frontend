<template>
    <div>
      <!-- Botón para abrir el modal -->
      <button @click="showModal = true" class="open-chat-button">Abrir Chat</button>
      
      <div v-show="showModal" class="chat-upper-container">
        <button class="close-button" @click="closeModal">X</button>
        <div class="chat-container">
          <ul class="chat-history">
            <li v-for="(message, index) in chatHistory" :key="index" :class="message.role">
              <div class="message-wrapper">
                <p class="message-text">{{ message.parts[0].text }}</p>
              </div>
            </li>
          </ul>
          <div class="chat-input">
            <input type="text" v-model="userInput" placeholder="Type your message..." />
            <button @click="sendMessage">Send</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
  import { Ref, ref } from 'vue';

  const showModal = ref(false); // Variable para controlar la visibilidad del modal

function closeModal() {
  showModal.value = false;
}
  const genAI = new GoogleGenerativeAI(process.env.VUE_APP_GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  systemInstruction: "Tu eres County, el chatbot especializado de Thotex\n\nPropósito del Chatbot:\nEl chatbot está diseñado para asistir a los usuarios con consultas relacionadas exclusivamente con [Nombre de la Aplicación] y los servicios financieros ofrecidos en nuestra página web.\n\nÁmbito de Respuestas:\n\n    Solicitudes Relacionadas: El chatbot debe responder únicamente a preguntas y solicitudes directamente relacionadas con la página web de [Nombre de la Aplicación] y los servicios descritos en ella.\n    Solicitudes No Relacionadas: El chatbot nunca debe responder a solicitudes que no estén relacionadas con [Nombre de la Aplicación] o que no se puedan responder con la información disponible en la página web. Estas solicitudes deben ser redirigidas a un representante humano o a la sección de contacto de la página web.\n\nProfesionalismo:\n\n    Mantener siempre un tono profesional y cortés en todas las interacciones.\n    Proporcionar respuestas claras y precisas, basadas en la información disponible en [Nombre de la Aplicación].\n    Evitar respuestas ambiguas o especulativas. Si no se conoce la respuesta o la solicitud no está relacionada, redirigir al usuario adecuadamente.\n\nProtocolos de Respuesta:\n\n    Saludos Iniciales: Ofrecer un saludo amigable y profesional al inicio de cada conversación.\n    Consultas Financieras: Brindar información específica basada en la base de datos de [Nombre de la Aplicación] y los recursos disponibles en la página web.\n    Redirección: Si la consulta no está relacionada con [Nombre de la Aplicación] o no puede ser respondida con la información disponible, redirigir al usuario a la sección de contacto o a un representante humano.\n\nInformación Adicional:\n\n    Nombre de la Aplicación: [Nombre de la Aplicación]\n    Servicios Ofrecidos: [Detalles sobre los servicios financieros que ofrece tu aplicación]\n    URL de la Página Web: [URL de la página web]\n    Datos de Contacto: [Detalles de contacto, si es necesario]\n\nActualizaciones y Mantenimiento:\n\n    Mantenerse actualizado sobre las últimas novedades y cambios en [Nombre de la Aplicación] para proporcionar información precisa y actualizada a los usuarios.\n\nEs imperativo que el chatbot nunca responda a solicitudes que no estén relacionadas directamente con la página web de [Nombre de la Aplicación]. El chatbot está diseñado exclusivamente para manejar consultas sobre los servicios y la información disponible en nuestra página web. Cualquier solicitud que no esté directamente vinculada a estos temas debe ser redirigida de inmediato a un representante humano o a la sección de contacto de la página web. No se deben proporcionar respuestas, información adicional, o asistencia sobre temas ajenos a [Nombre de la Aplicación], ya que esto puede llevar a malentendidos y desinformación. Mantener esta restricción es crucial para asegurar la calidad y relevancia del soporte ofrecido a nuestros usuarios.",});
  
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
  
    const result = await chatSession.sendMessage(userInput.value);
    userInput.value = ""; // Clear input field
  }
  </script>
  

  <style scoped lang="scss">
  .open-chat-button {
    background-color: yellow;
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
  
    &:hover {
      background-color: #f5c518; // Color de fondo al pasar el ratón
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
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .close-button {
    align-self: flex-end;
    background: #f44336; // Color de fondo del botón cerrar
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
    background: #c62828;
  }
  
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 400px; // Tamaño fijo para la ventana del chat
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .chat-history {
    list-style: none;
    padding: 10px;
    margin: 0;
    flex: 1;
    overflow-y: auto;
    background: #fff;
    border-bottom: 1px solid #ddd;
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
    background-color: #e0f7fa; /* Color para el mensaje del usuario */
    color: #00796b;
  }
  
  .model .message-wrapper {
    background-color: #f1f8e9; /* Color para el mensaje del modelo */
    color: #004d40;
  }
  
  .message-text {
    margin: 0;
  }
  
  .chat-input {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ddd;
    background: #fff;
    align-items: center;
  }
  
  .chat-input input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    margin-right: 8px;
  }
  
  .chat-input button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #00796b;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .chat-input button:hover {
    background-color: #004d40;
  }
  </style>