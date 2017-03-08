import {Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import  {ProductListService}  from '../../../app/service/productList.service';

@Component({
    selector: 'app-list-product',
    styleUrls: ['./productList.component.scss'], 
    templateUrl: './productList.component.html'
  })
export class ProductListComponent implements OnInit {

  active: string;
  productList: {};
  productTypes: Array<string>;
  list: string;
  ptIndex: number;

  constructor(private http: Http,private productListService: ProductListService) {}

  ngOnInit(): void {
    this.productTypes = ['全部产品', '定期理财', '基金'];
    this.list = 'list';
    this.ptIndex = 0;
    let that  = this;
    that.productListService.getList({
      orderType : 0
    }).then(function(res){
      that.productList = res;
    });
  }

  goDetail(): void {
    console.log('goDetail')
  }

  changeType(type): void{
    this.ptIndex = type;
  }

}

