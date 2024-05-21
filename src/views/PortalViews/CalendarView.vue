<template>
    <div>
        <h1 class="title">Calendario</h1>
    </div>
    <vue-cal style="height:400px" locale="es" :events="eventos" />

</template>

<script setup lang="ts">
    import VueCal from 'vue-cal';
    import 'vue-cal/dist/vuecal.css';

    import { onMounted } from 'vue';

    import { useCalendarStore } from '@/stores/calendar';
    const calendarStore = useCalendarStore();
    
    const eventos =  [
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
  ];

    onMounted(() => {
        calendarStore.devFillerData();
        calendarStore.fetchDataList();
        console.log("Cargadas las stores")
    })
    /*
        time false es algo necesario
        desactivar vistas de dia
    */  
</script>

<style scoped>
    .title {
        font-weight: bold;
        text-align: left;
    }
</style>
