import {Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import {ProductListService}  from '../../../app/service/productList.service';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'app-hot-product',
    styleUrls: ['./hotProduct.component.scss'],
    templateUrl: './hotProduct.component.html'
  })
export class HotProductComponent implements OnInit {

  showContent: Number;
  hotProducts: {};
  state: string;

  test1;
  test2;

  constructor(private http: Http,private productListService: ProductListService, 
              private router: Router,private alertCtrl: AlertController) {}

  ngOnInit(): void {
    this.showContent = 1;
    this.state = 'hot';
    this.getData();

    this.test1 = 'test1';
    this.test2 = 'test2';
    let that = this;

  }

  getData(): void{
    let that = this;
    this.productListService.getList('productList').then(function(res){
      that.hotProducts = res;
    });
  }

  clickProduct(product): void {
    this.router.navigate(['detail/' + product['businessType'] + '/' + product['productId'] + '/' + product['productType']]);
  }

}