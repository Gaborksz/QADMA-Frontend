import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';

import { catchError, debounceTime, distinctUntilChanged, filter, of, startWith, switchMap, tap } from 'rxjs';
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
  nameControl = new BasicFormControl('');
  idControl = new BasicFormControl('', [Validators.min(1)]);
  users: QadmaUser[] = [];
  noMatchResults = false;


  constructor(private userService: UserService) {

    this.nameControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap((value: string) => {
          this.noMatchResults = false;

          if (value.trim() === '') {
            this.users = [];
            if (this.inputControl.value?.id > 0) { this.setUser(new QadmaUser()) };
          }
        }),
        filter(value => value !== this.inputControl.value?.username),
        filter(value => value?.trim().length > 0),
        switchMap((searchTerm) => this.userService.findUsersBySearchTerm(searchTerm))
      ).subscribe(users => {
        this.users = users;
        this.users.length === 0 ? this.noMatchResults = true : this.noMatchResults = false;

        if (users.length === 1 && users[0].username === this.nameControl.value) {
          this.inputControl.setValue(users[0]);
          this.users = [];
        }
      })


    this.idControl.valueChanges.pipe(
      debounceTime(700),
      distinctUntilChanged(),
      tap(id => {
        if (id === '' || id === null) {
          this.setUser(new QadmaUser());
          this.noMatchResults = false;
        }
      }),
      filter(id => id > 0),
      switchMap(id =>
        this.userService.findUserById(id)
          .pipe(
            catchError(() => of(null))
          )
      )
    ).subscribe(user => {
      if (user) {
        this.setUser(user);
        this.noMatchResults = false;
      } else {
        this.noMatchResults = true;
      }
    });
  }


  ngOnInit() {

    this.inputControl.valueChanges
      .pipe(startWith(this.inputControl.value))
      .subscribe(value => {

        const { id, username, authorities } = value
        const user = new QadmaUser(id, username, authorities);

        const previousUser = new QadmaUser(this.inputControl.previousValue);

        if (!user.equalTo(previousUser)) {

          this.idControl.setValue(user?.id > 0 ? user.id : '');

          this.nameControl.setValue(user.username);
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
    if (this.noMatchResults) {
      this.inputControl.setValue(new QadmaUser());
    } else {
      this.inputControl.updateValueAndValidity();
    }

    this.users = [];
    this.noMatchResults = false;
  }
}
