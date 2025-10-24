import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductManagementHomeComponent } from './components/product-management-home/product-management-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductCreateHomeComponent } from './components/product-create-home/product-create-home.component';
import { InspectionManagementModule } from '../inspection-management/inspection-management.module';
import { SharedModule } from '../../../../shared/shared.module';
import { SharedFeaturesModule } from '../../../../shared-features/shared-features.module';

@NgModule({
  declarations: [
    ProductManagementHomeComponent,
    ProductCreateHomeComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    ReactiveFormsModule,
    InspectionManagementModule,
    SharedFeaturesModule,
    SharedModule
  ],
  exports: []
})
export class ProductManagementModule { }
