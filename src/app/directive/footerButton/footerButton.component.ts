import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Component, OnInit,Injectable,Input,ElementRef,ViewChild} from '@angular/core';

@Component({
    selector: 'app-footer-button',
    styleUrls: ['./footerButton.component.scss'],
    templateUrl: './footerButton.component.html'
  })
export class FooterButtonComponent implements OnInit {

    @Input() status: Object;
    @Input() url: String;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    goUrl(): void {
        console.log(this.url)
        this.router.navigate([this.url]);
    }


}

