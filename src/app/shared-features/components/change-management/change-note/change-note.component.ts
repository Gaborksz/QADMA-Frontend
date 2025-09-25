import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DateUtil } from '../../../../core/helper-classes/date-util';
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
  @Input() changeNote!: ChangeNote;
  changeNoteForm = new FormGroup({}) as FormGroup;

  @Output() onFormUpdate = new EventEmitter<ChangeNote>()


  constructor(private authService: AuthService) {

    this.changeNoteForm.valueChanges.subscribe(() => {
      this.onFormUpdate.emit({ ...this.changeNoteForm.getRawValue() });
    })
  }


  ngOnInit() {
    if (this.parentForm != null) { this.parentForm.addControl('changeNote', this.changeNoteForm) }

    const fieldConfig = this.formFieldConfig();

    fieldConfig.forEach(field => {
      this.changeNoteForm.addControl(field.fieldName, new BasicFormControl({ value: field.value, disabled: field.disabled }))
    })
  }


  private formFieldConfig() {

    const config = {
      CREATE: [
        { fieldName: 'id', value: 0, disabled: true },
        { fieldName: 'changeDescription', value: '', disabled: false },
        { fieldName: 'dateCreated', value: DateUtil.dateAsString(new Date()), disabled: true },
        { fieldName: 'createdBy', value: this.authService.currentUserValue, disabled: true }],
      MODIFY: [
        { fieldName: 'id', value: this.changeNote?.id ?? 0, disabled: true },
        { fieldName: 'changeDescription', value: this.changeNote?.changeDescription ?? '', disabled: false },
        { fieldName: 'dateCreated', value: this.changeNote?.dateCreated ?? '', disabled: true },
        { fieldName: 'createdBy', value: this.changeNote?.createdBy ?? '', disabled: true }],
      DISPLAY: [
        { fieldName: 'id', value: this.changeNote?.id ?? 0, disabled: true },
        { fieldName: 'changeDescription', value: this.changeNote?.changeDescription ?? '', disabled: true },
        { fieldName: 'dateCreated', value: this.changeNote?.dateCreated ?? '', disabled: true },
        { fieldName: 'createdBy', value: this.changeNote?.createdBy ?? '', disabled: true }],
    }

    return config[this.mode];
  }


  getControl(controlName: string): BasicFormControl {
    return this.changeNoteForm.get(controlName) as BasicFormControl;
  }
}
