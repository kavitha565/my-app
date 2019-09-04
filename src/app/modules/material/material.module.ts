import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent} from '../../components/material/material.component';
import { DemoMaterialModule} from '../../../app/material-module';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    MaterialComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    DemoMaterialModule,
    FormsModule
  ]
})
export class MaterialModule { }
