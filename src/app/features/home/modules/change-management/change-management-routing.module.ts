import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeManagementHomeComponent } from './components/change-management-home/change-management-home.component';
import { ProductChangeNoteCreateComponent } from '../../../../shared-features/components/change-management/product-change-note-create/product-change-note-create.component';
import { ProductChangeNoteComponent } from '../../../../shared-features/components/change-management/product-change-note/product-change-note.component';


const routes: Routes = [
  {
    path: '',
    component: ChangeManagementHomeComponent,
    children: [
      {
        path: 'search', component: ProductChangeNoteComponent

      },
      {
        path: 'create', component: ProductChangeNoteCreateComponent

      },
      {
        path: 'modify', component: ProductChangeNoteComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeManagementRoutingModule { }
