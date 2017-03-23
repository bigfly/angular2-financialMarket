import { Http, Response } from '@angular/http';
import { Component, OnInit,Injectable,Input,ElementRef,ViewChild} from '@angular/core';

@Component({
    selector: 'app-footer-button',
    styleUrls: ['./footerButton.component.scss'],
    templateUrl: './footerButton.component.html'
  })
export class FooterButtonComponent implements OnInit {

    @Input() status: Object;

    constructor() {}

    ngOnInit(): void {}


}

