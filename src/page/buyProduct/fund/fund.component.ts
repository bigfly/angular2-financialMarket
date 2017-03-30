import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ProductListService }  from '../../../app/service/productList.service';

@Component({
    selector: 'app-fund-buy',
    styleUrls: ['./fund.component.scss'], 
    templateUrl: './fund.component.html'
  })
export class FundBuyComponent implements OnInit {

  @Input() routerParam: Object;

  param:       Object;

  constructor(private productListService: ProductListService) {}

  ngOnInit(): void {
      this.getData();
  }

  getData(){
      let that = this;
      this.productListService.getList('fundBuy').then(function(res){
          that.param = res['data'];
      });
  }

}