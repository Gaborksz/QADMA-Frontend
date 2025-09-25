import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable(
    { providedIn: 'root' }
)
export class ExistingUserNameValidator implements AsyncValidator {

    private userNameControlName = '';

    constructor(private authService: AuthService) {
        
    }

    validate = (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

        const userName = control.get(this.userNameControlName)?.value

        return this.authService.isUserNameAvaliable(userName).pipe(
            map(isAvailable => {
                return isAvailable ? null : { userNameTaken: true };
            })
        )
    }

    set userNameControl(controlName: string){
        this.userNameControlName = controlName;
    }
}
