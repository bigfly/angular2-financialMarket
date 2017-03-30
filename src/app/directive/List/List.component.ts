import { Http, Response} from '@angular/http';
import { Component, OnChanges, Input, EventEmitter, Output , Inject} from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({selector: 'app-list', styleUrls: ['./List.component.scss'], templateUrl: './List.component.html',providers: [FormBuilder]})
export class ListComponent implements OnChanges {

    @Input()list: Array < Object > = [{}];
    @Input()type: string;
    @Input()extraList: Array < any >;
    @Input()urls: Array < Object >;;
    @Input()productImfor: Array < Object >;

    inputModel;
    form;

    @Output() updateList: EventEmitter<any> = new EventEmitter();

    constructor(private formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            input: '',
            inputArea:''
        })

        this.form.valueChanges.subscribe(data => {
            this.updateList.emit(this.list);
        })
    }

    ngOnChanges() : void {

    }

    type2Click(url){
        console.log(url)
    }

    // modelChange(e){
    //     setTimeout(()=>{
    //         this.updateList.emit(this.list);
    //     })
    // }

}
