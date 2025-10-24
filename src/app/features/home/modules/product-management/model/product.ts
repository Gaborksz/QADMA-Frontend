
import { DateUtil } from "../../../../../core/helper-classes/date-util";
import { QadmaUser } from "../../../../../core/model/qadma-user";
import { InspectionPlan } from "../../inspection-management/model/inspection-plan";
import { IProduct } from "./iproduct";
import { ProductDTO } from "./product-dto";

export class Product {

    constructor(
        public id: number = 0,
        public partNumber: number = 0,
        public productName: string = '',
        public revision: number = 1,
        public dateCreated: Date = new Date(),
        public createdBy: QadmaUser = new QadmaUser(),
        public dateModified: Date = new Date(),
        public modifiedBy: QadmaUser = new QadmaUser(),
        public inspectionPlan: InspectionPlan | null = null
    ) { }


    static fromDTO(dto: ProductDTO): Product {

        const { id, partNumber, productName, revision } = dto;
        const dateCreated = new Date(dto.dateCreated);
        const dateModified = new Date(dto.dateModified);
        const createdBy = QadmaUser.fromDTO(dto.createdBy);
        const modifiedBy = QadmaUser.fromDTO(dto.modifiedBy);

        return new Product(id, partNumber, productName, revision, dateCreated, createdBy, dateModified, modifiedBy);
    }


    static toDTO(product: Product): ProductDTO {

        let createdBy = QadmaUser.toDTO(product.createdBy);
        let modifiedBy = QadmaUser.toDTO(product.modifiedBy);

        const { id, partNumber, productName, revision, dateCreated, dateModified } = product;

        return { id, partNumber, productName, revision, dateCreated, dateModified, createdBy, modifiedBy };
    }


    static toFormValue(product: Product) {
        const { id, partNumber, productName, revision, createdBy, modifiedBy } = product;
        const dateCreated = DateUtil.dateAsString(product.dateCreated);
        const dateModified = DateUtil.dateAsString(product.dateModified);
        return { id, partNumber, productName, revision, dateCreated, createdBy, dateModified, modifiedBy }
    }


    static fromFormValue(formRawValue: IProduct): Product {
        const { id, partNumber, productName, revision, createdBy, modifiedBy, inspectionPlan } = formRawValue;
        const dateCreated = new Date(formRawValue.dateCreated);
        const dateModified = new Date(formRawValue.dateModified);

        return { id, partNumber, productName, revision, dateCreated, createdBy, dateModified, modifiedBy, inspectionPlan }
    }
}