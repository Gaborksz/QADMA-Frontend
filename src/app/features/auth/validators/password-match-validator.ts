import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

@Injectable(
    { providedIn: 'root' }
)
export class PasswordMatchValidator implements Validator {

    private passwordField: string = '';
    private passwordConfirmationField: string = '';

    validate = (control: AbstractControl): ValidationErrors | null => {
        const password = control.get(this.passwordField)?.value
        const passwordConfirmation = control.get(this.passwordConfirmationField)?.value

        if (password != passwordConfirmation) {
            return { passwordMismatch: true };
        }

        return null;
    }

    setKeys(passwordFieldName: string, passwordConfirmationFieldName: string) {
        this.passwordField = passwordFieldName;
        this.passwordConfirmationField = passwordConfirmationFieldName;
    }
}
