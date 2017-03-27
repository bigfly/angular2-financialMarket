import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ProductListService }  from '../../../app/service/productList.service';

@Component({
    selector: 'app-insurance-detail',
    styleUrls: ['./insurance.component.scss'], 
    templateUrl: './insurance.component.html'
  })
export class InsuranceDetailComponent implements OnInit {

    @Input() param: Object;

    statusText:     Object;
    detailInfo:     Object;
    headerParam:    Object;
    productImfor:   Array<any>;
    list:           Array<Object>;
    sList:          Array<Object>;
    status:         Object;
    extraList:      Array<string>;

    constructor(private http: Http,private productListService: ProductListService, 
                private router: Router) {}

    ngOnInit(): void {
        this.initData();
        this.getData();
    }

    initData(): void{

        this.extraList = [
            '注：',
            '1）本产品只能为本人投保，本产品受益人为法定',
            '2）产品名称：中华长盈1号终身寿险（万能型）',
            '3）报备文件编号：中华人寿发[2016]13号',
            '4）本产品结算利率超过最低保证利率的部分是不确定的',
            '5）本产品销售主体为中捷保险经纪股份有限公司，中华人寿为承保公司'
        ];

        // 配置产品信息所需参数
        this.productImfor = [{
            title: '高收益',
            content: ': 历史年化结算利率5.0%'
        },{
            title: '灵活领取',
            content: ': 1年后领取免退保手续费'
        },{
            title: '享保障',
            content: ': 身故赔付账户价值的120%'
        },{
            title: '有保底',
            content: ': 最低保证年利率2.5%'
        },{
            title: '“0”费用',
            content: ': 零初始费用、零保单管理费用'
        },{
            title: '低门槛',
            content: ': 最低1000元起售'
        }];

        this.statusText = {
            '1' : '本产品尚未开始',
            '2' : '去购买',
        };

    }

    getData(): void{
        let that = this;
        this.productListService.getList('insuranceDetail').then(function(res){
            let detail = res['data'];

            // 配置头图所需参数
            that.headerParam = {
                companyName : detail.merchantShortName,
                rate        : detail.expectInvestRate,
                productName : detail.productName,
                background  : './images/insuranceDetail.png'
            }

            // 配置list所需参数
            that.list = [{
              title: '购买金额',
              content: detail.minInvestAmount / 100 + '元起购且为' + detail.appendAmount / 100 + '的整数倍',
              bg: 'MoneyTip'
            },{
              title: '收益规则',
              content: '支付成功之日起第2个自然日开始计算收益，第3个自然日显示昨日收益',
              bg: 'BackIntro'
            },{
              title: '回款方式',
              content: '申请退保，资金将在3个工作日内转入原支付账户(具体到账时间视银行而定)',
              bg: 'BuyBack'
            }]

            that.sList = [{
              title: '地域说明',
              content: '本产品销售区域为北京，由中华联合人寿保险股份有限公司承保，目前该公司尚未在北京以外的地区开设分支机构，对于在北京以外地区的客户，可能存在后续服务不到位、时效差等问题，但理赔结果不受影响。',
              bg: 'LocationTip'
            },{
              title: '费用说明',
              content: '',
              bg: 'MoneyTip'
            }]

            // 配置按钮
            that.status = {
                type : detail.productStatus === 2 ? 1 : 2,
                text : that.statusText[detail.productStatus] || '本产品结束'
            };

        });
    }

}