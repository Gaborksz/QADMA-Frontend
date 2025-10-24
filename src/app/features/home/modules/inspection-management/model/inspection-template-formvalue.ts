import { QadmaUser } from "../../../../../core/model/qadma-user"

export interface InspectionTemplateFormValue {

    id: number
    title: string
    revision: number
    dateCreated: string
    createdBy: QadmaUser | null
    dateModified: string
    modifiedBy: QadmaUser | null
    specificationDescription: string
    attributeInspection: boolean | string
    specificationValue: number | string
    plusTolerance: number | string
    minusTolerance: number | string
}