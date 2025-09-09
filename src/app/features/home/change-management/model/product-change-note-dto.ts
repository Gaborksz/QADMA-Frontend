import { Product } from "../../product-management/model/product"
import { ChangeNoteDTO } from "./change-note-dto"


export interface ProductChangeNoteDTO extends ChangeNoteDTO{

        product: Product
        archivedProduct : string
        inspectionPlanChangeNote: string
}

