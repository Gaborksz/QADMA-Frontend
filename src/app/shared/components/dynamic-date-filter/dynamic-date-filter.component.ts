import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DATE_FILTER_SELECTOR_LIST, DateFilterSelectorType } from '../../model/date.filter.enum';
import { DynamicDateFilterValidator } from '../../validators/dynamic-date-filter-validator';


@Component({
  selector: 'app-dynamic-date-filter',
  templateUrl: './dynamic-date-filter.component.html',
  styleUrl: './dynamic-date-filter.component.css'
})
export class DynamicDateFilterComponent {

  @Input() selectorControl!: FormControl;
  @Input() dateFromControl!: FormControl;
  @Input() dateToControl!: FormControl;

  labelcontent: string = '\u00A0';
  showToControl: boolean = false;
  showDateFromControl = false;
  selectors = DATE_FILTER_SELECTOR_LIST;

  private config: Record<DateFilterSelectorType, { labelContent: string, showToControl: boolean }> = {
    NONE: { labelContent: '\u00A0', showToControl: false },
    ON: { labelContent: '\u00A0', showToControl: false },
    BETWEEN: { labelContent: 'From', showToControl: true },
    BEFORE: { labelContent: '\u00A0', showToControl: false },
    AFTER: { labelContent: '\u00A0', showToControl: false }
  }

  constructor(private dynamicDateFilterValidator: DynamicDateFilterValidator) {
  }


  ngOnInit() {
    this.selectorControl.setValidators(
      this.dynamicDateFilterValidator.validateSelectorControl(this.dateFromControlFn, this.dateToControlFn));

    this.dateFromControl.setValidators(
      this.dynamicDateFilterValidator.validateDateFromControl(this.selectorControlFn));

    this.dateToControl.setValidators(
      this.dynamicDateFilterValidator.validateDateToControl(this.selectorControlFn));

    this.selectorControl.valueChanges.subscribe(selectorValue => {
      this.udpateElementVisiblityandLabelContent(selectorValue);
      this.showDateFromControl = selectorValue !== DateFilterSelectorType.NONE;
    })

    this.selectorControl.setValue(DateFilterSelectorType.NONE);
  }


  udpateElementVisiblityandLabelContent(selector: DateFilterSelectorType) {

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
