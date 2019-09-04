import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component'
import { RegisterComponent } from '../app/components/register/register.component'
import { DashboardComponent } from '../app/components/dashboard/dashboard.component'
import { ProductsComponent } from '../app/components/products/products.component'
import { CourseInfoComponent } from '../app/components/course-info/course-info.component'
import { DataComponent } from '../app/components/data/data.component'
import { SrsComponent } from '../app/components/srs/srs.component'
import { CourseDetailsComponent } from '../app/components/course-details/course-details.component'
import { MaterialComponent } from './components/material/material.component';

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'product',component: ProductsComponent},
  {path: 'courseInfo',component : CourseInfoComponent},
  {path: 'data',component : DataComponent},
  {path: 'srs',component : SrsComponent},
  {path: 'details',component : CourseDetailsComponent},
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
  { path: '**', component:LoginComponent}  //wildcard routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // forRoot indicates that this is root routing module
  exports: [RouterModule]
})
export class AppRoutingModule { }
