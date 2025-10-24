import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasicFormControl } from '../../../../core/model/basic-form-control';
import { FormMode } from '../../../../core/model/form.mode.enum';
import { AuthService } from '../../../../core/modules/auth/services/auth.service';
import { ChangeNote } from '../../../../features/home/modules/change-management/model/change-note';


@Component({
  selector: 'app-change-note',
  templateUrl: './change-note.component.html',
  styleUrl: './change-note.component.css'
})
export class ChangeNoteComponent {

  @Input() mode: FormMode = FormMode.Display;
  @Input() parentForm!: FormGroup;
  @Input() changeNote!: ChangeNote | null | undefined;
  changeNoteForm = new FormGroup({}) as FormGroup;

  @Output() onFormUpdate = new EventEmitter<ChangeNote>()


  constructor(private authService: AuthService) {

    this.changeNoteForm.valueChanges.subscribe(() => {
      this.onFormUpdate.emit(ChangeNote.fromFormValue({ ...this.changeNoteForm.getRawValue() }));
    })
  }


  ngOnChanges(changes: SimpleChanges) {
    if (this.parentForm != null) { this.parentForm.addControl('changeNote', this.changeNoteForm) }

    this.addFieldsToForm();

    if (this.changeNote != null) { this.changeNoteForm.patchValue(ChangeNote.toFormValue(this.changeNote)); }


    const changeNote: ChangeNote = changes['changeNote']?.currentValue;

    if (changeNote) { this.changeNoteForm.patchValue(ChangeNote.toFormValue(changeNote)); }
  }


  private addFieldsToForm() {
    const fieldConfig = this.formFieldConfig();

    fieldConfig.forEach(field => {
      this.changeNoteForm.addControl(field.fieldName, new BasicFormControl({ value: field.value, disabled: field.disabled }))
    })
  }


  private formFieldConfig() {

    const config = {
      CREATE: [
        { fieldName: 'id', value: '', disabled: true },
        { fieldName: 'changeDescription', value: '', disabled: false },
        { fieldName: 'dateCreated', value: '', disabled: true },
        { fieldName: 'createdBy', value: '', disabled: true }],
      MODIFY: [
        { fieldName: 'id', value: '', disabled: true },
        { fieldName: 'changeDescription', value: '', disabled: false },
        { fieldName: 'dateCreated', value: '', disabled: true },
        { fieldName: 'createdBy', value: '', disabled: true }],
      DISPLAY: [
        { fieldName: 'id', value: '', disabled: true },
        { fieldName: 'changeDescription', value: '', disabled: true },
        { fieldName: 'dateCreated', value: '', disabled: true },
        { fieldName: 'createdBy', value: '', disabled: true }]
    }

    return config[this.mode];
  }


  getControl(controlName: string): BasicFormControl {
    return this.changeNoteForm.get(controlName) as BasicFormControl;
  }
}