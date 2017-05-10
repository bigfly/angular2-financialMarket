import { Component, Input, SimpleChanges, OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';
@Component({
  selector: 'app-test2',
  styleUrls: ['./testDirective.component.scss'],
  templateUrl: './testDirective.component.html',
})

export class Test2Component implements OnInit{

  @Input() name: any;

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log('ngOnChange=============',changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}