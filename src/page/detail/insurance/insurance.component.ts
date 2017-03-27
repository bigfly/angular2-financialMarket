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

    param: Object;
    @Input() routerParam: Object;

    constructor(private productListService: ProductListService) {}

    ngOnInit(): void {
        this.getData();
    }

    getData(){
        let that = this;
        this.productListService.getList('insuranceDetail').then(function(res){
            that.param = res['data'];
        });
    }

}