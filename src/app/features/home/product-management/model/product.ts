import { QadmaUser } from "../../../auth/model/qadma-user";
import { ProductDTO } from "./product-dto";

export class Product {

    id: number = 0;
    partNumber: number = 0;
    productName: string = '';
    revision: number = 1;
    dateCreated: Date = new Date();
    createdBy: QadmaUser = new QadmaUser();
    dateModified: Date = new Date();
    modifiedBy: QadmaUser = new QadmaUser();


    constructor() { }


    static fromDTO(dto: ProductDTO): Product {
        const product = new Product();
        Object.assign(product, dto);
        return product;
    }
}