import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ProductListService }  from '../../../app/service/productList.service';

@Component({
    selector: 'app-fix-buy',
    styleUrls: ['./fix.component.scss'], 
    templateUrl: './fix.component.html'
  })
export class FixBuyComponent implements OnInit {

  @Input() routerParam: Object;

  param:       Object;

  constructor(private productListService: ProductListService) {}

  ngOnInit(): void {
      this.getData();
  }

  getData(){
      let that = this;
      this.productListService.getList('fixBuy').then(function(res){
          that.param = res['data'];
      });
  }

}

