import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component'
import { RegisterComponent } from '../app/components/register/register.component'
import { DashboardComponent } from '../app/components/dashboard/dashboard.component'
import { ProductsComponent } from '../app/components/products/products.component'
import { DataComponent } from '../app/components/data/data.component'
import { SrsComponent } from '../app/components/srs/srs.component'
import { CourseDetailsComponent } from '../app/components/course-details/course-details.component'
import { MaterialComponent } from './components/material/material.component';
import { AutosuggestComponent } from './components/autosuggest/autosuggest.component';
import { LoginMaterialComponent } from './components/login-material/login-material.component';
import { RegisterMaterialComponent } from './components/register-material/register-material.component';
import { DashboardMaterialComponent } from './components/dashboard-material/dashboard-material.component';
import { SavePDFComponent } from './components/save-pdf/save-pdf.component';

const routes: Routes = [
  {path: 'pdf', component: SavePDFComponent},
  {path: 'login',component: LoginMaterialComponent},
  {path: 'register',component: RegisterMaterialComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'dashboard-materail',component: DashboardMaterialComponent},
  {path: 'product',component: ProductsComponent},
  {path: 'data',component : DataComponent},
  {path: 'srs',component : SrsComponent},
  {path: 'details',component : CourseDetailsComponent},
  {path: 'autosuggest',component : AutosuggestComponent},
 // {path: 'material',component : MaterialComponent},
  {
    path: 'customer',
    //loadChildren : ()=>import('../app/modules/customer/customer.module').then((mod)=>mod.CustomerModule)
    loadChildren : '../app/modules/customer/customer.module#CustomerModule'
  },
  {
    path : 'order',
    //loadChildren : ()=>import('../app/modules/order/order.module').then((mod)=>mod.OrderModule)
    loadChildren : '../app/modules/order/order.module#OrderModule'
  },
  {
    path : 'material',
    loadChildren : '../app/modules/material/material.module#MaterialModule'
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' }  //wildcard routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // forRoot indicates that this is root routing module
  exports: [RouterModule]
})
export class AppRoutingModule { }
