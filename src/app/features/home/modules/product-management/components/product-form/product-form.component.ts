import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormMode } from '../../../../../../core/model/form.mode.enum';
import { BasicFormControl } from '../../../../../../core/model/basic-form-control';
import { DateUtil } from '../../../../../../core/helper-classes/date-util';
import { IProduct } from '../../model/iproduct';
import { AuthService } from '../../../../../../core/modules/auth/services/auth.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  @Input() mode: FormMode = FormMode.Display;
  @Input() parentForm!: FormGroup;
  @Input() product!: IProduct;
  productForm = new FormGroup({}) as FormGroup;

  @Output() onFormUpdate = new EventEmitter<IProduct>()


  constructor(private authService: AuthService) {

    this.productForm.valueChanges.subscribe(() => {
      this.onFormUpdate.emit({ ...this.productForm.getRawValue() });
    })
  }


  ngOnInit() {
    if (this.parentForm != null) { this.parentForm.addControl('product', this.productForm) }

    const fieldConfig = this.formFieldConfig();

    fieldConfig.forEach(field => {
      this.productForm.addControl(field.fieldName, new BasicFormControl({ value: field.value, disabled: field.disabled }))
    })
  }


  private formFieldConfig() {

    const config = {
      CREATE: [
        { fieldName: 'id', value: 0, disabled: true },
        { fieldName: 'partNumber', value: '', disabled: false },
        { fieldName: 'productName', value: '', disabled: false },
        { fieldName: 'revision', value: 1, disabled: true },
        { fieldName: 'dateCreated', value: DateUtil.dateAsString(new Date()), disabled: true },
        { fieldName: 'dateModified', value: DateUtil.dateAsString(new Date()), disabled: true },
        { fieldName: 'createdBy', value: this.authService.currentUserValue, disabled: true },
        { fieldName: 'modifiedBy', value: this.authService.currentUserValue, disabled: true }],
      MODIFY: [
        { fieldName: 'id', value: this.product?.id ?? '', disabled: true },
        { fieldName: 'partNumber', value: this.product?.partNumber ?? '', disabled: false },
        { fieldName: 'productName', value: this.product?.productName ?? '', disabled: false },
        { fieldName: 'revision', value: this.product?.revision ?? '', disabled: true },
        { fieldName: 'dateCreated', value: this.product?.dateCreated ?? '', disabled: true },
        { fieldName: 'dateModified', value: this.product?.dateModified ?? '', disabled: true },
        { fieldName: 'createdBy', value: this.product?.createdBy ?? '', disabled: true },
        { fieldName: 'modifiedBy', value: this.product.modifiedBy ?? '', disabled: true }],
      DISPLAY: [
        { fieldName: 'id', value: this.product?.id, disabled: true },
        { fieldName: 'partNumber', value: this.product?.partNumber ?? '', disabled: true },
        { fieldName: 'productName', value: this.product?.productName ?? '', disabled: true },
        { fieldName: 'revision', value: this.product?.revision ?? '', disabled: true },
        { fieldName: 'dateCreated', value: this.product?.dateCreated ?? '', disabled: true },
        { fieldName: 'dateModified', value: this.product?.dateModified ?? '', disabled: true },
        { fieldName: 'createdBy', value: this.product?.createdBy ?? '', disabled: true },
        { fieldName: 'modifiedBy', value: this.product?.modifiedBy ?? '', disabled: true }],
    }

    return config[this.mode];
  }


  getControl(controlName: string): BasicFormControl {
    return this.productForm.get(controlName) as BasicFormControl;
  }
}

