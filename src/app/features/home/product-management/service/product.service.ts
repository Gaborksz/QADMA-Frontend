import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductSearchCriteria } from '../model/product-search-criteria';

import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:8080';
  private productSerachCriteriaObs = new BehaviorSubject<ProductSearchCriteria | null>(null);
  productSerachCriteria$: Observable<ProductSearchCriteria | null> = this.productSerachCriteriaObs.asObservable();


  constructor(private http: HttpClient) { 

  }


  searchProduct(criteria: ProductSearchCriteria): Observable<Product[]> { 
    return this.http.post<Product[]>(`${this.baseUrl}/api/product/search`, criteria);
  }

  setproductSerachCriteria(criteria: ProductSearchCriteria | null) {
    this.productSerachCriteriaObs.next(criteria);
  }
}
