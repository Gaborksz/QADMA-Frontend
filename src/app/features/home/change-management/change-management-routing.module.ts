import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeManagementHomeComponent } from './components/change-management-home/change-management-home.component';
import { ProductChangeNoteCreateComponent } from './components/product-change-note-create/product-change-note-create.component';
import { ProductChangeNoteModifyComponent } from './components/product-change-note-modify/product-change-note-modify.component';


const routes: Routes = [
  {
    path: '',
    component: ChangeManagementHomeComponent,
    children: [
      {
        path: 'search', component: ProductChangeNoteModifyComponent      
      },
      {
        path: 'create', component: ProductChangeNoteCreateComponent
      },
      {
        path: 'modify', component: ProductChangeNoteModifyComponent      
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeManagementRoutingModule { }
