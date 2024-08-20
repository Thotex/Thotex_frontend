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
            const fetchService = new FetchService<IProduct>('products')
            if (await fetchService.fetchData()) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo obtener la lista de inventario")
                return false
            }
        },
        async fetchSingleData(id: number) {
            const fetchService = new FetchService<IProduct>('products')
            if (await fetchService.fetchSingleData(id)) {
                this.singleData = fetchService.getSingleData()
                return true
            }
            else {
                console.log("Error, no se pudo obtener el item")
                return false
            }
        },
        async createData(data:IProduct) {
            const fetchService = new FetchService<IProduct>('products')
            data.Usr_codigo = 1
            console.log("Creando un producto: " + data)
            alert("Creando un producto: " + data)
            if (await fetchService.insertData(data)) {
                if (await this.fetchDataList()) {
                    return true
                }
                return false
            } else {
                console.log("Error, no se pudo crear el item")
                return false
            }
        },
        async deleteData(data: IProduct) {
            const fetchService = new FetchService<IProduct>('products')
            console.log("Borrando un item: " + data)
            if (await fetchService.deleteData(data.Prod_codigo)) {
                if (await this.fetchDataList()) {
                    return true
                }
                return false
            }
            else {
                console.log("Error, no se pudo borrar el item")
                return false
            }
        },

        async updateData( data: IProduct) {
            console.log("Actualizando un item: " + data)
            console.log("Actualizando un item: " + this.singleData.Prod_codigo)
            const fetchService = new FetchService<IProduct>('products')
            
            if (await fetchService.updateData(this.singleData.Prod_codigo, data)) {
                if (await this.fetchDataList()) {
                    return true
                }
                return false
            }
            else {
                console.log("Error, no se pudo actualizar el item")
                return false
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
                    Mun_nombre: 132,
                    Emp_codigo: 1
                },
                {
                    Prod_codigo: 2,
                    Prod_nombre: "Coca Cola Light",
                    Prod_precio: 1.5,
                    Prod_cantidad: 10,
                    Prod_IVA: 0.16,
                    Mun_nombre: 12,
                    Emp_codigo: 1
                }
            ]
        }
    }
})