import { QadmaUser } from "../../../auth/model/qadma-user";

export class ChangeNote {
    
        id: number = 0
        changeDescription: string = '';
        dateCreated: Date = new Date()
        createdBy: QadmaUser = new QadmaUser();
}
