import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ProductListService }  from '../../../app/service/productList.service';

@Component({
    selector: 'app-fund-detail',
    styleUrls: ['./fund.component.scss'], 
    templateUrl: './fund.component.html'
  })
export class FundDetailComponent implements OnInit {

    param: Object;
    @Input() routerParam: Object;

    constructor(private productListService: ProductListService) {}

    ngOnInit(): void {
        this.getData();
    }

    getData(){
        let that = this;
        this.productListService.getList('fundDetail').then(function(res){
            that.param = res['data'];
        });
    }

}