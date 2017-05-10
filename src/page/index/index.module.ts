import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule } from 'ionic-angular';

import { ProductListComponent } from './productList/productList.component';
import { MyProductComponent } from './myProduct/myProduct.component';
import { HotProductComponent } from './hotProduct/hotProduct.component';

import { TabComponent } from '../../app/directive/tab/tab.component';
import { Test1Component } from '../../app/directive/test/test1/testDirective.component';
import { Test2Component } from '../../app/directive/test/test2/testDirective.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(HotProductComponent)
  ],
  declarations: [
    ProductListComponent,
    MyProductComponent,
    HotProductComponent,
    TabComponent,
    Test1Component,
    Test2Component
  ]
})
export class IndexModule {}
