import { Http, Response } from '@angular/http';
import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-protocol',
    styleUrls: ['./Protocol.component.scss'],
    templateUrl: './Protocol.component.html'
  })
export class ProtocolComponent implements OnChanges {

    @Input() param:  Object;
    @Input() chosed: any;

    @Output() updateChosed: EventEmitter<number> = new EventEmitter();

    constructor() {}

    ngOnChanges(): void {

    }

    protocol() {
        this.chosed = !this.chosed;
        this.updateChosed.emit(this.chosed);
    }

}

