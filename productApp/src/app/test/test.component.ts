import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  /*template: `<h2>Parent to Child component Interaction :
            <br/>Hello {{name}}.<br/> I am from  : {{parentData}} <!--and Country : {{country}}--></h2>
            <h2>Child to Parent Component Interaction:<br/>
            <button (click)="fireEvent()">Send Event</button>
            </h2>
              `,*/
  //styleUrls: ['./test.component.css']
  styles: [`
  .text-success{color: green;}
  .text-danger{color: red;}
  .text-special{font-style: italic;}`]
})

export class TestComponent implements OnInit {
  @Input()//if variable name is diffent with parent data
  //then use @Input("parentData")public name; and change template
  public parentData; 
 // or
 //@Input("parentData")
  //public country;

  @Output()
  public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit(" <font color='red'>Hello Parent, I am child</font>")
  }

  public bname="";
  public name="Bala Chandra";
  public siteUrl=window.location.href;
  public myId="MyTestId";
  public successClass="text-success";
  public hasError=true;
  public isSpecial= true;
  public date = new Date();
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
    }
  public isDisabled=true;
  public greeting="";
  public tempRefVal="";
  public displayName=true;
  public color="green";
  public colors=["red","green","yellow","white","blue"];
clickMethod(event){
console.log("welcome to Angular"+event.type);
this.greeting="Greeting Text";
}

myclick(value){
  this.tempRefVal=value;
  console.log(value);
}
  constructor() { }

  ngOnInit(): void {
  }
getUser(){
  return this.name+" from Vja";
}
}
