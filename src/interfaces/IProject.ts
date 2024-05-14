import { IProduct } from '@/interfaces/IInventory'
import { ISale } from './ISales'

export interface Headers {
    name: string
    dbName: string
}

export type Epic = IProduct | ISale
export type EpicName = 'products' | 'sales' | 'none'

/*
export interface IStoreData {
    headers: Array<Headers>
    itemList : Array<Epic>
    singleItem : Epic
    fectedBefore : boolean
}

export interface IStoreActions {
    fetchDataList(): void
    fetchSingleData(id: number): void
    deleteData(data: Epic): void
    updateData(current: Epic, data: Epic): void
}
*/