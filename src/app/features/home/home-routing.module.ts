import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [

  {
    path: '', component: HomeComponent,
    children: [{
      path: 'product-management', loadChildren: () =>
        import('./modules/product-management/product-management.module').then(m => m.ProductManagementModule)
    },
    {
      path: 'change-management', loadChildren: () =>
        import('./modules/change-management/change-management.module').then(m => m.ChangeManagementModule)
    },
    {
      path: 'inspection-management', loadChildren: () =>
        import('./modules/inspection-management/inspection-management.module').then(m => m.InspectionManagementModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
