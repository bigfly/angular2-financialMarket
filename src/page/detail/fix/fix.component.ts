import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ProductListService }  from '../../../app/service/productList.service';

@Component({
    selector: 'app-fix-detail',
    styleUrls: ['./fix.component.scss'], 
    templateUrl: './fix.component.html'
  })
export class FixDetailComponent implements OnInit {

    list;
    statusText;
    detailInfo: Object;
    headerParam: Object;
    status: Object;
    productImfor: Array<any>;
    extraList: Array<string>;

    constructor(private http: Http,private productListService: ProductListService, 
                private router: Router) {}

    ngOnInit(): void {
        this.initData();
        this.getData();
    }

    initData(): void{
        this.statusText = {
            '0' : '本标尚未开始，查看其他理财产品',
            '1' : '去购买',
            '2' : '去购买',
            '7' : '本标已完成，全额本息已到账'
        };
    }

    getData(): void{
        let that = this;
        this.productListService.getList('fixDetail').then(function(res){
            let detail = res['productDetail'];

            // 配置产品信息所需参数
            that.productImfor = [{
                title: '理财期限',
                content: detail.duration
            },{
                title: '投资金额',
                content: detail.minInvestAmount/100
            },{
                title: '回款方式',
                content: detail.repayWay
            },{
                title: detail.status < 5 ? '预计周期' : '计息周期',
                content: detail.calDescription
            }];

            let bg = {
                '0': 'ProductExplain',
                '1': 'Qualifications',
                '2': 'BackIntro',
                '3': 'MoneyTip'
            }

            that.extraList = ['募集截止后下一个工作日开始计息，还款日后1-3个工作日回款到账，遇节假日顺延'];

            if(detail.status !== 3 && detail.status !== 6 && detail.status !== 7){
                that.productImfor.unshift({
                    title: '剩余金额',
                    content: detail.leftAmount
                })
            }

            // 配置头图所需参数
            that.headerParam = {
                companyName : '九新金融',
                rate        : detail.rate,
                productName : detail.productName + '_' + detail.productCode,
                background  : './images/insuranceDetail.png'
            }

            // 配置list所需参数
            that.list = JSON.parse(detail.remark);
            for(let i = 0, length = that.list.length; i < length ; i++){
                that.list[i].bg = bg[i];
            }

            // 配置按钮
            that.status = {
                type : detail.status === 0 || detail.status === 1 || detail.status === 2 || detail.status === 7 ? 1 : 2,
                text : that.statusText[detail.status] || '本标募集截止'
            };

        });
    }

}

