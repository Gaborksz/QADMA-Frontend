import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { ProductSearchCriteria } from '../model/product-search-criteria';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchResolverService implements Resolve<Product[]>{

  private searchCriteria!: ProductSearchCriteria;

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] {
   
    throw new Error('Method not implemented.');
  }
}
