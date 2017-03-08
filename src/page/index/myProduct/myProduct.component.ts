import {Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
    selector: 'app-list-product',
    styleUrls: ['./myProduct.component.scss'], 
    templateUrl: './myProduct.component.html'
  })
export class MyProductComponent implements OnInit {

  my : string

  constructor(private http:Http) {}

  ngOnInit(): void {
    this.my = "my";
  }

  goToDetail(): void {
    console.log('gotoDetail')
  }

  clickProduct(): void {
    console.log('clickProduct')
  }

}

