import { defineStore } from 'pinia'
import { IEmployee, IEmployeeClean, cleanEmployee, formEmployee} from '@/interfaces/IPayroll'
import { Headers } from '@/interfaces/IProject'
import FetchService from '@/services/FetchService'

export const usePayrollStore = defineStore('inventory', {
    state: () => ({
        headers: [
            { name: 'Código', dbName: 'Emp_codigo' },
            { name: 'Número de ID', dbName: 'Per_id' },
            { name: 'Tipo de ID', dbName: 'Per_tipoId' },
            { name: 'Nombres', dbName: 'Per_nombre' },
            { name: 'Apellidos', dbName: 'Per_apellido' },
            { name: 'Correo', dbName: 'Per_correo' },
            { name: 'Teléfono', dbName: 'Per_telefono' },
            { name: 'Cargo', dbName: 'Emp_cargo' },
            { name: 'Salario', dbName: 'Emp_salario' },
            { name: 'Fecha de Ingreso', dbName: 'Emp_fechaingreso' },
        ] as Array<Headers>,
        dataList : [] as Array<IEmployeeClean>,
        singleData : {} as IEmployeeClean,
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
            data.Usr_codigo = 1
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
        devFillerData() {
            this.dataList = [
                {
                    Emp_codigo: 1,
                    Per_codigo: 101,
                    Per_tipoId: 'CC',
                    Per_id: 123456789,
                    Per_nombre: 'Juan',
                    Per_apellido: 'Pérez',
                    Per_correo: 'juan.perez@example.com',
                    Per_telefono: 3001234567,
                    Emp_cargo: "Gerente",
                    Emp_salario: 5000000,
                    Emp_fechaingreso: new Date('2020-01-01')
                },
                {
                    Emp_codigo: 2,
                    Per_codigo: 102,
                    Per_tipoId: 'CC',
                    Per_id: 987654321,
                    Per_nombre: 'María',
                    Per_apellido: 'Rodríguez',
                    Per_correo: 'maria.rodriguez@example.com',
                    Per_telefono: 3109876543,
                    Emp_cargo: "Vendedor",
                    Emp_salario: 6000000,
                    Emp_fechaingreso: new Date('2021-02-01')
                },
            ]
        }
    }
})