import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ProductListService }  from '../../../app/service/productList.service';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'app-fix-orderlist',
    styleUrls: ['./FixOrderList.component.scss'],
    templateUrl: './FixOrderList.component.html'
  })
export class FixOrderListComponent implements OnInit {

  fixOrderList: {};

  constructor(private productListService: ProductListService, 
              private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    let that = this;
    this.productListService.getList('productList').then(function(res){
      that.fixOrderList = res;
    });
  }

  clickProduct(product): void {
    this.router.navigate(['detail/' + product['businessType'] + '/' + product['productId'] + '/' + product['productType']]);
  }

}