import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import {ProductListService} from '../../../../app/service/productList.service';

@Component({selector: 'app-fix1', styleUrls: ['./fix1.component.scss'], templateUrl: './fix1.component.html'})
export class Fix1Component implements OnChanges {

    @Input() routerParam: Object;
    @Input() param:       Object;

    list:       Array < Object >;
    list1:      Array < Object >;
    status:     Object;
    chosed:     any;
    protocol:   Object;

    constructor(private productListService : ProductListService) {}

    ngOnChanges(): void {
        this.initData();
        this.RenderData();
    }

    initData() {
        this.chosed = false;
        this.protocol = {
            pre: '已阅读并同意',
            mid: '《借款及担保协议》',
            after: ''
        }
    }

    RenderData() {
        if (this.param) {
            let productDetail = this.param['productDetail'];
            //配置第一個列表
            this.list = [
                {
                    left: '剩余金额',
                    right: '10',
                    unit: '元'
                }, {
                    left: '预期年化收益率',
                    right: '7',
                    unit: '%'
                }
            ];
            //配置第二個列表
            this.list1 = [
                {
                    left: '购买金额',
                    unit: '元',
                    input: true,
                    placeholder: '请输入' + productDetail['minInvestAmount'] / 100 + '的整数倍'
                }, {
                    left: '使用优惠券',
                    needArrow: true,
                    arrowText: '优惠券'
                }
            ];
        }
        // 配置按钮
        this.status = {
            type: + this.chosed
                ? 1
                : 2,
            text: '购买'
        };
    }

    updateChosed(chosed) {
        // 接收子組件選中消息并更新當前component（把購買按鈕變成可點擊態）
        this.chosed = chosed;
        this.status = {
            type: + this.chosed
                ? 1
                : 2,
            text: '购买'
        };
    }

}
