import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';



import { Test1Component } from './test1/test1.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(Test1Component)
    ],
  declarations: [
    Test1Component
  ]
})
export class IndexTestModule {}



