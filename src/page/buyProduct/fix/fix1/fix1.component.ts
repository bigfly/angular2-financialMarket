import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ProductListService }  from '../../../../app/service/productList.service';

@Component({
    selector: 'app-fix1',
    styleUrls: ['./fix1.component.scss'], 
    templateUrl: './fix1.component.html'
  })
export class Fix1Component implements OnChanges {

  @Input() routerParam: Object;
  @Input() param:       Object;

  list: Array<Object>;

  constructor(private productListService: ProductListService) {}

  ngOnChanges(): void {
      this.initData();
      this.RenderData();
  }

  initData() { 

  }

  RenderData() {
      this.list = [
          {
              left : '剩余金额',
              right: '10',
              unit : '元'
          },
          {
              left : '预期年化收益率',
              right: '7',
              unit : '%'
          }
      ]
  }

}

