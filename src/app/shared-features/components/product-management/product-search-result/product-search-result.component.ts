import { Component, Input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Product } from '../../../../features/home/modules/product-management/model/product';


@Component({
  selector: 'app-product-search-result',
  templateUrl: './product-search-result.component.html',
  styleUrl: './product-search-result.component.css'
})
export class ProductSearchResultComponent {


  @Input() products: Product[] = new Array;
  private destroy$ = new Subject<void>();


  constructor() { }
}
