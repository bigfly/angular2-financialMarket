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

    }

    goTab(tab: string): void{
      this.router.navigate([tab])
    }
}
