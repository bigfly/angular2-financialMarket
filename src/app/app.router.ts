import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexDetailComponent }   from '../page/detail/index/index.component';
import { BuyProductComponent }   from '../page/buyProduct/index/index.component';
import { HotProductComponent }   from '../page/index/hotProduct/hotProduct.component';
import { ProductListComponent }   from '../page/index/productList/productList.component';
import { MyProductComponent }   from '../page/index/myProduct/myProduct.component';
import { IndexOrderListComponent }   from '../page/orderList/index.component';

const routes: Routes = [
  { path: '', redirectTo: '/hotProduct', pathMatch: 'full' },
  { path: 'hotProduct',  component: HotProductComponent },
  { path: 'productList',  component: ProductListComponent },
  { path: 'myProduct',  component: MyProductComponent },
  { path: 'detail/:businessType/:productId/:productType',  component: IndexDetailComponent },
  { path: 'buyProduct/:businessType/:productId/:productType',  component: BuyProductComponent },
  { path: 'orderList/:productType/:type',  component: IndexOrderListComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
