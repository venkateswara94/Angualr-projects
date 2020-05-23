import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeService {

  private _url:string = "http://localhost:8880/getEmployees";

  constructor(private http:HttpClient) { }
  
  getEmployees(){
    return [{"id":1, "name":"Andew", "age":30},
    {"id":2, "name":"Brandon","age":25},
    {"id":3, "name":"Christina", "age":26},
    {"id":4, "name":"Elena", "age":28}];
    }

    getEmpList():Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this._url)
      .pipe(catchError(this.errorHandler));
    }
    errorHandler(error:HttpErrorResponse){
      return Observable.throw(error.message||"System Error");
      }  

      handleError(error:HttpErrorResponse){
        let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status} \n Message: ${error.message}`;
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
      }
}
