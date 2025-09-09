import { QadmaUserDTO } from "../../../auth/model/qadma-user-dto"

export interface ProductDTO {
    id: number
    partNumber: number
    productName: string
    revision: number
    dateCreated: Date
    createdBy: QadmaUserDTO
    creatorName: string
    dateModified: Date
    modifiedBy: QadmaUserDTO
    modifierName: string  
}