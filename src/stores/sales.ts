import { defineStore } from 'pinia'
import { ISale } from '@/interfaces/ISales'
import { Headers } from '@/interfaces/IProject'
import FetchService from '@/services/FetchService'

export const useSalesStore = defineStore('sales', {
    state: () => ({
        headers: [
            {name: 'Código', dbName: 'Fac_codigo'},
            {name: 'Fecha', dbName: 'Fac_fechaGeneracion'},
            {name: 'Subtotal', dbName: 'Fac_subtotal'},
            {name: 'Total', dbName: 'Fac_precioTotal'},
            {name: 'IVA', dbName: 'Fac_IVA'},
            {name: 'Cliente', dbName: 'Cl_codigo'},
        ] as Headers[] ,
        dataList : [] as ISale[],
        singleData : {} as ISale,
        fetchedBefore : false
    }),
    actions: {
        async fetchDataList() {
            const fetchService = new FetchService<ISale>('sales')
            if (await fetchService.fetchData()) {
                this.dataList = fetchService.getData()
            }
            else {
                console.log("Error, no se pudo obtener la lista de ventas")
            }
        },
        async fetchSingleData(id: number) {
            const fetchService = new FetchService<ISale>('sales')
            if (await fetchService.fetchSingleData(id)) {
                this.singleData = fetchService.getSingleData()
            }
            else {
                console.log("Error, no se pudo obtener la venta")
            }
        },
        async deleteData(data: ISale) {
            const fetchService = new FetchService<ISale>('sales')
            if (await fetchService.deleteData(data)) {
                this.dataList = fetchService.getData()
            }
            else {
                console.log("Error, no se pudo borrar la venta")
            }
        },

        async updateData(current: ISale, data: ISale) {
            const fetchService = new FetchService<ISale>('sales')
            if (await fetchService.updateData(current, data)) {
                this.dataList = fetchService.getData()
            }
            else {
                console.log("Error, no se pudo actualizar la venta")
            }
        },
        
        devFillerData() {
            this.dataList = [
                {
                    Fac_codigo: 101,
                    Fac_fechaGeneracion: new Date('2024-05-04T09:00:00'),
                    Fac_subtotal: 80000,
                    Fac_precioTotal: 95200,
                    Fac_IVA: 15200,
                    Cl_codigo: 501
                },
                {
                    Fac_codigo: 102,
                    Fac_fechaGeneracion: new Date('2024-05-04T10:30:00'),
                    Fac_subtotal: 120000,
                    Fac_precioTotal: 142800,
                    Fac_IVA: 22800,
                    Cl_codigo: 502
                },
                {
                    Fac_codigo: 103,
                    Fac_fechaGeneracion: new Date('2024-05-04T11:45:00'),
                    Fac_subtotal: 45000,
                    Fac_precioTotal: 53550,
                    Fac_IVA: 8550,
                    Cl_codigo: 503
                }
            ]
        }
    }
})