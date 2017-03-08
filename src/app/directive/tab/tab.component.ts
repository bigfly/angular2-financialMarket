import { Component, OnInit,Injectable,Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})

@Injectable() 
export class TabComponent implements OnInit{

    @Input() state: string;
    hotClass: Object;
    listClass: Object;
    myClass: Object;
    constructor(private router: Router) {}

    ngOnInit(): void {
      this.hotClass = {
        'tab-item-active': this.state === 'hot' ,
      };
      this.listClass = {
        'tab-item-active': this.state === 'list' ,
      };
      this.myClass = {
        'tab-item-active': this.state === 'my' ,
      };
    }

    goTab(tab: string): void{
      this.router.navigate([tab])
    }
}
