import { QadmaUserDTO } from "../../../auth/model/qadma-user-dto"


export interface ChangeNoteDTO {

        id: number
        changeDescription: string
        dateCreated: Date
        createdBy: QadmaUserDTO
}

