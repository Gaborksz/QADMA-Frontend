import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';



@Component({
  selector: 'app-product-management-home',
  templateUrl: './product-management-home.component.html',
  styleUrl: './product-management-home.component.css'
})
export class ProductManagementHomeComponent {

  constructor(private productService: ProductService) {

  }
}
