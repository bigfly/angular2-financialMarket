import {Component, OnInit} from '@angular/core';
import {Http, Response } from '@angular/http';
import {ProductListService}  from '../../../app/service/productList.service';
import {Router } from '@angular/router';


@Component({
    selector: 'app-list-product',
    styleUrls: ['./myProduct.component.scss'], 
    templateUrl: './myProduct.component.html'
  })
export class MyProductComponent implements OnInit {

  state:        String;
  productTypes: Object;
  data:         Object;

  constructor(private http: Http,private productListService: ProductListService,private router: Router) {}

  ngOnInit(): void {
    // 产品类型
    this.productTypes = { 
        '0': '全部产品',
        '2': '定期理财',
        '3': '保险理财',
        '4': '基金'
    };
    this.state = 'my';
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

  /**
   * @desc 跳转收益
   */
  goProfit(type):void {
    this.router.navigate(['Profit']);
  };

  /**
   * @desc 跳订单详情
   */
  goDetail(type):void {
    this.router.navigate(['orderList/2/1']);
  };

}

