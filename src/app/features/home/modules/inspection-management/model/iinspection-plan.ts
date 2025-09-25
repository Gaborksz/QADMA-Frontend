import { QadmaUser } from "../../../../../core/model/qadma-user"

export interface IInspectionPlan {
    id: number
    revision: number
    dateCreated: Date
    createdBy: QadmaUser
    dateModified: Date
    modifiedBy: QadmaUser
}
