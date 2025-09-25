import { QadmaUserDTO } from "../../../../../core/model/qadma-user-dto"

export interface ChangeNoteDTO {

    id: number
    changeDescription: string
    dateCreated: Date
    createdBy: QadmaUserDTO
}