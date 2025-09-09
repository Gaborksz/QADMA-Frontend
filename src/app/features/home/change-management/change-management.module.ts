import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeManagementRoutingModule } from './change-management-routing.module';
import { SharedModule } from "../../../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeManagementHomeComponent } from './components/change-management-home/change-management-home.component';
import { ProductChangeNoteCreateComponent } from './components/product-change-note-create/product-change-note-create.component';
import { ProductChangeNoteModifyComponent } from './components/product-change-note-modify/product-change-note-modify.component';
import { ProductManagementModule } from '../product-management/product-management.module';
import { ChangeNoteFormComponent } from './components/change-note-form/change-note-form.component';
import { ProductChangeNoteFormComponent } from './components/product-change-note-form/product-change-note-form.component';


@NgModule({
  declarations: [   
    ChangeManagementHomeComponent,
    ProductChangeNoteCreateComponent,
    ProductChangeNoteModifyComponent,
    ChangeNoteFormComponent,
    ProductChangeNoteFormComponent
  ],
  imports: [
    CommonModule,
    ChangeManagementRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ProductManagementModule    
],
exports:[]
})
export class ChangeManagementModule { }
