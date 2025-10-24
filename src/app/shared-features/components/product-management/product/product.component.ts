import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BasicFormControl } from '../../../../core/model/basic-form-control';
import { FormMode } from '../../../../core/model/form.mode.enum';
import { AuthService } from '../../../../core/modules/auth/services/auth.service';
import { Product } from '../../../../features/home/modules/product-management/model/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() mode: FormMode = FormMode.Display;
  @Input() parentForm!: FormGroup;
  @Input() product!: Product | null;

  productForm = new FormGroup({}) as FormGroup;

  @Output() onFormUpdate = new EventEmitter<Product>()


  constructor(private authService: AuthService) {

    this.productForm.valueChanges.subscribe(() => {
      this.onFormUpdate.emit(Product.fromFormValue({ ...this.productForm.getRawValue() }));
    })
  }


  ngOnInit() {

    if (this.parentForm != null) { this.parentForm.addControl('product', this.productForm); }

    this.addFieldsToForm();

    if (this.product != null) { this.productForm.patchValue(Product.toFormValue(this.product)); }
  }


  ngOnChanges(changes: SimpleChanges) {

    const product: Product = changes['product']?.currentValue

    if (product) { this.productForm.patchValue(Product.toFormValue(product)); }
  }


  private addFieldsToForm() {
    const fieldConfig = this.formFieldConfig();

    fieldConfig.forEach(field => {
      this.productForm.addControl(field.fieldName, new BasicFormControl({ value: field.value, disabled: field.disabled }))
    })
    this.productForm.get('partNumber')?.addValidators(Validators.min(5))
  }


  private formFieldConfig() {

    const config = {
      CREATE: [
        { fieldName: 'id', value: '', disabled: true },
        { fieldName: 'partNumber', value: '', disabled: false },
        { fieldName: 'productName', value: '', disabled: false },
        { fieldName: 'revision', value: '', disabled: true },
        { fieldName: 'dateCreated', value: '', disabled: true },
        { fieldName: 'dateModified', value: '', disabled: true },
        { fieldName: 'createdBy', value: '', disabled: true },
        { fieldName: 'modifiedBy', value: '', disabled: true }],
      MODIFY: [
        { fieldName: 'id', value: '', disabled: true },
        { fieldName: 'partNumber', value: '', disabled: false },
        { fieldName: 'productName', value: '', disabled: false },
        { fieldName: 'revision', value: '', disabled: true },
        { fieldName: 'dateCreated', value: '', disabled: true },
        { fieldName: 'dateModified', value: '', disabled: true },
        { fieldName: 'createdBy', value: '', disabled: true },
        { fieldName: 'modifiedBy', value: '', disabled: true },
        { fieldName: 'inspectionPlan', value: '', disabled: true }],
      DISPLAY: [
        { fieldName: 'id', value: '', disabled: true },
        { fieldName: 'partNumber', value: '', disabled: true },
        { fieldName: 'productName', value: '', disabled: true },
        { fieldName: 'revision', value: '', disabled: true },
        { fieldName: 'dateCreated', value: '', disabled: true },
        { fieldName: 'dateModified', value: '', disabled: true },
        { fieldName: 'createdBy', value: '', disabled: true },
        { fieldName: 'modifiedBy', value: '', disabled: true },
        { fieldName: 'inspectionPlan', value: '', disabled: true }]
    }

    return config[this.mode];
  }


  private getEmptyProductWithCurrentUser() {
    return new Product(0, 0, '', 1,
      new Date(), this.authService.currentUserValue,
      new Date(), this.authService.currentUserValue);
  }


  getControl(controlName: string): BasicFormControl {
    return this.productForm.get(controlName) as BasicFormControl;
  }
}

