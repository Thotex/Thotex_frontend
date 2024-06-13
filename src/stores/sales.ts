import { defineStore } from 'pinia'
import { ISale } from '@/interfaces/ISales'
import { Headers } from '@/interfaces/IProject'
import FetchService from '@/services/FetchService'

export const useSalesStore = defineStore('sales', {
    state: () => ({
        headers: [
            {name: 'Código', dbName: 'Ven_codigo'},
            {name: 'Fecha', dbName: 'Fac_fechaGeneracion'},
            {name: 'Subtotal', dbName: 'Fac_subtotal'},
            {name: 'Total', dbName: 'Fac_precioTotal'},
            {name: 'IVA', dbName: 'Fac_IVA'},
            {name: 'Cliente', dbName: 'Cl_codigo'},
        ] as Headers[] ,
        dataList : [] as ISale[],
        singleData : {} as ISale,
        cachedData : [] as ISale[],
        fetchedBefore : false
    }),
    actions: {
        async fetchDataList() {
            const fetchService = new FetchService<ISale>('sales')
            if (await fetchService.fetchData()) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo obtener la lista de ventas")
                return false
            }
        },
        async fetchSingleData(id: number) {
            const fetchService = new FetchService<ISale>('sales')
            if (await fetchService.fetchSingleData(id)) {
                this.singleData = fetchService.getSingleData()
                return true
            }
            else {
                console.log("Error, no se pudo obtener la venta")
                return false
            }
        },
        async createData(data:ISale) {
            const fetchService = new FetchService<ISale>('sales')
            if (await fetchService.insertData(data)) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo crear la venta")
                return false
            }
        },
        async deleteData(data: ISale) {
            const fetchService = new FetchService<ISale>('sales')
            if (await fetchService.deleteData(data.Fac_codigo)) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo borrar la venta")
                return false
            }
        },

        async updateData(data: ISale) {
            const fetchService = new FetchService<ISale>('sales')
            if (await fetchService.updateData(this.singleData.Fac_codigo, data)) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo actualizar la venta")
                return false
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