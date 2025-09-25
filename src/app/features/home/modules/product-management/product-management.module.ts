import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductManagementHomeComponent } from './components/product-management-home/product-management-home.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductSearchResultComponent } from './components/product-search-result/product-search-result.component';
import { NoSearchResultComponent } from './components/no-search-result/no-search-result.component';
import { ProductCreateHomeComponent } from './components/product-create-home/product-create-home.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { InspectionManagementModule } from '../inspection-management/inspection-management.module';
import { SharedModule } from '../../../../shared/shared.module';




@NgModule({
  declarations: [
    ProductManagementHomeComponent,
    ProductSearchComponent,
    ProductSearchResultComponent,
    NoSearchResultComponent,
    ProductCreateHomeComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    ReactiveFormsModule,
    InspectionManagementModule,
    SharedModule
  ],
  exports: [
    ProductFormComponent
  ]
})
export class ProductManagementModule { }
