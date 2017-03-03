import {Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import  {ProductListService}  from "../../../app/service/productList.service" 

@Component({
    selector: 'app-hot-product',
    styleUrls: ['./hotProduct.component.scss'], 
    templateUrl: './hotProduct.component.html'
  })
export class HotProductComponent implements OnInit {

  status: Number;
  showContent: Number;
  hotProducts: {};
  active   : string;
  hot : string

  constructor(private http:Http,private productListService:ProductListService, private router:Router) {}

  ngOnInit(): void {

    this.status = 1;
    this.showContent = 1;
    this.hot = "hot";
    
    let that  = this;
    that.productListService.getList({
      orderType : 0
    }).then(function(res){
      that.hotProducts = res;
    });
  }

  goToDetail(): void {
    console.log('gotoDetail')
  }

  clickProduct(): void {
    console.log('clickProduct')
  }

}

