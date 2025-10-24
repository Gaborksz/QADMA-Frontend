import { Component } from '@angular/core';
import { InspectionTemplateChangeNote } from '../../../../features/home/modules/change-management/model/inspection-template-change-note';
import { FormMode } from '../../../../core/model/form.mode.enum';
import { AuthService } from '../../../../core/modules/auth/services/auth.service';
import { ChangeNote } from '../../../../features/home/modules/change-management/model/change-note';
import { InspectionTemplate } from '../../../../features/home/modules/inspection-management/model/inspection-template';
import { InspectionTemplateChangeNoteService } from '../../../../core/services/inspection-template-change-note.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inspection-template-change-note-create',
  templateUrl: './inspection-template-change-note-create.component.html',
  styleUrl: './inspection-template-change-note-create.component.css'
})
export class InspectionTemplateChangeNoteCreateComponent {

  mode = FormMode.Create;
  inspectionTemplateChangeNote!: InspectionTemplateChangeNote;
  inspectionTemplateChangeNoteForm = new FormGroup({}) as FormGroup;
  updatedInspectionTemplateChangeNote = new InspectionTemplateChangeNote({});


  constructor(
    private authService: AuthService,
    private inspectionTemplateChangeNoteService: InspectionTemplateChangeNoteService
  ) {

    const changeNote: ChangeNote = new ChangeNote(0, '', new Date(), this.authService.currentUserValue);
    const inspectionTemplate: InspectionTemplate = new InspectionTemplate({
      id: 0,
      revision: 1,
      dateCreated: new Date(),
      createdBy: this.authService.currentUserValue,
      dateModified: new Date(),
      modifiedBy: this.authService.currentUserValue
    })

    this.inspectionTemplateChangeNote = new InspectionTemplateChangeNote({ changeNote, inspectionTemplate })
  }


  updateInspectionTemplateChangeNoteValue(insectionTemplateChangeNote: InspectionTemplateChangeNote) {
    this.updatedInspectionTemplateChangeNote = insectionTemplateChangeNote;
  }


  save() {
    this.inspectionTemplateChangeNoteService
      .saveInspectionTemplateChangeNote(this.updatedInspectionTemplateChangeNote)
      .subscribe(value => {
        console.log(value)
      })
  }
}
