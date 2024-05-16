import { defineStore } from 'pinia'
import { IProduct } from '@/interfaces/IInventory'
import { Headers } from '@/interfaces/IProject'
import FetchService from '@/services/FetchService'

export const useInventoryStore = defineStore('inventory', {
    state: () => ({
        headers: [
            { name: 'Código', dbName: 'Prod_codigo' },
            { name: 'Nombre', dbName: 'Prod_nombre' },
            { name: 'Precio', dbName: 'Prod_precio' },
            { name: 'Existencias', dbName: 'Prod_cantidad' },
            { name: 'IVA', dbName: 'Prod_IVA' },
            { name: 'Municipio', dbName: 'Mun_nombre' },
            { name: 'Empresa', dbName: 'Emp_codigo' },
        ] as Array<Headers>,
        dataList : [] as Array<IProduct>,
        singleData : {} as IProduct,
        fectedBefore : false
    }),
    actions: {
        async fetchDataList() {
            const fetchService = new FetchService<IProduct>('products')
            if (await fetchService.fetchData()) {
                this.dataList = fetchService.getData()
            }
            else {
                console.log("Error, no se pudo obtener la lista de inventario")
            }
        },
        async fetchSingleData(id: number) {
            const fetchService = new FetchService<IProduct>('products')
            if (await fetchService.fetchSingleData(id)) {
                this.singleData = fetchService.getSingleData()
            }
            else {
                console.log("Error, no se pudo obtener el item")
            }
        },
        async createData(data:IProduct) {
            const fetchService = new FetchService<IProduct>('products')
            if (await fetchService.insertData(data)) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo crear el item")
                return false
            }
        },
        async deleteData(data: IProduct) {
            const fetchService = new FetchService<IProduct>('products')
            if (await fetchService.deleteData(data)) {
                this.dataList = fetchService.getData()
            }
            else {
                console.log("Error, no se pudo borrar el item")
            }
        },

        async updateData( data: IProduct) {
            const fetchService = new FetchService<IProduct>('products')
            if (await fetchService.updateData(this.singleData, data)) {
                this.dataList = fetchService.getData()
            }
            else {
                console.log("Error, no se pudo actualizar el item")
            }
        },

        
        /**
         * Fills the dataList with dummy data for development purposes.
         */
        devFillerData() {
            this.dataList = [
                {
                    Prod_codigo: 1,
                    Prod_nombre: "Coca Cola",
                    Prod_precio: 1.5,
                    Prod_cantidad: 10,
                    Prod_IVA: 0.16,
                    Mun_nombre: "Santa Cruz",
                    Emp_codigo: 1
                },
                {
                    Prod_codigo: 2,
                    Prod_nombre: "Coca Cola Light",
                    Prod_precio: 1.5,
                    Prod_cantidad: 10,
                    Prod_IVA: 0.16,
                    Mun_nombre: "Santa Cruz",
                    Emp_codigo: 1
                }
            ]
        }
    }
})