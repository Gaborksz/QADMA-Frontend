import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SignInCredential } from '../../model/signin-credential';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { QadmaUser } from '../../../../model/qadma-user';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  signinForm!: FormGroup;
  signinCredentials: SignInCredential = {
    "userName": "valaki@qadma.com",
    "password": "12345678"
  }

  currentUser$: BehaviorSubject<QadmaUser> = new BehaviorSubject(new QadmaUser());


  constructor(
    private authService: AuthService,
    private router: Router) {

    this.signinForm = new FormGroup({
      userName: new FormControl(this.signinCredentials.userName,
        [
          Validators.required,
          Validators.email
        ]
      ),

      password: new FormControl(this.signinCredentials.password,
        [
          Validators.required,
          Validators.minLength(8)
        ])
    })

    this.signinForm.valueChanges.subscribe(values => {
      this.signinCredentials = {
        userName: values["userName"],
        password: values["password"]
      }
    });

    this.signinForm.get("username")?.addValidators
  }

  onSubmit() {

    if (this.signinForm.invalid) { return }
    this.authService.signIn(this.signinCredentials)
      .subscribe({
        next: (signedInUser) => {
          if (signedInUser?.["id"] > 0) {
            this.currentUser$.next(signedInUser);
            this.clearSigninCredentials();
            this.router.navigateByUrl("/qadma/home")
          }
        },
        error: (err) => {
          this.clearSigninCredentials();
          if (err["status"] === 401 || err["status"] === 403) {
            return this.signinForm.setErrors({ "invalidCredentials": true })
          }
          this.signinForm.setErrors({ "noConnection": true })
        },
      });
  }

  get userNameControl() {
    return this.signinForm.get('userName') as FormControl;
  }

  get passwordControl() {
    return this.signinForm.get('password') as FormControl;
  }

  private clearSigninCredentials(): void {
    this.signinCredentials.userName = "";
    this.signinCredentials.password = "";
  }
}
