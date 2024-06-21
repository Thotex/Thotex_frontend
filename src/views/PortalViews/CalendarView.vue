<template>
  <div>
    <h1 class="title">Calendario</h1>
  </div>
  <vue-cal
    ref="vuecal"
    class="vuecal--blue-theme"
    show-week-numbers
    active-view="week"
    style="height:500px"
    locale="es"
    :events="eventos"
    :selected-date="selectedDate"
    events-on-month-view="large"
    editable-events
    :time="false"
    @cell-dblclick="handleCellDoubleClick">
  </vue-cal>
<!-- 
  <w-dialog v-if="selectedEvent !== null" v-model="showEventCreationDialog" :persistent="true" width="400">
  <w-card>
    <w-card-title>
      <w-input v-model="selectedEvent.title" placeholder="Título del Evento" />
    </w-card-title>
    <w-card-text>
      <w-textarea v-model="selectedEvent.content" placeholder="Contenido del Evento" />
      <w-flex>
        <w-select
          :items="eventsCssClasses"
          placeholder="Color"
          @change="changeEventCssClass(selectedEvent, $event)"
          :value="selectedEvent.class" />
        <w-switch v-model="selectedEvent.background" label="Evento de fondo" />
      </w-flex>
      <w-flex>
        <w-button class="ma1" color="primary" outline sm @click="cancelEventCreation()">Cancelar</w-button>
        <w-button class="mal" sm @click="closeCreationDialog()">Guardar</w-button>
      </w-flex>
    </w-card-text>
  </w-card>
  </w-dialog>
  <ul>
    <li v-for="(event, index) in eventos" :key="index">
      {{ event.title }}
    </li>
  </ul>
  <button @click="addEvent">Agregar evento</button>
  -->
</template>

<script setup lang="ts">
    import VueCal from 'vue-cal';
    import 'vue-cal/dist/vuecal.css';

    import { onMounted, ref, Ref } from 'vue';
    import { useCookies } from 'vue3-cookies';

    import { watch } from 'vue';

    const {cookies} = useCookies();

    interface VueCalEvent {
      // Define the structure of your event object here
      title: string;
      class: string;
    }

    // interface CalEvent {
    //   start: string;
    //   end: string;
    //   title: string;
    //   content: string;
    //   class: string;
    //   background: boolean;
    // }



    interface VueCalInstance {
      createEvent: (event: VueCalEvent, duration: number, vueCalEvent: VueCalEvent) => void;
      events : Ref<VueCalEvent[]>
      // Add other methods and properties you need to use here
    }

    const selectedDate = new Date();
    
    const eventos =  ref([
      // Define your events here
    ]);

    // const addEvent = () => {
    //   const newEvent = {
    //     start: '2024-05-19',
    //     end: '2024-05-19',
    //     title: 'Evento creado',
    //     content: '<IconifyIcon class="iconos" icon="material-symbols:supervisor-account-outline-rounded" color="white" width="50px" heigth="50px"></IconifyIcon>',
    //   };
    //   eventos.value.push(newEvent);
    // }

    const vuecal : Ref<null | VueCalInstance> = ref(null);
    
    onMounted(() => {
      // const savedEvents = cookies.get('eventos');
      // console.log("savedEvents", savedEvents);
      // console.log(savedEvents);
      // if (savedEvents) {
      //   eventos.value = JSON.parse(savedEvents);
      // }
      
      // if (vuecal.value) {
      //   console.log("Detected vuecal instance");
      //   // Watch the 'events' property of the vue-cal instance
      //   watch(vuecal.value.events, (newEvents) => {
      //     console.log("Detected events change", newEvents);
      //     cookies.set('eventos', JSON.stringify(newEvents));
      //   }, { deep: true });
      // } 
    })
    
    const handleCellDoubleClick = ($event : VueCalEvent) => {
      if (vuecal.value) {
        vuecal.value.createEvent(
        $event,
        120,
        { title: 'New VueCalEvent', class: 'blue-event' }
        );
        console.log("events after adding");
        // const myTemp = vuecal.value.events
        console.log(eventos.value);
      }
    };

    // ONCREATE PARA LA LISTA
    // const onEventCreate = (event : VueCalEvent, deleteEventFunction) => {
    //   console.log(event);
    //   if (vuecal.value) {
    //     console.log(vuecal.value.events);
    //   }
    //   eventos.value.push(event);
    //   return event
    // };


    // import 'vue-cal/dist/vuecal.css';

    // const selectedEvent : Ref<CalEvent | null> = ref(null);
    // const showEventCreationDialog = ref(false);
    // const eventsCssClasses = ref([{label: 'Azul'}, {label: 'Verde'}, {label: 'Rojo'}]);
    
    // const onEventCreate = (event : CalEvent ) => {

    //   selectedEvent.value = event;
    //   showEventCreationDialog.value = true;
    //   // Store deleteEventFunction in a ref or reactive object if needed
    // };

    // const cancelEventCreation = () => {
    //   closeCreationDialog();
    // };

    // const closeCreationDialog = () => {
    //   if (!showEventCreationDialog.value) {
    //     return;
    //   }
    //   showEventCreationDialog.value = false;
    //   selectedEvent.value = null;
    // };

    // const changeEventCssClass = (event : CalEvent | null, cssClass : string) => {
    //   if (!event) {
    //     return;
    //   }
    //   event.class = cssClass;
    // };


</script>

<style scoped>
    .title {
        font-weight: bold;
        text-align: left;
    }

    
</style>
