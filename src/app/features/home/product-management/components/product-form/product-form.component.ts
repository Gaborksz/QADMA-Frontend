import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../model/product';
import { ProductFormService } from '../../service/product-form.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {


  @Input() product!: Product;
  productForm: FormGroup;


  constructor(private productFormService: ProductFormService) {
    this.productForm = this.productFormService.productForm;
  }

  getControl(controlName: string): FormControl {
    return this.productForm.get(controlName) as FormControl;
  }
}
