import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';


@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Product> {

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Product> {

    const paramId = route.paramMap.get('id') ?? '0';

    let id = parseInt(paramId)

    return this.productService.getProductById(id);

  }
}
