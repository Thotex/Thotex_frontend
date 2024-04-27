import { defineStore } from 'pinia'
import { IEmployee } from '@/interfaces/IPayroll';

export const usePayrollStore = defineStore('payroll', {
    state: () => ({
        employeeList : [] as IEmployee[],
    }),
    actions: {
    }
})