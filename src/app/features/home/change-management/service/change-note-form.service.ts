import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChangeNote } from '../model/change-note';
import { FormControl, FormGroup } from '@angular/forms';
import { DateFormControl } from '../../../../shared/model/date-form-control';
import { AuthService } from '../../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChangeNoteFormService {

  private changeNote!: BehaviorSubject<ChangeNote>;
  changeNoteForm!: FormGroup;


  constructor(private authService: AuthService) {

    this.changeNote = new BehaviorSubject(new ChangeNote());

    this.changeNoteForm = new FormGroup({
      id: new FormControl(),
      changeDescription: new FormControl(),
      dateCreated: new DateFormControl(),
      createdBy: new FormControl()
    })

    this.changeNote.subscribe(changeNote => {
      this.changeNoteForm.get('id')?.setValue(changeNote.id);
      this.changeNoteForm.get('changeDescription')?.setValue(changeNote.changeDescription);
      this.changeNoteForm.get('dateCreated')?.setValue(changeNote.dateCreated);
      this.changeNoteForm.get('createdBy')?.setValue(changeNote.createdBy.username);
    })

    this.changeNoteForm.disable();
  }

  displayChangeNote(changeNote: ChangeNote) {

    if (changeNote != null) {
      this.changeNote.next(changeNote);
    } else
      this.changeNote.next(new ChangeNote())

    this.changeNoteForm.disable();
  }


  createChangeNote() {
    this.changeNoteForm.enable();

    const changeNote = new ChangeNote();
    this.authService.currentUser$.subscribe(user => {
      changeNote.createdBy = user;
    })

    this.changeNote.next(changeNote);

    this.changeNoteForm.get('id')?.disable();
    this.changeNoteForm.get('dateCreated')?.disable();
    this.changeNoteForm.get('createdBy')?.disable();
  }
}
