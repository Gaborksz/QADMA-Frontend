import { Injectable } from '@angular/core';
import { ProductChangeNote } from '../model/product-change-note';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProductChangeNoteService } from '../../../../../core/services/product-change-note.service';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductChangeNoteResolverService implements Resolve<ProductChangeNote> {

  constructor(private productChangeNoteService: ProductChangeNoteService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<ProductChangeNote> {

    const id = route.paramMap.get('id');

    return of(new ProductChangeNote());
  }
}
