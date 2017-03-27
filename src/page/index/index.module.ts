import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule } from 'ionic-angular';

import { ProductListComponent } from './productList/productList.component';
import { MyProductComponent } from './myProduct/myProduct.component';
import { HotProductComponent } from './hotProduct/hotProduct.component';

import { TabComponent } from '../../app/directive/tab/tab.component';


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
  ]
})
export class IndexModule {}
