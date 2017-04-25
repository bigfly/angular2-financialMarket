import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ProductListService }  from '../../../app/service/productList.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-insurance-orderlist',
    styleUrls: ['./insuranceOrderList.component.scss'], 
    templateUrl: './insuranceOrderList.component.html'
  })
export class InsuranceOrderListComponent implements OnInit {

  @Input() type;

  list: Array<Object> = [];

  constructor( private productListService: ProductListService, private router: Router ) {}

  ngOnInit(): void {
    this.getData();
  }

  /**
   * @desc 请求数据
   */
  getData(): void{
    let that = this;
    this.productListService.getList('insuranceOrderList').then(function(res){
        let data = res['data']['list'];
        that.makeData(data);
    });
  }

  makeData(data){
      let that = this;
      for(let i = 0; i < data.length; i++){
          let v = data[i];
          that.list.push({
            name : v.productName,
            text : {
              tip: that.checkStatus(v.orderStatus)['text'],
              class: that.checkStatus(v.orderStatus)['class']
            },
            totalAmount: v.investAmount,
            expectIncome: v.hasIncome
          })
      }
  }

  checkStatus(status){
      if(status == 1){
          return {
            text:'处理中',
            class:'state1'
          }
      }else if(status == 2){
          return {
            text:'已承保',
            class:'state1'
          }
      }else if(status == 3){
          return {
            text:'退保中',
            class:'state2'
          }
      }else if(status == 4){
          return {
            text:'已退保',
            class:'state2'
          }
      }else if(status == 5){
          return {
            text:'已理赔',
            class:'state3'
          }
      }
  }

}

