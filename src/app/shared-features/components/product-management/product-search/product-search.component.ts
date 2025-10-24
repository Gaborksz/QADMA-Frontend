import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductSearchCriteria } from '../../../../features/home/modules/product-management/model/product-search-criteria';
import { ProductService } from '../../../../features/home/modules/product-management/service/product.service';
import { BasicFormControl } from '../../../../core/model/basic-form-control';
import { Product } from '../../../../features/home/modules/product-management/model/product';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent {

  productSearchForm: FormGroup;
  productSearchCriteria!: ProductSearchCriteria;

  products: Product[] = [];


  constructor(
    private productService: ProductService,
    private router: Router
  ) {

    this.productSearchForm = new FormGroup({
      partNumber: new BasicFormControl(""),
      productName: new BasicFormControl(""),
      revision: new BasicFormControl(""),
      dateCreatedSelector: new BasicFormControl(""),
      dateCreatedFrom: new BasicFormControl(""),
      dateCreatedTo: new BasicFormControl(""),
      dateModifiedSelector: new BasicFormControl(""),
      dateModifiedFrom: new BasicFormControl(""),
      dateModifiedTo: new BasicFormControl(""),
      createdBy: new BasicFormControl(""),
      modifiedBy: new BasicFormControl("")
    })
  }


  ngOnInit() {
    this.productSearchForm.valueChanges.subscribe({
      next: (searchCriterias) => {
        this.productSearchCriteria = { ...searchCriterias } as ProductSearchCriteria;
      }
    })
  }


  onSubmit() {
    if (this.productSearchForm.invalid) return;

    this.productService.searchProduct(this.productSearchCriteria)
      .subscribe(products => {
        this.products = products;
      })
  }


  getControl(controlName: string): BasicFormControl {
    return this.productSearchForm.get(controlName) as BasicFormControl;
  }
}
