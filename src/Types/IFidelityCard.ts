import { IUser } from "./IUser"

export interface IStamp {
    id: number,
    date?: Date
}

export interface IFidelityCard {
    id?: string,
    user?: IUser,
    stamps?: IStamp[]
}