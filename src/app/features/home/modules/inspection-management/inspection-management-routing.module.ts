import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectionManagementHomeComponent } from './components/inspection-management-home/inspection-management-home.component';

const routes: Routes = [
  {
    path:'', component: InspectionManagementHomeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectionManagementRoutingModule { }
