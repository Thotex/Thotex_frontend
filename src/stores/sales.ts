import { defineStore } from 'pinia'
import { ISale } from '@/interfaces/ISales'
import { Headers } from '@/interfaces/IProject'
import FetchService from '@/services/FetchService'

export const useSalesStore = defineStore('sales', {
    state: () => ({
        headers: [
            {name: 'Código', dbName: 'Ven_codigo'},
            {name: 'Fecha', dbName: 'Ven_fechaGeneracion'},
            {name: 'Subtotal', dbName: 'Ven_subtotal'},
            {name: 'Total', dbName: 'Ven_precioTotal'},
            {name: 'IVA', dbName: 'Ven_IVA'},
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
            data.Usr_codigo = 1
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
            if (await fetchService.deleteData(data.Ven_codigo)) {
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
            if (await fetchService.updateData(this.singleData.Ven_codigo, data)) {
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
                    Ven_codigo: 101,
                    Ven_fechaGeneracion: new Date('2024-05-04T09:00:00'),
                    Ven_subtotal: 80000,
                    Ven_precioTotal: 95200,
                    Ven_IVA: 15200,
                    Cl_codigo: 501
                },
                {
                    Ven_codigo: 102,
                    Ven_fechaGeneracion: new Date('2024-05-04T10:30:00'),
                    Ven_subtotal: 120000,
                    Ven_precioTotal: 142800,
                    Ven_IVA: 22800,
                    Cl_codigo: 502
                },
                {
                    Ven_codigo: 103,
                    Ven_fechaGeneracion: new Date('2024-05-04T11:45:00'),
                    Ven_subtotal: 45000,
                    Ven_precioTotal: 53550,
                    Ven_IVA: 8550,
                    Cl_codigo: 503
                }
            ]
        }
    }
})