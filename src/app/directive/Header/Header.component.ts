import { Http, Response } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    styleUrls: ['./Header.component.scss'],
    templateUrl: './Header.component.html'
  })
export class HeaderComponent implements OnInit {

    @Input() headerParam: Object;
    @Input() type: Number;

    constructor() {}

    ngOnInit(): void {

    }

}

