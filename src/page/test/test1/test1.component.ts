import { Component } from '@angular/core';
import { FormControl,FormGroup,FormBuilder } from '@angular/forms';
import { ProductListService } from '../../../app/service/productList.service';
import 'rxjs/Rx';

@Component({
    selector: 'test1',
    styleUrls: ['./test1.component.scss'],
    templateUrl: './test1.component.html'
  })
export class Test1Component {
    searchField: FormControl;
    coolForm: FormGroup;

    constructor(private searchService:ProductListService, private fb:FormBuilder) {
        this.searchField = new FormControl();
        this.coolForm = fb.group({search: this.searchField});

        var that  = this;
        this.searchField.valueChanges
          .debounceTime(400)
            // .switchMap(function(term){
            //     console.log(term)
            //     return that.searchService.testSearch(term)
            // })
            .subscribe((result) => {
                // this.result = result.artists.items
                console.log(result)
                that.searchService.testSearch(result);
            });
    }
}
