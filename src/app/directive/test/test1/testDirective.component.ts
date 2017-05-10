import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-test1',
  styleUrls: ['./testDirective.component.scss'],
  templateUrl: './testDirective.component.html',
})
export class Test1Component {

  private _name = '';

  @Input()
  set name(name: string) {
    console.log('this is set');
    this._name = (name && name.trim()) || '<no name set>';
  }
  get name(): string { 
      console.log('this is get');
      return this._name; 
    }
}