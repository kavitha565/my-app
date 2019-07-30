import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from '../../components/customer/customer.component'

const routes: Routes = [
  {path:'',component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // forChild is for configuring routes for feature modules
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
