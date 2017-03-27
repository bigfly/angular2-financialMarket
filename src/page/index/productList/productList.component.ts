import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ProductListService }  from '../../../app/service/productList.service';

@Component({
    selector: 'app-list-product',
    styleUrls: ['./productList.component.scss'], 
    templateUrl: './productList.component.html'
  })
export class ProductListComponent implements OnInit {

  productList:    Object
  productType:    Array<string>;
  productTypes:   Object;
  state:          string;
  ptIndex:        number;

  constructor(private http: Http,private productListService: ProductListService,private router: Router) {}

  ngOnInit(): void {
    this.productType = ['全部产品', '定期理财', '基金'];
    this.productTypes = {
        '0': '全部产品',
        '2': '定期理财',
        // '3': '保险理财',
        '4': '基金'
    }
    this.state = 'list';
    this.ptIndex = 0;
    this.getData();
  }

  getData(): void{
    let that = this;
    this.productListService.getList('productList').then(function(res){
      that.productList = res;
    });
  }

  goDetail(product): void {
    this.router.navigate(['detail/' + product['businessType']]);
  }

  changeType(type): void{
    this.ptIndex = type;
  }

}

