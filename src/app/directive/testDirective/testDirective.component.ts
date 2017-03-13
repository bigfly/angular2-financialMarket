import { Http, Response } from '@angular/http';
import { Component, OnInit,Injectable,Input,ElementRef,ViewChild} from '@angular/core';

@Component({
    selector: 'app-test-directive',
    styleUrls: ['./testDirective.component.scss'],
    templateUrl: './testDirective.component.html'
  })
export class TestDirectiveComponent implements OnInit {

    @Input() test: string;

    constructor() {}

    ngOnInit(): void {

    }

    changeTest(): void{
        this.test = '234';
    }

}

