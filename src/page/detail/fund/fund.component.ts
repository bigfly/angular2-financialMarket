import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ProductListService }  from '../../../app/service/productList.service';

@Component({
    selector: 'app-fund-detail',
    styleUrls: ['./fund.component.scss'], 
    templateUrl: './fund.component.html'
  })
export class FundDetailComponent implements OnInit {

    headerParam;
    urls: Array<Object>;

    constructor(private http: Http,private productListService: ProductListService, 
                private router: Router) {}

    ngOnInit(): void {
        this.initData();
        this.getData();
    }

    initData(): void {

    }

    getData(): void{
        let that = this;
        this.productListService.getList('fundDetail').then(function(res){
            let detail = res['data'];

            that.urls = [{
              title: '业绩表现',
              url  : '234'
            },{
              title: '交易须知',
              url  : '234'
            },{
              title: '基金介绍',
              url  : '234'
            },{
              title: '基金经理',
              url  : '234'
            }];

            that.headerParam = {
              fundName : 1,
              fundType: '123',
              riskLevel: '1',
              dayRate:'1',
              netValueDate:'1',
              netValue:'2',
              risk : ['','低风险','较低风险','适中风险','较高风险','高风险']
            }

        });
    }

}