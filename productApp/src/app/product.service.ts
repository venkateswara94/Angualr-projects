import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { Product } from './product';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {

 _url:string="http://localhost:1900/getOrders";

  constructor(private http:HttpClient) { }

  getProductDetails():Observable<Product[]>{
   /*return  [
    {"productId":"P1ODell","productName":"BoradPC"},
    {"productId":"PdasdEs","productName":"Loudspeaker"},
    {"productId":"KKSe44d","productName":"Projecter"},
    {"productId":"K34ds34","productName":"WireTrack"}
  ];*/
  return this.http.get<Product[]>(this._url)
  .pipe(catchError(this.errorHandle));
  }
  
  errorHandle(err:HttpErrorResponse){
    return throwError(err.message || "Server Error");
  }
}
