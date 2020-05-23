import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomersService} from './services/customersService';
import {CountriesService} from './services/countriesService';
import {ParallelComponent} from './parallelComponent';
import {HttpClientModule} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Routes, RouterModule } from '@angular/router';
//import { DepartmentListComponent } from './department-list/department-list.component';
//import { EmployeeListComponent } from './employee-list/employee-list.component';
@NgModule({
  declarations: [AppComponent, ParallelComponent,routingComponents],//, DepartmentListComponent, EmployeeListComponent],
  imports: [HttpClientModule,BrowserModule,AppRoutingModule],
  providers: [CustomersService, CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//to remove duplicate imports in app.module.ts
//export const routingComponents=[DepartmentListComponent,EmployeeListComponent]