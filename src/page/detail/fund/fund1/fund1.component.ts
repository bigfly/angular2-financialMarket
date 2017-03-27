import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ProductListService }  from '../../../../app/service/productList.service';

@Component({
    selector: 'app-fund1',
    styleUrls: ['./fund1.component.scss'], 
    templateUrl: './fund1.component.html'
  })
export class Fund1Component implements OnChanges {

    @Input() param:       Object;
    @Input() routerParam: Object;

    buttonStatus:    Object;
    subButtonStatus: Object;
    url:             String;
    headerParam:     Object;
    clicked:         Number;
    state:           Number;
    urls:            Array<Object>;
    echartData:      Object;
    option:          Object;

    constructor(private http: Http,private productListService: ProductListService, 
                private router: Router) {}

    ngOnChanges(): void {
        this.initData();
        if(this.param){
            this.RenderData();
        }
    }

    initData(): void {
        this.clicked = 1;
        this.state = 1;
        this.buttonStatus = 1;
        this.url = 'buyProduct/' + this.routerParam['businessType'] + '/'
        + this.routerParam['productId'] + '/' + this.routerParam['productType'];
    }

    RenderData(): void{
        let that = this;

        let data = require('../../../../app/data/echart/echart-line');
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

            that.buttonStatus = {
                type : '1',
                text : '立即买入'
            };

            that.subButtonStatus = {
                type : '1',
                text : '申购费率' + +detail.discount * 10 + '折'
            }

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
        if (type === 1) {
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