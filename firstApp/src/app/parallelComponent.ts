import {Component} from "@angular/core";
import {CustomersService} from "./services/customersService";
import {CountriesService} from "./services/countriesService";
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
    selector:"parallel",
    templateUrl:"./parallelComponent.html"
})
export class ParallelComponent{
    private resultOne:any;
    private resultTwo:any;
    private parallelSubscribe:any;
   
    
    //dependency injection
    constructor(private _service1:CustomersService, private _service2:CountriesService ){}

    ngOnInit(){ //parallel calls - asynchronous service calls
    
    this.parallelSubscribe = Observable.forkJoin(
        [this._service1.getCustomer(), this._service2.getCountries()]).subscribe(
                                       this.successCallback, this.errorCallback);
       
    };

    public successCallback = (res:any):any=>{
         this.resultOne=res[0];
        this.resultTwo=res[1];
    }
    
    public errorCallback = (err:HttpErrorResponse):any=>{
        if(err.error instanceof Error){
            console.log("Client side error");
        }
        else{
            console.log("Server side error");
        }
      };
      
    ngOnDestroy(){
    this.parallelSubscribe.unsubscribe();
          };
}