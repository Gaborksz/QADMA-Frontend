import { QadmaUser } from "../../../../../core/model/qadma-user"
import { QadmaUserDTO } from "../../../../../core/model/qadma-user-dto"
import { InspectionTemplateChangeNoteDTO } from "./inspection_template_change_note_dto"

export interface InspectionTemplateDTO {

    id: number
    title: string
    revision: number
    dateCreated: Date | null
    createdBy: QadmaUserDTO | null
    dateModified: Date | null
    modifiedBy: QadmaUserDTO | null
    specificationDescription: string
    attributeInspection: boolean
    specificationValue: number
    plusTolerance: number
    minusTolerance: number
    changeNotes: InspectionTemplateChangeNoteDTO[]
}