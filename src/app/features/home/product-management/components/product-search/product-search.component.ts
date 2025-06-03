import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductSearchCriteria } from '../../model/product-search-criteria';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth/services/auth.service';
import { map, Observable } from 'rxjs';



@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent {

  productSearchForm: FormGroup;
  productSearchCriteria!: ProductSearchCriteria;
  getUsers!: (searchTerm: string) => Observable<any[]>;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router
  ) {

    this.productSearchForm = new FormGroup({
      partNumber: new FormControl(""),
      productName: new FormControl(""),
      revision: new FormControl(""),
      dateCreatedSelector: new FormControl(""),
      dateCreatedFrom: new FormControl(""),
      dateCreatedTo: new FormControl(""),
      dateModifiedSelector: new FormControl(""),
      dateModifiedFrom: new FormControl(""),
      dateModifiedTo: new FormControl(""),
      createdBy: new FormControl(""),
      modifiedBy: new FormControl("")
    })

    this.getUsers = (searchTerm: string) => {
      return this.authService.findUsersBySearchTerm(searchTerm)
        .pipe(
          map(users => users.map(user => {
            const { id, username } = user;
            return {
              id: id,
              Name: username
            }
          })))
    };
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
    this.productService.setproductSerachCriteria(this.productSearchCriteria);
    this.router.navigateByUrl('/qadma/home/product-management/search/results');
  }


  get productIdControl(): FormControl {
    return this.productSearchForm.get("id") as FormControl;
  }
  get partNumberControl(): FormControl {
    return this.productSearchForm.get("partNumber") as FormControl;
  }
  get productNameControl(): FormControl {
    return this.productSearchForm.get("productName") as FormControl;
  }
  get productRevisionControl(): FormControl {
    return this.productSearchForm.get("revision") as FormControl;
  }
  get dateCreatedSelectorControl(): FormControl {
    return this.productSearchForm.get('dateCreatedSelector') as FormControl;
  }
  get dateCreatedFromControl(): FormControl {
    return this.productSearchForm.get('dateCreatedFrom') as FormControl;
  }
  get dateCreatedToControl(): FormControl {
    return this.productSearchForm.get('dateCreatedTo') as FormControl;
  }
  get dateModifiedSelectorControl(): FormControl {
    return this.productSearchForm.get('dateModifiedSelector') as FormControl;
  }
  get dateModifiedFromControl(): FormControl {
    return this.productSearchForm.get('dateModifiedFrom') as FormControl;
  }
  get dateModifiedToControl(): FormControl {
    return this.productSearchForm.get('dateModifiedTo') as FormControl;
  }
  get dateModifiedFilter(): FormGroup {
    return this.productSearchForm.get("dateModifiedFilter") as FormGroup;
  }
  get createdByControl(): FormControl {
    return this.productSearchForm.get("createdBy") as FormControl;
  }
  get modifiedByControl(): FormControl {
    return this.productSearchForm.get("modifiedBy") as FormControl;
  }
}
