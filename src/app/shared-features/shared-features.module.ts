import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFeaturesRoutingModule } from './shared-features-routing.module';
import { ProductChangeNoteComponent } from './components/change-management/product-change-note/product-change-note.component';
import { ProductComponent } from './components/product-management/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ChangeNoteComponent } from './components/change-management/change-note/change-note.component';
import { ProductChangeNoteCreateComponent } from './components/change-management/product-change-note-create/product-change-note-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChangeNoteComponent, ProductComponent, ProductChangeNoteComponent, ProductChangeNoteCreateComponent],
  imports: [
    CommonModule,
    SharedFeaturesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [ChangeNoteComponent, ProductComponent, ProductChangeNoteComponent, ProductChangeNoteCreateComponent]
})
export class SharedFeaturesModule { }
