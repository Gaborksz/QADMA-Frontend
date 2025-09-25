import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, MinValidator, Validators } from '@angular/forms';
import { DateUtil } from '../../../../core/helper-classes/date-util';
import { BasicFormControl } from '../../../../core/model/basic-form-control';
import { FormMode } from '../../../../core/model/form.mode.enum';
import { AuthService } from '../../../../core/modules/auth/services/auth.service';
import { Product } from '../../../../features/home/modules/product-management/model/product';
import { min } from 'rxjs';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() mode: FormMode = FormMode.Display;
  @Input() parentForm!: FormGroup;
  @Input() product!: Product;
  productForm = new FormGroup({}) as FormGroup;

  @Output() onFormUpdate = new EventEmitter<Product>()


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
    this.productForm.get('partNumber')?.addValidators(Validators.min(5))
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
        { fieldName: 'modifiedBy', value: this.product?.modifiedBy ?? '', disabled: true }],
      DISPLAY: [
        { fieldName: 'id', value: this.product?.id ?? '', disabled: true },
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

