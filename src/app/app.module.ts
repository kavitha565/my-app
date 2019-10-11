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
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { TestDirective } from './components/test.directive';
import { DataComponent } from './components/data/data.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SortByPipePipe } from './sort-by-pipe.pipe';
import { FilterPipe } from './filter.pipe'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SrsComponent } from './components/srs/srs.component';
import { DemoMaterialModule } from '../app/material-module';
import { HighlightDirective } from './directives/highlight.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { TodoComponent } from './components/todo/todo.component';
import { ReferencesComponent } from './components/references/references.component';
import { AutosuggestComponent } from './components/autosuggest/autosuggest.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { LoginMaterialComponent } from './components/login-material/login-material.component';
import { RegisterMaterialComponent } from './components/register-material/register-material.component';
import { DashboardMaterialComponent } from './components/dashboard-material/dashboard-material.component';
import { DialogContentComponent } from './components/dashboard-material/dashboard-material.component';
import { ModalPopupComponent } from './components/dashboard-material/dashboard-material.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductsComponent,
    TestDirective,
    DataComponent,
    SortByPipePipe,
    FilterPipe,
    SrsComponent,
    HighlightDirective,
    TooltipDirective,
    CourseDetailsComponent,
    TodoComponent,
    ReferencesComponent,
    AutosuggestComponent,
    LoginMaterialComponent,
    RegisterMaterialComponent,
    DashboardMaterialComponent,
    DialogContentComponent,
    ModalPopupComponent
  ],
  entryComponents: [DialogContentComponent,ModalPopupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
