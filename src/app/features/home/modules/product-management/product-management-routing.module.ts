import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagementHomeComponent } from './components/product-management-home/product-management-home.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductSearchResultComponent } from './components/product-search-result/product-search-result.component';
import { NoSearchResultComponent } from './components/no-search-result/no-search-result.component';



const routes: Routes = [{
  path: '',
  component: ProductManagementHomeComponent,
  children: [
    {
      path: 'search',
      component: ProductSearchComponent,
      children: [
        {
          path: 'results',
          component: ProductSearchResultComponent
        },
        {
          path: 'no-results', component: NoSearchResultComponent
        }
      ]
    },
    {
      path: 'create',
      component: ProductManagementHomeComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
