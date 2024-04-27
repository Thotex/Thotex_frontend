import { defineStore } from 'pinia'
import { IItem } from '@/interfaces/IInventory'

export const useInventoryStore = defineStore('inventory', {
    state: () => ({
        itemList : [] as IItem[],
    }),
    actions: {
    }
})