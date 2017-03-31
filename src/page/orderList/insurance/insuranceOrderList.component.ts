import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ProductListService }  from '../../../app/service/productList.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-insurance-orderlist',
    styleUrls: ['./insuranceOrderList.component.scss'], 
    templateUrl: './insuranceOrderList.component.html'
  })
export class InsuranceOrderListComponent implements OnInit {

  data: Object;

  constructor( private productListService: ProductListService, private router: Router ) {}

  ngOnInit(): void {
    this.getData();
  }

  /**
   * @desc 请求数据
   */
  getData(): void{
    let that = this;
    this.productListService.getList('myAssets').then(function(res){
      that.data = res;
    });
  }

}

