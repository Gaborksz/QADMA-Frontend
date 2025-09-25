import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl {

    public override value!: Date

    override setValue(value: Date | string, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
        emitModelToViewChange?: boolean;
        emitViewToModelChange?: boolean;
    }): void {

        if (value instanceof Date) {

            console.log('date instance', value);

            this.value = value;

            super.setValue(value.toISOString().substring(0, 10), options);
            return;
        }

        console.log('string entered');

        const strValue = value as string;

        if (strValue.length > 0) {
            const date = Date.parse(strValue);
            if (Number.isNaN(date)) {
                throw new Error("Invalid Date entered");
            }

        }
    }
};

