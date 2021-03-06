import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-footer-button',
    styleUrls: ['./footerButton.component.scss'],
    templateUrl: './footerButton.component.html'
  })
export class FooterButtonComponent implements OnChanges {

    @Input() status: Object;
    @Input() url:    String;
    @Input() param:  Object;

    constructor(private router: Router) {}

    ngOnChanges(): void {

    }

    goUrl(): void {
        console.log(this.param);
        this.router.navigate([this.url]);
    }


}

