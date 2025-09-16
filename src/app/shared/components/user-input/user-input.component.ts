import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BasicFormControl } from '../../model/basic-form-control';
import { UserService } from '../../services/user.service';
import { QadmaUser } from '../../model/qadma-user';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Input() label = '';
  @Input() inputControl!: BasicFormControl;
  nameControl!: FormControl;
  idControl!: FormControl;
  users: QadmaUser[] = [];


  constructor(private userService: UserService) { }


  ngOnInit() {
    this.nameControl = new FormControl('');
    this.nameControl.setValue(this.inputControl.value?.username);

    this.idControl = new FormControl('', [Validators.min(1)]);
    this.idControl.setValue(this.inputControl.value?.id);

    this.inputControl.valueChanges.subscribe(user => {

      if (user?.id > 0) {
        this.idControl.setValue(user?.id);
        this.nameControl.setValue(user.username);
      }

      if (user?.id === 0 && (this.idControl.value !== '' || this.nameControl.value !== '')) {
        this.idControl.setValue('');
        this.nameControl.setValue('');
      }
    })

    this.inputControl.enabledStatus.subscribe(enabledStatus => {
      if (enabledStatus) {
        this.nameControl.enable();
        this.idControl.enable()
      } else {
        this.nameControl.disable();
        this.idControl.disable()
      }
    })
  }


  findUsersBySearchTerm(searchTerm: string) {

    if (searchTerm.length === 0) {
      this.inputControl.setValue(new QadmaUser());
      this.users = [];
      return;
    }

    if (searchTerm != this.inputControl.value.username) {
      this.userService.findUsersBySearchTerm(searchTerm).subscribe(users => {
        this.users = users;
      })
    }
  }

  findUsersById(userId: string) {

    const id = Number.parseInt(userId);

    if (this.idControl.valid) {
      this.userService.findUserById(id).subscribe(user => {
        this.setUser(user);
      })
    }
  }


  setUser(user: QadmaUser) {
    this.inputControl.setValue(user);
  }


  onBlur() {
    this.users = [];

    if (this.inputControl.value.id > 0) {
      this.inputControl.updateValueAndValidity({ emitEvent: true });
    } else {
      this.inputControl.setValue(new QadmaUser());
    }
  }
}
