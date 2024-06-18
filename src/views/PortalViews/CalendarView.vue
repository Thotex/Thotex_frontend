<template>
  <div>
    <h1 class="title">Calendario</h1>
  </div>
  <vue-cal
    ref="vuecal"
    class="vuecal--blue-theme"
    show-week-numbers
    active-view="week"
    :disable-views="['day', 'time']"
    style="height:500px"
    locale="es"
    :events="eventos"
    :selected-date="selectedDate"
    events-on-month-view="large"
    :time="false"
    :editable-events="{ title: true, drag: true, resize: true, delete: true, create: true }"
    :on-event-create="onEventCreate"
    @cell-dblclick="handleCellDoubleClick">
  </vue-cal>

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
</template>

<script setup lang="ts">
    import VueCal from 'vue-cal';
    import 'vue-cal/dist/vuecal.css';

    import { onMounted, ref, Ref } from 'vue';

    import { useCalendarStore } from '@/stores/calendar';

    interface VueCalEvent {
      // Define the structure of your event object here
      title: string;
      class: string;
    }

    interface CalEvent {
      start: string;
      end: string;
      title: string;
      content: string;
      class: string;
      background: boolean;
    }

    interface VueCalInstance {
      createEvent: (event: Event, duration: number, vueCalEvent: VueCalEvent) => void;
      // Add other methods and properties you need to use here
    }

        
    const calendarStore = useCalendarStore();

    const selectedDate = new Date();
    
    const eventos =  ref([
    {
      start: '2024-05-19',
      end: '2024-05-19',
      title: 'Need to go shopping',
      content: '<IconifyIcon class="iconos" icon="material-symbols:supervisor-account-outline-rounded" color="white" width="50px" heigth="50px"></IconifyIcon>',
    },
    {
      start: '2024-05-19',
      end: '2024-05-19',
      title: 'Golf with John',
      content: '<i class="icon material-icons">golf_course</i>',
    },
    {
      start: '2024-05-20',
      end: '2024-05-20',
      title: 'Dad\'s birthday!',
      content: '<i class="icon material-icons">cake</i>',
    }
    ]);

    const vuecal : Ref<null | VueCalInstance> = ref(null);
    
    onMounted(() => {
      calendarStore.devFillerData();
      calendarStore.fetchDataList();
      console.log("Cargadas las stores")
      if (vuecal.value) {
        // You can now access vuecal methods and properties
        console.log(vuecal.value);
      }
    })
    
    const handleCellDoubleClick = ($event : Event) => {
      if (vuecal.value) {
        vuecal.value.createEvent(
        $event,
        120,
        { title: 'New Event', class: 'blue-event' }
        );
      }
    };

    import 'vue-cal/dist/vuecal.css';

    const selectedEvent : Ref<CalEvent | null> = ref(null);
    const showEventCreationDialog = ref(false);
    const eventsCssClasses = ref([{label: 'Azul'}, {label: 'Verde'}, {label: 'Rojo'}]);
    
    const onEventCreate = (event : CalEvent ) => {

      selectedEvent.value = event;
      showEventCreationDialog.value = true;
      // Store deleteEventFunction in a ref or reactive object if needed
    };

    const cancelEventCreation = () => {
      closeCreationDialog();
    };

    const closeCreationDialog = () => {
      if (!showEventCreationDialog.value) {
        return;
      }
      showEventCreationDialog.value = false;
      selectedEvent.value = null;
    };

    const changeEventCssClass = (event : CalEvent | null, cssClass : string) => {
      if (!event) {
        return;
      }
      event.class = cssClass;
    };


</script>

<style scoped>
    .title {
        font-weight: bold;
        text-align: left;
    }

    
</style>
