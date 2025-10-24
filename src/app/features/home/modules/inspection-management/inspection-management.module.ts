import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectionManagementRoutingModule } from './inspection-management-routing.module';
import { InspectionManagementHomeComponent } from './components/inspection-management-home/inspection-management-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InspectionPlanFormComponent } from './components/inspection-plan-form/inspection-plan-form.component';
import { SharedModule } from '../../../../shared/shared.module';
import { SharedFeaturesModule } from '../../../../shared-features/shared-features.module';



@NgModule({
  declarations: [
    InspectionManagementHomeComponent,
    InspectionPlanFormComponent
  ],
  imports: [
    CommonModule,
    InspectionManagementRoutingModule,
    SharedModule,
    SharedFeaturesModule,
    ReactiveFormsModule
  ],
  exports: [
    InspectionPlanFormComponent
  ]
})
export class InspectionManagementModule { }
