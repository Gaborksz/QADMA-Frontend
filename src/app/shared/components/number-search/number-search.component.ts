import { Component, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BasicFormControl } from '../../../core/model/basic-form-control';

import { NumberSearchSelectorOption } from '../../model/number-search-selector';

@Component({
  selector: 'app-number-search',
  templateUrl: './number-search.component.html',
  styleUrl: './number-search.component.css'
})
export class NumberSearchComponent {

  @Input() searchForm!: FormGroup;
  @Input() headerTitle = '';
  @Input() label = '';

  selectors = Object.values(NumberSearchSelectorOption);
  showFromControl: boolean = true;
  showToControl!: boolean;

  ngOnChanges() {

    this.getFormControls().forEach(control => {
      this.searchForm.addControl(control.name, control.value)
    })

    this.searchForm.valueChanges.subscribe(() => {
      const formValue = this.searchForm.getRawValue();
      const fieldVisibility = this.getFromConfig(formValue?.['selector']);
      this.showFromControl = fieldVisibility['fromNumber'];
      this.showToControl = fieldVisibility['toNumber'];

      const selectorControl = this.searchForm.get('selector');
      const toNumberControl = this.searchForm.get('toNumber');


      if (selectorControl &&
        selectorControl.value !== NumberSearchSelectorOption.BETWEEN &&
        toNumberControl?.value !== null) {
        toNumberControl?.setValue(null);
      }
    });
  }


  private getFormControls(): { name: string, value: BasicFormControl }[] {
    return [
      { name: 'fromNumber', value: new BasicFormControl(0, [Validators.min(0)]) },
      { name: 'toNumber', value: new BasicFormControl(0, [Validators.min(0)]) },
      { name: 'selector', value: new BasicFormControl(NumberSearchSelectorOption.EQUAL_TO) }]
  }


  private getFromConfig(selectorValue: NumberSearchSelectorOption) {

    const config = {
      'EQUAL_TO': { fromNumber: true, toNumber: false },
      'LESS_THAN': { fromNumber: true, toNumber: false },
      'MORE_THAN': { fromNumber: true, toNumber: false },
      'BETWEEN': { fromNumber: true, toNumber: true }
    }
    return config[selectorValue];
  }


  getFormControl(controlName: string): BasicFormControl {
    return this.searchForm.get(controlName) as BasicFormControl;
  }
}
