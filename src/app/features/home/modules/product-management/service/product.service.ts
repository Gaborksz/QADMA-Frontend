import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductSearchCriteria } from '../model/product-search-criteria';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ProductDTO } from '../model/product-dto';
import { Product } from '../model/product';
import { AuthService } from '../../../../../core/modules/auth/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:8080';
  private productSerachCriteriaObs = new BehaviorSubject<ProductSearchCriteria | null>(null);
  productSerachCriteria$: Observable<ProductSearchCriteria | null> = this.productSerachCriteriaObs.asObservable();

  private product!: BehaviorSubject<Product>;
  product$!: Observable<Product>;

  constructor(private http: HttpClient, private authService: AuthService) {

    const product = new Product();
    authService.currentUser$.subscribe(user => {
      product.createdBy = user;
      product.modifiedBy = user;
    })

    this.product = new BehaviorSubject(product);
    this.product$ = this.product.asObservable();
  }


  searchProduct(criteria: ProductSearchCriteria): Observable<Product[]> {
    return this.http.post<ProductDTO[]>(`${this.baseUrl}/api/product/search`, criteria)
      .pipe(map((dtos: ProductDTO[]) => dtos.map(dto => Product.fromDTO(dto))))
  }


  getProductById(id: number): Observable<Product> {
    return this.http.get<ProductDTO>(`${this.baseUrl}/api/product/${id}`)
      .pipe(map(dto => Product.fromDTO(dto)))
  }


  setproductSerachCriteria(criteria: ProductSearchCriteria | null) {
    this.productSerachCriteriaObs.next(criteria);
  }
}
