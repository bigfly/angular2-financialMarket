import { Http, Response } from '@angular/http';
import { Component, OnInit, Input, Renderer, OnChanges, SimpleChange} from '@angular/core';
const echarts = require('echarts');

@Component({
    selector: 'app-echart',
    styleUrls: ['./echart.component.scss'],
    templateUrl: './echart.component.html'
  })

export class EchartComponent implements OnChanges {

    @Input() option: Object;
    basic_lines;

    constructor(private renderer: Renderer) {}

    ngOnChanges() {
        console.log('echarts is onChange');
    }

}