import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';

import { debounceTime, distinctUntilChanged, filter, skip, switchMap, tap } from 'rxjs';
import { BasicFormControl } from '../../../core/model/basic-form-control';
import { QadmaUser } from '../../../core/model/qadma-user';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Input() label = '';
  @Input() inputControl!: BasicFormControl;
  nameControl!: BasicFormControl;
  idControl!: BasicFormControl;
  users: QadmaUser[] = [];
  noMatchResults = false;


  constructor(private userService: UserService) { }


  ngOnInit() {
    this.nameControl = new BasicFormControl('');
    this.idControl = new BasicFormControl('', [Validators.min(1)]);

    this.nameControl.setValue(this.inputControl.value.username, { emitEvent: false })
    this.idControl.setValue(this.inputControl.value.id, { emitEvent: false })

    this.inputControl.valueChanges.subscribe(value => {

      const user = new QadmaUser();
      user.id = value?.id;
      user.username = value?.username;
      user.authorities = value?.authorities === null ? [] : value.authorities;

      const previousUser = new QadmaUser();
      previousUser.id = this.inputControl.previousValue?.id;
      previousUser.username = this.inputControl.previousValue?.userName;
      previousUser.authorities = this.inputControl.previousValue?.authorities === null ? [] : value.authorities;

      if (!user.equalTo(previousUser)) {
        this.idControl.setValue(user?.id > 0 ? user.id : '');
        this.nameControl.setValue(user.username);
      }
    })

    this.nameControl.valueChanges
      .pipe(
        skip(2),
        debounceTime(300),
        distinctUntilChanged(),
        tap((value: string) => {
          if (value === '') {
            this.users = [];
            this.setUser(new QadmaUser());
            this.noMatchResults = false;
          }
        }),
        filter((value: string) => value?.length > 0),
        switchMap((searchTerm) => this.userService.findUsersBySearchTerm(searchTerm)),
        tap(users => {
          if (users.length === 0) { this.users = [] }
          if (users.length === 1 && users[0].username === this.nameControl.value) {
            this.inputControl.setValue(users[0]);
          }
        }),
        filter((users) => !(users.length === 1 && users[0].username === this.nameControl.value))
      ).subscribe(users => {
        this.users = users;
        this.users.length === 0 ? this.noMatchResults = true : this.noMatchResults;
      })


    this.idControl.valueChanges
      .pipe(
        skip(2),
        debounceTime(700),
        distinctUntilChanged(),
        tap(id => { if (id == '') { this.setUser(new QadmaUser()); } }),
        filter(id => id > 0),
        switchMap(id => this.userService.findUserById(id))
      )
      .subscribe(user => {
        if (user?.id > 0) {
          this.setUser(user);
        } else {
          this.setUser(new QadmaUser());
          this.noMatchResults = true
        }
      })


    this.inputControl.enabledStatus.subscribe(enabledStatus => {
      this.nameControl.disable();
      this.idControl.disable()

      if (enabledStatus) {
        this.nameControl.enable();
        this.idControl.enable()
      }
    })
  }

  setUser(user: QadmaUser) {
    this.inputControl.setValue(user)
  }

  onBlur() {
    this.users = [];
    if (this.noMatchResults) {
      this.inputControl.setValue(new QadmaUser());
    } else {
      this.inputControl.updateValueAndValidity();
    }

    this.noMatchResults = false;
  }
}
