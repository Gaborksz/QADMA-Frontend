import { Component } from '@angular/core';
import { FormMode } from '../../../../../shared/model/form.mode.enum';
import { AuthService } from '../../../../auth/services/auth.service';
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
