import { QadmaUser } from "../../../../../core/model/qadma-user";
import { ChangeNoteDTO } from "./change-note-dto";
import { IChangeNote } from "./ichange-note";

export class ChangeNote implements IChangeNote {

    constructor(
        public id: number = 0,
        public changeDescription: string = '',
        public dateCreated: Date = new Date(),
        public createdBy: QadmaUser = new QadmaUser()
    ) { }


    static fromDTO(dto: ChangeNoteDTO): ChangeNote {
        const changeNote = new ChangeNote();
        Object.assign(changeNote, dto);
        return changeNote;
    }


    static toDTO(changeNote: ChangeNote): ChangeNoteDTO {

        return { ...changeNote } as ChangeNoteDTO;
    }
}