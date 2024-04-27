import { defineStore } from 'pinia'
import { ISale } from '@/interfaces/ISales'

export const useSalesStore = defineStore('sales', {
    state: () => ({
        salesList : [] as ISale[],
    }),
    actions: {
    }
})