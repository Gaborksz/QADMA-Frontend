import { QadmaUser } from "../../../../../core/model/qadma-user";
import { Product } from "../../product-management/model/product"
import { ChangeNote } from "./change-note"
import { IProductChangeNote } from "./iproduct-change-note";
import { ProductChangeNoteDTO } from "./product-change-note-dto";

export class ProductChangeNote {


    constructor(
        public changeNote: ChangeNote = new ChangeNote(),
        public product: Product = new Product()
    ) { }


    static fromDTO(dto: ProductChangeNoteDTO): ProductChangeNote {

        const { id, changeDescription, dateCreated } = dto;
        const createdBy = QadmaUser.fromDTO(dto.createdBy);
        const changeNote = new ChangeNote(id, changeDescription, dateCreated, createdBy);

        const product = Product.fromDTO(dto.product);

        return new ProductChangeNote(changeNote, product);
    }


    static toDTO(productChangeNote: ProductChangeNote): ProductChangeNoteDTO {

        const product = Product.toDTO(productChangeNote.product);
        const changeNoteDTO = ChangeNote.toDTO(productChangeNote.changeNote);

        const { id, changeDescription, dateCreated, createdBy } = changeNoteDTO;

        return { id, changeDescription, dateCreated, createdBy, product };
    }



    static fromFormValue(formRawValue: IProductChangeNote): ProductChangeNote {

        const changeNote: ChangeNote = ChangeNote.fromFormValue(formRawValue.changeNote)
        const product: Product = Product.fromFormValue(formRawValue.product)

        return new ProductChangeNote(changeNote, product);
    }
}
