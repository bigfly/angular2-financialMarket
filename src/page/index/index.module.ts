import { NgModule } from '@angular/core';
import { ProductListComponent } from './productList/productList.component';
import { MyProductComponent } from './myProduct/myProduct.component';
import { HotProductComponent } from './hotProduct/hotProduct.component';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../../app/directive/tab/tab.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProductListComponent,
    MyProductComponent,
    HotProductComponent,
    TabComponent
  ],
  bootstrap: [
    ProductListComponent
  ]
})
export class IndexModule {}
