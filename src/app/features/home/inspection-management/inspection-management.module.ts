import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InspectionManagementRoutingModule } from './inspection-management-routing.module';
import { InspectionManagementHomeComponent } from './components/inspection-management-home/inspection-management-home.component';


@NgModule({
  declarations: [
    InspectionManagementHomeComponent
  ],
  imports: [
    CommonModule,
    InspectionManagementRoutingModule
  ]
})
export class InspectionManagementModule { }
