import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {ProductListComponent} from './product-list/product-list.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{path:'test', component:TestComponent},{path:'employeeList', component:EmployeeListComponent},
                        {path:'productList', component:ProductListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModules = [EmployeeListComponent,ProductListComponent,TestComponent];