import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent,
    children: [{
      path: 'inspection-management', loadChildren: () =>
        import('./inspection-management/inspection-management.module').then(m => m.InspectionManagementModule)
    },
  {
      path: 'product-management', loadChildren: () =>
        import('./product-management/product-management.module').then(m => m.ProductManagementModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
