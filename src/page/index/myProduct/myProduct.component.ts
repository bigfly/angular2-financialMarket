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

  state: String;
  productTypes: Object;
  data: {};

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
    // 右上角
    // let hasPlugin = window.RightNavigationBar && window.RightNavigationBar.setRightNavigationItem;
    // if (hasPlugin) {
    //     window.rightBarCallback = function() {
    //         $state.go('jdbAppTradeFinancialMarketxRecord');
    //     };
    // }

    this.getData();
    // setRightBar('交易记录');
  }

  // 离开
  // $scope.$on('$ionicView.beforeLeave', function () {
  //     setRightBar();
  // });

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
    this.router.navigate(['OwnProduct']);
  };

  setRightBar(title): void{
      // var callback = 'rightBarCallback';
      // hasPlugin && RightNavigationBar.setRightNavigationItem(title, '', callback, '', angular.noop, angular.noop);
  }

}

