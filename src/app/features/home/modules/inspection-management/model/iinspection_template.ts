import { QadmaUser } from "../../../../../core/model/qadma-user"
import { InspectionTemplateChangeNote } from "../../change-management/model/inspection-template-change-note"

export interface IInspectionTemplate {
    id: number
    title: string
    revision: number
    dateCreated: Date | null
    createdBy: QadmaUser | null
    dateModified: Date | null
    modifiedBy: QadmaUser | null
    specificationDescription: string
    attributeInspection: boolean
    specificationValue: number
    plusTolerance: number
    minusTolerance: number
    changeNotes: InspectionTemplateChangeNote[]
}