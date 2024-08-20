import { defineStore } from 'pinia'
import { IShopping } from '@/interfaces/IShopping'
import { Headers } from '@/interfaces/IProject'
import FetchService from '@/services/FetchService'

export const useShoppingStore = defineStore('shopping', {
    state: () => ({
        headers: [
            {name: 'Código', dbName: 'Com_codigo'},
            {name: 'Fecha', dbName: 'Com_fechaGeneracion'},
            {name: 'Subtotal', dbName: 'Com_subtotal'},
            {name: 'Total', dbName: 'Com_precioTotal'},
            {name: 'IVA', dbName: 'Com_IVA'},
            {name: 'Proveedor', dbName: 'Cl_codigo'},// Cambiar segun la base de datos
        ] as Headers[] ,
        dataList : [] as IShopping[],
        singleData : {} as IShopping,
        cachedData : [] as IShopping[],
        fetchedBefore : false
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
            const fetchService = new FetchService<IShopping>('shopping')
            if (await fetchService.fetchData()) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo obtener la lista de compras")
                return false
            }
        },
        async fetchSingleData(id: number) {
            const fetchService = new FetchService<IShopping>('shopping')
            if (await fetchService.fetchSingleData(id)) {
                this.singleData = fetchService.getSingleData()
                return true
            }
            else {
                console.log("Error, no se pudo obtener la venta")
                return false
            }
        },
        async deleteData(data: IShopping) {
            const fetchService = new FetchService<IShopping>('shopping')
            data.Usr_codigo = 1
            if (await fetchService.deleteData(data.Com_codigo)) {
                if (await this.fetchDataList()) {
                    return true
                }
                return false
            }
            else {
                console.log("Error, no se pudo borrar la venta")
                return false
            }
        },

        async updateData( data: IShopping) {
            const fetchService = new FetchService<IShopping>('shopping')
            if (await fetchService.updateData(this.singleData.Com_codigo, data)) {
                if (await this.fetchDataList()) {
                    return true
                }
                return false
            } else {
                console.log("Error, no se pudo actualizar la venta")
                return false
            }
        },
        async createData(data:IShopping) {
            const fetchService = new FetchService<IShopping>('shopping')
            if (await fetchService.insertData(data)) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo crear la venta")
                return false
            }
        },
        
        devFillerData() {
            this.dataList = [
                {
                    Com_codigo: 101,
                    Com_fechaGeneracion: new Date('2024-05-04T09:00:00'),
                    Com_subtotal: 80000,
                    Com_precioTotal: 95200,
                    Com_IVA: 15200,
                    Cl_codigo: 501
                },
                {
                    Com_codigo: 102,
                    Com_fechaGeneracion: new Date('2024-05-04T10:30:00'),
                    Com_subtotal: 120000,
                    Com_precioTotal: 142800,
                    Com_IVA: 22800,
                    Cl_codigo: 502
                },
                {
                    Com_codigo: 103,
                    Com_fechaGeneracion: new Date('2024-05-04T11:45:00'),
                    Com_subtotal: 45000,
                    Com_precioTotal: 5300,
                    Com_IVA: 8550,
                    Cl_codigo: 503
                }
            ]
        }
    }
})