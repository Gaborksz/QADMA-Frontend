import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateFilterSelectorType } from '../../../core/model/date.filter.enum';
import { DynamicDateFilterValidator } from '../../validators/dynamic-date-filter-validator';
import { BasicFormControl } from '../../../core/model/basic-form-control';


@Component({
  selector: 'app-dynamic-date-filter',
  templateUrl: './dynamic-date-filter.component.html',
  styleUrl: './dynamic-date-filter.component.css'
})
export class DynamicDateFilterComponent {

  @Input() selectorControl!: BasicFormControl;
  @Input() dateFromControl!: BasicFormControl;
  @Input() dateToControl!: BasicFormControl;

  labelcontent: string = '\u00A0';
  showToControl!: boolean;
  showDateFromControl!: boolean;
  selectors = Object.values(DateFilterSelectorType);

  private config: Record<DateFilterSelectorType, { labelContent: string, showToControl: boolean }> = {
    NONE: { labelContent: '\u00A0', showToControl: false },
    ON: { labelContent: '\u00A0', showToControl: false },
    BETWEEN: { labelContent: 'From', showToControl: true },
    BEFORE: { labelContent: '\u00A0', showToControl: false },
    AFTER: { labelContent: '\u00A0', showToControl: false }
  }


  constructor(private dynamicDateFilterValidator: DynamicDateFilterValidator) { }


  ngOnInit() {
    this.selectorControl.setValidators(
      this.dynamicDateFilterValidator.validateSelectorControl(this.dateFromControlFn, this.dateToControlFn));

    this.dateFromControl.setValidators(
      this.dynamicDateFilterValidator.validateDateFromControl(this.selectorControlFn));

    this.dateToControl.setValidators(
      this.dynamicDateFilterValidator.validateDateToControl(this.selectorControlFn));

    this.selectorControl.valueChanges.subscribe(selectorValue => {
      this.udpateElementVisiblityAndLabelContent(selectorValue);
      this.showDateFromControl = selectorValue !== DateFilterSelectorType.NONE;
    })

    this.selectorControl.setValue(DateFilterSelectorType.NONE);
  }


  udpateElementVisiblityAndLabelContent(selector: DateFilterSelectorType) {

    if (selector === DateFilterSelectorType.NONE) {
      this.dateFromControl.setValue('');
    }

    this.labelcontent = this.config[selector].labelContent;
    this.showToControl = this.config[selector].showToControl;
  }


  private dateFromControlFn = (): FormControl => {
    return this.dateFromControl;
  }
  private dateToControlFn = (): FormControl => {
    return this.dateToControl;
  }
  private selectorControlFn = (): FormControl => {
    return this.selectorControl;
  }


  get selectorFormControl(): FormControl {
    return this.selectorControl;
  }
  get dateFromFormControl(): FormControl {
    return this.dateFromControl;
  }
  get dateToFormControl(): FormControl {
    return this.dateToControl;
  }
}
