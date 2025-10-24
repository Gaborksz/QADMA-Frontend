import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectionManagementHomeComponent } from './components/inspection-management-home/inspection-management-home.component';
import { InspectionTemplateSearchComponent } from '../../../../shared-features/components/inspection-management/inspection-template-search/inspection-template-search.component';
import { InspectionTemplateChangeNoteCreateComponent } from '../../../../shared-features/components/change-management/inspection-template-change-note-create/inspection-template-change-note-create.component';


const routes: Routes = [
  {
    path: '', component: InspectionManagementHomeComponent,
    children: [
      { path: 'search', component: InspectionTemplateSearchComponent },
      { path: 'create', component: InspectionTemplateChangeNoteCreateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectionManagementRoutingModule { }
