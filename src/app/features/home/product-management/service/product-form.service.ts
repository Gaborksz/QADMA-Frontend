import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/product';
import { DateFormControl } from '../../../../shared/model/date-form-control';
import { AuthService } from '../../../auth/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProductFormService {


  private product: BehaviorSubject<Product> = new BehaviorSubject(new Product());
  product$: Observable<Product> = this.product.asObservable();

  productForm!: FormGroup;

  constructor(
    private productService: ProductService,
    private authService: AuthService
  ) {

    this.productForm = new FormGroup({
      id: new FormControl({ disabled: true }),
      partNumber: new FormControl({ disabled: true }),
      productName: new FormControl({ disabled: true }),
      revision: new FormControl({ disabled: true }),
      dateCreated: new DateFormControl({ disabled: true }),
      dateModified: new DateFormControl({ disabled: true }),
      createdBy: new FormControl({ disabled: true }),
      modifiedBy: new FormControl({ disabled: true })
    })

    this.product.subscribe(product => {
      this.productForm.get('id')?.setValue(product.id);
      this.productForm.get('partNumber')?.setValue(product.partNumber);
      this.productForm.get('productName')?.setValue(product.productName);
      this.productForm.get('revision')?.setValue(product.revision);
      this.productForm.get('dateCreated')?.setValue(product.dateCreated);
      this.productForm.get('dateModified')?.setValue(product.dateModified);
      this.productForm.get('createdBy')?.setValue(product.createdBy.username);
      this.productForm.get('modifiedBy')?.setValue(product.modifiedBy.username);
    })

    this.productForm.disable();
  }

  displayProduct(product: Product) {

    if (product != null) {
      this.product.next(product);
    } else {
      this.product.next(new Product())
    }

    this.productForm.disable();
  }


  createProduct() {

    const product = new Product();
    this.authService.currentUser$.subscribe(user => {
      product.createdBy = user;
      product.modifiedBy = user;
    })

    this.product.next(product);

    this.productForm.enable();
    this.productForm.get('id')?.disable();
    this.productForm.get('revision')?.disable();
    this.productForm.get('dateCreated')?.disable();
    this.productForm.get('dateModified')?.disable();
    this.productForm.get('createdBy')?.disable();
    this.productForm.get('modifiedBy')?.disable();
  }
}
