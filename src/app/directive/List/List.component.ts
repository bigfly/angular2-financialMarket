import { Http, Response} from '@angular/http';
import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({selector: 'app-list', styleUrls: ['./List.component.scss'], templateUrl: './List.component.html',providers: [FormBuilder]})
export class ListComponent implements OnChanges {

    @Input() list: Array <Object> = [{}];
    @Input() type: string;

    inputModel;
    form;

    @Output() updateList: EventEmitter<any> = new EventEmitter();

    constructor(private formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            input: '',
            inputArea: ''
        });
        this.form.valueChanges.debounceTime(300).subscribe(data => {
            this.updateList.emit(this.list);
        });
    }

    ngOnChanges() : void {

    }

    type2Click(url){
        console.log(url)
    }
}
