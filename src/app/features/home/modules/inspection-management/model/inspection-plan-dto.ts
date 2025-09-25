import { QadmaUser } from "../../../../../core/model/qadma-user"

export interface InspectionPlanDTO {

    id: number
    revision: number
    dateCreated: Date
    createdBy: QadmaUser
    dateModified: Date
    modifiedBy: QadmaUser
}
