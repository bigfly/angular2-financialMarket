import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductListService }  from '../../app/service/productList.service';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'app-orderlist',
    templateUrl: './index.html'
  })
export class IndexOrderListComponent implements OnInit {

  routerParam: Object;
  param:       Object;

  constructor(private http: Http, private router: ActivatedRoute, private productListService: ProductListService) {}

  ngOnInit(): void {
      let that = this;
      this.router.params.subscribe(function(params){
        that.routerParam = params;
      });
  }

}

