import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ProductListService }  from '../../../../app/service/productList.service';

@Component({
    selector: 'app-insurance1',
    styleUrls: ['./insurance1.component.scss'], 
    templateUrl: './insurance1.component.html'
  })
export class Insurance1Component implements OnChanges {

    @Input() routerParam: Object;
    @Input() param:       Object;
    @Input() submitParam: Object;

    list:     Array<Object>;
    list1:    Array<Object>;
    status:   Object;
    chosed:   any;
    protocol: Object;


    constructor(private productListService: ProductListService) {}

    ngOnChanges(): void {
        this.initData();
        this.RenderData();
    }

    initData() {
        this.chosed = false;
        this.protocol = {
            pre: '本人已阅读',
            mid: '产品及购买说明',
            after: '且理解上述内容，签约地点为北京',
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
            this.list = [
                {
                    left : '购买金额',
                    right: '10',
                    unit : '元',
                }
            ];
            this.list1 = [
                {
                    left : '真实姓名',
                    right: '真的啊',
                },
                {
                    left : '身份证号',
                    right: '123456*****',
                },
                {
                    left : '手机号码',
                    input: true,
                    inputModel: '',
                    placeholder: '请输入手机号码'
                },
                {
                    left : '电子邮箱',
                    input: true,
                    inputModel: '',
                    placeholder: '请输入电子邮箱'
                },
                {
                    left: '常住区域',
                    needArrow: true,
                    placeholder: '请选择省、市、区'
                },
                {
                    left: '详细地址',
                    textareaPH: '请输入详细地址',
                    inputModel: '',
                    textarea : true
                },
            ];
        }

        // 配置按钮
        this.status = {
            type : +this.chosed ? 1 : 2,
            text : '提交'
        };
    }

    updateChosed(chosed) {
        // 接收子組件選中消息并更新當前component（把購買按鈕變成可點擊態）
        this.chosed = chosed;
        this.status = {
            type: + this.chosed
                ? 1
                : 2,
            text: '提交'
        };
    }

    // 保单第二个list输入框变化的时候，子组件会调用这个函数并且把新的object的值返回
    updateList(data){
        console.log(data);
    }

}