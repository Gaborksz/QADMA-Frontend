import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductManagementHomeComponent } from './components/product-management-home/product-management-home.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { SharedModule } from "../../../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';
import { ProductSearchResultComponent } from './components/product-search-result/product-search-result.component';
import { NoSearchResultComponent } from './components/no-search-result/no-search-result.component';
import { ProductCreateHomeComponent } from './components/product-create-home/product-create-home.component';
import { ProductCreateFormComponent } from './components/product-create-form/product-create-form.component';



@NgModule({
  declarations: [
    ProductManagementHomeComponent,
    ProductSearchComponent,
    ProductSearchResultComponent,
    NoSearchResultComponent,
    ProductCreateHomeComponent,
    ProductCreateFormComponent  
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    SharedModule,
    ReactiveFormsModule   
]
})
export class ProductManagementModule { }
