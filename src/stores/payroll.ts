import { defineStore } from 'pinia'
import { IEmployee, IEmployeeClean, cleanEmployee, formEmployee} from '@/interfaces/IPayroll'
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
        dataList : [] as Array<IEmployeeClean>,
        singleData : {} as IEmployeeClean,
        fectedBefore : false
    }),
    actions: {
        async fetchDataList() {
            const fetchService = new FetchService<IEmployee>('employees')
            if (await fetchService.fetchData()) {
                const dataRaw = fetchService.getData()
                this.dataList = dataRaw.map(cleanEmployee)
                return true
            }
            else {
                console.log("Error, no se pudo obtener la lista de empleados")
                return false
            }
        },
        async fetchSingleData(id: number) {
            const fetchService = new FetchService<IEmployee>('employees')
            if (await fetchService.fetchSingleData(id)) {
                const dataRaw = fetchService.getSingleData()
                this.singleData = cleanEmployee(dataRaw)
                return true
            }
            else {
                console.log("Error, no se pudo obtener el empleado")
                return false
            }
        },
        async createData(dataRaw:IEmployeeClean) {
            const fetchService = new FetchService<IEmployee>('employees')
            const data = formEmployee(dataRaw)
            if (await fetchService.insertData(data)) {
                if (await this.fetchDataList()) {
                    return true
                }
                return false
            }
            else {
                console.log("Error, no se pudo crear el empleado")
                return false
            }
        },
        async deleteData(dataRaw : IEmployeeClean) {
            const data = formEmployee(dataRaw)
            const fetchService = new FetchService<IEmployee>('employees')
            if (await fetchService.deleteData(data.Emp_codigo)) {
                if (await this.fetchDataList()) {
                    return true
                }
                return false
            }
            else {
                console.log("Error, no se pudo borrar el empleado")
                return false
            }
        },

        async updateData( dataRaw: IEmployeeClean) {
            const fetchService = new FetchService<IEmployee>('employees')
            const data = formEmployee(dataRaw)
            if (await fetchService.updateData(this.singleData.Emp_codigo, data)) {
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
    }
})