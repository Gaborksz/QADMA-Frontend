import { Injectable } from "@angular/core";
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { DateFilterSelectorType } from "../../core/model/date.filter.enum";




@Injectable({
    providedIn: 'root'
})
export class DynamicDateFilterValidator {

    validateSelectorControl(
        getDateFromControl: () => FormControl,
        getDateToControl: () => FormControl): ValidatorFn {

        return (selector: AbstractControl): ValidationErrors | null => {


            if (selector.value === DateFilterSelectorType.BETWEEN) {
                if (getDateFromControl().value === '') {
                    getDateFromControl().setErrors({ dateFromNull: true });
                }
                if (getDateToControl().value === '') {
                    getDateToControl().setErrors({ dateToNull: true });
                }
                return null;

            } else if (selector.value !== DateFilterSelectorType.NONE) {
                if (getDateFromControl().value === '') {
                    getDateFromControl().setErrors({ dateFromNull: true });
                    return null;
                }
            }

            DynamicDateFilterValidator.removeErrorFromControl(getDateFromControl(), 'dateFromNull');
            DynamicDateFilterValidator.removeErrorFromControl(getDateToControl(), 'dateToNull');
            return null;
        }
    }

    validateDateFromControl(getSelectorControl: () => FormControl): ValidatorFn {

        return (dateFromControl: AbstractControl): ValidationErrors | null => {

            if (dateFromControl.value === ''
                && getSelectorControl().value !== DateFilterSelectorType.NONE) {

                return { dateFromNull: true };
            }

            return null;
        }
    }

    validateDateToControl(getSelectorControl: () => FormControl): ValidatorFn {

        return (dateToControl: AbstractControl): ValidationErrors | null => {

            if (dateToControl.value === ''
                && getSelectorControl().value == DateFilterSelectorType.BETWEEN) {

                return { dateToNull: true };
            }

            return null;
        }
    }

    private static removeErrorFromControl(control: FormControl, errorKey: string) {

        if (control?.errors) {
            const errors = { ...control.errors };
            delete errors[errorKey];

            if (Object.keys(errors).length === 0) {
                control.setErrors(null);
            } else {
                control.setErrors(errors);
            }
        }
    }
}

