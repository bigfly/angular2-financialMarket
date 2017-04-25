import { Component, OnInit, Input } from '@angular/core';
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

  @Input() type;

  list: Array<Object> = [];

  constructor(private productListService: ProductListService, 
              private router: Router) {}

  ngOnInit(): void {
      this.getData();
  }

  getData(): void{
    let that = this;
    this.productListService.getList('fixOrderList').then(function(res){
        let data = res['data']['list'];
        that.makeData(data);
    });
  }

  makeData(data) {
      let that = this;
      for(let i = 0; i < data.length; i++){
          let v = data[i];
          that.list.push({
            name : v.productName + v.productCode,
            text : {
              tip: that.checkStatus(v.status)['text'],
              class: that.checkStatus(v.status)['class']
            },
            totalAmount: v.totalAmount,
            expectIncome: v.expectIncome,
            repayText: that.checkRepayTime(v.status,v.repayDate)
          })
      }
  }

  checkStatus(status){
      if(status == 2 || status == 8 ||  status == 3 || status == 4){
          return {
            text:'募集中',
            class:'state1'
          }
      }else if(status == 5){
          return {
            text:'开始计息',
            class:'state1'
          }
      }else if(status == 6){
          return {
            text:'开始回款',
            class:'state1'
          }
      }else if(status == 7){
          return {
            text:'全额本息已到账',
            class:'state2'
          }
      }else if(status == 9){
          return {
            text:'购买失败',
            class:'state3'
          }
      }
  }

  checkRepayTime(status, time){
      if(status <= 5){
          return '预计到期日' +  time + '(到期后2~3个工作日到账)';
      }else if(status == 6){
          return '已于' + time + '到期(到期后2~3个工作日到账)';
      }else if(status == 7){
          return '已于' + time + '到期';
      }else if(status == 8 || status == 9){
          return '预计到期日' +  time +  '(到期后2~3个工作日到账)';
      }
  }

  clickProduct(product): void {
    // this.router.navigate(['detail/' + product['businessType'] + '/' + product['productId'] + '/' + product['productType']]);
  }

}