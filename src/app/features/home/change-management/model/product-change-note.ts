import { Product } from "../../product-management/model/product"
import { ProductChangeNoteDTO } from "../model/product-change-note-dto"
import { ChangeNote } from "./change-note";

export class ProductChangeNote {

    changeNote: ChangeNote = new ChangeNote();
    product: Product = new Product();
    archivedProduct: string = '';
    inspectionPlanChangeNote: string = '';

    constructor() { }


    static fromDTO(dto: ProductChangeNoteDTO) {
        const productChangeNote = new ProductChangeNote();
        Object.assign(productChangeNote, dto);
        return productChangeNote;
    }
}