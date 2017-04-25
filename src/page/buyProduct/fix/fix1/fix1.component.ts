import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import {Router} from '@angular/router';
import {ProductListService} from '../../../../app/service/productList.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';

@Component({selector: 'app-fix1', styleUrls: ['./fix1.component.scss'], templateUrl: './fix1.component.html'})
export class Fix1Component implements OnChanges {

    @Input() routerParam: Object;
    @Input() param:       Object;

    list:       Array < Object >;
    list1:      Array < Object >;
    status:     Object;
    chosed:     any;
    protocol:   Object;
    buyAmount:  any;
    form;

    constructor(private productListService : ProductListService,private http: Http) {

    }

    ngOnChanges(): void {
        this.initData();
        this.RenderData();
    }

    initData() {
        this.chosed = false;
        this.protocol = {
            pre: '已阅读并同意',
            mid: '《借款及担保协议》',
            after: '',
            openUrl: [{
                text: '1',
                url : 'url1'
            },{
                text: '2',
                url : 'url2'
            },{
                text: '3',
                url : 'url4'
            }]
        }
    }

    RenderData() {
        if (this.param) {
            let productDetail = this.param['productDetail'];
            // 配置第一個列表
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
            // 配置第二個列表
            this.list1 = [
                {
                    left: '购买金额',
                    unit: '元',
                    input: true,
                    inputModel: '',
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

    // 接收子組件選中消息并更新當前component（把購買按鈕變成可點擊態）
    updateChosed(chosed) {
        this.chosed = chosed;
        this.status = {
            type: + this.chosed && this.buyAmount ? 1 : 2,
            text: '购买'
        };
    }

    // 输入金额的时候的子组件回调
    updateList(data){
        console.log('updateList');
        this.buyAmount = data[0].inputModel;
        this.status = {
            type: +this.chosed && this.buyAmount ? 1 : 2,
            text: '购买'
        };
    }

}
