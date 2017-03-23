import { Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';

@Component({
    selector: 'app-test-directive',
    styleUrls: ['./testDirective.component.scss'],
    templateUrl: './testDirective.component.html'
  })
export class TestDirectiveComponent implements OnInit,OnChanges {


    @Input() test: any;

    constructor() {}

    ngOnInit() {
        console.log('onInit fired');
    }

    ngOnChanges(changes: any) {
        console.log('onChange fired', changes);
    }

}
