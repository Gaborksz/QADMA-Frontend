import { QadmaUser } from "../../../../../core/model/qadma-user";
import { InspectionTemplateChangeNote } from "../../change-management/model/inspection-template-change-note";
import { InspectionTemplateDTO } from "../../change-management/model/inspection-template-dto";
import { InspectionTemplateChangeNoteDTO } from "../../change-management/model/inspection_template_change_note_dto";
import { QadmaUserDTO } from "../../../../../core/model/qadma-user-dto";
import { InspectionTemplateFormValue } from "./inspection-template-formvalue";
import { DateUtil } from "../../../../../core/helper-classes/date-util";


export class InspectionTemplate {

    id = 0
    title = ''
    revision = 0
    dateCreated: Date | null = null
    createdBy: QadmaUser | null = null
    dateModified: Date | null = null
    modifiedBy: QadmaUser | null = null
    specificationDescription = ''
    attributeInspection = false
    specificationValue = 0
    plusTolerance = 0
    minusTolerance = 0
    changeNotes: InspectionTemplateChangeNote[] = []


    constructor(partial: Partial<InspectionTemplate>) {
        if (partial) {
            Object.assign(this, partial)
        }
    }


    static toDTO(inspectionTemplate: InspectionTemplate): InspectionTemplateDTO {

        let dto!: InspectionTemplateDTO;

        if (inspectionTemplate) {
            const { id, title, revision, dateCreated, dateModified,
                specificationDescription, attributeInspection,
                specificationValue, plusTolerance, minusTolerance } = inspectionTemplate;

            const createdBy: QadmaUserDTO | null = inspectionTemplate.createdBy ? QadmaUser.toDTO(inspectionTemplate.createdBy) : null;
            const modifiedBy: QadmaUserDTO | null = inspectionTemplate.modifiedBy ? QadmaUser.toDTO(inspectionTemplate.modifiedBy) : null;

            dto = {
                ...dto, id, title, revision, dateCreated, createdBy, dateModified, modifiedBy,
                specificationDescription, attributeInspection,
                specificationValue, plusTolerance, minusTolerance
            }
        }

        if (inspectionTemplate.changeNotes.length > 0) {

            let changeNotes: InspectionTemplateChangeNoteDTO[] = []

            changeNotes = inspectionTemplate.changeNotes.
                map((cn: InspectionTemplateChangeNote) => InspectionTemplateChangeNote.toDTO(cn))
            dto = { ...dto, changeNotes }
        }

        return dto;
    }


    static fromDTO(dto: InspectionTemplateDTO): InspectionTemplate {

        if (dto) {
            const { id, title, revision,
                specificationDescription, attributeInspection,
                specificationValue, plusTolerance, minusTolerance } = dto;

            const dateCreated = dto.dateCreated ? new Date(dto.dateCreated) : null;
            const dateModified = dto.dateModified ? new Date(dto.dateModified) : null;

            const createdBy = dto.createdBy ? QadmaUser.fromDTO(dto.createdBy) : null;
            const modifiedBy = dto.modifiedBy ? QadmaUser.fromDTO(dto.modifiedBy) : null

            let changeNotes: InspectionTemplateChangeNote[] = [];

            if (dto.changeNotes) {
                changeNotes = dto.changeNotes.map(dto => InspectionTemplateChangeNote.fromDTO(dto))
            }
            return new InspectionTemplate({
                id, title, revision,
                specificationDescription, attributeInspection,
                specificationValue, plusTolerance, minusTolerance
                , dateCreated, dateModified, createdBy, modifiedBy, changeNotes
            });
        }
        return new InspectionTemplate({});
    }


    static fromFormValue(formValue: InspectionTemplateFormValue): InspectionTemplate {

        return new InspectionTemplate({
            ...formValue,
            dateCreated: new Date(formValue.dateCreated),
            dateModified: new Date(formValue.dateModified),
            attributeInspection: typeof formValue.attributeInspection === 'boolean' ? formValue.attributeInspection : formValue.attributeInspection === 'true',
            specificationValue: typeof formValue.specificationValue === 'number' ? formValue.specificationValue : parseInt(formValue.specificationValue),
            plusTolerance: typeof formValue.plusTolerance === 'number' ? formValue.plusTolerance : parseInt(formValue.plusTolerance),
            minusTolerance: typeof formValue.minusTolerance === 'number' ? formValue.minusTolerance : parseInt(formValue.minusTolerance)
        });
    }


    static toFormValue(inspectionTemplate: InspectionTemplate): InspectionTemplateFormValue {

        if (inspectionTemplate) {
            return {
                ...inspectionTemplate,
                dateCreated: inspectionTemplate.dateCreated ? DateUtil.dateAsString(inspectionTemplate.dateCreated) : '',
                dateModified: inspectionTemplate.dateModified ? DateUtil.dateAsString(inspectionTemplate.dateModified) : ''
            }
        }

        return {
            id: 0,
            title: "",
            revision: 0,
            dateCreated: "",
            createdBy: null,
            dateModified: "",
            modifiedBy: null,
            specificationDescription: '',
            attributeInspection: false,
            specificationValue: 0,
            plusTolerance: 0,
            minusTolerance: 0
        };
    }
}