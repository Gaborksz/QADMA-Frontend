import { QadmaUserDTO } from "../../../../../core/model/qadma-user-dto"
import { ProductDTO } from "../../product-management/model/product-dto"
import { InspectionTemplateDTO } from "./inspection-template-dto"

export interface InspectionTemplateChangeNoteDTO {

    id: number
    changeDescription: string
    dateCreated: Date | null
    createdBy: QadmaUserDTO | null
    inspectionTemplate: InspectionTemplateDTO
    productsToUpdate: ProductDTO[]
}