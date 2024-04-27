import { defineStore } from 'pinia'
import { IShop } from '@/interfaces/IShopping'

export const useShoppingStore = defineStore('shopping', {
    state: () => ({
        shoppingList : [] as IShop[],
    }),
    actions: {
    }
})