import { defineStore } from 'pinia'
import { IThirdParty } from '@/interfaces/IThirdParties'
import { Headers } from '@/interfaces/IProject'
import FetchService from '@/services/FetchService'

export const useThirdPartiesStore = defineStore('thirdParties', {
    state: () => ({
        headers: [
            {name: 'Código del tercero', dbName: 'id'}, // TODO: Cambiar segun la base de datos
            {name: 'Nombre del tercero', dbName: 'name'},// Cambiar segun la base de datos
        ] as Headers[] ,
        dataList : [] as IThirdParty[],
        singleData : {} as IThirdParty,
        cachedData : [] as IThirdParty[],
        fetchedBefore : false
    }),
    actions: {
        async fetchDataList() {
            const fetchService = new FetchService<IThirdParty>('thirdParties')
            if (await fetchService.fetchData()) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo obtener la lista de terceros")
                return false
            }
        },
        async fetchSingleData(id: number) {
            const fetchService = new FetchService<IThirdParty>('thirdParties')
            if (await fetchService.fetchSingleData(id)) {
                this.singleData = fetchService.getSingleData()
                return true
            }
            else {
                console.log("Error, no se pudo obtener el tercero")
                return false
            }
        },
        async deleteData(data: IThirdParty) {
            const fetchService = new FetchService<IThirdParty>('thirdParties')
            if (await fetchService.deleteData(data.Cl_codigo)) {
                if (await this.fetchDataList()) {
                    return true
                }
                return false
            }
            else {
                console.log("Error, no se pudo borrar el tercero")
                return false
            }
        },

        async updateData( data: IThirdParty) {
            const fetchService = new FetchService<IThirdParty>('thirdParties')
            if (await fetchService.updateData(this.singleData.Cl_codigo, data)) {
                if (await this.fetchDataList()) {
                    return true
                }
                return false
            } else {
                console.log("Error, no se pudo actualizar el tercero")
                return false
            }
        },
        async createData(data:IThirdParty) {
            const fetchService = new FetchService<IThirdParty>('thirdParties')
            data.Usr_codigo = 1
            if (await fetchService.insertData(data)) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo crear el tercero")
                return false
            }
        },
        
        devFillerData() {
            this.dataList = [
                { Cl_codigo: 1, Cl_nombre: 'Tercero 1' },
                { Cl_codigo: 2, Cl_nombre: 'Tercero 2' },
                { Cl_codigo: 3, Cl_nombre: 'Tercero 3' },
                { Cl_codigo: 4, Cl_nombre: 'Tercero 4' },
                { Cl_codigo: 5, Cl_nombre: 'Tercero 5' },
                // Agrega más datos según sea necesario
            ];
        }
    }
})