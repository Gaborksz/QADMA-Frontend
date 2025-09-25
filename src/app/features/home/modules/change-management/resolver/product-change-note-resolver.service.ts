import { Injectable } from '@angular/core';
import { ProductChangeNote } from '../model/product-change-note';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProductChangeNoteService } from '../service/product-change-note.service';

@Injectable({
  providedIn: 'root'
})
export class ProductChangeNoteResolverService implements Resolve<ProductChangeNote> {

  constructor(private productChangeNoteService: ProductChangeNoteService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<ProductChangeNote> {

    const id = route.paramMap.get('id');

    return this.productChangeNoteService.getProductChangeNote(1);
  }
}
