import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeManagementHomeComponent } from './components/change-management-home/change-management-home.component';
import { ChangeManagementRoutingModule } from './change-management-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedFeaturesModule } from '../../../../shared-features/shared-features.module';



@NgModule({
  declarations: [
    ChangeManagementHomeComponent

  ],
  imports: [
    CommonModule,
    ChangeManagementRoutingModule,
    ReactiveFormsModule,
    SharedFeaturesModule
  ],
  exports: []
})
export class ChangeManagementModule { }
