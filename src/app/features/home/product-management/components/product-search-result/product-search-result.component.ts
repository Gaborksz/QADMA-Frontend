import { Component, Input } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-search-result',
  templateUrl: './product-search-result.component.html',
  styleUrl: './product-search-result.component.css'
})
export class ProductSearchResultComponent {

  @Input() products: Product[] = new Array;
  private destroy$ = new Subject<void>();


  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productService.productSerachCriteria$
      .pipe(takeUntil(this.destroy$))
      .subscribe(criteria => {
        if (criteria) {
          this.productService.searchProduct(criteria)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: products => {
                this.products = products;
                if (this.products.length === 0) {
                  this.router.navigateByUrl('/qadma/home/product-management/search/no-results');
                }
              }
            })
        }
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
