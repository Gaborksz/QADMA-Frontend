import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl {


    override setValue(value: Date, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
        emitModelToViewChange?: boolean;
        emitViewToModelChange?: boolean;
    }): void {

        if ( !(value instanceof Date)) {
            throw new Error(`Value provided is not an instance of ${Date.name}`);
        }           
       
        super.setValue(value.toISOString().substring(0, 10), options);        
    };
}
