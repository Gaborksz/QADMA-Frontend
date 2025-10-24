import { IProduct } from "../../product-management/model/iproduct";
import { IChangeNote } from "./ichange-note";

export interface IProductChangeNote {

    changeNote: IChangeNote
    product: IProduct
}