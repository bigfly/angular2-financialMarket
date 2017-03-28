import { Http, Response } from '@angular/http';
import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { NavController, AlertController, Toast, Loading, ActionSheetController } from 'ionic-angular';

@Component({
    selector: 'app-protocol',
    styleUrls: ['./Protocol.component.scss'],
    templateUrl: './Protocol.component.html'
  })
export class ProtocolComponent implements OnChanges {

    @Input() param:  Object;
    @Input() chosed: any;

    @Output() updateChosed: EventEmitter<number> = new EventEmitter();

    constructor(public actionSheetCtrl: ActionSheetController) {}

    ngOnChanges(): void {

    }

    clickProtocol() {
        this.chosed = !this.chosed;
        this.updateChosed.emit(this.chosed);
    }

    showProtocol(param){
        let button = [];
        if(param && param.length > 1){
            for ( let i = 0; i < param.length; i++) {
                button.push({
                    text: param[i].text,
                    handler: function(){
                        console.log(param[i].url);
                    }
                })
            }
            button.push({
                text: '取消',
                role: 'cancel'
            })
            let actionSheet = this.actionSheetCtrl.create({
                buttons: button
            });
            actionSheet.present();
        }else{
            console.log(param[0].url);
        }
    }

}

