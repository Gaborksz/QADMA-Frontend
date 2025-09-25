import { QadmaUser } from "../../../../../core/model/qadma-user"

export interface IChangeNote {

    id: number
    changeDescription: string
    dateCreated: Date
    createdBy: QadmaUser
}