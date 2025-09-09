import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProductView } from '../model/product-dto';
import { ProductService } from '../service/product.service';
import { ProductSearchCriteria } from '../model/product-search-criteria';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchResolverService implements Resolve<ProductView[]>{

  private searchCriteria!: ProductSearchCriteria;

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ProductView[] {
   
    throw new Error('Method not implemented.');
  }
}
