import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { FormMode } from '../../../../../shared/model/form.mode.enum';
import { ChangeNote } from '../../model/change-note';
import { BasicFormControl } from '../../../../../shared/model/basic-form-control';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-change-note-form',
  templateUrl: './change-note-form.component.html',
  styleUrl: './change-note-form.component.css'
})
export class ChangeNoteFormComponent {

  @Input() mode!: FormMode
  @Input() parentForm!: FormGroup;
  changeNoteForm!: FormGroup;

  @Output() updatedChangeNote = new EventEmitter<ChangeNote>();


  constructor(private authService: AuthService) {

    this.changeNoteForm = new FormGroup({
      id: new BasicFormControl({ value: 0, disabled: true }),
      changeDescription: new BasicFormControl({ value: { id: 1, nev: 'kutya' }, disabled: true }),
      dateCreated: new BasicFormControl({ value: '', disabled: true }),
      createdBy: new BasicFormControl({ value: '', disabled: false })
    });

    this.changeNoteForm.valueChanges.subscribe(value => {
      const changeNote = new ChangeNote();
      changeNote.id = value.id;
      changeNote.changeDescription = value.changeDescription;
      changeNote.dateCreated = value.dateCreated;
    })
  }


  ngOnInit() {
    if (this.parentForm != null) { this.parentForm.addControl('changeNote', this.changeNoteForm); }
    if (this.mode == null) { this.mode = FormMode.Display }
  }


  getControl(contolName: string): BasicFormControl {
    return this.changeNoteForm.get(contolName) as BasicFormControl;
  }

  doit() {
    console.log("doit");
  }
}
