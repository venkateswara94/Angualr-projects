import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-list',
  //templateUrl: './product-list.component.html',
  template: `<h2>Product List </h2> 
              <h3>{{errorMsg}}</h3>         
              <ul *ngFor="let product of products">
              <li><b>ProductId: {{product.orderId}}  -  ProductName: {{product.productName}}</b></li>
              </ul>`,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products=[];
  public errorMsg;
  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this._productService.getProductDetails().subscribe(data => this.products=data,
      error=>this.errorMsg=error);
  }
}
