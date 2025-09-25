import { QadmaUserDTO } from "../../../../../core/model/qadma-user-dto"


export interface ProductDTO {
    id: number
    partNumber: number
    productName: string
    revision: number
    dateCreated: Date
    createdBy: QadmaUserDTO
    dateModified: Date
    modifiedBy: QadmaUserDTO
}