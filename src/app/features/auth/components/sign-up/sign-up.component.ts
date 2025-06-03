import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExistingUserNameValidator } from '../../validators/existing-user-name-validator';
import { PasswordMatchValidator } from '../../validators/password-match-validator';
import { SignInCredential } from '../../model/signin-credential';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  singUpForm!: FormGroup
  signUpCredentials!: SignInCredential

  constructor(private authService: AuthService,
    private existingUserNameValidator: ExistingUserNameValidator,
    private passwordMatchValidator: PasswordMatchValidator,
    private router: Router
  ) {

    this.singUpForm = new FormGroup({
      userName: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      passwordConfirmation: new FormControl("", [Validators.required, Validators.minLength(8)])
    }, [passwordMatchValidator.validate], [existingUserNameValidator.validate])

    passwordMatchValidator.setKeys("password", "passwordConfirmation");
    existingUserNameValidator.userNameControl = 'userName';
    this.singUpForm.valueChanges.subscribe(() => {
      this.signUpCredentials = {
        userName: this.singUpForm.get('userName')?.value,
        password: this.singUpForm.get('password')?.value
      }
    })
  }

  onSubmit() {
    if (this.singUpForm.invalid) {
      return
    }

    this.authService.signUp(this.signUpCredentials).subscribe(() => {
      this.clearSignUpCredentials();
      this.router.navigateByUrl('');
    })
  }

  private clearSignUpCredentials() {
    this.signUpCredentials.userName = "";
    this.signUpCredentials.password = "";
  };

  get userNameControl(): FormControl {
    return this.singUpForm.get("userName") as FormControl;
  }

  get passwordControl(): FormControl {
    return this.singUpForm.get("password") as FormControl;
  }

  get passwordConfirmnationControl(): FormControl {
    return this.singUpForm.get("passwordConfirmation") as FormControl;
  }
}
