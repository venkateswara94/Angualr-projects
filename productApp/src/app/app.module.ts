import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingModules } from './app-routing.module';
import { AppComponent } from './app.component';
//import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';

import { EmployeeService } from './employee.service';
//import { EmployeeListComponent } from './employee-list/employee-list.component';
//import { ProductListComponent } from './product-list/product-list.component'
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    //TestComponent,
    routingModules
    //EmployeeListComponent,
    //ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
