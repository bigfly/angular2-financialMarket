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
    clicked: Number;
    urls: Array<Object>;
    echartData: Object;
    option: Object;
    state: Number;
    test;

    constructor(private http: Http,private productListService: ProductListService, 
                private router: Router) {}

    ngOnInit(): void {
        this.initData();
        this.getData();
    }

    initData(): void {
        this.clicked = 1;
        this.state = 1;
    }

    getData(): void{
        let that = this;

        let data = require('../../../app/data/echart/echart-line');
        this.echartData = data;

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

            that.headerParam = Object.assign(detail,{
              risk: ['', '低风险', '较低风险', '适中风险', '较高风险', '高风险']
            });

        });

        this.changeTime(this.clicked);

    }

    changeTime(index): void{
        let that = this;
        // index是请求参数之一
        if (this.state === 1){
            this.clicked = index;
            this.productListService.getList('changeTime').then(function(res){
                let timeData = res['data'];
                that.renderData(timeData.fundList, timeData.stockList, 1);
            });
        }else{
            this.productListService.getList('changeState').then(function(res){
                let timeData = res['data'];
                that.renderData(timeData, [] , 2);
            })
        }
    }

    changeState(index: Number): void{
        let that = this;
        this.state = index;
        this.changeTime(this.clicked);
    }

    renderData(fdata, sdata, type): void{
        let eData = this.echartData;
        if (type === 1){
            eData['xAxis'].data = fdata.timeLine;
            eData['series'][0].data = fdata.value;
            eData['series'][1].data = sdata && sdata.value;
            eData['series'][0]['itemStyle'].normal = {};
            eData['xAxis'].axisLabel.interval = parseInt(String((fdata['value'].length - 3)/2), 10);
        }else {
            eData['xAxis'].data = fdata.valueDate;
            eData['series'][0].data = fdata.netValue;
            eData['series'][1].data = sdata && sdata.value;
            eData['series'][0].itemStyle.normal.areaStyle = {
                type: 'default',
                color: '#ffefde',
                opacity: '0.5'
            }
            eData['xAxis'].axisLabel.interval = parseInt(String((fdata['valueDate'].length - 3)/2), 10);
        }
        this.option = Object.assign({}, eData);
    }
    

}