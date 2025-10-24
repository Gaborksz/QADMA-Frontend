import { QadmaUser } from "../../../../../core/model/qadma-user";
import { InspectionTemplate } from "../../inspection-management/model/inspection-template";
import { ChangeNote } from "./change-note";
import { InspectionTemplateChangeNoteDTO } from "./inspection_template_change_note_dto";


export class InspectionTemplateChangeNote {

    changeNote: ChangeNote | null = null
    inspectionTemplate: InspectionTemplate | null = null

    constructor(partial: Partial<InspectionTemplateChangeNote>) {
        if (partial) {

            if (partial.changeNote) {
                const { id, changeDescription, dateCreated, createdBy } = partial.changeNote;
                this.changeNote = new ChangeNote(id, changeDescription, dateCreated, createdBy);
            }

            if (partial.inspectionTemplate) {
                this.inspectionTemplate = new InspectionTemplate({ ...partial.inspectionTemplate })
            }
        }
    }


    static fromDTO(dto: InspectionTemplateChangeNoteDTO): InspectionTemplateChangeNote {

        let { id, changeDescription } = dto;
        const createdBy = dto.createdBy ? QadmaUser.fromDTO(dto.createdBy) : null;
        const dateCreated = dto.dateCreated ? new Date(dto.dateCreated) : null;

        const changeNote = new ChangeNote(id, changeDescription, dateCreated, createdBy);

        let inspectionTemplate: InspectionTemplate | null = null;

        if (dto.inspectionTemplate) {
            inspectionTemplate = InspectionTemplate.fromDTO(dto.inspectionTemplate);
        }


        return new InspectionTemplateChangeNote({ changeNote, inspectionTemplate })
    }


    static toDTO(inspectionTemplateChangeNote: InspectionTemplateChangeNote): InspectionTemplateChangeNoteDTO {

        let dto!: InspectionTemplateChangeNoteDTO


        if (inspectionTemplateChangeNote)
            if (inspectionTemplateChangeNote.changeNote) {
                const { id, changeDescription, dateCreated } = inspectionTemplateChangeNote.changeNote
                let createdBy = null;
                if (inspectionTemplateChangeNote.changeNote.createdBy) {
                    createdBy = QadmaUser.toDTO(inspectionTemplateChangeNote.changeNote.createdBy);
                }

                dto = { ...dto, id, changeDescription, dateCreated, createdBy }
            }

        if (inspectionTemplateChangeNote.inspectionTemplate) {
            let inspectionTemplate = InspectionTemplate.toDTO(inspectionTemplateChangeNote.inspectionTemplate);
            dto = { ...dto, inspectionTemplate }
        }

        return dto;
    }
}