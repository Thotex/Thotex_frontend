import { IProduct } from '@/interfaces/IInventory'
import { ISale } from './ISales'
import { IShopping } from './IShopping'
import { IEmployee } from './IPayroll'
import { IEvent } from './ICalendar'
import { IThirdParty } from './IThirdParties'

export interface Headers {
    name: string
    dbName: string
}

export type Epic = IProduct | ISale | IEmployee | IShopping | IEvent | IThirdParty
export type EpicName = 'products' | 'sales' | 'employees' | 'shopping' | 'calendar' | 'thirdParties' | 'none'

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