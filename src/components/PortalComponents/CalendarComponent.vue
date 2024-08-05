<template>
    <div>
        <FullCalendar :options="calendarOptions" />
    </div>
    <div>
        Lista de eventos
        <ul>
          <li v-for='event in eventsList' :key='event.id'>
            <b>{{ event.startStr }}</b>
            <i>{{ event.title }}</i>
          </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import FullCalendar from '@fullcalendar/vue3';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import interactionPlugin from '@fullcalendar/interaction';
    import timeGridPlugin from '@fullcalendar/timegrid';
    import { CalendarOptions, EventApi, EventClickArg, DateSelectArg } from '@fullcalendar/core';
    import swal from 'sweetalert';
    import esLocale from '@fullcalendar/core/locales/es';
    import { ref, Ref } from 'vue';

    // Lista de eventos, por si se requiere
    /*
    const INITIAL_EVENTS = [
       
    ]
    */

    let eventsList : Ref<EventApi[]> = ref([]) 

    const handleEvents = (events : EventApi[]) => {
        eventsList.value = events
    }

    // Este se puede meter dentro del handle select
    const createEvent = (selectInfo : DateSelectArg, title : string) => {
        const calendarApi = selectInfo.view.calendar
        calendarApi.unselect()

        if (title) {
            calendarApi.addEvent({
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
                title: title
            })
        }
        
    }

    const handleDateSelect = (selectInfo : DateSelectArg) => {
        swal({
            title: 'Creación de evento',
            text: 'Fecha de inicio: ' + selectInfo.startStr + '\nFecha de finalización:       ' + selectInfo.endStr,
            content: {
                element: "input",
                attributes: {
                    placeholder: "Ingrese el nombre del evento",
                    type: "text",
                },
            },
            buttons: {
                cancel: {
                    visible: true,
                    text: "Cancelar",
                    value: null,
                },
                confirm: {
                    text: "Confirmar",
                    value: true,
                },
            }
        }
        ).then((value) => {
            if (value) {
                console.log(value)
                createEvent(selectInfo, value)
            } else {
                console.log("Cancelado")
            }
        })
    }

    const handleEventClick = (clickInfo : EventClickArg) => {
        console.log(clickInfo)
        swal({
            title: 'Edición de evento',
            text: 'Fecha de inicio: ' + clickInfo.event.startStr + '\nFecha de finalización' + clickInfo.event.endStr,
            closeOnClickOutside: false,
            content: {
                element: "input",
                attributes: {
                    placeholder: "Ingrese el nombre del evento",
                    type: "text",
                    value: clickInfo.event.title
                },
            },
            buttons: {
                cancel: {
                    visible: true,
                    text: "Cancelar",
                    value: null,
                },
                delete: {
                    text: "Eliminar",
                    value: false,
                },
                confirm: {
                    text: "Confirmar",
                    value: true,
                },
            }
        }).then((value : false | null | string) => {
            switch (value) {
                case null:
                    // Este caso es el de cancelar
                    console.log("Cancelado")
                    break
                case false:
                    // Este caso es el de borrar
                    /*
                        Importante: COMO HACERLO
                    */
                    clickInfo.event.remove()
                    //console.log("Borrado")
                    break
                default:
                    // Este es el caso de editar, mirar que sea mayor que 0
                    if (value.length > 0) {
                        /*
                            IMPORTANTE: COMO HACERLO
                        */
                        clickInfo.event.setProp('title', value)
                        break
                    }
                    // Close swal and open a warning
                    swal("Error", "El nombre no puede ser vacío", "error")
                    break
            }
        })
    }

    const calendarOptions : CalendarOptions = {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        // initialEvents: INITIAL_EVENTS, // Puede ser util para cargar por primera vez
        // Properties
        locale: esLocale,
        selectable: true,
        selectMirror: true, // Se puede seleccionar el mismo evento dos veces
        dayMaxEvents: true, // Eventos de maximo dia
        weekends: true,
        editable: true,
        // Methods
        select: handleDateSelect,
        eventClick: handleEventClick,
        // Lista de eventos tal vez no necesaria
        eventsSet: handleEvents
    }


</script>

<style scoped>

</style>