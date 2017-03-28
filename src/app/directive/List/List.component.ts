import {Http, Response} from '@angular/http';
import {Component, OnInit, Input, ElementRef, ViewEncapsulation} from '@angular/core';

@Component({selector: 'app-list', styleUrls: ['./List.component.scss'], templateUrl: './List.component.html'})
export class ListComponent implements OnInit {

    @Input()list : Array < Object >;;
    @Input()type : string;
    @Input()extraList : Array < any >;
    @Input()urls : Array < Object >;;
    @Input()productImfor : Array < Object >;

    constructor() {}

    ngOnInit() : void {}

}
