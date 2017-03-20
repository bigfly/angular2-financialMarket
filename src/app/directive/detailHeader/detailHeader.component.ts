import { Http, Response } from '@angular/http';
import { Component, OnInit,Injectable,Input,ElementRef,ViewChild} from '@angular/core';

@Component({
    selector: 'app-detail-header',
    styleUrls: ['./detailHeader.component.scss'],
    templateUrl: './detailHeader.component.html'
  })
export class DetailHeaderComponent implements OnInit {

    @Input() headerParam: Object;
    @Input() type: Number;

    constructor() {}

    ngOnInit(): void {
        console.log(this.headerParam)
    }

}

