import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'employee-list',
  //templateUrl: './employee-list.component.html',
  template : `<!--<h2>EmployeeList from array</h2>              
              <ul *ngFor="let employee of employees">
              <li>{{employee.name}}</li>
             </ul>-->
            
             <h2>Employee List from DB</h2>
             <h3>{{errorMsg}}</h3>
             <ul *ngFor="let emp of employeeList">
             <li><b>{{emp.name}} - {{emp.age}}</b></li>
             </ul>
             `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public employeeList = [];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(){
    this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmpList().subscribe(data => this.employeeList = data, error=>this.errorMsg=error);
  }

}
