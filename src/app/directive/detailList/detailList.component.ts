import { Http, Response } from '@angular/http';
import { Component, OnInit,Injectable,Input,ElementRef,ViewChild} from '@angular/core';

@Component({
    selector: 'app-detail-list',
    styleUrls: ['./detailList.component.scss'],
    templateUrl: './detailList.component.html'
  })
export class DetailListComponent implements OnInit {

    @Input() list: any;

    constructor() {}

    ngOnInit(): void {

    }


}

