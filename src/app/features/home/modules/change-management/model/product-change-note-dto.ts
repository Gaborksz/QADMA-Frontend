import { QadmaUserDTO } from "../../../../../core/model/qadma-user-dto";
import { ProductDTO } from "../../product-management/model/product-dto";
import { ChangeNoteDTO } from "./change-note-dto";


export interface ProductChangeNoteDTO {

    id: number
    changeDescription: string
    dateCreated: Date
    createdBy: QadmaUserDTO
    product: ProductDTO
}
