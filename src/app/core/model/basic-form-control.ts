import { AsyncValidatorFn, FormControl, ValidatorFn } from "@angular/forms";
import { BehaviorSubject } from "rxjs";

export class BasicFormControl extends FormControl {

    public enabledStatus!: BehaviorSubject<boolean>;
    public previousValue: any;

    constructor(
        formState?: any,
        validatorOrOpts?: ValidatorFn | ValidatorFn[] | null,
        asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
    ) {
        super(formState, validatorOrOpts, asyncValidator);

        if (this.enabled) {
            this.enabledStatus = new BehaviorSubject(true);
        } else {
            this.enabledStatus = new BehaviorSubject(false);
        }
    }

    override enable(opts?: { onlySelf?: boolean; emitEvent?: boolean }) {
        super.enable(opts);
        this.enabledStatus?.next(this.enabled);
    }

    override disable(opts?: { onlySelf?: boolean; emitEvent?: boolean }) {
        super.disable(opts);
        this.enabledStatus?.next(this.disabled);
    }

    override setValue(value: any,
        options?: {
            onlySelf?: boolean;
            emitEvent?: boolean;
            emitModelToViewChange?: boolean;
            emitViewToModelChange?: boolean;
        } | undefined): void {


        this.previousValue = this.value;
        super.setValue(value, options);
    }
}
