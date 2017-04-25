import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-orderlist',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'], 
  })
export class IndexOrderListComponent implements OnInit {

  routerParam: Object;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
      let that = this;
      this.router.params.subscribe(function(params){
          that.routerParam = params;
      });
  }

}

