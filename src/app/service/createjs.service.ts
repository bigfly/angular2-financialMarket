import { Injectable } from '@angular/core';
declare var createjs: any;

@Injectable()
export class MemMonService {

    createjs: any;

    constructor() {
        this.createjs = createjs;
    }

    createMemGauge() {
        return this.createjs;
    }
}

