import { NgModule } from '@angular/core';
import { ProductListComponent } from './productList/productList.component';
import { MyProductComponent } from './myProduct/myProduct.component';
import { HotProductComponent } from './hotProduct/hotProduct.component';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../../app/directive/tab/tab.component';
import  {JdbPickerSelector}  from '../../app/directive/jdbPickerSelector/jdbPickerSelector.component';
import { IonicApp, IonicModule } from 'ionic-angular';

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
    JdbPickerSelector
  ]
})
export class IndexModule {}
