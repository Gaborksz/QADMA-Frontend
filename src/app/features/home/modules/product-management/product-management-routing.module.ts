import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagementHomeComponent } from './components/product-management-home/product-management-home.component';
import { ProductSearchComponent } from '../../../../shared-features/components/product-management/product-search/product-search.component';
import { ProductChangeNoteCreateComponent } from '../../../../shared-features/components/change-management/product-change-note-create/product-change-note-create.component';
import { ProductChangeNoteModifyComponent } from '../../../../shared-features/components/change-management/product-change-note-modify/product-change-note-modify.component';
import { ProductResolverService } from './resolver/product-resolver.service';


const routes: Routes = [{
  path: '',
  component: ProductManagementHomeComponent,
  children: [
    {
      path: '', redirectTo: 'search', pathMatch: 'full'
    },
    {
      path: 'search',
      component: ProductSearchComponent
    },
    {
      path: 'create',
      component: ProductChangeNoteCreateComponent
    },
    {
      path: 'modify/:id',
      component: ProductChangeNoteModifyComponent,
      resolve: {
        product: ProductResolverService
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
