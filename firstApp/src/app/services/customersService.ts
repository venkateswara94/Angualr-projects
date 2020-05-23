import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CustomersService{
    //create object for httpclient
    constructor(private _http:HttpClient){}

    public getCustomer():any{
        return this._http.get("https://www.w3schools.com/angular/customers.php");
    };
}