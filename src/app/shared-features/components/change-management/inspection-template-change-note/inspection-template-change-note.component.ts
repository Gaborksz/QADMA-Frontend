import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormMode } from '../../../../core/model/form.mode.enum';
import { InspectionTemplateChangeNote } from '../../../../features/home/modules/change-management/model/inspection-template-change-note';
import { InspectionTemplate } from '../../../../features/home/modules/inspection-management/model/inspection-template';
import { ChangeNote } from '../../../../features/home/modules/change-management/model/change-note';

@Component({
  selector: 'app-inspection-template-change-note',
  templateUrl: './inspection-template-change-note.component.html',
  styleUrl: './inspection-template-change-note.component.css'
})
export class InspectionTemplateChangeNoteComponent {

  @Input() mode = FormMode.Display;
  @Input() inspectionTemplateChangeNote!: InspectionTemplateChangeNote | null;
  @Input() parentForm!: FormGroup;

  inspectionTemplateChangeNoteForm = new FormGroup({}) as FormGroup;
  updatedInspectionTemplateChangeNote = new InspectionTemplateChangeNote({});

  @Output() onFormUpdate = new EventEmitter<InspectionTemplateChangeNote>();


  ngOnChanges(changes: SimpleChanges) {
    if (this.parentForm) { this.parentForm.addControl('inspectionTemplateChangeNote', this.inspectionTemplateChangeNoteForm) }
  }


  updateInspectionTemplateValue(inspectionTemplate: InspectionTemplate) {
    this.updatedInspectionTemplateChangeNote.inspectionTemplate = inspectionTemplate;
    this.onFormUpdate.emit(this.updatedInspectionTemplateChangeNote);
  }


  updateChangeNoteValue(changeNote: ChangeNote) {
    this.updatedInspectionTemplateChangeNote.changeNote = changeNote;
    this.onFormUpdate.emit(this.updatedInspectionTemplateChangeNote);
  }
}
