import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ProductListService }  from '../../../app/service/productList.service';

@Component({
    selector: 'app-fund-orderlist',
    styleUrls: ['./fundOrderList.component.scss'], 
    templateUrl: './fundOrderList.component.html'
  })
export class FundOrderListComponent implements OnInit {

  data:    Object;

  constructor(private productListService: ProductListService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    let that = this;
    this.productListService.getList('productList').then(function(res){
      that.data = res;
    });
  }

}

