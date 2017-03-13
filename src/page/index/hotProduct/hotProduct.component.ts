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

  status: Number;
  showContent: Number;
  hotProducts: {};
  active: string;
  state: string;
  test: string;

  constructor(private http: Http,private productListService: ProductListService, 
              private router: Router,private alertCtrl: AlertController) {}

  ngOnInit(): void {
    this.status = 1;
    this.showContent = 1;
    this.state = 'hot';
    this.getData();
  }

  getData(): void{
    var that = this;
    this.productListService.getList('productList').then(function(res){
      that.hotProducts = res;
    });
  }

  goToDetail(): void {
    // this.router.navigate([tab])
  }

  clickProduct(): void {
    console.log('clickProduct')
  }

  showPopup(title, text) {
    let popup = this.alertCtrl.create({
      title: '123',
      subTitle: 't123ext',
      buttons: [
       {
         text: 'OK'
       }
     ]
    });
    popup.present();
  }
}

