import { QadmaUser } from "../../../../../core/model/qadma-user"

export interface IProduct {
    id: number
    partNumber: number
    productName: string
    revision: number
    dateCreated: Date
    createdBy: QadmaUser
    dateModified: Date
    modifiedBy: QadmaUser
}
