import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { TestDirective } from './components/test.directive';
import { DataComponent } from './components/data/data.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SortByPipePipe } from './sort-by-pipe.pipe';
import { FilterPipe } from './filter.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductsComponent,
    CourseInfoComponent,
    TestDirective,
    DataComponent,
    SortByPipePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
