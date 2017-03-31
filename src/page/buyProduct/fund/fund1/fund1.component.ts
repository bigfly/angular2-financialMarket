import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import {ProductListService} from '../../../../app/service/productList.service';

@Component({selector: 'app-fund1', styleUrls: ['./fund1.component.scss'], templateUrl: './fund1.component.html'})
export class Fund1Component implements OnChanges {

    @Input()routerParam: Object;
    @Input()param:       Object;

    headerParam:    Object;
    tips:           Array < String >;
    protocol:       Object;
    status:         Object;
    buyNumber:      Number;

    constructor(private productListService: ProductListService) {}

    ngOnChanges(): void {
        this.initdata();
        this.getData();
    }

    update(value) {
        this.status = {
            type : value ? 1 : 2,
            text : '确认购买'
        };
    }

    initdata() {
        let param = this.param;

        // 渲染提示列表
        this.tips = ['工作日15:00前完成支付，将按当日净值确认份额。', '工作日15:00后及节假日完成支付，将按下一工作日净值确认份额。', '确认后下一个交易日可卖出。', 'QDII基金申购及确认份额时间以基金公司公告为准。'];

        // 配置点击协议
        this.protocol = {
            pre: '同意',
            mid: '《相关协议》',
            after: '',
            openUrl: [
                {
                    text: '1',
                    url: 'url1'
                }, {
                    text: '2',
                    url: 'url2'
                }, {
                    text: '3',
                    url: 'url4'
                }
            ]
        };

        // 配置按钮
        this.status = {
            type : this.buyNumber ? 1 : 2,
            text : '确认购买'
        };

        // 渲染头图
        if (param) {
            this.headerParam = {
                name: param['fundName'],
                netValue: param['netValue'],
                minPurchaseAmt: param['minPurchaseAmt']
            }
        }
    }


    getData() {}

}