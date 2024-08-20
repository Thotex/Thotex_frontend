import { defineStore } from 'pinia'
import { IEvent } from '@/interfaces/ICalendar'
import FetchService from '@/services/FetchService'

export const useCalendarStore = defineStore('calendar', {
    state: () => ({
        dataList : [] as IEvent[],
        singleData : {} as IEvent,
        cachedData : [] as IEvent[],
        fetchedBefore : false,
    }),
    getters: {
        showTable: (state) => {
           if (state.dataList.length > 0) {
               return true
           } 
           else {
               return false
           }
        }
    },
    actions: {
        async fetchDataList() {
            const fetchService = new FetchService<IEvent>('calendar')
            if (await fetchService.fetchData()) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo obtener la lista de eventos")
                return false
            }
        },
        async fetchSingleData(id: number) {
            const fetchService = new FetchService<IEvent>('calendar')
            if (await fetchService.fetchSingleData(id)) {
                this.singleData = fetchService.getSingleData()
                return true
            }
            else {
                console.log("Error, no se pudo obtener el evento")
                return false
            }
        },
        async createData(data:IEvent) {
            const fetchService = new FetchService<IEvent>('calendar')
            if (await fetchService.insertData(data)) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo crear el evento")
                return false
            }
        },
        async deleteData(data: IEvent) {
            const fetchService = new FetchService<IEvent>('calendar')
            if (await fetchService.deleteData(data.id)) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo borrar el evento")
                return false
            }
        },

        async updateData(data: IEvent) {
            const fetchService = new FetchService<IEvent>('calendar')
            if (await fetchService.updateData(this.singleData.id, data)) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo actualizar el evento")
                return false
            }
        },
        
        devFillerData() {
            this.dataList = [
                {
                  id: 1,
                  start: new Date(2024, 5, 20, 9, 0, 0),
                  end: new Date(2024, 5, 20, 10, 0, 0),
                  title: 'Reunión de equipo',
                  content: 'Reunión semanal para discutir el progreso del proyecto.',
                  color: '#2196F3'
                },
                {
                  id: 2,
                  start: new Date(2024, 5, 21, 14, 0, 0),
                  end: new Date(2024, 5, 21, 15, 0, 0),
                  title: 'Llamada con el cliente',
                  content: 'Llamada para discutir los requisitos del cliente.',
                  color: '#4CAF50'
                },
                {
                  id: 3,
                  start: new Date(2024, 5, 22, 11, 30, 0),
                  end: new Date(2024, 5, 22, 12, 30, 0),
                  title: 'Revisión de código',
                  content: 'Revisión de código para el módulo de autenticación.',
                  color: '#FF9800'
                }
            ];
        }
    }
})