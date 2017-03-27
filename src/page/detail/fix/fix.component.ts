import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ProductListService }  from '../../../app/service/productList.service';

@Component({
    selector: 'app-fix-detail',
    styleUrls: ['./fix.component.scss'], 
    templateUrl: './fix.component.html'
  })
export class FixDetailComponent implements OnInit {

    param:       Object;
    @Input() routerParam: Object;

    constructor(private productListService: ProductListService) {}

    ngOnInit(): void {
        this.getData();
    }

    getData(){
        let that = this;
        this.productListService.getList('fixDetail').then(function(res){
            that.param = res['productDetail'];
        });
    }

}

