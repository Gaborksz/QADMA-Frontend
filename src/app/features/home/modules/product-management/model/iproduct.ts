import { QadmaUser } from "../../../../../core/model/qadma-user"
import { InspectionPlan } from "../../inspection-management/model/inspection-plan"

export interface IProduct {
    id: number
    partNumber: number
    productName: string
    revision: number
    dateCreated: Date
    createdBy: QadmaUser
    dateModified: Date
    modifiedBy: QadmaUser
    inspectionPlan: InspectionPlan
}
