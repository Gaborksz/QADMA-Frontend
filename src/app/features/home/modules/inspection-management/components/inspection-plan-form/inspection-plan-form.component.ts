import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormMode } from '../../../../../../core/model/form.mode.enum';
import { FormGroup } from '@angular/forms';
import { DateUtil } from '../../../../../../core/helper-classes/date-util';
import { BasicFormControl } from '../../../../../../core/model/basic-form-control';
import { IInspectionPlan } from '../../model/iinspection-plan';
import { AuthService } from '../../../../../../core/modules/auth/services/auth.service';

@Component({
  selector: 'app-inspection-plan-form',
  templateUrl: './inspection-plan-form.component.html',
  styleUrl: './inspection-plan-form.component.css'
})
export class InspectionPlanFormComponent {

  @Input() mode: FormMode = FormMode.Display;
  @Input() inspectionPlan!: IInspectionPlan;
  @Input() parentForm !: FormGroup;
  inspectionPlanForm = new FormGroup({}) as FormGroup;
  @Output() onFormUpdate = new EventEmitter<IInspectionPlan>()


  constructor(private authService: AuthService) { }


  ngOnInit() {
    if (this.parentForm) { this.parentForm.addControl('inspectionPlan', this.inspectionPlanForm) }

    const fieldConfig = this.formFieldConfig(this.mode);

    fieldConfig.forEach(field => {
      this.inspectionPlanForm.addControl(field.fieldName, new BasicFormControl({ value: field.value, disabled: field.disabled }))
    })

    this.inspectionPlanForm.valueChanges.subscribe(values => {
      this.onFormUpdate.emit(this.inspectionPlanForm.getRawValue())
    })
  }


  private formFieldConfig(formMode: FormMode): { fieldName: string, value: any, disabled: boolean }[] {

    const config = {
      CREATE: [
        { fieldName: 'id', value: 0, disabled: true },
        { fieldName: 'revision', value: 1, disabled: true },
        { fieldName: 'dateCreated', value: DateUtil.dateAsString(new Date()), disabled: true },
        { fieldName: 'createdBy', value: this.authService.currentUserValue, disabled: true },
        { fieldName: 'dateModified', value: DateUtil.dateAsString(new Date()), disabled: true },
        { fieldName: 'modifiedBy', value: this.authService.currentUserValue, disabled: true }],
      MODIFY: [
        { fieldName: 'id', value: this.inspectionPlan?.id ?? '', disabled: true },
        { fieldName: 'revision', value: this.inspectionPlan?.revision ?? '', disabled: true },
        { fieldName: 'dateCreated', value: this.inspectionPlan?.dateCreated ?? '', disabled: true },
        { fieldName: 'createdBy', value: this.inspectionPlan?.createdBy ?? '', disabled: true },
        { fieldName: 'dateModified', value: this.inspectionPlan?.dateModified ?? '', disabled: true },
        { fieldName: 'modifiedBy', value: this.inspectionPlan?.modifiedBy ?? '', disabled: true }],
      DISPLAY: [
        { fieldName: 'id', value: this.inspectionPlan?.id ?? '', disabled: true },
        { fieldName: 'revision', value: this.inspectionPlan?.revision ?? '', disabled: true },
        { fieldName: 'dateCreated', value: this.inspectionPlan?.dateCreated ?? '', disabled: true },
        { fieldName: 'createdBy', value: this.inspectionPlan?.createdBy ?? '', disabled: true },
        { fieldName: 'dateModified', value: this.inspectionPlan?.dateModified ?? '', disabled: true },
        { fieldName: 'modifiedBy', value: this.inspectionPlan?.modifiedBy ?? '', disabled: true }]
    }

    return config[formMode];
  }


  getControl(controlName: string): BasicFormControl {

    return this.inspectionPlanForm.get(controlName) as BasicFormControl;
  }
}