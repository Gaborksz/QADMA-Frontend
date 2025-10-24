import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormMode } from '../../../../core/model/form.mode.enum';
import { FormGroup } from '@angular/forms';
import { BasicFormControl } from '../../../../core/model/basic-form-control';
import { InspectionTemplate } from '../../../../features/home/modules/inspection-management/model/inspection-template';
import { DateUtil } from '../../../../core/helper-classes/date-util';


@Component({
  selector: 'app-inspection-template',
  templateUrl: './inspection-template.component.html',
  styleUrl: './inspection-template.component.css'
})
export class InspectionTemplateComponent {

  @Input() mode = FormMode.Display;
  @Input() parentForm!: FormGroup | null;
  @Input() inspectionTemplate!: InspectionTemplate | null | undefined;

  inspectionTemplateForm = new FormGroup({}) as FormGroup;

  @Output() onFormUpdate = new EventEmitter<InspectionTemplate>();


  constructor() {
    this.inspectionTemplateForm.valueChanges.subscribe(() => {

      if (this.inspectionTemplateForm.valid) {

        const formValue = this.inspectionTemplateForm.getRawValue();

        this.onFormUpdate.emit(new InspectionTemplate(InspectionTemplate.fromFormValue(formValue)));
      }
    })
  }


  ngOnChanges(changes: SimpleChanges) {

    if (this.parentForm) { this.parentForm.addControl('inspectionTemplate', this.inspectionTemplateForm) }

    this.addFieldsToForm();


    if (changes) {
      const inspectionTemplate: InspectionTemplate = changes['inspectionTemplate']?.currentValue;

      this.inspectionTemplateForm.patchValue(
        {
          ...inspectionTemplate,
          dateCreated: DateUtil.dateAsString(inspectionTemplate.dateCreated),
          dateModified: DateUtil.dateAsString(inspectionTemplate.dateModified)
        }
      )
    }
  }


  private addFieldsToForm() {
    const fieldConfig = this.formFieldConfig(this.mode);

    fieldConfig.forEach(field => {
      this.inspectionTemplateForm.addControl(field.fieldName, new BasicFormControl({ value: field.value, disabled: field.disabled }))
    })
  }

  private formFieldConfig(formMode: FormMode): { fieldName: string, value: string | boolean, disabled: boolean }[] {

    const config = {
      CREATE: [
        { fieldName: 'id', value: '', disabled: true },
        { fieldName: 'title', value: '', disabled: false },
        { fieldName: 'revision', value: '', disabled: true },
        { fieldName: 'dateCreated', value: '', disabled: true },
        { fieldName: 'createdBy', value: '', disabled: true },
        { fieldName: 'dateModified', value: '', disabled: true },
        { fieldName: 'modifiedBy', value: '', disabled: true },
        { fieldName: 'specificationDescription', value: '', disabled: false },
        { fieldName: 'attributeInspection', value: false, disabled: false },
        { fieldName: 'specificationValue', value: '', disabled: false },
        { fieldName: 'plusTolerance', value: '', disabled: false },
        { fieldName: 'minusTolerance', value: '', disabled: false }
        // { fieldName: 'changeNotes', value: '', disabled: false }  →  Not needed for creation
      ],
      MODIFY: [
        { fieldName: 'id', value: '', disabled: true },
        { fieldName: 'title', value: '', disabled: false },
        { fieldName: 'revision', value: '', disabled: true },
        { fieldName: 'dateCreated', value: '', disabled: true },
        { fieldName: 'createdBy', value: '', disabled: true },
        { fieldName: 'dateModified', value: '', disabled: true },
        { fieldName: 'modifiedBy', value: '', disabled: true },
        { fieldName: 'specificationDescription', value: '', disabled: false },
        { fieldName: 'attributeInspection', value: '', disabled: false },
        { fieldName: 'specificationValue', value: '', disabled: false },
        { fieldName: 'plusTolerance', value: '', disabled: false },
        { fieldName: 'minusTolerance', value: '', disabled: false },
        { fieldName: 'changeNotes', value: '', disabled: false }
      ],
      DISPLAY: [
        { fieldName: 'id', value: '', disabled: true },
        { fieldName: 'title', value: '', disabled: true },
        { fieldName: 'revision', value: '', disabled: true },
        { fieldName: 'dateCreated', value: '', disabled: true },
        { fieldName: 'createdBy', value: '', disabled: true },
        { fieldName: 'dateModified', value: '', disabled: true },
        { fieldName: 'modifiedBy', value: '', disabled: true },
        { fieldName: 'specificationDescription', value: '', disabled: true },
        { fieldName: 'attributeInspection', value: '', disabled: true },
        { fieldName: 'specificationValue', value: '', disabled: true },
        { fieldName: 'plusTolerance', value: '', disabled: true },
        { fieldName: 'minusTolerance', value: '', disabled: true },
        { fieldName: 'changeNotes', value: '', disabled: true }
      ]
    }

    return config[formMode];
  }


  getControl(controlName: string): BasicFormControl {
    return this.inspectionTemplateForm.get(controlName) as BasicFormControl;
  }
}
