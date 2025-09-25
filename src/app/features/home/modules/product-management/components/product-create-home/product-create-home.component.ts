import { Component } from '@angular/core';

import { FormMode } from '../../../../../../core/model/form.mode.enum';
import { AuthService } from '../../../../../../core/modules/auth/services/auth.service';
import { ProductChangeNote } from '../../../change-management/model/product-change-note';



@Component({
  selector: 'app-product-create-home',
  templateUrl: './product-create-home.component.html',
  styleUrl: './product-create-home.component.css'
})
export class ProductCreateHomeComponent {

  mode = FormMode.Create;
  productChangeNote!: ProductChangeNote


  constructor(private authService: AuthService) {
  }

  ngOnInit() { }

}
