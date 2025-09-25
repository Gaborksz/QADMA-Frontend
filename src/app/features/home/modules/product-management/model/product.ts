
import { QadmaUser } from "../../../../../core/model/qadma-user";
import { IProduct } from "./iproduct";
import { ProductDTO } from "./product-dto";

export class Product implements IProduct {

    constructor(
        public id: number = 0,
        public partNumber: number = 0,
        public productName: string = '',
        public revision: number = 1,
        public dateCreated: Date = new Date(),
        public createdBy: QadmaUser = new QadmaUser(),
        public dateModified: Date = new Date(),
        public modifiedBy: QadmaUser = new QadmaUser()
    ) { }


    static fromDTO(dto: ProductDTO): Product {
        const product = new Product();
        Object.assign(product, dto);
        return product;
    }


    static toDTO(product: Product): ProductDTO {

        let createdBy = QadmaUser.toDTO(product.createdBy);
        let modifiedBy = QadmaUser.toDTO(product.modifiedBy);

        const { id, partNumber, productName, revision, dateCreated, dateModified } = product;

        return { id, partNumber, productName, revision, dateCreated, dateModified, createdBy, modifiedBy };
    }
}