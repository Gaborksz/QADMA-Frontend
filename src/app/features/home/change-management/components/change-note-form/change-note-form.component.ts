import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChangeNoteFormService } from '../../service/change-note-form.service';

@Component({
  selector: 'app-change-note-form',
  templateUrl: './change-note-form.component.html',
  styleUrl: './change-note-form.component.css'
})
export class ChangeNoteFormComponent {


  changeNoteForm!: FormGroup;

  constructor(private changeNoteFormService: ChangeNoteFormService) {
    this.changeNoteForm = changeNoteFormService.changeNoteForm;
  }
  

  getControl(contolName: string): FormControl {
    return this.changeNoteForm.get(contolName) as FormControl;
  }
}
