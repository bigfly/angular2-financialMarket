import {Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import  {ProductListService}  from "../../../app/service/productList.service" 

@Component({
    selector: 'app-list-product',
    styleUrls: ['./productList.component.scss'], 
    templateUrl: './productList.component.html'
  })
export class ProductListComponent implements OnInit {

  active        : string
  productList   : {}
  productTypes  : {}
  list          : string

  constructor(private http:Http,private productListService:ProductListService) {}

  ngOnInit(): void {

    this.productTypes = {
        '0': '全部产品',
        '2': '定期理财',
        '4': '基金'
    }
    this.list = "list";
    let that  = this;
    
    that.productListService.getList({
      orderType : 0
    }).then(function(res){
      that.productList = res;
    });
  }

  goToDetail(): void {
    console.log('gotoDetail')
  }

  clickProduct(): void {
    console.log('clickProduct')
  }

}

