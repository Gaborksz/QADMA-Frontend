import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFeaturesRoutingModule } from './shared-features-routing.module';
import { ProductChangeNoteComponent } from './components/change-management/product-change-note/product-change-note.component';
import { ProductComponent } from './components/product-management/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ChangeNoteComponent } from './components/change-management/change-note/change-note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InspectionPlanComponent } from './components/inspection-management/inspection-plan/inspection-plan.component';
import { ProductSearchComponent } from './components/product-management/product-search/product-search.component';
import { ProductSearchResultComponent } from './components/product-management/product-search-result/product-search-result.component';
import { ProductNoSearchResultComponent } from './components/product-management/product-no-search-result/product-no-search-result.component';
import { ProductChangeNoteCreateComponent } from './components/change-management/product-change-note-create/product-change-note-create.component';
import { ProductChangeNoteModifyComponent } from './components/change-management/product-change-note-modify/product-change-note-modify.component';
import { InspectionTemplateComponent } from './components/inspection-management/inspection-template/inspection-template.component';
import { InspectionTemplateSearchComponent } from './components/inspection-management/inspection-template-search/inspection-template-search.component';
import { InspectionTemplateChangeNoteCreateComponent } from './components/change-management/inspection-template-change-note-create/inspection-template-change-note-create.component';
import { InspectionTemplateChangeNoteComponent } from './components/change-management/inspection-template-change-note/inspection-template-change-note.component';



@NgModule({
  declarations: [
    ChangeNoteComponent, ProductChangeNoteComponent, ProductChangeNoteCreateComponent, ProductChangeNoteModifyComponent,
    ProductComponent, ProductSearchComponent, ProductSearchResultComponent, ProductNoSearchResultComponent,
    InspectionTemplateComponent, InspectionTemplateChangeNoteComponent, InspectionTemplateChangeNoteCreateComponent,
    InspectionTemplateSearchComponent,
    InspectionPlanComponent],
  imports: [
    CommonModule,
    SharedFeaturesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ProductChangeNoteCreateComponent, ProductChangeNoteModifyComponent, ProductSearchComponent,
    InspectionTemplateChangeNoteCreateComponent, InspectionTemplateSearchComponent,
    InspectionTemplateChangeNoteComponent
  ]
})
export class SharedFeaturesModule { }
