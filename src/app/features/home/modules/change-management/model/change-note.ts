import { DateUtil } from "../../../../../core/helper-classes/date-util";
import { QadmaUser } from "../../../../../core/model/qadma-user";
import { ChangeNoteDTO } from "./change-note-dto";
import { IChangeNote } from "./ichange-note";

export class ChangeNote {

    constructor(
        public id: number = 0,
        public changeDescription: string = '',
        public dateCreated: Date | null = new Date(),
        public createdBy: QadmaUser | null = new QadmaUser()
    ) { }


    static fromDTO(dto: ChangeNoteDTO): ChangeNote {
        const changeNote = new ChangeNote();
        Object.assign(changeNote, dto);
        return changeNote;
    }


    static toDTO(changeNote: ChangeNote): ChangeNoteDTO {

        return { ...changeNote } as ChangeNoteDTO;
    }


    static toFormValue(changeNote: ChangeNote) {
        const { id, changeDescription, createdBy } = changeNote;
        const dateCreated = DateUtil.dateAsString(changeNote.dateCreated);

        return { id, changeDescription, dateCreated, createdBy };
    }



    static fromFormValue(formRawValue: IChangeNote): ChangeNote {

        const { id, changeDescription, createdBy } = formRawValue;
        const dateCreated = new Date(formRawValue.dateCreated);

        return { id, changeDescription, dateCreated, createdBy };
    }
}